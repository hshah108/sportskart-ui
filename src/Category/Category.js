import React, { Component } from 'react';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
            categories : [
                { "categoryId" : 1, "code" : "tt", "displayText" : "Table Tennis"},
                {"categoryId" : 2, "code" : "x", "displayText" : "XX"}

            ]
        }
    }

    componentDidMount() {

        let fetchData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin":"*"
            }
        }
        
        let url = 'http://localhost:8090/sportskart/service/categories';
        fetch(url, fetchData).
            then(response => response.json()).then((repos) => {
                console.log(repos);
                console.log(repos.length);
                this.setState({
                  categories : repos,
                  isLoaded : true
                });
              });
        
           
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{this.state.categories[1].displayText}</li>
                </ul>
            </div>
        );
    }
}

export default Category;

