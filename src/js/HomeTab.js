/**
 * Created by wushengping on 2017/6/11.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';

import {PullToRefresh, Page} from 'react-weui'
import 'weui';
import 'react-weui/lib/react-weui.min.css';

import {ColumnItem} from './ComponentStack'

import Actions from './network/Actions'

export default class HomeTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banners: [{
                img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg',
                des: "千纸鹤折叠技巧"
            },
                {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg', des: '蝙蝠的折叠技巧'},
                {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg', des: '枫叶的折叠技巧'}]
        }
        this._banners = this._banners.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        Actions.test().then(result => console.log(result))
    }

    _banners() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        // debugger
        const banners = this.state.banners || []
        return (<div>
                <Slider {...settings}>
                    {banners.map((item, idx) => {
                        return (<div style={{height: '180px'}}
                                     key={idx}
                                     onClick={() => console.log('click')}>
                            <img src={item.img} style={{width: screen.width, height: '180px'}}/>
                        </div>)
                    })}
                </Slider>
            </div>
        );
    }

    onPull() {
        return resolve => {
            setTimeout(() => {
                resolve()
            }, 1000)
        }
    }


    render() {
        return (
            <div style={{backgroundColor: '#f0f0f0'}}>
                <PullToRefresh onRefresh={this.onPull()} height={screen.height + 'px'}>
                    {this._banners()}
                    <ColumnItem />
                </PullToRefresh>
            </div>
        )
    }
}
