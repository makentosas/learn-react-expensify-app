import { resolve } from "url";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Tomas',
            age:34
        });
        // reject('Went wrong!');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');