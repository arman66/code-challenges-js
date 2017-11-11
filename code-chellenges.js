
//This Function takes an array of numbers, and adds the two smallest integers, excluding negative integers

function sumTwoSmallestNums(arr) {
 var sum=0;
  var array=[10, 343445353, 3453445, 3453545353453, -1 , -3];
  array.sort(function(a,b){
    return a -b;
  });
  console.log(array);

	var positive = array.filter(function(positive){
  	return positive > 0;
	});
  console.log(positive);
  sum = positive[0]+positive[1];
  console.log(sum);
}

sumTwoSmallestNums();

// This Function returns an array with out duplicates and in accending order.

function uniqueSort(arr) {
	  var array = arr;

  array.sort(function(a,b){
  return a-b;
});
console.log(array);

  var mySet = new Set(array);

  var myArr = Array.from(mySet);

  return myArr;
}


uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]);
