function solution(A) {
    var left = A[0],
        right = A.slice(1).reduce(function(prev, cur){ return prev + cur; }),
        min = Math.abs(left - right);

    for (var i=1; i<A.length-1; i++){
        left += A[i];
        right -= A[i];
        if (Math.abs(left-right) < min)
        	min = Math.abs(left-right);
    }
    return min;
}
