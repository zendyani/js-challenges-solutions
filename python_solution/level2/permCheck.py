def solution(A):
    # write your code in Python 2.7
    a = sorted(A)
    for i in range(0, len(A)):
        if (i+1) != a[i]:
            return 0
    return 1
    pass
