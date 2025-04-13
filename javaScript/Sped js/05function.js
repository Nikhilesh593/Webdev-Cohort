// function greet(name){
//     console.log(`hellow${name}`);
    
// }
// greet("nikhilesh")
// greet("piyush")

// console.log(`my age is ${age}`);
// var age = 25
// console.log(`my age is ${age}`);


// proxy concept
function negativeaINdex(arr){
    
    
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop)
            if(index<0){
                return target[target.length+index]
            }
            return target[index]
        },
        //get the negative idex set used to get the valu like -2 five 4
        set(target,prop,value){
            const index = Number(pro)
            if(index < 0){
                target[target.length+index] = value
            }
            else{
                target[index]=value
            }
            return true
        }
        
    })
}

let arr =[1,2,3,4,5]
let newarr =negativeaINdex(arr)
console.log(newarr[-2])