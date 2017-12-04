function numprimers (numero) {
    var i=2;
    while(i<numero) {
        if(numero%i==0) {
            return false;//és un número primer//
        }
        i++;
        return true;//no és un número primer//
    }
}