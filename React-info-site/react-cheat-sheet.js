// Cheat sheeeeeeeeeeeeeeeeeeeeet

// Import React and ReactDOM - بتعملهم مرة واحدة ف بداية البروجكت
// ReactDOM - Library `numpy`
// .render() - Method `.array()
import React from 'react'
import ReactDOM from 'react-dom'

// Render component into the DOM - only once per app
// .Render not append
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root') // ممكن تسخدم الميثود بتاعة .queryselector()
                                  // root is the 'id' of the specified div
  );                              




// =============================================================

//          Components and Props
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. 
//   They accept arbitrary inputs (called “props”) and return React elements 
//   describing what should appear on the screen.


// The simplest way to define a component is to write a JavaScript function:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// You can also use an `ES6 class` to define a component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}




// Stateless React Component(React functions)
const Headline = () => {
    return <h1>React Cheat Sheet</h1>
  }
  // Component that receives props(Function with arguments)
  const Greetings = (props) => {
    return <p>You will love it {props.name}.</p>
  }

  // Component must only return ONE element (eg. DIV)
  // لازم يبقى قبلها تاجة سواء فاضية او فيها ديف
  const Intro = () => {
    return (
      <div>
        <Headline />
        <p>Welcome to the React world!</p>
        <Greetings name="Petr"/>
      </div>
    )
  }

  // <Intro/> هنا انا بنده على الفانكشن اللى اسمها انترو
  // الفانكشن انترو لما هترندر هتشو ذا فوللونج
  // Stateless component = <Headline />
  // Paragraph tag = <p></p>
  // Stateless component that recieve props = <Greetings />
  ReactDOM.render(
    <Intro />,
    document.getElementById('root')
  );


// Components and Props API - http://bit.ly/react-props
// CodePen Demo: http://bit.ly/react-simple