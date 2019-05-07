"use strict";
//header
$(document).ready(function(){
    $(".mobile-toggle").click(function(){
       let childmenuicon=$(this).children();
       childmenuicon.toggleClass("d-none");
       $(".mobile-menu").toggleClass("d-none");
      
    });
    $(".plus-minus").click(function(){
        $(this).children().toggleClass("d-none");
        $(this).parent().next().toggleClass("d-none");
       
    });
    $(".mobile-nav-bottom .mobile-top-open").click(function(){
         $(this).next().toggleClass("d-none");
    })
})
//slider
$(document).ready(function(){
let sliderLength=document.querySelectorAll(".slide li").length;
let sliderIndex=0;
$(".left-arrow").click(
    function(){
      sliderIndex++;
       if(sliderIndex>0){
           sliderIndex=(-sliderLength)+1;
       }
       $(".slide").css({"left":`${(sliderIndex)*100}%`});
    }
)
$(".right-arrow").click(function(){
      sliderIndex--;
      if(sliderIndex===(-sliderLength)){
          sliderIndex=0;
      }
      $(".slide").css({"left":`${(sliderIndex)*100}%`});
})

});

//flynig-time
"use strict"
$(document).ready(function(){
    $(".search-tabs>li").click(function(){
        $(".search-tabs>li").removeClass("activeLi");
        $(this).addClass("activeLi");
        let dataIndex=$(this).data("index");
        $(".tabs-content").addClass("d-none");
        $(`.tabs-content[data-index=${dataIndex}]`).removeClass("d-none")
    });

    
    $(".search-tabs-mobil>.fa-long-arrow-alt-left").click(function(){
        let activeli=$(".search-tabs-mobil>ul>li.active");
        let activediv=$(".search-tabs-content>div.active");
           if(activeli.prev()[0]!==undefined){
            $(".search-tabs-mobil>.fa-long-arrow-alt-right").css("background-color","#01B7F2");
               activeli.addClass("d-none")
               activeli.removeClass("active");
               activeli.prev().removeClass("d-none");
               activeli.prev().addClass("active");
               let dataIndex=activediv.prev().data("index");
               $(".search-tabs>li").removeClass("activeLi");
               $(`.search-tabs>li[data-index=${dataIndex}]`).addClass("activeLi");
               activediv.addClass("d-none");
               activediv.removeClass("active");
               activediv.prev().removeClass("d-none");
               activediv.prev().addClass("active");
               $()
           
          }
          else{
              $(this).css("background-color","#9e9e9e");
          }
    });
    $(".search-tabs-mobil>.fa-long-arrow-alt-right").click(function(){
        let activeli=$(".search-tabs-mobil>ul>li.active");
        let activediv=$(".search-tabs-content>div.active");
               if(activeli.next()[0]!==undefined){
                $(".search-tabs-mobil>.fa-long-arrow-alt-left").css("background-color","#01B7F2");
                  activeli.addClass("d-none");
                  activeli.removeClass("active");
                  activeli.next().removeClass("d-none");
                  activeli.next().addClass("active");
                  let dataIndex=activediv.next().data("index");
                  $(".search-tabs>li").removeClass("activeLi");
                  $(`.search-tabs>li[data-index=${dataIndex}]`).addClass("activeLi");
                  activediv.addClass("d-none");
                  activediv.removeClass("active");
                  activediv.next().removeClass("d-none");
                  activediv.next().addClass("active");
             }
             else{
                 $(this).css("background-color","#9e9e9e");
             }
    })
});

$(document).ready(function(){
    $(".input-div>i").click(function(){
       
          $(this).prev().focus();

    })
    
})


// HOVER LI LEFT
"use strict"
$(document).ready(function(){
    let hoverLeftLi=$(".hoverLeftLi");
    hoverLeftLi.hover(
        function(){
         let a=$(this).children()[0]
         a.style.left="80%";
         a.style.opacity="0";
            setTimeout(function(){
                a.style.left="20%";
                setTimeout(function(){
                    a.style.opacity="1";
                    a.style.left="50%";
                },190)
                
            }, 190);
            
         },
         function(){}
       
    )
});
"use strict"
$(document).ready(function(){
    let toTopButton=$(".toTopButton");
    toTopButton.hover(
        function(){
         let a=$(this).children()[0]
         a.style.top="20%";
         a.style.opacity="0";
            setTimeout(function(){
                a.style.top="80%";
                setTimeout(function(){
                    a.style.opacity="1";
                    a.style.top="50%";
                },190)
                
            }, 190);
            
         },
         function(){}
       
    )
    toTopButton.click(function(){
        
       let body= document.querySelector("body");
       console.log(body.scrollHeight);
       let scrollh=body.scrollHeight;
       
      let d= setInterval (function(){
        
        console.log("salam");

        scrollh=scrollh-15;
          
        window.scrollTo(0,(scrollh));
        if(scrollh<0){
            clearInterval(d);
        }
        
  
       },5)
      
    })
});
//Hotel Slider
$(document).ready(function(){
    let sliderLength=document.querySelectorAll(".hotel-slider>div").length;
    let divWidth=$(".hotel-slider>div").first().innerWidth();
    let sliderIndex=0;
     $(".hotel-left-arrow").click(
        function(){
            sliderIndex++; 
          if(sliderIndex>0){
                sliderIndex=-1; 
           }
           $(".hotel-slider").css({"left":`${(sliderIndex)*divWidth}px`});
        }
    )
    $(".hotel-right-arrow").click(function(){
         sliderIndex--;
          if(sliderIndex===(-2)){
              sliderIndex=0; }
          $(".hotel-slider").css({"left":`${(sliderIndex)*divWidth}px`});
    })});

//hotel pupular
$(".details-heading li").click(function(){
        $(".details-heading li").removeClass("active");
        $(this).addClass("active");
         let data=$(this).data("index");
            $(".hotel-content").addClass("d-none");
         if($(`.hotel-content[data-index=${data}]`)!==undefined){
             console.log("salam qaqa");
           $(`.hotel-content[data-index=${data}]`).removeClass("d-none");
        }});
$(document).ready(function(){
    $(".travelers-say .left-circle span").click(function(){
        $(".travelers-say .left-circle span").removeClass("active")
        let left=$(this).data("left");
        $(this).addClass("active");
        $(".carus").css(`left`,`${left}`);
    })
});
"use strict"
$(document).ready(function(){
    let Button=$(".login-button");
    Button.hover(
        function(){
          let i=$(".login-button span i")[0];
          i.style.top="5%";
          i.style.opacity="0";
            setTimeout(function(){
                i.style.top="90%";
                setTimeout(function(){
                    i.style.opacity="1";
                    i.style.top="50%";
                },200)
                
            }, 200);
            
         },
         function(){}
       
          )});


