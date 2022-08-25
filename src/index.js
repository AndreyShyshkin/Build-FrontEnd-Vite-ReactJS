import Layout from './layout/layout';
import Header from './screens/Header/header'

import ReactDOM from "react-dom";

ReactDOM.render(
    <Layout>
        <Header />
    </Layout>, 
    document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}
