

let food = prompt("ماذا تحب ان تطلب");
switch(food) {
  case "1":
    console.log ("بيتزا");
    break;
  case "2":
    console.log ("سوشي");
    break;
  case "3":
    console.log("برجر");
    break;
  default:
    console.log("طلبك غير متوفر");
    break;
} 

let first = parseInt(prompt("ادخل الرقم الاول"));
let second = parseInt(prompt("  ادخل الرقم الثاني "));
let operation = prompt("العمليه الحسابيه */-+");
 

switch(operation) {
    case "+":
      console.log (first+second);
      break;
    case "-":
      console.log (first-second);
      break;
    case "*":
      console.log(first*second);
      break;
      case "/":
      console.log (first/second);
      break;
    default:
      console.log(" wrong");
      break;
  } 

  let age = parseInt(prompt("ادخل العمر"))
  if(age >=4
  ){
      console.log("الروضه")
  }
  if(age >=12
    ){
        console.log("المدرسه")
    }
    if(age >=15
        ){
            console.log("الثانوي")}

    if(age >=18
        ){
            console.log("الجامعه")
        }
       



