import React from 'react';
import { MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


export default function About() {
  return (
    <MDBContainer className='mt-4 mb-4'>
      <h1 className="text-center mb-4">About Me</h1>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg"
              alt="JM avatar"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title"><strong>I'm Julius Markauskas</strong></h2>
              <p className="card-text">
              Full Stack Web Developer great at time, team, and project management, with broad skills and experience in service and LEAN manufacturing. Experience testing, debugging, quick problem identification and analysis. Ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines, I am always energetic and eager to learn new skills.
              </p>
              <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded color='fb'>
                <MDBIcon size='lg' fab icon='github'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded color='tw'>
                <MDBIcon size='lg' fab icon='linkedin'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded color='dribbble'>
                <MDBIcon size='lg' icon='file-pdf'></MDBIcon>
              </MDBBtn>
            </MDBCol>
            </div>
          </div>
        </div>
      </div>


    </MDBContainer>
  );
}
