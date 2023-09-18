import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StyledPagination = styled(Pagination)`
  && {
    .Mui-selected {
      background-color: ${(p) => {
        return p.theme.COLORS.primary;
      }};
    }
  }
`;
