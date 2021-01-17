
//5 FALSY values 0,'', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));



//
const money = 100;
if(money) {
    console.log("Dont spend it all ");
}else{
    console.log("you should get a job ");
}

let height = 0 ;
if(height){
    console.log("yay height is defined ");

}else{
    console.log("heigh is UNDEFINED")
}