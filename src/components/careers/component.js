import React, { useEffect } from "react";

const ParentComponent = (props) => {
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

  return (
		<div className="container careers-wrapper">
			<h3 className="page-title">Careers</h3>
			<div>Lets change the world together.</div>
			<hr/>
			<div>
			Do you want to be without a mission for the rest of your life, or do you want to come work with us and change the world? <br/><br/>
			Lets Gtok is looking for creative, beautiful, innovative brains to come together for one common vision; to attain the unattainable goal of making people more 'human' and the world a kinder place.<br/><br/>
			It is not a 9-5 job, it is a passion. For a person who craves variety, welcomes high levels of collaboration, and has an enterprising attitude, we are the perfect fit. <br/><br/>
			Lets Gtok is the world's only network to share and sell feelings/emotions.
			</div>
			<hr className="divider"/>
			<h3 className="page-title">Available positions</h3>
			<ul className="section">
				<li className="section-title">Junior Full Stack Developer Intern &nbsp;<small><a href="assets/jobs/junior_developer.txt" download className="text-violet">Specifications</a></small></li>
				<li className="section-title d-none">Content Writer Intern &nbsp;<small><a href="assets/jobs/content_writer_intern.txt" download className="text-violet">Specifications</a></small>
				</li>
				<li className="section-title">Social Media Marketing Ambassador &nbsp;<small><a href="assets/jobs/social_media_ambassador.txt" download className="text-violet">Specifications</a></small></li>
			</ul>
			<div>
				If there isn't an open position for you, don't worry! You can e-mail your resume to <a href="mailto:letsgtok@gmail.com" className="text-violet">letsgtok@gmail.com</a> and lets us know how you can help grow and build Lets Gtok in your way, why you would be a great addition to our team.
			</div>
		</div>
  );
};

export default ParentComponent;
