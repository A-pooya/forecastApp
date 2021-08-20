import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyle from './tableStyle';




const ShowWeatherStatus = ({forecastData}) => {
  console.log(forecastData);
    const classes = useStyle();

    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temperature(Minimum)</TableCell>
            <TableCell align="right">Temperature(Maximum)</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Night</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecastData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.Temperature.Minimum.Value}(F)</TableCell>
              <TableCell align="right">{row.Temperature.Maximum.Value}(F)</TableCell>
              <TableCell align="right">{row.Day.IconPhrase}</TableCell>
              <TableCell align="right">{row.Night.IconPhrase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
}
 
export default ShowWeatherStatus;