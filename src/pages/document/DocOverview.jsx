import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";
// import TableContent from "./TableContent";
import Deposit from "../../img/document/Deposit.png"
import DocLayout from '../../layout/DocLayout'
const ContentBody = styled.div`
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
    <DocLayout active={'overview'}>
      <ContentBody >
        {/* table */}
        {/* <TableContent /> */}
        <div className="caption-content-box">
          <span className="caption-content">{CaptionName.captionContent}</span>
          <div className="time-content-box">
            <AccessTimeIcon />
            <span className="time-content me-lg-3 ms-lg-1">
              {CaptionName.date}
            </span>
            <span className="time-content">{CaptionName.time}</span>
          </div>
          <i  id="overview_1"></i>
        </div>
        <div className="step-content-body">
          <div className="caption-step-content">
            <span className="step-number">{CaptionName.stepNumber1}</span>
            <a href="" className="step-link">
              {CaptionName.steplink}
            </a>
            <span className="text-step">{CaptionName.textstep}</span>
          </div>
          <div className="img-step-box">
            <img src={Deposit} alt="" width={700} />
          </div>
          <p className="dec-step">
            {CaptionName.decStep}

          </p>
          <i  id="overview_2"></i>
        </div>
        <div className="step-content-body">
          <div className="caption-step-content">
            <span className="step-number">{CaptionName.stepNumber1}</span>
            <a href="" className="step-link">
              {CaptionName.steplink}
            </a>
            <span className="text-step">{CaptionName.textstep}</span>
          </div>
          <div className="img-step-box">
            <img src={Deposit} alt="" width={700} />
          </div>
          <p className="dec-step">
            {CaptionName.decStep}

          </p>
          <i  id="overview_3"></i>
        </div>
        <div className="step-content-body">
          <div className="caption-step-content">
            <span className="step-number">{CaptionName.stepNumber1}</span>
            <a href="" className="step-link">
              {CaptionName.steplink}
            </a>
            <span className="text-step">{CaptionName.textstep}</span>
          </div>
          <div className="img-step-box">
            <img src={Deposit} alt="" width={700} />
          </div>
          <p className="dec-step">
            {CaptionName.decStep}

          </p>
          <i  id="overview_4"></i>
        </div>
      </ContentBody>
    </DocLayout>
  );
}

export default DocOverview;
