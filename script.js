// complete the given function

function palindrome(str){
	str=str.toLowerCase();
   let a=str.split(" ");
	if(a.length>1){
     
      let a1=a.join("");


		let b=str.split(" ").reverse().join("");	
   if(a1==b)return true;
	}
	else{
		let a2=str;
		let b1=a2.split("").reverse().join("");
		if(a2==b1)return true;
	}
   return false;
	
}
module.exports = palindrome
