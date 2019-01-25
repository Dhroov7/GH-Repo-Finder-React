import React, { Component } from 'react';
import langObj from "../languages.json"

class Form extends Component {
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Language:</label>
                    <select class="form-control">
                        {langObj.languages.map(langauge => <option>{langauge}</option>)}
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Type of Repository:</label>
                    <select class="form-control">
                        <option>Most Popular</option>
                        <option>Most Contributed</option>
                        <option>Most help wanted</option>
                        <option>Least Popular</option>
                        <option>Least Contributed</option>
                        <option>Least help wanted</option>
                    </select>
                </div>
            </form>
        );
    }
}

export default Form;