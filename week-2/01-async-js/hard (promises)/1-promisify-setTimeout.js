/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hii");
        },n*1000)
    })
}

function printdata(data)
{
    console.log(data);
}

let m = wait(5);
m.then(printdata);
