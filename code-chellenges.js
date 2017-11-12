
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


function isPalindrome(string) {
	var myString;
  var stringReverse="";
  myString = string.toLowerCase().replace(/[^a-z']/g, '');



  for(var i=myString.length-1 ;i>=0; i--)
    {
      stringReverse += myString[i];
    }

 if(myString===stringReverse)
   {
     console.log("it is a palindrome");
     return true;
   }
  else
    {
      console.log("it is not  a palindrome");
      return false;
    }

}

isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!');
