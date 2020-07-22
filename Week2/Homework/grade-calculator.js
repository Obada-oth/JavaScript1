function gradeCalculator(score) {
  let percentage = "(" + (+Math.round((score / 100) * 100) + "%") + ")";
  switch (true) {
    case score >= 90 && score <= 100:
      return (grade = "A " + percentage);

    case score >= 80 && score <= 89:
      return (grade = "B " + percentage);
    case score >= 70 && score <= 79:
      return (grade = "C " + percentage);

    case score >= 60 && score <= 69:
      return (grade = "D " + percentage);

    case score >= 50 && score <= 59:
      return (grade = "E " + percentage);

    case score >= 0 && score <= 49:
      return (grade = "F " + percentage);
  }
}

console.log(`You got a ${gradeCalculator(54)}!`);
