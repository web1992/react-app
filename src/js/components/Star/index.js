import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import star from './star_for_comment_full.png';
import starEmpty from './star_for_comment_empty.png';
class Star extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        console.log(this.props.remarkScore);
        var score = this.props.remarkScore;


        var oneStarScore = 2;// 一颗星星2分
        
        var count = parseInt(this.props.remarkScore / 2.0);
        console.log(count);
        var data = [count];
      
        for (let i = 0; i < count; i++) {
            data[i] = i;
        }
        var scoreStr = new String(score);
        var x = scoreStr.split('.')[1];
        console.log(x);

        var photos = data.map(function () {
            return <img src={star} className='starSize' />
        });
        var starEmptyElement = null;
        //if (x >= 5 && count!=5) {
            // 添加半颗星
            starEmptyElement = <img src={starEmpty} className='starSize' />
        //}
        return (
            <div>
                {photos}{starEmptyElement}
            </div>
        );

    }

}

export default Star;