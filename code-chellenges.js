
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

//checks if the string is a Palindrom, case sensitiive
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


function formatPhoneNumber(numbers) {

 var myArr= numbers;
  myArr.splice(3,0,')');
  myArr.splice(0,0,'(');
  myArr.splice(5,0,' ');
  myArr.splice(9,0,'-');

  myStr= myArr.join("");
  return myStr;

}




formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);

// function returns the min value max value, the length of the array and teh average of the array not rounded

function minMaxLengthAverage(arr) {

  var sortedArray = arr.sort(function(a,b){
    return a - b;
  });
  var sum= 0;
  var average= 0;

  for(var i = 0; i< sortedArray.length; i ++)
    {
 			sum += sortedArray[i];
    }
  average= sum/sortedArray.length;
  console.log(sortedArray);
  console.log(sortedArray[0]);
  console.log(sortedArray[sortedArray.length - 1]);
  console.log(sortedArray.length);
  console.log(average);

  var array2 =[sortedArray[0],sortedArray[sortedArray.length - 1],sortedArray.length,average];

  return array2;


}

minMaxLengthAverage([4.54, 8.32, 5.20]);

//Funtions receives an array of arrays of nums, and returns the largest number of each seperate array2

function findLargestNums(arr) {

var array2=[];

  arr.forEach((oneArray)=>{
    oneArray.sort(function(a, b){
      return b- a;
    });

    array2.push(oneArray[0]);
     console.log(oneArray[0]);
  });

  return array2;

}


findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);

// function to check date and see if its xmas eve or not

function timeForMilkAndCookies(date) {

  var month = date.getMonth();
  var day = date.getDate();
	console.log(month);
  	console.log(day);


  if(month!= 11 || day!= 24)
  {
    console.log("its not xmas");
    return false;
  }
  else{
    console.log('its xmas, merry christmas');
    return true;
  }
}





timeForMilkAndCookies(new Date(2013, 11, 24));


//Fucntion to check if the second string argument is the ending of the first string


function checkEnding(str1, str2) {


  console.log(str1.endsWith(str2));
  return str1.endsWith(str2);
}



checkEnding('femenine','nine');



//Fucntion recieves a string, ex. " John Doe" and reverses it to " Doe John"


function nameShuffle(str) {

  console.log(str);
	var strnew = str.split(' ').reverse().join(' ');
  console.log(strnew);
  return strnew;

}

nameShuffle("Armando Acosta");

//Function obtains teh absolute sum of the array, making negative numbers positive to count for the sumTwoSmallestNums
function getAbsSum(arr){
  console.log(arr.length);

  var leng= arr.length;
  var sum= 0;

  for( var i = 0; i< leng; i++)
  {
    if(arr[i]<0)
      {
        arr[i]= arr[i]* -1;
      }
    sum += arr[i];

  }
  console.log(sum);
  return sum;

}



//function returns the word count of a string passed in

function countWords(str){

  console.log(str.length);
  var strsplit= str.split(' ');

  console.log(strsplit.length);

  return strsplit.length;


}


countWords('Just an example here move along');




//Fucntion to reverse stirng to alphabetical order


function AlphabetSoup(str) {

  var str2 = str.split('').sort().join("");
  console.log(str2);
  return str2;
}



AlphabetSoup('javascript');



// Function reverses a string
function reverse(str) {
  console.log(str);

  var newStr = str.split('').reverse().join('');
  console.log(newStr);
  return newStr;
}


reverse("Everything is based on a simple rule: Quality is the best business plan.");

//Function to filter a array depending on data type

function filterArray(arr) {

var newStr= [];
  for(var i= 0;i<arr.length;i++)
    {
      if(typeof arr[i]==='number'){
      newStr.push(arr[i]);
      }
    }
  console.log(newStr);
  return newStr;


}

/*
//using the filter function
function filterArray(arr) {
  return arr.filter(n => typeof n === 'number');
}

*/

//Fucntion returns all the even number in an array using the filter Funtions
function noOdds(arr) {
  console.log(arr);
  return arr.filter(n => n%2 === 0);
}


noOdds([718, 991, 449, 644, 380, 440]);

//Find the smallest in a set of positve/negative or decimals

function findSmallestNum(arr) {

  console.log(arr);
  var temp= 3000;
  for(var i = 0; i<arr.length ; i++)
    {

      if(arr[i]< temp)
        {
          temp = arr[i];
        }

    }

  return temp;
}


findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]);


//function finds the number of vowels in a string

function countVowels(str) {
  console.log(str);

  var array= str.split('');
  var counter= 0;
  for(var i = 0 ; i< array.length; i++)
    {
      if(array[i]=== 'a'||array[i]=== 'e'||array[i]=== 'i'||
      array[i]=== 'o'||array[i]=== 'u')
        {
          counter ++;

        }
    }
  return counter;
}

countVowels("Celebration");


//fucntion returns array with min and max numbers
function minMax(arr) {
  console.log(arr);

  newStr= [];
  var temp =100000;
  var temp2 = -100000;
  for(var i=0; i< arr.length; i ++)
    {
      if( arr[i]< temp)
        {
          temp = arr[i];
        }
      else if( arr[i]> temp2)
        {
          temp2= arr[i];
        }
    }
  newStr.push(temp);
  newStr.push(temp2);
  console.log(newStr);
  return newStr;
}


minMax([1, 2, 3, 4, 5]);

// function takes a string as argument and returns string with each character repeated twice

function doubleChar(str) {



  var newStr= str.split('');
  var temp = '';
  var blah=[];
  for (var i = 0; i < newStr.length; i++)
    {
      temp = newStr[i];
      blah.push(temp);
      blah.push(temp);
    }

   console.log(blah.join(''));

  return blah.join('');
}

doubleChar('string');

//fucntion takes an array of numbers, and sorts it to accending order, if its null it returns null

function sortNumsAscending(arr) {
  console.log(arr);
  if(arr=== null)
    {
      return arr = [];
    }
  else{
  arr.sort(function(a,b){
           return a - b;
           });
  }

  return arr;
}


sortNumsAscending([80, 29, 4, -95, -24, 85]);

//returns the last element of an array2

function getLastItem(arr) {


  return arr.pop();
}

getLastItem(['cat', 'dog', 'duck']);


//function returns the most common occurences of elements in an array

function highestOccurrence(arr){

  temp= [];
  newArray = [];
  unique=[];
  var count = 0;
  for(var i = 0 ; i < arr.length ; i++)
    {
      temp = arr[i];
      if(temp != arr[i +1])
        {
          continue;
        }
      else
        {
          temp = arr[i+1];

          newArray.push(temp);
          count ++;
        }

    }
    	unique = Array.from(new Set(newArray));
      console.log(newArray);
  		console.log(unique);

      return unique;
}





highestOccurrence([ 1 , 2,2,2,2 , 3 , 3 , "a" , "b" , "b" ,"b","b", "c" ,"c"]);


//Find the Minimum, Maximum, Length and Average Values

function minMaxLengthAverage(arr) {
	arr.sort(function(a, b) {
  return a - b;
});
	console.log(arr);
	console.log("the length of the array is "+ arr.length);
	console.log("the min values is " + arr[0]);
	console.log("the max values is " + arr[arr.length-1]);
	var sum = 0;
	for( i=0; i< arr.length; i++){
		sum += arr[i];
	}
	var average = sum/arr.length;
	console.log("the average is " + average);

	return( [arr[0],arr[arr.length - 1], arr.length, average]);
}




minMaxLengthAverage([6, 9, 15, -2, 92, 11]);


//Add up the Numbers from a Single Number
function addUp(num) {
	if(num < 0 )
		{
			return -1;
		}
	else if( num== 0)
		{
			return 0;
		}
	else
		{
			return ( num + addUp(num - 1));
		}

}


//Filter out Strings from an Array

function filterArray(arr) {


	function isNumber(obj) {
  return typeof(obj) === 'number';
}
	var arr2 = arr.filter(isNumber);

	return arr2;
}



filterArray([1, 2, "aasf", "1", "123", 123]);

//Flip the Boolean

function reverse(bool) {
	if(typeof bool !== 'boolean')
		{
			return "boolean expected";
		}
	else
		{
			return !(bool);
		}
}

//Repeat the Same Item Multiple Times


function repeat(item, times) {


	var total= [];
	for(i= 0; i< times; i ++)
		{
			total.push(item);
		}
	return total;

}


repeat('butt',5);


//Create a function that returns true if a number is prime and false if it's not

function isPrime(num){

  for (var i=2;i<num;i++){
    if (num%i==0){
      return false;
    }
  }
  return true;
}

//Create a function that takes an array of numbers and returns the mean value.

function mean(arr){

	var sum = 0;
	var average = 0;
	for(i=0;i<arr.length;i++){
		sum += arr[i];

	}
	average= sum/arr.length;
	average = parseFloat(average.toFixed(2));

	return average;
}
