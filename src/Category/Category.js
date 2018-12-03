import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
            categories : [
                { "categoryId" : 1, "code" : "x", "displayText" : "xx"},
                { "categoryId" : 1, "code" : "x", "displayText" : "xx"}
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
                    {this.state.categories.map((category) => {
                    return <Button>{category.displayText}</Button>;
                     })}
            </div>
        );
    }
}

export default Category;

