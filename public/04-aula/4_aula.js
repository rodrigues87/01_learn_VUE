
// eslint-disable-next-line no-undef
new Vue({

    el: '#app',
    data: {
        textoDigitado: '',
        textoDigitado2: '',
        array: []
    },
    methods: {
        alterarNome(sobrenome) {
            this.textoDigitado =  sobrenome;
        },
        alterarNome2() {
            this.array.push(this.textoDigitado2);
            this.textoDigitado2='';
        },
        alerta(){
            // eslint-disable-next-line no-undef
            elemento = event.target;
            // eslint-disable-next-line no-undef
            if(elemento.style.background==="white"){
                event.target.style = "background: red";
            }else {
                event.target.style = "background: white"
            }
            //alert(event.target.textContent.trim());
        }
    }
})
