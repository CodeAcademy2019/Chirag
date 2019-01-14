function check(ob,x){
  if(x in ob){
    ob[x]++;
  }
  else
  ob[x]=1;
return ob;
}

function countWords(inputWords) {
      return inputWords.reduce(check,{});
    }

    module.exports = countWords