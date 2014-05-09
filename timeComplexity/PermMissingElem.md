PermMissingElem
---------------

function solution(A) {
    var length = A.length + 1,
        totalSum = (length * (length + 1)) / 2,
        absant = totalSum;
    for (var i=0; i < A.length; i++){
        absant = absant - A[i];
    }
    return absant;
}
