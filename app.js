function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Se campoPesquisa for uma string vazia

  if (!campoPesquisa) {
    section.innerHTML = "<p> não tem nada aqui :( digita alguma coisa ae. </p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados, titulo e descricao formatados

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre cada dado na lista de dados

  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    // Se título includes campoPesquisa

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria uma div para cada resultado, formatando o HTML com o título, descrição e link 
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <P class="descricao-meta">${dado.descricao}</P>
          <a href=${dado.link} target="_blank">Mais informações pelo Instagram</a>
        </div>
      `;
    }
  }

  if (!resultados){
    resultados = "<p>AInda não tô ligado nessas paradas.<p/>"
  }

  // Atribui os resultados formatados ao conteúdo da seção

  section.innerHTML = resultados;
}
