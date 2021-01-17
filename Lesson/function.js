function cutFruitpieces(fruit){
    return fruit *4;
}
function fruitProcessor(apples,oranges){
    const applePieces = cutFruitpieces(apples);
    const orangePieces = cutFruitpieces(oranges);

    const juice = `Fruit with ${applePieces} apples and ${orangePieces} organes.`;
    return juice;
}
console.log(fruitProcessor(2,3));