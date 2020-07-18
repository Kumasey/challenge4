// Summation of multiples of 3 and 5 under 1000
const sum = () =>{
var sum = 0;
for(var i = 1; i < 1000; i++){
    if (i % 3 === 0 && i % 5 === 0){
        sum = sum + i
    }
}
alert("summation of 3 and 5 under 100 is: " + sum)
}

// input of even and odd numbers with dashes inbetween even numbers
const evenOdd = () =>{
var numberString = prompt("Enter even and odd numbers, output will put dashes inbetween even numbers");
var result = [numberString[0]]
for(var i = 1; i < numberString.length; i++){
if ( (numberString[i-1] % 2 === 0) && numberString[i] % 2 === 0 ){
    result.push('-', numberString[i])
  }else{
    result.push(numberString[i])
      }

}
alert(result.join(''));
}

//most frequent item in array
const frequent = () => {

var arr1= prompt('please enter numbers mixed with letters to find the highest occurance');
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
alert(item+" ( " +mf +" times ) ") ;
}
