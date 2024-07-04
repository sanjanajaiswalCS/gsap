function section1Animation(){
   
    var tl = gsap.timeline();

    tl.from("nav , #navOptions h4 , #navOptions button",{
       opacity:0,
       y:-30,
       duration: 0.3,
       delay : 1,
       stagger: 0.2
    })
   
   
    tl.from(".center-part1 h1",{
       opacity:0,
       x:-80,
       duration: 0.5, 
    })
   
    tl.from(".center-part1 p",{
       opacity:0,
       x:-60,
       duration: 0.5, 
    })
   
    tl.from(".center-part1 button",{
       opacity:0,
       x:-40,
       duration: 0.5, 
    })
   
    tl.from(".center-part2 img",{
       opacity:0,
       x:40,
       duration: 0.5, 
    },"-=1")     // this is for applying delay while using timeline
     
}

section1Animation()



function section2Animation(){
   var tl2 = gsap.timeline({
      scrollTrigger : {
          trigger:".section1Bottom img", 
          scroller:"body",
          markers : false,
          start : "top 90%",
          end : "top 20%",
          scrub:0.5,
  
      }
  })
  
  tl2.from(".section1Bottom img",{
      opacity : 0,
      duration : 0.1,
      stagger:0.2
   })
  
   tl2.from(".section2 .services",{
      opacity : 0,
      x:-30,
      duration:0.2
   })
  
   tl2.from(".container .box1",{
      opacity : 0,
      x:-40,
      duration:0.1,
   },"first")
  
   tl2.from(".container .box2",{
      opacity : 0,
      x: 40,
      duration:0.1,
   },"first")
  
  
   var tl3 = gsap.timeline({
      scrollTrigger:{
          trigger:".container .box3",
          scroller : "body",
          markers:false,
          start:"top 90%",
          end:"top 50%",
          scrub:0.5
      }
   })
  
   tl3.from(".container .box3",{
      opacity : 0,
      x: -40,
      duration:0.1,
   },"second")
  
   tl3.from(".container .box4",{
      opacity : 0,
      x: 40,
      duration:0.1,
   },"second")
  
  //  humare box saath mai aarahe h isliye 
}

section2Animation();


function section3Animation(){
   var tl3 = gsap.timeline({
      scrollTrigger : {
          trigger:".section3", 
          scroller:"body",
          markers : false,
          start : "top 80%",
          end : "top 43%",
          scrub:0.5,
   
      }
   })
   
   tl3.from(".greyBox" ,{
      opacity : 0,
      duration:0.5,
      x:-50,
   })
   
   tl3.from("#greyBox_part1 h1" ,{
      opacity : 0,
      duration:0.8,
   })
   
   tl3.from("#greyBox_part1 p" ,{
      opacity : 0,
      duration:0.3,
   })
   
   tl3.from("#greyBox_part1 button" ,{
      opacity : 0,
      duration:0.5,
   })
   
   tl3.from("#greyBox_part2" ,{
      // opacity : 0,
      // duration:0.5,
      x:50,
   })
   
   tl3.from("#greyBox_part2 img"  ,{
      opacity : 0,
      duration:0.5,
      x:50,
   },"-=1")
}

section3Animation()



function section4Animation(){
   var tl4 = gsap.timeline({
      scrollTrigger : {
          trigger:".section4", 
          scroller:"body",
          markers : false,
          start : "top 80%",
          end : "top 43%",
          scrub:0.5,
      }
   })

   tl4.from(".caseStudy h1",{
      opacity :0,
      duration:0.5,
      x:-60,
   },"sametime")

   tl4.from(".caseStudy p",{
      opacity :0,
      duration:0.5,
      x:60,
   },"sametime")

   tl4.from(".lastContainer",{
      opacity :0,
      y : 100,
      duration:1
   },"entrytime")

   tl4.from(".lastContainer p",{
      opacity :0,
      // y : -80,
      duration : 3,
      stagger : 0.8,
   },"entrytime")

   tl4.from(".lastContainer 3",{
      opacity :0,
      // y : -80,
      duration : 1,
      stagger : 0.8,
   },"entrytime")
}

section4Animation()