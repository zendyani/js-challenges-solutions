def solution(A):
    left = 0 
    right = sum(A)
    
    for i in range(len(A)):
        right -= A[i] 
        if  right == left:
            return i
        left += A[i]

    return -1
    pass