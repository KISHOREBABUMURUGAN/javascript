//concat
const a=[1,2,3,4,5];
const b=[6,7,8,9,10];
const c=[11,12,13,14,15];
 
 let d=a.concat(b,c,16,17,18,19,20,['A','B','c']);
 console.log(d);
 console.table(d)

 //sort   Ascending order + Descending order

 const names=["kishore","babu","murugan","sivakami","vihitha","sairam","ram"];
 console.log("before sort : " +names)
 names.sort();
 console.log("After sort : " +names);


 const number=[100,20,30,89,65,74,56];
 console.log("before sort : " +number)
 number.sort();
 console.log("After sort : " +number);
 
 number.sort((a,b)=>{
   return a-b;
 })
 console.log("Ascending order : "+number);

 number.sort((a,b)=>{
    return b-a;
  })
  console.log("Descending order : "+number);

//sorting the age
  const users=[
    {fname:"Kishore",Age:22, living:"Nagercoil", salary:22000},
    {fname:"Babu",Age:17, living:"Nagercoil", salary:22000},
    {fname:"Murugan",Age:23, living:"Nagercoil", salary:22000},
    {fname:"Sivakami",Age:5, living:"Nagercoil", salary:22000},
    {fname:"Srivishnuram",Age:12, living:"Nagercoil", salary:22000},
   ];
  
   console.table(users);


   //sorting the age
users.sort((a,b)=>{
    return  a.Age-b.Age;
});

console.table(users);

//sorting the name according to alphabet

users.sort((a,b)=>{
    if(a.fname>b.fname) return 1;
    if(a.fname<b.fname) return -1;
return 0;
});

console.table(users);

//it will also use
users.sort((a,b)=>{
      return a.fname-b.fname;
});

console.table(users);


//fill in javascript

let n=[1,2,3,4,5,6];
console.log("Before fill : "+n);
n.fill(20);
console.log("After fill : "+n);
n.fill(20,5);
console.log("After fill : "+n);
n.fill(20,3,5);
console.log("After fill : "+n);















