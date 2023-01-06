//for each method   used to acces individual name age salary etc..
const number=[10,20,30,40,50,60,70,80,90,100];
number.forEach((value)=>{
    console.log(value);
})


number.forEach((value, index)=>{
    console.log("Index : " +index ,  "Value : " +value);
})



 const users=[
    {full_name:"kishore",age:22, city:"Nagercoil",salary:10000},
    {full_name:"Murugan",age:58, city:"Kottar",salary:15000},
    {full_name:"Vishnuram",age:5, city:"Anthrapuram",salary:20000},
    {full_name:"sivakami",age:49, city:"Kesavaneri",salary:25000},
    {full_name:"vihitha",age:29, city:"Anthrapuram",salary:30000},
    
    
 ];
 console.table(users);

 users.forEach((value)=>{
    console.log(value.full_name)
 })
 users.forEach((value)=>{
    console.log(value.age)
 })
 users.forEach((value)=>{
    console.log(value.city)
 })
 users.forEach((value)=>{
    console.log(value.salary)
 })


 


















