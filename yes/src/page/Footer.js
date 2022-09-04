import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
    border-top: 1px solid lightgray;
    margin: 25px 0;
    margin-bottom: 10px;
    & > div{
        padding: 0 17.5%;
    }
`

const FooterList = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    & div.nav-list{
        width: 70%;
        padding: 25px 0;
        font-weight: bold;

        & li{
            display: inline-block;
            padding: 0 15px;
            border-right: 1px solid lightgray;
            
            &:last-child{
                border-right: none;
            }
        }
    }

    & div.family-site{
        width: 30%;
        text-align: right;
        padding-right: 10px;

        & select{
            min-width: 180px;
            padding: 7px 15px;
            padding-right: 30px;
            outline: none;
        }
    }
`

const FooterDetail = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 15px;
    border-top: 1px solid whitesmoke;
`

const FooterLogo = styled.div`
    width: 18%;
    font-size: 1.7rem;
    font-weight: bold;
`

const FooterContent = styled.div`
    width: 82%;
    line-height: 1.3rem;
    font-size: 0.8rem;

    & p{
        
        &.content{
            color: gray;
            margin: 7px 0;
        }
        
    }
`

function Footer(){
    return (
        <FooterWrap>
            <div>
                <FooterList>
                    <div className="nav-list">
                        <ul>
                            <li>회사소개</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>청소년보호정책</li>
                            <li>이용안내</li>
                            <li>티켓판매안내</li>
                        </ul>
                    </div>
                    <div className="family-site">
                        <select>
                            <option>Family Site</option>
                        </select>
                    </div>
                </FooterList>
            </div>
            <div>
                <FooterDetail>
                    <FooterLogo>
                        <div>
                            <h1>Ticket Copy</h1>
                        </div>
                    </FooterLogo>
                    <FooterContent>
                        <p className="title">Tickey Copy</p>
                        <p className="content">
                            서울시 홍길동구 홍길로 12, 1층~3층(홍길동,길동빌딩)<br/>
                            대표 홍길동  |  개인정보보호책임자 : 홍길동 tickeyCopy@ticket.com<br/>
                            사업자등록번호 123-45-67890  | 통신판매업신고 제 1234-56789호<br/>
                            호스팅 서비스사업자 : Ticket Copy
                        </p>
                        <p className="copyright">Copyright © Ticket Copy Corp. All Rights Reserved.</p>
                    </FooterContent>
                    <div>
                        
                    </div>
                </FooterDetail>
            </div>
        </FooterWrap>
        
    );
}

export default Footer;