import { ref } from "vue";
import { BuscaCep } from "../domain/model/buscaCep";
import vkbeautify from 'vkbeautify'
import Toastify from 'toastify-js'

const buscaCepController = (
  buscaInfoCepUseCase,
) => () => {
  const formato = ref(["json", "xml"])
  const formatoSelecionado = ref("")
  const cepDigitado = ref("")
  const xmlFormatado = ref("")
  const jsonFormatado = ref("")
  const erro = ref("")
  const carregando = ref(false)
  const mostraRetorno = ref(false)
  const mostraErro = ref(false)
  const cepModule = ref(new BuscaCep({}))

  const buscaDadosCep = async () => {
    try {
      carregando.value = true
      mostraRetorno.value = false
      mostraErro.value = false

      if (!formatoSelecionado.value) {
        throw "Selecione um formato!"
      }
      if (!cepDigitado.value) {
        throw "Preencha o campo CEP!"
      }

      const param = {
        "format": formatoSelecionado.value,
        "cep": cepDigitado.value
      }

      const result = await buscaInfoCepUseCase(param);

      if (typeof result === "string" && formatoSelecionado.value === "xml") {
        xmlFormatado.value = vkbeautify.xml(result);

        if (xmlFormatado.value.includes("not_found") || xmlFormatado.value.includes("invalid")) {
          const startIndex = xmlFormatado.value.indexOf('<message>');
          const endIndex = xmlFormatado.value.indexOf('</message>');

          const messageContent = xmlFormatado.value.substring(startIndex + 9, endIndex);

          throw messageContent
        }
      } else {
        jsonFormatado.value = result;
      }

    } catch (error) {
      mostraErro.value = true
      Toastify({
        text: error,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
          borderRadius: "50px"
        },
      }).showToast();

      return
    } finally {
      mostraRetorno.value = true
      carregando.value = false
    }
  }

  return {
    formato,
    formatoSelecionado,
    cepModule,
    cepDigitado,
    carregando,
    buscaDadosCep,
    mostraRetorno,
    xmlFormatado,
    jsonFormatado,
    erro,
    mostraErro,
  }
}

export { buscaCepController }