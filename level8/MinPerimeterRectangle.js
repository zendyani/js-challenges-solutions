function solution(N) {
    var min = (N + 1) * 2;
    for (var i=2; i<=Math.sqrt(N); i++){
        if(N/i % 1 === 0){
            min = (((N/i + i)* 2) < min) ? ((N/i + i) * 2): min;   
        }
    }
    return min;
}