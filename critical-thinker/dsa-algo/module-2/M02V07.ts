//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

const groupSurvey = surveyResponses?.reduce(
  (prev: { [key: string]: number }, curr: string) => {
    if (!prev[curr]) {
      prev[curr] = 0;
    }
    prev[curr]++;
    return prev;
  },
  {}
);

console.log(groupSurvey);
