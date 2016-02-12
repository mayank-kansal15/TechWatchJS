import React from 'react';
import { render } from 'react-dom'
import ListSearchHead from '../components/listSearchHead'
import ListSearchDesc from '../components/listSearchDesc'

export default class ListSearchView extends React.Component{
	render(){
        var searchData = this.props.searchData;
		return(
			<div className="panel-body list-view">
                <div className="row">
                    <div className="col-sm-24">
                        <table className="table table-striped">
                        <ListSearchHead/>
	                        <tbody>
                                {
                                    searchData.map(function(obj, i){
                                        return(
                                            <ListSearchDesc key={i} uid={obj.id} email={obj.email} desc={obj.details}/>
                                        )
                                    })
                                }
	                        </tbody>
                		</table>
                	</div>
                </div>
            </div>
            )
	}
}