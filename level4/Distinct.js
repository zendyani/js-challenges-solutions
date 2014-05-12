function solution(A) {
    var a = A.sort();
    var distinct = 0;
    for (var i=0; i<a.length; i++){
        if (a[i] == a[i-1])
            continue;
        distinct++;
    }
    return distinct;
}