function lietKeSoChinhPhuong() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (Math.pow(i,2) == a[i]) {
            if (!(a[i] % 2 == 0)) {
                console.log(a[i]);
            }
        }
    }
}
let x = lietKeSoChinhPhuong();
console.log("Các số chính phương lẻ là", x)