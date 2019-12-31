
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
