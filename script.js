// =========================================
// THEME TOGGLE
// =========================================

const themeToggle =
document.getElementById("theme-toggle");


// LOAD SAVED THEME

if(localStorage.getItem("theme") === "dark"){

  document.body.classList.add("dark-mode");

}


// TOGGLE THEME

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

      localStorage.setItem("theme","dark");

    }else{

      localStorage.setItem("theme","light");

    }

  });

}




// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar =
document.querySelector("nav");


window.addEventListener("scroll", () => {

  if(window.scrollY > 30){

    navbar.classList.add("nav-scrolled");

  }else{

    navbar.classList.remove("nav-scrolled");

  }

});




// =========================================
// SCROLL REVEALS
// =========================================

const revealItems =
document.querySelectorAll(

  ".hero,\
   .gain-card,\
   .process-card,\
   .metric-card,\
   .about-row,\
   .contact-container,\
   .pricing-card,\
   .services-hero"

);


const revealOnScroll = () => {

  const triggerBottom =
  window.innerHeight * 0.88;


  revealItems.forEach((item,index) => {

    const itemTop =
    item.getBoundingClientRect().top;


    if(itemTop < triggerBottom){

      setTimeout(() => {

        item.classList.add("show-reveal");

      }, index * 90);

    }

  });

};


window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();




// =========================================
// MAGNETIC BUTTONS
// =========================================

const magneticButtons =
document.querySelectorAll(

  ".primary-btn,\
   .secondary-btn,\
   .nav-btn,\
   .contact-submit"

);


magneticButtons.forEach((button) => {

  button.addEventListener("mousemove",(e)=>{

    const rect =
    button.getBoundingClientRect();

    const x =
    e.clientX - rect.left - rect.width / 2;

    const y =
    e.clientY - rect.top - rect.height / 2;

    button.style.transform =
    `translate(${x * 0.12}px, ${y * 0.12}px)`;

  });


  button.addEventListener("mouseleave",()=>{

    button.style.transform =
    "translate(0px,0px)";

  });

});




// =========================================
// HERO PARALLAX
// =========================================

const heroImage =
document.querySelector(".hero-image");

const heroContent =
document.querySelector(".hero-content");


document.addEventListener("mousemove",(e)=>{

  const x =
  (window.innerWidth / 2 - e.clientX) / 45;

  const y =
  (window.innerHeight / 2 - e.clientY) / 45;


  if(heroImage){

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

  }


  if(heroContent){

    heroContent.style.transform =
    `translate(${x / 3}px, ${y / 3}px)`;

  }

});



// =========================================
// METRIC COUNTERS
// =========================================

const counters =
document.querySelectorAll(".counter");


counters.forEach((counter)=>{

  const updateCounter = () => {

    const target =
    +counter.getAttribute("data-target");

    const current =
    +counter.innerText.replace("+","");

    const increment =
    target / 80;


    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}+`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText =
      `${target}+`;

    }

  };

  updateCounter();

});


// =========================================
// EMAILJS
// =========================================


// INIT EMAILJS

emailjs.init("kAFG4ohrQcVjF2Zh6");


// CONTACT FORM

const contactForm =
document.getElementById("contact-form");


// CHECK FORM EXISTS

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();


// FORM DATA

    const templateParams = {

      name:
      document.getElementById("name").value,

      email:
      document.getElementById("email").value,

      interest:
      document.getElementById("interest").value,

      message:
      document.getElementById("message").value

    };



// =========================================
// TEMPLATE 1
// SEND INQUIRY TO YOU
// =========================================

    emailjs.send(

      "service_eurxnu8",
      "template_7jtmjr8",
      templateParams

    )


// =========================================
// TEMPLATE 2
// AUTO REPLY TO USER
// =========================================

    .then(function(){

      return emailjs.send(

        "service_eurxnu8",
        "template_a39reeb",
        templateParams

      );

    })


// =========================================
// SUCCESS
// =========================================

    .then(function(){

      alert(
        "Consultation request submitted successfully."
      );

      contactForm.reset();

    })


// =========================================
// ERROR
// =========================================

    .catch(function(error){

      alert(
        "Something went wrong. Please try again."
      );

      console.log(error);

    });

  });

}
