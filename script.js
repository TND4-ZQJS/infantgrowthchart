<script>
    // Constants from WHO Growth Standards (L, M, S parameters)
    // Data extracted from LFA-WFA_0-2.pdf, Z-scores_0-2.pdf, LFA-WFA_zscore_0-13.pdf, LFA-WFA_percentile_0-13.pdf

    const growthData = {
        boy: {
            length: {
                [span_0](start_span)// Length-for-age Boys 0-24 months (LFA-WFA_0-2.pdf)[span_0](end_span)
                0: { L: 1, M: 49.8842, S: 0.03795 },
                1: { L: 1, M: 54.7244, S: 0.03557 },
                2: { L: 1, M: 58.4249, S: 0.03424 },
                3: { L: 1, M: 61.4292, S: 0.03328 },
                4: { L: 1, M: 63.8860, S: 0.03257 },
                5: { L: 1, M: 65.9026, S: 0.03204 },
                6: { L: 1, M: 67.6236, S: 0.03165 },
                7: { L: 1, M: 69.1645, S: 0.03139 },
                8: { L: 1, M: 70.5994, S: 0.03124 },
                9: { L: 1, M: 71.9687, S: 0.03117 },
                10: { L: 1, M: 73.2812, S: 0.03118 },
                11: { L: 1, M: 74.5388, S: 0.03125 },
                12: { L: 1, M: 75.7488, S: 0.03137 },
                13: { L: 1, M: 76.9186, S: 0.03154 },
                14: { L: 1, M: 78.0497, S: 0.03174 },
                15: { L: 1, M: 79.1458, S: 0.03197 },
                16: { L: 1, M: 80.2113, S: 0.03222 },
                17: { L: 1, M: 81.2487, S: 0.03250 },
                18: { L: 1, M: 82.2587, S: 0.03279 },
                19: { L: 1, M: 83.2418, S: 0.03310 },
                20: { L: 1, M: 84.1996, S: 0.03342 },
                21: { L: 1, M: 85.1348, S: 0.03376 },
                22: { L: 1, M: 86.0477, S: 0.03410 },
                23: { L: 1, M: 86.9410, S: 0.03445 },
                24: { L: 1, M: 87.8161, S: 0.03479 }
            },
            weight: {
                [span_1](start_span)// Weight-for-age Boys 0-2 months (LFA-WFA_0-2.pdf)[span_1](end_span)
                0: { L: 0.3487, M: 3.3464, S: 0.14602 },
                1: { L: 0.2297, M: 4.4709, S: 0.13395 },
                2: { L: 0.1970, M: 5.5675, S: 0.12385 }
                [span_2](start_span)// Note: The provided files only include Weight-for-age data up to month 2 for boys.[span_2](end_span)
            }
        },
        girl: {
            length: {
                [span_3](start_span)// Length-for-age Girls 0-24 months (Z-scores_0-2.pdf)[span_3](end_span)
                0: { L: 1, M: 49.1477, S: 0.03790 },
                1: { L: 1, M: 53.6872, S: 0.03640 },
                2: { L: 1, M: 57.0673, S: 0.03568 },
                3: { L: 1, M: 59.8029, S: 0.03520 },
                4: { L: 1, M: 62.0899, S: 0.03486 },
                5: { L: 1, M: 64.0301, S: 0.03463 },
                6: { L: 1, M: 65.7311, S: 0.03448 },
                7: { L: 1, M: 67.2873, S: 0.03441 },
                8: { L: 1, M: 68.7498, S: 0.03440 },
                9: { L: 1, M: 70.1435, S: 0.03444 },
                10: { L: 1, M: 71.4818, S: 0.03452 },
                11: { L: 1, M: 72.7710, S: 0.03464 },
                12: { L: 1, M: 74.0150, S: 0.03479 },
                13: { L: 1, M: 75.2176, S: 0.03496 },
                14: { L: 1, M: 76.3817, S: 0.03514 },
                15: { L: 1, M: 77.5099, S: 0.03534 },
                16: { L: 1, M: 78.6055, S: 0.03555 },
                17: { L: 1, M: 79.6710, S: 0.03576 },
                18: { L: 1, M: 80.7079, S: 0.03598 },
                19: { L: 1, M: 81.7182, S: 0.03620 },
                20: { L: 1, M: 82.7036, S: 0.03643 },
                21: { L: 1, M: 83.6654, S: 0.03666 },
                22: { L: 1, M: 84.6040, S: 0.03688 },
                23: { L: 1, M: 85.5202, S: 0.03711 },
                24: { L: 1, M: 86.4153, S: 0.03734 }
            },
            weight: {
                [span_4](start_span)[span_5](start_span)// Weight-for-age Girls 0-13 weeks (LFA-WFA_zscore_0-13.pdf, LFA-WFA_percentile_0-13.pdf)[span_4](end_span)[span_5](end_span)
                // Data is converted from weeks to approximate months for use in this calculator where available.
                0: { L: 0.3809, M: 3.2322, S: 0.14171 }, // Week 0
                1: { L: 0.2671, M: 3.3388, S: 0.14600 }, // Week 1
                2: { L: 0.2304, M: 3.5693, S: 0.14339 }, // Week 2
                3: { L: 0.2024, M: 3.8352, S: 0.14060 }, // Week 3
                4: { L: 0.1789, M: 4.0987, S: 0.13805 }, // Week 4
                5: { L: 0.1582, M: 4.3476, S: 0.13583 }, // Week 5
                6: { L: 0.1395, M: 4.5793, S: 0.13392 }, // Week 6
                7: { L: 0.1224, M: 4.7950, S: 0.13228 }, // Week 7
                8: { L: 0.1065, M: 4.9959, S: 0.13087 }, // Week 8
                9: { L: 0.0918, M: 5.1842, S: 0.12966 }, // Week 9
                10: { L: 0.0779, M: 5.3618, S: 0.12861 }, // Week 10
                11: { L: 0.0648, M: 5.5295, S: 0.12770 }, // Week 11
                12: { L: 0.0525, M: 5.6883, S: 0.12691 }, // Week 12
                13: { L: 0.0407, M: 5.8393, S: 0.12622 }  // Week 13
                // Note: The provided files only include Weight-for-age data up to week 13 (approx. [span_6](start_span)[span_7](start_span)3 months) for girls.[span_6](end_span)[span_7](end_span)
            }
        }
    };

    const growthForm = document.getElementById('growthForm');
    const resultElement = document.getElementById('percentileResult');
    const resultContainer = document.getElementById('result');

    // Function to calculate the Z-score (Z) based on L, M, S parameters and observed measurement (Y)
    function calculateZScore(L, M, S, Y) {
        if (L === 0) {
            return Math.log(Y / M) / S;
        } else {
            return (Math.pow(Y / M, L) - 1) / (L * S);
        }
    }

    // Function to convert Z-score to percentile using standard normal CDF (cumulative distribution function)
    function zScoreToPercentile(Z) {
        // We use a simplified approximation for the CDF (Φ(Z) = 0.5 * (1 + erf(Z / sqrt(2))))
        // Where erf is the error function. For standard normal distribution:
        const erf = (x) => {
            // approximation for erf(x)
            const a1 = 0.254829592;
            const a2 = -0.284496736;
            const a3 = 1.421413741;
            const a4 = -1.453152027;
            const a5 = 1.061405429;
            const p = 0.3275911;
            const t = 1.0 / (1.0 + p * Math.abs(x));
            const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
            return x >= 0 ? y : -y;
        };
        // CDF approximation
        return 0.5 * (1 + erf(Z / Math.sqrt(2)));
    }

    // Function to get L, M, and S parameters for the given age, gender, and measurement type
    function getLMS(gender, type, totalMonths) {
        // If age is provided in months, use the month index for data lookup.
        const data = growthData[gender][type];

        if (data && data[totalMonths]) {
            return data[totalMonths];
        }

        return null;
    }

    growthForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form reset and page reload

        const gender = document.getElementById('gender').value;
        const ageYears = parseInt(document.getElementById('ageYears').value);
        const ageMonths = parseInt(document.getElementById('ageMonths').value);
        const measurementType = document.getElementById('measurementType').value;
        const measurementValue = parseFloat(document.getElementById('measurementValue').value);

        if (!gender || isNaN(ageYears) || isNaN(ageMonths) || !measurementType || isNaN(measurementValue)) {
            resultElement.textContent = "Please fill in all fields with valid data.";
            resultContainer.style.display = 'block';
            return;
        }

        const totalMonths = (ageYears * 12) + ageMonths;
        const lmsData = getLMS(gender, measurementType, totalMonths);

        if (lmsData) {
            const { L, M, S } = lmsData;
            const zScore = calculateZScore(L, M, S, measurementValue);
            const percentile = zScoreToPercentile(zScore);
            const percentileFormatted = (percentile * 100).toFixed(2);

            resultElement.textContent = `The percentile is: ${percentileFormatted}%`;
            resultContainer.style.display = 'block';
        } else {
            resultElement.textContent = `Data for ${measurementType} at ${ageYears} years and ${ageMonths} months for ${gender} is not available in the provided charts.`;
            resultContainer.style.display = 'block';
        }
    });
</script>

