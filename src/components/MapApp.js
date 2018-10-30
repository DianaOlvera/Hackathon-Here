import React, { Component } from 'react';


class MapApp extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&poitxs=16&poitxc=black&poifc=yellow',
      }
      console.log(props)
    }

    
  
    render() {
        console.log(this.props.coord)
      return (
        <img
          src={ this.state.url
            + '&app_id=' + this.props.app_id
            + '&app_code=' + this.props.app_code
            + '&c=' + this.props.app_coord
            + '&z=' + this.props.app_zoom
            + '&t=' + 4
            + '&poi=19.4093239,-99.1618222, 19.4083929,-99.1594297, 19.4064791,-99.1623359,  19.4144295,-99.1620321'
            }
          alt="Todo Map"/>
      );
    }
  }
export default MapApp;