import React from "react";
import { HeaderComponent, FooterComponent, MobileFooterComponent } from "components";

const DefaultLayout = ({children}) => {
  return (
    <div>
    	<HeaderComponent />
    	<div className="my-5 pt-3">
		  	{children}
    	</div>
    	<FooterComponent />
      <MobileFooterComponent />
    </div>
  );
};

export default DefaultLayout;
