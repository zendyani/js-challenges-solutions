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


/*
// an other solution to skip c.map on max assignement
function solution(N, A) {
    var obj = {key:0}
    var c = new Array(N+1).join(0).split("").map(function(e){return obj;});
    var max = 0;
    for (var i=0; i<A.length; i++){
        if (A[i] >= 1 && A[i] <= N){
            c[A[i]-1] = {key:(c[A[i]-1].key+1)}; 
            max = c[A[i]-1].key > max ? c[A[i]-1].key : max;
        }
        if (A[i] == N + 1){
            obj.key = max;
            c[A[0]-1].key = max;
        }   
    }
    c = c.map(function(e){return e.key;});
    return c;
}
*/