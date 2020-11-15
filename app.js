const tl = gsap.timeline({defaults: {ease: 'power1.out' } });
tl.to(".loginbox",{y:"0%", duration: 1});
tl.to("nav",{y: "0%", duration:1},"-=1");
tl.fromTo(".text",{opacity: 0},{opacity: 1, duration: 1.5});