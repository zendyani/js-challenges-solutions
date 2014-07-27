def solution(A):
    occur = {}
    for elem in A:
            occur[elem] = 1
    for i in range(1,max(A)+1):
        if i not in occur:
            return i
    return 1
    pass

