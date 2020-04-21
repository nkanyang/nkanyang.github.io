/* @function:calculate the tex to pay based on income given
   @income:
   @return:tex to pay
*/
function texCalculator(income) {
  //should do invalidation here
  const texTable = [
    {
      min: 0,
      max: 18200,
      rate: 0,
      base: 0
    },{
      min: 18200,
      max: 37000,
      rate: 0.19,
      base: 0
    },{
      min: 37000,
      max: 90000,
      rate: 0.325,
      base: 3572
    },{
      min: 90000,
      max: 180000,
      rate: 0.37,
      base: 20797
    },{
      min: 180000,
      max: Infinity,
      rate: 0.45,
      base: 54096
    }
  ];

  var texToPay = 0;
  for (var i = 0; i < texTable.length;i++){
    var curItem = texTable[i];
    if(income > curItem.min){
      if(income > curItem.max) continue;

    texToPay = (income - curItem.min)*curItem.rate + curItem.base;
    return texToPay;
    }
  }

}



