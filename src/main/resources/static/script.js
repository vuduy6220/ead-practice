var

var Index = Vue.extend({
    template: '#home',
    data: function() {
        return {result: '',symbol: ''};
    },
    computed: {
        getStockName() {

        },
        getStockPrice() {

        },
        changeSymbol(e) {
            console.log(e)
        }
    }
});

var router = new VueRouter({
    routes: [
        { path: '/', component: Index },
    ]
});
new Vue({
    router
}).$mount('#app')