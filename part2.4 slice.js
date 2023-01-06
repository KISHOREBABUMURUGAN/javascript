//slice (start,end)
const number=[1,2,3,4,5,6,7,8,9,10,11,,12,13,14,15,16,17,18,19,20];
console.log(number);
console.log("slice : "+number.slice());

console.log("slice : "+number.slice(2,9));

//splice in js   cut panni vitrum  (2)- length && (1,2,3,4,5)-3,4,5 ipdi answer varum (2,2-index,length)
const n1=[1,2,3,4,5,6,7,8,9,10];
console.log("Before splice : " +n1);
removed_elements=n1.splice(2);
console.log("Removed elements : " +removed_elements);
console.log("After splice :" +n1);


const n2=[1,2,3,4,5,6,7,8,9,10];
console.log("Before splice : " +n2);
removed_elements=n2.splice(2,4);   //2- index 4 -from that deleting 4 numbers
console.log("Removed elements : " +removed_elements);
console.log("After splice :" +n2);

const n3=[1,2,3,4,5,6,7,8,9,10];

console.log("Before splice : " +n3);
removed_elements=n3.splice(2,4,24,66,99,88);   //2- index 4 -from that deleting 4 numbers  24,66,99,88 inserting number
console.log("Removed elements : " +removed_elements);
console.log("After splice :" +n3);

const n4=[1,2,3,4,5,6,7,8,9,10];
console.log("Before splice : " +n4);
removed_elements=n4.splice(2,0,24,98);   //2- index 0-no deletenig length-just after next index 24,66,99,88 inserting number

console.log("After splice :" +n4);



































































