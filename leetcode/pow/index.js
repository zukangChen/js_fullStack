/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 
 * 计算x的n次方
 * x > -100 &&  x <100 && n >= -2147483648 && n<=2147483647
 */
var myPow = function(x, n) {
    var sum =1.0;
    if (x > -100 &&  x <100 && n >= -2147483648 && n<=2147483647){
        console.log('进来了')
       
        if(n==0){
            return 1;
        }
        if(n>0){
            for(let i=1;i<=n;i++){
                sum = sum*x;
            }
            return sum;
        }
        if(n<0){
            for(let i=n;i<0;i++){
                sum = sum*x;
            }
            return 1.0/sum;
        }
        // for(let i=n;i!=0;i>>2){
        //         if(i %2 != 0){
        //             sum =sum*x;
        //         }
        //        x=x*x;
        //     }
        //    console.log(sum);
        //     return n<0 ? 1.0/sum : sum;
        // }

    
    else{
        sum =0.0;
        return sum
    }
}
};
console.log(myPow(2,-3));
// console.log(myPow(1.0000,-2147483648));
// myPow(106,1);
