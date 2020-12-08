function DomID(id){
    return document.getElementById(id)
}

var slideIndex = 0
Sliding(slideIndex)

function Sliding(n){
    var SectionLogin = document.getElementsByClassName('Section-Login')
    var SignLogin = document.getElementsByClassName('Sign-Login')

    for (var i = 0; i < SectionLogin.length; i++){
        SectionLogin[i].style.display = "none"
    }

    for (var i = 0; i < SectionLogin.length; i++){
        if (n === 0){
            SectionLogin[n].style.display = "block";
        }
    }

    for (var i = 0; i < SectionLogin.length; i++){
        if (n === 1){
            SectionLogin[n].style.display = "block";
        }
    }

    for (var i = 0; i < SignLogin.length; i++){
        SignLogin[i].setAttribute('style', 'background-color: #ffffff; border: 1px solid #0e7c43;')
    }

    SignLogin[slideIndex].setAttribute('style', 'background-color: #0e7c43; color: #ffffff')
}

function PageClick(n){
    Sliding(slideIndex = n - 1)
}

var arrTaiKhoan = [
    {
        fullName: "Kim Tiền",
        email: "tienkim",
        password: "123"
    },
    {
        fullName: "Quốc Toàn",
        email: "quoctoan",
        password: "123"
    },
    {
        fullName: "Thu Hương",
        email: "thuhuong",
        password: "123"
    },
    {
        fullName: "Xuân Hoài",
        email: "xuanhoai",
        password: "123"
    },
    {
        fullName: "Hiếu Lương",
        email: "hieuluong",
        password: "123"
    },
]

var luuTruTaiKhoan = []

DomID('btn-DangKy').addEventListener('click', () => {
    var object = {
        fullName: DomID('inputName').value,
        email: DomID('inputEmailDangKy').value,
        password: DomID('inputPasswordDangKy').value
    }

    if (object.fullName === ''){
        DomID('modal').setAttribute('style', 'opacity: 1; visibility: visible;')
        DomID('kiemTraLoiName').innerHTML = "Tên Không Được Để Trống!"
        return;
    }

    if (object.email === ''){
        DomID('modal').setAttribute('style', 'opacity: 1; visibility: visible;')
        DomID('kiemTraLoiEmailDangKy').innerHTML = "Email Không Được Để Trống!"
        return;
    }

    if (object.password === ''){
        DomID('modal').setAttribute('style', 'opacity: 1; visibility: visible;')
        DomID('kiemTraLoiPassDangKy').innerHTML = "Email Không Được Để Trống!"
        return;
    }

    DomID('inputName').value = ''
    DomID('inputEmailDangKy').value = ''
    DomID('inputPasswordDangKy').value = ''

    DomID('modalDangKyThanhCong').setAttribute('style', 'opacity: 1; visibility: visible;')

    localStorage.setItem('Account', JSON.stringify(object))

    arrTaiKhoan.push(JSON.parse(localStorage.getItem('Account')))

    console.log(arrTaiKhoan)

    DomID('kiemTraLoiName').innerHTML = ''
    DomID('kiemTraLoiEmailDangKy').innerHTML = ''
    DomID('kiemTraLoiPassDangKy').innerHTML = ''

})

if (localStorage.getItem('Account') !== null){
    luuTruTaiKhoan = JSON.parse(localStorage.getItem('Account'))
    arrTaiKhoan.push(luuTruTaiKhoan)
    console.log(arrTaiKhoan)
}

DomID('btn-DangNhap').addEventListener('click', () => {

    var emailDangNhap = DomID('inputEmail').value
    var passDangNhap = DomID('inputPassword').value
    
    var accountCheck = arrTaiKhoan.find(({email}) => email === emailDangNhap)

    if (accountCheck === undefined){
        DomID('modal').setAttribute('style', 'opacity: 1; visibility: visible;')
        DomID('kiemTraLoiEmailDangNhap').innerHTML = "Email Không Hợp Lệ!"
        DomID('inputEmail').value = ''
        DomID('inputPassword').value = ''
        return
    }

    if (passDangNhap !== accountCheck.password){
        DomID('modal').setAttribute('style', 'opacity: 1; visibility: visible;')
        DomID('kiemTraLoiPassDangNhap').innerHTML = "Password Không Hợp Lệ!"
        DomID('inputPassword').value = ''
        return
    }

    DomID('inputEmail').value = ''
    DomID('inputPassword').value = ''

    DomID('modalDangNhapThanhCong').setAttribute('style', 'opacity: 1; visibility: visible;')

    DomID('txtLogin').innerHTML = accountCheck.fullName
    DomID('kiemTraLoiEmailDangNhap').innerHTML = ''
    DomID('kiemTraLoiPassDangNhap').innerHTML = ''
})

    
var modal = document.getElementsByClassName('modal')

function clickModal(n){
    for (var i = n - 1; i < n; i++){
        modal[i].setAttribute('style', 'opacity: 0; visibility: hidden;')
    }
}
