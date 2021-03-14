//ARRAY
let numbers =[1,2,3,4,5];
console.log(numbers);

let ester= ['Ester', 'Sangkoy', 19];
console.log(ester);

//akses index yang mana
console.log(ester[1]);

//cara hitung length/panjang array
console.log(numbers.length);

//akses elemen terakhir 
console.log(ester[ester.length-1]);

//Mengganti nilai array melalui index
ester[2] =20;
console.log(ester[ester.length-1]);

//Array di dalam array
let scores =[90,50,70];
let arrJohn =["john","doe",33,true,scores];
console.log(arrJohn);

//array elemen objek
let users =[
  {
    fullName :"Ester Sangkoy",
    age:19,
    address: "Manado",
  },
  {
    fullName : "Stenly Adam",
    age:30,
    address : "Manado"
  },
]

//OBJECT
const ester = {
    firstName: "Ester",
    lastName: "Sangkoy",
    age: 19,
    isMarried: false,
    sayHello: function() {
        console.log("Hallo");
    }

};
console.log(ester);

//2 cara Akses Properti Objek
     //dot notation
       console.log(ester.lastName);
     //bracket notation
       console.log(ester["isMarried"]);

//Menambahkan Property Objek
ester.address = "Manado";          //dot notation
ester["nationality"]="Indonesia"; //bracket notation
console.log(ester);

ester.sayHello();