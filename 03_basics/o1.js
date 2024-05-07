const sy=Symbol("ka1");
console.log(sy);
const emp={
    name:"kapil",
    age:23,
    fun:function(){console.log("hellllo")},
    // [kapil]:"ka",
    subject:"js",
    [sy]:"this is a symbol"
}
// console.log(emp.name);
// console.log(emp[sy]);
// // console.log(typeof [kapil]);
// console.log(typeof [sy]);
// console.log(emp);
emp.greeting=function(){
    console.log(`Heloo ${this.name}`)
}
console.log(emp.greeting());
console.log(emp.fun());
console.log(emp);