const doSomethingAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve('Do something Async'),2000)
            : reject(new Error('Test error')) ;
    });
}

const doSomething = async()=>{
   const something =await doSomethingAsync()
    console.log(something);
}

console.log("antes");
doSomething();
console.log("despues");
