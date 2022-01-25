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
              // src='https://media-exp1.licdn.com/dms/image/C5603AQHHvY_CzF_i2g/profile-displayphoto-shrink_200_200/0/1517076701870?e=1648684800&v=beta&t=_13AnBfLuLFwI-pSP-o5qtyG7_ZWhBo7rgTagOLqpuA'
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
                <a className="btn btn-outline-light text-dark mb-4"
                  href='https://github.com/Juliusm9791' target='_blank'>
                  <MDBIcon size='lg' fab icon='github'></MDBIcon>
                </a>
                <a className="btn btn-outline-light text-dark mb-4"
                  href='https://www.linkedin.com/in/julius-markauskas-795aa0103/' target='_blank'>
                  <MDBIcon size='lg' fab icon='linkedin'></MDBIcon>
                </a>
                <a className="btn btn-outline-light text-dark mb-4"
                  href='https://juliusm9791.github.io/Portfolio/assets/pdf/Julius_Markauskas_resume1.pdf' target='_blank'>
                  <MDBIcon size='lg' icon='file-pdf'></MDBIcon>
                </a>
              </MDBCol>
            </div>
          </div>
        </div>
      </div>


    </MDBContainer>
  );
}
