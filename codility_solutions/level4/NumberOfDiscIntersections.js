function solution(A) {
    var index=0;
    var count = 0;
    var obj = [];
    for (var i=0; i<A.length; i++){
        obj[i] = {left:i - A[i], right:i + A[i]};
    }
    obj.sort(function(a,b){
        return (a.right-a.left) - (b.right-b.left);
    });
    
    for(var j=obj.length-1; j>0; j--){
        if(obj[j].left <= obj[j-1].right){
            count += obj.length-j;
        }
    }
    
    if (count > 10000000)
        return -1;
    else if (count < 0)
        return 0;
    else 
        return count;
}