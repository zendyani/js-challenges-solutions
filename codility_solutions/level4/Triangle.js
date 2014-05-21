function solution(A) {
    var a = A.sort(function(a,b){return a-b});
    for (var i=0; i<a.length; i++){
        if (a[i] + a[i+1] > a[i+2])
            return 1;
    }
    return 0;
}