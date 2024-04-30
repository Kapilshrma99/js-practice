let first = "winner";
let second = first;
second="losser";
console.log(second,first);//for primitive we have access only on hthe the copy of variable.
let user1={
    name:"kapil",

    rollno:29
}
let user2=user1;
user2.name="akshay";
console.log(user1.name,user2.name);//but on non-prmitive we have access on all the reference.