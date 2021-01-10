
<?php include "header.html" ?>

<main id="app">
    <section class="p-3 text-center container">
            <div class="row p-3">
                <div class="col">
                    <h1 class="fw-light">{{title}}</h1>
                    <p class="lead text-muted">{{subtitle}}</p>
                </div>
            </div>
        </section>

    <div class="album p-5 bg-light">
        <div class="container">

            <section class="py-3 text-center container" v-if="products.length < 1">
                <div class="row p-3">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <h1 class="fw-light">Loadind ...</h1>
                            <div class="spinner-border" style="width: 2rem; height: 2rem;" role="status">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" v-else>

                <div class="col mb-3" v-for="(obj, index) in products" style="height: 400px;">
                    <div class="card" style="height: 400px;">
                        <div class="card-body">
                            <div class="text-center">
                                <a href="javascript:void(0);" v-on:click="goToDetail(obj.id)">
                                    <img :src="obj.image" class="img-fluid pb-3" :alt="obj.title" style="height: 150px;">
                                </a>
                            </div>
                            <a class="text-product" href="javascript:void(0);" class="card-title" v-on:click="goToDetail(obj.id)" >{{obj.title}}</a>
                            <p class="price-text-product">{{obj.price}}.-</p>
                            <div class="btn-cart-product">
                                <button type="button" class="btn btn-sm btn-outline-primary" v-on:click="addCart(obj.id)">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main>

<script src="assets/vue/index.js"></script>
<?php include "footer.html" ?>