function generateHashtag(str){
    return str.length>140 || str ===''? false :'#'+ str.split(' ').map(capitalize).join(' ')
//     if (str.length>140){
//         return false
//     }
//      if(str ==='null'){
//         return false
//     }
    
//    str = str.split(' ').map(word=>
//         word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//         if(str[0]!='#'){
//             str='#'+str;
//         }
//    return str;
}
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(generateHashtag('hello miss dong'));


// var s1 = str.substring(0, 1);//获取第一个字母
//     s1 = s1.toUpperCase();//将第一个字母转换为大写字母
//     var s2 = str.substring(1, str.length());//获取出第一个字母之外的字符串
//      s2 = s2.toLowerCase();//将其余转换为小写字母
//     str = s1.concat(s2);//将s1与s2拼接，并赋值给str
// return str;