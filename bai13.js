function tonTaiSoChinhPhuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let flag = 1;
    for (let i = 0; i < n; i++) {
        if (Math.pow(i,2) == a[i]) {
            flag = 1;
            break;
        }
    } 
    return flag;
}
let x = tonTaiSoChinhPhuong();
if (x == 1)
    console.log("Có tồn tại số chính phương");
else
    console.log("Không có số chính phương");
tonTaiSoChinhPhuong();