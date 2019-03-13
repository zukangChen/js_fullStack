//验证字符串的正确性
/**
 * 功能是决定字符串中的符号是正确的
 * @param str 字符串，包含() [] {}
 */
const isValid =(str) =>{
    let arr =[];
    // 1. 空栈先入栈
    // 2. 将栈顶元素匹配的消除规则元素与待入栈的相比较，相同怎pop栈顶元素，否则入栈
    // 3. 重复2.
    // 4. 判断数组的长度返回bool值

    let obj ={};
    obj["{"] = "}";
    obj["["] = "]";
    obj["("] = ")";

    for(let i=0;i<str.length;i++)
    { if(arr.length==0)
        {
            arr.push(str[i]);
        }else if(obj[arr[arr.length-1]]===str[i])
        {
            arr.pop();
        }else
        {
    arr.push(str[i]);
    }
    console.log(arr);
}
//console.log(isValid('()'));//true
//console.log(isValid('(])'));//false

}
var str ="()";
console.log(!(isValid(str)));//true
console.log(!isValid('()[]'));//true
console.log(!isValid('([])[]'))//false