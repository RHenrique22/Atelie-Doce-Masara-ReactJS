import React from "react";
import ReactDOM from "react-dom";
import ControlledCarousel from "./component/Carousel";
import Catalogo from "./component/Catalogo";
import Menu from "./component/Navbar";

ReactDOM.render(<Menu />, document.getElementById("navbar"));
ReactDOM.render(<ControlledCarousel />, document.getElementById("init"));
ReactDOM.render(<Catalogo />, document.getElementById("catalogo"));
