class person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
    getfullname() {
        return `${this.fname} ${this.lname}`
    }
}
class A {
    sum = function () {

    }
}

const p1 = new person("nikhiles", "sahu")
const p2 = new person("hitesh", "choudhry")

console.log(p1.getfullname());
