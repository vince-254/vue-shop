<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      <ProductList></ProductList>
      <div>
        <!-- ======= My Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2> Hottest Deals </h2>
          <p>Grab yourself these products from popular brands while stocks last !</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Rolex</a></h4>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Casio</a></h4>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Genlemanz</a></h4>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Dolce & Gabana </a></h4>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End My Services Section -->
      </div>

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
      <login></login>

      <!-- <mini-cart></mini-cart> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import ProductList from '@/sections/ProductList.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Hero, ProductList, Login
  }
}
</script>

<style>
/*--------------------------------------------------------------
# My Services
--------------------------------------------------------------*/
.services .icon-box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
  border: 1px solid #fff;
}

.services .icon {
  margin: 0 auto 20px auto;
  padding-top: 17px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  background: #fff4df;
}

.services .icon i {
  font-size: 36px;
  line-height: 1;
  color: skyblue;
}

.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .title a {
  color: #111;
  transition: 0.3s;
}

.services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  border-color: skyblue;
}

.services .icon-box:hover .title a {
  color: skyblue;
}
</style>
