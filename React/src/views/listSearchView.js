'use strict';

import React from 'react';
import ListSearchHead from '../components/listSearchHead'
import ListSearchDesc from '../components/listSearchDesc'

export default class ListSearchView extends React.Component{

	render(){
		return (
			<div className="panel-body list-view">
                <div className="row">
                    <div className="col-sm-24">
                        <table className="table table-striped">
                        <ListSearchHead />
	                        <tbody>
                                {
                                    this.props.searchData.map((obj, i) => <ListSearchDesc key={obj.id} uid={obj.id} email={obj.email} desc={obj.details}/> )
                                }
	                        </tbody>
                		</table>
                	</div>
                </div>
            </div>
        )
	}
}