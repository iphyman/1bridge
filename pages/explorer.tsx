import { useState } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";
import {
  HomeWrapper,
  SearchInput,
  SearchWrapper,
  TableContainer,
  Title,
  Card,
  CardBody,
  CardHeader,
  PageWrapper,
  PageTitle,
  StyledLink,
} from "styles/home";
import { SearchButton } from "components/Button";
import { ToolTip } from "components/ToolTip";
import { CHAIN_INFO } from "constants/chain-info";

export default function Explorer() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const isHash = new RegExp(/^0x([A-Fa-f0-9]{64})$/);

  const handleSearch = async () => {
    if (isHash.test(input)) {
      const res = await axios.get(
        `https://bridgeapi.anyswap.exchange/v2/history/details?params=${input}`
      );
      if (res.data && res.data.info) {
        setData(res.data.info);
        console.log(res.data.info);
      }
    }
  };

  return (
    <HomeWrapper>
      <SearchWrapper>
        <SearchInput
          placeholder="Search Txn/Hash..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchButton onClick={handleSearch} disabled={!isHash.test(input)}>
          <MdSearch size={32} />
        </SearchButton>
      </SearchWrapper>
      {data && (
        <PageWrapper>
          <Card fullWidth>
            <CardHeader>
              <Title>Transaction</Title>
            </CardHeader>
            <CardBody>
              <TableContainer>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the hash of the transaction" />
                        Transaction Hash
                      </td>
                      <td>{data.txid}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="The blockchain this transaction originates from" />
                        From chain
                      </td>
                      <td>
                        {CHAIN_INFO[parseInt(data.fromChainID)].chainName}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="The blockchain this transaction is transfered to" />
                        To chain
                      </td>
                      <td>{CHAIN_INFO[parseInt(data.toChainID)].chainName}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the sender" />
                        From
                      </td>
                      <td>{data.from}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the receipient" />
                        To
                      </td>
                      <td>{data.to}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the token been bridged" />
                        Token
                      </td>
                      <td>{data.label}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the amount sent" />
                        Amount sent
                      </td>
                      <td>{data.formatvalue}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the amount received" />
                        Amount received
                      </td>
                      <td>
                        {data.formatswapvalue}
                        {data.pairid}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the transfer fee" />
                        Transfer fee
                      </td>
                      <td>
                        {data.formatfee}
                        {data.pairid}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Status of the transfer" />
                        Status
                      </td>
                      <td>{data.status >= 10 ? "Completed" : "pending"}</td>
                    </tr>
                    <tr>
                      <td>
                        <ToolTip content="Indicates the time of the transfer" />
                        Transaction time
                      </td>
                      <td>{new Date(data.inittime).toDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </CardBody>
          </Card>
        </PageWrapper>
      )}
    </HomeWrapper>
  );
}
