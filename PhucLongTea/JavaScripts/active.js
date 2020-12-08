
var temp = window.location.href.split('/');
var liTemp = window.location.href.split('#');
console.log(temp);
console.log(liTemp);

var str = "";
var strLi = "";

for (var i = 0; i < temp.length; i++){
    if (i == temp.length - 1)
        str = temp[i];
}

for (var i = 0; i < liTemp.length; i++){
    if (i == liTemp.length - 1)
        strLi = liTemp[i];
}

console.log(strLi);


activeNavigation('index.html', 'trangChu');
activeNavigationBar('index.html', 'trangChuNav');

activeNavigation('HatCoffee.html', 'hatCoffee');
activeNavigation('HatCoffeeDamVi.html', 'hatCoffee');
activeNavigation('HatCoffeePhaChe.html', 'hatCoffee');
activeNavigationBar('HatCoffee.html', 'hatCoffeeNav');

activeNavigation('TraTruyenThong.html', 'traDamVi');
activeNavigationBar('TraTruyenThong.html', 'traDamViNav');


activeNavigation('KhuyenMai.html', 'khuyenMai');
activeNavigationBar('KhuyenMai.html', 'khuyenMaiNav');

activeNavigation('ThucUong.html', 'thucUong');
activeNavigationBar('ThucUong.html', 'thucUongNav');
activeNavigation('BanhTrangMieng.html', 'thucUong');

function activeNavigation(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'color: #0C713D;');
    }
}

function activeNavigationBar(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'color: #fff; background-color: #0C713D;');
    }
}

function activeLiCoffeeFirst(addressHref, id){
    if (str == addressHref){
        document.getElementById(id).setAttribute('style', 'border-bottom: 1px solid #0C713D; border-top: 1px solid #0C713D;');
    }
}
