async function calculatePercentiles() {
  const gender = document.getElementById("gender").value;
  const dob = new Date(document.getElementById("dob").value);
  const measurementDate = new Date(document.getElementById("measurementDate").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const length = parseFloat(document.getElementById("length").value);
  const result = document.getElementById("result");

  if (!gender || isNaN(dob) || isNaN(measurementDate) || isNaN(weight) || isNaN(length)) {
    result.innerText = "Please fill in all fields correctly.";
    return;
  }

  const ageDays = Math.floor((measurementDate - dob) / (1000 * 60 * 60 * 24));
  const ageWeeks = Math.floor(ageDays / 7);
  const ageMonths = Math.floor(ageDays / 30.44);

  const useWeeks = ageWeeks <= 13;
  const age = useWeeks ? ageWeeks : ageMonths;

  const file = `data/${gender}_${useWeeks ? "0_13" : "0_24"}.json`;

  try {
    const response = await fetch(file);
    const data = await response.json();

    const entry = data.find(d => d.age === age);
    if (!entry) {
      result.innerText = `No data for age ${age} ${useWeeks ? "weeks" : "months"}.`;
      return;
    }

    const weightZ = calculateZ(weight, entry.weight.L, entry.weight.M, entry.weight.S);
    const lengthZ = calculateZ(length, entry.length.L, entry.length.M, entry.length.S);

    const weightPercentile = zToPercentile(weightZ);
    const lengthPercentile = zToPercentile(lengthZ);

    const wConclusion = getConclusion(weightPercentile);
    const lConclusion = getConclusion(lengthPercentile);

    result.innerHTML = `
      Age: ${age} ${useWeeks ? "weeks" : "months"}<br><br>
      Weight: ${weightPercentile} percentile — <strong>${wConclusion}</strong><br>
      Length: ${lengthPercentile} percentile — <strong>${lConclusion}</strong>
    `;
  } catch (err) {
    result.innerText = "Error loading data.";
    console.error(err);
  }
}

function calculateZ(x, L, M, S) {
  if (L === 0) {
    return Math.log(x / M) / S;
  }
  return (Math.pow(x / M, L) - 1) / (L * S);
}

function zToPercentile(z) {
  const p = 0.5 * (1 + erf(z / Math.SQRT2));
  return Math.round(p * 100);
}

function erf(x) {
  // Approximation of the error function
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
  const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;

  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

function getConclusion(percentile) {
  return percentile >= 50 && percentile <= 99 ? "Standard" : "May need further underwriting requirements";
}
