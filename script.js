// _________Arrays


let marks = [ 90, 80, 70, 60, 50, 40, 30,];
console.log(marks);


let heros = [ "Thor", "IronMan", "BatMan", "SuperMan", "BlackPanther", "Hulk", "Xman", "SpiderMan"];
console.log(heros);

// in 2no arrays mein kuch add karni k liye 

marks[1] = 20;

heros[3] = "JakiChain";


// Looping over an Array

let friends = ["Asif", "Kareem", "Sadam", "Amir", "Yasir", "Suhail", "Junaid", "Qaim", "Faheem"];
for(let friend of friends){
     console.log(friend.toUpperCase()); // sary uppercase mein print hongi
};
   // 2sra exmple print karwani ka 

for(let indx = 0; indx < friends.length; indx++){
    console.log(friends[indx]);
};


// avrage class marks 

let marks1 = [96, 85, 70, 65, 60, 50, 40, 30,];
let sum = 0; 
for(let val of marks1){
    sum += val;
}
let avg = sum / marks1.length;
console.log("avrage marks of class =",avg);


// _________10%__Offer for of loop


let items1 = [250,458,254,458,254,458,455,500,554,458,700,900,];

let i = 0;

for(let val of items1){
    let offer = val / 10;
    items1[i] = items1[i] - offer;
    console.log("value of offer =", `${items1[i]}`);
    i++;
};


// _________5%__Offer for loop


let items = [250,458,254,458,254,458,455,500,554,458,700,900,];

for(let i = 0; i < items.length; i++) {
    let offer = items [i] / 5;
    items [i] -= offer;
}
console.log(items);


// __________ Array methods ________


let foodItems =[ "Apple", "litchi", "orange", "tamato", "mango", "garpes"];

foodItems.push("banana", "chips", "burger"); // add karni k liye

console.log(foodItems);

foodItems.pop(); // remove karni k liye ___last item ko

console.log(foodItems);

foodItems.shift(); // remove karni k liye ____first item ko

console.log(foodItems);


// ____________ concat _____

let hollywood =  ["Thor", "IronMan", "SpiderMan", "SuperMan"];
let bollywood = ["SalmanKhan","Shahid", "Imran", "Kalyan"];
let sindhi = ["AliGull","Gamo","Majo","Jabbar","MazarKhan"];

let heros2 = hollywood.concat(bollywood,sindhi);  //_____ Arrays ko add karni k liye ___ ya phir sath mein jorni k liye

console.log(heros2);

// ___________ Delete ______


let heros3 = [ "Thor", "IronMan", "BatMan", "SuperMan", "BlackPanther", "Hulk", "Xman", "SpiderMan"];

heros.splice(3,1,"Ayaz"); // 3rd name yani superman ko remove karni k liye___ur ye replacement karta he superman k jaga Ayaz laga diya  
                          // kitni b Add ya Delete kar sakty ho !
console.log(heros3);


let num = [ 90, 80, 70, 60, 50, 40, 30,];

console.log(num.slice(1,4)); // ye asa method he jo b bolo gi us ko chorr k baki sab delete kar dy ga___
                             // meny as ko bola 1 se ly k 4 k darmiyan waly chorro baki delete kar do!


 let companies = [ "google", "microsoft", "uber", "IBM", "netflix"];
 companies.shift();//ye method delete karta he first object ko !

console.log(companies); 

console.log(companies.push("Amazon")); // ye b ek ur add karni ka method he !