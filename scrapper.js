const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, width: 1280, height: 960 });

const cpf = "000.000.000-00";
const senha = "Digite sua senha";
const aliquotaServico = "0,00";
const descricaoServico = "Digite a descrição do seu serviço";
const valorServico = "0,00";
const nfe = "01";

nightmare
  .goto("https://iss.fortaleza.ce.gov.br/")
  .wait(2000)
  .insert("#login\\:username", cpf)
  .insert("#login\\:password", senha)
  .wait("#homeForm")
  .click(".fa-upload")
  .wait("#content")
  .wait(1000)
  .click("#emitirnfseForm\\:tipoPesquisaTomadorRb\\:2")
  .wait(1000)
  .click("#emitirnfseForm\\:abaServico_lbl")
  .wait("#emitirnfseForm\\:idLinkPesquisarCnae")
  .click("#emitirnfseForm\\:idLinkPesquisarCnae")
  .insert("#emitirnfseForm\\:idFormularioPesquisaCnae\\:idCnaePesquisa", [
    "452000301",
  ])
  .click("#emitirnfseForm\\:idFormularioPesquisaCnae\\:idPesquisar")
  .wait(1000)
  .click(
    "#emitirnfseForm\\:idFormularioPesquisaCnae\\:idDatatableListaCnae\\:0\\:j_id433"
  )
  .wait(1000)
  .insert("#emitirnfseForm\\:idAliquota", aliquotaServico)
  .insert("#emitirnfseForm\\:idDescricaoServico", descricaoServico)
  .type("#emitirnfseForm\\:idValorServicoPrestado", valorServico)
  .click("#emitirnfseForm\\:abaTomador_lbl")
  .wait(() => {
    return document.querySelector("#emitirnfseForm\\:idNome").value !== "";
  })
  .click("#emitirnfseForm\\:abaServico_lbl")
  .click("#emitirnfseForm\\:btnCalcular")
  .wait("#emitirnfseForm\\:btnEmitir")
  .click("#emitirnfseForm\\:btnEmitir")
  .end()
  .then(console.log(`Nota fiscal ${nfe} emitida com sucesso.`))
  .catch((error) => {
    console.error("Automation failed on:", error);
  });
