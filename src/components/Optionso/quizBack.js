import React from 'react';

import { Checkbox } from 'antd';
import { Col, Row } from 'antd';
import Q from './aQuiz';


class Back extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          showResultsB: false, 
          
        };
        this.handleClickB = this.handleClickB.bind(this);
      }

    handleClickB(){
        this.setState({
          showResultsB: true,
        });
      }
    render(){
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
          }
          
          const Options = ['MongoDB', 'Pear', 'Orange'];
         
        return(
            <div>
                <div><Row><Col style={{float: 'right'}}>
<button onClick={this.handleClickB}>Back End</button>
</Col></Row></div><br/><br/>
<Row >
   <Col style={{float: 'right'}}>    { this.state.showResultsB ? <Q/> : null }</Col>
   {/* <Col style={{float: 'right'}}>    { this.state.showResultsB ?: null }</Col> */}
 </Row>
  </div>
            
        )
    }
}

export default Back; 