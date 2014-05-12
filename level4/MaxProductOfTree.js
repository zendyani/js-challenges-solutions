function solution(A) {
    var a = A.sort(function(a,b){return a-b;});
    var len = a.length;
    return Math.max((a[len-1] * a[1] * a[0]),(a[len-3] * a[len-2] * a[len-1]));
}