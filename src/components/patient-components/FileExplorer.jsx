import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";

class FileExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="w-50 mx-auto">
        <div className="text-center p-0 mb-0 card-body">
          <List component="nav" aria-label="folders">
            {this.props.files.map((prop, key) => {
              return (
                <ListItem
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
        </div>
      </div>
    );
  }
}

export default FileExplorer;
