// eslint-disable-next-line no-undef,no-unused-vars
function carregar(){
    // eslint-disable-next-line no-undef
    app1.$mount("#app1")
}
// eslint-disable-next-line no-unused-vars,no-undef
const app1 = new Vue({

    data: {
        variavelApp1: "Minha Aplicação "
    },
    template:"<h1>{{variavelApp1}}</h1>"
});
