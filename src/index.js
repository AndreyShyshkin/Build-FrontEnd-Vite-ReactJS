import Layout from './layout/layout';
import Home from './screens/Home/home'

import ReactDOM from "react-dom";

ReactDOM.render(
    <Layout>
        <Home />
    </Layout>, 
    document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}
