function soChinhPhuong() {
    let a = Number(prompt("Nhập số nguyên"));
    let flag = 0;
    for (let i = 1; i <= a; i++) {
        if (Math.pow(i,2) == a) {
            flag = 1;
            break;
        }
    } return flag;
}
let x = soChinhPhuong();
if (x == 1)
    console.log("Là số chính phương");
else
    console.log("Không là số chính phương");
soChinhPhuong();