import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
    display: flex;
    align-items: center;
`

const HeaderArea1 = styled.div`
    width: 30%;
    display: flex;
    padding: 15px 25px;
    align-items: center;

    & img{
        width: 24px;
        height: 24px;
        margin-top: 5px;
        margin-right: 5px;
    }
    & h1{
        font-size: 1.5rem;
        font-weight: bold;
    }
`
const HeaderArea2 = styled.div`
    width: 40%;
    text-align: center;
    font-size: 1rem;
    & li{
        display: inline-block;
        margin: 0 15px;
    }
`
const HeaderArea3 = styled.div`
    width: 30%;
    position: relative;
    display: flex;

    &>div:first-child{
        width: 80%;
        text-align: right;
    }

    &>div:last-child{
        width: 20%;
        & li{
            display: inline-block;
            margin: 0 5px;
            & img{
                width: 24px;
                height: 24px;
            }
        }
    }

    & input{
        width: 80%;
        border: none;
        border-bottom: 2px solid black;
        padding: 5px 10px;
        outline: none;
    }
`

export function Header(){
    return(
        <HeaderWrap>
            <HeaderArea1>
                <div>
                    <img src="img/menu_icon.png"/>
                </div>
                <div>
                    <h1>Ticket Copy</h1>
                </div>    
            </HeaderArea1>
            <HeaderArea2>
                <nav>
                    <ul>
                        <li>연극</li>
                        <li>뮤지컬</li>
                        <li>무용</li>
                        <li>클래식</li>
                        <li>오페라</li>
                        <li>국악</li>
                    </ul>
                </nav>
                
            </HeaderArea2>
            <HeaderArea3>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <ul>
                        <li><img src="img/search_icon.png"/></li>
                        <li><img src="img/user_icon.png"/></li>
                    </ul>
                </div>
            </HeaderArea3>
        </HeaderWrap>
    );
}