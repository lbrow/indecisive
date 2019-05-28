import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import First from './First';
import WrappedNormalLoginForm from './Second';
import Third from './Third';
// Here I declare my routes

function Container() {
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/first" component={ First} />
          <Route path="/second" component={WrappedNormalLoginForm } />
          <Route path="/third" component={ Third} />
        </Switch>

    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

export default Container;