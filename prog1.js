// create a new array
const original_array = [23,45,78,21,98,12,45,67];
console.log(original_array);

// use map() method with a arrow function to double every element in the array
const double_array = original_array.map(num => num * 2);
console.log(double_array);

// use filter() method to display only even numbers
const even_array = original_array.filter(num => num % 2 === 0);
console.log(even_array);

// use reduce() method to sum of all elements
const sum = original_array.reduce((total, num) => total + num, 0);
console.log(sum);


// create array students marks
const students_marks = [75,92,51,64,76,68,59,85,65];    
console.log("Students Marks:",students_marks);

// use filter() method to display only students who scored more than 75
const high_scorers = students_marks.filter(mark => mark > 75);
console.log("Students who scored more than 75:", high_scorers);

//sort array in ascending order
const sorted_marks = students_marks.sort((a, b) => a - b);
console.log("Sorted Marks in Ascending Order:", sorted_marks);

// spread operator (...) is used to keep the original array unchanged
const new_sorted_marks = [...students_marks].sort((a, b) => a - b);
console.log("New Sorted Marks in Ascending Order:", new_sorted_marks);
console.log("Original Students Marks:", students_marks);