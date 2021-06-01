import React from "react";
import { Switch, Route } from "react-router-dom";

import {
	HomeComponent,
	BlogsComponent,
	CareersComponent,
	TncComponent,
	PrivacyPolicyComponent
} from "components";

export const Routes = (props) => (
	<Switch>
		<Route exact path="/" component={HomeComponent} />
		<Route path="/home" component={HomeComponent} />
		<Route exact path="/careers" component={CareersComponent} />
		<Route exact path="/blogs" component={BlogsComponent} />
		<Route exact path="/tnc" component={TncComponent} />
		<Route exact path="/privacy_policy" component={PrivacyPolicyComponent} />
	</Switch>
);

export default Routes;
