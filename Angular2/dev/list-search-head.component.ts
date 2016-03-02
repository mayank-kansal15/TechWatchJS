import {Component} from 'angular2/core';

@Component({
    selector: 'list-search-head',
    template: `
    	<thead>
          <tr>
              <th>
                 <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
              </th>
              <th className="title">
                 Title
              </th>
              <th>
                 Description
              </th>
          </tr>
      </thead>
    `,
})
export class ListSearchHead {

}	