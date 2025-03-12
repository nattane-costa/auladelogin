document.getElementById("meuFormulario")
          .addEventListener("submit", function (e) {
          e.preventDefault();

          console.log("TÁ FUNCIONANDO!!!!");  
        
          let usuario = document.getElementById("usuario").value;
          let senha = document.getElementById("senha").value;
       
            console.log(usuario);
            console.log(senha);

           if (usuario === "admin" && senha === "1234") {
                alert("Login bem-sucedido!");
              } else {
                alert("INFORMAÇÕES INCORRETAS DE LOGIN!");
              }

        });


/*





















          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;
          let errorMessage = document.getElementById("error-message");

          if (username === "admin" && password === "1234") {
            errorMessage.textContent = "";
            alert("Login bem-sucedido!");
          
          } else {
            errorMessage.textContent = "Usuário ou senha inválidos!";
          }
        });*/

