/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result= object.assing({},foo)
    delete result.alias;
//Nombre
let Nombre = result.name;
result.name = Nombre[0].toUppercase() + Nombre. slice(1);
//ROL
roles.push(roleSuperUser,roleUser);
let roles = result.roles[0];
result.roles[0] = roles.toUppercase();
//habilidades
let RH = result.skills
//adicion
RH.slice(0,0, skills[0], skills[1])
RH.slice(5,0, skills[2])
RH.push(skills[3])
//modificaciones
result.skills= RH.map(RH = RH.charAt().toUppercase() +RH.substring());
result.skills[3]= RH[3].toUppercase();
result.skills[4]= RH[4].toUppercase();
//niveles
levels.splice(0,1,{LEVEL:"L1"})
levels.splice(1,1,{LEVEL:"L2"})
levels.splice(2,1,{LEVEL:"L3"})
foo.levels = levels
//log(RH);
//log(result)
//export result
module.exports = result; 