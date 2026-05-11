const senha1 = "CATAVENTO";

let input = document.getElementById("input");

input.addEventListener('keypress' , function(event){

    if(event.key === 'Enter'){

        event.preventDefault();

        let senha = input.value;
        senha = senha.toUpperCase();
        console.log(senha);

        switch(senha){

            case senha1:
                window.location.href = "alusao/pages/catavento.html";
                break;

        }

    }

});
