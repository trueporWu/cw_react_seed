/**
 * Created by Truepor on 16/10/15.
 */

import React from 'react'

class Publisher extends React.Component{
    constructor(...args){
        super(...args);
    }

    render(){
        return (
            <div className="publisher">
                <div className="title">
                    <div>
                        <a href="#">这是一个文本框!</a>
                    </div>
                    <div className="tips">
                        <span>还可以输入</span><strong>140</strong>字
                    </div>
                </div>
                <div className="textElDiv">
                    <textarea></textarea>
                </div>
                <div className="btnWrap">
                    <a className="publishBtn" href="javascript:void(0)">发布</a>
                </div>
            </div>
        );
    }
}

export default Publisher;
