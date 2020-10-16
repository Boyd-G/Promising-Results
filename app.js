//PART I - PROMISE CHAINING
/*
slowMath
  .add(6, 2) //6+2
  .then((value) => {
    console.log(value);
    8;
    return slowMath.multiply(value, 2); //8*2
  })
  .then((value) => {
    console.log(value);
    16;
    return slowMath.divide(value, 4); //16/4
  })
  .then((value) => {
    console.log(value);
    4;
    return slowMath.subtract(value, 3); //4-3
  })
  .then((value) => {
    console.log(value);
    1;
    return slowMath.add(value, 98); //98+1
  })
  .then((value) => {
    console.log(value);
    99;
    return slowMath.remainder(value, 2); //99%2
  })
  .then((value) => {
    console.log(value);
    1;
    return slowMath.multiply(value, 50); //1*50
  })
  .then((value) => {
    console.log(value);
    50;
    return slowMath.remainder(value, 40); //50%40
  })
  .then((value) => {
    console.log(value);
    10;
    return slowMath.add(value, 32); //10+32
  })
  .then((value) => {
    console.log(value); //42
  })
  .catch((e) => {
    console.log(e);
  });
*/


//PART II ASYNC/AWAIT
async function doMath() {
  let value;
  try {
    value = await slowMath.add(6, 2);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.multiply(value, 2);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.divide(value, 4);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.subtract(value, 3);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.add(value, 98);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.remainder(value, 2);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.multiply(value, 50);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.remainder(value, 40);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
  try {
    value = await slowMath.add(value, 32);
    console.log(value);
  } catch (e) {
    console.log(e);
  }
}
doMath();
