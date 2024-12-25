let slider = {

    slides: ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg'],
    
    i: 0,

    set: function (image) {
        document.getElementById('scr').style.backgroundImage = "url("+image+")";
    },

    init: function() {
        this.set(this.slides[this.i]);
    },

    leftButton: function() {
        this.i--;
        if (this.i < 0) this.i = this.slides.length - 1;
        this.set(this.slides[this.i]);
    },

    rightButton: function() {
        this.i++;
        if (this.i == this.slides.length) this.i = 0;
        this.set(this.slides[this.i]);
    }
}

window.onload = () => {

    slider.init();

    setInterval(() => {slider.rightButton()}, 5000);

    let btn1 = document.querySelector('.left');
    btn1.addEventListener('click', () => slider.leftButton());

    let btn2 = document.querySelector('.right');
    btn2.addEventListener('click', () => slider.rightButton());

}