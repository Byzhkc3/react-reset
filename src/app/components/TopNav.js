/**
 * Created by yali on 16/12/11.
 */
import React from 'react';
import {Router,Route} from "babel-preset-react";
import {Link} from 'react-router';

export class TopNav extends React.Component{
    render(){
        return (
            <div>
                <div className="m-top-bar">
                    <div className="m-top-left">
                        <Link to='/index'>
                            <i className="iconfont icon-home"></i>

                        </Link>
                    </div>
                    <p className="m-top-title">
                        {this.props.title}
                    </p>
                    <div className="m-top-right">
                        <Link>
                            <i className="iconfont icon-set"></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
