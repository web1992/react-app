import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import starIonic from './star_for_comment_full.png';
import starEmptyIonic from './star_for_comment_empty.png';
class Star extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        //console.log(this.props.remarkScore);
        var score = this.props.remarkScore;


        var oneStarScore = 2;// 一颗星星2分

        var count = parseInt(this.props.remarkScore / 2.0);
        //console.log(count);
        var starsArr = [];
       
        for (let i = 0; i < count; i++) {
            starsArr.push(<img  key={i} src={starIonic} className='starSize' />);
        }
        var starEmptyElement = null;
        if (count != 5) {
            // 添加半颗星
            starEmptyElement = <img src={starEmptyIonic} className='starSize' />
        }
        return (
            <div>
                {starsArr}{starEmptyElement}{score}
            </div>
        );

    }

}

export default Star;