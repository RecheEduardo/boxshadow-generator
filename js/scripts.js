// SELEÇÃO DE VARIÁVEIS //

// Variáveis do deslocamento horizontal:
const xPosition = document.querySelector("#x-position")
const xPositionNumber = document.querySelector("#x-position-number")

// Variáveis do deslocamento vertical:
const yPosition = document.querySelector("#y-position")
const yPositionNumber = document.querySelector("#y-position-number")

// Variáveis da intensidade do desfoque:
const blurIntensity = document.querySelector("#blur-intensity")
const blurIntensityNumber = document.querySelector("#blur-intensity-number")

// Variáveis da intensidade do espalhamento:
const spreadIntensity = document.querySelector("#spread-intensity")
const spreadIntensityNumber = document.querySelector("#spread-intensity-number")

// Variáveis da cor da sombra:
const shadowColor = document.querySelector("#shadow-color")
const shadowColorNumber = document.querySelector("#shadow-color-value")

// Variáveis da opacidade da sombra:
const shadowOpacity = document.querySelector("#shadow-opacity")
const shadowOpacityNumber = document.querySelector("#shadow-opacity-number")

// Variável de checagem de sombra interna:
const shadowInset = document.querySelector("#shadow-inset")

// Variável do elemento que será aplicada a box shadow:
const shadowBox = document.querySelector(".boxshadow-result")

// Variável onde o código da boxshadow será exibido:
const resultCode = document.querySelector(".result-code")

// FUNÇÃO PARA CONVERTER HEX PARA RGBA //
const hexToRgba = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${opacity})`;
}

// FUNÇÃO QUE ALTERA O VALOR DA BOX SHADOW //
const changeBoxShadow = () =>{
    const rgbaColor = hexToRgba(shadowColor.value, shadowOpacity.value);
    shadowBox.style.boxShadow = `${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor} ${shadowInset.checked? "inset" : ""}`;
}

// FUNÇÃO QUE MOSTRA O CÓDIGO NA TELA //
const showCode = () =>{
    const rgbaColor = hexToRgba(shadowColor.value, shadowOpacity.value);
    resultCode.innerHTML = ''
    resultCode.innerHTML += `<p>box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};</p>`
    resultCode.innerHTML += `<p>-moz-box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};</p>`
    resultCode.innerHTML += `<p>-webkit-box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};</p>`
}

const copyToClipboard = () =>{
    const rgbaColor = hexToRgba(shadowColor.value, shadowOpacity.value);
    const fullResultCode = `box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};`
    const fullMozResultCode = `-moz-box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};`
    const fullWebkitResultCode = `-webkit-box-shadow: ${xPositionNumber.value}px ${yPositionNumber.value}px ${blurIntensityNumber.value}px ${spreadIntensityNumber.value}px ${rgbaColor}${shadowInset.checked? " inset" : ""};`

    const completeResultCode = `${fullResultCode}\n${fullMozResultCode}\n${fullWebkitResultCode}`

    navigator.clipboard.writeText(completeResultCode).then(() =>{
        let resultMessage = document.querySelector(".result-message")
        resultMessage.style.fontStyle = "italic"
        resultMessage.innerHTML = 'Código copiado com sucesso!'

        setTimeout(() => {
            resultMessage.style.fontStyle = "normal"
            resultMessage.innerHTML = "Clique no quadro acima para copiar as regras";
        }, 1000);
    })
}

// DECLARAÇÃO DE EVENTOS //

// Evento ao mudar o deslocamento horizontal:
xPosition.addEventListener("input" , ()=>{
    xPositionNumber.value = xPosition.value
    changeBoxShadow();
    showCode();
})

//Evento ao mudar o deslocamento vertical:
yPosition.addEventListener("input" , ()=>{
    yPositionNumber.value = yPosition.value
    changeBoxShadow();
    showCode();
})

// Evento ao mudar a intensidade do desfoque:
blurIntensity.addEventListener("input" , ()=>{
    blurIntensityNumber.value = blurIntensity.value
    changeBoxShadow();
    showCode();
})

// Evento ao mudar a intensidade do espalhamento:
spreadIntensity.addEventListener("input" , ()=>{
    spreadIntensityNumber.value = spreadIntensity.value
    changeBoxShadow();
    showCode();
})

// Evento ao mudar a cor da sombra:
shadowColor.addEventListener("input" , ()=>{
    shadowColorNumber.value = shadowColor.value
    changeBoxShadow();
    showCode();
})

// Evento ao mudar a opacidade da sombra:
shadowOpacity.addEventListener("input" , ()=>{
    shadowOpacityNumber.value = shadowOpacity.value
    changeBoxShadow();
    showCode();
})

// Evento para alterar entre sombra interna e externa:
shadowInset.addEventListener("click" , ()=>{
    changeBoxShadow();
    showCode();
})

// Evento para copiar o código da Box Shadow:
resultCode.addEventListener("click" , ()=>{
    copyToClipboard();
})

// AÇÃO PARA ADICIONAR A BOX SHADOW NO EXEMPLO
changeBoxShadow();
showCode();