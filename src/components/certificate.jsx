import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";
import printJs from "print-js";

class Certificate extends Component {
  state = {};
  onclickprint = event => {
    event.preventDefault();
    window.print();
    // printJs("printcertificate", "html");
  };
  render() {
    return (

      // <div className="w-100 pc ">

      //   <div id="printcertificate" className="w-75 cert">
      //     <div id="fname">
      //       <span>{this.props.sname}</span>
      //     </div>
      //     <div id="course">
      //       <style>{`@media print {#course{color:red;}}`}</style>
      //       <span>{this.props.course} </span>
      //     </div>
      //     <div id="txh">
      //       <span>{this.props.txh}</span>
      //     </div>
      //     <div id="id">
      //       <span>{this.props.id}</span>
      //     </div>
      //   </div>
      // <Button
      //   className="btn"
      //   onClick={this.onclickprint}
      //   variant="success"
      //   type="submit"
      // >
      //   Print
      // </Button>
      // </div>
      <div >
        <h1 style={{fontWeight:"bold",marginTop:'2rem'}}>
         { ! this.props.sname && "SAMPLE TEMPLATE"}
        </h1>
        <div className="main">
          <img src={'https://images.static-collegedunia.com/public/college_data/images/logos/16178789821.png'} width={150} />
          <p className="byline">CERTIFICATE OF COMPLETION</p>
          <div className="content">
            <p className="award"> AWARDED TO</p>
            <h1 className="name">{this.props.sname ? this.props.sname : "FULL NAME"}</h1>
            <p className="award"> FOR COMPLETING</p>
            <h2 className="name">{this.props.course ? this.props.course : "COURSE NAME"}</h2>
          </div>
          <p className="date">
            TRANSACTION ID{' '}
            <span className="bold">{this.props.txh ? this.props.txh : "TRANSACTION HEX"}</span>
          </p>
        </div>
        <Button
          className="btn"
          onClick={this.onclickprint}
          variant="success"
          type="submit"
        >
          Print
        </Button>
      </div>
    );
  }
}

export default Certificate;
