// 資料來源：https://blog.kdchang.cc/2016/04/04/react-react-native-es5-es6-cheat-sheet/

// 1. Modules

// ES5
var React = require('react');
var MyComponent = require('./MyComponent');

module.exports = MyComponent;

// ES6+
import React from 'react';
import MyComponent from './MyComponent';

export default class MyComponent extends React.Compoent {}


// 2. Classes

// ES5
var Photo = React.createClass({
    render: function() {
      return (
          <div>
              <img alt={this.props.description} src={this.props.src} />
          </div>
        );
    }
});
ReactDOM.render(<Photo />, document.getElementById('main'));

// ES6+
class Photo extends React.Component {
    render() {
      return <img alt={this.props.description} src={this.props.src} />;
    }
}
ReactDOM.render(<Photo />, document.getElementById('main'));


// 3. Method definition

// ES5
var Photo = React.createClass({
    handleClick: function(e) {},
    render: function() {}
});

//ES6+
class Photo extends React.Component {
    handleClick(e) {}
    render() {}
}


// 4. Property initializers

// ES5：使用 propTypes 和 getDefaultProps 來定義 props 的預設值和型別
var Todo = React.createClass({
    getDefaultProps: function() {
        return {
            checked: false,
            maxLength: 10,
        };
    },
    propTypes: {
        checked: React.PropTypes.bool.isRequired,
        maxLength: React.PropTypes.number.isRequired
    },
    render: function() {
        return();
    }
});

// ES6+：使用 class 中的 static 來定義
class Todo extends React.Component {
    static defaultProps = {
        checked: false,
        maxLength: 10,
    };
    static propTypes = {
        checked: React.PropTypes.bool.isRequired,
        maxLength: React.PropTypes.number.isRequired
    };
    render() {
        return();
    }
}


// 5. State

// ES5：使用 getInitialState 初始化 state
var Todo = React.createClass({
    getInitialState: function() {
        return {
            maxLength: this.props.maxLength,
        }
    }
})

// ES6+：在建構式初始化
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: this.props.maxLength,
        }
    }
}


// 6. Arrow functions

/* 
   ES5：在 React.createClass() 下，預設幫你綁定好 method 的 this，所以毋須自行綁定。
        下方的例子，callback function handleButtonClick 中的 this 是指到 component 
        的 instance，而非觸發事件的物件，但這種綁定容易讓人誤解
*/

var TodoBtn = React.createClass ({
    handleButtonClick: function(e) {
        this.setState({ showOptionsModal: true });
        // 這個 this 指到 component 的實例 (instance)，而非 button
    },
    render: function() {
        return(
            <div>
                <Button onClick={this.handleButtonClick}>{this.props.label}</Button>
            </div>
        )
    }
})


// ES6+：推薦使用 bind 綁定 this 或是使用 arrow function (它會綁定當前的 scope 的 this context)

// 用法一
class TodoBtn extends React.Component {
    handleButtonClick(e) {
        this.setState({toggle: true});
        // 確認綁定 this 指到 component instance
    };
    render() {
        return (
            /* 這邊可以用 this.handleButtonClick.bind(this) 手動綁定
               或是 Arrow functions () => {} 用法
            */
            <div>
                <Button onClick={this.handleButtonClick.bind(this)} onClick={(e) => {this.handleButtonClick(e)}}>{this.props.label}</Button>
            </div>
        )
    }
}

// 用法二
class TodoBtn extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
}