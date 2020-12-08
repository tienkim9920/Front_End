
function DomID(id){
  return document.getElementById(id)
}

// -----------------Sticky-------------------//

var navbar = document.getElementById("navbar");
var ulNavigation = document.getElementById("ulNavigation");

var item = ulNavigation.querySelectorAll('.li-navigation');

var sticky = navbar.offsetTop;

var container = DomID('Container')
var stickyContainer = container.offsetHeight
console.log(stickyContainer)

var header = DomID('header')
var stickyHeader = header.offsetHeight
console.log(stickyHeader)

var about = DomID('about')
var stickyAbout = about.offsetHeight

var resume = DomID('resume')
var stickyResume = resume.offsetHeight

var works = DomID('works')
var stickyWorks = works.offsetHeight

var testimonials = DomID('testimonials')
var stickyTest = works.offsetHeight


var temp = 0;




function myFunction() {
  // ----------------------Navigation--------------------//
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    for (var i = 0; i < item.length; i++){
        let a = item[i].getElementsByClassName('item-navigation')[0]
        a.classList.add("colorSticky")
    }
  } else {
    navbar.classList.remove("sticky");
    for (var i = 0; i < item.length; i++){
        let a = item[i].getElementsByClassName('item-navigation')[0]
        a.classList.remove("colorSticky")
    }
  }
  // ----------------------Navigation--------------------//
  

  // ----------------------Header--------------------//
  if (window.pageYOffset < stickyHeader - 150){
    let a = document.getElementsByClassName('item-navigation')[0]
    a.classList.add("colorActive")
    temp = stickyHeader - 100
  }
  else{
    let a = document.getElementsByClassName('item-navigation')[0]
    a.classList.remove("colorActive")
  }
  // ----------------------Header--------------------//


  // ----------------------About--------------------//
  if (window.pageYOffset > temp && window.pageYOffset < stickyHeader + stickyAbout - 100){
    let a = document.getElementsByClassName('item-navigation')[1]
    a.classList.add("colorActive")
  }
  else{
    let a = document.getElementsByClassName('item-navigation')[1]
    a.classList.remove("colorActive")
  }
  // ----------------------About--------------------//


  // ----------------------Resume--------------------//
  if (window.pageYOffset > stickyHeader + stickyAbout - 100 && window.pageYOffset < stickyHeader + stickyAbout + stickyResume - 100){
    let a = document.getElementsByClassName('item-navigation')[2]
    a.classList.add("colorActive")
  }
  else{
    let a = document.getElementsByClassName('item-navigation')[2]
    a.classList.remove("colorActive")
  }
  // ----------------------Resume--------------------//



  // ----------------------Works--------------------//
  if (window.pageYOffset > stickyHeader + stickyAbout + stickyResume - 100 && window.pageYOffset < stickyHeader + stickyAbout + stickyResume + stickyWorks - 100){
    let a = document.getElementsByClassName('item-navigation')[3]
    a.classList.add("colorActive")
  }
  else{
    let a = document.getElementsByClassName('item-navigation')[3]
    a.classList.remove("colorActive")
  }
  // ----------------------Works--------------------//




  // ----------------------testimonials--------------------//
  if (window.pageYOffset > stickyHeader + stickyAbout + stickyResume + stickyWorks - 100 && window.pageYOffset < stickyHeader + stickyAbout + stickyResume + stickyWorks + stickyTest + 300){
    let a = document.getElementsByClassName('item-navigation')[4]
    a.classList.add("colorActive")
  }
  else{
    let a = document.getElementsByClassName('item-navigation')[4]
    a.classList.remove("colorActive")
  }
  // ----------------------testimonials--------------------//

}

var database = [
  {
    name: "C#",
    width: "70%"
  },
  {
    name: "Front-end",
    width: "70%"
  },
  {
    name: "Html",
    width: "70%"
  },
  {
    name: "Css",
    width: "70%"
  },
  {
    name: "JavaScript",
    width: "70%"
  },
  {
    name: "ASP.NET",
    width: "70%"
  },
  {
    name: "NodeJS",
    width: "50%"
  },
  {
    name: "Express",
    width: "50%"
  },
  {
    name: "MongoDB",
    width: "50%"
  },  
  {
    name: "MSSQL",
    width: "50%"
  },  
  {
    name: "ReactJS",
    width: "35%"
  },
  {
    name: "React Native",
    width: "30%"
  },  
  {
    name: "PHP",
    width: "70%"
  },
  {
    name: "Laravel",
    width: "70%"
  }, 
  {
    name: "Git",
    width: "75%"
  },
]

render(database)

function render(data){
  DomID('groupSkill').innerHTML = ""

  var arrStore = []
  var str = ""
  for (var i = 0; i < data.length; i++){
    str = '<div class="Skill"><p class="nameSkill">'+ data[i].name + '</p><div class="wapperLevelSkill">' +
        '<div class="LevelSkill" style="width: ' + data[i].width +';"></div><div class="phanTram"><p>' + data[i].width + '</p></div></div></div>'
    arrStore.push(str)
  }

  var renderHtml = arrStore.join('')

  DomID('groupSkill').innerHTML = renderHtml
}