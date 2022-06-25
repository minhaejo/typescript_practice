{
// Type alias 안에서도 옵셔널 가능 그리고 객체데이터안에 다른 타입 엘리어스 사용가능
type Text = string;
const name : Text = "minhae"
const adress :Text = "seoul"
type Num = number;

type Student = {
    name:Text,
    age:Num
}

const student : Student ={
    name:"minhae",
    age:30 
}

// String Literal Types
type Name = "name"
let minhaeName :Name
minhaeName = "name"
type Json = "json"
const json : Json = "json"
}