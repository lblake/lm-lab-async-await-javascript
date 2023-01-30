const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve('done'), 2000);
  } else {
    // Failure
    setTimeout(() => reject('error'), 2000);
  }
});

// Your solution(s) to exercise001 here!

/*Task 1 solution */

promise
  .then((response) => {
    console.log(`Yay! Promise resolved with response: ${response}`);
  })
  .catch((error) => {
    console.log(`Boo. Promise rejected with response: ${error}`);
  });

/* Task 2 solution */

const asyncPromise = async () => {
  try {
    const response = await promise;
    if (response) {
      console.log(`Yay! Promise resolved with response: ${response}`);
    }
  } catch (error) {
    console.log(`Boo. Promise rejected with response: ${error}`);
  }
};

asyncPromise();

/* Top level await*/

try {
  const topLevel = await promise;
  if (response) {
    console.log(`Yay! Promise resolved with response: ${topLevel}`);
  }
} catch (error) {
  console.log(`Boo. Promise rejected with response: ${error}`);
}
