import React from 'react';
import { MDBContainer, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

//style={{padding: "25px", borderRadius: "50%"}}
export default function About() {
  return (
    <MDBContainer className='mt-4 mb-4'>
      <h1 className="text-center mb-4">About Me</h1>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img  style={{margin: "25px"}}
              // src="https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg"
              src='https://media-exp1.licdn.com/dms/image/C5603AQEE7uXEfTePCQ/profile-displayphoto-shrink_200_200/0/1654901185826?e=1660176000&v=beta&t=4YVFNr54BJRP49K2XGhSUN5FBqFHVqdbRc2qF5BIalU'
              alt="JM avatar"
              className="img-fluid rounded-start rounded-circle border border-light"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title"><strong>I'm Julius Markauskas</strong></h2>
              <p className="card-text">
                Full Stack Web Developer and Digital Field Service Engineer with B.S. and M.S. in Computer Science. A fast learner with strong time and project management skills, broad experience in service and LEAN manufacturing. Strong troubleshooting and problem solving skills with an analytical mindset. Ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines. Top skills: JavaScript, HTML, CSS, and always eager to learn new things.</p>
              <p className="card-text">
                <strong>Developer skils:</strong> JavaScript, Node.js, jQuery, HTML, CSS, MySQL MongoDB, Sequelize, Express.js, Git, APIs, Jest, Bootstrap, Handlebars, React.js, GraphQL.
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
