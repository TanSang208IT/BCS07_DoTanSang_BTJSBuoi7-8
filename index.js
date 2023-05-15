//BÀI TẬP
// 1. THÊM SỐ VÀO MẢNG
var arr = [];

function themSo () {
    var soN = document.getElementById("soN").value * 1;
    arr.push(soN);
    document.getElementById("mangNguoiDungNhap").innerHTML = arr;
}
//2. TÍNH TỔNG CÁC SỐ DƯƠNG

function tinhTongCacSoDuong() {
    var tongCacSoDuong = 0;
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] > 0){
            tongCacSoDuong += arr[i];
            console.log(tongCacSoDuong);
        }
    }
    document.getElementById("tongCacSoDuong").innerHTML = tongCacSoDuong;
}
document.querySelector(".tinhTong").onclick = tinhTongCacSoDuong;

//3. ĐẾM SỐ DƯƠNG
function demSoDuong () {
    var demSo = 0;
    for ( var i = 0; i <= arr.length; i++){
        if (arr[i] > 0) {
            demSo++;
        }
    }
    document.getElementById("demSoDuong").innerHTML = demSo;
}
document.querySelector(".demSo").onclick = demSoDuong;

//4. TÌM SỐ NHỎ NHẤT

function timSoNhoNhat () {
    var min = arr[0];
  for (var i = 0; i <= arr.length; i++){
    if (min > arr[i]){
        min = arr[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML = min;

    }
    document.querySelector(".xetSoNhoNhat").onclick = timSoNhoNhat;

    // 5. TÌM SỐ DƯƠNG NHỎ NHẤT

    function timSoDuongNhoNhat () {
        var minDuong = arr[0];
      for (var i = 0; i <= arr.length; i++){
        if (minDuong > arr[i] && arr[i] > 0){
            minDuong = arr[i];
        }
      }
      document.getElementById("timSoDuongNhoNhat").innerHTML = minDuong;
    
        }
        document.querySelector(".xetSoDuongNhoNhat").onclick = timSoDuongNhoNhat;

        //5. SỐ CHĂN CUỐI CÙNG TRONG MẢNG
function timSoChanCuoiCung () {
        var soChan = -1;
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] % 2 == 0){
                soChan = arr[i];
            }
            
        }
        document.getElementById("soChanCuoiCung").innerHTML = soChan;
    }
        document.querySelector(".timSoChanCuoiCung").onclick = timSoChanCuoiCung;

        //6. ĐỔI VỊ TRÍ 2 SỐ TRONG MẢNG

        function doiViTriHaiSo () {
            var mangSauKhiDoi = arr;
            var viTri1 = document.getElementById("viTri1").value * 1;
            var viTri2 = document.getElementById("viTri2").value * 1;
           
                if(viTri1 <= arr.length && viTri2 <= arr.length){
                    arr[viTri1] = arr[viTri2];
                }
            console.log(mangSauKhiDoi);
        }

        // 7. SẮP XẾP THỨ TỰ TĂNG DẦN

        function sapXepThuTu () {
            var arrNew = arr.sort();
            document.getElementById("sapXepThuTu").innerHTML = arrNew;
        }
        document.querySelector(".sapXep").onclick = sapXepThuTu;

        // 10. ĐẾM SỐ ÂM
        function tinhSoAm () {
            var demSoAm = 0;
            for ( var i = 0; i <= arr.length; i++){
                if (arr[i] < 0) {
                    demSoAm++;
                }
            }
        }
var soSoDuong = Number(demSoDuong);
var soSoAm = Number(tinhSoAm);
        function soSanhAmDuong() {
            if(soSoDuong > soSoAm){
                document.getElementById("soSanhAmDuong").innerHTML = "Số dương > Số âm";
            } else if (soSoDuong < soSoAm){
                document.getElementById("soSanhAmDuong").innerHTML = "Số dương < Số âm";
            } else {
                document.getElementById("soSanhAmDuong").innerHTML = "Số dương = Số âm";
            }
            console.log(soSoAm);
            console.log(soSoDuong);
        }
        document.querySelector(".soSanh").onclick = soSanhAmDuong;