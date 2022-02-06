function adicionePalavra(){


    Swal.fire({
        title: 'Qual palavra você quer adicionar?',
        input: 'text',
        customClass: {
        validationMessage: 'my-validation-message'
        },
        preConfirm: (value) => {
        if (!value) {
            Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Por favor, digite uma palavra'
            )
        }
        }       
    })
    var botaoConfirma = Swal.getConfirmButton();
    botaoConfirma.addEventListener("click",function(){
    input = Swal.getInput();
    novaPalavra = input.value;
    if(novaPalavra.length>=4){

        palavras.push(novaPalavra);
        console.log(palavras);

    }
})
    
 }



var adicionarPalavra = document.querySelector("#adicionar-palavra");

adicionarPalavra.addEventListener("click",adicionePalavra);
