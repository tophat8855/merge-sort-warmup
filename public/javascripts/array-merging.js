function merge(arr1, arr2) {
  var concatArray = arr1.concat(arr2);
  for (var i = 0; i < concatArray.length; i++) {
    for (var j = 0; j < concatArray.length- i - 1; j++) {
      if(concatArray[j] > concatArray[j+1]) {
        var holding = concatArray[j];
        concatArray[j] = concatArray[j+1];
        concatArray[j+1] = holding;
      }
    }
  }
  return concatArray;
}
