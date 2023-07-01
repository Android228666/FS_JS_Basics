// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Hotel with that amount of stars does not exist!!!");
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     //console.log("dkfjjadsf");
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Hotel with that amount of stars does not exist!!!");
// }

// console.log(price);

// const stars = 7;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Hotel with that amount of stars does not exist!!!");
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Hotel with that amount of stars does not exist!!!");
// }

// console.log(price);

const option = 5;
let message = "";

switch (option) {
  case 1:
    message = `You can take your goods tomorrow after 12:00 in our office.`;
    break;
  case 2:
    message = `Courier will deliver your order tomorrow within 9:00 and 18:00.`;
    break;
  case 3:
    message = `Your parcel will be send today.`;
    break;
  default:
    message = "Manager will call you.";
}

console.log(message);
