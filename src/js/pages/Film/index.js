import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Star from '../../components/Star';
// 数据模拟
let mockFilmJson = require('./data/mock-film.json');

let fimeInfo = mockFilmJson.data.returnValue[0];

let imag_url = 'https://gw.alicdn.com/tfscom/'
class Film extends React.Component {
    constructor(props) {
        super(props);
        console.log(mockFilmJson.api);
    }

    render() {
        return (
            <div id='filmList'>
                <div>
                    <img className='filmImage' src={imag_url + '/' +fimeInfo.poster} />
                </div>

                <h2 className='filmH2'>{fimeInfo.showName}</h2><span className='maxIonc'>xxx</span>
                <div className='remakr'>
                {/* 评分 */}
                     
                   <Star remarkScore={fimeInfo.remark}/> 
                </div>
                <p>导演: {fimeInfo.director}</p>
                <p>主演: {fimeInfo.leadingRole}</p>

                <hr />
                <div>
                    热评
                </div>
                <hr />
                <div>
                    解析
                </div>

                <div>
                    购票
                </div>
            </div>
        );

    }// edn render

}// end calss


export default Film;