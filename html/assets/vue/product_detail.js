
var product_detail = new Vue({
    el: '#product_detail',
    data: {
        product_detail: '',
        storageProductDetail: localStorage.getItem('product_detail') ? JSON.parse(localStorage.getItem('product_detail')) : ''
    },
    methods: {
        getProductDetail: function() {

            let self = this;
            let u = "https://fakestoreapi.com/products/" + self.storageProductDetail

            if (self.storageProductDetail !== '') {
                $.ajax({
                    url: u,
                    type: "GET",
                    success: function (res) {

                        self.product_detail = res
                    },
                    error: function (xhr, status, error) {
                        console.log(xhr.statusText)
                    }
                })
            }
        },
    },
    created() {
        this.getProductDetail()
    },
    computed: {
    },
    mounted(){

    },
    updated() {
    },
    watch: {
    }
})