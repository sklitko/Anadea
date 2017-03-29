import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import FormTask from './FormTask';
import AddFormTask from './AddFromTask';
//import samples from '../sample';
import base from '../base'

class App extends React.Component {

    constructor() {
        super();
        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.showAddFormTask = this.showAddFormTask.bind(this);
        this.showEditFormTask = this.showEditFormTask.bind(this);
        this.state = {
            tasks: {},
            task: {},
            addFormTask: false,
            editFormTask: false
        }

    }

    showAddFormTask() {
        this.setState({addFormTask: true, editFormTask: false});
    }

    showEditFormTask() {
        this.setState({editFormTask: false});
    }


    addTask(task) {
        const tasks = {...this.state.tasks};
        const timestamp = Date.now();
        tasks[`task-${timestamp}`] = task;
        this.setState({tasks});
        this.setState({addFormTask: false});
    }

    componentWillMount() {
        // this.setState({
        //     tasks: samples
        // });
        this.ref = base.syncState('/',{
            context: this,
            state: 'tasks'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }






    removeTask(key) {
        this.setState({editFormTask: false, addFormTask: false});
        const tasks = {...this.state.tasks};
        tasks[key] = null;
        this.setState({tasks});
    }

    updateTask(key, updateTask) {
        const tasks = {...this.state.tasks};
        tasks[key] = updateTask;
        this.setState({tasks});
        const task = {};
        task[key] = updateTask;
        this.setState({task});
    }

    editTask(key) {
        this.setState({editFormTask: true, addFormTask: false});
        const task = {};
        task[key] = this.state.tasks[key];
        this.setState({task});
    }




    render() {
        return (
            <div className="anadea">
                <Header />
                <Tasks
                    tasks={this.state.tasks}
                    removeTask={this.removeTask}
                    editTask={this.editTask}
                    showAddFormTask={this.showAddFormTask}
                />
                { (this.state.editFormTask) ?
                    <FormTask updateTask={this.updateTask}
                              task={this.state.task}
                              showEditFormTask={this.showEditFormTask} /> : ''
                }

                { (this.state.addFormTask) ?
                    <AddFormTask addTask={this.addTask}/> : ''
                }

            </div>
        )
    }
}

export default App