  function mostrarSenha() {
            const senha = document.getElementById("senha");
            senha.type = senha.type === "password" ? "text" : "password";
        }

        function acessarSistema() {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            // Aqui você pode adicionar a lógica de verificação ou redirecionamento
            alert("Login realizado com sucesso!");
            return false; // Para não recarregar a página
        }

        function redefinirSenha() {
            const email = prompt("Digite seu e-mail para redefinir a senha:");
            if (email) {
                alert(`Um link de redefinição foi enviado para: ${email}`);
            }
        }