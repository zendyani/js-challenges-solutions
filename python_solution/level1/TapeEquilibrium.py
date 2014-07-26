def solution(A):
    # write your code in Python 2.7
    totalL = A[0]
    totalR = sum(A[1:])
    mini = abs(totalR - totalL)
    for i in range(1, len(A)-1):
        totalL += A[i]
        totalR -= A[i] 
        if abs(totalR - totalL) < mini:
            mini = abs(totalR - totalL)
    return mini
    pass
