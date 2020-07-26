// Grades calculator : produces the percentage and the grade of each student based on score
const score = document.querySelector("#score-input > input");
const grade = document.querySelector("#grade-output > input");
function gradeCalculator(score) {
  let percentage =
    "(" +
    (Math.round((score / 100) * 100) + "%") +
    ")"; /*declaring the percentage variable and calculating it based on score */
  switch (true) {
    case score >= 90 &&
      score <=
        100 /* evaluates the score against different ranges and returns a grade*/:
      return (grade.value = "A " + percentage);

    case score >= 80 && score <= 89:
      return (grade.value = "B " + percentage);
    case score >= 70 && score <= 79:
      return (grade.value = "C " + percentage);

    case score >= 60 && score <= 69:
      return (grade.value = "D " + percentage);

    case score >= 50 && score <= 59:
      return (grade.value = "E " + percentage);

    case score >= 0 && score <= 49:
      return (grade.value = "F " + percentage);
  }
}

score.addEventListener("input", gradeCalculator);

// console.log(
// `You got a ${gradeCalculator(54)}!`
// ); /*logs a template string that includes the grade and the percentage*/
