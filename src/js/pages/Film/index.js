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
            <div className='filmList'>
                <div className='filmImageDiv'>
                    <img className='filmImage' src={imag_url + '/' + fimeInfo.poster} />
                </div>
                <div className="filmDetail">
                    <div className='filmDesc'>
                        <div className='filmHeadDiv'>
                            <h4 className='filmH4 filmText'>{fimeInfo.showName}</h4><span className='maxIonc'>{fimeInfo.showMark}</span>
                        </div>

                        <div className='remakr'>
                            <Star remarkScore={fimeInfo.remark} />
                        </div>
                        <p className='filmText'>导演: {fimeInfo.director}</p>
                        <p className='filmText'>主演: {fimeInfo.leadingRole}</p>

                    </div>
                    <div className='filmBuy'>
                        <p>购票</p>
                    </div>
                </div>

            </div>
        );

    }// edn render

}// end calss


export default Film;