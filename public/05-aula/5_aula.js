// eslint-disable-next-line no-undef,no-unused-vars
let mensagem = "Minha Aplicação "

// eslint-disable-next-line no-undef


// eslint-disable-next-line no-unused-vars
function imprimir() {
    app1.variavelApp1 = "Outro valor 1";
    app2.variavelApp2 = "Outro valor 2";
}

// eslint-disable-next-line no-unused-vars,no-undef
const app1 = new Vue({
    el: '#app1',
    data: {
        variavelApp1: mensagem + 1
    }
});
// eslint-disable-next-line no-undef,no-unused-vars
const app2 = new Vue({
    el: '#app2',
    data: {
        variavelApp2: mensagem + 2
    }
});
// eslint-disable-next-line no-undef,no-unused-vars
const app3 = new Vue({
    el: '#app3',
    data: {
        variavelApp3: mensagem + 3
    }
});
// eslint-disable-next-line no-undef,no-unused-vars
const app4 = new Vue({
    el: '#app4',
    data: {
        variavelApp4: mensagem + 4
    },
    methods: {
        imprimir(){
            app3.variavelApp3 = "Outro valor 3";
            app4.variavelApp4 = "Outro valor 4";
        }
    }
    });