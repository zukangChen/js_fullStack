let arr = [];
arr.push("{");
// console.log(arr,arr.length);
// console.log(arr[0]);
// console.log(typeof arr);//typeof 获得变量的类型
arr.push("}");
// console.log(arr);
arr.pop();//从数组的末尾拿出一个元素
// console.log(arr);
arr.unshift("]");//从数组的最前面插入一个元素
console.log(arr);
arr.shift();//清除数组中第一个
console.log(arr);
console.log('------',arr);
arr.forEach(item =>{
    console.log(item);
})

// 如何来做匹配规则
let obj ={};
obj["{"] = "}";
obj["["] = "]";
obj["("] = ")";
let sta = ["("];
let s = ")";

 if(obj[sta[sta.length-1]]===s)
{
    sta.pop();
}
console.log(sta.length);
