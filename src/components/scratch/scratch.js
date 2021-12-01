import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";

const rows = [
  {
    FlightNumber: 'XY1',
    From: 'LAX',
    To: 'CAI',
    ArrivalTime: '30/12/2021',
    DepartureTime: '29/12/2021',
    EconomySeatsNo: 1,
    BusinessSeatsNo: 1,
    FirstSeatsNo: 1,
    EconomyAvailableSeatsNo: 1,
    BusinessAvailableSeatsNo: 1,
    FirstAvailableSeatsNo: 2,
    FirstClassPrice: 750,
    BusinessClassPrice: 1900,
    EconomyClassPrice: 200000,
    AirportDepartureTerminal: 1,
    AirportArrivalTerminal: 2,
    Date: '5/11/2021',
    BaggageAllowance: 2,
  },
  {
    FlightNumber: 'AB1',
    From: 'LAX',
    To: 'CAI',
    ArrivalTime: '30/12/2021',
    DepartureTime: '29/12/2021',
    EconomySeatsNo: 1,
    BusinessSeatsNo: 1,
    FirstSeatsNo: 1,
    EconomyAvailableSeatsNo: 3,
    BusinessAvailableSeatsNo: 23,
    FirstAvailableSeatsNo: 1,
    FirstClassPrice: 750,
    BusinessClassPrice: 1900,
    EconomyClassPrice: 200000,
    AirportDepartureTerminal: 1,
    AirportArrivalTerminal: 2,
    Date: '5/11/2021',
    BaggageAllowance: 2,
  },
  {
    FlightNumber: 'AC1',
    From: 'LAX',
    To: 'CAI',
    ArrivalTime: '30/12/2021',
    DepartureTime: '29/12/2021',
    EconomySeatsNo: 1,
    BusinessSeatsNo: 1,
    FirstSeatsNo: 1,
    EconomyAvailableSeatsNo: 1,
    BusinessAvailableSeatsNo: 1,
    FirstAvailableSeatsNo: 1,
    FirstClassPrice: 750,
    BusinessClassPrice: 1900,
    EconomyClassPrice: 200000,
    AirportDepartureTerminal: 1,
    AirportArrivalTerminal: 2,
    Date: '5/11/2021',
    BaggageAllowance: 2,
  },
  {
    FlightNumber: 'AD1',
    From: 'LAX',
    To: 'CAI',
    ArrivalTime: '30/12/2021',
    DepartureTime: '29/12/2021',
    EconomySeatsNo: 1,
    BusinessSeatsNo: 1,
    FirstSeatsNo: 1,
    EconomyAvailableSeatsNo: 1,
    BusinessAvailableSeatsNo: 1,
    FirstAvailableSeatsNo: 1,
    FirstClassPrice: 750,
    BusinessClassPrice: 1900,
    EconomyClassPrice: 200000,
    AirportDepartureTerminal: 1,
    AirportArrivalTerminal: 2,
    Date: '5/11/2021',
    BaggageAllowance: 2,
  }
];

function Row(props) {
  //const [row, setrow] = useState(props)
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  //style={{backgroundColor : '#D3D3D3'}}
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.FlightNumber}
        </TableCell >
        <TableCell >{row.From}</TableCell>
        <TableCell>{row.To}</TableCell>
        <TableCell>{row.ArrivalTime}</TableCell>
        <TableCell>{row.DepartureTime}</TableCell>
        <TableCell>{row.Date}</TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow >
                    <TableCell>Economy Class Seats</TableCell>
                    <TableCell>Economy Class Price $</TableCell>
                    <TableCell>Business Class Seats</TableCell>
                    <TableCell>Business Class Price $</TableCell>
                    <TableCell>First Class Seats</TableCell>
                    <TableCell>First Class Price $</TableCell>
                    <TableCell>Airport Departure Terminal</TableCell>
                    <TableCell>Airport Arrival Terminal</TableCell>
                    <TableCell>Baggage Allowance (kg)</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow >
                    <TableCell><div id='bloc1' style={{ color: 'blue' }}>{row.EconomyAvailableSeatsNo}</div> <div id='bloc2'>{'/' + row.EconomySeatsNo}</div> </TableCell>
                    <TableCell >{row.EconomyClassPrice}</TableCell>
                    <TableCell>{row.BusinessAvailableSeatsNo + '/' + row.BusinessSeatsNo}</TableCell>
                    <TableCell>{row.BusinessClassPrice}</TableCell>
                    <TableCell>{row.FirstAvailableSeatsNo + '/' + row.FirstSeatsNo}</TableCell>
                    <TableCell>{row.FirstClassPrice}</TableCell>
                    <TableCell>{row.AirportDepartureTerminal}</TableCell>
                    <TableCell>{row.AirportArrivalTerminal}</TableCell>
                    <TableCell>{row.BaggageAllowance}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ right: "5%", top: "7%" }}
                      >
                        Delete
                      </Button></TableCell>
                    <TableCell><Button
                      variant="contained"
                    >
                      Edit
                    </Button></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//     Date: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell >Flight Number</TableCell>
            <TableCell >From</TableCell>
            <TableCell >To</TableCell>
            <TableCell >Arrival Time</TableCell>
            <TableCell >Departure Time</TableCell>
            <TableCell >Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}