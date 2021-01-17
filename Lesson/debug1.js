const calcTempAmplitureBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp != 'number') continue;

        debugger;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

    }
    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcTempAmplitureBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);












