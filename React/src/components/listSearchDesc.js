import React from 'react';
import { render } from 'react-dom'

export default class ListSearchDesc extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            desc : false
        }
    }
    expandText(id){
        this.state.desc ? this.setState({desc: false}) : this.setState({desc: true});
    }
	render(){
        var view;
        if(this.state.desc){
            view = <div className="collapse in" id={"collapseExample" + this.props.uid} >
                            <p>
                                {this.props.desc}
                            </p>
                        </div>
        }else{
            view = undefined;
        }
		return(
			<tr>
                <td>
                    <input type="checkbox" id="blankCheckboxx" value="option1" aria-label="..." />
                </td>
                <td>
                    {this.props.email}
                </td>
                <td>
                    <p>
                        <a data-toggle="collapse" href="#collapseExample3" onClick={this.expandText.bind(this, this.props.uid)}>
                            More
                        </a>
                    </p>
                    {view}
                </td>
            </tr>
		)
	}
} 