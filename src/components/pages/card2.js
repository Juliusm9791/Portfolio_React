import React, { useState } from 'react';
import './card2.css';


export default function About() {

  // document.getElementsByClassName(".flipper").on(function () {
  //   var target = $(event.target);
  //   if (target.is("a")) {
  //     //follow that link
  //     return true;
  //   } else {
  //     $(this).toggleClass("flip");
  //   }
  //   return false;
  // });

  // const appContext = useContext('/')
  const [flip, setCard] = useState({
   class: "",
   
  });
  
  const flipCard = () => {
    setCard(() => {
      return {class: "flip" }
    });
  }


  return (
    <section className="custom" >
      <div className="container">
        <div className="row">
          <div className={"flipper" + " " +"col-sm-3" + " " +  flip.class}>
            <div className="cardcustom">123
              <div className="front">
                <p>
                  src="http://dummyimage.com/150x110/999/fff"
                </p>
                <p>Lorem consectetu adidfsicdding elitdafdd. At quaessrat iste mollitia aspedriores.</p>
                <button onClick={flipCard} className="btn btn-default bottom" type="submit">Learn More</button>
              </div>
              <div className="back">
                <p>here is some information on the back of card one. I would like to <a href="http://davidwalsh.name/css-flip">link some text</a> for people to follow on the back of the card - but the click action messes that up.</p>
                <div className="goback">
                  <p>back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={"flipper" + " " +"col-sm-3" + " " +  flip.class}>
            <div className="cardcustom">123
              <div className="front">
                <p>
                  src="http://dummyimage.com/150x110/999/fff"
                </p>
                <p>Lorem consectetu adidfsicdding elitdafdd. At quaessrat iste mollitia aspedriores.</p>
                <button onClick={flipCard} className="btn btn-default bottom" type="submit">Learn More</button>
              </div>
              <div className="back">
                <p>here is some information on the back of card one. I would like to <a href="http://davidwalsh.name/css-flip">link some text</a> for people to follow on the back of the card - but the click action messes that up.</p>
                <div className="goback">
                  <p>back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

