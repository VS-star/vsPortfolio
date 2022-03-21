import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
     this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
    //--Branko Mijatovic Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGA.initialize("UA-154721739-1");
    ReactGA.pageview('brankomijatovic.com - Loading Screen');
    //--Branko Mijatovic Portfolio website Google analytics--
  }
    
  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Branko Mijatovic</title>
                <link rel="canonical" href="http://brankomijatovic.com/" />
                <meta name="description" content="Branko Mijatovic - Senior Front-End Developer | Full-Stack Developer" />
         </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
