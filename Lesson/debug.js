const meanKelvin = function () {
    const measurement = {
        type = 'temp',
        unit = 'celcius',
        value: prompt('Degree celcius'),
    }

    console.log(measurement);
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;

  

};

console.log(measureKelvin());


//console.log(measurement.value);
//console.log(measurement.value);
//console.log(measurement.value);

