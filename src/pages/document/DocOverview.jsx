import React, {useEffect} from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
import { Link } from "react-router-dom";
const ContentBody = styled.div`
 .introduction {
  color : #fff;
  line-height: 2.4;
  padding: 15px 25px;
  text-align: justify;
}
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
  a {
    color : #fff;
    border : 1px solid #eee;
    border-radius : 7px;
    padding: 5px 25px
  }
`;
// useEffect(() => {
//   const body = document.querySelector('#root');

//   body.scrollIntoView({
//       behavior: 'smooth'
//   }, 500)

// }, []);
function DocOverview() {

  return (
    <>
      <DocLayout active={'overview'}>
        <ContentBody id="overview_1">
          <div className="introduction">
            <div>
              Intelligent Protocol is a platform with the help of which you can trade and invest in various assets from any market such as stock market, cryptocurrencies, forex and even the commodity market in a decentralized environment and on the Solana platform.
              Intelligent is a platform that is going to transform the financial world and makes this goal possible with its features, not with slogans!
              One of the most attractive parts of Intelligent is the special artificial intelligence of this platform, which is the first time in the financial world that this technology has been used with complex algorithms. A lot has been said about intelligent artificial intelligence in other parts of this page and in separate articles about this feature. But intelligent has several other features outside the discussion of artificial intelligence that make it very attractive. Sections that include: <br />
              1- trade, hold and stick all in one platform!<br />
              2- practical diagrams with the most features<br />
              3- Gamify and special prizes<br />
              4- incentive schemes and invitation awards (Affiliate)<br />
              5- Decentralized and high security, no need for identity verification<br />
              6- real and tangible assets along with the interest of the shares provided<br />
              7- Professional and full-time support in the language of your country<br />
              8- Providing education at the level up to the professional level and receiving an award for watching the training (WTE)<br />
              9- notifications and 24-hour app support<br />
              <span className="fw-bold">10- lossless platforms</span><br />

              <span className="fw-bold">11- spread fee- 0- for VIP account</span><br />
              12- Invest in the shortest time and without knowledge of fund managers<br />
              13- Trade and trade from all over the world without restrictions and disrupt the capitalist system<br />
              14- Confirming the best fund managers<br />
              15- providing unique artificial intelligence capabilities<br />
              16- conferences and the attractive part of Trade Temple<br />
              There are 17 sections that, if you do well in them, you have created an extraordinary resume for yourself.<br />
              18- Etc<br />
              To read more about intelligent, there are many articles about this project on reputable sites in the world that you can read and read our white paper below!
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <Link to="/doc/technical-review" variant="outlined">next</Link>
            </div>
          </div>

        </ContentBody>
      </DocLayout>

    </>
  );
}

export default DocOverview;



