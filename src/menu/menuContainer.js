import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>        
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >          
          <Link to="/department" className='navbar-brand nav-link active'>Departments</Link>
          <Divider />
          <Link to="/employee" className='navbar-brand nav-link active'>Emloyees</Link>
          <Divider />
        </Drawer>
        <AppBar title="Intranet" style={{backgroundColor: '#077FFF'}}
            onLeftIconButtonClick={this.handleToggle} />  
      </div>
    );
  }
}