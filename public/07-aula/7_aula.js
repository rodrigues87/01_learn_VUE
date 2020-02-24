//COMPONENTE
//NOME// OBJETOS
// eslint-disable-next-line no-undef
Vue.component('componente', {
    data() {
        return {
            titulo:1
        }
    },
    methods: {
        alerta() {
            this.titulo +=1
        },
        destruir(){
            this.$destroy();
        }
    },
    template: '<div><div class="d-flex justify-content-center h-100">\n' +
        ' <button class="btn btn-warning" @click="alerta()">Mudar Valor</button>\n ' +
        ' <button class="btn btn-danger" @click="destruir()">Destruir app</button>\n ' +

        '</div><h1>{{titulo}}</h1></div>',
    beforeCreate() {
        console.log("ANTES DE CRIAR TUDO")
    },
    created() {
        console.log("Depois que foi criado tudo")

    },
    beforeMount() {
        console.log("Antes de montar tudo")

    },
    mounted() {
        console.log("TUDO MONTADO")
    },
    beforeUpdate() {
        console.log("ANTES DE ATUALIZAR O MOUNTED EVENTO:" + this.titulo)

    },
    updated() {
        console.log("MOUNTED ATUALIZADO EVENTO:"+ this.titulo)

    },
    beforeDestroy() {
        console.log("ANTES DE DESTRUIR")

    },
    destroyed() {
        console.log("DESTRUIDO")

    }

});


// eslint-disable-next-line no-unused-vars,no-undef
const app = new Vue({
    el: "#app"

});
