const teas = {
    name: "lemon tea",
    "type": "green",
    caffine: "low",

}
console.log(teas.name);
console.log(teas["type"]);//if keay have space 

console.log(teas.type);


teas.origin = "india"
teas.caffine = "medium"
delete teas.type
console.log(teas);
console.log("origin " in teas);//for check is a key present or not

for (let key in teas) { //for in loop to print object
    console.log(key + ":" + teas[key]);

}
const mytes = {
    greentea: {
        name: "green tea"
    },
    blacktea: {
        name: "blscktea"
    }
}
const teacopy = { ...teas }
console.log(teacopy);
