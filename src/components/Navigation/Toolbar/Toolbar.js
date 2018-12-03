import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Toolbar extends Component {

    constructor () {
        super();
        this.state = {
            s:[]
        };
    }
    componentDidMount() {
        console.log("component did mound called");
        let fetchData = {
            method : "GET",
            headers : {
                "content-type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin" : "*"
            }
        }

        let url = "http://localhost:8090/sportskart/service/categories";
        fetch(url,fetchData)
        .then(response => response.json())
        .then(sports => {
            console.log(sports);
            this.setState({s:sports});
        })
    }

    render() {
        return (
            <div>
                {
                   //<Button>{this.state}</Button>
                    //this.state.sports
                    this.state.s.map(
                        (sport) => {
                            return <Button>{ sport.displayText}</Button>;
                     })
                }
                
            </div>
        );
    }
}

export default Toolbar;