import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/Routes";
import { CookieNotification, DefaultLayout } from "components";

function App() {
  return (
    <div>
			<CookieNotification />
			<Router>
				<DefaultLayout>
					<Routes />
				</DefaultLayout>
			</Router>
    </div>
  );
}

export default App;
