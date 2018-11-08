var MyCurrentAge = 19;
alert ('My Current Age - 19');

    console.log('START FOR')
    for (var i = 3; i < 19; i = i + 3) {
    if ( MyCurrentAge % 3 === 0) { 
        console.log ('Hurray!') 
    }
        console.log(`i = `, i);

         }


    console.log('START WHILE DO')
    var j = 3;
    while (j < 19) {
    console.log('j = ', j);
    j = j + 3;
    }

    console.log('START DO WHILE')
    var k = 3;
    do {
    console.log('k = ', k);
    k = k + 3;
   }while (k < 19)