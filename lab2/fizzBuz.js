function fizzBuzz(num){
  var fizzBuzz = "fizzBuzz";
  var Fizz = "Fizz";
  var Buzz = "Buzz";
	if (num % 3 === 0 && num % 5===0) {
	return fizzBuzz;
	}
	else if(num % 5 === 0){
	return Buzz;
	}
	else if(num % 3 === 0) {
	return FizzBuzz;
	}
	else{
	return num;
	}
}
