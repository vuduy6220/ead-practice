var getStock = {
    getStockName(symbol) {
        axios
            .get('/api/v1/stocks/get-stock-price/'+symbol)
            .then(response => fn(response))
            .catch(error => console.log(error))
    },
    getStockPrice(symbol) {
        axios
            .get('/api/v1/stocks/get-stock-name/'+symbol)
            .then(response => fn(response))
            .catch(error => console.log(error))
    }
}

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