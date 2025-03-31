const obj1 = {
    fname: "nikhi",
    lname: "sahu",
    getfullname: function () {
        return `${this.fname} ${this.lname}`
    }
}
const obj2 = {
    fname: "hitesh",
    lname: "choudhry",
    getfullname: function () {
        return `${this.fname} ${this.lname}`
    }
}
console.log(obj1.getfullname());
console.log(obj2.getfullname());

//inthis case we voulating codingprinciple DRY-do not repeat yourself 
