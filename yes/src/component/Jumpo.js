import React, {useRef, useState} from "react";
import styled from "styled-components";

const JumpoWrap = styled.div`
    height: 600px;
    position: relative;
`
const JumpoElement = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 1s;
    opacity: 0;
    &.on{
        opacity: 1;
    }
`

const JumpoArrows = styled.div`
    width: 100%;
    position: absolute;
    height: 70px;
    top: 265px;
    z-index: 2;
    display: flex;
    align-items: center;

    & div{
        position: absolute;
        cursor: pointer;
        
        &.left{
            left: 30px;
        }
        &.right{
            right: 30px;
        }
    }
    & a{
        font-size: 2.5rem;
        color: gray;
    }
`

const JumpoList = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    transition: 1s;
    overflow: hidden;
    text-align: center;
    background-color: transparent;
    z-index: 2;

    &:hover{
        height: 220px;
    }
    & li.jumpo-item-li{
        width: 6%;
        height: 170px;
        display: inline-block;
        margin: 0 10px;
        padding-top: 18px;
        border-top: 3px solid transparent;
        position: relative;

        &.on{
            border-top: 3px solid red;
        }

        &:hover{
            border-top: 3px solid red;
        }

        & div{
            width: 100%;
            position: absolute;
            text-align: center;
            font-size: 0.8rem;
            top: 0px;
        }

        & img{
            width: 100%;
            height: 150px;
            border: 1px solid lightgray;
        }
    }
`

const JumpoNumberList = styled.div`
    border-bottom: 1px solid lightgray;
    
    & li{
        width: 6%;
        line-height: 30px;
        display: inline-block;
        margin: 0 10px;
        font-size: 0.8rem;
        letter-spacing: 3px;
        color: white;
        font-weight: bold;
        opacity: 0;

        &.on{
            opacity: 1;
        }
    }
`
function Jumpo(){
    const jumpoRef = useRef([]);
    const jumpoNumberLiRef = useRef([]);
    const jumpoLiRef = useRef([]);

    const [selectJumpoNumber, setSelectJumpoNumber] = useState(1);

    function changeJumpo(value){
        jumpoRef.current[selectJumpoNumber].classList.toggle("on");
        jumpoNumberLiRef.current[selectJumpoNumber].classList.toggle("on");
        jumpoLiRef.current[selectJumpoNumber].classList.toggle("on");

        switch(value){
            case "left":
                if(selectJumpoNumber == 1){
                    jumpoRef.current[5].classList.toggle("on");
                    jumpoNumberLiRef.current[5].classList.toggle("on");
                    jumpoLiRef.current[5].classList.toggle("on");
                    setSelectJumpoNumber(5);
                }else{
                    jumpoRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    jumpoNumberLiRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    jumpoLiRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    setSelectJumpoNumber(selectJumpoNumber - 1);
                }
                break;
            case "right":
                if(selectJumpoNumber == 5){
                    jumpoRef.current[1].classList.toggle("on");
                    jumpoNumberLiRef.current[1].classList.toggle("on");
                    jumpoLiRef.current[1].classList.toggle("on");
                    setSelectJumpoNumber(1);
                }else{
                    jumpoRef.current[selectJumpoNumber + 1].classList.toggle("on");
                    jumpoNumberLiRef.current[selectJumpoNumber + 1].classList.toggle("on");
                    jumpoLiRef.current[selectJumpoNumber + 1].classList.toggle("on");
                    setSelectJumpoNumber(selectJumpoNumber + 1);
                }
                break;
            default:
                jumpoRef.current[value].classList.toggle("on");
                jumpoNumberLiRef.current[value].classList.toggle("on");
                jumpoLiRef.current[value].classList.toggle("on");
                setSelectJumpoNumber(value);
                break;
        }  
    }

    return (
        <JumpoWrap>
            <JumpoElement className="on" ref={el => (jumpoRef.current[1] = el)} style={{"background-color" : "skyblue"}}>
                
            </JumpoElement>
            <JumpoElement ref={el => (jumpoRef.current[2] = el)} style={{"background-color" : "pink"}}>
                
            </JumpoElement>
            <JumpoElement ref={el => (jumpoRef.current[3] = el)} style={{"background-color" : "orange"}}>
                
            </JumpoElement>
            <JumpoElement ref={el => (jumpoRef.current[4] = el)} style={{"background-color" : "yellow"}}>
                
            </JumpoElement>
            <JumpoElement ref={el => (jumpoRef.current[5] = el)} style={{"background-color" : "green"}}>
                
            </JumpoElement>
            
            <JumpoList>
                <JumpoNumberList>
                    <ul>
                        <li className="on" ref={el => (jumpoNumberLiRef.current[1] = el)}>1/5</li>
                        <li ref={el => (jumpoNumberLiRef.current[2] = el)}>2/5</li>
                        <li ref={el => (jumpoNumberLiRef.current[3] = el)}>3/5</li>
                        <li ref={el => (jumpoNumberLiRef.current[4] = el)}>4/5</li>
                        <li ref={el => (jumpoNumberLiRef.current[5] = el)}>5/5</li>
                    </ul>
                </JumpoNumberList>
                <div>
                    <ul>
                        <li className="jumpo-item-li on" id="jumpo-1" ref={el => (jumpoLiRef.current[1] = el)} onClick={() => {changeJumpo(1)}}>
                            <img/>
                        </li>
                        <li className="jumpo-item-li" id="jumpo-2" ref={el => (jumpoLiRef.current[2] = el)} onClick={() => {changeJumpo(2)}}>
                            <img/>
                        </li>
                        <li className="jumpo-item-li" id="jumpo-3" ref={el => (jumpoLiRef.current[3] = el)} onClick={() => {changeJumpo(3)}}>
                            <img/>
                        </li>
                        <li className="jumpo-item-li" id="jumpo-4" ref={el => (jumpoLiRef.current[4] = el)} onClick={() => {changeJumpo(4)}}>
                            <img/>
                        </li>
                        <li className="jumpo-item-li" id="jumpo-5" ref={el => (jumpoLiRef.current[5] = el)} onClick={() => {changeJumpo(5)}}>
                            <img/>
                        </li>
                    </ul>
                </div>
            </JumpoList>
            <JumpoArrows>
                <div className="left" onClick={() => {changeJumpo("left")}}>
                    <a>&#10094;</a>
                </div>
                <div className="right" onClick={() => {changeJumpo("right")}}>
                    <a>&#10095;</a>
                </div>
            </JumpoArrows>
        </JumpoWrap>
    );
}

export default Jumpo;