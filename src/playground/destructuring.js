//========================= 
//object destruction
//============================ 

// console.log('descxtructuring');

// const person = {
//     name: 'Tom',
//     age: 34,
//     location: {
//         city: 'Siauliai',
//         temp: 31
//     }
// };

// // sukuriam kintamaji kuris lygus objektui, kabutese pasiimam is objekto ka norim, nereikes kiekvienam atskirai kurti kintamojo
// const { name, age } = person;
// const { city, temp} = person.location;

// console.log(`${name} is ${age}`);
// if(city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// // name = 'Anonymous reiskia jeigu vardo nera, default reiksme = anonymous
// // name: firstName reiksme bus priskirta kitokia reiksme negu default 
// const { name: firstName = 'Anonymous'} = person;
// console.log(`${firstName} is ${age}`);

// const book = {
//     title: 'Ego is enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-publisher'} = book.publisher
// if(publisherName) {
//     console.log(publisherName);
// }

//============================ 
//array destruction
//============================ 


// const adresas = ['dainu 50-23', 'Siauliai', 'Lietuva', '77262'];

// //nepriskiriu adresui jokio kintamoji, tik padedu kableli, kad butu eiliskumas
// const [, miestas, salis] = adresas 

// console.log(`You are in ${miestas}, ${salis}`);

const item = ['Coffe (latte)', '$2.00', '$2.50', '$3.00'];
const [coffee, ,priceMedium] = item;
console.log(`A medium ${coffee} cost ${priceMedium}`);