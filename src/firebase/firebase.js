import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBUhy0D8xkBh_HPw2LhCWH27dRZtIM9GDw",
    authDomain: "expensify-b33a2.firebaseapp.com",
    databaseURL: "https://expensify-b33a2.firebaseio.com",
    projectId: "expensify-b33a2",
    storageBucket: "expensify-b33a2.appspot.com",
    messagingSenderId: "885272417246",
    appId: "1:885272417246:web:005e37358e6343d1c6434f",
    measurementId: "G-MG6H1GVQFH"
};


firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export { firebase, database as default };






//================================FIREBASE==========================================

//================
//to watch changes when child added, shows all data, not just that one been added
//================

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//================
//to watch changes in child
//================

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//================
//to remove child 
//================

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//================
//add id to objects
//================

// database.ref('expenses')
//   .once("value")
//   .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   })


//================
//watch change database
//================

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error fetching data: ', e);
// });

//================
//push to database list
//================

// database.ref('expenses').push({
//     description: "House",
//     note: "3 bedroom",
//     amount: 30000,
//     createdAt: 1000
// })


//================
//read data and do something from database list
//================

// database.ref("expenses/-M3QjgOsdW_8T5bsL2PS").update({
//     description: 'Namas'
// });


//================
//printing some date
//================

// database.ref().on('value', (snapshot) => {
//     const userVal = snapshot.val();
//     console.log(`${userVal.name} is a ${userVal.job.title} at ${userVal.job.company}`);
// });

// database.ref().update({
//     name: 'Vasia',
//     'job/company' : 'Teco',
//     'location/miestas': 'London' 
// })


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });




//================
//to show data when it has been changed
//================

// const onValueChange =  database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 3000);


//================ 
//to stop showing changes
//================

// database.ref().off(onValueChange);


//================
//to fetch data
//================

// database.ref() //ref('location') skliaustuose irasom kokia data norim gauti
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//       console.log('Klaidos pav: ', e);
//   });


//================
//to save to database 
//================

// database.ref().set({
//     name: "Tomazas",
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     location : {
//         miestas: 'Siauliai',
//         Salis: 'Lietuva'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('Error :', e);
// });


//================
//to update 
//================

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/miestas': 'Kaunas' 
// })


//================
//to remove 
//================

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Removed');
//     })
//     .catch((e) => {
//         console.log('Remove failed: ', e);
//     });


//================
//to remove with SET
//================

//database.ref('isSingle).set(null);




