import Portfoliomain from './components/portfoliomain';
import { MDBTooltip, MDBIcon } from 'mdbreact'

function App() {
  return (
    <>
      <Portfoliomain />
      <footer className="fixed-bottom pt-3 pb-2 bg-dark white-text">
        <MDBTooltip placement='bottom' domElement style={{ display: 'inline' }} >
          <a className='m-2 white-text'
            href='/'>
            <i>
             © Julius Markauskas, 2022
            </i>
          </a><span>Portfolio</span>
        </MDBTooltip>
        <MDBTooltip placement='bottom' domElement style={{ display: 'inline' }} >
          <a className='m-2 white-text'
            href='https://github.com/Juliusm9791' target='_blank'>
            <strong>
              <MDBIcon fab icon='github' />
            </strong>
          </a><span>GitHub</span>
        </MDBTooltip>
        <MDBTooltip placement='bottom' domElement style={{ display: 'inline' }} >
          <a className='m-2 white-text'
            href='https://www.linkedin.com/in/julius-markauskas-795aa0103/' target='_blank'>
            <strong>
              <MDBIcon fab icon='linkedin' />
            </strong>
          </a><span>Linkedin</span>
        </MDBTooltip>
        <MDBTooltip placement='bottom' domElement style={{ display: 'inline' }} >
          <a className='m-2 white-text'
            href='https://juliusm9791.github.io/Portfolio/assets/pdf/Julius_Markauskas_resume1.pdf' target='_blank'>
            <strong>
              <MDBIcon icon='file-pdf' />
            </strong>
          </a><span>Resume</span>
        </MDBTooltip>
      </footer>
    </>
  );
}

export default App;