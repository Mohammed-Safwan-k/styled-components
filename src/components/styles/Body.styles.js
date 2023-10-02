import styled from "styled-components";

export const BalanceSheetWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #ff6100;
  border: 2px solid black;
`;

export const TableDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled(Title)`
  font-size: medium;
`;

export const Date = styled(Title)`
  font-size: small;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px black solid;
  margin-top: 20px;
  background-color: white;
`;

export const TableHeader = styled.th`
  background-color: #2ea6de;
  border: 2px black solid;

  color: #fff;
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  
`;

export const TableCell = styled.td`
  border: 2px black solid;
  padding: 10px;
  height: 20px;
`;
