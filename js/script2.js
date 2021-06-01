const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.fromTo(".h-100", { opacity: 0 }, { opacity: 1, duration: 1.4 });
tl.fromTo(".mb-5", { opacity: 0 }, { opacity: 1, duration: 1, delay:0.5 }, "-=1");
tl.fromTo(".navbar-brand", { opacity: 0 }, { opacity: 1, duration: 1, delay:0.5 }, "-=1");
tl.fromTo(".nav-item", { opacity: 0 }, { opacity: 1, duration: 1, delay:0.3 }, "-=1");

const tl2 = new TimelineMax({ repeat: -1, repeatDelay: 1 })
tl2.to(".mt-5", {duration: 1, color: "#cc5c6b", stagger: 1});
tl2.to(".mt-5", {duration: 1, color: "black", stagger: 1});