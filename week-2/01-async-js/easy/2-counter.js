let count  = 1;
const counter = ()=>{
    console.log(count);
    count++;
    if(count > 4)
    {
        console.log("End");
    }
    else
    {
        setTimeout(()=>{
            counter();
        },1000);
    }
}

counter()

