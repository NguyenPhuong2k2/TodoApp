import React from "react";

//CLASS COMPONENT

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs //neu showJobs = false ham nay se gan gia tri true cho showJobs, ngc lai
        })
    }
    handleOnClickDelete = (job)=>{
        this.props.deleteJob(job);
    }

    render() {
        console.log("check props:", this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        //cu phap ngan js: 
        //key : value
        let { name, age, arrJob } = this.props; //ten bien phai giong ten khai bao props ben cha
        let showJobs = this.state.showJobs;
        return (
            <>
                {/* <div>My ChildComponent name: {name} - {age}</div> */}
                {/* <div>My ChildComponent name: {this.props.name} - {this.props.age}</div> */}
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div> /* {showJobs === false && <div><button onclick = {}>Show</button></div>}neu showJobs = false se thuc hien cong viec phia sau dau '&&' */
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJob.map((item, index) => {//tra ve 1 mang moi
                                    //if (item.salary >= 500){
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $  
                                            <></> <span onClick={()=>this.handleOnClickDelete(item)}>Delete</span>
                                        </div>
                                    )
                                    // }
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


//FUNCTION COMPONENT (arrow)
// const ChildComponent = (props) => {// dinh nghia props 
//     let { name, age, arrJob } = props; //ten bien phai giong ten khai bao props ben cha
//     return (                   //khai bao props khong can this.props
//         <Fragment>
//             <div className="job-lists">
//                 {arrJob.map((item, index) => {//tra ve 1 mang moi 
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })}
//             </div>
//         </Fragment>
//     )
// }
export default ChildComponent;