
var navbar = document.getElementById('GroupNavigator');
var Navigation = document.getElementById('Navigation');

var NavigationOption = Navigation.querySelectorAll('.Navigation-Option');

var sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset > sticky){
        navbar.classList.add("Sticky");
        for (var i = 0; i < NavigationOption.length; i++){
            let a = NavigationOption[i].getElementsByTagName('a')[0];
            a.classList.add("colorSticky");
        }
    }else{
        navbar.classList.remove("Sticky");
        for (var i = 0; i < NavigationOption.length; i++){
            let a = NavigationOption[i].getElementsByTagName('a')[0];
            a.classList.remove("colorSticky");
        }
    }
}