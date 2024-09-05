let chinchilas, ano

document.write(parseFloat("digite um numero de chinchilas"))
document.write(parseFloat("digite um numero de anos"))

ano = 3
chinchilas = chinchilas * ano

if (chinchilas >= 2){
    chinchilas = chinchilas + ano
    document.write(parseInt(`o numero de chinchilas triplicou em ${ano}`))
}

else{ (chinchilas < 2)
    document.write(parseInt(`o numéro é invalido de ${chinchilas}`))
}