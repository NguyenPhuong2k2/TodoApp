import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {


    state = {
        //khai bao mang array
        arrJobs : [
            {id:'1',title:'Developer',salary:'500'},
            {id:'2',title:'Tester',salary:'400'},
            {id:'3',title:'Project Managers',salary:'1000'}
        ]
    }
    //func add job vao arrJobs
    addNewJob = (job)=>{
        console.log("check from parent:",job)
        // let currentJob = this.state.arrJobs;
        // currentJob.push(job);//day job vao currentJob

        this.setState({
            arrJobs : [...this.state.arrJobs,job] //... ham copy phan job vao arrJob
            // arrJobs : currentJob
        })
    }
    deleteJob = (job) =>{
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }
    render() {
        console.log("call render:", this.state);
        let name = 'Phuong';
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob} //k can {()=> this.addNewJob(job)}
                />
                {/* react k can thuoc tinh id , name nhu backend */}
                <ChildComponent 
                    name = {this.state.firstName}
                    age = {"20"}
                    arrJob = {this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;