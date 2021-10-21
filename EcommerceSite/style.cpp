 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 body {
  font-family: 'poppins',sans-serif;   
 }
 .navbar {
     display: flex;
     align-items: center;
     padding: 20px;
 }
 nav {
    flex: 1;
    text-align: right; 
 }
 nav ul {
display: inline-block;
list-style-type: none;
 }
 nav ul li {
display: inline-block;
margin-right: 20px;
 }
 a {
     text-decoration: none;
     color: #555;
 }
 
 .contianer {
     max-width: 1300px;
     margin: auto;
     padding-left: 25px;
     padding-right: 25px;    
 }
 
 .row {
     display:flex;
     align-items: center;
     flex-wrap: wrap;
     justify-content: space-around;
 }
 .col-2 {
     flex-basis: 50%;
     min-width: 300px;
 }
 .col-2 img{
max-width: 100%;
padding: 50px 0;
 }
 .col-2 h1{
font-size: 50px;
line-height: 60px;
margin: 25px 0;
 }
 .btn {
     display: inline-block;
     background: #ff523b;
     color: #fff;
     padding: 8px 30px;
     margin: 30px 0;
     border-radius: 30px;
     transition: background 0.5s;
 }
 .header {
     background: radial-gradient(#fff,#ffd6d6);
    }
    p {
        color: #555;
    }
    .btn:hover {
background:#563434;
    }
    .categories {
margin: 70px;
    }
    .col-3 {
flex-basis: 30%;
min-width: 250px;
margin-bottom: 30px;
    }
    .col-3 img {
        width: 100%;
    }
.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}
.col-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}
.col-4 img {
width: 100%;
}
    .title {
        text-align: center;
        margin: 0 auto 80px;
        position: relative;
        line-height: 60px;
        color: #555;
    }
    .title::after{
        content: '';
        background: #ff523b;
        width: 80px;
        height: 5px;
        border-radius:5px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50);
    }
    h4 {
        color: #555;
        font-weight: normal;
    }
    .col-4 p {
        font-size: 14px;
    }
    .rating .fa fa-star{
color: hsl(7, 100%, 62%);
    }
.col-4:hover {
    transform: translateY(-5px);
}
    .offer {
        background: radial-gradient(#fff,#ffd6d6);
        margin-top: 80px;
        padding: 30px 0;
    }
col-2 .offer {
 padding: 50px;   
}
small {
    color: #555;   
}
.testimonial {
    padding-top: 100px;
}
.testimonial .col-3 {
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0,0,0,0.1);
cursor: pointer;
}
.testimonial .col-3 img {
    width: 50px;
    margin-top: 20px;
    border-radius: 50%;
}
.testimonial .col-3:hover {
    transform:translateY(-10px);
}
.fa fa-quote-left {
    font-size: 34px;
    color: #ff523b;
}
.col-3 p{
    font-size: 12px;
    margin: 12px 0;
    color: #777;
}
.testimonial .col-3 h3 {
font-weight: 600;
color: #555;
font-size: 16px;
}
/*--------brands-----*/
.brands {
    margin: 100px auto;
}
.col-5 {
    width: 160px;
}
.col-5 img {
    width: 100%;
    cursor: pointer;
    filter: grayscale(100%);
}
.col-5 img:hover{
filter: grayscale(0%);
}
/*------footer------/*/
.footer {
  background: #000;
  color: #8a8a8a;
  font-size: 14px;
  padding: 60px 0 20px;  
}
.footer p{
    color: #8a8a8a;
}
.footer h3 {
    color: #fff;
    margin-bottom: 20px;
}
.footer-col-1, .footer-col-2,.footer-col-3,.footer-col-4{
min-width: 260px;
margin-bottom: 20px;
}
.footer-col-1 {
    flex-basis: 30%;
}
.footer-col-2{
    flex: 1;
    text-align: center;
}
.footer-col-2 img{
    width: 180px;
    margin-bottom: 20px;
}
.footer-col-3,.footer-col-4{
flex-basis: 12%;
text-align: center;
}
ul {
    list-style-type: none; 
}
.app-logo {
    margin-top: 20px;
}
.app-logo img {
    width: 140px;
}
.footer hr{
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
}
.copyright {
    text-align: center;
}
.menu-icon {
    width: 28px;
    margin-left: 20px;
    display: none;
}
/*     medai query for menu   */
@media only screen and (max-width: 800px) {
    nav ul {
        position: absolute;
        top: 70px;
        left: 0;
        background: #333;
        width: 100%;
        overflow: hidden;
        transition: max-height 0.5s;

    }
    nav ul li {
display: block;
margin-right: 50px;
margin-top: 10px;
margin-bottom: 10px;
    }
    nav ul a {
        color: #fff;
    }
    .menu-icon {
        display: block;
cursor: pointer;
    }
}
/*media query for less than 600px*/
@media only screen and (max-width: 600px){
    .row {
        text-align: center;
    }
    .col-2, .col-3,.col-4 {
        flex-basis: 100%;
    }
}
