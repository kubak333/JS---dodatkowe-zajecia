// DOM - Document Object Model
// Jest to obiektowa reprezentacja dokumentu HTML

// Obiekty, z których zbudowany jest nasz DOM nazywamy węzłami

// Każdy Tag HTML jest niezależnym elementem DOM

// Każdy element jest węzłem, ale nie każdy węzeł jest elementem 



// 1. Selektory, które zwracają 1 element

// let val;
// val = document.getElementById('details');
// console.dir(val);
// console.log(val);



// 2. Selektory, które zwracają listę 

// let val2;
// val2 = document.getElementsByClassName('greeting')
// console.dir(val2);
// console.log(val2);


// let val
// let firstName = window.prompt('Proszę podać imię');

// val = document.querySelector
// ('p');


// val.innerText = `Siemanko ${firstName}, wariacie!`

// console.log(firstName);
// console.dir(val)





// Dodawanie elementów 



// const age = Number(prompt('proszę podać wiek'));

// let newP = document.createElement('p');
// newP.innerText = `Twój wiek to: ${age}`;
// newP.style.fontStyle = 'italic';
// if (age < 18) {
//   const color = age < 15 ? 'red' : 'orange';
//   const error = `
//   <h1 style='color: ${color}'>
//     Błąd! Twój wiek to ${age}, więc jesteś niepełnoleni
//   </h1>`;
//   // document.body.innerHTML = error;
//   document.getElementById('details').innerHTML = error;
// } else {
//   document.getElementById('details')?.appendChild(newP);
// }





// const devList = [
//     createDev('Oliwia', ['js'], 5),
//     createDev('Adam', ['python'], 10),
//     createDev('Frania', ['koci'], 1),
//   ];
  
//   function createDev(firstName, languages, experience) {
//     let dev = {
//       firstName,
//       languages,
//       experience,
//     };
  
//     return dev;
//   }


function increment() {
    let counterElem = document.querySelector('.counter');
    counterElem.innerHTML = Number(counterElem.innerHTML) + 1;
    let score = Number(counterElem.innerText);
}




// Primitive VS Reference Data Types

// Prymitywne typy danych to:
// - String
// - Number
// - Boolean 


// Reference Data types to:
// - Obiekty
// - Listy


