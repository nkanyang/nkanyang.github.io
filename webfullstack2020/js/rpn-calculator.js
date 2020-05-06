/*逆波兰表示法是一种是由波兰数学家扬·武卡谢维奇1920年引入的数学表达式方式，在逆波兰记法中，所有操作符置于操作数的后面，因此也被称为后缀表示法。逆波兰记法不需要括号来标识操作符的优先级。逆波兰结构在1960年代早期被提议用于表达式求值，以利用堆栈结构减少计算机内存访问。在1960和1970年代，逆波兰记法广泛地被用于台式计算器，因此也在普通公众（工程、商业和金融领域）中使用。

逆波兰记法中，操作符置于操作数的后面。例如表达“三加四”时，写作“3 4 +”，而不是“3 + 4”。如果有多个操作符，操作符置于第二个操作数的后面，所以常规中缀记法的“3 - 4 + 5”在逆波兰记法中写作“3 4 - 5 +”：先3减去4，再加上5。使用逆波兰记法的一个好处是不需要使用括号。

例如 5 1 2 + 4 * + 3 - 表示 5 + ((1 + 2) * 4) - 3 最终结果为 14

请构造一个计算器，计算使用逆波兰表示法的数学算式.

注意事项：

不用考虑除数为0等异常情况
每一个操作数和运算符用空格隔开*/

function calc(expr) {
  // TODO: Your code here
  if(!expr) return 0;
  const exprArr=expr.split(" ");
  console.log(exprArr);
  const tempArr=[];

  while(exprArr.length >0){
    let char = exprArr.shift();
    console.log("================");
    if(!isNaN(char)){
      tempArr.push(char);
      // console.log(tempArr);
    }
    else{
      if(tempArr.length<2){
        console.log("Inviad expression!");
        return;
      }
      const factor2 = tempArr.pop();
      const factor1 = tempArr.pop();
      console.log(factor1+char+factor2);
      const result = eval(factor1+char+factor2);
      tempArr.push(result);
    }
    console.log("tempArr: "+tempArr);
    console.log("exprArr: "+exprArr);
  }
    //result
    if(tempArr.length !== 1){
      console.log("Inviad expression!");
      return;
    }
    else{
      console.log("Result: "+tempArr.pop());
      return;
    }
 
  return 0;
}

calc("100 10 7 6 1 2 * 3 + * + 3 + 5 / - +" );
