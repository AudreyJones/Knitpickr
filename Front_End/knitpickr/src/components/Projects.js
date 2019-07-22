import React, {Component} from 'react'

class Projects extends Component {
    render() {
        const currentProjects = 'something'

        return(
             <div>
                 <span>
                     These are your current projects:
                     {currentProjects}
                 </span>
             </div>
        )
    }
}

export default Projects