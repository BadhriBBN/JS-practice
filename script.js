// objects

var obj = {
    name: "bobby",
    age: 20

}
console.log(obj);

// adding key and value

var obj ={
    name:"john",
    age:22
    
}
obj.gender="male"
console.log(obj);


// printing the particular object key  and value

var obj= {
    movie:"badri",
    music:"AR rahman"
}
console.log(obj.movie);

// give an array in javascript

var obj = {
    name:"badhri",
    age:22,
    gender:"male",
    nicknames:["bobby","bathri","badhra"]

}
console.log(obj);

// for printing the key in array 

var obj = {
    name:"badhri",
    age:22,
    gender:"male",
    attendance:["bobby","bathri","badhra"]
};
for (var i=0; i<obj.attendance.length; i++){
    console.log(obj.attendance[i]);
}

// array of objets 

var arr =[
    person={
        "name":"badhri",
        "age":22
    }
]
console.log(person);

// hoisting developer misteke

console.log(a);
var a = 23;
var b = 6;

console.log(b);
//  scope and block variable let and const

// copy by value

// it is applicable only to primitive data types
// primitive data types:number,string,boolean

var a = 23;
var b = a;
a = 24;
console.log(a);


// copy by reference
// it is appilicable to complex/user defined data types

var arr = [23,24,25,26]
var arr1 = arr;
arr1 [0]=456;
console.log(arr1[0]);


