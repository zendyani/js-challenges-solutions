function solution(N, A) {
    var c = new Array(N+1).join(0).split("").map(function(e){return 0;});
    var max = 0;
    for (var i=0; i<A.length; i++){
        if (A[i] >= 1 && A[i] <= N){
            c[A[i]-1] += 1; 
            max = c[A[i]-1] > max ? c[A[i]-1] : max;
        }
        if (A[i] == N + 1)
            c = c.map(function(e){return max;});
    }
    return c;
}