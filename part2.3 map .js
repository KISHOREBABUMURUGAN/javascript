//map in javascript array

const numbers=[10,20,30,40,50,60,70,80,90,100];
let sqrt=numbers.map((value)=>{
 return Math.sqrt(value).toFixed(2);
})

console.log(sqrt);
console.table(sqrt);

const users=[
 {fname:"kishore",Age:22, living:"Nagercoil", salary:22000},
 {fname:"Babu",Age:17, living:"Nagercoil", salary:22000},
 {fname:"Murugan",Age:23, living:"Nagercoil", salary:22000},
 {fname:"Sivakami",Age:5, living:"Nagercoil", salary:22000},
 {fname:"srivishnuram",Age:12, living:"Nagercoil", salary:22000},
];
console.log(users);
console.table(users);

let eligible_candidates=users.map((user)=>({
   /* fname:user.fname,
    Age:user.Age,
    living:user.living,
    salary:user.salary, */
    ...user,
    status:user.Age>=18?"Eligible":"NotEligible"
}));

console.table(eligible_candidates);




























