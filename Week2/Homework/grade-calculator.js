// Grades calculator : produces the percentage and the grade of each student based on score
function gradeCalculator(score) {
  let percentage =
    "(" +
    (Math.floor((score / 100) * 100) + "%") +
    ")"; /*declaring the percentage variable and calculating it based on score */
  switch (true) {
    case score >= 90 &&
      score <=
        100 /* evaluates the score against different ranges and returns a grade*/:
      return (grade = "A " + percentage);

    case score >= 80 && score < 90:
      return (grade = "B " + percentage);
    case score >= 70 && score < 80:
      return (grade = "C " + percentage);

    case score >= 60 && score < 70:
      return (grade = "D " + percentage);

    case score >= 50 && score < 60:
      return (grade = "E " + percentage);

    case score >= 0 && score < 50:
      return (grade = "F " + percentage);
  }
}

console.log(
  `You got a ${gradeCalculator(49.6)}!`
); /*logs a template string that includes the grade and the percentage*/
