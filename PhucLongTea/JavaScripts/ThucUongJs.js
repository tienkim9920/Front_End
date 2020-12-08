function DomID(id){
    return document.getElementById(id);
}

var arrShowDetail = [];

var countCard = 0;

DomID('countStore').innerHTML = countCard;

// ---------------------------------------------Phân Trang---------------------------------------//

var slidePage = 0;
var countPage = 12;

slidingRender(slidePage, sanPham);

function slidingRender(n, Values){

  DomID('wapperSanPham').innerHTML = "";
  var start = n * countPage;
  var end = (n + 1) * countPage;

  var arrSanPhamPage = [];
  for (var i = start; i < end; i++){
      if (i == Values.length){
        break;
      }
      arrSanPhamPage.push(Values[i]);
      render(arrSanPhamPage);
  }

  
  // ------------------------------Tìm kiếm---------------------------//

  DomID('btn-SearchSanPham').addEventListener('click', () => {
    var txtSearch = DomID('inputSearchSanPham').value.toUpperCase();

    var arrSearch = [];
    for (var i = 0; i < arrSanPhamPage.length; i++){
      if (arrSanPhamPage[i].name.toUpperCase().indexOf(txtSearch) !== -1){
        arrSearch.push(arrSanPhamPage[i]);
      }
    }

    render(arrSearch);

  })
  // ------------------------------Tìm kiếm---------------------------//

  var arrSanPhamShowNull = [];

  for (let x of arrSanPhamPage){
    arrSanPhamShowNull.push(x);
  }

  DomID('Filter-SanPham').addEventListener('change', () => {
    var selectedSanPham = DomID('Filter-SanPham').value;

    console.log(selectedSanPham);
    console.log(arrSanPhamShowNull);
    if (selectedSanPham == 'DownToUp') {
      DownToUp(arrSanPhamPage);
      render(arrSanPhamPage);
    }
    else if(selectedSanPham == 'null'){
      render(arrSanPhamShowNull);
    }
    else {
      UptoDown(arrSanPhamPage);
      render(arrSanPhamPage);
    }
  });
}

// -----------------------Tạo nút phân trang---------------------------//
var numberSlide = parseInt(sanPham.length / countPage);
if (numberSlide > 0 && sanPham.length != 12) {
    DomID('Slide').innerHTML += '<li class="page-item"><a class="page-link" onclick="PaginationPrevious(-1)">Previous</a></li>&nbsp'
    for (let i = 0; i <= numberSlide; i++) {
        DomID('Slide').innerHTML += '<li class="page-item"><a class="page-link page-count" onclick="Pagination('+ Number(i + 1)
        + ')">'+Number(i + 1) +'</a></li>&nbsp'
    }
    DomID('Slide').innerHTML += '<li class="page-item"><a class="page-link" onclick="PaginationNext(1)">Next</a></li>'
}

var x = document.getElementsByClassName('page-count');
x[0].setAttribute('style', 'color: #ffffff; background-color: #0C713D')
// -----------------------Tạo nút phân trang---------------------------//


// -----------------------Xử lý nút phân trang---------------------------//
function nextaAndpre(value, slide){
  for (var i = 0; i < value.length; i++){
    x[i].setAttribute('style', 'color: #0C713D; background-color: #ffffff')
  }
  x[slide].setAttribute('style', 'color: #ffffff; background-color: #0C713D')
}

function Pagination(n) {
  slidingRender(slidePage = n - 1, sanPham);        
  nextaAndpre(x, slidePage);
}

function PaginationNext(n) {
  slidePage += n;
  if (slidePage <= numberSlide){
    slidingRender(slidePage, sanPham);
  }
  else{
    slidePage = 0;
    slidingRender(slidePage, sanPham);
  }
  nextaAndpre(x, slidePage);
}

function PaginationPrevious(n) {
  slidePage += n;
  if (slidePage == -1){
    slidePage = 0;
    slidingRender(slidePage, sanPham);
  }
  slidingRender(slidePage, sanPham);
  nextaAndpre(x, slidePage);
}
// -----------------------Xử lý nút phân trang---------------------------//

function clickMua(id, idRender) {
  DomID(id).addEventListener('click', () => {
    countCard++;
    DomID(idRender).innerHTML = countCard;
  });
}

// ---------------------------------------------Phân Trang---------------------------------------//

function render(arrContainer){
  DomID('wapperSanPham').innerHTML = "";
  var arrFilter = [];
  for (let v of arrContainer) {
    let str = '<div class="Col-SanPham"><div class="Card" id="Card"><img class="card-img-top" src="' + v.img + '" alt="">' +
    '<div class="card-body"><h5 class="card-title">' + v.name + '</h5><p class="card-text">' + v.price + '.000đ</p>' +
    '<div><a id="' + v.id + '" type="submit" class="btnDatHang">Đặt Hàng</a></div></div></div></div>'
    arrFilter.push(str);
  }
  var renderHtml = arrFilter.join('');
  DomID('wapperSanPham').innerHTML = renderHtml;

  for (let v of arrContainer){
    clickMua(v.id, 'countStore');
    DomID(v.id).addEventListener('click', () => {
      clickMuaSanPham(v.id, arrShowDetail);
    });
  }
  
}

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


// -----------------------------------Show Sản Phẩm Lên Giỏ Hàng--------------------------//


// var arrShowDetail = [];

  // -----Total Money-----//
  var totalMoney = 0;
  DomID('TotalMoney').innerHTML = totalMoney + '.000đ';
  // -----Total Money-----//


// ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//

if(localStorage.getItem('sanPhamMua') !== null) {
  arrShowDetail = JSON.parse(localStorage.getItem('sanPhamMua'));
  renderShowCard(arrShowDetail);

  countCard = arrShowDetail.reduce((sum, e) => sum += e.count, 0);
  DomID('countStore').innerHTML = countCard;

  totalMoney = arrShowDetail.reduce((sum, e) => sum += e.price * e.count, 0);
  DomID('TotalMoney').innerHTML = totalMoney + '.000đ';
}


// ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//

console.log(localStorage.getItem('sanPhamMua') !== null);


function clickMuaSanPham(idCheck, arr){
  var checkedSanPham = sanPham.find(({ id }) => id === idCheck);

    // -----Cộng Total Money-----//
    totalMoney += checkedSanPham.price;
    DomID('TotalMoney').innerHTML = totalMoney + '.000đ';
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


// -----------------------------------Show Sản Phẩm Lên Giỏ Hàng--------------------------//

function renderShowCard(Values) {

  // ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//
  localStorage.setItem("sanPhamMua", JSON.stringify(Values));
  // ---------------------------------Lưu Dữ Liệu Vào localStorage------------------------//

  DomID('showSanPham').innerHTML = "";

  console.log(Values);

  var arrAddCard = [];
  for (let v of Values) {
    let str = '<li class="show-SanPham"><img src="' + v.img + '" alt=""><div class="showDetail-SanPham"><h4>' +
      v.name + '</h4><div class="flex-CountSanPham"><p>'+ v.count +'</p><p>x</p><p>' + v.price +'.000' + 'đ</p></div></div><a id="' + v.reMove + '">x</a></li>';
    arrAddCard.push(str);
  }

  DomID('showSanPham').innerHTML = arrAddCard.join('');
  renderRemove();
}

// -----------------------------------Show Sản Phẩm Lên Giỏ Hàng--------------------------//


// -----------------------------------Xóa Sản Phẩm-------------------------------//

function renderRemove() {
  for (let i = 0; i < sanPham.length; i++) {
    if (DomID('clickXoa' + (i+1))) {
      DomID('clickXoa'+ (i+1)).addEventListener('click', () => {
        console.log(arrShowDetail);
        var findID = arrShowDetail.find(e => e.reMove === 'clickXoa' + (i+1));

          // -----Trừ Total Money-----//
          totalMoney = totalMoney - findID.price * findID.count;
          DomID('TotalMoney').innerHTML = totalMoney + '.000đ';
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