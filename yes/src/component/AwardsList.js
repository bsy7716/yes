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

const AwardsListWrap = styled.div`
    margin: 30px 0;
    padding: 50px 17.5%;
    min-height: 500px;
    
    & h1{
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 50px;
    }
`

const NotSearch = styled.div`
    padding: 250px 0;
    text-align: center;

    & span{
        font-weight: bold;
    }
`
const AwardsItems = styled.div`
    & > div:first-child{
        text-align:center;
    }

    & li{
        width: 14.25%;
        display: inline-block;
        padding: 20px 30px;
        border: 1px solid lightgray;
        font-size: 0.9rem;
        cursor: pointer;

        &.on{
            background-color: black;
            color: white;
            font-weight: bold;
        }

        & a{
            text-decoration: none;
            color: black;
        }
    }
`

const AwardsDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & h2{
        position: relative;
        padding: 30px 0;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }

    & input[type="date"]{
        padding: 5px 10px;
        font-weight: bold;
        text-align: center;
        margin: 0 10px;
    }

    & img{
        position: absolute;
        width: 24px;
        height: 24px;
        top: 33px;
        cursor: pointer;
    }
`

const AwardsItemsWrap = styled.div`
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
`
const AwardsBigItems = styled.div`
    display: flex;
    justify-content: center;
`

const AwardsBigItem = styled.div`
    width: 33.33%;
    background-color: whitesmoke;
    padding: 50px;
    text-align: center;

    &:nth-child(2){
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
    }
    
    & img{
        width:100%;
        height: 400px;
    }

    p.title{
        font-size: 1rem;
        font-weight: bold;
        margin-top: 15px;
    }

    p.content{
        font-size: 0.85rem;
        line-height: 20px;
        color: gray;
        margin: 25px 0;
    }

    p.awards{
        font-size: 0.85rem;
        line-height: 32px;
        margin: 25px 0;
    }
`

const AwardsBigItemDetail = styled.div`
    border-bottom: 1px solid lightgray;
`

const AwardsSmallItems = styled.div`
    
`
const AwardsSmallItem = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;

    & div.index{
        display: flex;
        width: 8%;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        font-weight: bold;
        padding-left: 15px;
    }

    & div.image-title{
        width: 52%;
        display: flex;
        align-items: center;

        & div.image{
            width: 16%;
            padding: 15px;
            
            & img{
                width: 100%;
                height: auto;
                border: 1px solid lightgray;
            }
        }

        & div.title{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 30px;
            font-size: 0.8rem;
        }
    }

    & div.detail{
        width: 40%;
        display: flex;

         & div{
            width: 50%;
            margin: 25px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 2rem;
            font-size: 0.8rem;

            &.date-area{
                width: 50%;
                border-left: 1px solid lightgray;
                border-right: 1px solid lightgray;
                padding: 0 15px;
            }
            &.award{
                width: 50%;
                padding: 0 15px;
            }
         }

         
    }
`

function AwardsList(){
    function parseJson(dataSet) {
        const dataArr = new XMLParser().parseFromString(dataSet);
        return dataArr;
    }
    const [startDate, setStartDate] = useState(20211201);
    const [endDate, setEndDate] = useState(20220101);
    const [data, setData] = useState([]);
    const [shcate, setShcate] = useState(0);
    const [selectCategory, setSelectCategory] = useState(1);

    const categoryRef = useRef([]);

    const readShowList = async () => {
        try {
            let url = `prfawad?service=5142c77db2284ca09ff559832f6858e2&stdate=${startDate}&eddate=${endDate}&cpage=1&rows=10`;
            if(shcate != 0 && shcate != 1){
                let categoryCode = "";
                switch(shcate){
                    case 2:
                        categoryCode = "AAAA";
                        break;
                    case 3:
                        categoryCode = "AAAB";
                        break;
                    case 4:
                        categoryCode = "BBBA";
                        break;
                    case 5:
                        categoryCode = "CCCA";
                        break;
                    case 6:
                        categoryCode = "CCCB";
                        break;
                    case 7:
                        categoryCode = "CCCC";
                        break;
                    default:
                        break;
                }
                url += `&shcate=${shcate}`;
            }

            const response = await axios.get(url);
            const xmlData = response.data;
            const jsonData = parseJson(xmlData);
            // const parse
            setData(jsonData.children);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        readShowList();
    },[]);

    useEffect(() => {
        readShowList();
    },[shcate]);

    function changeDate(e) {
        let date = e.target.value.replaceAll("-","");
        if(e.target.id == "start-date"){
            setStartDate(date);
        }else{
            setEndDate(date);
        }
    }

    function changeCategory(number){
        categoryRef.current[selectCategory].classList.toggle("on");
        categoryRef.current[number].classList.toggle("on");
        setShcate(number);
        setSelectCategory(number);
    }

    return (
        <AwardsListWrap>
            <h1>Awards List</h1>
            <AwardsItems>
                <div>
                    <ul>
                        <li className="on" ref={el => (categoryRef.current[1] = el)} onClick={() => {changeCategory(1)}}>전체</li>
                        <li ref={el => (categoryRef.current[2] = el)} onClick={() => {changeCategory(2)}}>연극</li>
                        <li ref={el => (categoryRef.current[3] = el)} onClick={() => {changeCategory(3)}}>뮤지컬</li>
                        <li ref={el => (categoryRef.current[4] = el)} onClick={() => {changeCategory(4)}}>무용</li>
                        <li ref={el => (categoryRef.current[5] = el)} onClick={() => {changeCategory(5)}}>클래식</li>
                        <li ref={el => (categoryRef.current[6] = el)} onClick={() => {changeCategory(6)}}>오페라</li>
                        <li ref={el => (categoryRef.current[7] = el)} onClick={() => {changeCategory(7)}}>국악</li>
                    </ul>
                </div>
                <div>
                    <AwardsDate>
                        <h2><input type="date" id="start-date" value={`${startDate.toString().substring(0,4)}-${startDate.toString().substring(4,6)}-${startDate.toString().substring(6,8)}`} onChange={(e) => {changeDate(e)}}/> ~ <input type="date" id="end-date" value={`${endDate.toString().substring(0,4)}-${endDate.toString().substring(4,6)}-${endDate.toString().substring(6,8)}`} onChange={(e) => {changeDate(e)}}/><img src="img/search_icon.png" onClick={() => {readShowList()}}/></h2>
                    </AwardsDate>
                    <AwardsItemsWrap>
                        {
                            data.length == 0 ?
                            shcate != 0 ? 
                                <NotSearch>
                                    <span>조건에 맞는 공연이 존재하지 않습니다.</span>
                                </NotSearch>
                            :
                            <Loding>
                                <img src="img/lodding.png"/><br/>
                                <span>Lording...</span>
                            </Loding>
                            :
                            <></>
                        }
                        <AwardsBigItems>
                            {data.length > 0 ?
                                data.map((item, index) => {
                                    if(index < 3){
                                        return(
                                            <AwardsBigItem>
                                                <div>
                                                    <img src={item.children[5].value} alt="alt"/>
                                                </div>
                                                <AwardsBigItemDetail>
                                                    <p className="title">{item.children[1].value}</p>
                                                    <p className="content">
                                                        {item.children[2].value} ~ {item.children[3].value}<br/>
                                                        {item.children[4].value}
                                                    </p>
                                                </AwardsBigItemDetail>
                                                <div>
                                                    <p className="awards">
                                                        {item.children[8].value.split("&lt;br&gt;").map((txt) => (
                                                            <>
                                                                {txt}
                                                                <br />
                                                            </>
                                                        ))}
                                                    </p>
                                                </div>
                                            </AwardsBigItem>
                                        );
                                    }
                                })
                                :
                                <></>
                            }
                        </AwardsBigItems>
                        <AwardsSmallItems>
                            {data.length > 0 ?
                                    data.map((item, index) => {
                                        if(index > 3){
                                            return(
                                                <AwardsSmallItem>
                                                    <div className="index">
                                                        <p>{index + 1}</p>
                                                    </div>
                                                    <div className="image-title">
                                                        <div className="image">
                                                            <img src={item.children[5].value} alt="alt"/>
                                                        </div>
                                                        <div className="title">
                                                            <p>{item.children[1].value}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail">
                                                        <div className="date-area">
                                                            <p>
                                                                {item.children[2].value} ~ {item.children[3].value}<br/>
                                                                {item.children[4].value}
                                                            </p>
                                                        </div>
                                                        <div className="award">
                                                            <p>
                                                                {item.children[8].value.split("&lt;br&gt;").map((txt) => (
                                                                    <>
                                                                        {txt}
                                                                        <br />
                                                                    </>
                                                                ))}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </AwardsSmallItem>
                                            );
                                        }
                                    })
                                    :
                                    <></>
                                }
                        </AwardsSmallItems>
                    </AwardsItemsWrap>
                </div>
            </AwardsItems>
        </AwardsListWrap>
    );
}

export default AwardsList;