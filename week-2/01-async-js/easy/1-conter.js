
let intervalid = 10

const counter  = ()=>{
    let count = 0;
    intervalid = setInterval(()=>{
        count = count+1;
        console.log(count);
    } , 1000)
}
counter();

setTimeout(()=>{
    clearInterval(intervalid)
},5000)