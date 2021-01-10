
<?php include "header.html" ?>

<main id="product_detail">

    <div class="container mt-5">
        <div class="bg-light p-5 rounded">

            <section class="py-3 text-center container" v-if="!product_detail">
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

            <div class="row" v-else>
                <div class="col-6 text-center">
                    <img :src="product_detail.image" class="img-fluid pb-3" :alt="product_detail.title" style="height: 350px;">
                </div>
                <div class="col-6">
                    <h1>{{product_detail.title}}</h1>
                    <p class="lead">{{product_detail.description}}</p>
                    <p class="price-text-product-detail">{{product_detail.price}}.-</p>
                </div>
            </div>
        </div>
    </div>

</main>

<script src="assets/vue/product_detail.js"></script>
<?php include "footer.html" ?>