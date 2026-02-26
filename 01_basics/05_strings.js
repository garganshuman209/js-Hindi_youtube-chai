const one = "   anshumanGargPrakharGarg    ";
let two = one.trim();
console.log(two);
console.log(one.length);
console.log(two.length);

let three = two.toUpperCase();
console.log(three);

let four = three.toLowerCase();
console.log(four);

let five = four.slice(0, 9);
console.log(five);

let six = five.replace("anshuman", "ansh");
console.log(six);

let seven = six.concat(" Garg");
console.log(seven);

let eight = seven.split("");
console.log(eight);

let nine = seven.split(" ");
console.log(nine);

let ten = seven.includes("Garg");
console.log(ten);

let eleven = seven.startsWith("ansh");
console.log(eleven);

let twelve = seven.endsWith("Garg");
console.log(twelve);

let thirteen = seven.indexOf("Garg");
console.log(thirteen);

let fourteen = seven.lastIndexOf("Garg");
console.log(fourteen);

let fifteen = seven.charAt(0);
console.log(fifteen);

let sixteen = seven.charCodeAt(0);
console.log(sixteen);

let seventeen = String.fromCharCode(97);
console.log(seventeen);

let eighteen = seven.repeat(2);
console.log(eighteen);

let nineteen = seven.padStart(20, "*");
console.log(nineteen);

let twenty = seven.padEnd(20, "*");
console.log(twenty);

let twentyOne = seven.trimStart();
console.log(twentyOne);

let twentyTwo = seven.trimEnd();
console.log(twentyTwo);

let twentyThree = seven.match(/Garg/g);
console.log(twentyThree);

let twentyFour = seven.search(/Garg/);
console.log(twentyFour);

let twentyFive = seven.replace(/Garg/g, "G");
console.log(twentyFive);

let twentySix = seven.split("G");
console.log(twentySix);

let twentySeven = seven.slice(0, 5);
console.log(twentySeven);

let twentyEight = seven.substring(0, 5);
console.log(twentyEight);

let twentyNine = seven.substr(0, 5);
console.log(twentyNine);

let thirty = seven.endsWith("Garg", 10);
console.log(thirty);

let thirtyOne = seven.startsWith("ansh", 0);
console.log(thirtyOne);

let thirtyTwo = seven.includes("Garg", 10);
console.log(thirtyTwo);

let thirtyThree = seven.indexOf("Garg", 10);
console.log(thirtyThree);

let thirtyFour = seven.lastIndexOf("Garg", 10);
console.log(thirtyFour);




