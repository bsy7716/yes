import React, {useState, useEffect} from "react";
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

const HotListWrap = styled.div`
    margin: 50px 0;
    padding: 0 17.5%;
    & h1{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 30px;
    }
`
const HotLists = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
`

const LeftHotList = styled.div`
    width: 35%;
    padding: 10px;
    cursor: pointer;

    & div:first-child{
        & img{
            width: 100%;
            height: 600px;
        }
    }

    & div:last-child{
        border-bottom: 1px solid lightgray;
        padding: 15px 20px;
        text-align: center;
        line-height: 30px;
        
        & p.title{
            font-size: 1.1rem;
            font-weight: bold;
        }
        & p.detail{
            font-size: 0.9rem;
            color: gray;
        }
    }
`

const RightHotList = styled.div`
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

const HotListItem = styled.div`
    width: 33%;
    padding: 10px;
    flex: none;
    position: relative;
`

const HotListItemWrap = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
    
    &:hover img{
        transform: scale(1.05);
    }

    &:hover div.content{
        opacity: 1;
    }

    & div.img-area{
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;

        & img{
            width: 100%;
            height: 100%;
            transition: 0.3s;
        }
    }

    & div.content{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        color: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 0.3s;
        padding: 0 30px;
        cursor: pointer;

        & p{
            line-height: 25px;

            &.title{
                font-size: 1.1rem;
            }
            &.detail{
                font-size: 0.8rem;
                margin: 15px 0;
            }
            &.age{
                font-size: 1rem;
            }
        }
    }
    
`
function HotList(){
    function parseJson(dataSet) {
        const dataArr = new XMLParser().parseFromString(dataSet);
        return dataArr;
    }

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const readShowList = async () => {
            try {
                const response = await axios.get(
                    '/pblprfr?service=5142c77db2284ca09ff559832f6858e2&stdate=20160101&eddate=20160630&rows=7&cpage=1',
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
        <HotListWrap>
            <h1>What's Hot</h1>
            {
                data.length == 0 ?
                <Loding>
                    <img src="img/lodding.png"/><br/>
                    <span>Lording...</span>
                </Loding>
                :
                <></>
            }
            {
                data.length > 1 ?
                <HotLists>
                    <LeftHotList>
                        <div>
                            <img src={data[0].children[5].value} alt="alt"/>
                        </div>
                        <div>
                            <p className="title">{data[0].children[1].value}</p>
                            <p className="detail">{data[0].children[2].value} ~ {data[0].children[3].value} / {data[0].children[8].value}</p>
                        </div>
                    </LeftHotList>
                    <RightHotList>
                        {
                            data.map((item, index) => {
                                if(index > 0){
                                    return(
                                        <HotListItem>
                                            <HotListItemWrap>
                                                <div className="img-area">
                                                    <img src={item.children[5].value} alt="alt"/>
                                                </div>
                                                <div className="content">
                                                    <div>
                                                        <p className="title">{item.children[1].value}</p>
                                                        <p className="detail">
                                                        {item.children[2].value} ~ {item.children[3].value}<br/>
                                                        {item.children[4].value}
                                                        </p>
                                                        <p className="age">{item.children[8].value}</p>
                                                    </div>
                                                </div> 
                                            </HotListItemWrap>
                                        </HotListItem>
                                    );
                                }
                            })
                        }
                    </RightHotList>
                </HotLists>
                :
                <></>
            }
            
        </HotListWrap>
    );
}

export default HotList;
