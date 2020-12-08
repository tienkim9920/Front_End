
function DomID(id) {
  return document.getElementById(id);
}

// ------------------------------Tìm kiếm---------------------------//

DomID('btn-SearchSanPham').addEventListener('click', () => {
  var txtSearch = DomID('inputSearchSanPham').value.toUpperCase();

  var arrSearch = [];
  for (var i = 0; i < Bakery.length; i++){
    if (Bakery[i].name.toUpperCase().indexOf(txtSearch) !== -1){
      arrSearch.push(Bakery[i]);
    }
  }

  render(arrSearch);

})
// ------------------------------Tìm kiếm---------------------------//

// -------------------------Bakery---------------------------------------------//
var Bakery = [
  { name: 'Mức Đác Thơm', price: 29000, img: './img/ImgThucUong/Bakery1.png', id: 'clickMua1', reMove: 'clickXoa1', count: 1 },
  { name: 'Mức Đác Cam', price: 29000, img: './img/ImgThucUong/Bakery2.png', id: 'clickMua2', reMove: 'clickXoa2', count: 1 },
  { name: 'Choco Coco Brownie', price: 28000, img: './img/ImgThucUong/Bakery3.png', id: 'clickMua3', reMove: 'clickXoa3', count: 1 },
  { name: 'Panna Cotta Strawberry', price: 38000, img: './img/ImgThucUong/Bakery4.png', id: 'clickMua4', reMove: 'clickXoa4', count: 1  },
  { name: 'Green Tea Chocolate Mini', price: 32000, img: './img/ImgThucUong/Bakery5.jpg', id: 'clickMua5', reMove: 'clickXoa5', count: 1  },
  { name: 'Apple Danish', price: 17000, img: './img/ImgThucUong/Bakery6.jpg', id: 'clickMua6', reMove: 'clickXoa6', count: 1  },
  { name: 'Raisin Danish', price: 17000, img: './img/ImgThucUong/Bakery7.jpg', id: 'clickMua7', reMove: 'clickXoa7', count: 1  },
  { name: 'Chocolate Mousse', price: 28000, img: './img/ImgThucUong/Bakery8.png', id: 'clickMua8', reMove: 'clickXoa8', count: 1  },
  { name: 'Layer Red Fruit Cake', price: 49000, img: './img/ImgThucUong/Bakery9.png', id: 'clickMua9', reMove: 'clickXoa9', count: 1  },
  { name: 'Butter Chocolate Croissant', price: 17000, img: './img/ImgThucUong/Bakery10.jpg', id: 'clickMua10', reMove: 'clickXoa10', count: 1  },
  { name: 'Pure Butter Croissant', price: 20000, img: './img/ImgThucUong/Bakery11.jpg', id: 'clickMua11', reMove: 'clickXoa11', count: 1  },
  { name: 'Tiramisu Pax', price: 47000, img: './img/ImgThucUong/Bakery12.jpg', id: 'clickMua12', idDreMoveelete: 'clickXoa12', count: 1  },
  { name: 'Passion Cheese Pax', price: 32000, img: './img/ImgThucUong/Bakery13.jpg', id: 'clickMua13', reMove: 'clickXoa13' },
  { name: 'Green Tea Choco Cake', price: 35000, img: './img/ImgThucUong/Bakery14.png', id: 'clickMua14', reMove: 'clickXoa14', count: 1 },
  { name: 'Passion Panna Cotta', price: 29000, img: './img/ImgThucUong/Bakery15.png', id: 'clickMua15', reMove: 'clickXoa15', count: 1 },
  { name: 'Tiramisu Mini', price: 25000, img: './img/ImgThucUong/Bakery16.png', id: 'clickMua16', reMove: 'clickXoa16', count: 1 },
];


render(Bakery);

function render(Values) {

  DomID('wapperSanPhamBakery').innerHTML = "";

      var arrSanPhamShow = [];
      for (let v of Values) {
        let str = '<div class="Col-SanPham"><div class="Card" id="Card"><img class="card-img-top" src="' + v.img + '" alt="">' +
        '<div class="card-body"><h5 class="card-title">' + v.name + '</h5><p class="card-text">' + v.price + 'đ</p>' +
        '<div><a id="' + v.id + '" type="submit" class="btnDatHang">Đặt Hàng</a></div></div></div></div>'
        arrSanPhamShow.push(str);
      }

  var renderHtml = arrSanPhamShow.join('');

  DomID('wapperSanPhamBakery').innerHTML = renderHtml;
  
}

var arrSanPhamShowNull = [];

for (let x of Bakery){
  arrSanPhamShowNull.push(x);
}

DomID('Filter-SanPham').addEventListener('change', () => {
  var selectedSanPham = DomID('Filter-SanPham').value;

  console.log(selectedSanPham);
  console.log(arrSanPhamShowNull);
  if (selectedSanPham == 'DownToUp') {
    DownToUp(Bakery);
    render(Bakery);
  }
  else if(selectedSanPham == 'null'){
    render(arrSanPhamShowNull);
  }
  else {
    UptoDown(Bakery);
    render(Bakery);
  }
});

// ------------------------------Bakery-------------------------------------------//


// -----------------------Hàm Dùng Để Sort Và Reverse------------------------//


function DownToUp(arr){
  for (var i  = 0; i < arr.length; i++){
    for ( var j = i + 1; j < arr.length; j++){
      if (arr[i].price > arr[j].price){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function UptoDown(arr){
  for (var i  = 0; i < arr.length; i++){
    for ( var j = i + 1; j < arr.length; j++){
      if (arr[j].price > arr[i].price){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}


// -----------------------Hàm Dùng Để Sort Và Reverse------------------------//

// -----------------------Mua Giỏ Hàng----------------------//

var countCard = 0;

DomID('countStore').innerHTML = countCard;

clickMua('clickMua1', 'countStore');
clickMua('clickMua2', 'countStore');
clickMua('clickMua3', 'countStore');
clickMua('clickMua4', 'countStore');
clickMua('clickMua5', 'countStore');
clickMua('clickMua6', 'countStore');
clickMua('clickMua7', 'countStore');
clickMua('clickMua8', 'countStore');
clickMua('clickMua9', 'countStore');
clickMua('clickMua10', 'countStore');
clickMua('clickMua11', 'countStore');
clickMua('clickMua12', 'countStore');
clickMua('clickMua13', 'countStore');
clickMua('clickMua14', 'countStore');
clickMua('clickMua15', 'countStore');
clickMua('clickMua16', 'countStore');

function clickMua(id, idRender) {
  DomID(id).addEventListener('click', () => {
    countCard++;
    DomID(idRender).innerHTML = countCard;
  });
}



// --------------------------------Show Sản Phẩm Lên Giỏ Hàng--------------------------//

var arrShowDetail = [];

  // -----Total Money-----//
  var totalMoney = 0;
  DomID('TotalMoney').innerHTML = totalMoney + 'đ';
  // -----Total Money-----//


// ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//

if(localStorage.getItem('sanPhamMua') !== null) {
  arrShowDetail = JSON.parse(localStorage.getItem('sanPhamMua'));
  renderShowCard(arrShowDetail);

  countCard = arrShowDetail.reduce((sum, e) => sum += e.count, 0);
  DomID('countStore').innerHTML = countCard;

  totalMoney = arrShowDetail.reduce((sum, e) => sum += e.price * e.count, 0);
  DomID('TotalMoney').innerHTML = totalMoney + 'đ';
}


// ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//  

function clickMuaSanPham(idCheck, arr){
  var checkedSanPham = Bakery.find(({ id }) => id === idCheck);

    // -----Cộng Total Money-----//
    totalMoney += checkedSanPham.price;
    DomID('TotalMoney').innerHTML = totalMoney + 'đ';
    // -----Cộng Total Money-----//

    if (arr.length > 0) {
      let flag = false;
      arr.map(e => {
        if (e.id === idCheck) {
          flag = true;
          return e.count++;
        }
      });
      if (!flag) {
        arr.push(checkedSanPham);
      }
    } else {
      arr.push(checkedSanPham);
    }
    
    renderShowCard(arr);
}


DomID('clickMua1').addEventListener('click', () => {
  clickMuaSanPham('clickMua1', arrShowDetail);
});
DomID('clickMua2').addEventListener('click', () => {
  clickMuaSanPham('clickMua2', arrShowDetail);
});
DomID('clickMua3').addEventListener('click', () => {
  clickMuaSanPham('clickMua3', arrShowDetail);
});
DomID('clickMua4').addEventListener('click', () => {
  clickMuaSanPham('clickMua4', arrShowDetail);
});
DomID('clickMua5').addEventListener('click', () => {
  clickMuaSanPham('clickMua5', arrShowDetail);
});
DomID('clickMua6').addEventListener('click', () => {
  clickMuaSanPham('clickMua6', arrShowDetail);
});
DomID('clickMua7').addEventListener('click', () => {
  clickMuaSanPham('clickMua7', arrShowDetail);
});
DomID('clickMua8').addEventListener('click', () => {
  clickMuaSanPham('clickMua8', arrShowDetail);
});
DomID('clickMua9').addEventListener('click', () => {
  clickMuaSanPham('clickMua9', arrShowDetail);
});
DomID('clickMua10').addEventListener('click', () => {
  clickMuaSanPham('clickMua10', arrShowDetail);
});
DomID('clickMua11').addEventListener('click', () => {
  clickMuaSanPham('clickMua11', arrShowDetail);
});
DomID('clickMua12').addEventListener('click', () => {
  clickMuaSanPham('clickMua12', arrShowDetail);
});
DomID('clickMua13').addEventListener('click', () => {
  clickMuaSanPham('clickMua13', arrShowDetail);
});
DomID('clickMua14').addEventListener('click', () => {
  clickMuaSanPham('clickMua14', arrShowDetail);
});
DomID('clickMua15').addEventListener('click', () => {
  clickMuaSanPham('clickMua15', arrShowDetail);
});
DomID('clickMua16').addEventListener('click', () => {
  clickMuaSanPham('clickMua16', arrShowDetail);
});


function renderShowCard(Values) {

  // ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//
  localStorage.setItem("sanPhamMua", JSON.stringify(Values));
  // ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//

  DomID('showSanPham').innerHTML = "";

  console.log(Values);

  var arrAddCard = [];
  for (let v of Values) {
    let str = '<li class="show-SanPham"><img src="' + v.img + '" alt=""><div class="showDetail-SanPham"><h4>' +
      v.name + '</h4><div class="flex-CountSanPham"><p>'+ v.count +'</p><p>x</p><p>' + v.price + 'đ</p></div></div><a id="' + v.reMove + '">x</a></li>';
    arrAddCard.push(str);
  }

  DomID('showSanPham').innerHTML = arrAddCard.join('');
  renderRemove();
}

// -----------------------------------Show Sản Phẩm Lên Giỏ Hàng--------------------------//


// -----------------------------------Xóa Sản Phẩm-------------------------------//

function renderRemove() {
  for (let i = 0; i < Bakery.length; i++) {
    if (DomID('clickXoa' + (i+1))) {
      DomID('clickXoa'+ (i+1)).addEventListener('click', () => {
        console.log(arrShowDetail);
        var findID = arrShowDetail.find(e => e.reMove === 'clickXoa' + (i+1));

        // -----Trừ Total Money-----//
        totalMoney = totalMoney - findID.price * findID.count;
        DomID('TotalMoney').innerHTML = totalMoney + 'đ';
        // -----Trừ Total Money-----//
        
        for (let v of arrShowDetail) {
          if (v.reMove === findID.reMove){
            v.count = 1;
          }
        }
        arrShowDetail = arrShowDetail.filter(e => e.reMove !== 'clickXoa' + (i+1));
        let sum = 0;
        arrShowDetail.forEach(e => {
          sum += e.count;
        });

        DomID('countStore').innerHTML = sum;
        countCard = sum;
        renderShowCard(arrShowDetail);
      });
    }
  }
}

// -----------------------------------Xóa Sản Phẩm-------------------------------//

