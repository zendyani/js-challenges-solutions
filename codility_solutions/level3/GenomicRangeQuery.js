function solution(S, P, Q) {
    var v = {'A':1,'C':2,'G':3,'T':4};
    var s = S.split("").map(function(e){return v[e];});
    var result = [];
    var qi = 0;
    for (var i=0; i<P.length; i++){
        qi = (Q[i]==P[i])? Q[i]+1: Q[i];
        result[i] = Math.min.apply(null, s.slice(P[i],qi));
    }
    return result;
}