import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.less'

function debounce(fn, delay) {
  let delays = delay || 500;
  let timer;
  return function () {
    let th = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delays);
  };
}

class Comp extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }
  static defaultProps = {
    width: 1920,
    height: 1080
  }

  constructor(p) {
    super(p)
    this.state = {
      scale: this.getScale()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setScale)
  }

  getScale = () => {
    const {width, height} = this.props
    let ww = window.innerWidth / width
    let wh = window.innerHeight / height
    return ww < wh ? ww : wh
  }
  setScale = debounce(() => {
    this.setState({scale: this.getScale()})
  })

  render() {
    const {width, height} = this.props
    const {scale} = this.state
    return (
      <div
        className={'scale-box'}
        style={{
          transform: `scale(${scale}) translate(-50%, -50%)`,
          WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
          width,
          height
        }}
      >
        {this.props.children}
      </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScale)
  }
}

export default Comp
