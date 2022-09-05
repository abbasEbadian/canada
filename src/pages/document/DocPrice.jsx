import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
const ContentBody = styled.div`
  color : #fff;
  line-height: 2.4;
  padding: 15px 25px;
  text-align: justify;
  .step-content-body {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    .caption-step-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
function DocOverview() {
  
  return (
    <DocLayout active={'pricing'}>
      <ContentBody id="pricing_1">
        <div>
            <p className="text-white">
            Intelligent uses different methods for pricing. In the opinion of intelligent experts, the combination of the traditional world and technology creates attractive systems, many decentralized exchanges use AMM for pricing, but in this pricing method, users cannot set stops and SL/TP for their transactions.
            <br />
            Intelligent uses order books for pricing. The combination of OrderBook with the Solana network that supports more than 50,000 transactions per second (TPS) is very impressive and traders can experience amazing speed in OrderBook Intelligent.
            <br />
            But it is possible that the order book will go out of balance, at this time the order book will not work well. what will happen ?
            <br />
            Transactions are connected to the liquidity pool. In this pool, pricing is done by oracles. With this, the problem of unequal transactions on each side will no longer arise. Of course, intelligent also has its own plans for the next part. At times, it is possible that the liquidity pool does not cover the demand of traders (which does not happen above 90 percent), as a result, transactions are managed by auto deleveraging, Fill or Kill!
            </p>
        </div>
      </ContentBody>
    </DocLayout>
  );
}

export default DocOverview;



 