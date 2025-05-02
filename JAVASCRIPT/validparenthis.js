const validParenthesis= (s) => {
    let inc='({[',dec=')}]',stack=[];
    if(s.length%2!==0){
        return false;
    }
        for(const char of s){
            if(inc.includes(char)){
                stack.push(char)
            }else{
                if(stack.length==0)return false;
                let index=dec.indexOf(char);
                if(!stack.includes(inc[index]))return false;
                stack.pop()
            }
        
    }
    return stack.length==0;
}
console.log(validParenthesis('{{}'))
console.log(validParenthesis('{{}}'))
console.log(validParenthesis('{{}(()'))
console.log(validParenthesis('{{})]'))
console.log(validParenthesis('{{}}[]()'))