二叉树
  1
2   3

根到叶子节点的路径，代表一个数字，左边代表12 右边代表13 相加等于25

              4
            9   0
          5  1
        6
  var arr1=[] arr2=[]
  function xiaoqi (head) {
    if (head) {
      arr2.push(head.val);
    }
    if(head.Left=null && head.Right == null ) {
      arr1.push(arr2);
    }
    xiaoqi(head.Left);
    xiaoqi(head.Right)
  }