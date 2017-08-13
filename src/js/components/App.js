import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCLeft from './pc/pc_left.js';
import PCMiddle from './pc/pc_middle';
import PCRight from './pc/pc_right';
import PCDetails from './pc/pc_details';
import PcToolBar from './pc/pc_tool_bar'
import MobileHeader from './mobile/mobile_header';
import MobileNav from './mobile/mobile_nav';
import MobileNewsItem from './mobile/mobile_news_item';
import MobileSwipe from './mobile/mobile_swipe';

import 'normalize.css';
import 'css/reset.css';
import 'css/app.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        {/*PC展示*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <Router>
            <div id="main-wrapper">
              <PCLeft />
              <Route exact path="/" component={PCMiddle} />
              <Route path="/channel/:id" component={PCMiddle} />
              <Route path="/search/:keyword" component={PCMiddle} />
              <Route path="/details/:newsId" component={PCDetails} />
              <PCRight />
              <PcToolBar />
            </div>
          </Router>
        </MediaQuery>
        {/*移动端展示*/}
        <MediaQuery query="(max-device-width: 1224px)">
          <Router>
            <div>
              <MobileHeader />
              <MobileNav />
              <MobileSwipe />
              <MobileNewsItem />
            </div>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
