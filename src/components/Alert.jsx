import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const AlertPage = ({message, color}) => {
  
  return (
    <MDBContainer>
      <MDBAlert color={color} dismiss>
        {message}
      </MDBAlert>
    </MDBContainer>
  );
};

export default AlertPage;