def solution(S, P, Q):
    # write your code in Python 2.7
    impact = {'A':1, 'C':2, 'G':3, 'T':4}
    s = map(lambda x: impact[x] , S)
    result = []    
    for i in range(0,len(P)):
        i1 = P[i]
        i2 = Q[i] if P[i] != Q[i] else Q[i] + 1
        result.append(min(s[i1:i2]))
    return result
    pass
