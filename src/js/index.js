// Quản lý tuyển sinh
const layGiaTriKhuVuc = (khuVuc) =>{
    if(khuVuc==='A')
        return 2;
    if(khuVuc==='B')
        return 1;
    if(khuVuc==='C')
        return 0.5;
    return 0;
}

const layGiaTriDoiTuong = (doiTuong) =>{
    if(doiTuong==='1') 
        return 2.5;
    if(doiTuong==='2') 
        return 1.5   
    if(doiTuong==='3') 
        return 1;
    return 0;
}
const tinhKetQua = (event) =>{

    event.preventDefault();

    const diemChuan=parseFloat(document.getElementById('diemChuan').value);
    const diemMon1=parseFloat(document.getElementById('diemMon1').value);;
    const diemMon2=parseFloat(document.getElementById('diemMon2').value);
    const diemMon3=parseFloat(document.getElementById('diemMon3').value);
    
    const temp_1=document.getElementById('khuVuc').value;
    const khuVuc=layGiaTriKhuVuc(temp_1);

    const temp_2=document.getElementById('doiTuong').value;
    const doiTuong=layGiaTriDoiTuong(temp_2);

    console.log(diemMon1)

    if(diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0 ){
        const diemLiet = document.getElementById('content').innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
        return diemLiet;
    }
    else if(isNaN(diemMon1) || isNaN(diemMon2) || isNaN(diemMon3)){
        alert("Vui lòng nhập điểm số")
    }


    diemUuTien= khuVuc+doiTuong;
    diemTongKet= diemMon1+diemMon2+diemMon3+diemUuTien;


    if(diemTongKet < diemChuan){
        const diemLiet = document.getElementById('content').innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTongKet}` ;
        return diemLiet;
    }
    else if (diemTongKet>= diemChuan) {
        document.getElementById('content').innerHTML = `Bạn đã đậu. Tổng điểm: ${diemTongKet}`;
    }
    
}

// Tính tiền điện
const tinhTienDien = (event) =>{
    event.preventDefault();
    const _name=document.getElementById('hoTen').value;
    const tieuThu=parseFloat(document.getElementById('soKw').value);
    let thanhTien=0;

    if(isNaN(tieuThu)){
        alert('Số Kw không hợp lệ vui lòng nhập lại')
    }
    else if(tieuThu <= 50){
        thanhTien=tieuThu*500
        document.getElementById('result').innerHTML = `Khách hàng ${_name} phải trả: ${thanhTien.toLocaleString()} đồng.`;
    }
    else if(tieuThu>50 && tieuThu <=100){
        thanhTien=50*500 + (tieuThu-50)*650
        document.getElementById('result').innerHTML = `Khách hàng ${_name} phải trả: ${thanhTien.toLocaleString()} đồng.`;
    }
    else if(tieuThu>100 && tieuThu <=200){
        thanhTien=50*500 + 50*650 + (tieuThu-100)*850
        document.getElementById('result').innerHTML = `Khách hàng ${_name} phải trả: ${thanhTien.toLocaleString()} đồng.`;
    }
    else if(tieuThu>200 && tieuThu<=350){
        thanhTien=50*500 + 50*650 + 100*850 + (tieuThu-200)*1100
        document.getElementById('result').innerHTML = `Khách hàng ${_name} phải trả: ${thanhTien.toLocaleString()} đồng.`;
    }
    else{
        thanhTien=50*500 + 50*650 + 100*850 + 150*1100 + (tieuThu-350)*1300
        document.getElementById('result').innerHTML = `Khách hàng ${_name} phải trả: ${thanhTien.toLocaleString()} đồng.`;
    }

    console.log(thanhTien)
}

//Tính thuế xuất
const tinhTienThue = (event)=>{
    const _name=document.getElementById('ten').value
    const tongThuNhap=parseFloat(document.getElementById('thuNhap').value)
    const nguoiPhuThuoc=parseFloat(document.getElementById('nguoiPhuThuoc').value)
    const thuNhapChiuThue= tongThuNhap-4000000-(nguoiPhuThuoc*1600000)
    console.log(thuNhapChiuThue)
    let tienThue=0
    if(thuNhapChiuThue<60000000){
        tienThue=thuNhapChiuThue*0.05
    }
    else if(thuNhapChiuThue>=60000000 && thuNhapChiuThue<120000000){
        tienThue=thuNhapChiuThue*0.1
    }   
    else if(thuNhapChiuThue>=120000000 && thuNhapChiuThue<210000000){
        tienThue=thuNhapChiuThue*0.15
    }
    else if(thuNhapChiuThue>=210000000 && thuNhapChiuThue<384000000){
        tienThue=thuNhapChiuThue*0.2
    }
    else if(thuNhapChiuThue>=384000000 && thuNhapChiuThue<624000000){
        tienThue=thuNhapChiuThue*0.25
    }
    else if(thuNhapChiuThue>=624000000 && thuNhapChiuThue<960000000){
        tienThue=thuNhapChiuThue*0.3
    }
    else if(thuNhapChiuThue>=960000000){
        tienThue=thuNhapChiuThue*0.35
    }
    const VND= new Intl.NumberFormat('vi-VN', {style:'currency',currency:'VND'})
    console.log(VND.format(tienThue));
    document.getElementById('result2').innerHTML = `Họ tên ${_name} tiền thuế thu nhập cá nhân: ${VND.format(tienThue)}.`;
}

//Tính tiền cáp
const toggleConnections = () => {
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKetNoiContainer = document.getElementById("soKetNoiContainer");

    if (loaiKhachHang === 'business') {
        soKetNoiContainer.style.display = "block"; // Show for business customers
    } else {
        soKetNoiContainer.style.display = "none"; // Hide for residential customers
    }
}

const tinhHoaDon=(ev)=>{
    ev.preventDefault();
    const maKhachHang=document.getElementById("maKhachHang").value;
    const loaiKhachHang = document.getElementById("loaiKhachHang").value;
    const soKenhCaoCap = parseInt(document.getElementById("soKenh").value) || 0;
    console.log(soKenhCaoCap)
    let soKetNoi;
    if(loaiKhachHang === "business"){
        soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0; 
    }
    else{
        soKetNoi = 0;
    }

    let bill=0;
    if (loaiKhachHang === "residential") {
        const phiXuLyHoaDon = 4.5;
        const phiDichVuCoBan = 20.5;
        const phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
        bill = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
        console.log(bill);
        document.getElementById("result3").innerHTML = `Mã khách hàng: ${maKhachHang} Tổng Hóa Đơn: $${bill.toFixed(2)}`;
    } else if (loaiKhachHang === "business") {
        const phiXuLyHoaDon = 15;
        const phiDichVuCoBan = 75; // for up to 10 connections
        const phiThueKenhCaoCap = 50 * soKenhCaoCap;

        // If connections are less than 10, charge the basic fee only
        let phiKetNoi;
        if(soKetNoi > 10){
            phiKetNoi = (soKetNoi - 10) * 5; // Tính phí cho các kết nối vượt mức
        }
        else{
            phiKetNoi = 0;// Không có phí cho kết nối nếu <= 10
        }
        // Tính tổng hóa đơn
        bill = phiXuLyHoaDon + phiDichVuCoBan + phiKetNoi + phiThueKenhCaoCap;
        document.getElementById("result3").innerHTML = `Mã khách hàng: ${maKhachHang} Tổng Hóa Đơn: $${bill.toFixed(2)}`;
    }
    else {
        alert("Vui lòng chọn loại khách hàng")
    }
    console.log(bill);
    
}