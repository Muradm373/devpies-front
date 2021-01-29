import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from '@material-ui/core/Collapse';


class FileExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({open: !this.state.open})
  };

  render() {
    return (
      <div className="w-50 mx-auto">
          <List component="nav" aria-label="folders">
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <li className="fas fa-hospital" />
              </ListItemIcon>
              <ListItemText primary={this.props.hospitalName} />
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {this.props.files.map((prop, key) => {
                  return (
                    <ListItem
                    className="ml-2"
                      button
                      selected={this.state.selectedHospital === prop ? 1 : 0}
                      onClick={() => {}}
                    >
                      <ListItemIcon>
                        <i className={`fas fa-file-${prop.fileExtension}`} />
                      </ListItemIcon>
                      
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
                              {prop.filename}
                            </Typography>
                            <br />
                            {`${prop.dateModified}`}
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
            </Collapse>
          </List>
      </div>
    );
  }
}

export default FileExplorer;
