function solution(S){
	var count = 0;
    var s = S.split('');
    var j = 1;

	for (var i=0; i<s.length; i++){
	    var t = s.slice(i,i+j);
	    var r = t
	    if( t.length > 1 )
	    {
	        if (t.join('') , r.reverse().join('')){
	            count++;
	            j++;
	        }
	    }
	}

	if (count >  100000000)
		return -1
	else
		return count;
}