/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function data(s)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hii");
        },s*1000)
    })
}

async function sleep (seconds) {
    let m = await data(seconds);
    console.log(m);
    console.log("Hello world");
    
}

sleep(5)