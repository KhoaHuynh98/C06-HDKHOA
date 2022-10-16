function kiemTraAm() {
    // let a = [-1, 0, 1, 4, 7, 9, 22]; test "mảng không toàn âm"
    let a = [-1, -2, -4, -7, -9, -22];
    let n = a.length;
    let flag = 1;
    for (let i = 0; i < n; i++) {
        if (a[i] > 0) {
            flag = 0;
            break;
        }
    } return flag;
}
let x = kiemTraAm();
if (x == 0) {
    console.log("Mảng không toàn âm");
} else 
    console.log("Mảng toàn âm");
kiemTraAm();