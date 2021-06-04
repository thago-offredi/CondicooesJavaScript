var agora= new Date()
var horas= agora.getHours() 
console.log("Agora são exatamente " + horas + " horas. ")
if(horas<=8){
    console.log("Bom dia ")
}else if(horas<=18){
console.log("Boa tarde")
}else if(horas>=22){
console.log("Boa madrugada") 
}    
else 
    console.log("Boa noite")
    

