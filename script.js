var animalArray = ["tiger", "cat", "bear", "bird"];
console.log(animalArray[0]);
console.log(animalArray[1]);
console.log(animalArray[2]);
console.log(animalArray[3]);

var carBatch = [["volvo", "ferrari", "mustang", "lamborghini"],["toyota","honda","mitsubishi","tesla"]];
console.log(carBatch[0][0]);
console.log(carBatch[0][1]);
console.log(carBatch[0][2]);
console.log(carBatch[0][3]);
console.log(carBatch[1][0]);
console.log(carBatch[1][1]);
console.log(carBatch[1][2]);
console.log(carBatch[1][3]);

animalArray.shift(); //modifies the array
console.log("shift", animalArray);
console.log("shift", carBatch.shift());

animalArray.pop(); //modifies the array
console.log("pop", animalArray);
console.log("pop", carBatch.pop());

animalArray.push("elephant"); //modifies the array
console.log("push", animalArray);

console.log("concat", animalArray.concat(["bee", "deer"])); // creates a  new array, old array still existing
console.log("same array from after using the method push", animalArray);

console.log("sort", animalArray.sort());