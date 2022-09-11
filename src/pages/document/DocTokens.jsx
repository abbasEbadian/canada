import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
import { Link } from "react-router-dom";
const ContentBody = styled.div`
a {
  color : #fff;
  border : 1px solid #eee;
  border-radius : 7px;
  padding: 5px 25px
}
  color : #fff;
  line-height: 2.4;
  padding: 15px 25px;
  text-align: justify;
  flex-basis: auto;
  flex-grow: 1;
  margin-inline: 16px;
  margin-top: 32px;
  position: relative;
  .caption-content-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .caption-content {
      color: var(--white);
      font-size: 48px;
    }
    .time-content-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--light-blue);
    }

  }
  .step-content-body {
    padding : 180px 0; 
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-top: 16px;
    .caption-step-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      .step-number {
        color: var(--white);
        margin-right: 10px;
      }
      .step-link {
        color: var(--light-blue);
        font-size: 18px;
        margin-right: 10px;
      }
      .text-step{
        color: var(--white);
        font-size: 18px;
      }
    }
    .img-step-box{
      margin-inline: auto;
      margin-block: 32px;
    }
    p{
      color: var(--white);
      font-size: 16px;

    }
  }
`;
// useEffect(() => {
//   const body = document.querySelector('#root');

//   body.scrollIntoView({
//     behavior: 'smooth'
//   }, 500)

// }, []);
function DocPools() {
  const CaptionName = {
    time: "19:59",
    date: "2022, June 21",
    captionContent: "Set up Wallet, Deposits and Withdrawals",
    stepNumber1: "1.",
    steplink: "Install Intelligent wallet",
    textstep: "on your preferred browser (Chrome, Brave, Firefox, Edge).",
    decStep: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
  };
  return (
    <DocLayout active={'tokens'}>
      <ContentBody >
        {/* table */}
        {/* <TableContent /> */}
        <div className="caption-content-box"  >
          <div className="caption-step-content">
            <p>
              The intelligent platform has 3 functional tokens in its network, which have attractive programs for each of them.
            </p>
          </div>
          <div>
            <ul>
              <li>INTG</li>
              <li>LP</li>
              <li>BUNDLE</li>
            </ul>
          </div>
        </div>
        <div className="step-content-body" id="tokens_1">
          <div>
            <p>
              The native token of the Intelligent Network is scheduled to be released in 2023, and Intelligent has its own airdrop, and this airdrop is given to the users and activists of the platform. To learn how the INTG token will be released, refer to the white paper section.
              By creating attractive plans, Intelligent Token intends to keep its price stable to a large extent, and with this token holders can receive attractive services, for example, staking and other features that are provided in the form of updates.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="tokens_2">
          <div className="caption-step-content">
            <dib>
              <p>
                Providers receive liquidity to cover the risks of their LP token and can use their LP token in other parts of the platform and buy and sell it.
                LP Token pricing:
              </p>
              <p className="fw-bold text-center">
                Total Value of LP/ Circulating Supply of LP Tokens = Value of 1 LP Token
              </p>
              <p>
                If the suppliers win and make a profit in the transactions and the liquidity pool increases in value, the token will also grow, otherwise the price of the token will decrease.
              </p>
            </dib>
          </div>
        </div>
        <div className="step-content-body" id="tokens_3">
          <p>
            Users who have converted their account or trading position into tokens, this token is called bundle. It is very attractive for Kegarbers to share their risks, of course, you can buy and sell the bundle token as NFT on the Intelligent Market Place. If your account and your transaction are profitable, the bundle token will grow, and if not, its value will decrease.
          </p>
          <p className="fw-bold text-center">
            Token price = collateral + UnPL
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/doc/artificial" variant="outlined">prev</Link>
          <Link to="/doc/liquidation" variant="outlined">next</Link>
        </div>
      </ContentBody>
    </DocLayout>
  );
}

export default DocPools;
