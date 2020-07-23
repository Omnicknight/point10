const userExample = {
    name: 'Custom name',
    salary: 1000,
    language: 'Java', 
    task: 5,
};

const bonus = {
    'C++': 100,
    JS: 75,
    PhP: 75,
    default: 0,
};

const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
}

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};

function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.finishTask = () => {
        if(this.tasks > 0) {
            this.tasks--;
            this.salary += (bonus[this.language] || bonus.default) * gradeTax[this.grade];
        };
    };
};   

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
user.addTask ();
user.addTask ();
user.addTask ();
user.addTask ();
user.addTask ();

user.finishTask();
user.finishTask();
user.finishTask();


// function relax () {
//     console.log(new.target);
// }

// relax();
// new relax();

// const best = 'relaxar';

// best.a = 2;

// console.log(new String(best));

// console.log(best.toUpperCase());

// console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Boolean.prototype);
// console.log(BigInt.prototype);
// console.log(Object.prototype);

// const s = 2;

// Number.prototype.toBoolean = function () {
//     return Boolean(this.valueOf);
// };

// s.toBoolean();

// console.log((2).toBoolean());
// const qwer = 'Hello world';
// const upper = (a) => {
//     let str = '';
//     for(let i = 0; i < a.length;i++){
//        const element = a[i];
//        str += i && !(i%2) ? element.toUpperCase() : element; 
//     };
//     return str;
// };

// console.log(upper(qwer));

const arr = [2];

arr.abc = 'adfasdfasdf';

console.log(arr);

const arr1 = [1,2,3];
const arr2 = [];
const obj12 = {
    qwer: 1,
    qwer2: 2,
};

// arr1.splice(1, 1);
delete obj12.qwer;
arr1.push(4);

console.log(arr1);
console.log(obj12);

while (arr.length) {
    arr2.push(arr.shift());
}

console.log(arr2, arr);


