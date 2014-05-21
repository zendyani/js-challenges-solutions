function solution(A) {
    var pass = 0, index = 0;
    for (var i=0; i<A.length; i++){
        
        if (A[i] === 0)
            index++;
        
        if (A[i] === 1)
            pass += index;
        
        if(pass > 1000000000)
            return -1;
    }
    return pass
}