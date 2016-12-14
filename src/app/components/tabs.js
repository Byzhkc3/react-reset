/**
 * Created by yali on 16/12/11.
 */
import React from 'react';
import {Router,Route} from "babel-preset-react";
import { Link } from "react-router";

export class Tabs extends React.Component{
    render(){
        return (
            <div>
                <div className="tabs">
                    <div className="tab tab-4">
                        <Link to="/index" activeClassName={'active'}>
                            <i className="iconfont icon-home"></i>
                            <p>首页</p>
                        </Link>>
                    </div>
                    <div className="tab tab-4">
                        <Link to="/Message" activeClassName={'active'}>
                            <i className="iconfont icon-advice"></i>
                            <p>消息</p>
                        </Link>
                    </div>
                    <div className="tab tab-4">
                        <Link to={'Dynamic'} activeClassName={'active'}>
                            <i className="iconfont icon-ding"></i>
                            <p>动态</p>
                        </Link>
                    </div>
                    <div className="tab tab-4">
                        <Link to={'/Collection'} activeClassName={'active'}>
                            <i className="iconfont icon-star"></i>
                            <p>收藏</p>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
};

