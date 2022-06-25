{
    //number
    const num:number = 10

    //string
    const string:string ="dd"

    //boolean
    const boal:boolean =true

    //undifined
    let age:number|undefined
    age=undefined
    age=1;

    //null
    let person2:string | null
    person2="asd"
    person2=null 

    // unknown 가급적 사용하지 않음
    let notSure : unknown = 0;
    notSure = "he"
    notSure = "true"

    //any 가급적 사용하지 않음
    let anything: any = 0;
    anything = "hello";

    //void 리턴값이 없으면 
    function  print() :void {
        console.log("hello")
        return;
    }

     let unusable :void = undefined // 똥코드 이렇게안씀

     // never //return하지 않는 함수 어플리케이션에서 에러를 던질때 씀

     function throwError(message:string):never {
         //message -> server (log)
         throw new Error(message);
     }

    //  return; 
    let obj: object = [1,4]; // 구림 객체인데 배열포함이라 이런 광범위한 타입은 권장하지 않는다

    function acceptSomeObject(obj:object) {
    
    }

    acceptSomeObject({name:"minhae"});
    acceptSomeObject({animal:"dog"});
}