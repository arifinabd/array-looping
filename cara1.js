var array1 = [{ nilai: "a" }, { nilai: "b" }, { nilai: "c" }, { nilai: "d" }, { nilai: "a" }, { nilai: "b" }];

let uniq = [];

function ayo() {
  array1.forEach((element) => {
    if (!uniq.includes(element.nilai)) {
      uniq.push(element.nilai);
    }
  });
}
ayo();
console.log(uniq);

// ===============================================
let a = [1, 2, 5, 2, 1, 8];
let len = a.length;

let b = [];
for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);

// =========================================
obj = {};
for (let i of a) {
  obj[i] = true;
}
// console.log(obj);
let c = Object.keys(obj);
console.log(c);

// ==========================================
a.sort();
// console.log(a);
let d = [];
let _temp;
for (let i = 0; i < len; i++) {
  if (a[i] !== _temp) {
    d.push(a[i]);
    _temp = a[i];
  }
}
console.log(d);
// ============================================

console.log([...new Set(a)]);
