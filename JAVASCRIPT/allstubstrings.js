// Find longest non repeating string 'abcadefac';
let str='abcadefac';
let substrings=[];
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        substrings.push(str.slice(i,j))
    }
}

console.log(substrings)



// // Find longest non repeating string 'abcadefac';


function check(str){
    let substrings=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            substrings.push(str.slice(i,j))
        }
    }
    // return substrings;
    let checkObj={},check=[];
    for(const elem of substrings){
        const uni=new Set([...elem.split('')]);
        if(elem==[...uni].join('')){
            check.push(elem)
        }
    }
    return check.reduce((acc,cur)=>acc.length>cur.length?acc:cur)
}
console.log(check(str))

// 