##React

#技术点

React就是写组件

JUST THE UI        --V in MVC

VIRTUAL DOM        --虚拟DOM

DATA FLOW          --单项数据流

JSX                --JSX语法

Babel              --解析JSX https://babeljs.io

#参考文档

- [React's official site 官方网站](http://facebook.github.io/react)
- [React's official examples 官方](https://github.com/facebook/react)
- [论坛](http://react-china.org)
- [React (Virtual) DOM Terminology 虚拟dome术语](http://facebook.github.io/react/docs/glossary.html), by Sebastian Markbåge
- [The React Quick Start Guide 快速启动指南](http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html), by Jack Callister
- [Learning React.js: Getting Started and Concepts 开始和概念](https://scotch.io/tutorials/learning-react-getting-started-and-concepts), by Ken Wheeler
- [Getting started with React 开始react](http://ryanclark.me/getting-started-with-react/), by Ryan Clark
- [React JS Tutorial and Guide to the Gotchas 教程和陷阱](https://zapier.com/engineering/react-js-tutorial-guide-gotchas/), by Justin Deal
- [React Primer](https://github.com/BinaryMuse/react-primer), by Binary Muse
- [jQuery versus React.js thinking](http://blog.zigomir.com/react.js/jquery/2015/01/11/jquery-versus-react-thinking.html), by zigomir

#概要
- JSX-----用XML的语法写JS文件，解析时还是将JSX解析成js语句执行，我们只要会写JSX，不用关心如何解析
- DOM diff算法，狗屁算法，说是快，把DOM更改后变化的部分重新渲染，而不是渲染整个组件（虚拟dom的概念）
- props和state----组件的属性和状态，属性是只读的，状态是可以通过事件和钩子函数更改的
- 生命周期和钩子函数----在组件实例化，存在期和销毁期，分别给出不同的钩子函数，用来在某个时间点操作组件，以下列出了生命周期和钩子函数

实例化
- getDefaultProps默认属性
- getInitialState初始化状态
- componentWillMount组件即将安装
- render渲染DOM
- componentDidMount组件安装完成

存在期
- componentWillReceiveProps即将接受新属性
- shouldComponentUpdate基本用不到
- componentWillUpdate组件即将更新（属性和状态的更新都会触发这个钩子函数）
- componentDidUpdate组件更新完成（不要在will和did钩子函数中更改组件状态，会触发循环调用更新钩子函数，造成死循环）
- render重新渲染DOM

销毁
- componentWillUnmount销毁前，给你个机会把垃圾清理掉（在此钩子函数中无法设置state）

- 事件系统，遵循波峰命名法就可以了
- Focus Events(onFocus,onBlur)
- Form Events(onChange,onInput,onSubmit)
- Mouse Events(onClick,onContextMenu......)
- Selection Event(onSelect)
- Touch Events(onTouchCancel,onTouchStart,onTouchEnd,onTouchMove)
- Ui Events(onScroll)
- Wheel Events(onWheel)
- Media Events(onAbort,onCanPlay...)
- Image Events(onError,onLoad)

- mixin 封装组件中的公共方法，{mixins:[函数名]}传入组件类中就ok了

- DOM操作
- ReactDOM.unmountComponentAtNode(DOM元素)，我试验只能删除组件容器元素
- 定义ref，通过this.refs.name取到ReactDOM。通过ReactDOM.findDOMNode(this.refs.name)或者this.refs.name.getDOMNode()来获取DOM元素。使用document.getElementById这类原声JS方法也可以，但是如果获取不到会报错，而ReactDOM方法会返回null，不会报错。

#关于组件类
createClass创建组件类，createClass是一个函数，接收一个对象{}参数。{}中可以传入自定义函数和生命周期的钩子函数和mixins（公共）函数，钩子函数就是简单的闭包或者模块模式，可以很好的避免变量的污染，钩子函数会在特定的时间点自动被react调用，比如组件实例化后调用componentDidMount。自定义函数如何调用全看你这个programmer的心情，和平时写js没区别。mixins函数也是简单的把钩子函数和自定义函数return出来，供react使用。
