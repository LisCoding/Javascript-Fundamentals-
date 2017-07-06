//Array.prototype.uniq
Array.prototype.uniq = function(){
  let array_uniq = [];
  for (var i = 0; i < arr.length; i++){
    if (array_uniq.includes(arr[i]) === false){
      array_uniq.push(arr[i]);
    }
  }
  return array_uniq;
}

// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function(){
  let pairs = [];
  for(var i = 0; i < arr.length-1; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0){
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
}


// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array
//[[2,5],[2,3]


Array.prototype.transpose = function(){
  let transpose_arr = [];
  
  }
  return transpose_arr;
}
