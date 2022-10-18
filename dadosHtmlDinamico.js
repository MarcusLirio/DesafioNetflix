
function SetStorage()
{


    localStorage.setItem('filmeExecutando','Ok')

    let text;
    if (confirm(`Deseja pausar ?`)) {
        text = 'Filme pausado!'
        localStorage.removeItem('filmeExecutando')
    } 
    else {
        text = 'Filme executando !'
        localStorage.setItem('filmeExecutando','Ok')
    }
    
    
}

function ConstroiTabelaFilmes() 
{
    var generos = ArrayDeFilmes();

    var html = "";

    for (var i = 0 ; i < generos.length; i++)
    {
            var genero = generos[i];
            var titulo = (genero.genero) ? 'genero':'';
            html += 
                "<h1 class='"+titulo+"'>" + genero.genero + 
                "</h1> \
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
                <th>Assistir</th> \
                </tr> \
                </thead> \
                <tbody id='tbodyFilmes'>";

            for (var x = 0; x < genero.filmes.length; x++)
            {
                var filme = genero.filmes[x];			
                var classeLinha = (filme.ativo == true) ? 'tdativoTrue':'tdativoFalse';
                var classFicacao = (filme.classificacaoIndicativa >= 18) ? 'etaria':'';
                
                html += 
                    "<tr class='"+classeLinha+"'> \
                    <td>" + filme.filmeId + "</td> \
                    <td>" + filme.nome + "</td> \
                    <td class='"+classFicacao+"'>" + filme.classificacaoIndicativa + "</td> \
                    <td>" + filme.image + "</td> \
                    <td>" + filme.ativo + "</td> \
                    <td>" + filme.dataCriacao + "</td> \
                    <td>" + filme.avaliacao + "<td> \
                        <button name='' onclick='SetStorage()'>&#10148</button> \
                    </td> \
                    </tr>";   
            }
                    
            html += 
            "</tbody> \
            </table>";		
            document.getElementById('containerTabelasFilmes').innerHTML = html;
    }
}
