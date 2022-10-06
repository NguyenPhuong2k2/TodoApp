import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {

    handleDeleteUser = (user) =>{
        console.log('check user: ',user);
    }
    render() {
        let listUser = this.props.dataRedux;
        console.log('check props redux: ', this.props.dataRedux);
        return (
            <>
                <p>Hello my React's Home with Phuong</p>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.username} <span onClick={()=>this.handleDeleteUser(item)}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {//state cua redux
    return {//tra ve 1 object
        dataRedux: state.users //gan du lieu state ben rootRoducer
    }
}
export default connect(mapStateToProps)(Home); //tao ket noi giua react vs redux(chi trong component Home)
//ham connect la 1 HOC