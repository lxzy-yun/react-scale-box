import React, { Component } from 'react';
import './big-screen.less';
import ScaleBox from '../../components/scaleBox'

class Page extends Component {
  // constructor(p) {
  //   super(p)
  //   this.state={}
  // }

  componentDidMount() {

  }

  render() {
    return (
      <ScaleBox>
        <div className={'screen'}>
          <div className={'screen-title'}>
            <div className={'title-text'}>物流运输监控</div>
          </div>
        </div>
      </ScaleBox>
    )
  }
}

export default Page;
