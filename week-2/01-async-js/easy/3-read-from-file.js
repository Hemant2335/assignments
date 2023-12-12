const fs = require("fs")

fs.readFile("3-counter.txt" , "utf-8" , (err , data)=>{
    console.log(data);
})


for(let i = 0 ; i < 1000000 ; i++)
{
    let a = 0;
    for(let j = 0 ; j < 1000000 ; j++)
    {
        a++;
    }
}

console.log("Hloo")