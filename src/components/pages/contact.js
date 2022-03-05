import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { validateEmail } from '../../utils/helpers';


const FormPage = () => {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else if(inputType === 'text') {
      setText(inputValue);
    } else {
      setSubject(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName || !subject || !text) {
      setErrorMessage('Email is invalid or you did not fill all fields');
      return;
    }


    // Clear out the input after a successful registration.
    setName('');
    setText('');
    setEmail('');
    setSubject('');
    setErrorMessage('');
  };


  return (
    <MDBContainer>
   
        <MDBCol md="5" className="mt-4 mb-5">
          <form>
            <h1 className="text-center mb-4">Send a Message</h1>
            {errorMessage && (
        <div className="text-danger text-center">
          <p className="error-text"><strong>{errorMessage}</strong></p>
        </div>
      )}
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" id="defaultFormContactNameEx" 
            className="form-control" value={userName} name="userName" onChange={handleInputChange}/>
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input type="email" id="defaultFormContactEmailEx" 
            className="form-control" value={email} name="email" onChange={handleInputChange}/>
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Subject
            </label>
            <input type="text" id="defaultFormContactSubjectEx" 
            className="form-control" value={subject} name="subject" onChange={handleInputChange}/>
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Your message
            </label>
            <textarea type="textarea" id="defaultFormContactMessageEx" 
            className="form-control" rows="3" value={text} name="text" onChange={handleInputChange}/>
            <div className="text-center mt-4">
              <MDBBtn color="elegant-color" outline type="submit" onClick={handleFormSubmit}>
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