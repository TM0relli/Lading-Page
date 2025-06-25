function mostrarPagina(pagina){
    const conteudo = document.getElementById("conteudo");
    if(pagina === "sobre"){
        conteudo.innerHTML = `
        <section> 
        <h2> Sobre mim</h2>
        <p>Desenvolvedor com foco em Front-End, performance e resultados. Atualmente estou em busca de oportunidades para ganhar experiência prática na área, mas já venho estudando e desenvolvendo projetos próprios para otimizar sistemas e aumentar conversões.</p>
        </section> `;
    }else if (pagina === "projetos") {
        conteudo.innerHTML = `
        <section>
        <h2> Projetos Pessoais</h2>
        <div class="projetos" 
        <h3> Lading Page com Alta Conversão</h3>
        </div>
        </section>`;
    } else if (pagina === "contato") {
        conteudo.innerHTML = `
          <section>
            <h2>Vamos conversar?</h2>
            <p>Entre em contato por:</p>
            <a href="mailto:email@exemplo.com" class="btn"> E-mail</a><br><br>
            <a href="https://www.linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer" class="btn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
              LinkedIn
            </a><br><br>
            <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer" class="btn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              GitHub
            </a>
          </section>
        `;
    }else{
        conteudo.innerHTML = `
        <header> 
        <h1> Olá, sou <span class="destaque"> Tomas</span></h1>
        <p> Transformo ideias em soluções digitais que impactam negócios.</p>
        <button onclick="mostrarPagina('contato')" class="btn">Fale comigo></button>
        </header>`;
    }
}

//Mostrar página inicial por padrão
mostrarPagina('pagina');
