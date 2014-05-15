function solution(A) {
    var len = A.length;
    var count = 0;
    
    // in case A has only one element
    if (len === 1)
        return 0;
    
    var stack = [0];
    for (var i=1; i<len; i++){
        if (A[i] != A[i-1])
            stack.pop();
        else
            stack.push(i);
    }
    if (stack.length > 0)
        var leader = A[stack[stack.length-1]];
        for (var i=0; i<len; i++){
            if (A[i] == leader)
                count++;
        }
        if (count > (len/2))
            return stack[stack.length-1];
    else
        return -1;
}