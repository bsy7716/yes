import React from "react";
import styled from "styled-components";

const HotListWrap = styled.div`
    margin: 50px 0;
    & h1{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 30px;
    }
`
const HotLists = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
`

const LeftHotList = styled.div`
    width: 35%;
    padding: 10px;
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
    return (
        <HotListWrap>
            <h1>What's Hot</h1>
            <HotLists>
                <LeftHotList>
                    <div>
                        <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                    </div>
                    <div>
                        <p className="title">연극 61년생 홍길동</p>
                        <p className="detail">2022.01.07 ~ 2022.01.08 / 15세 이상 관람</p>
                    </div>
                </LeftHotList>
                <RightHotList>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                    <HotListItem>
                        <HotListItemWrap>
                            <div className="img-area">
                                <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" alt="alt"/>
                            </div>
                            <div className="content">
                                <div>
                                    <p className="title">연극 빈센트 리버</p>
                                    <p className="detail">
                                        2022.01.07 ~ 2022.01.08<br/>
                                        대학교 무슨 캠퍼스
                                    </p>
                                    <p className="age">15세 이상 관람</p>
                                </div>
                            </div> 
                        </HotListItemWrap>
                    </HotListItem>
                </RightHotList>
            </HotLists>
        </HotListWrap>
    );
}

export default HotList;
