// 1) 變數紀錄資料
let name = "Kate";

// 2) 變數紀錄物件管理資料 (物件內容都在描述同一個物件；同屬)
let kate = {
  name: "Kate",
  age: 30,
  sex: "female"
};

kate.name; // 'Kate'
kate["sex"]; // 'female'

// 3) 變數紀錄陣列管理資料 (同類)

let person = ["Alex", "John", "Mary"];

person[1]; //'John'

// -----------------------------------------------------------------------------

let numAry = [1, 2, 3];

// push：從最後面塞進去 (V.S pop)
// numAry.push(4); // [1, 2, 3, 4]

// pop：從最後面拿出來
// let popNum = numAry.pop();

// shift：把第一個拔出來
// let shiftNum = numAry.shift();

// shift：把第一個塞進去
// let unshiftNum = numAry.unshift(0);

// -----------------------------------------------------------------------------

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

/* 
   用 forEach 如果做修改，會改動到原本資料，要注意!!!
   filter：用 return true 或 false，決定內容要留下還是刪除
   filter：會創建新的 array，不會改到原本的資料
   arrow function 沒有 this!!!!!
*/

let newInv = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
// console.log(newInv);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

/*
   map 會建立一個新陣列
*/

let fullNameAry = inventors.map(inv => inv.first + " " + inv.last);
// console.log(fullNameAry);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/*
   因為 a, b 為隨機抽取，無特定規則
   sort 一定要下 callback，[100, 1, 4].sort(); //[1, 100, 4]
   建議可以用數值相減，會得到 <0 =0 >0 這三種情形
   <0 丟前面；>0 丟後面；=0 不調整位置
   小到大 用 a-b
   大到小 用 b-a
*/
let order = inventors.sort((a, b) => a.year - b.year);
// console.log(order);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

let total = 0;
inventors.forEach(inv => (total += inv.passed - inv.year));
// console.log(total);

let totalYear = inventors.reduce(function(total, inv) {
  return total + inv.passed - inv.year;
}, 0);
// console.log(totalYear);

// 5. Sort the inventors by years lived

let age = inventors.sort((a, b) => a.passed - a.year - (b.passed - b.year));
// console.log(age);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name

let sortPeople = people.sort(function(a, b) {
  let aAry = a.split(", ");
  let bAry = b.split(", ");
  return aAry[1] > bAry[1] ? 1 : -1;
});
// console.log(sortPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

let obj = {};

data.forEach(function(item) {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
});

console.log(obj);

let reduceObj = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }

  return obj;
}, {});

console.log(reduceObj);
