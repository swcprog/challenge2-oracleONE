// quase tudo aqui ainda é experimental, aceito sugestões e críticas !
// ainda não consigo fazer dar certo quando a palavra tem letras repetidas
// ainda sem estilo, comecei pela lógica

var entrada = document.querySelector("#entrada"); // uma entrada pra pegar as letras
var palavra = "estante"; // sorteando uma palavra da lista de palavras
var erros = 0; // variável pra contar os erros
var palpite = []; // array pra guardar o chute de letra
var erradas = document.querySelector("#erradas"); //tranzendo a área de letras erradas do HTML
var certas = document.querySelector("#certas"); // trazendo a área de letras certas do HTML
var letrasErradas = []; //lista das letras erradas que foram chutadas
var letraRepetida = document.querySelector("#letra-repetida"); //variável pra enviar uma mensagem quando a letra for repetida




criaListaPalpite(palavra); //cria uma lista com os chutes


entrada.addEventListener("click",compara); //envia a letra quando o campo de texto é clicado
    
function compara(){ //funcao que testa se o chute é certo ou errado

    var texto = entrada.value.split(""); //faz funcionar mesmo se o usuário digitar um trecho da palavra de uma vez, como se fosse o "chute final"

   
    for (var index = 0; index < texto.length; index++) {

        var letra = texto[index]; 

        if (palavra.indexOf(letra) == -1){ //verficando se o palpite não existe na palavra - foi a forma que eu encontrei pra fazer

            var letrasErradasAux = letrasErradas.join(""); // fazendo verificação pra que a letra errada não se repita

            if(letrasErradasAux.indexOf(letra) == -1){ //caso a letra não tenha sido testada ainda 

               
                entrada.value = ""; //limpando a entrada
                erros++; //incrementando o contador de erros
                letrasErradas.push((letra+" ")); //colocando o palpite errado na lista de palpites errados
                erradas.innerHTML = letrasErradas.join("").toUpperCase(); //exibindo na tela o palpite errado
                letraRepetida.classList.add("invisible"); //deixando a mensagem de "letra repetida" invisível

            }else{ //quando a entrada errada se repete
                
                
                entrada.value=""; //limpando a entrada
                letraRepetida.classList.remove("invisible"); //deixando a mensagem de "letra repetida" visível
                
            }


        }else{ 
              
            if(palpite.includes(letra)){

                letraRepetida.classList.remove("invisible"); //deixando a mensagem de "letra repetida" visível

            }

            entrada.value = ""; //limpando o campo da entrada

            for(var i = 0; i<palavra.length; i++){

                var posicao = palavra.indexOf(letra,i); //pegando a posição onde o palpite se encaixa na palavra
            
                if(palpite[posicao]==letra){ //caso o palpite correto se repita

                    
                     
                

                }else{ //caso seja a primeira ocorrencia do determinado palpite correto
                    
                    

                        palpite[posicao]=letra; //trocando a letra na posicão correta da lista de palpites
                        certas.innerHTML = palpite.join("").toUpperCase(); //exibindo a letra na área de letras corretas
                        letraRepetida.classList.add("invisible"); //deixando a mensagem de "letra repetida" invisível
                        verificaFim(); //verifica se já acertou todas as letras pra acabar o jogo              
                }
            }    
        }

        if (erros > 3){ //se errar três vezes o jogo acaba - coloquei poucos erros pra ocasião de teste


            setTimeout(function(){


                location.reload() //recarrega a página

                alert("Seu pescoço foi pra forca, a palavra certa era " + "***" + palavra.toUpperCase()+ "***");

                

            },500)

            
            
            
        }

    }
    
}

function criaListaPalpite(palavra){ //função pra que a lista de palpites tenha o mesmo tamanho da palvra
    for(i=0;i<(palavra.length);i++){
        palpite.push("_ ");
    }
    certas.innerHTML = palpite.join("");
    return palpite;
}

function verificaFim(){ //função pra verificar se o jogo já terminou, caso o número de acertos seja do tamanho da palavra a ser descoberta
    
    var palpiteAux = palpite.join("");

    if(palpiteAux==palavra){

        

        setTimeout(function(){
            alert("vc venceu");
            
            
        },1500)  

        setTimeout(function(){
            location.reload();
        },1501)  
    }
}

function sorteiaPalavra(){ //função pra sortear uma palavra ateatoriamente

    var palavras = ["red", "black", "blue", "grey", "coral", "white", "pink", "brown", "ciano", "orange"];

    var tamanho = palavras.length;

    var index = Math.floor(Math.random()* tamanho);

    console.log(index);

    var palavra = palavras[index];

    return palavra;

}
