import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import hottest_weekly from './resources/hottest_weekly.png';
import mark_best from './resources/mark_best.png';

import Star from '../../components/Star';
// 数据模拟
let mockFilmJson = require('./data/mock-film.json');

let fimeInfo = mockFilmJson.data.returnValue[0];

const imag_url = 'https://gw.alicdn.com/tfscom/'
class Film extends React.Component {
    constructor(props) {
        super(props);
        console.log(mockFilmJson.api);
    }



    render() {

        let _filmList = [];
        let len = parseInt(mockFilmJson.data.returnValue.length);
        //console.log(len);
        for (let i = 0; i < len; i++) {
            let fi = mockFilmJson.data.returnValue[i];
            //console.log(fi);
            _filmList.push(<FilmList key={i} fimeInfo={fi} />);
        }

        return (
            <div>
                {_filmList}
            </div>

        );

    }// edn render


}// end calss


export default Film;


class FilmList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let filmInfo = this.props.fimeInfo;
        return (
            <div className='filmList'>
                <div className='filmImageDiv'>
                    <img className='filmImage' src={imag_url + '/' + filmInfo.poster} />
                </div>
                <div className="filmDetail">
                    <div className='filmDesc'>
                        <div className='filmHeadDiv'>
                            <h4 className='filmH4 filmText'>{filmInfo.showName}</h4><span className='maxIonc'>{filmInfo.showMark}</span>
                        </div>

                        <div className='remakr'>
                            <Star remarkScore={filmInfo.remark} />
                        </div>
                        <p className='filmText'>导演: {filmInfo.director}</p>
                        <p className='filmText'>主演: {filmInfo.leadingRole}</p>

                    </div>
                    <div className="filmAction">
                        <div className="filmTags">
                            <img src={hottest_weekly} alt="" />
                            <img src={mark_best} alt="" />
                        </div>
                        <div className='filmBuy'>
                            <p>购票</p>
                        </div>
                        <div className="fimlActivities">
                            {/* <span>{filmInfo.activities[0].activityTag}</span> */}
                        </div>
                    </div>

                </div>

            </div>
        );

    }// edn render

}
