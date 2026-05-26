function reverseString(s){
    if(s.length <= 1){
        return s;
    } else {
        const lastChar = s.slice(-1);
        const remaining = s.slice(0, -1);

        return lastChar + reverseString(remaining);
    }
}


console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""