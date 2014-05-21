function solution(A) {
    var indice = -1,
        right = A.length > 0 ? A.reduce(function(prev,curr){return prev+curr;}) : 0,
        left = 0;  
    
    for (var i=0; i<A.length; i++){
        right -= A[i];
        if(right == left)
            indice = i;
        left += A[i];
    }
    
    return indice;
}