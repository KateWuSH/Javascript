
//----- 字串模板 -----

const people = [
    {
        name: '小明',
        friends: 2
    },
    {
        name: '小強',
        friends: 10
    },
    {
        name: '小美',
        friends: 0
    }
]

//過去的寫法
let oriString = '我叫做 ' + people[0].name;
console.log(oriString);

// 如果要換行要用反斜線(\)換行，才不會報錯；用單引號(')和加號(+)來加入變數
let oriUl = '<ul>\
    <li>我叫做 ' + people[0].name + '</li>\
    <li>我叫做 ' + people[1].name + '</li>\
    <li>我叫做 ' + people[2].name + '</li>\
</ul>'
console.log(oriUl);

//ES6
//用反引號(`)來插入字串，且可以使用 ${} 來加入變數或函式
let newString = `我叫做 ${people[1].name}`;
console.log(newString);

let newUl = `
    <ul>
        <li>我叫做 ${people[0].name}</li>
        <li>我叫做 ${people[1].name}</li>
        <li>我叫做 ${people[2].name}</li>
    </ul>
`
console.log(newUl);

//添加更多判斷式
let ul2 = `
  <ul>
    ${people.map((person) => {
        if (person.friends) {
          return `<li>${person.name} 有 ${person.friends} 朋友</li>`
        } else {
          return `<li>${person.name} 邊緣人</li>`
        }
      }).join('')
    }
  </ul>
`
console.log(ul2);


//----- 預設值 -----
//建議參數不要超過3個，避免 code 難以閱讀

//過去的寫法
//方法一
function test(a, b, c, d){
    a = a || 'aaa';
    b = b || 'bbb';
    c = c || 'ccc';
    d = d || 'ddd';
    console.log(a, b, c, d)
}
test(); //aaa bbb ccc ddd

//ES6
//直接把預設值寫進去，且根據丟入的值可以直接替換該位置的參數
function test(a='aa', b='bb', c='cc', d='dd') {
    console.log(a, b, c, d)
}
test(); //aa bb cc dd
test('Alex'); //Alex bb cc dd



//過去的寫法
//方法二
function test(obj){
    obj = obj || {};
    obj.a = obj.a || 'aaa';
    obj.b = obj.b || 'bbb';
    obj.c = obj.c || 'ccc';
    obj.d = obj.d || 'ddd';
    console.log(obj)
}
test(); //{a: "aaa", b: "bbb", c: "ccc", d: "ddd"}

//ES6
//物件裡面要用冒號(:)非等號(=)
function test(obj= {a:'aa', b:'bb', c:'cc', d:'dd'}) {
    console.log(obj)
}
test(); //{a: "aa", b: "bb", c: "cc", d: "dd"}
test({a:'Alex'}); //{a: "Alex"}

// 後面的數值會不見，所以要把 obj 刪除(預設值冒號要改成等號)
function test1({a='aa', b='bb', c='cc', d='dd'}) {
    console.log(a, b, c, d)
}
test1({}); //aa bb cc dd
test1({a:'Alex123'}); //Alex123 bb cc dd


//----- array -----
//過去的寫法
let ary = [1,2,3,4,5,6];
let a = ary[0];
let b = ary[1];
console.log(a,b);

//ES6
let ary = [1,2,3,4,5,6];
let [a, b, ...c] = ary;
console.log(a,b,c); //1 2 [3, 4, 5, 6]

let alex = {
    name:'alex',
    type: 'x',
    sex: 'male'
}
let{name, type, sex} = alex;
// 常在 module 裡面看到 import (name, type, sex) from 'alex' 就是用這種方法拆解
console.log(name, type, sex);


//----- 物件 -----
//過去的寫法
let name = 'kate';
let sex = 'female';

let kate = {
    name: name,
    sex: sex
}
console.log(kate);

//ES6
let name = 'kate';
let sex = 'female';

let kate = {
    name,
    sex
}
console.log(kate);

//----- Promise -----

function fn1(){
    setTimeout(function(){
        console.log(1);
    }, 0)
}

function fn2() {
    console.log(2);
}

fn1();
fn2();
//2 1
//為了確保先 1 再 2，就用 promise 來做

function fn1() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(1)
            resolve()
        }, 0)
    })
}

function fn2() {
    console.log(2);
}

fn1().then(fn2); //1 2

async function test(){
    await fn1()
    fn2()
} //1 2

//async await 同步的視覺，非同步的享受

document.querySelector('#container').addEventListener('click')




