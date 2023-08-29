import { Component } from "react";



class Check extends Component{

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
       


}
clicked(){
    console.log(clicked);
}
render() {
    return (
        <div>
           <div className = "row">
                    <button className="btn btn-warning" onClick="clicked()"> ClickToCheck</button>
                 </div>
            
        </div>
    )
}

}
export default Check