/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
let inicio = 0;
let arrLen = arr.length;
while(inicio<arrLen){
    if((Object.values(arr[inicio]) % 2 )!=0){
        result.push(...Object.values(arr[inicio]));
    }
    inicio++;
}
//export result
module.exports = result; 