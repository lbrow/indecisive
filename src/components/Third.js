import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from 'antd';


function Third() {
  return (
  <div >
      <Wrapper style={{ background: '#ECECEC', padding: '20px', alignContent: 'center', opacity: 1.5  }} className="container">
      <span>Third</span>
      <section>
        <p>
          Curabitur eu feugiat magna, ut malesuada est.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
    <div  style={{position:'fixed', right:0, bottom:0}}>
   <Row>
   <h1>How Serious Are You?</h1>
 <Link style={{display: 'inline-block'}} to="/second">Sign-Up</Link>
 </Row>
 </div>
  </div>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Third;