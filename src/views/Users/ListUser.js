import react from "react";
import axios from "axios";
import './ListUser.scss';
import {withRouter} from 'react-router-dom';

class ListUser extends react.Component {

    state = {
        listUser: []
    }
    async componentDidMount() { // async - await cu phap tranh bat dong bo trong js
        let res = await axios.get('https://reqres.in/api/users?page=1'); //lay data cua web api
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        console.log("check res: ", res.data.data);
    }

    handleViewDetail = (user) =>{
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">Fetch All List User
                <div className="title"></div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                onClick= {()=>this.handleViewDetail(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);