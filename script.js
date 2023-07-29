
    // inicio do scrpts sobre break news
    var contentArray = ["<br><p><strong>CIG Anucia o seu primeiro website!</strong></p><br>","<br><p><strong>Nao é como começa é como se desenvolve que determina como Termina!</strong></p><br>","<br><p><strong>This is the Shine of Array</strong></p><br>","<br><P><strong> Vamos fazer esse projecto crescer e alcançar os seus objetivos. Para tal precisamos da contribuição de todos!</strong>=>Suzany</p><br>","<br><p><strong>O Site Promete</strong>- Afirma a helper html</p><br>","<br><p><strong>La especie que no se adapta en el tierra tiene que morir</strong>=>Charles Darwin, 1859</p><br>"];
    var index = 0;
    function changeContent() {
        document.getElementById("news").innerHTML = contentArray[index];
        index++; 

        if (index >= contentArray.length) {
        index = 0;
        }
    }

    setInterval(changeContent, 6000);
//fim de scripts sobre break news


        var logicaconjuntos = document.getElementById('logicaconjuntos')
        var algebra = document.getElementById('algebra')
        var proestatistica = document.getElementById('proestatistica')
        var analise1 = document.getElementById('analise1')
        const resultadoElemento = document.getElementById("resultados");
        var melhordasemana = document.getElementById('melhordasemana')
        var sec = document.getElementById('principal')
        var equacoes = document.getElementById('equacoes')
        var basicas = document.getElementById('op.basicas')
        var complexos = document.getElementById('n.complexos')
        var infc = document.getElementById('infc')
        var cad = document.getElementById('cadeiras')
        var ran = document.getElementById('ranking')
        var mem = document.getElementById('memorias')
        var aut = document.getElementById('autentico')
        var proj = document.getElementById('projectos')
        var opinfo = document.getElementById('opinformacoes')
        var chat = document.getElementById('savagechat')
        var escre = document.getElementById('cadastro')
        var fich = document.getElementById('fichas')
        var pan = document.getElementById('panorama')
        var dis = document.getElementById('modulos')
        var cad1 = document.getElementById('cadeirasano1')
        var cad2 = document.getElementById('cadeirasano2')
        var cad3 = document.getElementById('cadeirasano3')
        var cad4 = document.getElementById('cadeirasano4')
        var marc = document.getElementById('memory')
        var eu = document.getElementById('me')
        var vot = document.getElementById('votacao')
        var suces = document.getElementById('sucessoes')
        var limi = document.getElementById('limitescalculo')
        var inova = document.getElementById('projectosinovadores')
        var fgg = document.getElementById('fgg')


       
                
// sripts de campo de pesquisa
        var input = document.getElementById('campoPesquisa');
        input.addEventListener('input', function() {
        
        var valorDigitado = input.value.toLowerCase();
        if (valorDigitado === 'cadastrar' || valorDigitado === 'cadastro'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='block'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        } else if(valorDigitado === 'informaçoes' || valorDigitado === 'informacoes'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='block'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'documentos'|| valorDigitado === 'fichas'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'chat' || valorDigitado === 'bate papo' || valorDigitado === 'conversas'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='block'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none' 
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }else if(valorDigitado === 'memorias' || valorDigitado === 'lembranças' || valorDigitado === 'lembrancas'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='block'
            eu.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none' 
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }else if(valorDigitado === 'sobre site' || valorDigitado === 'informaçoes do site' || valorDigitado === 'informacoes do site'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='block'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            proj.style.display='none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'projectos'|| valorDigitado === 'projetos'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='block'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'ranking' || valorDigitado === 'classificaçao' || valorDigitado === 'raking'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='noone'
            vot.style.display = 'block'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'equaçoes' || valorDigitado ==='equacoes'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='block'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'calculadora' || valorDigitado ==='operaçoes basicas'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='block'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='block'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'complexos' || valorDigitado ==='numeros complexos'|| valorDigitado === 'numeros imaginarios' || valorDigitado === 'imaginarios'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'block'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none' 
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }else if(valorDigitado === 'cadeiras' || valorDigitado ==='todas cadeiras'){
            opinfo.style.display='block'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='block'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'analise 1' || valorDigitado ==='analise matematica 1'||valorDigitado == 'analise1'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='block'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'sucessoes'|| valorDigitado === 'progressoes' || valorDigitado === 'Progressão' || valorDigitado === 'progressao'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'block'
            limi.style.display = 'none' 
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none' 
        }else if(valorDigitado === 'inicio' || valorDigitado === 'pagina inicial' || valorDigitado === 'pagina principal'){
            opinfo.style.display='none'
            sec.style.display='block'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none' 
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'  
        }else if(valorDigitado === 'limites'|| valorDigitado === 'limite' || valorDigitado === 'calculadora de limites'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='none'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'block'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }else if(valorDigitado === 'fgg'||valorDigitado === 'fundamentos de gg'||valorDigitado === 'fundamentos de geologia e geoformologia'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='block'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }else if(valorDigitado === 'alga'||valorDigitado ==='algebra linear'||valorDigitado ==='geometria analitica'||valorDigitado==='algebra'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='block'
            logicaconjuntos.style.display='none'
        }else if (valorDigitado ==='ltc'||valorDigitado ==='logica e teoria de conjuntos'||valorDigitado==='logica'||valorDigitado==='teoria de conjuntos'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='none'
            logicaconjuntos.style.display='block'
        }else if (valorDigitado==='probabilidade estatistica'||valorDigitado==='probabilidade e estatistica'||valorDigitado==='pe'||valorDigitado==='probabilidade'||valorDigitado==='estatistica'){
            opinfo.style.display='none'
            sec.style.display='none'
            fich.style.display='block'
            escre.style.display='none'
            chat.style.display='none'
            pan.style.display='none'
            dis.style.display='none'
            marc.style.display='none'
            eu.style.display='none'
            proj.style.display='none'
            equacoes.style.display='none'
            basicas.style.display='none'
            complexos.style.display= 'none'
            vot.style.display='none'
            suces.style.display = 'none'
            limi.style.display = 'none'
            inova.style.display='none'
            analise1.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='block'
            algebra.style.display='none'
            logicaconjuntos.style.display='none'
        }
    })
       
// inicio de scripts de Menu
function selecionarmenu(menu) {
  if (menu === 'information') {
    fgg.style.display='none'
    proestatistica.style.display='none'
    algebra.style.display='none'
    logicaconjuntos.style.display='none'
    analise1.style.display= 'none'
    opinfo.style.display='block'
    sec.style.display='none'
    fich.style.display='none'
    escre.style.display='none'
    chat.style.display='none'
    pan.style.display='none'
    dis.style.display='none'
    marc.style.display='none'
    eu.style.display='none'
    cad2.style.display = 'none'
    vot.style.display='none'
    suces.style.display = 'none'
    inova.style.display='none'
  }else if (menu === 'documents') {
    opinfo.style.display='none'
    sec.style.display='none'
    fich.style.display='block'
    escre.style.display='none'
    chat.style.display='none'
    pan.style.display='none'
    dis.style.display='none'
    marc.style.display='none'
    eu.style.display='none'
    vot.style.display='none'
    suces.style.display = 'none'
    inova.style.display='none'
    analise1.style.display='none'
    fgg.style.display='none'
    proestatistica.style.display='none'
    algebra.style.display='none'
    logicaconjuntos.style.display='none' 
  }else if(menu === 'cadastrar'){
    opinfo.style.display='none'
    sec.style.display='none'
    fich.style.display='none'
    escre.style.display='block'
    chat.style.display='none'
    pan.style.display='none'
    dis.style.display='none'
    marc.style.display='none'
    eu.style.display='none'
    vot.style.display='none'
    suces.style.display = 'none'
    inova.style.display='none'
    analise1.style.display='none'
    fgg.style.display='none'
    proestatistica.style.display='none'
    algebra.style.display='none'
    logicaconjuntos.style.display='none'
    }else if(menu === 'chat'){
    opinfo.style.display='none'
    sec.style.display='none'
    fich.style.display='none'
    escre.style.display='none'
    chat.style.display='block'
    pan.style.display='none'
    dis.style.display='none'
    marc.style.display='none'
    eu.style.display='none' 
    vot.style.display='none'
    suces.style.display = 'none'
    inova.style.display='none'
    analise1.style.display='none'
    fgg.style.display='none'
    proestatistica.style.display='none'
    algebra.style.display='none'
    logicaconjuntos.style.display='none' 
    }else if(menu === 'inicio'){
        opinfo.style.display='none'
        sec.style.display='block'
        fich.style.display='none'
        escre.style.display='none'
        chat.style.display='none'
        pan.style.display='none'
        dis.style.display='none'
        marc.style.display='none'
        eu.style.display='none'
        proj.style.display='none'
        equacoes.style.display='none'
        basicas.style.display='none'
        complexos.style.display= 'none'
        vot.style.display='none'
        suces.style.display = 'none'
        limi.style.display = 'none' 
        inova.style.display='none'
        analise1.style.display='none'
    fgg.style.display='none'
    proestatistica.style.display='none'
    algebra.style.display='none'
    logicaconjuntos.style.display='none' 
  } else if(menu === 'night'){
    document.body.style.backgroundColor = "black"
  }else if(menu === 'light'){
    document.body.style.background = 'white'
  }else if(menu === 'pink'){
    document.body.style.backgroundColor = "pink"
  }else if(menu === 'yellow'){
    document.body.style.backgroundColor = "yellow"
  }else if(menu === 'brown'){
    document.body.style.backgroundColor = "brown"
  }else if(menu === 'navy'){
    document.body.style.backgroundColor = "navy"
  }
}

// scripts de bate papo
function limparHistorico() {
            localStorage.removeItem('usernamechat');
            localStorage.removeItem('senhachat');
            localStorage.removeItem('mensagens');
            var mensagemCadastro = document.getElementById('login-mensagem');
            mensagemCadastro.textContent = 'Histórico de cadastros limpo.';
            // Adicione mais itens relacionados ao cadastro, se houver
        }

        function verificarCadastro() {
            // ...
        }

        function cadastrarUsuario() {
            var usernamechat = document.getElementById('usernamechat').value.trim();
            var senhachat = document.getElementById('senhachat').value.trim();
            var mensagemCadastro = document.getElementById('login-mensagem');

            if (usernamechat && senhachat === 'cig2023') {
                localStorage.setItem('usernamechat', usernamechat);
                localStorage.setItem('senhachat', senhachat);
                verificarCadastro();
                mensagemCadastro.textContent = 'Login bem-sucedido!';
                document.getElementById('loginchat').style.display = 'none';
                document.getElementById('papo').style.display = 'block';
                document.getElementById('firewall').style.display = 'none';
                document.getElementById('mensagem').focus();
                exibirMensagens(); // Adicionado para exibir as mensagens ao carregar a área de bate-papo
            } else {
                mensagemCadastro.textContent = 'Login negado. Verifique a senha e tente novamente.';
            }
        }
        

        function exibirMensagens() {
            var mensagens = localStorage.getItem('mensagens');
            var mensagensDiv = document.getElementById('conversa');
            mensagensDiv.innerHTML = '';

            if (mensagens) {
                mensagens = JSON.parse(mensagens);
                for (var i = 0; i < mensagens.length; i++) {
                    var mensagem = mensagens[i];
                    var mensagemDiv = document.createElement('div');
                    mensagemDiv.className = 'mensagem';
                    if (mensagem.usernamechat === localStorage.getItem('usernamechat')) {
                        mensagemDiv.className += ' usuario';
                    } else {
                        mensagemDiv.className += ' outro-usuario';
                    }
                    mensagemDiv.innerHTML = '<strong>' + mensagem.usernamechat + ':</strong> ' + mensagem.texto;
                    mensagensDiv.appendChild(mensagemDiv);
                }
            }
        }

        function adicionarMensagem(usernamechat, texto) {
            var mensagem = { usernamechat: usernamechat, texto: texto };
            var mensagens = localStorage.getItem('mensagens');

            if (mensagens) {
                mensagens = JSON.parse(mensagens);
            } else {
                mensagens = [];
            }

            mensagens.push(mensagem);
            localStorage.setItem('mensagens', JSON.stringify(mensagens));
            exibirMensagens();
        }

        function sendsmschat() {
            var usernamechat = localStorage.getItem('usernamechat');
            var texto = document.getElementById('textoMensagemchat').value.trim();
            if (texto) {
                adicionarMensagem(usernamechat, texto);
                document.getElementById('textoMensagemchat').value = ''; // Limpa o campo de mensagem após o envio
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            verificarCadastro();

            document.getElementById('login-form').addEventListener('submit', function(event) {
                event.preventDefault();
                cadastrarUsuario();
            });

            document.getElementById('textoMensagemchat').addEventListener('keydown', function(event) {
                if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter (código 13)
                    event.preventDefault();
                    sendsmschat();
                }
            });
        });

//scrpts de informacoes
    function informacoes(){
        sec.style.display='none'
        pan.style.display='block'
        eu.style.display='none'
        dis.style.display='none'
        marc.style.display='none'
        opinformacoes.style.display='block'
        inova.style.display='none' 
    }
    function cadeiras(){
        marc.style.display='none'
        sec.style.display='none'
        pan.style.display='none'
        opinformacoes.style.display='block'
        dis.style.display='block'
        eu.style.display='none'
        vot.style.display='none'
        inova.style.display='none'
    }
    function memorias(){
        marc.style.display='block'
        sec.style.display='none'
        pan.style.display='none'
        opinformacoes.style.display='block'
        dis.style.display='none'
        eu.style.display='none'
        vot.style.display='none'
        inova.style.display='none'
    }
    function ranking(){
        sec.style.display='none'
        vot.style.display='block'
        pan.style.display='none'
        opinformacoes.style.display='block'
        eu.style.display='none'
        dis.style.display='none'
        marc.style.display='none'
        inova.style.display='none' 
    }
    function projectos(){
        sec.style.display='none'
        vot.style.display='none'
        pan.style.display='none'
        opinformacoes.style.display='block'
        eu.style.display='none'
        dis.style.display='none'
        marc.style.display='none'
        inova.style.display='block' 
           
    }
    
    function sobresite(){
        sec.style.display='none'
        pan.style.display='none'
        opinformacoes.style.display='block'
        eu.style.display='block'
        dis.style.display='none'
        marc.style.display='none'
        vot.style.display='none'
        inova.style.display='none'
    }
    //inicio de scripts de documentos
    function alga(){
            analise1.style.display='none'
            sec.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            algebra.style.display='block'
            logicaconjuntos.style.display='none'
        }
        function a_matematica(){
            analise1.style.display='block'
            sec.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            logicaconjuntos.style.display='none'
            algebra.style.display='none'
        }
        function f_geo(){
            fgg.style.display='block'
            sec.style.display='none'
            analise1.style.display='none'
            proestatistica.style.display='none'
            logicaconjuntos.style.display='none'
            algebra.style.display='none'
        }
        function p_estatistica(){
            analise1.style.display='none'
            sec.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='block'
            logicaconjuntos.style.display='none'
            algebra.style.display='none'
        }
        function ltc(){
            analise1.style.display='none'
            sec.style.display='none'
            fgg.style.display='none'
            proestatistica.style.display='none'
            logicaconjuntos.style.display='block'
            algebra.style.display='none'
        }
//fim de scripts de documentos


//fim de scripts de menu

//inicio de sscripts de cadastros
function verificarSeCadastrado(alcunha) {
            var pessoasCadastradas = localStorage.getItem("pessoasCadastradas");
            if (pessoasCadastradas) {
                pessoasCadastradas = JSON.parse(pessoasCadastradas);
                return pessoasCadastradas.some(function (pessoa) {
                    return pessoa.alcunha === alcunha;
                });
            }
            return false;
        }
        function limparCadastros() {
            localStorage.removeItem("pessoasCadastradas");
            var listaPessoas = document.getElementById("listaPessoascadastradas");
            listaPessoas.innerHTML = ""; // Limpa a lista de pessoas cadastradas na página
        }

        function registrar() {
            var alcunhaInput = document.getElementById("alcunha");
            var fotoInput = document.getElementById("rosto");

            var alcunha = alcunhaInput.value;
            var foto = fotoInput.files[0];

            if (verificarSeCadastrado(alcunha)) {
                alert("Usuário já cadastrado!");
                return;
            }

            var reader = new FileReader();
            reader.onloadend = function () {
                var fotoBase64 = reader.result;

                // Obter os dados salvos no armazenamento local
                var pessoasCadastradas = localStorage.getItem("pessoasCadastradas");
                var listaPessoas = document.getElementById("listaPessoascadastradas");

                if (pessoasCadastradas) {
                    pessoasCadastradas = JSON.parse(pessoasCadastradas);
                } else {
                    pessoasCadastradas = [];
                }

                // Adicionar o novo usuário à lista
                pessoasCadastradas.push({alcunha: alcunha, foto: fotoBase64});

                // Salvar os dados atualizados no armazenamento local
                localStorage.setItem("pessoasCadastradas", JSON.stringify(pessoasCadastradas));

                // Mostrar a lista de pessoas cadastradas em ordem alfabética
                listaPessoas.innerHTML = "";
                pessoasCadastradas.sort(function (a, b) {
                    // Ordena os objetos pelo nome (alcunha) em ordem alfabética
                    return a.alcunha.localeCompare(b.alcunha);
                });

                pessoasCadastradas.forEach(function(pessoa) {
                    var novoItemLista = document.createElement("div");
                    novoItemLista.className = "pessoa-cadastrada"; // Adicionado a classe para usar flexbox

                    var novoItemFoto = document.createElement("img");
                    novoItemFoto.src = pessoa.foto;
                    novoItemFoto.alt = pessoa.alcunha;
                    novoItemFoto.className = "avatar";

                    var novoItemTexto = document.createElement("span");
                    novoItemTexto.className = "nome-alcunha"; // Adicionado a classe para alinhar a alcunha
                    novoItemTexto.textContent = pessoa.alcunha;

                    novoItemLista.appendChild(novoItemFoto);
                    novoItemLista.appendChild(novoItemTexto);
                    listaPessoas.appendChild(novoItemLista);
                });

                alcunhaInput.value = "";
                fotoInput.value = "";
            };

            if (foto) {
                reader.readAsDataURL(foto);
            }
        }

        // Recuperar os dados salvos no armazenamento local ao carregar a página
        window.onload = function() {
            var pessoasCadastradas = localStorage.getItem("pessoasCadastradas");
            var listaPessoas = document.getElementById("listaPessoascadastradas");

            if (pessoasCadastradas) {
                pessoasCadastradas = JSON.parse(pessoasCadastradas);
                pessoasCadastradas.sort(function (a, b) {
                    // Ordena os objetos pelo nome (alcunha) em ordem alfabética
                    return a.alcunha.localeCompare(b.alcunha);
                });

                pessoasCadastradas.forEach(function(pessoa) {
                    var novoItemLista = document.createElement("div");
                    novoItemLista.className = "pessoa-cadastrada"; // Adicionado a classe para usar flexbox

                    var novoItemFoto = document.createElement("img");
                    novoItemFoto.src = pessoa.foto;
                    novoItemFoto.alt = pessoa.alcunha;
                    novoItemFoto.className = "avatar";

                    var novoItemTexto = document.createElement("span");
                    novoItemTexto.className = "nome-alcunha"; // Adicionado a classe para alinhar a alcunha
                    novoItemTexto.textContent = pessoa.alcunha;

                    novoItemLista.appendChild(novoItemFoto);
                    novoItemLista.appendChild(novoItemTexto);
                    listaPessoas.appendChild(novoItemLista);
                });
            }
        };

//inicio de scripts de votacao
function mostrarResultados() {
            const resultadoElemento = document.getElementById("resultadosvotacao");
            resultadoElemento.innerHTML = "";

            let alunoMaisVotado = "";
            let votosMaisVotado = 0;

            for (let j = 0; j < localStorage.length; j++) {
                const aluno = localStorage.key(j);
                const votos = parseInt(localStorage.getItem(aluno));

                resultadoElemento.innerHTML += `<p>${aluno} => ${votos} votos</p>`;

                if (votos > votosMaisVotado) {
                    alunoMaisVotado = aluno;
                    votosMaisVotado = votos;
                }
            }

            const melhordasemana = document.getElementById("melhordasemana");
            melhordasemana.innerHTML = `<p> ${alunoMaisVotado}</p>${votosMaisVotado} Votos<p>`;
        }

        function votar() {
           /*
            const dataAtual = new Date();
            const diaSemana = dataAtual.getDay();
            
            if (diaSemana !== 3) {
                alert("A votação só é permitida às sextas-feiras!");
                return;
            } 
            */
            //const senha = prompt("Digite a senha para votar:");

           // if (senha !== "cig2023") {
           //     alert("Senha incorreta. Votação não permitida!");
           //     return;
           // }
            

            const alunos = document.getElementsByName("aluno");
            let alunoSelecionado = "";

            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].checked) {
                    alunoSelecionado = alunos[i].value;
                    break;
                }
            }
            
            if (alunoSelecionado === "") {
                alert("Selecione um aluno para votar!");
                return;
            }
                
           const jaVotou = localStorage.getItem("jaVotou");
           
            
            if (jaVotou) {
                alert("Você já votou Broo!");
                return;
            }
                
            // Incrementa o número de votos do aluno selecionado
            let votosAtualizados = parseInt(localStorage.getItem(alunoSelecionado) || 0) + 1;
            localStorage.setItem(alunoSelecionado, votosAtualizados);
           localStorage.setItem("jaVotou", true);

            mostrarResultados();
        }

        document.addEventListener('DOMContentLoaded', function() {
            mostrarResultados();
            //localStorage.clear();
        });

//inicio scripts de calculadora basica
        function equa(){
            sec.style.display = 'none'
            equacoes.style.display='block'
        }
        function complexo(){
            sec.style.display = 'none'
            complexos.style.display='block'
        }
        function basic(){
            basicas.style.display='block'
            sec.style.display = 'none'
        }
        function sucessao(){
            sec.style.display = 'none'
            suces.style.display = 'block'
        }
        function limites(){
            sec.style.display = 'none'
            limi.style.display = 'block'    
        }
        function derivadas(){
            window.alert(`[ERRO] Pagina de calculo de Derivadas em desenvolvimento. Aguarde!`)
        }
    //limites
    function calcularLimite() {
    var funcao = document.getElementById("funcao").value;
    var tendencia = parseFloat(document.getElementById("tendencia").value);

    try {
        var expr = math.parse(funcao);
        var scope = {
            x: tendencia
        };
        var resultado = expr.evaluate(scope);
        var passos = [];
        passos.push("Passo 1: Substituir x por " + tendencia);
        passos.push("Passo 2: Avaliar a expressão");
        passos.push("Limite: " + resultado.toFixed(2));
        mostrarResultado(passos);
    } catch (error) {
        document.getElementById("resultadolimite").textContent = "Erro ao calcular o limite.";
    }
}

function calcularLimiteInfinito() {
    var funcao = document.getElementById("funcao").value;

    try {
        var expr = math.parse(funcao);
        var scope = {
            x: Infinity
        };
        var resultado = expr.evaluate(scope);
        var passos = [];
        passos.push("Passo 1: Substituir x por infinito");
        passos.push("Passo 2: Avaliar a expressão");
        passos.push("Limite tendendo ao infinito: " + resultado.toFixed(2));
        mostrarResultado(passos);
    } catch (error) {
        document.getElementById("resultadolimite").textContent = "Erro ao calcular o limite.";
    }
}

function calcularLimiteMenosInfinito() {
    var funcao = document.getElementById("funcao").value;

    try {
        var expr = math.parse(funcao);
        var scope = {
            x: -Infinity
        };
        var resultado = expr.evaluate(scope);
        var passos = [];
        passos.push("Passo 1: Substituir x por menos infinito");
        passos.push("Passo 2: Avaliar a expressão");
        passos.push("Limite tendendo ao menos infinito: " + resultado.toFixed(2));
        mostrarResultado(passos);
    } catch (error) {
        document.getElementById("resultadolimite").textContent = "Erro ao calcular o limite.";
    }
}

function mostrarResultado(passos) {
    var passoAPassoDiv = document.getElementById("passo-a-passo");
    passoAPassoDiv.innerHTML = "";

    var passoDiv = document.createElement("div");
    passoDiv.style.fontWeight = "bold";
    passoDiv.textContent = "Passo a Passo:";
    passoAPassoDiv.appendChild(passoDiv);

    for (var i = 0; i < passos.length; i++) {
        var passoDiv = document.createElement("div");
        passoDiv.textContent = passos[i];
        passoAPassoDiv.appendChild(passoDiv);
    }
}

    // equacoes
        function calcularEquacaoQuadratica() {
      var a = parseFloat(document.getElementById('quad-a').value);
      var b = parseFloat(document.getElementById('quad-b').value);
      var c = parseFloat(document.getElementById('quad-c').value);
      
      var delta = b * b - 4 * a * c;
      if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('quad-resposta').innerHTML = 'As raízes são: ' + x1 + ' e ' + x2;
      } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById('quad-resposta').innerHTML = 'A raiz dupla é: ' + x;
      } else {
        document.getElementById('quad-resposta').innerHTML = 'Não há raízes reais';
      }
    }
    
        function calcularEquacaoBiquadratica() {
      var a = parseFloat(document.getElementById('biquad-a').value);
      var b = parseFloat(document.getElementById('biquad-b').value);
      var c = parseFloat(document.getElementById('biquad-c').value);
      
      var delta = b * b - 4 * a * c;
      if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('biquad-resposta').innerHTML = 'As raízes são: ' + x1 + ' e ' + x2;
      } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById('biquad-resposta').innerHTML = 'A raiz dupla é: ' + x;
      } else {
        document.getElementById('biquad-resposta').innerHTML = 'Não há raízes reais';
      }
    }
    
        function calcularEquacao3Incognitas() {
      var a1 = parseFloat(document.getElementById('incog-a1').value);
      var b1 = parseFloat(document.getElementById('incog-b1').value);
      var c1 = parseFloat(document.getElementById('incog-c1').value);
      var d1 = parseFloat(document.getElementById('incog-d1').value);
      var a2 = parseFloat(document.getElementById('incog-a2').value);
      var b2 = parseFloat(document.getElementById('incog-b2').value);
      var c2 = parseFloat(document.getElementById('incog-c2').value);
      var d2 = parseFloat(document.getElementById('incog-d2').value);
      var a3 = parseFloat(document.getElementById('incog-a3').value);
      var b3 = parseFloat(document.getElementById('incog-b3').value);
      var c3 = parseFloat(document.getElementById('incog-c3').value);
      var d3 = parseFloat(document.getElementById('incog-d3').value);
      
      var det = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
      var detX = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
      var detY = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
      var detZ = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);
      
      if (det !== 0) {
        var x = detX / det;
        var y = detY / det;
        var z = detZ / det;
        document.getElementById('incog-resposta').innerHTML = 'As soluções são: x = ' + x + ', y = ' + y + ', z = ' + z;
      } else {
        document.getElementById('incog-resposta').innerHTML = 'Não há solução ou há infinitas soluções';
      }
    }
    
        function calcularEquacaoLinear() {
        var a = parseFloat(document.getElementById('linear-a').value);
      var b = parseFloat(document.getElementById('linear-b').value);
      
      if (a === 0) {
        if (b === 0) {
          document.getElementById('linear-resposta').innerHTML = 'A equação é uma identidade, ou seja, possui infinitas soluções';
        } else {
          document.getElementById('linear-resposta').innerHTML = 'A equação é impossível, ou seja, não possui solução';
        }
      } else {
        var x = -b / a;
        document.getElementById('linear-resposta').innerHTML = 'A solução da equação é: x = ' + x;
      }
    }
    function calcularEquacao2Incognitas() {
            // Obtenha os valores dos coeficientes a, b, c, d, e e f
            var a = parseFloat(document.getElementById("inco-a1").value);
            var b = parseFloat(document.getElementById("inco-b1").value);
            var c = parseFloat(document.getElementById("inco-c1").value);
            var d = parseFloat(document.getElementById("inco-a2").value);
            var e = parseFloat(document.getElementById("inco-b2").value);
            var f = parseFloat(document.getElementById("inco-c2").value);

            // Calcule os valores das incógnitas x e y
            var x = (c * e - b * f) / (a * e - b * d);
            var y = (a * f - c * d) / (a * e - b * d);

            // Exiba o resultado para o usuário
            document.getElementById("resultadoX").innerHTML = "O valor de x é: " + x;
            document.getElementById("resultadoY").innerHTML = "O valor de y é: " + y;
        }
    // operacoes basicas
        function somar() {
        var tn1= window.document.getElementById('txtn1')
        var tn2 = window.document.getElementById('txtn2')
        var res = window.document.getElementById('res')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var s = n1 + n2
        res.innerHTML = `<strong>Resultado:   ${s}</strong>`   

       }
        function Multiplicar() {
        var tn3= window.document.getElementById('txtn3')
        var tn4 = window.document.getElementById('txtn4')
        var prod = window.document.getElementById('prod')
        var n3 = Number(tn3.value)
        var n4 = Number(tn4.value)
        var p = n3 * n4
        prod.innerHTML = `<strong>Resultado:   ${p}</strong>`   
       }

        function Dividir () {
        var tn5= window.document.getElementById('txtn5')
        var tn6 = window.document.getElementById('txtn6')
        var quo = window.document.getElementById('quo')
        var n5 = Number(tn5.value)
        var n6 = Number(tn6.value)
        var q = n5 / n6
        quo.innerHTML = `<strong>Resultado:   ${q}</strong>`   
       }
        var a = window.document.getElementById('p')
        function clicar() {
         
         a.innerText = 'Estas a participar de um experimento de web'
         a.style.color= 'black'
         a.style.background= 'rgb(151, 31, 31)'
         
      }
        function entrar() {
        a.innerText = 'Bem vindo, clique'
      }
        function sair() {
        a.innerText = '21 ARTIMETCS SOLUTIONS'
        a.style.background= 'rgb(151, 31, 31)'
      }
    // numeros complexos
        function cosomar() {
            var real1 = parseFloat(document.getElementById("real1").value);
            var imag1 = parseFloat(document.getElementById("imag1").value);
            var real2 = parseFloat(document.getElementById("real2").value);
            var imag2 = parseFloat(document.getElementById("imag2").value);

            var resultadoReal = real1 + real2;
            var resultadoImag = imag1 + imag2;

            document.getElementById("resultado").innerHTML = "Resultado: Z = " + resultadoReal + " + " + resultadoImag + "i";
        }
        function cosubtrair() {
    var real1 = parseFloat(document.getElementById("real1").value);
    var imag1 = parseFloat(document.getElementById("imag1").value);
    var real2 = parseFloat(document.getElementById("real2").value);
    var imag2 = parseFloat(document.getElementById("imag2").value);

    var resultadoReal = real1 - real2;
    var resultadoImag = imag1 - imag2;

    document.getElementById("resultado").innerHTML = "Resultado: Z = " + resultadoReal + " + " + resultadoImag + "i";
}

        function comultiplicar() {
    var real1 = parseFloat(document.getElementById("real1").value);
    var imag1 = parseFloat(document.getElementById("imag1").value);
    var real2 = parseFloat(document.getElementById("real2").value);
    var imag2 = parseFloat(document.getElementById("imag2").value);

    var resultadoReal = (real1 * real2) - (imag1 * imag2);
    var resultadoImag = (real1 * imag2) + (imag1 * real2);

    document.getElementById("resultado").innerHTML = "Resultado: Z = " + resultadoReal + " + " + resultadoImag + "i";
    }
    function copotenciacao(){
            window.alert('[ERRO] Calculos de potenciaçao em desenvolvimento')
        }
        function coradiciacao(){
            window.alert('[ERRO] Calculos de Radiciaçao em desenvolvimento')  
        }

        function codividir() {
    var real1 = parseFloat(document.getElementById("real1").value);
    var imag1 = parseFloat(document.getElementById("imag1").value);
    var real2 = parseFloat(document.getElementById("real2").value);
    var imag2 = parseFloat(document.getElementById("imag2").value);

    var denominador = (real2 * real2) + (imag2 * imag2);

    var resultadoReal = ((real1 * real2) + (imag1 * imag2)) / denominador;
    var resultadoImag = ((imag1 * real2) - (real1 * imag2)) / denominador;

    document.getElementById("resultado").innerHTML = "Resultado: Z= " + resultadoReal + " + " + resultadoImag + "i";
}
//fim de scripts de calculadora basica
//inicio de sripts de sucessoes
function calcularsucessao(){
    var primeiroTermo = Number(document.getElementById("termo1").value);
      var segundoTermo = Number(document.getElementById("termo2").value);
      var terceiroTermo = Number(document.getElementById("termo3").value);
      var numerodetermo = Number(document.getElementById("numerodetermo").value);
      var dif1 = segundoTermo - primeiroTermo;
      var dif2 = terceiroTermo - segundoTermo
      var raz1 = terceiroTermo / segundoTermo;
      var raz2 = segundoTermo / primeiroTermo
    
      if (dif1 === dif2) {
        let somaaritmetico = calcularsomaProgressaoAritmetica(primeiroTermo, dif1, numerodetermo);
        let termoAritmetico = calcularProgressaoAritmetica(primeiroTermo, dif1, numerodetermo);
        document.getElementById("tipodesucessao").innerHTML = "<p><strong>Tipo de Sucessao:</strong> Progressão Aritmética</p>";
        document.getElementById("tipodesucessao").innerHTML += `<p><strong>Diferença:</strong> ${dif1}</p>`;
        document.getElementById("tipodesucessao").innerHTML += ` <p>O ${numerodetermo}º termo da progressão aritmética é: ${termoAritmetico}</p>`;
        document.getElementById("tipodesucessao").innerHTML += ` <p>A Soma dos ${numerodetermo} primeiros termos da progressão aritmética é: ${somaaritmetico}</p>`;
      } else if (raz1 === raz2) {
        let somaGeometrico = calcularsomaProgressaoGeometrica1(primeiroTermo, raz1, numerodetermo);
        //let somaGeometrico2 = calcularsomaProgressaoGeometrica2(primeiroTermo, raz1, numerodetermo);
        let termoGeometrico = calcularProgressaoGeometrica(primeiroTermo, raz1, numerodetermo);
        document.getElementById("tipodesucessao").innerHTML = "<p><strong>Tipo de Sucessao:</strong>Progressão Geométrica</p>";
        document.getElementById("tipodesucessao").innerHTML += `<p><strong>Razao:</strong>${raz1}</p>`;
        document.getElementById("tipodesucessao").innerHTML += `<p>O ${numerodetermo}º termo da progressão geométrica é: ${termoGeometrico}</p>`;
        
        document.getElementById("tipodesucessao").innerHTML += `<p>A soma dos ${numerodetermo} Primeiros termo da progressão geométrica é: ${somaGeometrico}</p>` 
        //document.getElementById("tipodesucessao").innerHTML += `<p>A soma dos ${numerodetermo} Primeiros termo da progressão geométrica é: ${somaGeometrico2}</p>`   
      } else {
        document.getElementById("tipodesucessao").innerHTML = "<strong>Tipo de Sucessao:</strong>Não é uma progressão aritmética nem geométrica";
      }
      
  }
  function calcularProgressaoAritmetica(primeiroTermo, dif1, numerodetermo) {
  // Calcula o n-ésimo termo de uma progressão aritmética
  let an = primeiroTermo + (numerodetermo - 1) * dif1;
  return an;
}

function calcularProgressaoGeometrica(primeiroTermo, raz1, numerodetermo) {
  // Calcula o n-ésimo termo de uma progressão geométrica
  let an = primeiroTermo * (raz1**(numerodetermo - 1))
  return an;
}
function calcularsomaProgressaoAritmetica(primeiroTermo, dif1, numerodetermo) {
  // Calcula o n-ésimo termo de uma progressão aritmética
  let sn = ((2*primeiroTermo + (numerodetermo - 1)*dif1)/2)*numerodetermo
  return sn;
}

function calcularsomaProgressaoGeometrica1(primeiroTermo, raz1, numerodetermo) {
  // Calcula o n-ésimo termo de uma progressão geométrica
  let sn = primeiroTermo * (1 - Math.pow(raz1, numerodetermo)) / (1 - raz1)
  return sn;
}
/*
function calcularsomaProgressaoGeometrica2(primeiroTermo, raz1, numerodetermo){
  let sn = (-primeiroTermo)/1 - raz1
  return sn;
}*/
//Fim de scripts de sucessao
  

//inicio de scripts de search
    function abrirCampoPesquisa() {
        var searchBox = document.querySelector(".search-box");
        searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
        }
    function realizarPesquisa() {
        var campoPesquisa = document.getElementById("campoPesquisa").value;
        // Aqui ireitentar adicionar a lógica para realizar a pesquisa com o valor digitado pelo usuário
        window.alert("Realizando pesquisa: " + campoPesquisa);
            }
//fim de scripts de search

//inicio de scripts de about site
    function infor(){
        var icon = document.getElementById('infobox')
        icon.style.display = icon.style.display === "none" ? "block" : "none";
    }
//fim de scripts de about site

// inicio de scripts de bate papo
        function enviarMensagem() {
            var textoMensagem = document.getElementById("textoMensagem").value;
            var conversa = document.getElementById("conversa");
            var novaMensagem = document.createElement("p");
            novaMensagem.textContent = textoMensagem;
            conversa.appendChild(novaMensagem);
            document.getElementById("textoMensagem").value = "";
        }
//fim de scripts de bate papo

//inicio de scripts de eventos de opcoes de informacoes
        function saidamp(){
            proj.style.background= '#0a729c'
        }
        function entradamp(){
            proj.style.background= 'blue'
        }
        function saidamf(){
            infc.style.background= '#0a729c'
        }
        function entradamf(){
            infc.style.background= 'blue'
        }
        function saidamc(){
            cad.style.background= '#0a729c'
        }
        function entradamc(){
            cad.style.background= 'blue'
        }
        function saidamr(){
            ran.style.background= '#0a729c'
        }
        function entradamr(){
            ran.style.background= 'blue'
        }
        function saidamch(){
            aut.style.background= '#0a729c'
        }
        function entradamch(){
            aut.style.background= 'blue'
        }
        function saidamm(){
            mem.style.background= '#0a729c'
        }
        function entradamm(){
            mem.style.background= 'blue'
        }
//fim de scripts de eventos de opcoes de informacoes
//scrpts de pesquisa de votaco
function pesquisarAluno() {
    const input = document.getElementById("barra-pesquisa");
    const filter = input.value.toUpperCase();
    const listaAlunos = document.getElementById("alunos-lista");
    const alunos = listaAlunos.getElementsByTagName("p");

    for (let i = 0; i < alunos.length; i++) {
        const nomeAluno = alunos[i].innerText;
        if (nomeAluno.toUpperCase().indexOf(filter) > -1) {
            alunos[i].style.display = "";
        } else {
            alunos[i].style.display = "none";
        }
    }
}
