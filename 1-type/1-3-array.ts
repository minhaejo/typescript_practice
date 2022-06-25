{
    //Array
    const fruits:string[] = ["apple","banana"]
    const scroes:Array<number> = [1,2,3,4]

    function printArray(fruits:readonly string[]) {
        
    }
    //Tuple 사용 권장 x index처럼 접근하는거 가독성 정말 떨어짐
    // interface , typealias , class 사용권장
    let students : [string,number]
    students=["name",123]
    students[0] //name
    students[1] //123

    const [name,age] = students; // 구조분해


}