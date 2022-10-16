function tonTaiDuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let flag = 1;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i] > 0) {
            flag = 1;
            break;
        } 
    }
    return flag;
}
let x = tonTaiDuong();
if (x == 0) 
     console.log("Không tồn tại số dương");
else 
    console.log("Có tồn tại số dương");
tonTaiDuong();
