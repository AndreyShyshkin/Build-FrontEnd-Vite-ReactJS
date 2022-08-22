import App from './screens/app';
import Layout from './layout/layout';

import ReactDOM from "react-dom";

ReactDOM.render(
    <Layout>
        <App />
    </Layout>, 
    document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}