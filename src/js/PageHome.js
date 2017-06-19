/**
 * Created by wushengping on 2017/6/13.
 */
import React, { Component } from 'react';
import {Button,Tab, TabBarItem,Article} from 'react-weui';

import 'weui';
import 'react-weui/lib/react-weui.min.css';

import HomTab from './HomeTab'


export default class App extends Component {
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<i className="fa fa-weixin" aria-hidden="true"></i>} label="Tab1">
                    <HomTab />
                </TabBarItem>
                <TabBarItem icon={<i className="fa fa-weixin" aria-hidden="true"></i>} label="Tab2">
                    <Article>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<i className="fa fa-weixin" aria-hidden="true"></i>} label="Tab3">
                    <Article>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
            </Tab>
        );
    }
}