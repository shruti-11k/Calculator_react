import React from 'react'

function Calculator() {
  const [ calc,setCalc] = React.useState({
    current:"0",
    total:"0",
    isInitial: true, 
    preOp:""
  });
  function handleNumbers(value){
  let newValue = value;
  if(!calc.isInitial){
  newValue = calc.current + value;
  }
    setCalc({current:newValue,total:calc.total,isInitial:false, preOp:calc.preOp});

  }
  function doCalculation(){
    let total = parseInt(calc.total);

    switch(calc.preOp){
      case "+":
        total+= parseInt(calc.current);
        break;
      case "-":
        total-= parseInt(calc.current);
        break;
      case "*":
        total*= parseInt(calc.current);
        break;
      case "/":
        total/= parseInt(calc.current);
        break; 
      default:
        total = parseInt(calc.current);
    }
    return total;

  }
  function handleOperators(value){
    const total=doCalculation();
    setCalc({current:total.toString() ,total:total.toString(), isInitial:true,preOp:value});

    
  }
  function handleClear(){
    setCalc({
      current:"0",
      total:"0",
      isInitial: true, 
      preOp:""
    })

  }

  function renderDisplay(){
    return calc.current;
  }  
  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={handleNumbers}/>
      <CalcButton value="8" onClick={handleNumbers}/>
      <CalcButton value="9" onClick={handleNumbers}/>
      <CalcButton className='operators' value="/" onClick={handleOperators} />
      <CalcButton value="4" onClick={handleNumbers}/>
      <CalcButton value="5" onClick={handleNumbers}/>
      <CalcButton value="6" onClick={handleNumbers}/>
      <CalcButton className='operators' value="*" onClick={handleOperators}/>
      <CalcButton value="1" onClick={handleNumbers}/>
      <CalcButton value="2" onClick={handleNumbers}/>
      <CalcButton value="3" onClick={handleNumbers}/>
      <CalcButton className='operators' value="-" onClick={handleOperators}/>
      <CalcButton value="C" onClick={handleClear}/>
      <CalcButton value="0" onClick={handleNumbers}/>
      <CalcButton value="=" onClick={handleOperators}/>
      <CalcButton className='operators' value="+" onClick={handleOperators}/>
      <div>
        <h1 id="head">calculator in react </h1>
        <p id="para"># Calculator_in_react
This is my first mini project which I have created in react. 
React is a powerful JavaScript library for building dynamic user interfaces, allowing developers to create interactive web applications with ease.My project showcases the versatility of React, demonstrating how it can be used to create a functional and visually appealing calculator application.

In my calculator app, I've leveraged React's component-based architecture to create reusable UI components for each button and the display screen. This approach not only makes my code more modular and maintainable but also allows for easy expansion and customization in the future.
The use of functions, callbacks, props, and hooks in my project highlights the flexibility of React in managing state and handling user interactions. By utilizing these features effectively, I've been able to implement the core functionality of the calculator, enabling users to perform basic arithmetic operations with ease.

In addition to functionality, I've also focused on the visual presentation of my calculator app. The use of CSS for styling, including grids for layout and color changes for operator buttons.

Looking ahead,I have ambitious plans to further enhance my calculator app by adding features like percentage calculations.
Overall, my React project is a testament to showcases my ability to leverage modern web technologies to create engaging and functional applications. As I continue to refine and expand my project, it is sure to become an invaluable resource for users seeking a reliable and efficient calculator solution.

Dear Visitor,

Thank you for taking the time to visit my GitHub profile! I hope you found something interesting or useful in my projects. Your interest and support mean a lot to me as I continue to grow and develop as a developer.

Please do contact me at pratushx2003@gmail.com if you could help me in making my project better. I am always eager to learn about new technologies and discover something new about a technology. Your insights and expertise would be greatly appreciated.

If you have any questions, feedback, or suggestions regarding my projects, feel free to reach out. I'm always eager to connect with fellow developers and learn from each other's experiences.

Once again, thank you for stopping by. I look forward to connecting with you and possibly collaborating in the future!</p>
      </div>
    </div>
      
  );
}

function CalcButton(props) {
  return (
    <button className={props.className} onClick={()=> props.onClick(props.value)}>{props.value}</button>
  );
}

export default Calculator
export {CalcButton}

