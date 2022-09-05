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
  .introduction {
    color : #fff;
    line-height: 2.4;
    padding: 15px 25px;
    text-align: justify;
  }
`;
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
        <DocLayout active={'liquidation'}>
            <ContentBody >
                {/* table */}
                {/* <TableContent /> */}
              
                <div className="step-content-body" id="liquidation_1">
                    <div>
                        <p>
                            For every symbol that there is a Liquidation threshold, if the amount of collateral residue and the ratio of the trader margin falls below that level, the trade is closed automatically .
                        </p>
                        <p>
                        When the margin ratio <span className="fw-bold">reaches 0.5</span>, all transactions of the user account will be liquidated and the remaining amount of the account will enter the insurance fund.
                        </p>
                    </div>
                    <div>
                            <p>Margin ratio = total collateral / notional margin</p>
                            <p>total collateral = deposit + PL gain + UNPL gain - positions fee</p>
                            <p>notional margin = all open positions margin amount</p>
                        </div>
                </div>
                <div className="step-content-body" id="liquidation_2">
                    <div className="caption-step-content">
                    When the margin ratio reaches 1, the most loss-making trades are closed automatically, and the user cannot open a new trade until the margin level rises.
                    </div>
                </div>
                <div className="step-content-body" id="liquidation_3">
                    <p>
                    When a transaction is liquidated, the remaining Collateral amount of the user enters the Insurance fund. The capital is stored in the Insurance fund and when the account becomes negative and loses all its collateral, the Insurance fund provides the negative amount of the account .
                    </p>
                </div>

            </ContentBody>
        </DocLayout>
    );
}

export default DocPools;
