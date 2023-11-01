import React from "react";
class Todolist extends React.Component {
    constructor() {
        super();
        this.state={
            id:1,
            text:"My Task",
            completed:true,
        }
    }
    render(){
        const {text,completed} = this.state;
        return(
            <div>
               <input type="checkbox" checked={completed}></input>
               <label>{text}</label>
</div>
        );
    }
}
export default Todolist;