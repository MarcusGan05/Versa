const fs = require('fs');

function makeBigBangArray() {
    const arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 ===0){
            arr.push("BIGBANG");
        }else if(i % 3 === 0){
            arr.push("BIG");
        }else if(i % 5 === 0){
            arr.push("BANG");
        }else {
            arr.push(i.toString());
        }
    
    }
    return arr
}

const bigbang =   makeBigBangArray();
fs.writeFile('output.json', JSON.stringify(bigbang), (err) => {
    if (err) throw err;
    console.log('Array has been generated and saved to output.json');
});
