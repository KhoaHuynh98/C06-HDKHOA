function tongSoChinhPhuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let tong = 0;
    for (let i = 0; i < n; i++) {
        if (Math.pow(i,2) == a[i]) {
            tong + a[i];
        }
    }
}
let x = tongSoChinhPhuong();
console.log("Tổng các số chính phương trong mảng là", x);
