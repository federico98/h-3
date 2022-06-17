/**
* modificar los valores de las propiedades (name y role) del objeto result,
* nombre -> capital,
* rol -> superior
*
*
* salida => {
    identificación: 100,
    nombre: "Foo",
    Rol: "ADMINISTRADOR"
}
*/
let result=  {
    identificación : 100 ,
    nombre : "foo" ,
    rol : "administrador"
} ;
result.name = "Foo"
result.role = "ADMINISTRADOR"

console.log (result)
//exportar resultado
module.exportaciones  =  result ; 