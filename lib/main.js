function main(i){
    let res = '';
    let init = i;
    while(i > 2){
        res += `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.
`;
        i--;
    }
    if(i === 2) {
        res += `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`;
        i--;
    }
    if(i === 1) {
        res += `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
`;
        i--;
    }
    if(i === 0){
        res += `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${init} bottles of beer on the wall.`;
    }
    return res;
}
module.exports = main;
