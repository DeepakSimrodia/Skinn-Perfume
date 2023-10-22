var menuicon=document.querySelector(".material-symbols-outlined")
var menuList=document.querySelector(".menulist")
var menuListLinks=document.querySelector(".menulist a")
var menuDisplay=false
menuicon.addEventListener('click',function(){
    if(menuDisplay==false){
        menuList.style.height="30%",
        menuDisplay=true,
        menuicon.style.color="orange"
    }
    else{
        menuDisplay=false,
        menuList.style.height="0%",
        menuicon.style.color="white"
    }
})

var loginpage=document.querySelector(".loginPage")
var cross=document.querySelector(".cross")
cross.addEventListener("click",function(){
    loginpage.style.display="none"
})
var LOGIN=document.querySelector(".Login")
LOGIN.addEventListener("click",function(){
    loginpage.style.display="initial"
})




var circle1=document.querySelector(".circlein1")
var circle2=document.querySelector(".circlein2")
var switchImage1=document.querySelector("#switchImage1")
var switchImage2=document.querySelector("#switchImage2")
circle1.addEventListener("click",function(){
    circle1.style.backgroundColor="orange"
    circle2.style.backgroundColor="white"
    switchImage1.style.transform="translateX(0%)"
    switchImage2.style.transform="translateX(100%)"
    document.getElementById("switchh1").innerHTML="The Art of Perfumes"
    document.getElementById("switchp").innerHTML="Are you aware that the way you smell is equally important as the way you dress?   <br><br>    According to science, the sense of smell is something that evokes strong emotions. That’s how significant perfume is! Therefore, you should be paying more attention to the kind of fragrances you choose to wear for different occasions.    "
})
circle2.addEventListener("click",function(){
    circle1.style.backgroundColor="white"
    circle2.style.backgroundColor="orange"
    switchImage1.style.transform="translateX(-100%)"
    switchImage2.style.transform="translateX(-100%)"
    document.getElementById("switchh1").innerHTML="Learn About The Different Perfume Notes"
    document.getElementById("switchp").innerHTML="Everyone loves a good perfume! But have you thought about the different fragrance notes that come together to make you go crazy over a particular one – like Skinn Sheer or Skinn Nude?"
})






const tl=gsap.timeline()

tl.
from('.firstNav',{
    opacity:0,
    y:20,
    duration:1})
.from('.firstPage',{
    opacity:0,
    y:40,
    duration:1}
)
.from("#carouselExampleInterval",{
    opacity:0,
    y:-40,
    duration:1
})
.from('.Male,.Female', {
    scrollTrigger:{
        trigger:'.Male,.Feamle',
        scroller:'body',
        scrub:0.25,
        start:'bottom 90%',
        end:'top 10%',
    },
    width:'0%',
    opacity:0,
})
.from('.secondPageHeading',{
    scrollTrigger:{
        trigger:'.secondPageHeading',
        scroller:'body',
        scrub:0.25,
    },
    scale:0.5,
    opacity:0
})
.from('.secondPagePara',{
    scrollTrigger:{
        trigger:'.secondPagePara',
        scroller:'body',
        scrub:0.25,
        end:'top 30%'
    },
    scale:0.5,
    opacity:0
},'-=2')
.from('.secondPageImg',{
    scrollTrigger:{
        trigger:'.secondPageImg',
        scroller:'body',
        scrub:0.25,
        end:'top 30%'
    },
    scale:0.5,
    opacity:0
},'-=2')
.from('.switchImg',{
    scrollTrigger:{
        trigger:'.switchImg',
        scroller:'body',
        scrub:0.25,
        end:'top 30%'
    },
    scale:0.5,
    opacity:0
})
.from('.loginPage',{
    opacity:0
})
$('.your-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});


