import SectionTwoComponent from "./section_two/component";
import SectionFourComponent from "./section_four/component";

function HomeComponent(props) {
  return (
    <div className="container-fluid">
      <div className="section-one-wrapper">
        <div className="row align-items-center">
          <div className="col-12 col-sm-5 left-block">
            <h1 className="header">
              Share feelings <br/> <h4> without being judged</h4>
    	    	</h1>
            <div className="description">
              A community made to support you and build a safe online space for your feelings and experiences.
            </div>
    	    	<a href="https://app.letsgtok.com" target="_blank" rel="noopener noreferrer" className="col-12 col-sm-7 btn btn-violet d-none d-sm-block">Join the community</a>
          </div>
          <div className="col-12 col-sm-7 right-block">
            <img src={require("assets/svgs/homepage_3.svg").default} alt="1" />
          </div>
        </div>
      </div>
      {/* Tabs section starts here */}
      <SectionTwoComponent />
      {/* Tabs section ends here */}
      {/* Messge goes here */}
      <div className="section-three-wrapper">
        A community to spread positivity
      </div>
      {/* Map section starts here */}
      <SectionFourComponent />
      {/* Map section starts here */}
      {/* Join button goes here */}
      <div className="section-five-wrapper text-center d-none d-sm-block">
        <a href="https://app.letsgtok.com" target="_blank" rel="noopener noreferrer" className="btn btn-violet">Start Sharing</a>
      </div>
    </div>
  );
};

export default HomeComponent;
