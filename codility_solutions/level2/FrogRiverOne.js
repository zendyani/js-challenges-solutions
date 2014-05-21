function solution(X, A) {
    var covered = new Array(X+2).join(0).split('').map(function(elem){return -1;});
    var c = 0, index = 0;

    for (var i=0; i<A.length; i++){
        if(!covered[A[i]])
            continue;
            
        if(covered[A[i]] == -1){
            covered[A[i]] = 1;
            index = i;
            c ++; 
        }
        
        if (c == X)
            return index;
    }
    return -1;
}