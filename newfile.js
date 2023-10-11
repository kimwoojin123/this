function Student(name, number) {
    this.name = name;
    this.number = number;
}

let list = ['윤준현', '이민구'];
let studentArr = [];

for (let i = 0; i < list.length; i++) {
    studentArr[i] = new Student(list[i], i + 1);
}

console.log(studentArr);
