//Question 1
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
console.log(Object.keys(student));

//Question 2
console.log(student);
delete student.rollno
console.log(student);

//Question 3
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
console.log(Object.keys(student).length)

//Question 4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
 for(item in library)
 {
     console.log(library[item].author,',',library[item].title,',',library[item].readingStatus);
 }

 //Question 5
 var cylinder= { radius: 4, height: 10}
 console.log('Volume = ',3.14 * cylinder.radius * cylinder.radius * cylinder.height)

 //Question 6
 var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
 { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
 { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

 console.log(library.sort(function(a, b) {return b.libraryID - a.libraryID} ));
