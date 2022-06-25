{
    // function add(num1:number,num2:number):number {
    //     return num1 + num2
    // }

    // function jsFetchNum(id:string) : Promise<number> {
    //     //code ...
    //     //code ...
    //     //code ...
    //     return new Promise((resolve,reject)=>{
    //         resolve(100)
    //     })
        
    // }

    //optional parameter ? 붙이면 넣어도 그만 안넣어도 그만  ? undefined랑 string만가능 넣을거면 스트링넣어라 라는뜻 
    function printName(firstName:string,lastName?:string) {
        console.log(firstName)
        console.log(lastName) //undefined
    }
    printName("minhae","jo")
    printName("minhae",undefined)
    printName("juho")
    
    //Default parameter 타입을 먼저 정하고 뒤에 디폴트값 정의
    function printMessage(message:string = "default minhae") {
        console.log(message);
    }
    printMessage();

    //Rest parameter

    const a = [1,2]
   
    console.log(...a)

    function addNumber(...numbers:number[]):number{
        return numbers.reduce((a,b)=>a+b)

    }
    console.log(addNumber(1,2))
    console.log(addNumber(1,2,3,4))
    console.log(addNumber(1,2,4,5,6,7))
    

}