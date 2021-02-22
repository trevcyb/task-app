import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task, taskno) => {
                return(
                    <li key={uniqid()}>{taskno}{task}
                    <button type="button" key={uniqid()}>Delete Task</button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Overview;