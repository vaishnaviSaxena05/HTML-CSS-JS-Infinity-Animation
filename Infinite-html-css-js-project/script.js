var tl = gsap.timeline({
    repeat : -1
});

// gsap.to("#one",{
//        width : "100%",
//        ease: Expo.easeInOut,
//        duration : 2
// })

tl
.to(".imagecontainer", {
      width: "100%",
      ease: Expo.easeInOut,
     
      stagger: 2
   },'al')

   .to(".text h1", {
      ease: Expo.easeInOut,

      stagger: 2,
      top: 0
   },'al')


   .to(".text h1", {
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 2,
      top: "-100%"
   },'al')



