"use strict";

// Level //

// ---task-1--- //

const newPromise = new Promise((resolve) => {
  resolve("Hello from first promise!");
}).then((value) => {
  console.log(value);
});

// ---task-2--- //

function delayedMsg(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, 2000);
  }).then(() => {
    console.log("Hello from function delayedMsg!");
  });
}

delayedMsg();

// ---task-3--- //

const promiseError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("There is some error!"));
  }, 2000);
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });

// ---task-4--- //

function showResults(...promises) {
  return Promise.all(promises)
    .then((values) => {
      return values.forEach((value) => {
        return console.log(value);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
const firstPromise = new Promise((resolve) => {
  resolve("First promise");
});
const secondPromise = new Promise((resolve) => {
  resolve("Second promise");
});
const thirdPromise = new Promise((resolve) => {
  resolve("Third promise");
});

showResults(firstPromise, secondPromise, thirdPromise);

// ---task-5--- //

function showFirst(...promises) {
  return Promise.any(promises)
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise - 1 with error");
  }, 600);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise - 2");
  }, 800);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise - 3");
  }, 900);
});

showFirst(promise1, promise2, promise3);

// Level 2 //

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(3000).then(() => alert("In 3 seconds it was done"));

// Level 3 //

function rewrittenFunc(arg1, arg2, time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error("Result is not odd!"));
      }
    }, time);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}

rewrittenFunc(12, 11, 3000);

// Level 4 //

console.log("Start!");

function fibFunc(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n <= 1) {
        resolve(n);
      } else {
        Promise.all([fibFunc(n - 1), fibFunc(n - 2)]).then(([a, b]) => {
          resolve(a + b);
        });
      }
    }, 0);
  });
}
fibFunc(25).then((result) => {
  console.log("Fibonacci number:", result);
});

console.log("End!");
