import React from "react";
import styled from "styled-components";

const HotListWrap = styled.div`
    min-height: 450px;
    border: 1px solid gray;
    & h1{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        padding: 50px 0;
    }
`
const HotLists = styled.div`
    width: 65%;
    margin: 0 auto;
    min-height: 350px;
    border: 1px solid red;
    display: flex;
`

const LeftHotList = styled.div`
    width: 35%;
    border: 1px solid green;
    padding: 10px 20px;
    & div:first-child{
        border: 1px solid red;
        & img{
            width: 100%;
            height: 600px;
        }
    }

    & div:last-child{
        border: 1px solid blue;
        line-height: 60px;
        text-align: center;
    }
`

const RightHotList = styled.div`
    width: 65%;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const HotListItem = styled.div`
    width: 33%;
    padding: 10px 15px;
    border: 1px solid orange;
    flex: none;
    position: relative;

    & div.img-area{
        width: calc(100% - 30px);
        position: absolute;
        border: 1px solid red;
        transition: 0.3s;
        &:hover{
            opacity: 0.8;
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
                        <img/>
                    </div>
                    <div>
                        <p>Name</p>
                        <p>Date</p>
                    </div>
                </LeftHotList>
                <RightHotList>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                    <HotListItem>
                        <div className="img-area">
                            <img src="http://tkfile.yes24.com/upload2/perfblog/202207/20220729/20220729-43028.jpg/dims/quality/70/" width="100%" height="350px"/>
                        </div>
                        <div className="content">
                        </div> 
                    </HotListItem>
                </RightHotList>
            </HotLists>
        </HotListWrap>
    );
}

export default HotList;