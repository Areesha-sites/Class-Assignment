// In javascirpt we have a three way to write code
// 1. camelCase
// 2. snake_case
// 3. PascalCase
// 1. CAMELCASE.
var userName = "Areesha"; // e.g. camelCase
// 2. SNAKE_CASE.
var user_name = "Areesha"; // e.g.snake_case
// 3. PASCALCASE.
var UserName = true; // e.g.PascalCase
console.log(userName, user_name, UserName);
// MY PRACTISE.
var isUserExist = true; // e.g. camelCase
var is_user_exist = false; // e.g.snake_case
var IsUserExist = 2; // e.g.PascalCase
console.log(isUserExist, is_user_exist, IsUserExist);
// This code declares a varaible names 'anyType' without assinging it a specific data type.
var anyType; // The variable 'anyType' is declared but not assigned any value, so its value is 'undefined'.
console.log(anyType); // This line logs the value of 'anyType' to the console, which will be 'undefined'.
// ARRAY.
// Array => [] => index value starts from 0,.....
var studentsData = ["Areesha", "Rani", "Sonia", 1, 10, true];
console.log(studentsData);
// let's create another array.
var students = ["Areesha", "Rani", "Sonia"];
console.log(students);
// we can access specific elements in an array using their index values.
var firstStudentName = students[0];
console.log(firstStudentName);
// Accessing specific elements in the array.
console.log(students[2]);
console.log(students[4]); // Output will be 'undefined' because we don't have any value at index 4 in our array.
console.log(students[1], students[2]); // Output: "Rani Sonia"
// Another array.
var studentsMarks = [78, 56, 90, 67, 34];
console.log(studentsMarks);
console.log(studentsMarks[3]); // output: 67
// Another example of array.
var isPass = [true, false];
console.log(isPass);
console.log(isPass[1]); // output: false
var yourName = "Areesha";
yourName = "Eshuu";
console.log(yourName); // we can change string value.
var fruits = ["apple", "mango", "banana"];
fruits[1] = "Grapes";
console.log(fruits); // we can also change our array values.
// MY PRACTISE
var studentData = ["sonia", "Rani", "Areesha", 15, true];
console.log(studentData);
// Another array.
var studentNames = ["sonia", "Rani", "Areesha"];
console.log(studentNames, studentNames[1]);
var thirdStudentName = studentNames[3]; // Output will be 'undefined' because we don't have any value at index 4 in our array.
console.log(thirdStudentName);
console.log(studentNames[1], studentNames[2]);
// OBJECT.
// objects => {} => key: value pair
// Example.
var userObj = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
};
// CLASS WORK.
// let's make a object that stores students data.
// student1.
var student1 = {
    fullName: "Example",
    classId: "ABC",
    rollNo: 25,
    email: "example@b.com",
    isPassed: true,
    subjects: ["English", "Urdu", "Programming"],
};
console.log(student1);
// student2.
var student2 = {
    fullName: "Example",
    classId: "ABC",
    rollNo: 25,
    email: "example@b.com",
    isPassed: true,
    subjects: ["English", "Urdu", "Programming"],
};
console.log(student2);
// Total students
var allStudents = [
    student1,
    student2,
    {
        fullName: "Example",
        classId: "ABC",
        rollNo: 25,
        email: "example@b.com",
        isPassed: true,
        subjects: ["English", "Urdu", "Programming"],
    },
];
console.log(allStudents);
// MY PRACTISE
// let's make a object that stores books information.
// Book1
var book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    pages: 180,
    publicationYear: 1925,
};
console.log(book1);
//Book2
var book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic Fiction",
    pages: 281,
    publicationYear: 1960,
};
console.log(book2);
// Total books information.
var books = [
    book1,
    book2,
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Classic Fiction",
        pages: 277,
        publicationYear: 1951,
    },
];
console.log(books);
//[] => array.
// [value,value2,value3] => we can put every value in array.
// ["a", "b"] => arr of string
// for Example.
var vegName = ["potato", "tomato", "brinjal", "onion"];
console.log(vegName);
// [[], [], []] => array of array
// for Example.
var studentGrades = [
    // Array of arrays representing grades for multiple students
    [90, 40, 86],
    [34, 65, 89],
    [66, 78, 23],
];
console.log("Students scores: ", studentGrades);
//{} => empty object
// {key: value }
// {key: "a", key: "b"}
// let arr = [{}, {},[], []]     // nested array
// for Example.
var studentRecord = [
    {
        name: "Ali",
        rollNumber: "S123",
        marks: [56, 67, 90, 67],
    },
    {
        name: "sara",
        rollNumber: "S124",
        marks: [34, 56, 89, 50],
    },
    {
        name: "hassan",
        rollNumber: "S125",
        marks: [45, 65, 23, 72],
    },
];
console.log(studentRecord);
// let obj = { // nested obj
//     key:{
//         key:{}
//     },
//     key2: []
// }
// for Example.
var personsdetailed = {
    name: "Areesha",
    age: 18,
    address: {
        street: "123 main street",
        city: "karachi",
        country: "pakistan",
    },
};
console.log(personsdetailed);
var user1 = {
    fullName: "Example",
    classId: "ABC",
    rollNo: 25,
    email: "example@b.com",
    isPassed: true,
    subjects: ["English", "Urdu", "Programming"],
    feeshedule: {
        month: "March 2024",
        amount: 1000,
    },
};
console.log(user1);
console.log(user1.fullName);
console.log(user1.classId);
console.log(user1.rollNo);
console.log(user1.email);
console.log(user1.subjects);
console.log(user1.subjects[1]);
// March 2024, Amount = 1000
console.log(user1.feeshedule.month + ", Amount = " + user1.feeshedule.amount);
var user = {
    firstName: "John",
    lastName: "Doe",
    cnicNo: 123456789,
    isStudent: true,
    subjects: ["English", "Urdu", "Programming"],
    address: {
        streetName: "abc road",
        city: "karachi",
        country: "pakistan",
        zipCode: "12345",
    },
};
console.log(user);
var laptop = "HP";
var price = 500;
var isStudent = true;
