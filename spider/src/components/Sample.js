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
        // var list = '';
        // if(this.state.content) {
        //   list = this.state.content.map((item, index) => {
        //     return (
        //     <li key={index}>
        //         {/* <img src={ item.img }></img> */}
        //         <p><a href={ item.detailLink }>{ item.title }</a></p>
        //         <p>{ item.detailsItem} </p>
        //         <p>{ `${item.priceDet}W  ${item.unitPrice}` }</p>
        //         <p>{ item.commonAddress }</p>
        //     </li>);
        //   })
        // }
        return (
          <div className="App">
            {this.state.content ? 
            <div>{ JSON.stringify(this.state.content) }</div> : 
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