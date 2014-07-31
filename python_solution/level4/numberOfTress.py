def solution(A):
    # write your code in Python 2.7
    s = sorted(A)
    l = len(s)
    return max((s[0]*s[1]*s[l-1]), (s[l-3]*s[l-2]*s[l-1]))
    pass