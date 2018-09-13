import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Page/Header';
import TvMain from './Page/VedioTvMain';
import Footer from './Page/Footer';
import BioMain from './Page/BioMain';
import EventMain from './Page/events_main';
import GuestsMain from './Page/Guests_main';
import PhotosMain from './Page/Photos_main';
import IntroMAin from './Page/introMain';
import PublicMAin from './Page/Public-Speaking';
import MediaMain from './Page/mediaMain';
import './Page/CSS/app_style.css'


class App extends Component {

  render() {

    return (

      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Header title="Hello!" />} />
            <Route path="/events" render={() => <Header title="events" />} />
            <Route path="/tvshows" render={() => <Header title="TV Shows" />} />
            <Route path="/biography" render={() => <Header title="Biography" />} />
            <Route path="/guests" render={() => <Header title="Our Guests" />} />
            <Route path="/photos" render={() => <Header title="Photos" />} />
            <Route path="/videos" render={() => <Header title="Videos" />} />
            <Route path="/publicSpeaking" render={() => <Header title="Public Speaking" />} />
            <Route path="/media" render={() => <Header title="Media Training" />} />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/' component={IntroMAin} />
            <Route path='/events' component={EventMain} />
            <Route path='/tvshows' component={TvMain} />
            <Route path='/biography' component={BioMain} />
            <Route path='/guests' component={GuestsMain} />
            <Route path='/photos' component={PhotosMain} />
            <Route path='/videos' component={TvMain} />
            <Route path='/publicSpeaking' component={PublicMAin} />
            <Route path='/media' component={MediaMain} />
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
