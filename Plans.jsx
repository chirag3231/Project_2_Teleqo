import React, {Component} from 'react';
import {Image} from "../images";

class Plans extends Component {

  render() {
    const {data} = this.props;
    return (
      <div className="col-sm-6 col-md-3">
        <div className="single_what_we_do">
          <div className="top_line"/>
          <div className="what_we_do_figure names">{data.name}</div>
          <h4 className="what_we_do_title ">Plan</h4>
          <h6 className="what_we_do_title plan">${data.price}</h6>
          <h4 className="what_we_do_title ">Data</h4>
          <h6 className="what_we_do_title plan">{data.Data}</h6>
          <h4 className="what_we_do_title">Validity</h4>
          <h6 className="what_we_do_title plan">{data.Validity}</h6>
          <div className="what_we_do_content">
            {data.description}
          </div>
          <a className="what_we_do_icon"><i aria-hidden="true"
                                            className="fa fa-angle-right"/></a>
        </div>
      </div>
    );
  }
}

export default Plans;
