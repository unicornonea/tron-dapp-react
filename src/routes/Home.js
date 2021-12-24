import React from 'react';

import { Spin } from 'antd';
import intl from 'react-intl-universal';
import HomePage from '../components/Home';
import Config from '../config';
import { inject, observer } from 'mobx-react';

@inject('network')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: window.localStorage.getItem('lang') || intl.options.currentLocale
    };
  }

  componentDidMount = async () => {
    this.props.network.setData({ routeName: 'home' });
  };

  render() {
    return <HomePage />;
  }
}

export default Home;
