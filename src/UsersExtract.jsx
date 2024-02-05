import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { host } from "./react-api-client";
import Grid from "@material-ui/core/Grid";
import Modal  from "./Components/Modal";
import moment from"moment";
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  submit: {
    
    width: "10%", // Fix IE 11 issue.
    height: 30,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  largeIcon: {
    width: 120,
    height: 60,
  },
  all:{
    
    width: "15%", // Fix IE 11 issue.
    height: 30,
  }
}));

export default function UserImpacted() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const D = moment(startDate).format('YYYY-MM-DD')

  const classes = useStyles();


  const UsersGet = async () => {  
  
      try {
        const response = await fetch(`${host}/get_extract/${D}`)
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    const UsersAll = async () => {  
      var year = moment().format('YYYY');
      var month = moment().month()
      try {
        const response = await fetch(`${host}/get_alldatedent1/${year}/MONTH/${month+1}`)
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };



  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
            <Typography
                component="h2"
                variant="h7"
                color="primary"
                gutterBottom
              >
                ตรวจฟัน - ถอนฟัน
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                เลือกเวลา
              </Typography>
              <form className={classes.form} >
                <Grid container spacing={2}>
                
                   <div className="card flex justify-center">
                   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                 </div>

                  <Button                   
                    variant="contained"
                    color="primary"
                    className={classes.submit}                   
                    onClick={UsersGet}
                  >
                    ตกลง
                  </Button>

                  <Button                   
                    variant="contained"
                    color="red"
                    className={classes.all}                   
                    onClick={UsersAll}
                  >
                    แสดงทั้งหมด/เดือน
                  </Button>

                </Grid>
              </form>
            </Box>

        
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ลำดับ </TableCell>
                  <TableCell align="right">ชื่อ</TableCell>
                  <TableCell align="center">นามสกุล</TableCell>
                  <TableCell align="left">วันที่จอง</TableCell>
                  <TableCell align="left">เวลา</TableCell>
                  <TableCell align="left">เบอร์โทร</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.app_id}>
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{user.firstname}</TableCell>
                    <TableCell align="center">{user.lastname}</TableCell>
                    <TableCell align="left"> {moment(user.app_date).format('DD-MM-YYYY')}</TableCell>
                    <TableCell align="left">{user.app_time}</TableCell>
                    <TableCell align="left">{user.tel}</TableCell>
                    {/* <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                      <Button onClick={() => UserDelete(user.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </Paper>
      </Container>
    </div>
  );
}
