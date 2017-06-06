module.exports = {
function aritGeo(arr) { 
var Arithmetic = "Arithmetic";
var Geometric = "Geometric ";
for(var i = 0; i < arr.length; i++)
  {
    if (arr === []){
      return 0;
    }
    else if(arr[i + 1]-arr[i]===arr[arr.length - 1]-arr[arr.length - 2]){
      return Arithmetic;
    }
    else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
      return Geometric;
    }

    else {
       return -1;
    }
  }
}
}