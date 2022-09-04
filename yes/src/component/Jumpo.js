import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import XMLParser from 'react-xml-parser'
import axios from "axios";

const Loding = styled.div`
    padding:250px 0;
    text-align:center;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2rem;

    & img{
        animation: rotate_image 10s linear infinite;
        transform-origin: 50% 50%;
    }

    @keyframes rotate_image{
        100% {
            transform: rotate(360deg);
        }
    }
`

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
    display:flex;
    justify-content: center;
    align-items: center;
    
    &.on{
        opacity: 1;
    }

    & p{
        
        &.title{
            animation-delay: 1s;
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 40px;
            color: white;
        }

        &.content{
            font-size: 1.5rem;
            line-height: 50px;
            color: white;
        }
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
        background-color: rgba(0,0,0,0.6);
    }
    & li.jumpo-item-li{
        width: 6%;
        height: 170px;
        display: inline-block;
        margin: 0 10px;
        padding-top: 18px;
        border-top: 3px solid transparent;
        position: relative;
        cursor: pointer;
        &.on{
            border-top: 3px solid orange;
        }

        &:hover{
            border-top: 3px solid orange;
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
            border: 1px solid gray;
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
                    jumpoRef.current[data.length].classList.toggle("on");
                    jumpoNumberLiRef.current[data.length].classList.toggle("on");
                    jumpoLiRef.current[data.length].classList.toggle("on");
                    setSelectJumpoNumber(data.length);
                }else{
                    jumpoRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    jumpoNumberLiRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    jumpoLiRef.current[selectJumpoNumber - 1].classList.toggle("on");
                    setSelectJumpoNumber(selectJumpoNumber - 1);
                }
                break;
            case "right":
                if(selectJumpoNumber == data.length){
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

    function parseJson(dataSet) {
        const dataArr = new XMLParser().parseFromString(dataSet);
        return dataArr;
    }

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const readShowList = async () => {
            try {
                const response = await axios.get(
                    '/pblprfr?service=5142c77db2284ca09ff559832f6858e2&stdate=20220801&eddate=20220904&rows=8&cpage=1',
                );
                const xmlData = response.data;
                const jsonData = parseJson(xmlData);
                // const parse
                setData(jsonData.children);
                console.log(jsonData.children);
            } catch (e) {
                console.log(e);
            }
            };
            readShowList();    
    },[]);

    return (
        <JumpoWrap>
            {
                data.length == 0 ?
                <Loding>
                    <img src="img/lodding.png"/><br/>
                    <span>Lording...</span>
                </Loding>
                :
                <></>
            }
            {data.length > 0 ?
                data.map((item, index) => {
                    if(index == 0){
                        return(
                            <JumpoElement className="on" ref={el => (jumpoRef.current[index + 1] = el)} style={{"backgroundImage" :  `url(${item.children[5].value})`, "backgroundRepeat" : "no-repeat", "backgroundSize" : "cover"}}>
                                <div>
                                    <p className="title">{item.children[1].value}</p>
                                    <p className="content">
                                        {item.children[2].value} ~ {item.children[3].value}<br/>
                                        {item.children[4].value}
                                    </p>
                                </div>
                            </JumpoElement>
                        );
                    }else{
                        return(
                            <JumpoElement ref={el => (jumpoRef.current[index + 1] = el)} style={{"backgroundImage" :  `url(${item.children[5].value})`, "backgroundRepeat" : "no-repeat", "backgroundSize" : "cover"}}>
                                <div>
                                    <p className="title">{item.children[1].value}</p>
                                    <p className="content">
                                        {item.children[2].value} ~ {item.children[3].value}<br/>
                                        {item.children[4].value}
                                    </p>
                                </div>
                            </JumpoElement>
                        );
                    }
                })
                :
                <></>
            }
            
            
            <JumpoList>
                <JumpoNumberList>
                    <ul>
                        {data.length > 0 ?
                            data.map((item, index) => {
                                if(index == 0){
                                    return(
                                        <li className="on" ref={el => (jumpoNumberLiRef.current[index + 1] = el)}>{index + 1}/{data.length}</li>
                                    );
                                }else{
                                    return(
                                        <li ref={el => (jumpoNumberLiRef.current[index + 1] = el)}>{index + 1}/{data.length}</li>
                                    );
                                }
                            })
                            :
                            <></>
                        }
                    </ul>
                </JumpoNumberList>
                <div>
                    <ul>
                        {data.length > 0 ?
                            data.map((item, index) => {
                                if(index == 0){
                                    return(
                                        <li className="jumpo-item-li on" id={`jumpo-${index + 1}`} ref={el => (jumpoLiRef.current[index + 1] = el)} onClick={() => {changeJumpo(index + 1)}}>
                                            <img src={item.children[5].value} alt="alt"/>
                                        </li>
                                    );
                                }else{
                                    return(
                                        <li className="jumpo-item-li" id={`jumpo-${index + 1}`} ref={el => (jumpoLiRef.current[index + 1] = el)} onClick={() => {changeJumpo(index + 1)}}>
                                            <img src={item.children[5].value} alt="alt"/>
                                        </li>
                                    );
                                }
                            })
                            :
                            <></>
                        }
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