function primecheck(num){
let count=0
for(let i=1;i<=num;i++){
  if(num%i==0){
    count++
}
}
if(count==2){
  return true;
}else{
  return false;
}

let result=primecheck(13)
if(result==true){
   console.log("prime")
}else{
   console.log("Not prime")