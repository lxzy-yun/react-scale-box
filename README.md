#### 基于react，可以改变大小的外框
```$cmd
npm i react-scale-box
```

#### 使用方式
```$js
import ScaleBox from 'react-scale-box';

...
render() {
    return (
      <ScaleBox>
        <div className={'screen'}>
          你的页面内容
        </div>
      </ScaleBox>
    )
  }
```
#### props
###### width: 设计的页面宽度，默认1920
###### height: 设计的页面高度，默认1080
