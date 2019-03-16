 如何实现红包算法
 固定金额的红包，由若干个人来抢，规则？

 1. 抢到金额之和等于红包金额，不能超过也不能少于。
 2. 手气王，0.01至少。金额随机(使用随机数)保证公平，每个人抢到金额的概率要相同。


计算过程，变量计算的本质
 发钱？  total 总和  restAmount 剩余 刚开始这两个值是相等的 
         Null 所要发的总个数  restNull 剩下的个数
         随机一次，restAmount = restAmount - 随机数，然后restNull--,直到restNull=1,直接把剩下的钱全部给他。 for(i=0 ; i <Null-1; i++) 每次随机数的钱就是我们需要的，我们把他push到数组里，
 要使总和是所发金额  

 Math 是数学对象，Math.random()产生一个0-1之间的随机数，parseFloat()把一个数解析为一个浮点数，类型的转换"23.1" =>23.1 parseFloat
 parseFloat(Math.random()).toFixed(2);这是将随机数变为有两位小数的浮点数
 Math.floor(2.3)=2 这是向下取整  Math.ceil() 向下取整    Math.round() 四舍五入取整

 得到一个0-9之间的随机数 let  ran = Math.floor((Math.random()*9));
                        console.log(ran);

 得到一个在最大值与最小值之间的整数  let max = 10 ;
let min = 5 ;
let ran_n =Math.floor( Math.random()*(max-min)+min);
console.log(ran_n);                       
