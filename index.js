
function theBeatlesPlay(arrayMusicians, arrayIntruments)
{
  // 2
  var emtArray = [];
  for (var i = 0 ; i < arrayMusicians.length; i++)
  {
   var string = arrayMusicians[i] + ' plays ' +          arrayIntruments[i];
    emtArray.push(string);
  }
  return emtArray;
}

function johnLennonFacts(arr){
    var i = 0;
    var stringA = [];
    var string ;
    while(i<arr.length){
        string = arr[i]+"!!!";
        stringA.push(string);
        i += 1;}
    return stringA;
}
