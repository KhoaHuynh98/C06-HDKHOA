function kiemTraTangDan() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let dem = 0;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] <= a[i+1]) {
            dem++;
        }
    }
    if (dem == n - 1) {
        return true;
    }
    return false;
}
let x = kiemTraTangDan();
if (x == true) {
    console.log("Mảng tăng dần");
} else
    console.log("Mảng không tăng dần");
kiemTraTangDan();