import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Technical from "../../img/document/technical.png"
import clearing from "../../img/document/clearing.png"
import DocLayout from '../../layout/DocLayout'
const ContentBody = styled.div`
color : #fff;
line-height: 2.4;
padding: 15px 25px;
text-align: justify;

img {
  width : 100%;
  border-radius : 10px
}
`;
function DocOverview() {
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
    <DocLayout active={'technical-review'}>
      <ContentBody >
        {/* table */}
        {/* <TableContent /> */}

        <div className="step-content-body" id="technical-review_1">
          <p>
            Behind the scenes, Intelligent has used different departments for its centralized and decentralized platforms, each of these departments has a specific task in this platform, which is performed by admin in the centralized part and by smart contracts in the decentralized part.
            <br />
            In general, the platform is divided into 3 sections, which we will refer to all of these sections below:
          </p>
          <img src={Technical} width={"100%"} alt="" />
          <div className="py-4">
            <ul>
              <li>
                 	Clearing house
              </li>
              <li>
                	Markets
              </li>
              <li>
                	DEX platform
              </li>
            </ul>
          </div>
          <p>
            There are three main parts of the intelligent platform, and all other parts are a subset of these three parts. We will explain these sections in the following!
          </p>
          <p>
            This part is the most important part of the platform because it acts as the core of the platform. All transfers and orders and transfers of user credits are under the supervision of this department, and as it was said, the centralized departments are managed by the admin and the decentralized departments are managed by smart contracts.
            <br />
            The various sections of the clearing house include the following, which are further discussed in the white paper:
          </p>
          <img src={clearing} width={"100%"} alt="" />
          <p>
            According to this photo, the importance of the clearing house section is clearly defined. <br />
            Finally, if we want to summarize this section in one sentence, the clearing house is responsible for all the settlements between users and users with the platform. If you want to read more about this, click here.

          </p>
        </div>
        <div className="step-content-body" id="technical-review_2">
          <div className="fw-bold">
            
            <p>
              This part is one of the most attractive parts of Intelligent for investors. When the investment reaches the level of liquidation and loses its assets, the remaining money in that transaction is deposited into the insurance fund. But for what?
            </p>
            <p>
              Because when the account of one of the traders reaches a negative limit, the insurance helps to get the account out of the negative number. This function makes the traders not indebted to the platform and other users, and in the worst case they exit the transaction with the loss of their capital.
            </p>
          </div>
        </div>
        <div className="step-content-body" id="technical-review_3">
          <div className="fw-bold">
            <p>
              This technology is very efficient because it makes the platform reach the state of Ballots, but how?
              <br />
              When there is an imbalance in the order book between buyers and sellers.
            </p>
          </div>
          <div>
            <span className="fw-bold">
              If there is no balance, the transactions are connected to the liquidity pool, but sometimes
            </span>
            <span>
            it is possible that there is not enough liquidity in this pool, so these transactions are automatically directed to the auto deleveraging section where, according to calculations, some transactions are Fill and the rest are They are killed.
            <br />
            This system is very necessary and practical for the security of the platform and the stability of the conditions inside it, which ultimately ends in the security of the users.
            </span>
          </div>
        </div>
      </ContentBody>
    </DocLayout>
  );
}

export default DocOverview;
