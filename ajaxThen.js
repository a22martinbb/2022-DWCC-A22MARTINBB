// function tiempo(tiempo) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(tiempo)
//             },3000
//         )
//     })
// }

// var promise = tiempo("Soleado");

// promise.then(function (data) {
//     console.log(data);
// });


// /// 2.- 

// function ejercicio2(param) {
//     return new Promise(function (resolve, reject) {
//         if ((typeof param) != "number") {
//             reject(new Error("Error: not a number"));
            
//         }

//         if ((param % 2) != 0) {
//             setTimeout(function () {
//                 resolve("impar")
//             }, 1000);
//         } else {
//             setTimeout(function () {
//                 resolve("par")
//             }, 2000);
//         }
//     })
// }

// var promise = ejercicio2("hol");
// promise.then(
//     function (message) {
//         console.log(message)
//     },
//     function (error) {
//         console.log(error);
//     }
// )

// /// 3.-
// // var promise = new Promise(function(resolve, reject) {
// //     resolve(1);
// //     setTimeout(() => resolve(2), 1000);
// // });
// // promise.then(console.log);

// //Devolve -1- xa que o programa remata no primeiro resolv


// /// 4.-
// function delay(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve()
//         },ms)  
//     })
    
// }
    
// delay(3000).then(() => console.log('Mensaxe obtida despois de 3 segundos'));


function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}
    
    let promise = job(true);
    promise
        .then(function (data) {
            console.log(data);
            return job(false);
        })
        .catch(function (error) {
            console.log(error);
            return "Error caught";
        })
        .then(function (data) {
            console.log(data);
            return job(true);
        })
        .catch((error) => console.log(error));