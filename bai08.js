function timMax() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    let max = a[0];
    for (let i = 0; i < n; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
let x = timMax();
console.log("Giá trị lớn nhất trong mảng là", x);