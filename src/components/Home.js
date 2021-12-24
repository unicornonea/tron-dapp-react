import React from 'react';
import isMobile from 'ismobilejs';
import intl from 'react-intl-universal';
import { inject, observer } from 'mobx-react';
import HeaderH from './HeaderH';
import { Spin, Modal, Checkbox } from 'antd';
import TransactionModal from './Modals/Transaction';
import UserList from './UserList';
import FooterPage from '../components/Footer';
import '../assets/css/home.scss';

@inject('network')
@inject('system')
@inject('dapp')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: window.localStorage.getItem('lang') || intl.options.currentLocale,
      mobile: isMobile(window.navigator).any
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}
  getUserList = () => {
    this.props.dapp.getUserList();
  };

  getMarketData = () => {};

  render() {
    return (
      <div className="ly">
        <HeaderH instantActions={this.getMarketData} mountedActions={this.getUserList}></HeaderH>
        <div className="main-content">
          <UserList></UserList>
          <TransactionModal></TransactionModal>
          <FooterPage></FooterPage>
        </div>
      </div>
    );
  }
}

export default Home;
