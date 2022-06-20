let grades = {
  midterm: {
    grade: 3.3,
    weight: 1,
  },
  project: {
    grade: 4.0,
    weight: 1,
  },
  final: {
    grade: 3.2,
    weight: 2,
  },
};

function gpa(object) {
  let gradesToWeight = Object.values(object);
  console.log(gradesToWeight);
  let gradeSum = 0;
  let weightSum = 0;
  gradesToWeight.forEach((thingGraded) => {
    gradeSum += thingGraded.grade * thingGraded.weight;
    weightSum += thingGraded.weight;
  });
  return gradeSum / weightSum;
}
console.log(gpa(grades));

//* My Replit Code
// function gpa(object) {
//   let gradesToWeight = Object.keys(object);
//   console.log(gradesToWeight);
//   let gradeSum = 0;
//   let weightSum = 0;

//   gradesToWeight.forEach((thingGraded) => {
//     gradeSum += object[thingGraded].grade * object[thingGraded].weight;
//     weightSum += object[thingGraded].weight;
//   });
//   weightedGrade = gradeSum / weightSum;
//   console.log(weightedGrade);
//   return weightedGrade;
// }

// console.log("The final GPA is " + gpa(grades));
// should print: 'The final GPA is 3.5'
