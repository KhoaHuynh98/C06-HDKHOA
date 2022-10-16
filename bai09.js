function timViTriAmDau() {
    let a = [-1, 0, 1, 4, 7, 9, 22];
    let n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) {
            return i;
        }
    }
    return -1;
}

function timAmMax() {
    let x = timViTriAmDau();
    if (x == -1) {
        return 0;
    }
    let max = a[x];
    for (let i = 0; i < n; i++) {
        if (a[i] < 0 && a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
let k = timAmMax();
console.log("Giá trị âm lớn nhất là", k);