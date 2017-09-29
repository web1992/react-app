import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';

import hottest_weekly from './resources/hottest_weekly.png';
import mark_best from './resources/mark_best.png';

import Star from '../../components/Star';
// 数据模拟
let mockFilmJson = require('./data/mock-film.json');

let fimeInfo = mockFilmJson.data.returnValue[0];

const imag_url = 'https://gw.alicdn.com/tfscom/';

const url_json = 'https://api.maoyan.com/mmdb/movie/v3/list/hot.json?uuid=327E83F875CC98CEECFA2DD4B250DFE4F45D5D88507AD3792A3C58360030DA53&utm_source=AppStore&utm_term=7.8&utm_content=327E83F875CC98CEECFA2DD4B250DFE4F45D5D88507AD3792A3C58360030DA53&version_name=7.8&userid=601037841&utm_medium=iphone&movieBundleVersion=100&utm_campaign=AmovieBmovieD100H0&__reqTraceID=BB82CA39-EB5F-45E7-BF53-2F0CB549C84F&limit=12&ci=10&client=iphone&msid=893ADCD1-6001-47C8-8EE0-98A42908191C2017-09-28-17-57805';
// const url_json = 'http://localhost:3001/mmdb/movie/v3/list/hot.json?uuid=327E83F875CC98CEECFA2DD4B250DFE4F45D5D88507AD3792A3C58360030DA53&utm_source=AppStore&utm_term=7.8&utm_content=327E83F875CC98CEECFA2DD4B250DFE4F45D5D88507AD3792A3C58360030DA53&version_name=7.8&userid=601037841&utm_medium=iphone&movieBundleVersion=100&utm_campaign=AmovieBmovieD100H0&__reqTraceID=BB82CA39-EB5F-45E7-BF53-2F0CB549C84F&limit=12&ci=10&client=iphone&msid=893ADCD1-6001-47C8-8EE0-98A42908191C2017-09-28-17-57805';

class Film extends React.Component {
    constructor(props) {
        super(props);
        console.log(mockFilmJson.api);
        var instance = axios.create({
            baseURL: 'https://some-domain.com/api/',
            timeout: 1000,
            headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET,POST'}
          });

          instance.get(url_json)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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
