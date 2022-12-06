function primecheck(num){
let factor=0
for(let i=1;i<=num;i++){
  if(num%i==1){
    factor++
}
}
if(factor==0){
  return true;
}else{
  return false;
}

let result=primecheck(13)
if(result==true){
   console.log("its a prime number")
}else{
   console.log("Not a prime")