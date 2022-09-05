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
  .introduction {
    color : #fff;
    line-height: 2.4;
    padding: 15px 25px;
    text-align: justify;
  }
`;
function DocOverview() {

    return (
        <DocLayout active={'artificial'}>
            <ContentBody id="artificial_1">
                <div>
                    <p>
                        The most revolutionary feature of intelligent is its artificial intelligence. Artificial intelligence solves all the needs of users. This section provides users with services that make traders achieve optimal profits in the long term. Intelligent has tried to implement artificial intelligence technology in the financial markets and has finally implemented this idea well. Artificial intelligence first clusters users and measures your risk with risk logics such as sharpe ratio, maximum drawdown based on questionnaires and trading history, and finally provides you with attractive services with economic indicators gives.
                        <br />
                        Examples of artificial intelligence services:
                        <ul>
                            <li> recommendation </li>
                            <li> optimization </li>
                            <li> management </li>
                            <li> builder </li>
                            <li> chart </li>
                            <li> guides </li>
                            <li>…..</li>
                        </ul>
                        <p>
                        Click here for more information on artificial intelligence and its attractive features!
                        </p>
                    </p>
                </div>
            </ContentBody>
        </DocLayout>
    );
}

export default DocOverview;



