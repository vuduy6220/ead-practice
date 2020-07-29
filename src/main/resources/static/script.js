var stockService = {
    getStockName(symbol) {
        return axios
            .get('/api/v1/stocks/get-stock-price/'+symbol)
            .then(response => (response))
            .catch(error => console.log(error))
    },
    getStockPrice(symbol) {
        return axios
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
    methods: {
        async getStockName() {
            const res = await stockService.getStockName(this.symbol);
            this.result = res.data;
        },
        async getStockPrice() {
            const res = await stockService.getStockPrice(this.symbol);
            this.result = res.data;
        },
        changeSymbol(e) {
            this.symbol = e.target.value;
        }
    },
});

var router = new VueRouter({
    routes: [
        { path: '/', component: Index },
    ]
});
new Vue({
    router
}).$mount('#app')