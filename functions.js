//1a.
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
function countword(paragraph, word1, word2) {
    let a = paragraph.split(" ");
    let count1 = 0;
    let count2 = 0;
    for(let i=0; i<a.length; i++){
        if(word1 == a[i] || word1 + "." == a[i]) {
            count1++;
        }
        if(word2 == a[i] || word2 + "." == a[i]) {
            count2++;
        }
    }
    if(count1 > count2) {
        return `The word ${word1} more frequently occurred than ${word2}`;
    }
    return `The word ${word2} more frequently occurred than ${word2}`;
}

//1b.
function cleanText(sentence) {
    var a = "";
    for (i in sentence) {
      if (/[^a-zA-Z ]/.test(i) || i == " ") {
        a += i;
      }
    }
    return a;
  }

//1c.
function countwords(sentence) {
    const stringArr = sentence.split(" ");
    var count = 0;
    for(i in stringArr) {
        if(i.length > 1) {
            count += 1;
        }
    }
    return count;
}

//1d.
const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
function varietyOfWords(sentence) {
    const stringArr = sentence.split(" ");
    var a = new Set();
    for (i in stringArr) {
        a.add(i);
    }
    return a.length
}

//2a.
function triangle(n) {
    for(var i=1; i<n; i++){
        console.log('*' * i);
    }
}

//2b.
function sevenRandomNumbers() {
    var arr = [];
    while (arr.length < 7) {
        var r = Math.floor(Math.random() * 10) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

//2c.
function reverseArray(arr) {
    var Newarr = [];
    for(var i = 0; i < arr.length; i) {
        Newarr.push(arr[arr.length - i - 1]);
    }
    return Newarr;
}
console.log(reverseArray([1, 2, 3]))

//2d.
function checkUniqueness(arr) {
    return arr.length == Set(arr).length;
}