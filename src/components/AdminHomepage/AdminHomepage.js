import { useState, useEffect, forwardRef } from "react";
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Popup from "../Popup/Popup";
import "./AdminHomepage.css";
import UpdateOver from "../UpdateOver/UpdateOver";
import SearchFlight from "../SearchFlight/SearchFlight.js";
import IconButton from "@mui/material/IconButton";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import { Row2 } from "../CollapsibleTable/CollapsibleTable";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AdminHomepage = () => {
  const [rows, setRows] = useState([]);
  const [toBeDeletedFlight, setToBeDeletedFlight] = useState("");
  const [deletePopupButton, setDeletePopupButton] = useState(false);
  const [editFlight, setEditFlight] = useState("");
  const [editFrom, setEditFrom] = useState("");
  const [editTo, setEditTo] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editArrivalDate, setEditArrivalDate] = useState("");
  const [editDepartureTime, setEditDepartureTime] = useState("");
  const [editArrivalTime, setEditArrivalTime] = useState("");
  const [editDepartureTerminal, setEditDepartureTerminal] = useState("");
  const [editArrivalTerminal, setEditArrivalTerminal] = useState("");
  const [editBusinessClassSeats, setEditBusinessClassSeats] = useState("");
  const [editEconomyClassSeats, setEditEconomyClassSeats] = useState("");
  const [editFirstClassSeats, setEditFirstClassSeats] = useState("");
  const [editBusinessClassSeatsPrice, setEditBusinessClassSeatsPrice] =
    useState("");
  const [editEconomyClassSeatsPrice, setEditEconomyClassSeatsPrice] =
    useState("");
  const [editFirstClassSeatsPrice, setEditFirstClassSeatsPrice] = useState("");
  const [editBaggageAllowance, setEditBaggageAllowance] = useState("");
  const [edit_id, setEdit_id] = useState("");

  const [updPopupButton, setUpdPopupButton] = useState(false);
  const [deleteOpenResponse, setDeleteOpenResponse] = useState(false);
  const [editOpenResponse, setEditOpenResponse] = useState(false);
  const [x, setX] = useState(false);

  function GetAllFlights() {
    axios
      .get("http://localhost:3005/flights/getAllFlights")
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //function SearchForFlights() {}

  function EditRow(values) {
    axios
      .put("http://localhost:3005/flights/editFlight/" + values, {
        FlightNumber: editFlight,
        From: editFrom,
        To: editTo,
        ArrivalTime: editArrivalTime,
        DepartureTime: editDepartureTime,
        EconomySeatsNo: editEconomyClassSeats,
        BusinessSeatsNo: editBusinessClassSeats,
        FirstSeatsNo: editFirstClassSeats,
        AirportDepartureTerminal: editDepartureTerminal,
        AirportArrivalTerminal: editArrivalTerminal,
        Date: editDate,
        ArrivalDate: editArrivalDate,
        BaggageAllowance: editBaggageAllowance,
        FirstClassPrice: editFirstClassSeatsPrice,
        BusinessClassPrice: editBusinessClassSeatsPrice,
        EconomyClassPrice: editEconomyClassSeatsPrice,
      })
      .then((res) => {
        setEditOpenResponse(true);
        GetAllFlights();
      });
  }

  function DeleteRow(values) {
    axios
      .delete("http://localhost:3005/flights/deleteFlight/" + values)
      .then((res) => {
        setDeleteOpenResponse(true);
        setRows(
          rows.filter((rows) => {
            return rows._id !== values;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    // setToBeDeletedFlight("");
  }

  const deleteHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDeleteOpenResponse(false);
  };

  const editHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEditOpenResponse(false);
  };

  const searchFlight = async (flight) => {
    //console.log(flight);
    //console.log(flight.Flight);
    await axios
      .post("http://localhost:3005/flights/searchFlights", {
        FlightNumber: flight.FlightNo,
        From: flight.From,
        To: flight.To,
        BaggageAllowance: flight.BaggageAllowance,
        ArrivalTime: flight.ArrivalTime,
        DepartureTime: flight.DepartureTime,
        EconomySeatsNo: flight.EconomyClassSeatsNo,
        BusinessSeatsNo: flight.BusinessClassSeatsNo,
        FirstSeatsNo: flight.FirstClassSeatsNo,
        EconomyClassPrice: flight.EconomyClassSeatsPrice,
        BusinessClassPrice: flight.BusinessClassSeatsPrice,
        FirstClassPrice: flight.FirstClassSeatsPrice,
        AirportDepartureTerminal: flight.DepartureTerminal,
        AirportArrivalTerminal: flight.ArrivalTerminal,
        Date: flight.Date,
        ArrivalDate: flight.ArrivalDate,
      })
      .then((result) => setRows(result.data));
  };
  useEffect(() => {
    GetAllFlights();
  }, []);

  return (
    <div>
      <ResponsiveAppBar
        pages={["Create Flight"]}
        settings={["profile"]}
        isAdmin={true}
      />
      <Snackbar
        open={deleteOpenResponse}
        autoHideDuration={6000}
        onClose={deleteHandleClose}
      >
        <Alert
          onClose={deleteHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Deleted Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={editOpenResponse}
        autoHideDuration={6000}
        onClose={editHandleClose}
      >
        <Alert
          onClose={editHandleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Edited Successfully
        </Alert>
      </Snackbar>
      <Popup trigger={deletePopupButton} setTrigger={setDeletePopupButton}>
        <CancelOutlinedIcon
          color="error"
          style={{ width: "25%", height: "30%" }}
        />
        <h2>Are you sure?</h2>
        <p style={{ fontSize: "small" }}>
          Do you really want to delete this flight with all its details? This
          action cannot be undone
        </p>
        <Button
          variant="contained"
          color="error"
          style={{ right: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            DeleteRow(toBeDeletedFlight);
            setX(false);
            // setToBeDeletedFlight("");
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          style={{ left: "5%", top: "7%" }}
          onClick={() => {
            setDeletePopupButton(false);
            setX(false);
          }}
        >
          Cancel
        </Button>
      </Popup>
      <UpdateOver trigger={updPopupButton} setTrigger={setUpdPopupButton}>
        <h1>Update Flight</h1>
        <Grid container rowSpacing={"0.8%"} ml={"5%"}>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>FlightNumber:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              error={true}
              name="flno"
              id="flno"
              type="text"
              value={editFlight}
              onChange={(e) => {
                setEditFlight(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>From:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="from"
              id="from"
              type="text"
              value={editFrom}
              onChange={(e) => {
                setEditFrom(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>To:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="to"
              id="to"
              type="text"
              value={editTo}
              onChange={(e) => {
                setEditTo(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Departure Date:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="date"
              id="date"
              type="date"
              value={editDate}
              onChange={(e) => {
                setEditDate(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Arrival Date:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="date"
              id="adate"
              type="date"
              value={editArrivalDate}
              onChange={(e) => {
                setEditArrivalDate(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Departure Time:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="dep"
              id="dep"
              type="time"
              value={editDepartureTime}
              onChange={(e) => {
                setEditDepartureTime(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Arrival Time:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="arrivet"
              id="arrivet"
              type="time"
              value={editArrivalTime}
              onChange={(e) => {
                setEditArrivalTime(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Airport Departure Terminal:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="depTer"
              id="depTer"
              type="number"
              value={editDepartureTerminal}
              onChange={(e) => {
                setEditDepartureTerminal(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Airport Arrival Terminal:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="arrTer"
              id="arrTer"
              type="number"
              value={editArrivalTerminal}
              onChange={(e) => {
                setEditArrivalTerminal(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Number Of Business Class Seats:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="busNo"
              id="busNo"
              type="number"
              value={editBusinessClassSeats}
              onChange={(e) => {
                setEditBusinessClassSeats(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Number Of Economy Class Seats:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="ecoNo"
              id="ecoNo"
              type="number"
              value={editEconomyClassSeats}
              onChange={(e) => {
                setEditEconomyClassSeats(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Number Of First Class Seats:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="fstNo"
              id="fstNo"
              type="number"
              value={editFirstClassSeats}
              onChange={(e) => {
                setEditFirstClassSeats(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Economy Class Seats Prices:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="econop"
              id="econop"
              type="number"
              value={editEconomyClassSeatsPrice}
              onChange={(e) => {
                setEditEconomyClassSeatsPrice(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Business Class Seats Prices:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="buisnop"
              id="buisnop"
              type="number"
              value={editBusinessClassSeatsPrice}
              onChange={(e) => {
                setEditBusinessClassSeatsPrice(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>First Class Seats Prices:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="fstNop"
              id="fstNop"
              type="number"
              value={editFirstClassSeatsPrice}
              onChange={(e) => {
                setEditFirstClassSeatsPrice(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <label>Baggage Allowance:</label>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "left" }}>
            <input
              style={{ width: "70%" }}
              name="fstNop"
              id="fstNop"
              type="number"
              value={editBaggageAllowance}
              onChange={(e) => {
                setEditBaggageAllowance(Number(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ right: "5%", top: "7%" }}
              onClick={() => {
                setUpdPopupButton(false);
                EditRow(edit_id);
                setX(false);
              }}
            >
              Update
            </Button>{" "}
            <Button
              variant="contained"
              color="error"
              style={{ left: "5%", top: "7%" }}
              onClick={() => {
                setUpdPopupButton(false);
                setX(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </UpdateOver>
      <div>
        <SearchFlight d={x} onSearch={searchFlight} />
        {/* <Link to="/signup" className="btn btn-primary">Sign up</Link> */}
      </div>
      <hr />
      <Box p={"1%"} maxHeight={1}>
        {rows.length > 0 ? (
          <TableContainer>
            <Table
              aria-label="collapsible table"
              className="header"
              stickyHeader={!x}
            >
              <TableHead>
                <TableRow>
                  {" "}
                  <TableCell />
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Flight Number
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    From
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    To
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Departure Date
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Departure Time
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Arrival Date
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ fontWeight: "bold" }}
                  >
                    Arrival Time
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <Row2
                    rownumber={index}
                    row={row}
                    EditContent={
                      <IconButton
                        disabled={x}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          console.log(row);
                          setEdit_id(row._id);
                          setUpdPopupButton(true);
                          setEditDepartureTime(row.DepartureTime);
                          setEditDepartureTerminal(
                            row.AirportDepartureTerminal
                          );
                          setEditArrivalTime(row.ArrivalTime);
                          setEditArrivalTerminal(row.AirportArrivalTerminal);
                          setEditDate(row.Date);
                          setEditArrivalDate(row.ArrivalDate);
                          setEditEconomyClassSeats(row.EconomySeatsNo);
                          setEditFirstClassSeats(row.FirstSeatsNo);
                          setEditFlight(row.FlightNumber);
                          setEditFrom(row.From);
                          setEditTo(row.To);
                          setEditBusinessClassSeats(row.BusinessSeatsNo);
                          setEditBaggageAllowance(row.BaggageAllowance);
                          setEditEconomyClassSeatsPrice(row.EconomyClassPrice);
                          setEditBusinessClassSeatsPrice(
                            row.BusinessClassPrice
                          );
                          setEditFirstClassSeatsPrice(row.FirstClassPrice);
                          setX(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    }
                    DeleteContent={
                      <IconButton
                        disabled={x}
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setX(true);
                          setDeletePopupButton(true);
                          setToBeDeletedFlight(row._id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    isAdmin={true}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{
              textAlign: "center",

              mx: "4%",
              opacity: 0.5,
            }}
          >
            <Typography variant="h6">No Flights Available</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};
export default AdminHomepage;
