def solution(A):
    # write your code in Python 2.7
    index = 0
    count = 0
    for el in A:
        if el == 0:
            index += 1
        
        if el == 1:
            count += index
        
        if count > 1000000000:
            return -1
    return count
    pass
