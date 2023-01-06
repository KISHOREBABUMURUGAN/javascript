

// concatenation

let first_name="kishore";
let last_name="babu";


let c=first_name+" "+last_name;
console.log("concatenation : "+c);

//concat
c=first_name.concat(" "+last_name)
console.log("concat : "+c)


//append
c="kishore ";
c+="babu";
console.log("Append : "+c);

//Escaping by using single quotation
c='she can\'t run';
console.log("Escaping : "+c);

c=first_name.length;
console.log("Length : "+c);


//changecase
c=first_name.toUpperCase();
console.log("Uppercase : "+c);

c=first_name.toLowerCase();
console.log("Lowercase : "+c);

//index of [finding the position]
 c=first_name.indexOf('k');
 console.log("index of k : "+c)

 c=first_name.lastIndexOf('e');    //2 Ez's iruntha find panna use aagum
 console.log("index of e : "+c)
 

 // characters place

c=first_name.charAt(1);    //defines the place 
console.log("charAt 1 : " +c);

c=first_name.charCodeAt(1);   //epsy
console.log("charAt 1 : " +c);

//substring

c=first_name.substr(0,4);
console.log("substr : "+c);


//try with string through substring function.  (0,4)  0-index value, 4-length

let text="01234567890";
c=text.substring(0,4);
console.log("substring : "+c);

c=text.substring(4);  //length after
console.log("Substring : "+c);

c=text.substring(4,0);  //greater than smaller value will change the place automatically
console.log("substring : "+c);

c=text.substring(25,30);
console.log("Substring invalid length : "+c);

c=text.substring(-3);
console.log("Substring -3 : "+c);

//slice


c=text.slice(2,4);
console.log("Slice : "+c);


c=text.slice(4,2);
console.log("slice : "+c);       //empty yaa value return pannum ithey substring la automatic a intercgange pannikum

c=text.slice(25,30);
console.log("Slice invalid length : "+c); //answer vaarathu

c=text.slice(-3);
console.log("Slice -3 : "+c);

// function split

let a ='kishore babu murugan academy';
c=a.split(" ");
console.log("split : "+c);
console.table(c);

//replace in js

a="I am from kanyakumari";
c=a.replace("kanyakumari","chennai");
console.log(c);

//includes used to check in list
const animals=["rat", "rabbit", "cow"];
console.log(animals.includes("rabbit"));
console.log(animals.includes("lion"));
//trim used to remove unwanted white space

let sentence=" kishorebabu ";
console.log(sentence.length);
a=sentence.trim()
console.log(a.length);


//padstart padend   
 h="5";
h=h.padStart(4,0);  // 4 indicates how much in left //0-enna varanum o or any symbol
console.log(h);

 b="6";
b=b.padEnd(4,0);
console.log(b);

 d="7";
d=d.padEnd(4,'$');
console.log(d);

//long liteals method1
longstring="kishore is a basket ball player"
+"he is also a good human being"
+"work life balance is good";
console.log(longstring);

//method 2
 longstring="kishore is a basket ball player\
he is also a good human being\
work life balance is good";
console.log(longstring);


//asky value
console.log(String.fromCharCode(65,66,67,90,97,98,99,122));

//template String es6 40:48


//array in js
let e=[12,13,14,15];
console.log(e);
console.table(e);
console.log(e[1]);

let f= new Array(10,20,30,40);
console.table(f);

let g= new Array("kishore",22,true,[10,20,30,40,50],{m1:90,m2:98,m3:100});
console.table(g);













