function haongbao(total,num){
        const arr  = [];
        let restAmount = total;//余额初始化为总金额
        let restNum =num;

        for(let i=0;i<num-1;i++){ //还余一个人不发，最后一个人获得最后剩下的所有钱
        let amount = parseFloat(Math.random()*(restAmount/restNum *2)).toFixed(2); //获得一个平均值的两倍的随机数
        restAmount-=amount;
        restNum--;
        arr.push(amount);
        }
        arr.push(restAmount.toFixed(2));
        return arr;
}

console.log(haongbao(20,44));
