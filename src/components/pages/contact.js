import React from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
   
        <MDBCol md="5" className="mt-4 mb-5">
          <form>
            <h1 className="text-center mb-4">Send a Message</h1>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" id="defaultFormContactNameEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input type="email" id="defaultFormContactEmailEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Subject
            </label>
            <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Your message
            </label>
            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
            <div className="text-center mt-4">
              <MDBBtn color="elegant-color" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
  
    </MDBContainer>
  );
};

export default FormPage;