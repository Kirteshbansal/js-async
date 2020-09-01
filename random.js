function fetchRandomNumbers(callback) {
  console.log("Fetching number...");
  setTimeout(() => {
    let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    console.log("Received random number:", randomNum);
    callback(randomNum);
  }, (Math.floor(Math.random() * 5) + 1) * 1000);
}

function fetchRandomString(callback) {
  console.log("Fetching string...");
  setTimeout(() => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("Received random string:", result);
    callback(result);
  }, (Math.floor(Math.random() * 5) + 1) * 1000);
}

fetchRandomNumbers((randomNum) => console.log(randomNum));
fetchRandomString((randomStr) => console.log(randomStr));

// Promise version of fetchRandomNumbers
function fetchRandomNumbers() {
  return new Promise((resolve, reject) => {
    console.log("Fetching number...");
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log("Received random number:", randomNum);
      resolve(randomNum);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}

fetchRandomNumbers().then(console.log);

// Promise version of fetchRandomString
function fetchRandomString() {
  return new Promise((resolve, reject) => {
    console.log("Fetching string...");
    setTimeout(() => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log("Received random string:", result);
      resolve(result);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}

fetchRandomString().then(console.log);

// Task 2
(function sumOfTwoRandomNumbers() {
  let sum = 0;
  return fetchRandomNumbers()
    .then((el) => {
      sum += el;
      console.log("sum is : " + sum);
      return fetchRandomNumbers();
    })
    .then((el) => {
      sum += el;
      console.log("sum is : " + sum);
      return sum;
    });
})().then((res) => console.log("sum of two random numbers is : " + res));

// Task 3
(function concatBoth() {
  return Promise.all([fetchRandomNumbers(), fetchRandomString()]);
})().then((arr) => console.log("concatenated String: " + arr.join("")));

// Task 4
function fetchRandomNumberTenTimes() {
  let i = 10;
  let arr = [];
  while (i > 0) {
    arr.push(fetchRandomNumbers());
    i--;
  }
  return Promise.all(arr);
}

fetchRandomNumberTenTimes()
  .then((arr) =>
    arr.reduce((acc, crr) => {
      acc += crr;
      return acc;
    }, 0)
  )
  .then((res) => console.log("Sum of 10 random numbers is: " + res));

// Async-await solution

// Async-await version of fetchRandomNumbers()
async function fetchRandomNumbers() {
  let result = await new Promise((resolve, reject) => {
    console.log("Fetching number...");
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log("Received random number:", randomNum);
      resolve(randomNum);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
  return result;
}

console.log(fetchRandomNumbers());

// Async-await version of fetchRandomString()
async function fetchRandomString() {
  let result = await new Promise((resolve, reject) => {
    console.log("Fetching string...");
    setTimeout(() => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log("Received random string:", result);
      resolve(result);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
  return result;
}

console.log(fetchRandomString());

// Async-await version of Task 2
async function sumOfTwoRandomNumbers() {
  let sum = 0;
  sum += await fetchRandomNumbers();
  console.log("sum is : " + sum);
  sum += await fetchRandomNumbers();
  console.log("sum is : " + sum);
}

sumOfTwoRandomNumbers();
