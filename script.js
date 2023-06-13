// complete the given function

function palindrome(str){
   let a=str.split(" ").join("");
   let b=str.split(" ").reverse().join("");	
   a.toLowerCase();
   b.toLowerCase();
   if(a==b)return true;
    return false;	
	
}
module.exports = palindrome
