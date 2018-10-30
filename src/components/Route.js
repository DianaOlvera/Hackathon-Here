
class RouteApp extends Class{

    platform(){
    new H.service.Plataform({
        'app_id': '{YOUR_APP_ID}',
        'app_code': '{YOUR_APP_CODE}'
    })
    }

    defaultLayers(){
    platform.createDefaultLayers()
    }

    map(){
        new H.Map ( map, this.defaultLayers.normal.map,{
            zoom: 10,
            center: { lat: 52.51, lng: 13.4 }
        });
    }
    routinParameters(){
        const obj = {
            'mode': 'fastest;car',
            'waypoint0': 'geo!50.1120423728813,8.68340740740811',
            'waypoint1': 'geo!52.5309916298853,13.3846220493377',
            'representation': 'display'
        }
    }

    render(){
        const { map } = <div> </div>
        return()
    }
}

   
  var onResult = function(result) {
    var route,
      routeShape,
      startPoint,
      endPoint,
      linestring;
    if(result.response.route) {
    // Pick the first route from the response:
    route = result.response.route[0];
    // Pick the route's shape:
    routeShape = route.shape;
  
    // Create a linestring to use as a point source for the route line
    linestring = new H.geo.LineString();
  
    // Push all the points in the shape into the linestring:
    routeShape.forEach(function(point) {
      var parts = point.split(',');
      linestring.pushLatLngAlt(parts[0], parts[1]);
    });
  
    // Retrieve the mapped positions of the requested waypoints:
    startPoint = route.waypoint[0].mappedPosition;
    endPoint = route.waypoint[1].mappedPosition;
  
    // Create a polyline to display the route:
    var routeLine = new H.map.Polyline(linestring, {
      style: { strokeColor: 'blue', lineWidth: 10 }
    });
  
    // Create a marker for the start point:
    var startMarker = new H.map.Marker({
      lat: startPoint.latitude,
      lng: startPoint.longitude
    });
  
    // Create a marker for the end point:
    var endMarker = new H.map.Marker({
      lat: endPoint.latitude,
      lng: endPoint.longitude
    });
  
    // Add the route polyline and the two markers to the map:
    map.addObjects([routeLine, startMarker, endMarker]);
  
    // Set the map's viewport to make the whole route visible:
    map.setViewBounds(routeLine.getBounds());
    }
  };
  
  // Get an instance of the routing service:
  var router = platform.getRoutingService();
  
  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult,
    function(error) {
      alert(error.message);
    });
  Dupdo
  