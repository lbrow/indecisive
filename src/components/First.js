import React from 'react';
import { Card, Col, Row } from 'antd';
import "./styling/app.css"
import { Link } from "react-router-dom";
import Front from './Optionso/quiz';
import Back from './Optionso/quizBack';
class First extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showResults: false, 
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      showResults: true,
    });
  }

 

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       showResults: false,
  //   };
  //  function handleClick(){
  //     this.setState(state=> ({
  //       showResults: !state.showResults.true
  //     }));
  //   }
  // };

 render(){
  return(
 <div > 
   <div  className="container" style={{ background: '#ECECEC', padding: '20px', alignContent: 'center', opacity: 1.2}}>
 <Row gutter={16} >
  <Col style={{alignContent: 'center'}}>
<Card><h1>Decide Your End</h1>
<Col style={{float: 'left'}}>
<button onClick={this.handleClick}>Front End</button>
</Col>
<Col style={{flaot:'right'}}>
<Back/> 
</Col>
</Card> 
  </Col>

 </Row>
 
 
<Row >
   <Col style={{float: 'left'}}>    { this.state.showResults ? <Front/> : null }</Col>
   {/* <Col style={{float: 'right'}}>    { this.state.showResultsB ?: null }</Col> */}
 </Row>

 
</div> 

<div  style={{position:'fixed', right:0, bottom:0}}>
   <Row>
   <h1>Willing To Cont.</h1>
 <Link style={{display: 'inline-block'}} to="/third">Second</Link>
 </Row>
 </div>
</div>
  
  )
}
}
export default First;