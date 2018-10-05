var numbers=[10,8,12,36];
var double =numbers.map(function(x){ //getting the new array with doublevalues
    return x*2;
});
console.log("double numbers array "+double);
var newarray=numbers.filter(function(words){ //getting the array of the numbers greater than 20.It doesnt change the original array
return words>20;
});
console.log("array with numbers greater than 20........"+newarray);
var total=numbers.reduce(function(sum,value){ // getting the sum of the numbers in using reduce method
    return sum+value;
});
console.log("total of the array using reduce "+total);
var sum=0;
var total1=numbers.filter(function(value){ //getting the sum of the numbers of an array using the fiter method
sum=sum+value;
return sum;
});

console.log("sum of the numbers of the array using filter "+sum);
