/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import mysql from 'mysql';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers';
import Navbar from '/home/mdhv/Documents/Hindalco/src/components/navbar/navbar.jsx';
import '/home/mdhv/Documents/Hindalco/src/pages/guest-house/guest-house.css';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'mdhv11',
  password: 'Mdhv@11',
  database: 'guesthouse',
});

const GuestHouse = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    mobileNumber: '',
    address: '',
    organization: '',
    checkInDate: null,
    checkOutDate: null,
    email: '',
    purposeOfVisit: '',
    specialRequests: '',
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setBookingDetails((prevDetails) => {
      const updatedDetails = {...prevDetails, [name]: value};
      return updatedDetails;
    });
  };

  const handleSubmit = async () => {
    try {
      const query = `
        INSERT INTO bookings (
          name,
          mobileNumber,
          address,
          organization,
          checkInDate,
          checkOutDate,
          email,
          purposeOfVisit,
          specialRequests
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        bookingDetails.name,
        bookingDetails.mobileNumber,
        bookingDetails.address,
        bookingDetails.organization,
        bookingDetails.checkInDate,
        bookingDetails.checkOutDate,
        bookingDetails.email,
        bookingDetails.purposeOfVisit,
        bookingDetails.specialRequests,
      ];

      await connection.query(query, values);
      console.log('Booking details saved to database.');
      setBookingDetails({
        name: '',
        mobileNumber: '',
        address: '',
        organization: '',
        checkInDate: null,
        checkOutDate: null,
        email: '',
        purposeOfVisit: '',
        specialRequests: '',
      });
    } catch (err) {
      console.error(err.message);
      // Provide user-friendly feedback or retry options
    }
  };

  useEffect(() => {
    connection.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name TEXT,
        mobileNumber TEXT,
        address TEXT,
        organization TEXT,
        checkInDate TEXT,
        checkOutDate TEXT,
        email TEXT,
        purposeOfVisit TEXT,
        specialRequests TEXT
      )
    `, (err, result) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Table created successfully.');
      }
    });
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={1} style={{display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Guest House Booking
          </Typography>
        </Grid>

        <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center'}}>
          <Grid item xs={8}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={bookingDetails.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={bookingDetails.mobileNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={bookingDetails.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Organization"
              variant="outlined"
              fullWidth
              value={bookingDetails.organization}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              label="Check-in Date"
              value={bookingDetails.checkInDate}
              onChange={(newValue) => setBookingDetails({...bookingDetails, checkInDate: newValue})}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={8}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              label="Check-out Date"
              value={bookingDetails.checkOutDate}
              onChange={(newValue) => setBookingDetails({...bookingDetails, checkOutDate: newValue})}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="email"
              variant="outlined"
              fullWidth
              value={bookingDetails.Email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="purposeOfVisit"
              variant="outlined"
              fullWidth
              value={bookingDetails.purposeOfVisit}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="specialRequests"
              variant="outlined"
              fullWidth
              value={bookingDetails.specialRequests}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Submit Booking
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default GuestHouse;
/* eslint-enable max-len */
