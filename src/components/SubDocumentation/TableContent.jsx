import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import styled from "@emotion/styled";
const TableBody = styled.div`
    position:sticky;
    top: 16px;
    background-color: var(--gray-900);
    right: 0;
    padding-block: 10px;
    padding-inline: 16px;
    border: 1px solid var(--light-blue);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    float: right;
    .table-content{
        color: var(--white);
        margin-bottom:10px ;
    }
    .step-table-items{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        a.step-table-link{
            text-decoration: none;
            font-size:16px ;
            color: var(--white);
            margin-block: 6px;
            span{
                position: relative;
                svg{
                    margin-right: 15px;
                    position: relative;
                    z-index: 40;
                }
                &::after{
                    position: absolute;
                    content: " ";
                    background-color: var(--gray-200);
                    width: 2px;
                    height:35px;
                    bottom: 0px;
                    left: 6px;
                    z-index: 20;
                }
            }

        }
    }
`;
function TableContent() {
    const CaptionName = {
        step1:"Install wallet",
        step2:"SOL and USDC to trade on Drift",
        step3:"Withdraw USDC from Drift Trade",
        captionTable: "TABLE OF CONTENTS"
      };
    return (
    <TableBody >
        <span className="table-content">{CaptionName.captionTable}</span>
        <div className="step-table-items">
            <a href="" className='step-table-link'>
                <span><CircleIcon  sx={{ fontSize: 15 }}/></span>
                {CaptionName.step1}
            </a>
            <a href="" className='step-table-link'>
                <span><CircleIcon  sx={{ fontSize: 15 }}/></span>
                {CaptionName.step2}
            </a>
            <a href="" className='step-table-link'>
                <span><CircleIcon  sx={{ fontSize: 15 }}/></span>
                {CaptionName.step3}
            </a>

        </div>

    </TableBody>
  )
}

export default TableContent