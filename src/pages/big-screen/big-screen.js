import React, { Component } from 'react';
import './big-screen.less';
import ScaleBox from '../../components/scaleBox'

class Page extends Component {
  render() {
    return (
      <ScaleBox>
        <div className={'screen'}>
          <div className={'screen-title'}>道路监控示例图</div>
          <img
            className={'img'}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573179091&di=1f5525ce96fc8e42d9833fc63c97fdd2&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.xmsiyb.com%2Fuploads%2Fallimg%2F1808%2F1-1PQ3002325D8.jpg"
            alt=""/>
        </div>
      </ScaleBox>
    )
  }
}

export default Page;
