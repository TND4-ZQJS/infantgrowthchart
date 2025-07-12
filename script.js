<script>
[span_0](start_span)// Data tables derived from the provided PDFs[span_0](end_span).
// L, M, S parameters are used to calculate Z-scores: Z = ((X/M)^L - 1) / (L * S)

const growthData = {
    'boy': {
        'length': [
            [span_1](start_span)// Month, L, M (cm), S, Z-scores/Percentiles from sources[span_1](end_span)
            { month: 0, L: 1, M: 49.8842, S: 0.03795 },
            { month: 1, L: 1, M: 54.7244, S: 0.03557 },
            { month: 2, L: 1, M: 58.4249, S: 0.03424 },
            { month: 3, L: 1, M: 61.4292, S: 0.03328 },
            { month: 4, L: 1, M: 63.8860, S: 0.03257 },
            { month: 5, L: 1, M: 65.9026, S: 0.03204 },
            { month: 6, L: 1, M: 67.6236, S: 0.03165 },
            { month: 7, L: 1, M: 69.1645, S: 0.03139 },
            { month: 8, L: 1, M: 70.5994, S: 0.03124 },
            { month: 9, L: 1, M: 71.9687, S: 0.03117 },
            { month: 10, L: 1, M: 73.2812, S: 0.03118 },
            { month: 11, L: 1, M: 74.5388, S: 0.03125 },
            { month: 12, L: 1, M: 75.7488, S: 0.03137 },
            { month: 13, L: 1, M: 76.9186, S: 0.03154 },
            { month: 14, L: 1, M: 78.0497, S: 0.03174 },
            { month: 15, L: 1, M: 79.1458, S: 0.03197 },
            { month: 16, L: 1, M: 80.2113, S: 0.03222 },
            { month: 17, L: 1, M: 81.2487, S: 0.03250 },
            { month: 18, L: 1, M: 82.2587, S: 0.03279 },
            { month: 19, L: 1, M: 83.2418, S: 0.03310 },
            { month: 20, L: 1, M: 84.1996, S: 0.03342 },
            { month: 21, L: 1, M: 85.1348, S: 0.03376 },
            { month: 22, L: 1, M: 86.0477, S: 0.03410 },
            { month: 23, L: 1, M: 86.9410, S: 0.03445 },
            { month: 24, L: 1, M: 87.8161, S: 0.03479 }
        ],
        'weight': [
            [span_2](start_span)// Month, L, M (kg), S, Z-scores/Percentiles from sources[span_2](end_span)
            { month: 0, L: 0.3487, M: 3.3464, S: 0.14602 },
            { month: 1, L: 0.2297, M: 4.4709, S: 0.13395 },
            { month: 2, L: 0.1970, M: 5.5675, S: 0.12385 },
            { month: 3, L: 0.1738, M: 6.3762, S: 0.11727 },
            { month: 4, L: 0.1553, M: 7.0023, S: 0.11316 },
            // Data for boys weight beyond 4 months requires accessing more data from the source PDFs, 
            [span_3](start_span)// but the provided snippet only included data up to month 4[span_3](end_span).
        ]
    },
    'girl': {
        'length': [
            [span_4](start_span)// Month, L, M (cm), S, Z-scores/Percentiles from sources[span_4](end_span)
            { month: 0, L: 1, M: 49.1477, S: 0.03790 },
            { month: 1, L: 1, M: 53.6872, S: 0.03640 },
            { month: 2, L: 1, M: 57.0673, S: 0.03568 },
            { month: 3, L: 1, M: 59.8029, S: 0.03520 },
            { month: 4, L: 1, M: 62.0899, S: 0.03486 },
            { month: 5, L: 1, M: 64.0301, S: 0.03463 },
            { month: 6, L: 1, M: 65.7311, S: 0.03448 },
            { month: 7, L: 1, M: 67.2873, S: 0.03441 },
            { month: 8, L: 1, M: 68.7498, S: 0.03440 },
            { month: 9, L: 1, M: 70.1435, S: 0.03444 },
            { month: 10, L: 1, M: 71.4818, S: 0.03452 },
            { month: 11, L: 1, M: 72.7710, S: 0.03464 },
            { month: 12, L: 1, M: 74.0150, S: 0.03479 },
            { month: 13, L: 1, M: 75.2176, S: 0.03496 },
            { month: 14, L: 1, M: 76.3817, S: 0.03514 },
            { month: 15, L: 1, M: 77.5099, S: 0.03534 },
            { month: 16, L: 1, M: 78.6055, S: 0.03555 },
            { month: 17, L: 1, M: 79.6710, S: 0.03576 },
            { month: 18, L: 1, M: 80.7079, S: 0.03598 },
            { month: 19, L: 1, M: 81.7182, S: 0.03620 },
            { month: 20, L: 1, M: 82.7036, S: 0.03643 },
            { month: 21, L: 1, M: 83.6654, S: 0.03666 },
            { month: 22, L: 1, M: 84.6040, S: 0.03688 },
            { month: 23, L: 1, M: 85.5202, S: 0.03711 },
            { month: 24, L: 1, M: 86.4153, S: 0.03734 }
        ],
        'weight': [
            [span_5](start_span)// Month, L, M (kg), S, Z-scores/Percentiles from sources[span_5](end_span)
            { month: 0, L: 0.3809, M: 3.2322, S: 0.14171 },
            { month: 1, L: 0.1714, M: 4.1873, S: 0.13724 },
            { month: 2, L: 0.0962, M: 5.1282, S: 0.13000 },
            { month: 3, L: 0.0402, M: 5.8458, S: 0.12619 },
            { month: 4, L: -0.0050, M: 6.4237, S: 0.12402 },
            // Data for girls weight beyond 4 months requires accessing more data from the source PDFs, 
            [span_6](start_span)// but the provided snippet only included data up to month 4[span_6](end_span).
        ]
    }
};

// Function to calculate age in months (rounded to the nearest whole month for lookup)
function calculateAgeInMonths(dob, measurementDate) {
    const birth = new Date(dob);
    const measurement = new Date(measurementDate);
    
    let ageInMonths = (measurement.getFullYear() - birth.getFullYear()) * 12;
    ageInMonths -= birth.getMonth();
    ageInMonths += measurement.getMonth();

    // Calculate the day difference for more precise rounding to the nearest month
    const daysDifference = measurement.getDate() - birth.getDate();
    if (daysDifference >= 15) {
        ageInMonths += 1;
    }

    return ageInMonths;
}

// Function to find the relevant L, M, S parameters for the calculated age
function getLMS(gender, measureType, ageMonths) {
    [span_7](start_span)[span_8](start_span)// We only have data up to 24 months (2 years) from the provided PDFs[span_7](end_span)[span_8](end_span).
    if (ageMonths > 24) {
        return null;
    }

    // Find the closest data point by month
    const dataSet = growthData[gender][measureType];
    
    // Find the data point for the exact month or the closest available month
    // In a production environment, interpolation between months is recommended, 
    // but we will use the exact month provided in the PDF data.
    return dataSet.find(d => d.month === ageMonths);
}

// Function to calculate Z-score (WHO formula)
function calculateZScore(value, L, M, S) {
    if (L === 0) {
        return Math.log(value / M) / S;
    } else {
        return (Math.pow(value / M, L) - 1) / (L * S);
    }
}

// Standard Normal Distribution (Cumulative Distribution Function)
// Used to convert Z-score to percentile. (Derived from standard math libraries)
function standardNormalCDF(z) {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.421413741;
    const p = 0.3275911;

    // A simple approximation for the standard normal CDF
    const sign = z >= 0 ? 1 : -1;
    const absZ = Math.abs(z);
    
    const t = 1.0 / (1.0 + p * absZ);
    const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-0.5 * absZ * absZ);
    
    return 0.5 * (1.0 + sign * y);
}

// Function to calculate percentile from Z-score
function calculatePercentile(zScore) {
    return standardNormalCDF(zScore) * 100;
}

// Main calculation and display logic
document.getElementById('growthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const measurementDate = document.getElementById('measurementDate').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const length = parseFloat(document.getElementById('length').value);
    const resultElement = document.getElementById('result');

    if (!gender || !dob || !measurementDate || isNaN(weight) || isNaN(length)) {
        resultElement.textContent = "Please fill in all fields with valid data.";
        return;
    }

    // Calculate age at measurement in months
    const ageMonths = calculateAgeInMonths(dob, measurementDate);

    // Retrieve growth data (L, M, S) for the specific age and gender
    const lengthData = getLMS(gender, 'length', ageMonths);
    const weightData = getLMS(gender, 'weight', ageMonths);

    if (!lengthData || !weightData) {
        resultElement.textContent = `Data for ${ageMonths} months is not available in the provided charts (limited to 0-24 months for length and 0-4 months for weight in the available snippets for boys and girls).`;
        return;
    }

    // Calculate Z-scores and Percentiles
    const lengthZScore = calculateZScore(length, lengthData.L, lengthData.M, lengthData.S);
    const lengthPercentile = calculatePercentile(lengthZScore);

    const weightZScore = calculateZScore(weight, weightData.L, weightData.M, weightData.S);
    const weightPercentile = calculatePercentile(weightZScore);

    // Display results
    resultElement.innerHTML = `
        <p>Age at Measurement: ${ageMonths} months</p>
        <h2>Results:</h2>
        <p><strong>Length/Height Percentile:</strong> ${lengthPercentile.toFixed(1)}%</p>
        <p><strong>Weight Percentile:</strong> ${weightPercentile.toFixed(1)}%</p>
    `;
});
</script>
