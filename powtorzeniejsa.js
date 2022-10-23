// // window.alert('test');
// // console.log(TextDecoderStre)

// // let test = "test";

// // if (test === "test") {
// //     var val = "val";
// //     console.log("inside", val)
// // }


// // // console.log('outside', val);



// // console.log(test);
// // var test = 'test';




// function nazwaFunkcji(parametry) {
//     console.log();

// }


// let list = [1, 2, 3];
// let sum = 0;

// function add(val1, val2) {
//     return val1 + val2;
// }

// for (let i = 0; i < list.length; i++ ) {
//     sum = add(sum, list[i]);
//     console.log(sum)
// }







const devList = [
    createDev('Oliwia', ['js'], 5),
    createDev('Adam', ['python'], 10),
    createDev('Frania', ['koci'], 1),
]


function createDev(firstName, languages, experience) {
    let dev = {
        firstName,
        languages,
        experience
    }

    return dev;
    }

console.log(devList);