function solution(A) {
    var len = A.length;
    var a = A.sort(function(a,b){return a-b;});
    for (var i=0; i<len; i++){
        if((i+1) != a[i])
            return 0;
    }
    return 1;
} 