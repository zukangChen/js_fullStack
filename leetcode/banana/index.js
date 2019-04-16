/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas (piles,H,mid){
    //一定是H小时
    let h = 0;
    // 吃
    for (let pile of piles){
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed (piles, H){
    let lo = 1;
    let hi = Math.max(...piles);  //... 把数组变成字符串,因为Math.max()接收参数是字符串
    console.log(hi);
    while(lo <= hi){
        //lo试试
        let mid = lo + ((hi-lo) >> 1);
        console.log('-----------',mid);
        //m 正好可以吃完
        if (canEatAllBananas(piles,H,mid)){
            hi = mid-1;//将最大值改为中间值-1
        }else {
            lo = mid + 1;//将最小值改为中间值+1
        }
    }
    return lo;
}
console.log(minEatingSpeed([3,6,7,11],8));