document.getElementById("calculate").addEventListener("click", async function () {
  const gender = document.getElementById("gender").value;
  const dob = new Date(document.getElementById("dob").value);
  const measurementDate = new Date(document.getElementById("measurementDate").value);
  const length = parseFloat(document.getElementById("length").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!gender || !dob || !measurementDate || isNaN(length) || isNaN(weight)) {
    result.innerText = "Please fill in all fields correctly.";
    return;
  }

  const ageDays = Math.floor((measurementDate - dob) / (1000 * 60 * 60 * 24));
  const ageWeeks = ageDays / 7;
  const ageMonths = ageDays / 30.4375;

  const useWeeks = ageWeeks <= 13;
  const age = useWeeks ? Math.round(ageWeeks) : Math.round(ageMonths);
  const file = `data/${gender}_${useWeeks ? "0_13" : "0_24"}.json`;

  try {
    console.log("Fetching file:", file);
    console.log("Age:", age, useWeeks ? "(weeks)" : "(months)");

    const response = await fetch(file);
    const data = await response.json();

    const entry = data.find(d => d.age === age);
    if (!entry) {
      result.innerText = "No data available for this age.";
      return;
    }

    const calculateZ = (val, stats) => {
      const { L, M, S } = stats;
      return (Math.pow(val / M, L) - 1) / (L * S);
    };

    const zWeight = calculateZ(weight, entry.weight);
    const zLength = calculateZ(length, entry.length);

    const zToPercentile = z => {
      const p = 0.5 * (1 + erf(z / Math.SQRT2));
      return Math.round(p * 100);
    };

    const erf = x => {
      // Approximation of error function
      const a1 =  0.254829592, a2 = -0.284496736,
            a3 =  1.421413741, a4 = -1.453152027,
            a5 =  1.061405429, p  = 0.3275911;
      const sign = x < 0 ? -1 : 1;
      x = Math.abs(x);
      const t = 1.0 / (1.0 + p * x);
      const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
      return sign * y;
    };

    const percentileWeight = zToPercentile(zWeight);
    const percentileLength = zToPercentile(zLength);

    const conclusion = (percentileWeight >= 50 && percentileWeight <= 99 &&
                        percentileLength >= 50 && percentileLength <= 99)
                      ? "Standard"
                      : "May need further underwriting requirements";

    result.innerHTML = `
      <div>Weight Percentile: ${percentileWeight}th</div>
      <div>Length Percentile: ${percentileLength}th</div>
      <div><strong>Conclusion: ${conclusion}</strong></div>
    `;
  } catch (err) {
    console.error("Error fetching or processing data:", err);
    result.innerText = "Error loading data.";
  }
});
