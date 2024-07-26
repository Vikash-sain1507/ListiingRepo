
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, date, viwe) {
  return { name, calories, fat, carbs, protein, date, viwe };
}

const rows = [
  createData(" I know the author’s name but I", "mrLink", "hemraj", "deepOrion", 1234, 2024,),
  createData("hemraj", "mrLink", "Vishal sir ", "deepOrion", 1234, 2024,),
  createData("hemraj", "mrLink", "Karan", "deepOrion", 1234, 2024,),
  createData("hemraj", "I know the author’s name but I", "Aayush", " deepOrion", 1234, 2024,),
  createData("hemraj", "mrLink", "lalit", "deepOrion", 1234, 2024,),
];

function List() {
  const nav = useNavigate()
  const form = JSON.parse(localStorage.getItem("formData"))
  console.log(form, "======>>>>");
  const handleclick = () => {
    nav("/feed");
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="center">MR </StyledTableCell>
            <StyledTableCell align="center">Manager Name</StyledTableCell>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Ticket Id</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">viwe</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {form.title}{row.carbs}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.calories} {form.mrLink}</StyledTableCell>
              <StyledTableCell align="center"> {row.fat} {form.managerName}</StyledTableCell>
              <StyledTableCell align="center"> {form.projectName}</StyledTableCell>
              <StyledTableCell align="center">{form.ticketId}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center" >{row.viwe} < RemoveRedEyeIcon onClick={handleclick} /> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default List;