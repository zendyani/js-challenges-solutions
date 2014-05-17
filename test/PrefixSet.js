function solution(A) {
    if (A.length == 1)
        return 0;
    var index = 0, arr = [];
    for (var i=0; i<A.length; i++){
        if (!arr[A[i]]){
            arr[A[i]] = true;
            index = i;
        }
    }
    return index;
}