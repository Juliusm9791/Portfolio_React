import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import fixTitleName from '../../utils/correctData';
import returnLink from '../../utils/images';


export default function Card() {

    const [repos, getRepos] = useState([]);

    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch("https://api.github.com/users/Juliusm9791/repos");
            const data = await response.json();

            getRepos(data);
        }
    }, []);

    // const [reposD, getReposD] = useState([]);

    // useEffect(() => {
    //     getDataD();

    //     async function getDataD() {
    //         const response = await fetch("https://api.github.com/repos/djdyer/fly-app");
    //         const dataD = [await response.json()];

    //         getReposD(dataD);
    //     }
    // }, []);

    const combineRepo = [...repos] || {};
    

    const renderedCards = combineRepo.map((repo) => {
        if (repo.name !== "Portfolio" && repo.name !== "prework-about-me" && repo.name !== "Readme_Generator" && repo.name !== "Team_Profile_Generator" && repo.name !== "Team_Profile_Generator_HTML" && repo.name !== "Note_Taker" && repo.name !== "Employee_Tracker" && repo.name !== "E-Commerce" && repo.name !== "Social_Network_API" && repo.name !== "Text_Editor" && repo.name !== "Portfolio_React" && repo.name !== "Redux_Store" && repo.name !== "Book_Search_Engine") {
            return (
                <MDBCol md='4' className='p-4' key={repo.id} >
                    <MDBCard>
                        <a href={repo.homepage} target='_blank'>
                            <MDBCardImage
                                top
                                src={returnLink(repo.name)}
                                overlay='black-light'
                                hover
                                waves
                                alt={returnLink(repo.name)}
                            /></a>
                        <MDBCardBody className='elegant-color white-text rounded-bottom'>
                            <hr className='hr-light' />
                            <MDBCardTitle>{fixTitleName(repo.name)}</MDBCardTitle>
                            <hr className='hr-light' />
                            <MDBCardText className='white-text'>
                                {repo.description}
                            </MDBCardText>
                            <a href={repo.svn_url} className='black-text d-flex justify-content-end'>
                                <h5 className='white-text'>
                                    <MDBIcon fab icon='github' />    Read more
                                    <MDBIcon icon='angle-double-right' className='ml-2' />
                                </h5>
                            </a>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            );
        }
    });


    return (<>
        {!combineRepo ? (<p>Loading ...</p>) : (
            <MDBRow>{renderedCards}</MDBRow>

        )};
    </>
    )
}