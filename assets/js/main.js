/**
* Template Name: KnightOne - v4.7.0
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #009961;
  text-decoration: none;
}

a:hover {
  color: #00cc81;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #009961;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  -webkit-animation: animate-preloader 1s linear infinite;
  animation: animate-preloader 1s linear infinite;
}

@-webkit-keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #009961;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #00c27b;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#header.header-scrolled,
#header.header-inner-pages {
  background: rgba(40, 40, 40, 0.9);
}

#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.5px;
}

#header .logo a {
  color: #fff;
}

#header .logo img {
  max-height: 40px;
}

@media (max-width: 992px) {
  #header {
    border: 0;
    padding: 15px 0;
  }
}

/* Get Startet Button */
.get-started-btn {
  margin-left: 25px;
  background: #009961;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.get-started-btn:hover {
  background: #00b371;
  color: #fff;
}

@media (max-width: 992px) {
  .get-started-btn {
    margin: 0 15px 0 0;
    padding: 6px 18px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar>ul>li {
  position: relative;
  white-space: nowrap;
  margin: 0 12px;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 3px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
  position: relative;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar>ul>li>a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #009961;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover>a:before,
.navbar .active:before {
  visibility: visible;
  width: 100%;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #fff;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 0;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-top: 2px solid #009961;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  font-weight: 500;
  color: #282828;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: #009961;
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(15, 15, 15, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #282828;
}

.navbar-mobile a:hover:before,
.navbar-mobile li:hover>a:before,
.navbar-mobile .active:before {
  visibility: hidden;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover>a {
  color: #009961;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover>a {
  color: #009961;
}

.navbar-mobile .dropdown>.dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background: url("../img/hero-bg.jpg") top center;
  background-size: cover;
  position: relative;
}

#hero:before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  padding-top: 72px;
  position: relative;
  text-align: center;
}

#hero h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#hero h2 {
  color: #eee;
  margin-bottom: 40px;
  font-size: 24px;
}

#hero .play-btn {
  width: 94px;
  height: 94px;
  margin: 0 auto;
  background: radial-gradient(#009961 50%, rgba(0, 153, 97, 0.4) 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}

#hero .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

#hero .play-btn::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate-btn 3s;
  animation: pulsate-btn 3s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(0, 153, 97, 0.7);
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

#hero .play-btn:hover::after {
  border-left: 15px solid #009961;
  transform: scale(20);
}

#hero .play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@-webkit-keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 80px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #8fffd6;
}

.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #009961;
  bottom: 0;
  left: 0;
}

.section-title p {
  margin-bottom: 0;
  color: #777777;
  font-size: 15px;
}

/*--------------------------------------------------------------
# About Us
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-left: 28px;
  position: relative;
}

.about .content ul li+li {
  margin-top: 10px;
}

.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #009961;
  line-height: 1;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .btn-learn-more {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: #009961;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #009961;
}

.about .content .btn-learn-more:hover {
  background: #009961;
  color: #fff;
  text-decoration: none;
}

/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  padding: 60px 30px;
  transition: all ease-in-out 0.3s;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
  border-radius: 18px;
  border-bottom: 5px solid #fff;
}

.services .icon-box .icon {
  width: 64px;
  height: 64px;
  background: #009961;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: ease-in-out 0.3s;
  color: #fff;
}

.services .icon-box .icon i {
  font-size: 28px;
}

.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}

.services .icon-box h4 a {
  color: #282828;
  transition: ease-in-out 0.3s;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .icon-box:hover {
  transform: translateY(-10px);
  border-color: #009961;
}

.services .icon-box:hover h4 a {
  color: #009961;
}

/*--------------------------------------------------------------
# Cta
--------------------------------------------------------------*/
.cta {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../img/cta-bg.jpg") fixed center center;
  background-size: cover;
  padding: 120px 0;
}

.cta h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

.cta p {
  color: #fff;
}

.cta .cta-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 2px;
  transition: 0.5s;
  margin: 10px;
  background: #009961;
  color: #fff;
  border-radius: 50px;
}

.cta .cta-btn:hover {
  background: #00b371;
}

@media (max-width: 1024px) {
  .cta {
    background-attachment: scroll;
  }
}

@media (min-width: 769px) {
  .cta .cta-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px 60px;
}

.features .icon-box i {
  font-size: 48px;
  float: left;
  color: #009961;
}

.features .icon-box p {
  font-size: 15px;
  color: #848484;
  margin-left: 60px;
}

.features .image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
}

/*--------------------------------------------------------------
# Clients
--------------------------------------------------------------*/
.clients {
  padding-top: 30px;
}

.clients .clients-wrap {
  border-top: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
}

.clients .client-logo {
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  overflow: hidden;
  background: #fff;
  height: 140px;
}

.clients .client-logo:hover img {
  transform: scale(1.1);
}

.clients img {
  transition: all 0.4s ease-in-out;
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  background: url("../img/counts-bg.jpg") center center no-repeat;
  background-size: cover;
  padding: 80px 0 60px 0;
  position: relative;
}

.counts::before {
  content: "";
  position: absolute;
  background: rgba(17, 17, 17, 0.9);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.counts .title {
  position: relative;
  color: #fff;
  margin-bottom: 40px;
}

.counts .title h3 {
  font-size: 36px;
  font-weight: 700;
}

.counts .counters span {
  font-size: 48px;
  display: block;
  font-weight: 700;
  color: #009961;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #fff;
}

@media (min-width: 1200px) {
  .counts {
    background-attachment: fixed;
  }
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px 10px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #444444;
  margin: 0 3px 10px 3px;
  transition: all ease-in-out 0.3s;
  background: #f4f4f4;
  border-radius: 50px;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  color: #fff;
  background: #009961;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
  overflow: hidden;
}

.portfolio .portfolio-item img {
  position: relative;
  top: 0;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: -50px;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: #009961;
  padding: 15px 20px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}

.portfolio .portfolio-item .portfolio-info p {
  color: #fff;
  font-size: 14px;
  margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: white;
  transition: ease-in-out 0.3s;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #33ffb4;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 15px;
}

.portfolio .portfolio-item:hover img {
  top: -30px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #009961;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #009961;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(40, 40, 40, 0.08);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li+li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}

/*--------------------------------------------------------------
# Pricing
--------------------------------------------------------------*/
.pricing {
  background-color: #f9f9f9;
}

.pricing .box {
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
}

.pricing .box h3 {
  font-weight: 400;
  padding: 15px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #282828;
}

.pricing .box h4 {
  font-size: 42px;
  color: #009961;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 20px;
}

.pricing .box h4 sup {
  font-size: 20px;
  top: -15px;
  left: -3px;
}

.pricing .box h4 span {
  color: #bababa;
  font-size: 16px;
  font-weight: 300;
}

.pricing .box ul {
  padding: 20px 0;
  list-style: none;
  color: #282828;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.pricing .box ul li {
  padding-bottom: 16px;
}

.pricing .box ul i {
  color: #009961;
  font-size: 18px;
  padding-right: 4px;
}

.pricing .box ul .na {
  color: #ccc;
  text-decoration: line-through;
}

.pricing .box .btn-wrap {
  padding: 15px;
  text-align: center;
}

.pricing .box .btn-buy {
  display: inline-block;
  padding: 10px 40px 12px 40px;
  border-radius: 50px;
  border: 2px solid #009961;
  color: #009961;
  font-size: 14px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  transition: 0.3s;
}

.pricing .box .btn-buy:hover {
  background: #009961;
  color: #fff;
}

.pricing .recommended {
  border-color: #009961;
}

.pricing .recommended .btn-buy {
  background: #009961;
  color: #fff;
}

.pricing .recommended .btn-buy:hover {
  background: #00b371;
  border-color: #00b371;
}

.pricing .recommended-badge {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 13px;
  padding: 3px 25px 6px 25px;
  background: #edfbf0;
  color: #009961;
  border-radius: 50px;
}

/*--------------------------------------------------------------
# Faq
--------------------------------------------------------------*/
.faq {
  padding: 0;
}

.faq .content {
  padding: 60px 100px 0 100px;
}

.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.faq .content h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}

.faq .content p {
  font-size: 15px;
  color: #848484;
}

.faq .img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 400px;
}

.faq .accordion-list {
  padding: 0 100px 60px 100px;
}

.faq .accordion-list ul {
  padding: 0;
  list-style: none;
}

.faq .accordion-list li+li {
  margin-top: 15px;
}

.faq .accordion-list li {
  padding: 20px;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
  border-radius: 4px;
}

.faq .accordion-list a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-right: 30px;
  outline: none;
  cursor: pointer;
}

.faq .accordion-list i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}

.faq .accordion-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.faq .accordion-list .icon-show {
  display: none;
}

.faq .accordion-list a.collapsed {
  color: #343a40;
}

.faq .accordion-list a.collapsed:hover {
  color: #009961;
}

.faq .accordion-list a.collapsed .icon-show {
  display: inline-block;
}

.faq .accordion-list a.collapsed .icon-close {
  display: none;
}

@media (max-width: 1024px) {

  .faq .content,
  .faq .accordion-list {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 992px) {
  .faq {
    /* img {
      padding-top: 30px;
    } */
  }

  .faq .content {
    padding-top: 30px;
  }

  .faq .accordion-list {
    padding-bottom: 30px;
  }
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 32px;
  color: #009961;
  float: left;
  line-height: 1;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #282828;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #5b5b5b;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .sent-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 4px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #009961;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: #009961;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #00b371;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: #f9f9f9;
  min-height: 40px;
  margin-top: 72px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 63px;
  }
}

.breadcrumbs h2 {
  font-size: 26px;
  font-weight: 500;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li+li {
  padding-left: 10px;
}

.breadcrumbs ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: #424242;
  content: "/";
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #0f0f0f;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #009961;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: #00b371;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
}

#footer .credits {
  font-size: 13px;
}

#footer .credits a {
  color: #00b371;
  transition: 0.3s;
}

#footer .credits a:hover {
  color: #009961;
}


/* Engineering Mathematics 1 */
/********** Template CSS **********/
:root {
  --primary: #06BBCC;
  --light: #F0FBFC;
  --dark: #181d38;
}

.fw-medium {
  font-weight: 600 !important;
}

.fw-semi-bold {
  font-weight: 700 !important;
}

.back-to-top {
  position: fixed;
  display: none;
  right: 45px;
  bottom: 45px;
  z-index: 99;
}


/*** Spinner ***/
#spinner {
  opacity: 0;
  visibility: hidden;
  transition: opacity .5s ease-out, visibility 0s linear .5s;
  z-index: 99999;
}

#spinner.show {
  transition: opacity .5s ease-out, visibility 0s linear 0s;
  visibility: visible;
  opacity: 1;
}


/*** Button ***/
.btn {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  transition: .5s;
}

.btn.btn-primary,
.btn.btn-secondary {
  color: #FFFFFF;
}

.btn-square {
  width: 38px;
  height: 38px;
}

.btn-sm-square {
  width: 32px;
  height: 32px;
}

.btn-lg-square {
  width: 48px;
  height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  border-radius: 0px;
}


/*** Navbar ***/
.navbar .dropdown-toggle::after {
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  vertical-align: middle;
  margin-left: 8px;
}

.navbar-light .navbar-nav .nav-link {
  margin-right: 30px;
  padding: 25px 0;
  color: #FFFFFF;
  font-size: 15px;
  text-transform: uppercase;
  outline: none;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
  color: var(--primary);
}

@media (max-width: 991.98px) {
  .navbar-light .navbar-nav .nav-link {
    margin-right: 0;
    padding: 10px 0;
  }

  .navbar-light .navbar-nav {
    border-top: 1px solid #EEEEEE;
  }
}

.navbar-light .navbar-brand,
.navbar-light a.btn {
  height: 75px;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--dark);
  font-weight: 500;
}

.navbar-light.sticky-top {
  top: -100px;
  transition: .5s;
}

@media (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    margin-top: 0;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
  }

  .navbar .dropdown-menu.fade-down {
    top: 100%;
    transform: rotateX(-75deg);
    transform-origin: 0% 0%;
  }

  .navbar .nav-item:hover .dropdown-menu {
    top: 100%;
    transform: rotateX(0deg);
    visibility: visible;
    transition: .5s;
    opacity: 1;
  }
}


/*** Header carousel ***/
@media (max-width: 768px) {
  .header-carousel .owl-carousel-item {
    position: relative;
    min-height: 500px;
  }

  .header-carousel .owl-carousel-item img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.header-carousel .owl-nav {
  position: absolute;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.header-carousel .owl-nav .owl-prev,
.header-carousel .owl-nav .owl-next {
  margin: 7px 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: transparent;
  border: 1px solid #FFFFFF;
  font-size: 22px;
  transition: .5s;
}

.header-carousel .owl-nav .owl-prev:hover,
.header-carousel .owl-nav .owl-next:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.page-header {
  background: linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.page-header-inner {
  background: rgba(15, 23, 43, .7);
}

.breadcrumb-item+.breadcrumb-item::before {
  color: var(--light);
}


/*** Section Title ***/
.section-title {
  position: relative;
  display: inline-block;
  text-transform: uppercase;
}

.section-title::before {
  position: absolute;
  content: "";
  width: calc(100% + 80px);
  height: 2px;
  top: 4px;
  left: -40px;
  background: var(--primary);
  z-index: -1;
}

.section-title::after {
  position: absolute;
  content: "";
  width: calc(100% + 120px);
  height: 2px;
  bottom: 5px;
  left: -60px;
  background: var(--primary);
  z-index: -1;
}

.section-title.text-start::before {
  width: calc(100% + 40px);
  left: 0;
}

.section-title.text-start::after {
  width: calc(100% + 60px);
  left: 0;
}


/*** Service ***/
.service-item {
  background: var(--light);
  transition: .5s;
}

.service-item:hover {
  margin-top: -10px;
  background: var(--primary);
}

.service-item * {
  transition: .5s;
}

.service-item:hover * {
  color: var(--light) !important;
}


/*** Categories & Courses ***/
.category img,
.course-item img {
  transition: .5s;
}

.category a:hover img,
.course-item:hover img {
  transform: scale(1.1);
}


/*** Team ***/
.team-item img {
  transition: .5s;
}

.team-item:hover img {
  transform: scale(1.1);
}


/*** Testimonial ***/
.testimonial-carousel::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
}

.testimonial-carousel::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
}

@media (min-width: 768px) {

  .testimonial-carousel::before,
  .testimonial-carousel::after {
    width: 200px;
  }
}

@media (min-width: 992px) {

  .testimonial-carousel::before,
  .testimonial-carousel::after {
    width: 300px;
  }
}

.testimonial-carousel .owl-item .testimonial-text,
.testimonial-carousel .owl-item.center .testimonial-text * {
  transition: .5s;
}

.testimonial-carousel .owl-item.center .testimonial-text {
  background: var(--primary) !important;
}

.testimonial-carousel .owl-item.center .testimonial-text * {
  color: #FFFFFF !important;
}

.testimonial-carousel .owl-dots {
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.testimonial-carousel .owl-dot {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  border: 1px solid #CCCCCC;
  transition: .5s;
}

.testimonial-carousel .owl-dot.active {
  background: var(--primary);
  border-color: var(--primary);
}


/*** Footer ***/
.footer .btn.btn-social {
  margin-right: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  font-weight: normal;
  border: 1px solid #FFFFFF;
  border-radius: 35px;
  transition: .3s;
}

.footer .btn.btn-social:hover {
  color: var(--primary);
}

.footer .btn.btn-link {
  display: block;
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: normal;
  text-transform: capitalize;
  transition: .3s;
}

.footer .btn.btn-link::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}

.footer .btn.btn-link:hover {
  letter-spacing: 1px;
  box-shadow: none;
}

.footer .copyright {
  padding: 25px 0;
  font-size: 15px;
  border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
  color: var(--light);
}

.footer .footer-menu a {
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid rgba(255, 255, 255, .1);
}

.footer .footer-menu a:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: none;
}
