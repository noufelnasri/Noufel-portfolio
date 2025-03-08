

let hireus = document.getElementById("hireus") ; 


    setTimeout(() => {
       hireus.style.display= "block" ;
    }, 5000); 

let closestar = document.getElementById("closestar") ; 
let gotogithub = document.getElementById("go") ; 

closestar.addEventListener("click" , () =>{
    hireus.style.display = "none" ; 
});

gotogithub.addEventListener("click" ,() =>{
window.location ="https://github.com/" ; 
});


let toggler = document.getElementById("switch");
const root = document.documentElement; // Access the root element (:root)****************

toggler.addEventListener("click", () => {
    if (toggler.checked === true) {
        root.style.setProperty("--whitecolor", "black");
        root.style.setProperty("--blackcolor", "white");
        document.body.style.backgroundColor = "white";
    } else {
        root.style.setProperty("--whitecolor", "#fff");
        document.body.style.backgroundColor = "#000000";
    }
});

let navbarr =document.getElementById("navbarr") ; 
let closenav = document.getElementById("closenav") ; 

closenav.addEventListener("click", ()=>{
    navbarr.style.display= "none" ;
 })

 let opennav = document.getElementById("openav")  ;

 opennav.addEventListener("click" , () =>{
    navbarr.style.display ="flex" ;
 });



 /***************************** Scroolll optionsss */


 const scrollRevealOption = { 
     distance: "190px", 
     origin: "bottom", 
     duration: 1000,
};



  ScrollReveal().reveal("logo", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal("hero profileimg", {
    ...scrollRevealOption,
    delay: 2500,
  });


  ScrollReveal().reveal(".navbarr", {
    ...scrollRevealOption,
    delay: 100,
  });

  ScrollReveal().reveal("header h1", {
    ...scrollRevealOption,
    delay: 300,
  });
  ScrollReveal().reveal("#hero h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal("#about h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  
  ScrollReveal().reveal("#skills h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  
  ScrollReveal().reveal("#Education h2", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal("h4", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".content  p", {
    ...scrollRevealOption,
    delay: 1300,
  });

  ScrollReveal().reveal(".content  .buttons", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".content  .socials", {
    ...scrollRevealOption,
    delay: 1700,
  });

  ScrollReveal().reveal(".profileimg", {
    ...scrollRevealOption,
    delay: 1800,
  });



  ScrollReveal().reveal(".profileimgabout", {
    ...scrollRevealOption,
    delay: 800,
  });

  ScrollReveal().reveal("#about h3", {
    ...scrollRevealOption,
    delay: 1000,
  });

  
  ScrollReveal().reveal("#about p", {
    ...scrollRevealOption,
    delay: 1200,
  });

  ScrollReveal().reveal("#about button", {
    ...scrollRevealOption,
    delay: 1400,
  });

  ScrollReveal().reveal("#skills h2", {
    ...scrollRevealOption,
    delay: 1000,
  });

  
  ScrollReveal().reveal("#skills .container", {
    ...scrollRevealOption,
    delay: 1400,
  });

  ScrollReveal().reveal("#skill .skill", {
    ...scrollRevealOption,
    delay: 1600,
  });



  ScrollReveal().reveal("#Education .content1", {
    ...scrollRevealOption,
    delay: 600,
  });

  ScrollReveal().reveal("#Education .content2", {
    ...scrollRevealOption,
    delay: 900,
  })
  ScrollReveal().reveal("#Education .content3", {
    ...scrollRevealOption,
    delay: 1200,
  })
  ScrollReveal().reveal("#Education .content4", {
    ...scrollRevealOption,
    delay: 1500,
  })
  ScrollReveal().reveal("#Education .content5", {
    ...scrollRevealOption,
    delay: 1800,
  })
  ScrollReveal().reveal("#Education .content6", {
    ...scrollRevealOption,
    delay: 2100,
  })
  ScrollReveal().reveal("#Education .content7", {
    ...scrollRevealOption,
    delay: 2400,
  })

  ScrollReveal().reveal("#contactus", {
    ...scrollRevealOption,
    delay: 600,
  })