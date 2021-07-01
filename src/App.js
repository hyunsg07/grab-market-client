import 'antd/dist/antd.css';
import "./App.css"
import MainPageComponent from "./main";
import {Switch, Route, Link} from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from "./product";
import {Button} from "antd";
import {DownloadOutlined} from '@ant-design/icons'

function App() {
  return (
   <div>
     <div id="header">
      <div id="header-area">
        <Link to="/">
        <img src="/images/icons/logo.png"/>
        </Link>
        <Button size="large"
          onClick={function(){
              alert("업로드 클릭");
          }}
          icon={<DownloadOutlined/>}
          >상품 업로드
        </Button>
      </div>
    </div>
    <div id="body">

    <Switch>
      <Route exact={true} path={"/"}>
        <MainPageComponent/>
      </Route>
      <Route exact={true} path="/products/:id">
        <ProductPage/>
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage/>
      </Route>
    </Switch>

    </div>
        <div id="footer"></div>
    </div>
    
  );    
}

export default App;
