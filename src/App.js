import {
  BalanceSheetWrapper,
  Date,
  Subtitle,
  Table,
  TableCell,
  TableDiv,
  TableHeader,
  TableRow,
  Title,
} from "./components/styles/Body.styles";
import {
  CurrentAssets,
  CurrentLiabalities,
  FixedAssets,
  Investments,
} from "./data/data";

function App() {
  return (
    <BalanceSheetWrapper>
      <Title>Company Name</Title>
      <Subtitle>Balance Sheet</Subtitle>
      <Date>As of ________ (Date)</Date>
      <TableDiv>
        <div>
          <Table>
            <thead>
              <tr>
                <TableHeader>Particular</TableHeader>
                <TableHeader>$$</TableHeader>
              </tr>
            </thead>
            <tbody>
              <TableCell>
                <b>Current Assets</b>
              </TableCell>
              {CurrentAssets.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Particular}</TableCell>
                  <TableCell>{item.$$}</TableCell>
                </TableRow>
              ))}
              <TableCell>
                <b>Fixed Assets</b>
              </TableCell>
              {FixedAssets.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Particular}</TableCell>
                  <TableCell>{item.$$}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <TableHeader>Particular</TableHeader>
                <TableHeader>$$</TableHeader>
              </tr>
            </thead>
            <tbody>
              <TableCell>
                <b>Investments</b>
              </TableCell>
              {Investments.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Particular}</TableCell>
                  <TableCell>{item.$$}</TableCell>
                </TableRow>
              ))}
              <TableCell>
                <b>CurrentLiabalities</b>
              </TableCell>
              {CurrentLiabalities.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Particular}</TableCell>
                  <TableCell>{item.$$}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </TableDiv>
    </BalanceSheetWrapper>
  );
}

export default App;
