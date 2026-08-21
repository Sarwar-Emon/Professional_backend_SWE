const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task one completed!");
    } else {
        reject("Task failed!");
    }

},2000);
const myPromiseTwo = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task Two completed!");
    } else {
        reject("Task failed!");
    }

}, 10);

myPromise.then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
myPromiseTwo.then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });