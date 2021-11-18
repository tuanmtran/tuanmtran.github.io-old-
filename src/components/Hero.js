import React from "react"

class HeroSection extends React.Component {
  render() {
    return (
      
      <div class="font-sans text-4xl h-screen overflow-hidden relative flex flex-col flex-wrap justify-center items-center bg-gradient-to-t from-red-500 to-pink-400 text-white font-exo p-16">
        <p class="Whitespace-pre pb-6"> Hello There, </p>  
        
        <p class="Whitespace-pre text-3xl"> I'm
          <a href="" class="typewrite flex-col" data-period="1000" data-type='[ " Tuan", " Tony", " excited to work with you!", " coffee dependent", " a non-stack dev", " computer vision engineer"]'>
              <span class="wrap"></span>
          </a>
        </p>
        <div>
          <p class="flex flex-col text-3xl pt-6"> Welcome to my website.
            <a class="text-2xl resume" href="https://www.overleaf.com/read/mstxpshyyhjp">Check out my resume</a>
            <a class="text-2xl Links" href="https://github.com/tuanmtran"> GitHub </a>
            <a class="text-2xl Links" href="https://www.linkedin.com/in/tuan-m-tran/"> Linkedin</a>
          </p>
        </div>
      </div>
    )
  }
}
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
  }

  setTimeout(function () {
      that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

export default HeroSection