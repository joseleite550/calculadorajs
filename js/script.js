function juntarNatela(valor) {
    const expressao = getVisor();
    if(expressao == "Erro"){
        cleartela();
    }
    if(IsOperador(valor)){
        if(expressao == "")
            return;
        var ultimoCaractere = getUltimoCaractere();
        if(IsOperador(ultimoCaractere))
            return;
    }	
    document.getElementById('tela').value += valor;     
}	
function calcularResultado() {
    try {
        const expressao = getVisor();
             if(expressao.length >1) {
                 var ultimoCaractere = getUltimoCaractere();
                 if(IsOperador(ultimoCaractere)) {
                    alert("Não foi possivel realizar o calculo");
                 }else{
                    const resultado = eval(expressao);
                    setVisor(resultado);
                 }
         }
    }catch (error) {
        console.log(error);
        setVisor('Erro');
    }
}
function cleartela() {
    setVisor('');
}
function apagar() {
    const expressao = getVisor();
    setVisor(expressao.substring(0,expressao.length-1));
}
function getVisor(){
    return document.getElementById('tela').value;
}
function setVisor(valor){
    document.getElementById('tela').value = valor;
}
function IsOperador (valor){
    return valor == "/" || 
    valor == "*" || 
    valor == "+" || 
    valor == "-";
  }
function getUltimoCaractere(){
    var expressao = getVisor();
    return expressao.substring(expressao.length-1,expressao.length)
}