
function getStops(flights){
  var length = flights.length;

  if(length === 1){
    return "Direct";
  }
  else if(length === 2){
    return "1 stop";
  }
  else{
    return (length-1) + " stops";
  }
}

function getStops2(flights){
  var length = flights.length;

  return{
    1:"Direct",
    2:"1 stop"
  }[length] || (length -1 ) + " stops";

}
myFlight = ["mel"];

console.log(getStops(myFlight));
console.log(getStops2(myFlight));