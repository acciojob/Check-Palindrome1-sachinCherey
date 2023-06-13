// complete the given function

function palindrome(str){
	
   let a=str.split(" ");
	if(a.length>1){
     
      let a1=a.join("");


		let b=str.split(" ").reverse().join("");	
   a1.toLowerCase();
   b.toLowerCase();
   if(a1==b)return true;
	}
	else{
		let a1=str;
		let b1=str.split("").reverse().join("");
		if(a1==b1)return true;
	}
   return false;
	
}
module.exports = palindrome
