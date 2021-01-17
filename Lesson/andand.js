const hasDriverLicense = false;
const hasGoodVision = true;

console.log(hasGoodVision && hasDriverLicense);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense); //not have driver lesson nguoc voi gia tri gang


if( hasDriverLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
}else{
    console.log("Some else shoudld Drive");
}

const isTired    = true ;
console.log(hasDriverLicense && hasGoodVision && isTired);