import React from 'react';

class Tasks extends React.Component {

    constructor() {
        super();
        this.renderTask = this.renderTask.bind(this);
    }


    renderTask(key) {



        const task = this.props.tasks[key];

        return (
            <div className="task" key={key}>
                <span className="date">{(task.date)?task.date:''}</span>
                <span className="message"> {(task.service) ? 'I need ' + task.service : ''}
                    {(task.plumber) ? ((task.service) ? ' to ' : '') + task.plumber : ''}
                    {(task.desc) ? ((task.service || task.plumber) ? ', ' : '') + task.desc : ''}</span>
                <button className="btnEdit" onClick={() => this.props.editTask(key)}>EDIT</button>
                <button className="btnDelete" onClick={() => this.props.removeTask(key)}>DELETE</button>
            </div>
        )
    }


    render() {
        return (
            <div className="tasks">
                <button className="btn" onClick={()=>this.props.showAddFormTask()}>+ NEW TASK</button>
                {Object.keys(this.props.tasks).map(this.renderTask)}
            </div>
        )
    }
}

export default Tasks