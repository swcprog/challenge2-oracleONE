var entrada = document.querySelector("#entrada"); 
var erros = 0; 
var palpite = [];
var erradas = document.querySelector("#erradas"); 
var certas = document.querySelector("#certas"); 
var letrasErradas = []; 
var letraRepetida = document.querySelector("#letra-repetida");
var botaoChutar = document.querySelector("#btn-entrada");
var imagemForca = document.querySelector(".imagem-forca");
var palavras = ["red", "black", "blue", "grey", "coral", "white", "pink", "brown", "ciano", "orange"];
var palavra = sorteiaPalavra(palavras); 



criaListaPalpite(palavra);
entrada.focus(); 


botaoChutar.addEventListener("click",compara); 
    
function compara(){ 

    var texto = entrada.value.split(""); 
   
    for (var index = 0; index < texto.length; index++) {

        var letra = texto[index]; 

        if (palavra.indexOf(letra) == -1){ 

            var letrasErradasAux = letrasErradas.join(""); 

            if(letrasErradasAux.indexOf(letra) == -1){ 

               
                entrada.value = ""; 
                erros++; 
                letrasErradas.push((letra+" ")); 
                erradas.innerHTML = letrasErradas.join("").toUpperCase(); 
                letraRepetida.classList.add("invisible"); 

                if (letrasErradas.length == 1) {
                    imagemForca.classList.remove("erro0");
                    imagemForca.classList.add("erro1")
                }
                if (letrasErradas.length == 2) {
                    imagemForca.classList.remove("erro1");
                    imagemForca.classList.add("erro2")
                }
                if (letrasErradas.length == 3) {
                    imagemForca.classList.remove("erro2");
                    imagemForca.classList.add("erro3")
                }

                if (letrasErradas.length == 4) {
                    imagemForca.classList.remove("erro3");
                    imagemForca.classList.add("erro4")
                }

                if (letrasErradas.length == 5) {
                    imagemForca.classList.remove("erro4");
                    imagemForca.classList.add("erro5")
                }
                if (letrasErradas.length == 6) {
                    imagemForca.classList.remove("erro5");
                    imagemForca.classList.add("erro6")
                }

            }else{ 
                
                
                entrada.value="";
                letraRepetida.classList.remove("invisible"); 
                
            }


        }else{ 
              
            if(palpite.includes(letra)){

                letraRepetida.classList.remove("invisible"); 

            }

            entrada.value = ""; 

            for(var i = 0; i<palavra.length; i++){

                var posicao = palavra.indexOf(letra,i); 
            
                if(palpite[posicao]==letra){                    
                     
                

                }else{ 
                    
                    

                        palpite[posicao]=letra; 
                        certas.innerHTML = palpite.join("").toUpperCase(); 
                        letraRepetida.classList.add("invisible"); 
                        verificaFim();       
                }
            } 
            
        }

        if (erros > 7){ 


            setTimeout(function(){

                alertaPerdeu(palavra);
              
               
            },300)

            
            
            
        }

    }

    entrada.focus();
    
}

function criaListaPalpite(palavra){ 
    for(i=0;i<(palavra.length);i++){
        palpite.push("_ ");
    }
    certas.innerHTML = palpite.join("");
    return palpite;
}

function verificaFim(){ 
    
    var palpiteAux = palpite.join("");

    if(palpiteAux==palavra){

        

        setTimeout(function(){
            alertaVenceu(palavra);
            
            
        },500)  
 
    }
}

function sorteiaPalavra(palavras){ 
    
    var tamanho = palavras.length;
    var index = Math.floor(Math.random()* tamanho);
    var palavra = palavras[index];
    return palavra;

}

function alertaPerdeu(palavra){
      Swal.fire({
        title: 'Uhhg!!',
        text: 'A palavra certa era *'+palavra.toUpperCase()+"*",
        imageUrl: "img/bg_sweetalert.gif",
        confirmButtonColor: "#f4972d",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
      })
    var botaoSweet = Swal.getConfirmButton();
    botaoSweet.addEventListener("click",recarregar);
}


function alertaVenceu(palavra){
      Swal.fire({
        title: 'Parabéns!!',
        text: "Você venceu o desafio, pronto pro próximo ?",
        imageUrl: "img/bg_sweetalert2.gif",
        confirmButtonColor: "#f4972d",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        
      })
      var botaoSweet = Swal.getConfirmButton();
      botaoSweet.addEventListener("click",recarregar);
    

}

function recarregar(){
    location.reload();
}



