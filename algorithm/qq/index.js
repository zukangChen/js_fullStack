let qq_number ="631758924";
// 函数表达式
/**
 * 
 * @param  qq type String
 * @return type bool
 * @功能 判断qq号是否合格
 * @desc 只能是数字 长度5位以上，13位以内
 */
const is_valid_qq = (qq) =>{
//console.log(qq);
if(!qq) return false ;
if(/^[0-9]{5,13}$/.test(qq))
{
return true;
}else{
    return false;
}
};
console.log(is_valid_qq(qq_number));

//选择了一种数据结构 数组
let enc_qq = [6,3,1,7,5,8,9,2,4];
    qq = [];
    head = 0;//指针，开始位置
    tail = enc_qq.length;;//指针，尾部
  
    
    //拿到一个正确的数字，操作原来的两个数字
    while(head<tail)
    {
    qq.push(enc_qq[head])
    head++;
      //如何将第二个数移到队尾？
    enc_qq[tail]= enc_qq[head];
    head++;
    tail++;
    console.log(tail);
    }
    console.log(qq);