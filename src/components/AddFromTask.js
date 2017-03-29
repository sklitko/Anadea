import React from 'react';

class AddFormTask extends React.Component {

    constructor() {
        super();

        this.state = {};
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(e) {
        if (e.target.name === 'location') {
            this.setState({location: e.target.value})
        } else if (e.target.name === 'service') {
            this.setState({service: e.target.value})
        } else if (e.target.name === 'plumber') {
            this.setState({plumber: e.target.value})
        } else if (e.target.name === 'desc') {
            this.setState({desc: e.target.value})
        }
    }

    createTask(event) {
        const data = new Date();
        event.preventDefault();
        const task = {
            location: this.state.location || '',
            service: this.state.service || '',
            plumber: this.state.plumber || '',
            desc: this.state.desc || '',
            date: data.toDateString() +' '+data.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")

        };
        this.props.addTask(task);
        this.taskForm.reset();
        this.setState({
            location: null,
            service: null,
            plumber: null,
            desc: null
        });
    }


    render() {
        return (
            <div className="addformtask">
                <form className="form-task" ref={(input) => this.taskForm = input} onSubmit={(e) => this.createTask(e)}>
                    <div className="header-task">
                        <div className="header-text">NEW TASK</div>
                        <div
                            className="text">   {(this.state.service) ? 'I need a ' + this.state.service : ''}
                            {(this.state.plumber) ? ((this.state.service) ? ' to ' : '') + this.state.plumber : ''}
                            {(this.state.desc) ? ((this.state.service || this.state.plumber) ? ', ' : '') + this.state.desc : ''}
                        </div>
                        <div
                            className="location">{(this.state.location) ? 'My address is ' + this.state.location : ''}</div>
                        <button type="submit" className="createTask">CREATE TASK</button>
                    </div>
                    <div className="form-task-item location-task">
                        <div className="header-text">LOCATION</div>
                        <input type="text" name="location" className="address" placeholder="location"
                               ref={(input) => this.location = input} onChange={(e) => this.handleChange(e)}/>

                    </div>
                    <div className="form-task-item service-task">
                        <div className="header-text">SERVICE TYPE</div>


                        <label>
                            <input type="radio" name="service" value="an electician"
                                   ref={(input) => this.service = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><img src="./images/noun_321339_cc.svg" alt="Electician"/></div>
                            <span>Electician</span>
                        </label>
                        <label>
                            <input type="radio" name="service" value="a plumber"
                                   ref={(input) => this.service = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><img src="./images/noun_321315_cc.svg" alt="Plumber"/></div>
                            <span>Plumber</span>
                        </label>
                        <label>
                            <input type="radio" name="service" value="a gardener"
                                   ref={(input) => this.service = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><img src="./images/noun_321363_cc.svg" alt="Gardener"/></div>
                            <span>Gardener</span>
                        </label>
                        <label>
                            <input type="radio" name="service" value="a housekeeper"
                                   ref={(input) => this.service = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><img src="./images/noun_321399_cc.svg" alt="Housekeeper"/></div>
                            <span>Housekeeper</span>
                        </label>
                        <label>
                            <input type="radio" name="service" value="a cook"
                                   ref={(input) => this.service = input}
                                   onChange={(e) => this.handleChange(e)}/>
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
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Unblock is toilet</span></div>
                        </label>
                        <label>
                            <input type="radio" name="plumber" value="unblock is sink"
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Unblock is sink</span></div>
                        </label>
                        <label>
                            <input type="radio" name="plumber" value="fix a water leak"
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Fix a water leak</span></div>
                        </label>
                        <label>
                            <input type="radio" name="plumber" value="install a sink"
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Install a sink</span></div>
                        </label>
                        <label>
                            <input type="radio" name="plumber" value="install a shower"
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Install a shower</span></div>
                        </label>
                        <label>
                            <input type="radio" name="plumber" value="install a toilet"
                                   ref={(input) => this.plumber = input}
                                   onChange={(e) => this.handleChange(e)}/>
                            <div><span>Install a toilet</span></div>
                        </label>
                    </div>
                    <div className="form-task-item description-task">
                        <div className="header-text">
                            TASK DESCRIPTION
                        </div>
                        <textarea name="desc" className="desc" ref={(input) => this.desc = input}
                                  onChange={(e) => this.handleChange(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFormTask




