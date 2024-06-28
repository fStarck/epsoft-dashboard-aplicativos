import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Pie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        legend: {
          fontSize: '18px',
          position: 'bottom',
          horizontalAlign: 'center',
          itemMargin: {
            horizontal: 10,
            vertical: 0
          },
          labels: {
            colors: "#111",
          }
        },
        dataLabels: {
          style: {
            fontSize: '18px',
          },
        }

      },
    }
  }

  render() {
    const { series, labels, width } = this.props;

    return (
      <div className="pie">
        <Chart options={{ ...this.state.options, labels: labels }} series={series} type="pie" width={width} />
      </div>
    );
  }
}

export default Pie;
