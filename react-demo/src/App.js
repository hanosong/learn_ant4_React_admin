import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from '@/router/index.js';
import TopEggRoll from "./components/top-egg-roll";
import Contents from './components/contents/index';
import './App.less';
import MyRefTest from "./my_ref_test";
import { Button } from "antd";

const App = memo(() => {
  return (
    <div>
      <header className="header-wrapper">
        <TopEggRoll/>
      </header>
      <nav>
        <Contents/>
      </nav>
      <section>
        {useRoutes(routes)}
      </section>
      <footer style={{height: "20vh", marginTop: "10px"}}>
        返回主页~~~~~
      </footer>
    </div>

  )
});

export default App;
