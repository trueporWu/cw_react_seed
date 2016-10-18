/**
 * Created by Truepor on 16/10/17.
 */


import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';

/**
 * 样式
 * @type {{container: {textAlign: string, paddingTop: number}}}
 */
const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

/**
 * 主题
 */
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

/**
 * 主类
 */
class Main extends Component{

    /**
     * 构造函数
     * @param props
     * @param context
     */
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            startDate: null
        }
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    handleTouchTap = () => {
        this.setState({
            open: true
        });
    };

    handelTestBtn = () => {
        console.log("test Btn");

    };

    handelDateChange = (event, date) => {
        console.log("change Date");
        console.log(date);

        this.setState({
            startDate: date
        });
        console.log(this.state.startDate);
    };

    render() {
        // 定义按钮
        const standardActions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />,
            <FlatButton
                label="Test"
                primary={true}
                onTouchTap={this.handelTestBtn}
                keyboardFocused={true}
            />
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>

                    <Dialog
                        open={this.state.open}
                        title="Super Secret Password"
                        actions={standardActions}
                        onRequestClose={this.handleRequestClose}
                    >
                        1-2-3-4-5
                        <AppBar
                            title="Title"
                        />

                        <div>
                            <DatePicker
                                hintText="Portrait Dialog"
                                value={this.state.startDate}
                                onChange={this.handelDateChange}/>
                            <DatePicker hintText="Landscape Dialog" mode="landscape"/>
                            <DatePicker hintText="Dialog Disabled" disabled={true}/>
                        </div>

                    </Dialog>
                    <h1>Material-UI</h1>
                    <h2>example project</h2>
                    <RaisedButton
                        label="Super Secret Password"
                        secondary={true}
                        onTouchTap={this.handleTouchTap}
                    />
                </div>
            </MuiThemeProvider>
        );
    }


}

export default Main;