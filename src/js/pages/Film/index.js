import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// 数据模拟
let mockFilmJson = require('./data/mock-film.json');


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
                    <img className='filmImage' src={imag_url + 'i4/TB1SjYYSpXXXXaBapXXXXXXXXXX_.jpg'} />
                </div>

                <h2 className='filmH2'>xxxx</h2><span className='maxIonc'>xxx</span>
                <div>
                    评分
                </div>
                <p>导演</p>
                <p>主演</p>

                <hr />
                <div>
                    热评
                </div>
                <hr />
                <div>
                    解析
                </div>
            </div>
        );

    }// edn render

}// end calss


export default Film;