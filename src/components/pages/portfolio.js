import React from 'react';
import { MDBContainer } from 'mdbreact';
import Card from './card';



export default function Portfolio() {

  return (

    <MDBContainer className='mt-4 mb-4'>
      <h1 className="text-center mb-4">Portfolio</h1>
      <Card />
    </MDBContainer>
  );
}