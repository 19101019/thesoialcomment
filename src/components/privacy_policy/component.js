import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ParentComponent = (props) => {
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, []);

  return (
		<div className="container privacy-policy-wrapper">
			<h3 className="page-title">Privacy Policy</h3>
			<div>Learn more about how Lets Gtok collects and uses data and your rights as a Lets Gtok user.</div>
			<hr/>
			<p>
				At letsgtok.com we understand the importance of protecting your privacy. Our Privacy Policy covers our treatment of personal information collected when anyone is on our site or uses the services we provide; it neither addresses nor applies to individuals or third party practices over which we have no control. This includes, but is not limited to, cookies which may be used by our advertisers. letsgtok.com only collects information pertinent to our website; as such, our stated goal is to customise your experience and let you get the most out of what we offer. To that end:
				<ul>
					<li>
					For your security and privacy, your information is protected with a password created by you.
					</li>
					<li>
					You will always have access to your personal information and you may edit or delete it at any time.
					</li>
					<li>
						In an effort to protect children, users must be at least 16 years old to use our website.
					</li>
				</ul>
			</p>
			<hr className="divider"/>
			<p className="section">
				<div className="section-title">Information Collected Upon Registration:</div>
				<div className="section-description">
				When you create or re-configure a user account with Lets Gtok, you provide some personal information, such as your username, password, and email address. Some of this information (i.e., your username and profile picture) is listed publicly on our Website, including on your profile page and in search results.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Email Communications with Us:</div>
				<div className="section-description">
				As part of the Services, you may receive email and other communications from us. Administrative communications relating to your Account (e.g., for purposes of Account recovery or password reset) are considered part of the Services and your Account, which you may not be able to opt-out from receiving. Note that we will never email you to ask for your password or other Account Information; if you receive such an email, please forward it to us.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Posts, Messages, Replies and other Public Information:</div>
				<div className="section-description">
				Our Services are primarily designed to help you share information and get support. Most of the information you provide us is information you are asking us to make public. This includes the posts and comments you create and the metadata provided therein, such as when you commented many other bits of information that result from your use of the Services. Our default is almost always to make the information you provide public for as long as you do not delete it from letsgtok.com. Your public posts and comments may be searchable by search engines. When you share information or content via the Services, you should think carefully about what you are making public.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Information Sharing and Disclosure:</div>
				<div className="section-description">
				<b>Business Transfers:</b> In the event that Lets Gtok is involved in a bankruptcy, merger, acquisition, reorganisation or sale of assets, your information may be sold or transferred as part of that transaction. The promises in this Privacy Policy will apply to your information as transferred to the new entity.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Modifying Your Personal Information:</div>
				<div className="section-description">
				If you are a registered user of our Services, we provide you with tools and account settings to access or modify the personal information you provided to us and associated with your account. You can also permanently delete your Lets Gtok account. Please email us at letsgtok@gmail.com to delete your posts and delete your account at the same time. Note: Lets Gtok changes your settings immediately. However, old links may appear on Google and other search engines because they have cached old content in their search index. Lets Gtok has no control over this, but you can send search engines a request to take down your information.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Our Policy Towards Children:</div>
				<div className="section-description">
				Our Services are not directed to persons under 16. If you become aware that your child has provided us with personal information without your consent, please contact us at letsgtok@gmail.com. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we take steps to remove such information and terminate the child's account.
				Cookies and Web Beacons: Lets Gtok may also use certain kinds of technology such as cookies and Web beacons to collect information. Among other things, the use of cookies and Web beacons enables Lets Gtok to improve its Services and emails by identifying the areas and features which are most popular and by counting the number of computers, mobile phones or other devices accessing letsgtok.com, personalizing and improving the experience, recording preferences, and allowing the User to visit letsgtok.com without re-entering his/her member ID and/or password each time. A cookie is a small amount of data which is sent to the browser of the User from a Web site’s computers and stored on their computer’s hard drive. Most browsers automatically accept cookies as the default setting. The User can choose to modify his or her browser setting in order to reject Lets Gtok cookies or to prompt them before accepting a cookie by editing browser options.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Law and Harm:</div>
				<div className="section-description">
				Not withstanding anything to the contrary in this Policy, we may preserve or disclose your information if we believe that it is reasonably necessary to comply with a law, regulation or legal request; to protect the safety of any person; to address fraud, security or technical issues; or to protect letsgtok.com’s rights or property. However, nothing in this Privacy Policy is intended to limit any legal defences or objections that you may have to a third party’s, including a government’s request to disclose your information.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Non-Private or Non-Personal Information:</div>
				<div className="section-description">
				We may share or disclose your non-private, aggregated or otherwise non-personal information, such as your public user profile information.
				</div>
			</p>
			<p className="section">
				<div className="section-title">Changes & Conditions of Use:</div>
				<div className="section-description">
					Changes or amendments to our Privacy Policy may occur now and again as warranted. However, information is always and only subject to the policy in place at the time it is collected. If and when we feel the need to execute a change in the Policy, we will announce the change on our website so that our users are made aware of the change and may act accordingly. Finally, the conditions of use (visits to our website, including the information collected, our use of that information, and any future disputes regarding issues of privacy) are subject to both this Policy and our <Link to="/tnc" className="text-violet">Terms of Service</Link>.
				</div>
			</p>
			Last updated on March 07, 2021
		</div>
  );
};

export default ParentComponent;
