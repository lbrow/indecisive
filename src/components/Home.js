import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/app.css"

class Home extends React.Component {
    notifyB = () => toast('Have the skill, with no ideas? Allow us to help', {containerId: 'B'});

    render(){
      return (
        <div className='container'>
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_CENTER} />
     
            <button className="but" onClick={this.notifyB}>Where to Begin ? </button>          
        </div>
      );
    }
  
}

export default Home;