<div class="container">
  <div class="section-title">
      <h1>Meet Our Team</h1>
  </div>

  <div class="row">


      <div class="column">
          <div class="team">
              <div class="team-img">
                  <img src="../public/img/Sina.png" alt="Sina Image">
              </div>
              <div class="team-content">
                  <h2>Sina Kahrobaei</h2>
                  <h3>Software Engineer @ SvelteStorm</h3>
              </div>
              <div class="team-social">
                  <a href="https://www.github.com/Skaybee" class="social-gh"> <i class="fab fa-github"></i></a>
                  <a href="https://www.twitter.com/K_s1n4" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
                  <a href="https://www.linkedin.com/in/sinakahrobaei" class="social-tw"> <i class="fab fa-twitter"></i></a>
              </div>
          </div>
      </div>

      <div class="column">
        <div class="team">
            <div class="team-img">
                <img src="../public/img/Cayla.PNG" alt="Cayla Image">
            </div>
            <div class="team-content">
                <h2>Cayla Co</h2>
                <h3>Software Engineer @ SvelteStorm</h3>
            </div>
            <div class="team-social">
                <a href="https://www.github.com/caycodes" class="social-gh"> <i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/cayla-co" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>

    <div class="column">
      <div class="team">
          <div class="team-img">
              <img src="../public/img/Miller.JPG" alt="Miller Image">
          </div>
          <div class="team-content">
              <h2>Miller Johnston</h2>
              <h3>Software Engineer @ SvelteStorm</h3>
          </div>
          <div class="team-social">
              <a href="https://www.github.com/MillerJ20" class="social-gh"> <i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/miller-johnston" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
          </div>
      </div>
  </div>

      <div class="column">
          <div class="team">
              <div class="team-img">
                  <img src="../public/img/Swetha.jpeg" alt="Swetha Image">
              </div>
              <div class="team-content">
                  <h2>Swetha Kunda</h2>
                  <h3>Software Engineer @ SvelteStorm</h3>
              </div>
              <div class="team-social">
                <a href="https://www.github.com/swethakunda" class="social-gh"> <i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/swethakunda" class="social-li"> <i class="fab fa-linkedin-in"></i></a>
              </div>
          </div>
      </div>

  </div>

</div>


<style>

/* General*/
*,
*::before,
*::after{
    box-sizing: border-box;
}
html{
    font-family: sans-serif;
    line-height: 1.15;
}
body{
    font-family: 'lato', sans-serif;
    color: #454545;
    font-weight: 300;
    background: #ffffff;
}
a{
    color: #333333;
    font-weight: 400;
    outline: none;
    text-decoration: none;
    transition: 0.5s;
}
a:hover,
a:focus{
    outline: none;
    text-decoration: none;
}
p{
    padding: 0;
    margin: 0 0 15px 0;
    color: #454545;
    font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6{
    padding: 0;
    margin: 0 0 15px 0;
    color: #333333;
    font-weight: 700;
}
img{
    width: 100%;
    height: auto;
}
.container{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.section-title{
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 80px;
    margin-top: 40px;
    text-align: center;
}
.section-title h1{
    display: inline-block;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 700;
    color: #000000;
    margin: 0 0 5px;
    position: relative;
}
.section-title h1::before{
    content: '';
    left: 0;
    position: absolute;
    height: 3px;
    right: 32%;
    background-color: #50c5fc;
    bottom: -5px;

}
.container .section-title h1::before{
    left: 30%;
}
.row{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.column{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%;
}
.team{
    margin-bottom:30px ;
}
.team .team-img{
    position: relative;
    font-size: 0;
    text-align: center;
}
.team .team-img img{
    width: 160px;
    height: auto;
    border-radius: 100%;
    border: 20px solid #f3f4fa;
}

.team .team-content{
    padding: 80px 20px 20px 20px;
    margin-top: -80px;
    text-align: center;
    background: #f3f4fa;
    border-radius: 10px;
}
.team .team-content h2{
font-size: 25px;
font-weight: 400;
letter-spacing: 2px;
}
.team .team-content h3{
    font-size: 16px;
    font-weight: 300;
}
.team .team-content h4{
    font-size: 16px;
font-weight: 300;
letter-spacing: 1px;
font-style: italic;
margin-bottom: 0;
}
.team .team-content p{
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}
.team .team-social{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 35px;
    top: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, .6);
    transition: all .3s;
    font-size: 0;
    z-index: 1;
    opacity: 0;
}
.team:hover .team-social{
    opacity: 1;
}
.team .team-social a{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right:5px ;
    padding: 11px 0 10px 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
    transition: all .3s;
    margin-top: 50px;
}
.team .team-social a.social-tw{
    background: #1da1f2;
}
.team .team-social a.social-li{
    background: #0077b5;
}
.team .team-social a.social-gh{
    background: #6e5494;
}
.team .team-social a:last-child{
    margin-right: 0;
}
.team:hover .team-social a{
    margin-top: 0;
}
.team .team-social a:hover{
    background: #222222;
}


/* Mobile Responsive */

@media (min-width: 576px){
    .container{
        max-width: 540px;
    }
    .column{
        max-width: 50%;
    }
}
@media (min-width: 768px){
    .container{
        max-width: 720px;
    }
    .column{
        max-width: 33.333333%;
    }
}
@media (min-width: 992px){
    .container{
        max-width: 960px;
    }
    .column{
        max-width: 25%;
    }
}
@media (min-width: 1200px){
    .container{
        max-width: 1140px;
    }
   
}
</style>