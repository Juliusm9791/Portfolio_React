import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import fixTitleName from '../../utils/correctData';
import returnLink from '../../utils/images';
import ReactCardFlipper from "react-card-flipper";


export default function Card() {
    const ignoreList = ["Portfolio_React", "Portfolio", "prework-about-me", "Readme_Generator", "Team_Profile_Generator", "Team_Profile_Generator_HTML", "Note_Taker", "Employee_Tracker", "E-Commerce", "Social_Network_API", "Text_Editor", "Book_Search_Engine", "Redux_Store", "tech-news-java-api", "News-python", "My-School"]

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

    console.log(combineRepo)
    const renderedCards = combineRepo.map((repo) => {
        if (!ignoreList.includes(repo.name)) {
            return (
                <ReactCardFlipper width="350px" height="600px" behavior="click" levitate={true} key={repo.id}>
                    <div>
                        <MDBCol className='p-4'  >
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
                                    <hr className='hr-light' />
                                    <h6 className='white-text d-flex justify-content-end'>Tecnnology used
                                        <MDBIcon icon='angle-double-right' className='ml-2' />
                                    </h6>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                    <div>
                        <MDBCol className='p-4'  >
                            <MDBCard>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    {/* <hr className='hr-light' /> */}
                                    <MDBCardTitle>Tecnnology used:</MDBCardTitle>
                                    <hr className='hr-light' />
                                    <MDBCardText className='white-text'>
                                        <ul>
                                            {repo.topics.map((texh) => { return <li key={texh}>{texh}</li> })}
                                        </ul>
                                    </MDBCardText>
                                    <hr className='hr-light' />
                                    <h5 className='white-text d-flex justify-content-end'>
                                        Return
                                        <MDBIcon icon='angle-double-right' className='ml-2' />
                                    </h5>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                </ReactCardFlipper>
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