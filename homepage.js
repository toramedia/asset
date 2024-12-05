var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {

    var angle = 0;
    var angle2 = 0;
    var angle3 = 0;
    var angle4 = 0;
    var angle5 = 0;
    setInterval(function() {
        angle += 1;
        $(".cog1").rotate(angle);
        angle2 -= 1;
        $(".cog2").rotate(angle2);
        angle3 -= 1;
        $(".cog3").rotate(angle3);
        angle4 += 4;
        $(".cog4").rotate(angle4);
        angle5 -= 2;
        $(".cog5").rotate(angle5);
    }, 70);
     
     $('.work, .closeButton, .sectionButton').css("cursor" , "pointer");
     
          $(".splashCta, .splashCta.ctaTwo, .splashCta.ctaTwo_2, .splashCta.ctaThree, .splashCta.ctaFour").hover(function(){
            $(this).css("background-position","0px -200px");
            },function(){
            $(this).css("background-position","0px 0px");
          });
          
          
          $(".work").click(function(){
               linker(this.id);         
          });
          
          $('.ping_us').on('click',function(){
                         
               linker($(this).closest('span').find('.work').attr('id'));
          });
          
          
          //if ( $(window).width() > 1024) {      
          //   $(".work").click(function(){
          //                  
          //        $("#" + this.id + "URL").css("display" , "block");
          //        $("#" + this.id + "CloseButton").css("display" , "block");
          //        $("#" + this.id + "CloseButtonContainer").css("display" , "block");
          //        $("#" + this.id + "URL").attr("src", $(this).attr("data-href"));
          //        /******* ADDED ********/
          //        $('.ping_us').css('display','none');
          //        /**** END  *******/      
          //                       
          //   });
          //             
          //   $(".closeButton").click(function(){
          //        $(this).css("display" , "none");
          //        $("#" + this.id + "Container").css("display" , "none");
          //        /******* ADDED ********/
          //        $('.ping_us').css('display','');
          //        /**** END  *******/ 
          //   });
          //}
          //else {
          //   $(".work").click(function(){
          //        var buttonNumber = this.id.substring(this.id.length - 1, this.id.length);
          //        $('#lightbox' + buttonNumber).css("display" , "block");
          //        /******* ADDED ********/
          //        $('.ping_us').css('display','none');
          //        /**** END  *******/ 
          //   });  
          //}
          
          /******* ADDED ********/ 
          
          /**** END  *******/
          
          
          function linker(id)
          {
               if ( $(window).width() > 1024) {   
                              
                    $("#" + id + "URL").css("display" , "block");
                    $("#" + id + "CloseButton").css("display" , "block");
                    $("#" + id + "CloseButtonContainer").css("display" , "block");
                    $("#" + id + "URL").attr("src", $('#'+id).attr("data-href"));
                    console.log($("#" + id + "URL").attr("src", $('#'+id).attr("data-href")));
                    /******* ADDED ********/
                    $('.ping_us, .octo').css('display','none');
                    /**** END  *******/ 
                    
                    
                    $(".closeButton").click(function(){
                    $(this).css("display" , "none");
                    $("#" + this.id + "Container").css("display" , "none");
                    /******* ADDED ********/
                    $('.ping_us, .octo').css('display','');
                    /**** END  *******/ 
               });
               
               }
               else {
               
                    var buttonNumber = id.substring(id.length - 1, id.length);
                    $('#lightbox' + buttonNumber).css("display" , "block");
                    /******* ADDED ********/
                    $('.ping_us').css('display','none');
                    /**** END  *******/ 
                    }
          }
          
          
          $(".lightbox").click(function(){
               $(this).css("display" , "none");
               /******* ADDED ********/
               $('.ping_us, .octo').css('display','');
               /**** END  *******/ 
          });
          
          $('.sectionButton').click(function(){
                switch(this.id) {
          
                    case "sectionButton1":
                    $.scrollTo.window().queue([]).stop();
                    $.scrollTo('#section1Link', 5000, {easing: 'easeInOutCirc'});
                    break;
          
                    case "sectionButton2":
                    $.scrollTo.window().queue([]).stop();
                    $.scrollTo('#section2', 5000, {easing: 'easeInOutCirc'});
                    break;
                    
                    case "sectionButton3":
                    $.scrollTo.window().queue([]).stop();
                    $.scrollTo('#section3', 5000, {easing: 'easeInOutCirc'});
                    break;
                    
                    case "sectionButton4":
                    $.scrollTo.window().queue([]).stop();
                    $.scrollTo('#section4', 5000, {easing: 'easeInOutCirc'});
                    break;
                    
                    case "sectionButton5":
                    $.scrollTo.window().queue([]).stop();
                    $.scrollTo('#section5', 5000, {easing: 'easeInOutCirc'});
                    break;
          
                    default: return; // exit this handler for other keys
               }
          });

    $("#scrollButton").click(function() {
        $('#buttonCover').css('display', 'block');
    });

    $(".sonarText1").hover(function() {
        $(".sonarTextContent1").css("display", "block");
    }, function() {
        $(".sonarTextContent1").css("display", "none");
    });

    $(".sonarText2").hover(function() {
        $(".sonarTextContent2").css("display", "block");
    }, function() {
        $(".sonarTextContent2").css("display", "none");
    });

    $(".sonarText3").hover(function() {
        $(".sonarTextContent3").css("display", "block");
    }, function() {
        $(".sonarTextContent3").css("display", "none");
    });

    $(".sonarText4").hover(function() {
        $(".sonarTextContent4").css("display", "block");
    }, function() {
        $(".sonarTextContent4").css("display", "none");
    });


    $(window).scroll(function() {
        var height = $(document).scrollTop();
          
          if (height > 260) {
               $('.diver').fadeIn();
          }
          else if (height < 260) {
               $('.diver').fadeOut({duration:150});
          }

        if($('.diver').css("top")<250){
            $('.diver').hide();
        }
          
        if (height > 13410) {
            animateSonar();
        }
          
          if (height > 17900) {
               $('.diver').css('backgroundImage' , 'url(assets/images/diver_2.png)');
          }
          else if (height < 17900) {
               $('.diver').css('backgroundImage' , 'url(assets/images/diver.png)');
          }
          
          /*if (height > 12900) {
               animateConfetti();  
          }*/
    });
     
     /*function animateConfetti() {
     $('.confetti_1').animate({
            marginLeft: "805px"
        }, 300, 'linear');
        $('.confetti_2').animate({
            marginLeft: "905px"
        }, 300, 'linear', seaCreaturesSecond);
        $('.confetti_3').animate({
            marginLeft: "595px"
        }, 300, 'linear', animateConfettiSecond);
     }
     
     function animateConfettiSecond() {
     $('.confetti_1').animate({
            marginLeft: "810px"
        }, 300, 'linear');
        $('.confetti_2').animate({
            marginLeft: "900px"
        }, 300, 'linear', seaCreaturesSecond);
        $('.confetti_3').animate({
            marginLeft: "600px"
        }, 300, 'linear', animateConfetti);
     }*/


    $(".sonarText1, .sonarText2, .sonarText3, .sonarText4").css("opacity", "0");

    function animateSonar() {

        $(".sonar1_1").animate({
            opacity: 0.2
        }, 300, function() {

            // Animation complete.

            $(".sonarText1").animate({
                opacity: 1
            }, 300, function() {

                $(".sonar1_2").animate({
                    opacity: 0.2
                }, 300, function() {

                    $(".sonar1_3").animate({
                        opacity: 0.2
                    }, 300, function() {

                        $(".sonar1_4").animate({
                            opacity: 0.2
                        }, 300, function() {

                            $(".sonar1_5").animate({
                                opacity: 0.2
                            }, 300, function() {

                                $(".sonar1_6").animate({
                                    opacity: 0.2
                                }, 300, function() {


                                    $(".sonarText2").animate({
                                        opacity: 1
                                    }, 300, function() {

                                        $(".sonar2_1").animate({
                                            opacity: 0.2
                                        }, 300, function() {

                                            $(".sonar2_2").animate({
                                                opacity: 0.2
                                            }, 300, function() {

                                                $(".sonar2_3").animate({
                                                    opacity: 0.2
                                                }, 300, function() {

                                                    $(".sonar2_4").animate({
                                                        opacity: 0.2
                                                    }, 300, function() {

                                                        $(".sonar2_5").animate({
                                                            opacity: 0.2
                                                        }, 300, function() {

                                                            $(".sonar2_6").animate({
                                                                opacity: 0.2
                                                            }, 300, function() {


                                                                $(".sonarText3").animate({
                                                                    opacity: 1
                                                                }, 300, function() {

                                                                    $(".sonar3_1").animate({
                                                                        opacity: 0.2
                                                                    }, 300, function() {

                                                                        $(".sonar3_2").animate({
                                                                            opacity: 0.2
                                                                        }, 300, function() {

                                                                            $(".sonar3_3").animate({
                                                                                opacity: 0.2
                                                                            }, 300, function() {

                                                                                $(".sonar3_4").animate({
                                                                                    opacity: 0.2
                                                                                }, 300, function() {

                                                                                    $(".sonar3_5").animate({
                                                                                        opacity: 0.2
                                                                                    }, 300, function() {

                                                                                        $(".sonar3_6").animate({
                                                                                            opacity: 0.2
                                                                                        }, 300, function() {


                                                                                            $(".sonarText4").animate({
                                                                                                opacity: 1
                                                                                            }, 300, function() {

                                                                                                $(".sonar4_1").animate({
                                                                                                    opacity: 0.2
                                                                                                }, 300, function() {

                                                                                                    $(".sonar4_2").animate({
                                                                                                        opacity: 0.2
                                                                                                    }, 300, function() {

                                                                                                        $(".sonar4_3").animate({
                                                                                                            opacity: 0.2
                                                                                                        }, 300, function() {

                                                                                                            $(".sonar4_4").animate({
                                                                                                                opacity: 0.2
                                                                                                            }, 300, function() {

                                                                                                                $(".sonar4_5").animate({
                                                                                                                    opacity: 0.2
                                                                                                                }, 300, function() {

                                                                                                                    $(".sonar4_6").animate({
                                                                                                                        opacity: 0.2
                                                                                                                    }, 300, function() {

                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    }

    function animateSonarTemp() {
        $(".sonar1_1, .sonar1_2, .sonar1_3, .sonar1_4, .sonar1_5, .sonar1_6, .sonar2_1, .sonar2_2, .sonar2_3, .sonar2_4, .sonar2_5, .sonar2_6, .sonar3_1, .sonar3_2, .sonar3_3, .sonar3_4, .sonar3_5, .sonar3_6, .sonar4_1, .sonar4_2, .sonar4_3, .sonar4_4, .sonar4_5, .sonar4_6").css("opacity", "0");

        animateSonar();
    }

    $('#container').localScroll({
        duration: 20000,
        stop: true,
        queue: false,
          easing: 'linear'
    }, {
        easing: 'linear'
    });

    seaCreatures();


    function seaCreatures() {
        $('#jellyfish1').delay(300).animate({
            marginTop: "0px"
        }, 1000, 'linear');
        $('#jellyfish2').delay(300).animate({
            marginTop: "90px"
        }, 1000, 'linear', seaCreaturesSecond);
        $('#jellyfish3').delay(300).animate({
            marginTop: "-10px"
        }, 1000, 'linear');
        $('#jellyfish4').delay(300).animate({
            marginTop: "210px"
        }, 1000, 'linear');

        $('.eoc1').delay(300).animate({
            marginTop: "80px"
        }, 1000, 'linear');
        $('.eoc2').delay(300).animate({
            marginTop: "30px"
        }, 1000, 'linear');
        $('.eoc3').delay(300).animate({
            marginTop: "60px"
        }, 1000, 'linear');
        $('.eoc4').delay(300).animate({
            marginTop: "30px"
        }, 1000, 'linear');
        $('.eoc5').delay(300).animate({
            marginTop: "-50px"
        }, 1000, 'linear');
          
          /*$('.stingray1').delay(300).animate({
            marginTop: "205px"
        }, 1000, 'linear');
        $('.stingray2').delay(300).animate({
            marginTop: "305px"
        }, 1000, 'linear');
          $('.stingray3').delay(300).animate({
            marginTop: "405px"
        }, 1000, 'linear');
          
          $('.seahorse1').delay(300).animate({
            marginTop: "1355px"
        }, 1000, 'linear');
        $('.seahorse2').delay(300).animate({
            marginTop: "1195px"
        }, 1000, 'linear');
          $('.seahorse3').delay(300).animate({
            marginTop: "1105px"
        }, 1000, 'linear');
          $('.seahorse4').delay(300).animate({
            marginTop: "1395px"
        }, 1000, 'linear');
          
          $('.whale').delay(300).animate({
            marginTop: "1205px"
        }, 1000, 'linear');*/

        $('.starfish1_1').delay(300).animate({
            marginTop: "605px"
        }, 1000, 'linear');
        $('.starfish1_2').delay(300).animate({
            marginTop: "95px"
        }, 1000, 'linear');
        $('.starfish1_3').delay(300).animate({
            marginTop: "105px"
        }, 1000, 'linear');
        $('.starfish1_4').delay(300).animate({
            marginTop: "395px"
        }, 1000, 'linear');
        $('.starfish2_1').delay(300).animate({
            marginTop: "205px"
        }, 1000, 'linear');
        $('.starfish2_2').delay(300).animate({
            marginTop: "695px"
        }, 1000, 'linear');
        $('.starfish2_3').delay(300).animate({
            marginTop: "85px"
        }, 1000, 'linear');
        $('.starfish2_4').delay(300).animate({
            marginTop: "725px"
        }, 1000, 'linear');
          
          $('.pointingFish, .pointingFishSmall, .pointingFishReverse').delay(300).animate({
            marginTop: "+=5px"
        }, 1000, 'linear');
          
          $('.work').delay(300).animate({
            marginTop: "+=5px"
        }, 1000, 'linear');
          
    }

    function seaCreaturesSecond() {
        $('#jellyfish1').delay(300).animate({
            marginTop: "0px"
        }, 1000, 'linear');
        $('#jellyfish2').delay(300).animate({
            marginTop: "80px"
        }, 1000, 'linear', seaCreatures);
        $('#jellyfish3').delay(300).animate({
            marginTop: "-20px"
        }, 1000, 'linear');
        $('#jellyfish4').delay(300).animate({
            marginTop: "220px"
        }, 1000, 'linear');

        $('.eoc1').delay(300).animate({
            marginTop: "70px"
        }, 1000, 'linear');
        $('.eoc2').delay(300).animate({
            marginTop: "40px"
        }, 1000, 'linear');
        $('.eoc3').delay(300).animate({
            marginTop: "50px"
        }, 1000, 'linear');
        $('.eoc4').delay(300).animate({
            marginTop: "40px"
        }, 1000, 'linear');
        $('.eoc5').delay(300).animate({
            marginTop: "-40px"
        }, 1000, 'linear');
          
          /*$('.stingray1').delay(300).animate({
            marginTop: "200px"
        }, 1000, 'linear');
        $('.stingray2').delay(300).animate({
            marginTop: "300px"
        }, 1000, 'linear');
          $('.stingray3').delay(300).animate({
            marginTop: "400px"
        }, 1000, 'linear');
          
          $('.seahorse1').delay(300).animate({
            marginTop: "1350px"
        }, 1000, 'linear');
        $('.seahorse2').delay(300).animate({
            marginTop: "1200px"
        }, 1000, 'linear');
          $('.seahorse3').delay(300).animate({
            marginTop: "1100px"
        }, 1000, 'linear');
          $('.seahorse4').delay(300).animate({
            marginTop: "1400px"
        }, 1000, 'linear');
          
          $('.whale').delay(300).animate({
            marginTop: "1200px"
        }, 1000, 'linear');*/

        $('.starfish1_1').delay(300).animate({
            marginTop: "600px"
        }, 1000, 'linear');
        $('.starfish1_2').delay(300).animate({
            marginTop: "100px"
        }, 1000, 'linear');
        $('.starfish1_3').delay(300).animate({
            marginTop: "100px"
        }, 1000, 'linear');
        $('.starfish1_4').delay(300).animate({
            marginTop: "400px"
        }, 1000, 'linear');
        $('.starfish2_1').delay(300).animate({
            marginTop: "200px"
        }, 1000, 'linear');
        $('.starfish2_2').delay(300).animate({
            marginTop: "700px"
        }, 1000, 'linear');
        $('.starfish2_3').delay(300).animate({
            marginTop: "80px"
        }, 1000, 'linear');
        $('.starfish2_4').delay(300).animate({
            marginTop: "730px"
        }, 1000, 'linear');
          
          $('.pointingFish, .pointingFishSmall, .pointingFishReverse').delay(300).animate({
            marginTop: "-=5px"
        }, 1000, 'linear');
          
          $('.work').delay(300).animate({
            marginTop: "-=5px"
        }, 1000, 'linear');
          
    }

    // function logo() {
    //     $('.logo').delay(500).animate({
    //         top: "180px"
    //     }, 1000, 'linear', logoSecond);
    // }

    // function logoSecond() {
    //     $('.logo').delay(500).animate({
    //         top: "175px"
    //     }, 1000, 'linear', logo);
    // }

    function rotateAnchor() {
        $(".anchor").rotate({
            duration: 1000,
            angle: 0,
            animateTo: 2,
            callback: function() {
                $(this).rotate({
                    angle: 0,
                    animateTo: -2,
                    callback: function() {
                        rotateAnchor();
                    }
                })
            }
        });

    }


     /****** addded Chris 31/07/14 *********/
     
     $('#showNewGraph').on('click',function(e){
          e.preventDefault();
          $("#googleGraph").show();
          return false;
     });
     
     
     $('#googleGraphClose').on('click',function(){
          $("#googleGraph").hide();
     });
     
     $('#showNewGraph').hover(function(e){
          e.preventDefault();
          $("#googleGraph").show();
          return false;
     });
     
     $('#googleGraph').mouseleave(function(e){
          e.preventDefault();
          $(this).hide();
          return false;
     });
     
     
     
     
     $('#showCertifiedLogo').on('click',function(e){
          e.preventDefault();
          alert();
          $("#certGraph").show();
          return false;
     });
     
     
     $('#certGraphClose').on('click',function(){
          $("#certGraph").hide();
     });
     
     $('#showCertifiedLogo').hover(function(e){
          e.preventDefault();
          $("#certGraph").show();
          return false;
     });
     
     $('#certGraph').mouseleave(function(e){
          e.preventDefault();
          $(this).hide();
          return false;
     });
     
     
     
     
     
     
     
     
     $(document).on('click', '.bubble_spot', function(e){
          $(this).find('.bubble_content').css('display','');
          e.stopPropagation();
          return false;
          
     });
     
     $(document).on('click', '.bubble_close', function(e){
          
          $(this).parent().hide();
          e.stopPropagation();
          return false;
     });
     
               
     /********* ends ******/
     
     


});



}
/*
     FILE ARCHIVED ON 18:22:32 Jan 10, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:41:20 Dec 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.728
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.035
  esindex: 0.012
  cdx.remote: 7.209
  LoadShardBlock: 141.468 (3)
  PetaboxLoader3.datanode: 93.622 (4)
  PetaboxLoader3.resolve: 83.576 (2)
  load_resource: 76.99
*/