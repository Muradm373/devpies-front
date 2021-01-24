import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHospital: undefined,
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    };
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <div
          className="card w-25 shadow-sm "
          style={{ position: "absolute", zIndex: "1000", height: "100vh" }}
        >
          <div className=" text-center">
            <img
              class="card-img-top"
              src="//maps.gstatic.com/tactile/pane/default_geocode-1x.png"
            />
            <h5
              className="ml-3"
              style={{
                position: "absolute",
                marginTop: "-50px",
                color: "#FFFFFF",
              }}
            >
              Hospitals
            </h5>

            <div className="text-center p-0 mb-0 card-body">
              <List component="nav" aria-label="folders">
                {this.props.hospitals.map((prop, key) => {
                  return (
                    <ListItem
                      button
                      selected={this.state.selectedHospital === prop ? 1 : 0}
                      onClick={() =>
                        this.setState({
                          selectedHospital: prop,
                          center: { lat: prop.lat, lng: prop.lng },
                        })
                      }
                    >
                      <ListItemText
                        primary={prop.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary"
                            >
                              Clinic
                            </Typography>
                            {` - ${prop.address}`}
                            <br />
                            {`${prop.timetable} | ${prop.phoneNumber}`}
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="info" size="small">
                          <i className="fas fa-ellipsis-v fa-1x color-gray" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACzerxz-Ag5fhoL3EUvyLwfU7rkU64zHQ" }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.selectedHospital !== undefined ? (
            <AnyReactComponent
              lat={this.state.selectedHospital.lat}
              lng={this.state.selectedHospital.lat.lng}
              text={this.state.selectedHospital.name}
            />
          ) : (
            <></>
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
