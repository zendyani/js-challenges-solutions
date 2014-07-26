def solution(N, A):
    # write your code in Python 2.7
    counter = [0]*N
    maxi = 0
    for i in range(len(A)):
        if A[i] >= 1 and A[i] <= N:
            counter[(A[i]-1)] += 1
            maxi = counter[(A[i]-1)] if counter[(A[i]-1)] > maxi else maxi
            
        if A[i] > N:
            counter = [maxi]*N
    
    return counter
    pass
