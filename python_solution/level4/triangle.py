def solution(A):
    # write your code in Python 2.7
    s = sorted(A)
    for i in range(len(s)-2):
        if (s[i] + s[(i+1)]) > s[(i+2)]:
            return 1
    return 0