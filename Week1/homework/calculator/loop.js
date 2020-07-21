for (let i = 5; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`The division reminder of the number ${i} is 0`);
    break;
  }
  console.log(i);
}
