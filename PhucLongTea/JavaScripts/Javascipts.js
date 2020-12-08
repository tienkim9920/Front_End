
// var srcImg1 = "../img/Logo3.png";
// var srcImg2 = "../img/Logo2.jpg";
// var srcImg3 = "../img/Logo4.png";

// var srcImg = "../img/Logo3.png";

// setInterval(() => {
//     $(document).ready(function(){
//         if (srcImg === srcImg1){
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg3;
//         }
//         else if (srcImg === srcImg3){
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg2;
//         }
//         else{
//             $(".img-Logo").attr("src", srcImg);
//             srcImg = srcImg1;
//         }
//     });
// }, 2000);

// -----------------------Mua Giỏ Hàng----------------------//

var countCard = 0;

DomID('countStore').innerHTML = countCard;

var shops = [
        { name: '350 Lê Văn Sỹ, Quận 3, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '188 Trần Hưng Đạo, Quận 5, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '78-80 Trần Phú, Phường Lộc Thọ, Nha Trang, Khánh Hòa', city: 'KhanhHoa'},
        { name: '25-26 Phạm Văn Đồng, Phường Vĩnh Hải, Nha Trang, Khánh Hòa', city: 'KhanhHoa'},
        { name: '217 Võ Thị Sáu, Phường Thống Nhất, Biên Hòa, Đồng Nai', city: 'DongNai'},
        { name: 'Tòa Nhà Bitexco, số 2 Hải Triều, Quận 1, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '92-94 Nam Kỳ Khởi Nghĩa, Quận 1, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '468 Nguyễn Hữu Thọ, Quận 7, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '01 Đường 17A, Quận Bình Tân, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '106 Nguyễn Văn Trỗi, Quận Phú Nhuận Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '63 Mạc Thi Bưởi, Quận 1, Hồ Chí Minh', city: 'HoChiMinh'},
        { name: '384 Đường 30 tháng 4, phường Hưng Lợi, Quận Ninh Kiểu, Cần Thơ', city: 'CanTho'},
        { name: '2 Hùng Vương, Phường Thới Bình, Quận Ninh Kiều, Cần Thơ', city: 'CanTho'},
        { name: '44 Nguyễn Đình Chiểu, TP Thủ Dầu Một, Binh Dương', city: 'BinhDuong'},
        { name: 'Số 06 Nại Nam, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng', city: 'DaNang'},
        { name: '59-61 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng', city: 'DaNang'},
        { name: '82-84 Hàng Điếu, Phường Cửa Đông, Quận Hoàn Kiếm, Hà Nội', city: 'HaNoi'},
        { name: '66-68 Trần Xuân Soạn, Phường Ngô Thị Nhậm, Quận Hai Bà Trưng, Hà Nội', city: 'HaNoi'},
];

function DomID(id){
    return document.getElementById(id);
}

render('list-Shop', shops);

DomID('Filter-Shop').addEventListener('change', () => {
    var selectedShop = DomID('Filter-Shop').value;

    var renderShop = shops.filter((item) => {
        return item.city === selectedShop;
    });

    render('list-Shop', renderShop);
});

function render(container, items){
    var listItems = items.map((item) => {
        return '<div class="group-Items"><i class="fas fa-coffee" style="font-size:24px"></i><li class="list-group-items">' + item.name + 
        '</li>' + '<a class="directShop">Chỉ đường'+'</a></div>'
    })

    var renderHtml = listItems.join('');

    DomID(container).innerHTML = renderHtml;
}
