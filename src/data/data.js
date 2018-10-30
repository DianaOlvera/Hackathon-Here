import React, {Component} from 'react';

const map = 'https://image.maps.api.here.com/mia/1.6/mapview?app_code=PP2nozpXhsRLbtdZWSoWxg&app_id=75jBHP2yBdJfYYdm26wV'
const route = 'https://route.api.here.com/routing/7.2/calculateroute.json?app_code=PP2nozpXhsRLbtdZWSoWxg&app_id=75jBHP2yBdJfYYdm26wV&waypoint0=geo!52.5,13.4&waypoint1=geo!52.5,13.45&mode=fastest;car;traffic:disabled'



class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    
    componentDidMount(){
        fetch(map)
        .then(response => response)
        .then(data => {
            this.setState({data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        console.log(this.state.data)
        return (
            <section>
                
            <p>Aca el mapa</p>
            </section>
        )
    }
}

export default Data;