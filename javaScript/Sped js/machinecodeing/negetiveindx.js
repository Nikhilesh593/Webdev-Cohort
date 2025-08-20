// const user = {
//     name: "nikhilesh",
//     age: 23,
//     paswd: 2445
// }
// const proxyUser = new Proxy(user, {
//     get(target, prop) {
//         if (prop === "paswd") {
//             throw new Error("access denied");
//         }
//         return target[prop];
//     },
// });
// console.log(proxyUser.paswd);


function negativeaINdex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop)
            if (index < 0) {
                return target[target.length + index]

            }
            return target[index]
        },
        set(target, prop, valu) {

            const index = Number(prop);
            if (index < 0) {
                target[target.length + index] = valu
            }
            else {
                target[index] = valu;
            }
            return true
        }
    })
}
let arr = [2, 5, 8, 32, 0, 4, 3, 2, 16, 6, 90];

let newarr = negativeaINdex(arr)
console.log(arr[-1]);
console.log(newarr[-1]);
newarr[-1] = 88;
console.log(arr);
console.log(newarr);
