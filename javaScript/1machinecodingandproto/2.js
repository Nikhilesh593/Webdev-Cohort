const teas = {
    name: "lemon tea",
    type: "green",
    caffine: "low"
}
console.log(teas.name);
console.log(teas["type"]); // used when "type":"grenn" is present

teas.origin = "china"
console.log(teas);

teas.caffine = "medum"

delete teas.type
console.log(teas);

console.log("origin" in teas);

for (let key in teas) {
    console.log(key + ":" + teas[key]);

}

const myTeas = {
    greentea: {
        name: "green tea",
        cups: {
            one: 1,
            two: 2
        }
    },
    blacktea: {
        name: "blacktea"
    }

}
console.log(myTeas);

const teacopy = {
    ...myTeas //shalow copy inthis case nested obj value will come in refrence excat copy will not happen
}
// console.log(teas);

console.log(teacopy);
teacopy.greentea.cups.one = 3
console.log(teacopy);
console.log(myTeas);

const sahu = new Object;
sahu.name = "nikhilesh"
sahu.age = 21
sahu.adress = {}
sahu.adress.city = "polosara"
sahu.adress.pno = 345
console.log(sahu);











