
    var app = new Vue({
        el: '#app',
        data: {
            title: 'Gunkul Shop',
            subtitle: 'Welcome to gunkul shop.',
            products: [],
            storageCarts: [],
        },
        methods: {
            addCart: function (id) {

              carts.addCart(id)
            },
            goToDetail: function(id) {

                localStorage.setItem("product_detail", id)
                location.href = 'product_detail.php'
            }
        },
        created() {
        },
        computed: {
        },
        mounted(){
        },
        updated() {
        }
    })