//includes(value,start-index)

const products=["pen","pencil","scale","rubber","box"];
result=products.includes("pen");
console.log(result);
result=products.includes("pen",2);
console.log(result);


//array.join(separator)
const product=["pencil","box","paper","scale","rubber"];
console.log(product.join());             //Defalut as a separator;
console.log(product.join("|"));          // | as a separator;


// reverse
const n=[1,2,3,4,5];
console.log("before reverse : "+n);
n.reverse();
console.log("After reverse : "+n)


const f={ 0:10, 1:20, 2:30, 3:40, length:4 };
console.log(f);
Array.prototype.reverse.call(f);
console.log(f)


// pushup add a number merge a number

let v=[1,2,3,4,5,6,7,8,9];
t=v.push(10,11,12,13,14,15,16,17,18,19,20);
console.log(v);

//also used to add a string merge a names

let fruits=["Apple"]
fruits.push("orange","banana","pineapple");
console.log(fruits);

//  merging 2 arrays

let users1=["kishore","babu","Muruga"];
let users2=["ram","sai","ravi"];
users1.push(...users2);
console.log(users1);



