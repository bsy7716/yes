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
    font-weight: bold;
    & li{
        display: inline-block;
        margin: 0 10px;
        padding: 5px 0;
        border-bottom: 3px solid transparent;
        transition: 0.3s;
        &:hover{
            border-bottom: 3px solid orange;
        }

        & a{
            text-decoration: none;
            color: black;
        }
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
                        <li><a href="#">연극</a></li>
                        <li><a href="#">뮤지컬</a></li>
                        <li><a href="#">무용</a></li>
                        <li><a href="#">클래식</a></li>
                        <li><a href="#">오페라</a></li>
                        <li><a href="#">국악</a></li>
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