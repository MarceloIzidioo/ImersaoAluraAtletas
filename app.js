function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa pesquisar por um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada elemento (dado) dentro do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML de cada resultado, formatando os dados do objeto 'dado'
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }

        
    }
    // O operador += concatena o novo HTML à string 'resultados' a cada iteração do loop

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Substitui o conteúdo HTML da seção 'resultados-pesquisa' pelos resultados construídos
    section.innerHTML = resultados;

    // Limpa a caixa de texto após a pesquisa
    document.getElementById("campo-pesquisa").value = ""

}





