import React from 'react';
import { Checkbox } from 'antd';
import {  Col, Row } from 'antd';

const CheckboxGroup = Checkbox.Group;
class Q extends React.Component {
    
    render(){
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
          }
          
          const Options = ['MongoDB', 'Pear', 'Orange'];
        return(
            <div>
    <Row style={{float: 'right'}}>
        <Col  ><CheckboxGroup options={Options} defaultValue={['MongoDB']} onChange={onChange} />
    <br />
    <br />
    <CheckboxGroup options={Options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <CheckboxGroup
      options={Options}
      
      defaultValue={['MonogDB']}
      onChange={onChange}
    /></Col>
    </Row>
    </div>
        )
    }
}

export default Q;