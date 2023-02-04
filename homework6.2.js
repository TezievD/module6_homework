//Задание 1.

let func = [8, 3, null, 2, 7, 6, undefined, 0, '', NaN,0];
let func2 = ['', 0, 0, 7, 7, 7,0 ];

function outputEvenOdd(func) {

let zero =0;
let number = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arry.length; i++){
  if (typeof (func[i]) === "number" && !isNaN(func[i])){
	
	if (func[i] === 0) {
		zero += 1;
	} else if (func[i] % 2 === 0) {
		even += 1;
	}else if (func[i] % 2 !== 0) {
		odd += 1;
	}
  }
  
}
console.log(func);
console.log(`В массиве нолей: ${zero} , чётных: ${even} , нечётных: ${odd}; `);
};
outputEvenOdd(func);  
