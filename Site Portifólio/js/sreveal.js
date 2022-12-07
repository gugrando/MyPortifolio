var b = setInterval(function () {
    clearInterval(b);
  
    window.sr = ScrollReveal({ reset: false });

    sr.reveal('#picture-div',{
        duration: 1900, 
        delay:800,
        origin: "bottom",
        distance: "100px",
    });
    sr.reveal("#th1",{
        duration: 1900,
        delay: 900,
        origin: "bottom",
        distance: "80px",
    })
    sr.reveal("#th2",{
        duration: 1900,
        delay: 900,
        origin: "bottom",
        distance: "80px",
        // reset: "true"
    })
    sr.reveal("#c-button",{
        duration: 1800,
        delay: 1200,
        origin:"bottom",
        distance: "60px"
    })
    sr.reveal("#btn-mobile",{
        duration: 1500,
        delay: 300,
        origin:"top",
        distance: "20px"
    })
    sr.reveal("#logo",{
        duration: 1500,
        delay: 300,
        origin:"top",
        distance: "20px"
    })

    
    // Cs
    sr.reveal("#c4",{
        duration:1000,
        origin:"top",
        distance:"100px",
        delay:600
    })
    sr.reveal("#c3",{
        duration:1000,
        delay:400,
        origin:"top",
        distance:"100px"
    })
    sr.reveal("#c2",{
        duration:1000,
        delay:200,
        origin:"top",
        distance:"100px"
    })
    sr.reveal("#c1",{
        duration:1000,
        origin:"top",
        distance:"100px",
        // delay: 3000
    })
    sr.reveal('.v-lines',{
        duration: 2000, 
        delay:1800,
    });
    sr.reveal('#about-header',{
        duration: 1800, 
        origin: "bottom",
        distance: "60px",
        // delay:2800,
    });
    sr.reveal('#abt',{
        duration: 2000, 
        origin: "bottom",
        distance: "60px",
        delay:400,
    });



    // About-Icons
    sr.reveal('.ea',{
        duration: 2000, 
        origin: "bottom",
        distance: "20px",
        delay:400,
    });
    sr.reveal('.sl',{
        duration: 2000, 
        origin: "bottom",
        distance: "20px",
        delay:700,
    });
    sr.reveal('.co',{
        duration: 2000, 
        origin: "bottom",
        distance: "20px",
        delay:1000,
    });
    sr.reveal('.gy',{
        duration: 2000, 
        origin: "bottom",
        distance: "20px",
        delay:1300,
    });
    sr.reveal('.rp',{
        duration: 2000, 
        origin: "bottom",
        distance: "20px",
        delay:1600,
    });

}, 3300);

