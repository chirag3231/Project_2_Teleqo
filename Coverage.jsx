import React, {Component} from 'react';
// import HeatMap from "react-heatmap-grid";
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap'
const _ = require('lodash');

class Coverage extends Component {
  constructor() {
    super(...arguments);
    this.heatmapData = [
        [73, 89, 86, 69],
        [93, 88, 73, 78],
        [93, 78, 62, 64],
        [74, 66, 97, 69],
        [77, 86, 87, 57],
        [93, 88, 73, 78],
        [56, 69, 21, 86],
        [85, 77, 83, 81],
        [60, 77, 74, 68],
        [93, 88, 73, 78],
        [41, 55, 73, 23]
       
    ];
}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text">
            <h4>Network Coverage</h4>
            <p>When it comes to select a network carrier, the first thing that comes in mind is the network coverage. Teleqo provides you coverage map of Canada’s major networks carriers throughout the Canada.</p>
            <p>
            Teleqo’s heatmap helps you in the following:
            <ul className="plans-info">
              <li>
              	If you love to stream videos online, listening music and surfing internet, then most probably you want to search the network carrier providing best coverage in your area.
                </li><li>If your phone shows full signal strength but you are facing problems in calling, sending messages and using mobile data, you can use Teleqo to decide whether there is a problem in your network coverage or your phone.

              </li>
            </ul>
            </p>
            <h5>
            We have used the data from Statista.com to make best coverage map for you. 
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text home-agile-text1">
            <div>
              

<HeatMapComponent id='heatmap' titleSettings={{
            text: 'Network strength in provinces of Canada',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        }} 
        xAxis={{
            labels: ['BC','ON','AB','NS','NL','PE','MB','QC','NB','SK','YT','NT','NU'],
            multiLevelLabels: [
              {
                textStyle: {
                color: 'black',
                fontWeight: 'Bold'
            },
            border: { type: 'Brace', color: '#000' },
                  categories: [
                      { start: 0, end: 10, text: 'Province', },
                      
                  ]
              },
          ]
            }}
            
            yAxis={{
            labels: ["Bel", "Rog", "Tel", "Fre"],
            multiLevelLabels: [
              { 
                
                textStyle: {
                    color: 'black',
                    fontWeight: 'Bold'
                },border: { type: 'Brace', color: '#000' },

                  categories: [
                      { start: 0, end: 3, text: 'Networks', },
                      
                  ]
              },
          ]  
          

        }} paletteSettings={{
          palette: [
              { color: '#c2e7ec', label: 'Low', value: 35 },
              { color: '#4ab7c8', label: 'Moderate', value: 60 },
              { color: '#15464d', label: 'High', value: 100 }
          ],
          type: "Gradient"
         
      }} legendSettings={{
          position: 'Right',
         
          enableSmartLegend: true,
          toggleVisibility: true
      }} 
      dataSource={this.heatmapData}>
        
      <Inject services={[Legend]}/>
            <Inject services={[Legend, Tooltip, Adaptor]}/>
            </HeatMapComponent>
    
            </div>
          </div>
        </div>
      </div>
    );
  }
  cellRender(args) {
    args.displayText = args.value + '% ';
}
}

export default Coverage;

