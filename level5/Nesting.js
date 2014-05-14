function solution(S) {
    if(len === 0)
        return 1;
    
    var len = S.length,
        cmp = {
            "(":")"
        };   
    var stack = [];    
            
    for (var i=0; i<len; i++){
        if(S[i] == "(")
            stack.push(S[i]);
        else {
            var char = stack.pop();
            if(S[i] != cmp[char])
                return 0;   
        }
    }
    return stack.length === 0 ? 1 : 0;
}