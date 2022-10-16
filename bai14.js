function kiemTraSoChinhPhuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let flag = 1;
    for (let i = 0; i < n; i++) {
        if (Math.pow(i,2) == a[i]) {
            if (a[i] % 2 == 0)
            flag = 1;
            break;
        }
    } return flag;
}
let x = kiemTraSoChinhPhuong();
if (x == 0)
    console.log("Mảng không có toàn là số chính phương chẵn");
else
    console.log("Mảng toàn là số chính phương chẵn");
kiemTraSoChinhPhuong();