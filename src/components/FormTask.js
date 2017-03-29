import React from 'react';


class FormTask extends React.Component {

    constructor() {
        super();

        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.submitTask = this.submitTask.bind(this);


    }

    submitTask(e) {
        e.preventDefault();
        this.props.showEditFormTask();
    }

    handleChange(e, key) {
        const task = this.props.task[key];
        const updateTask = {
            ...task,
            [e.target.name]: e.target.value
        };
        this.props.updateTask(key, updateTask);

    }

    renderForm(key) {

        const task = this.props.task[key];

        return (
            <form key={key} className="form-task" onSubmit={(e) => this.submitTask(e)}>
                <div className="header-task">
                    <div className="header-text">EDIT TASK</div>
                    <div
                        className="text">   {(task.service) ? 'I need ' + task.service : ''}
                        {(task.plumber) ? ((task.service) ? ' to ' : '') + task.plumber : ''}
                        {(task.desc) ? ((task.service || task.plumber) ? ', ' : '') + task.desc : ''}
                    </div>
                    <div
                        className="location">{(task.location) ? 'My address is ' + task.location : ''}</div>
                    <button type="submit" className="createTask">SAVE TASK</button>
                </div>
                <div className="form-task-item location-task">
                    <div className="header-text">LOCATION</div>
                    <input type="text" name="location" className="address" placeholder="location" value={task.location}
                           onChange={(e) => this.handleChange(e, key)}/>

                </div>
                <div className="form-task-item service-task">
                    <div className="header-text">SERVICE TYPE</div>


                    <label>
                        <input type="radio" name="service" value="an electician"
                               checked={task.service === 'an electician'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><img src="./images/noun_321339_cc.svg" alt="Electician"/></div>
                        <span>Electician</span>
                    </label>
                    <label>
                        <input type="radio" name="service" value="a plumber"
                               checked={task.service === 'a plumber'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><img src="./images/noun_321315_cc.svg" alt="Plumber"/></div>
                        <span>Plumber</span>
                    </label>
                    <label>
                        <input type="radio" name="service" value="a gardener"
                               checked={task.service === 'a gardener'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><img src="./images/noun_321363_cc.svg" alt="Gardener"/></div>
                        <span>Gardener</span>
                    </label>
                    <label>
                        <input type="radio" name="service" value="a housekeeper"
                               checked={task.service === 'a housekeeper'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><img src="./images/noun_321399_cc.svg" alt="Housekeeper"/></div>
                        <span>Housekeeper</span>
                    </label>
                    <label>
                        <input type="radio" name="service" value="a cook"
                               checked={task.service === 'a cook'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><img src="./images/noun_321395_cc.svg" alt="Cook"/></div>
                        <span>Cook</span>
                    </label>

                </div>
                <div className="form-task-item plumber-tasks">
                    <div className="header-text">
                        PLUMBER TASKS
                    </div>
                    <label>
                        <input type="radio" name="plumber" value="unblock is toilet"
                               checked={task.plumber === 'unblock is toilet'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Unblock is toilet</span></div>
                    </label>
                    <label>
                        <input type="radio" name="plumber" value="unblock is sink"
                               checked={task.plumber === 'unblock is sink'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Unblock is sink</span></div>
                    </label>
                    <label>
                        <input type="radio" name="plumber" value="fix a water leak"
                               checked={task.plumber === 'fix a water leak'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Fix a water leak</span></div>
                    </label>
                    <label>
                        <input type="radio" name="plumber" value="install a sink"
                               checked={task.plumber === 'install a sink'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Install a sink</span></div>
                    </label>
                    <label>
                        <input type="radio" name="plumber" value="install a shower"
                               checked={task.plumber === 'install a shower'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Install a shower</span></div>
                    </label>
                    <label>
                        <input type="radio" name="plumber" value="install a toilet"
                               checked={task.plumber === 'install a toilet'}
                               onChange={(e) => this.handleChange(e, key)}/>
                        <div><span>Install a toilet</span></div>
                    </label>
                </div>
                <div className="form-task-item description-task">
                    <div className="header-text">
                        TASK DESCRIPTION
                    </div>
                    <textarea name="desc" className="desc"
                              value={task.desc}
                              onChange={(e) => this.handleChange(e, key)}/>
                </div>
            </form>
        )
    }


    render() {
        return (
            <div>
                {Object.keys(this.props.task).map(this.renderForm)}
            </div>
        )
    }
}

export default FormTask

