#### 做大屏的数据可视化项目的时候，用此组件包裹可实现同比例缩放
```$cmd
npm i react-scale-box
or
yarn add react-scale-box
```

#### 使用方式
```$js
import ScaleBox from 'react-scale-box';

...
render() {
    return (
      <ScaleBox width={1920} height={1080}>
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


###### width和height表示设计稿的宽高尺寸，设定好后，就能保持这个比例展示你的内容，实现跟网易有数的数据可视化项目差不多的效果
