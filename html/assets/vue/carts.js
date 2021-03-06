
    var carts = new Vue({
        el: '#carts',
        data: {
            products: [],
            storageCarts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
        },
        methods: {
            initalData: function() {

                let self = this;
                let u = "https://fakestoreapi.com/products?limit=10"

                $.ajax({
                    url: u,
                    type: "GET",
                    success: function(res){

                        self.products = res
                    },
                    error: function(xhr, status, error){
                        console.log(xhr.statusText)
                    }
                })
            },
            addCart: function (id) {

                let self = this

                if (self.storageCarts.length < 1) {
                    self.products.forEach((value, index) => {
                        if (value.id === id) {
                            self.storageCarts.push(value)
                            localStorage.setItem("carts", JSON.stringify(self.storageCarts))
                            this.showCart()
                        }
                    })
                } else {

                    // check product duplicate
                    let productDuplicate = 0
                    self.storageCarts.forEach((val, i) => {
                        if (val.id === id) {
                            productDuplicate = 1

                            Swal.fire({
                                title: 'แจ้งเตือน',
                                text: 'มีสินค้าชิ้นนี้อยู่ในรถเข็นแล้ว',
                                icon: 'info',
                                confirmButtonText: 'ตกลง'
                            })
                        }
                    })

                    // push data not duplicate
                    if (productDuplicate === 0) {
                        self.products.forEach((value, index) => {
                            if (value.id === id) {
                                self.storageCarts.push(value)
                                localStorage.setItem("carts", JSON.stringify(self.storageCarts))
                                this.showCart()
                            }
                        })
                    }
                }
            },
            delProductCart(index) {

                this.storageCarts.splice(index, 1);
                localStorage.setItem("carts", JSON.stringify(this.storageCarts))
            },
            showCart() {

                $(".cart-dropdown").addClass("cart-dropdown-active");
                document.documentElement.scrollTop = 0;

                setTimeout(function(){
                    $(".cart-dropdown").removeClass("cart-dropdown-active");
                }, 4000)
            }
        },
        created() {
            this.initalData()
        },
        computed: {
            total: function () {

                let total = 0
                let self = this
                self.storageCarts.forEach((val, index) => {
                    total += val.price
                })
                return total.toFixed(2)
            }
        },
        mounted(){

            $(".cart-button").mouseover(function() {

                $(".cart-dropdown").addClass("cart-dropdown-active");
            }).mouseleave(function() {

                $(".cart-dropdown").removeClass("cart-dropdown-active");
            })
        },
        updated() {
        },
        watch: {
            products: function (val, oldVal) {

                let self = this
                if (typeof app !== "undefined") {
                    app.products = self.products
                }
            },
            storageCarts: function (val, oldVal) {

                let self = this
                if (typeof app !== "undefined") {
                    app.storageCarts = self.storageCarts
                }
            },
        }
    })