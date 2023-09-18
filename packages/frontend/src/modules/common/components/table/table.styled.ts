import styled from 'styled-components';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableHead = styled(TableHead)`
  background-color: ${(p) => {
    return p.theme.COLORS.lightBlue;
  }};
`;

export const StyledTable = styled(Table)`
  box-shadow: ${(p) => {
    return p.theme.SHADOW.normal;
  }};
`;

export const StyledTableBody = styled(TableBody)`
  background-color: ${(p) => {
    return p.theme.COLORS.lightGrey;
  }};
`;

export const StyledTableCell = styled(TableCell)`
  text-align: center;
  margin: 0 auto;
  && {
    font-family: ${(p) => {
      return p.theme.FAMILIES.normal;
    }};
  }
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledTableCellDescription = styled(TableCell)`
  && {
    text-align: center;
    color: ${(p) => {
      return p.theme.COLORS.black;
    }};
    font-family: ${(p) => {
      return p.theme.FAMILIES.normal;
    }};
  }
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledTableCellAction = styled.div`
  display: flex;
  width: 250px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTableRow = styled(TableRow)``;
