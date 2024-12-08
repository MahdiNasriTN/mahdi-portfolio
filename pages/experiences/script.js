const init = () => {
    lenis = new Lenis({
        lerp: 0.04,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }


    requestAnimationFrame(raf);
};

init();





document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


    const paraghScrollTimeLineFS = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=200 center",
            end: "top+=1000 center",
            scrub: 1,
        }
    })

    paraghScrollTimeLineFS.to("#fSParagh", {
        y: "200px",
        ease: "power2.in"
    })


    const smoothScrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=500 center",
            end: "top+=2600 center",
            scrub: 1,
            
        }
    });

    smoothScrollTimeline.fromTo("#firstSection",
        {
            x: 0,
            y: 0,
            scale: 1.0
        },
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '-110px', y: '50vh' },
                    { x: '500px', y: '70vh' },
                ],
                curviness: 0.5
            },
            scale: 1.3
        }
    );

    smoothScrollTimeline.to("#firstSection", {
        opacity: 0,
    })

    ///////////////////////////////////////////

    const secondSectionTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=500 center",
            end: "top+=1200 center",
            scrub: 1,
            
        }
    });

    secondSectionTimeLine.fromTo("#secondSection",
        {
            x: "200px",
            y: 0,
        },
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '-100px', y: '80vh' },
                    { x: '-130px', y: '100vh' },
                ],
                curviness: 0.5
            },
        }
    );
    const secondSectionTextTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=1700 center",
            end: "top+=1800 center",
            scrub: 1,
            
        }
    });

    secondSectionTextTimeLine.to(".primatec-roles, .primatec-myrole, .primatec-button", {
        opacity: 1,
        ease: "power2.in",
    });

    const secondSectionDissperance = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=2400 center",
            end: "top+=3700 center",
            scrub: 1,
            
        }
    });


    secondSectionDissperance.to("#secondSection",
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '-400px', y: '200vh' },
                    { x: '-200px', y: '270vh' },
                ],
                curviness: 0.5
            },
            scale: 1.8
        }
    );

    ///////////////////////////////////////////



    const thirdSectionTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=500 center",
            end: "top+=1200 center",
            scrub: 1,
            
        }
    })

    thirdSectionTimeLine.to("#thirdSection", {
        y: "100vh",
        ease: "power2.in",
    });

    const thirdSectionTimeLineApperance = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=2400 center",
            end: "top+=3300 center",
            scrub: 1,
            
        }
    });

    thirdSectionTimeLineApperance.fromTo("#thirdSection",
        {
            x: "800px",
            y: "50vh",
        },
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '-140px', y: '120vh' },
                    { x: '-200px', y: '160vh' },
                    { x: '-180px', y: '190vh' },
                ],
                curviness: 0.5
            },
        }
    );

    const thirdSectionTextTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=3800 center",
            end: "top+=4000 center",
            scrub: 1,
            
        }
    });

    thirdSectionTextTimeLine.to(".gomycode-roles, .gomycode-button, .gomycode-myrole", {
        opacity: 1,
        ease: "power2.in",
    });

    const thirdSectionDissperance = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=4800 center",
            end: "top+=5800 center",
            scrub: 1,
            
        }
    });

    thirdSectionDissperance.to("#thirdSection",
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '-400px', y: '270vh' },
                    { x: '-200px', y: '370vh' },
                ],
                curviness: 0.5
            },
            scale: 1.8
        }
    );


    ////////////////////////////////////////////

    const fourthSectionTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=500 center",
            end: "top+=2400 center",
            scrub: 1,
            
        }
    })

    fourthSectionTimeLine.to("#fourthSection", {
        y: "200vh",
        ease: "power2.in",
    });

    const fourthSectionTimeLineApperance = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=4000 center",
            end: "top+=6000 center",
            scrub: 1,
            
        }
    });

    fourthSectionTimeLineApperance.fromTo("#fourthSection",
        {
            x: "800px",
            y: "0vh",
        },
        {
            ease: "none",
            motionPath: {
                path: [
                    { x: '500px', y: '100vh' },
                    { x: '400px', y: '160vh' },
                    { x: '-70', y: '270vh' },
                    { x: '-60', y: '290vh' },
                ],
                curviness: 0.5
            },
        }
    );

    const fourthSectionTextTimeLine = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=6200 center",
            end: "top+=6500 center",
            scrub: 1,
            
        }
    });

    fourthSectionTextTimeLine.to(".zetabox-roles, .zetabox-button, .zetabox-myrole", {
        opacity: 1,
        ease: "power2.in",
    });

    const fourthSectionTimeLineDissaperence = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=6800 center",
            end: "top+=8600 center",
            scrub: 1,
            
        }
    });

    fourthSectionTimeLineDissaperence.to("#fourthSection",
        {
            ease: "power2.in",
            scale: 4,
            x: "-340%"
        }
    );



    /////////////////// ORANGE BACKGROUND ANIMATION //////////////////////////


    const fBackgroundAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=500 center",
            end: "top+=1200 center",
            scrub: 1,
            
        }
    });

    fBackgroundAnimation.to(".orange-light-background", {
        y: "400px",
        ease: "power2.in",
    });

    const sBackgroundAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=2400 center",
            end: "top+=3300 center",
            scrub: 1,
            
        }
    });

    sBackgroundAnimation.to(".orange-light-background", {
        y: "-100px",
        x: "-500px",
        ease: "power2.in",
    });

    const lBackgroundAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=4000 center",
            end: "top+=6000 center",
            scrub: 1,
            
        }
    });

    lBackgroundAnimation.to(".orange-light-background", {
        y: "200px",
        x: "500px",
        ease: "power2.in",
    });

    const mainBackgroundAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-sections-container",
            start: "top+=6800 center",
            end: "top+=8000 center",
            scrub: 1,
            
        }
    });

    mainBackgroundAnimation.to(".orange-light-background", {
        y: "-200px",
        x: "-500px",
        ease: "power2.in",
    });


    //////////////// CARDS //////////////////////////////


    gsap.fromTo("#cardExperiencesContainer",
        { x: "0%", opacity: 1, y: "0vh" },
        {
            x: "0%", opacity: 1, duration: 1, ease: "power3.out", y: "-240vh", scrollTrigger: {
                trigger: "#zetaboxPosParagh",
                start: "top center",
                end: "top+=1500",
                scrub: true,
                toggleActions: "play none none reverse",
                
            }
        }
    );



    ////////////////////////////////////////////////////////////////


    gsap.to(".iit-video", {
        transform: "translateY(-50%) rotateX(0deg) rotateY(0deg)",
        width: "100%",
        height: "100vh",
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".iit-section",
            start: "top center",
            end: "top+=1000",
            scrub: true,
            
        }
    });

    gsap.to(".education-paragh", {
        transform: "translateX(0)",
        opacity : 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".iit-section",
            start: "top+=1700 center",
            end: "top+=1800",
            scrub: true,
            
        }
    });


});

document.querySelector('.primatec-button').addEventListener('click', () => {
    window.location.href = 'https://primatec.recruitee.com/';
});

document.querySelector('.zetabox-button').addEventListener('click', () => {
    window.location.href = 'https://zeta-box.com/';
});
document.querySelector('.gomycode-button').addEventListener('click', () => {
    window.location.href = 'https://gomycode.com/';
});

