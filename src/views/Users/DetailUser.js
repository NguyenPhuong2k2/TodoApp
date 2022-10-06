import react from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class DetailUser extends react.Component {
    state = {
        detailUser: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) { //this.props.match.params -> property of react-router-dom
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                detailUser: res && res.data && res.data.data ? res.data.data : {} //gan gia tri cho state ->res.data.data
            })
        }
    }

    handleBack = () =>{
        this.props.history.push('/user')// chuyen trang thong qua ham history.push -> function of react-router-dom
    }
    render() {
        let { detailUser } = this.state;
        let isEmptyObj = Object.keys(detailUser).length === 0;
        console.log('check props:', this.props);
        return (
            <>
                <div>Hello detail user with id:{this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>User's Name: {detailUser.first_name} {detailUser.last_name}</div>
                        <div>User's Email: {detailUser.email}</div>
                        <div>
                            <img src={detailUser.avatar}></img>
                        </div>
                        <button type="button" onClick={()=>this.handleBack()}>Back</button>
                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser); //HOC