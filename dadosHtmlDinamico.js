
function ConstroiTabelaFilmes() {
    var generos = ArrayDeFilmes();

    var html = "";
    for (var i = 0 ; i < generos.length; i++)
    {
        var genero = generos[i];

        html += "<h1>" + genero.nome + "</h1> \
                <table class='tblFilmes'> \
                    <thead> \
                        <tr> \
                            <th>Id</th> \
                            <th>Nome</th> \
                            <th>Classificacao Indicativa</th> \
                            <th>Filme</th> \
                            <th>Ativo</th> \
                            <th>Data Criacao</th> \
                            <th>Avaliacao</th> \
                            <th>Play</th> \
                        </tr> \
                    </thead> \
                    <tbody id='tbodyFilmes'>";

    for (var x = 0; x < genero.filmes.length; x++)
    {
    var filme = genero.filmes[x];			
    var fraseBotao = "Filme (" + filme.nome + ") Executando.";
    
    html += "<tr> \
                <td>" + filme.filmeId + "</td> \
                <td>" + filme.nome + "</td> \
                <td>" + filme.classificacaoIndicativa + "</td> \
                <td>" + filme.image + "</td> \
                <td id='tdativo'>" + filme.ativo + "</td> \
                <td>" + filme.dataCriacao + "</td> \
                <td>" + filme.avaliacao + "<td> \
                    <button name='' onclick='alert(\"" + fraseBotao + "\")'>&#10148</button> \
                </td> \
            </tr>";         
            
}

                // if(filme.ativo == false)
                
                //     document.getElementById('tdativo').innerHTML = "<style: background: red >" + "</style>"

                // else(filme.ativo == true)
                
                    
                

                
    
                           

html += "</tbody> \
    </table>";		
}

document.getElementById('containerTabelasFilmes').innerHTML = html;
}




   
  
 
    // document.getElementsByClassName("tdativo")[0].style.backgroundColor = "red";
    //     console.log(document.getElementsByClassName("tdativo")[0]).style.backgroundColor = "red";
    // }
    
    // else (filme.ativo == true)
    // {
    //     console.log(document.getElementsByClassName('tdativo')[0].style.backgroundColor="red");
    // }



