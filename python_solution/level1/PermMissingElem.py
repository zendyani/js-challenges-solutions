def solution(A):
    # write your code in Python 2.7
    length = len(A)+1
    total = (length * (length+1)) / 2

    for elem in A:
        total -= elem
    return total
    pass
