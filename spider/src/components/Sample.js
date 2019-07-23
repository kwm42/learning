import React, { Component } from 'react';
import { Button } from 'antd';

class Sample extends Component {
    constructor() {
        super();
        this.state = {
            content: undefined
        }
    }

    render() {
        var list = '';
        if(this.state.content) {
          list = this.state.content.map((item, index) => {
            return (<li key={index}>{ index }</li>);
          })
        }
        return (
          <div className="App">
            {this.state.content ? 
            <div>{ list }</div> : 
            <div>no content.... loading...</div>}
    
            <Button type="primary" onClick={ ()=>this.fetchData() }>fetch data</Button>
          </div>
        );
      }

    fetchData() {
        fetch(`http://localhost:3001/hello`)
            .then(res => res.json())
            .then(res => {
                let { content } = res;
                this.setState({
                    content: content
                })
            })
    }
}

export default Sample;