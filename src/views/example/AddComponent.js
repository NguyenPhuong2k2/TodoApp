import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("check data:", this.state);
        //check value input
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params");
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001), //lam tron id
            title: this.state.title,
            salary: this.state.salary
        })
        //lam trong input
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                {/* react k can thuoc tinh id , name nhu backend */}
                <form action="/action_page.php">
                    <label htmlFor="fname">Title's Job:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)} />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}
export default AddComponent;