import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button active className="btn-1 btn-outline-primary">
          Popular
        </Button>
        <Button className="btn-2 btn-outline-primary">Updated</Button>
        <Button className="btn-3 btn-outline-primary">Alphabetical</Button>
      </ButtonGroup>
    );
  }
}

export default Header;