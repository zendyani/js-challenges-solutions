def solution(X, A):
    # write your code in Python 2.7
    dico = dict({k: -1 for k in range(1,X+1)})
    found = 0
    
    for i in range(0,len(A)):
        if A[i] in dico:
            if dico[A[i]] == -1:
                dico[A[i]] = 1
                found += 1
        
        if found == X:
            return i
    
    return -1        
    pass
