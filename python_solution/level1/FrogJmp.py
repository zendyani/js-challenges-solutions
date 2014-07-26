def solution(X, Y, D):
    # write your code in Python 2.7
    dist = Y - X
    if dist % D == 0:
        return  dist / D
    else:
        return  (dist / D) + 1
