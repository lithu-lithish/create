import React from 'react'
export default function Home() {
return (
    <React.Fragment>
        <section class="colored-section" id="title">

<div class="container-fluid">

  {/* <!-- Nav Bar --> */}

  <nav class="navbar navbar-expand-lg navbar-dark">

    <a class="navbar-brand" href="">tindog</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cta">Download</a>
        </li>
      </ul>

    </div>
  </nav>


  {/* <!-- Title --> */}

  <div class="row">

    <div class="col-lg-6">
      <h1 class="big-heading">Meet new and interesting dogs nearby.</h1>
      <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
      <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
    </div>

    <div class="col-lg-6">
      <img class="title-image" src="assets/images/iphone6.png" alt="iphone-mockup" />
    </div>

  </div>

</div>

</section>


{/* <!-- Features --> */}

<section class="white-section" id="features">

<div class="container-fluid">

  <div class="row">
    <div class="feature-box col-lg-4">
      <i class="icon fas fa-check-circle fa-4x"></i>
      <h3 class="feature-title">Easy to use.</h3>
      <p>So easy to use, even your dog could do it.</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-bullseye fa-4x"></i>
      <h3 class="feature-title">Elite Clientele</h3>
      <p>We have all the dogs, the greatest dogs.</p>
    </div>

    <div class="feature-box col-lg-4">
      <i class="icon fas fa-heart fa-4x"></i>
      <h3 class="feature-title">Guaranteed to work.</h3>
      <p>Find the love of your dog's life or your money back.</p>
    </div>
  </div>


</div>
</section>


{/* <!-- Testimonials --> */}

<section class="colored-section" id="testimonials">

<div id="testimonial-carousel" class="carousel slide" data-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active container-fluid">
      <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
      <img class="testimonial-image" src="assets/images/dog-img.jpg" alt="dog-profile"/>
      <em>Pebbles, New York</em>
    </div>
    <div class="carousel-item container-fluid">
      <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
      <img class="testimonial-image" src="assets/images/lady-img.jpg" alt="lady-profile"/>
      <em>Beverly, Illinois</em>
    </div>
  </div>
  <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
<span class="carousel-control-next-icon"></span>
  </a>
</div>

</section>


{/* <!-- Press --> */}

<section class="colored-section" id="press">
<img class="press-logo" src="assets/images/techcrunch.png" alt="tc-logo"/>
<img class="press-logo" src="assets/images/tnw.png" alt="tnw-logo"/>
<img class="press-logo" src="assets/images/bizinsider.png" alt="biz-insider-logo"/>
<img class="press-logo" src="assets/images/mashable.png" alt="mashable-logo"/>

</section>


{/* <!-- Pricing --> */}

<section class="white-section" id="pricing">

<h2 class="section-heading">A Plan for Every Dog's Needs</h2>
<p>Simple and affordable price plans for your and your dog.</p>

<div class="row">

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Chihuahua</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">Free</h2>
        <p>5 Matches Per Day</p>
        <p>10 Messages Per Day</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Labrador</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$49 / mo</h2>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
      </div>
    </div>
  </div>

  <div class="pricing-column col-lg-4">
    <div class="card">
      <div class="card-header">
        <h3>Mastiff</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$99 / mo</h2>
        <p>Pirority Listing</p>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>

      </div>
    </div>
  </div>



</div>

</section>

{/* 
<!-- Call to Action --> */}

<section class="colored-section" id="cta">

<div class="container-fluid">

  <h3 class="big-heading">Find the True Love of Your Dog's Life Today.</h3>
  <button class="download-button btn btn-lg btn-dark" type="button"><i class="fab fa-apple"></i> Download</button>
  <button class="download-button btn btn-lg brn-light" type="button"><i class="fab fa-google-play"></i> Download</button>
</div>
</section>


{/* <!-- Footer --> */}

<footer class="white-section" id="footer">
<div class="container-fluid">
  <i class="social-icon fab fa-facebook-f"></i>
  <i class="social-icon fab fa-twitter"></i>
  <i class="social-icon fab fa-instagram"></i>
  <i class="social-icon fas fa-envelope"></i>
  <p>© Copyright 2021 TinDog [by Litchee]</p>
</div>
</footer>
    </React.Fragment>
)
}