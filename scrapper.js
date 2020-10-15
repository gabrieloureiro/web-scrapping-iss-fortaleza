const scrap = require("./scrap.json");
const credentials = require("./credentials.json");
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, width: 1920, height: 1070 });

nightmare
  .goto("https://iss.fortaleza.ce.gov.br/")
  .wait(2000)
  .insert("#login\\:username", credentials.login)
  .insert("#login\\:password", credentials.password)
  .wait("#homeForm")
  .click(".fa-upload")
  .wait("#content")
  .wait(1000)
  .wait("#emitirnfseForm\\:tipoPesquisaTomadorRb\\:2")
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
  .insert("#emitirnfseForm\\:idAliquota", "5,00")
  .insert("#emitirnfseForm\\:idDescricaoServico", scrap.descriptionService)
  .type("#emitirnfseForm\\:idValorServicoPrestado", scrap.valueService)
  .click("#emitirnfseForm\\:abaTomador_lbl")
  .wait(() => {
    return document.querySelector("#emitirnfseForm\\:idNome").value !== "";
  })
  .click("#emitirnfseForm\\:abaServico_lbl")
  .click("#emitirnfseForm\\:btnCalcular")
  .wait("#emitirnfseForm\\:btnEmitir")
  .click("#emitirnfseForm\\:btnEmitir")
  // .wait("#j_id147\\:numNfse")
  // .evaluate(() => {
  //   const nfe = document.querySelector("#j_id147\\:numNfse").value;
  //   return nfe;
  // })
  // .click("#j_id147\\:j_id156")
  .end()
  .catch((error) => {
    console.error("Automation failed on:", error);
  });
