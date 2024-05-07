// iife are function that are use ti stop the pollition from global scop variablr.these are call immmedately

(function kapil(n){
    console.log(`name ${n}`);
})("kapil");
let k= ((n)=>{
    console.log(`name ${n}`);
})("kapil");
console.log(k);