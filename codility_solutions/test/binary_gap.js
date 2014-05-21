function solution(N){
  var bin = (+N).toString(2).split("");
  var cmp = 0;
  var max = 0;
  
  for (var i=0; i<bin.length; i++){
    if(bin[i] === "1"){
      max = max < cmp ? cmp: max;
      cmp = 0;
    }else{
      cmp++;
    }
  }
  return max;
}