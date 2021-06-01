import { useState, useEffect } from "react";
import { storage } from "config/firebase";

function SectionTwoComponent() {
  const [ feelingsImg, setFeelingsImg ] = useState(0);
  const [ activitiesImg, setActivitiesImg ] = useState(0);
  const [ earnImg, setEarnImg ] = useState(0);
  const [ anonymityImg, setAnonymityImg ] = useState(0);
  const [ accFeeling, setAccFeeling ] = useState(0);
  const [ accActivity, setAccActivity ] = useState(0);
  const [ accEarn, setAccEarn ] = useState(0);
  const [ accAnonymity, setAccAnonymity ] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child('images').listAll();
      let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
      return Promise.all(urlPromises);
    }

    const loadImages = async () => {
      const urls = await fetchImages();
      for (var i = 0; i < urls.length; i++) {
        if (urls[i].includes("feelings_image")) {
          setFeelingsImg(urls[i])
        }
        if (urls[i].includes("activities_image")) {
          setActivitiesImg(urls[i])
        }
        if (urls[i].includes("earn_image")) {
          setEarnImg(urls[i])
        }
        if (urls[i].includes("anonymity_image")) {
          setAnonymityImg(urls[i])
        }
      }
    }
    loadImages();
  }, [])

  return (
    <div>
      <div className="section-two-wrapper d-none d-sm-block">
        <ul className="nav nav-pills my-3 justify-content-around" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-feelings-tab" data-toggle="pill" href="#pills-feelings" role="tab" aria-controls="pills-feelings" aria-selected="true">
              <span>Share <br/> feelings</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-activities-tab" data-toggle="pill" href="#pills-activities" role="tab" aria-controls="pills-activities" aria-selected="false">
              <span>Post <br/> activities</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-earn-tab" data-toggle="pill" href="#pills-earn" role="tab" aria-controls="pills-earn" aria-selected="false">
              <span>Earn</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-anonymity-tab" data-toggle="pill" href="#pills-anonymity" role="tab" aria-controls="pills-anonymity" aria-selected="false">
              <span>Choose <br/> anonymity</span>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-feelings" role="tabpanel" aria-labelledby="pills-feelings-tab">
            <div className="row">
              <img className="img col-12 col-sm-6" src={feelingsImg} alt="1" />
              <p className="col-12 col-sm-6 overlay-text">
              We are all emotional beings who crave closeness, and expressing our feelings allows us to get closer to our loved ones. <br/><br/>
              Sharing your feelings and experiences is liberating, and Lets Gtok provides you with a perfect platform to do so.
              </p>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-activities" role="tabpanel" aria-labelledby="pills-activities-tab">
            <div className="row">
              <img className="img col-12 col-sm-6" src={activitiesImg} alt="1" />
              <p className="col-12 col-sm-6 overlay-text">
              Are you reading your favorite writer’s novel, cooking one of your mom’s classics, or just binging that latest series? <br/><br/>
              Then, it’s the right time for you to share those activities with your friends at Lets Gtok and connect with fellow others.
              </p>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-earn" role="tabpanel" aria-labelledby="pills-earn-tab">
            <div className="row">
              <img className="img col-12 col-sm-6" src={earnImg} alt="1" />
              <p className="col-12 col-sm-6 overlay-text">
              Your feelings and experiences are like your personal literature, both exclusive and precious. <br/><br/>
              We want you to give out these assets at a price worth it to them. All you have to do is create an asset, choose a price, and share.
              </p>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-anonymity" role="tabpanel" aria-labelledby="pills-anonymity-tab">
            <div className="row">
              <img className="img col-12 col-sm-6" src={anonymityImg} alt="1" />
              <p className="col-12 col-sm-6 overlay-text">
                Have you ever wished you could express how you feel or what you are going through without revealing your identity?<br/><br/>
                Come to Lets Gtok and share feelings, opinions, or experiences freely and anonymously.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-two-wrapper mobile d-sm-none">
        <div className="accordion">
          <div className="card colapse my-4" data-toggle="collapse" data-target="#feelings" aria-expanded="true" aria-controls="feelings" onClick={e => setAccFeeling(!accFeeling)}>
            <img className="img col-12" src={feelingsImg} alt="1" />
            <div className="row caption">
              <div className="col-8 left">Share feelings</div>
              <div className="col-4 right">
                <img className={`col-12 ${ accFeeling ? "rotate-0" : "rotate-90"}`} src={require("assets/svgs/double_arrow_down.svg").default} alt="1" />
              </div>
            </div>
          </div>
          <div id="feelings" className="collapse" aria-labelledby="feelings" data-parent="#accordionExample">
            <div className="card">
              <div className="card-body">
              We are all emotional beings who crave closeness, and expressing our feelings allows us to get closer to our loved ones. <br/><br/>
              Sharing your feelings and experiences is liberating, and Lets Gtok provides you with a perfect platform to do so.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">
          <div className="card colapse my-4" data-toggle="collapse" data-target="#activities" aria-expanded="true" aria-controls="activities" onClick={e => setAccActivity(!accActivity)}>
            <img className="img col-12" src={activitiesImg} alt="1" />
            <div className="row caption">
              <div className="col-8 left">Share activities</div>
              <div className="col-4 right">
                <img className={`col-12 ${ accActivity ? "rotate-0" : "rotate-90"}`} src={require("assets/svgs/double_arrow_down.svg").default} alt="1" />
              </div>
            </div>
          </div>
          <div id="activities" className="collapse" aria-labelledby="activities" data-parent="#accordionExample">
            <div className="card">
              <div className="card-body">
              Are you reading your favorite writer’s novel, cooking one of your mom’s classics, or just binging that latest series? <br/><br/>
              Then, it’s the right time for you to share those activities with your friends at Lets Gtok and connect with fellow others.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">
          <div className="card colapse my-4" data-toggle="collapse" data-target="#earn" aria-expanded="true" aria-controls="earn" onClick={e => setAccEarn(!accEarn)}>
            <img className="img col-12" src={earnImg} alt="1" />
            <div className="row caption">
              <div className="col-8 left">Earn</div>
              <div className="col-4 right">
                <img className={`col-12 ${ accEarn ? "rotate-0" : "rotate-90"}`} src={require("assets/svgs/double_arrow_down.svg").default} alt="1" />
              </div>
            </div>
          </div>
          <div id="earn" className="collapse" aria-labelledby="earn" data-parent="#accordionExample">
            <div className="card">
              <div className="card-body">
              Your feelings and experiences are like your personal literature, both exclusive and precious. <br/><br/>
              We want you to give out these assets at a price worth it to them. All you have to do is create an asset, choose a price, and share.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion">
          <div className="card colapse my-4" data-toggle="collapse" data-target="#anonymity" aria-expanded="true" aria-controls="anonymity" onClick={e => setAccAnonymity(!accAnonymity)}>
            <img className="img col-12" src={anonymityImg} alt="1" />
            <div className="row caption">
              <div className="col-8 left">Choose anonymity</div>
              <div className="col-4 right">
                <img className={`col-12 ${ accAnonymity ? "rotate-0" : "rotate-90"}`} src={require("assets/svgs/double_arrow_down.svg").default} alt="1" />
              </div>
            </div>
          </div>
          <div id="anonymity" className="collapse" aria-labelledby="anonymity" data-parent="#accordionExample">
            <div className="card">
              <div className="card-body">
                Have you ever wished you could express how you feel or what you are going through without revealing your identity?<br/><br/>
                Come to Lets Gtok and share feelings, opinions, or experiences freely and anonymously.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwoComponent;
