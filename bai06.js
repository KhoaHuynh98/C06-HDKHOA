function demSoChinhPhuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let dem = 0;
    for (let i = 0; i < n; i++) {
        if (Math.pow(i,2) == a[i]) {
            dem++;
        }
    }
}
let x = demSoChinhPhuong();
console.log("Có", x, "số chính phương trong mảng");