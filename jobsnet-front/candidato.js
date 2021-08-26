function sendForm(url, body) {
  let myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Content-Type', 'application/json')

  var raw = JSON.stringify(body)

  var resquetOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch(url, resquetOptions)
    .then(response => response.text())
    .then(result => alert('Candidato cadastrado com sucesso'))
    .catch(error => console.log('error', error))
}

//preenche endereço automatico
function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('endereco').value = ''
  document.getElementById('bairro').value = ''
  document.getElementById('cidade').value = ''
  document.getElementById('Estado').value = ''
}

function meu_callback(conteudo) {
  if (!('erro' in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('endereco').value = conteudo.logradouro
    document.getElementById('bairro').value = conteudo.bairro
    document.getElementById('cidade').value = conteudo.localidade
    document.getElementById('Estado').value = conteudo.uf
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep()
    alert('CEP não encontrado.')
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '')

  //Verifica se campo cep possui valor informado.
  if (cep != '') {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('endereco').value = '...'
      document.getElementById('bairro').value = '...'
      document.getElementById('cidade').value = '...'
      document.getElementById('Estado').value = '...'

      //Cria um elemento javascript.
      var script = document.createElement('script')

      //Sincroniza com o callback.
      script.src =
        'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script)
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep()
      alert('Formato de CEP inválido.')
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep()
  }
}

function cadastrarCandidato() {
  event.preventDefault()
  let url = 'https://jobsnet-gama-academy.herokuapp.com/api/candidato'
  let nome = document.getElementById('NomeCompleto').value
  let CargoPretendido = document.getElementById('CargoPretendido').value
  let DtNascimento = document.getElementById('DataNascimento').value
  let EstadoCivil = document.getElementById('EstadoCivil').value
  let CEP = document.getElementById('cep').value
  let Endereco = document.getElementById('endereco').value
  let Numero = document.getElementById('numero').value
  let Complemento = document.getElementById('complemento').value
  let Bairro = document.getElementById('bairro').value
  let Cidade = document.getElementById('cidade').value
  let Estado = document.getElementById('Estado').value
  let TelFixo = document.getElementById('telefoneFixo').value
  let Celular = document.getElementById('celular').value
  let Email = document.getElementById('email').value
  let Rg = document.getElementById('identidade').value
  let Cpf = document.getElementById('cpf').value
  let Veiculo = document.getElementById('veiculo').value
  let Habilitacao = document.getElementById('habilitacao').value
  let SegundoGrau = document.getElementById('segundoGrau').value
  let EnsinoTecnico = document.getElementById('ensinoTecnico').value
  let Graduacao = document.getElementById('graduacao').value
  let PosGraduacao = document.getElementById('posgraduacao').value
  let UltimaEmpresa = document.getElementById('empresa').value
  let Funcao = document.getElementById('funcao').value
  let Admissao = document.getElementById('admissao').value
  let Demissao = document.getElementById('demissao').value
  let AtividadesExercidas = document.getElementById('atividades').value
  let ObjetivosFuturos = document.getElementById('objetivos').value
  let ConheceAlguem = document.getElementById('conheceAlguem').value

  body = {
    Nome: nome,
    CargoPretendido: CargoPretendido,
    DtNascimento: DtNascimento,
    EstadoCivil: EstadoCivil,
    Cep: CEP,
    Endereco: Endereco,
    Numero: Numero,
    Complemento: Complemento,
    Bairro: Bairro,
    Cidade: Cidade,
    Estado: Estado,
    TelefoFixo: TelFixo,
    TelefoCelular: Celular,
    Email: Email,
    Rg: Rg,
    Cpf: Cpf,
    PossuiVeiculo: Veiculo,
    PossuiCnh: Habilitacao,
    SegundoGrau: SegundoGrau,
    EnsinoTecnico: EnsinoTecnico,
    Graduacao: Graduacao,
    PosGraduacao: PosGraduacao,
    UltimaEmpresa: UltimaEmpresa,
    Funcao: Funcao,
    DtAdmissao: Admissao,
    DtDemissao: Demissao,
    AtividadesExercidas: AtividadesExercidas,
    ObjetivosFuturos: ObjetivosFuturos,
    ConheceAlguem: ConheceAlguem
  }

  sendForm(url, body)
}
