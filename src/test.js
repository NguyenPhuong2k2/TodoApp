import React from "react";

class MyComponent extends React.Component {

    handleOnchaneInput = (event) => {
        this.setState({ //tự động cập nhật biến name (merge)
            name : event.target.value
        })
    }

    state = {
        name : 'Phuong',
        channel : 'VpPhuongPro'
    }

    render() {
        console.log("call render:",this.state);
        let name = 'Phuong';
        return (
            <Fragment>        
                <input value={this.state.name} type="text" 
                onChange={(event) => this.handleOnchaneInput(event)}></input>    
                <div className="fisrt">Hello My Component, {name}</div>  {/* JSX */}
                <div className="second">
                    My name : {this.state.name} {/*State*/ }
                </div>
                <div className="third">
                    My channel : {this.state['channel']}
                </div>
            </Fragment>
        )
    }
}

export default MyComponent;