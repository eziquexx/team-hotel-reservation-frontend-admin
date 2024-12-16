import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";
import { Table } from "react-bootstrap";

export default function AdminReservationContent() {
  
  const {
    data,
    loading,
    error,
    setMethod,
    setPathParams,
    setBody,
    setQueryParams,
    FetchLoadingComponent,
    on,
    off
  } = useFetchData("reservation/list/{direction}");
  
  const [firstId,setFirstId] = useState(0);
  const [lastId,setLastId] = useState(0);

  useEffect(()=>{
    // useFetchData setState
    on("afterFetch", (result) => {
      if (result && result.reservationList.length > 0) {
          setFirstId(result.reservationList[0].reservationId);
          setLastId(result.lastReservationId);

          off('afterFetch');
      }
    });

    setQueryParams({
      size : 10
    });
    setPathParams({ direction: "" });

    //fetch start!!!
    setMethod('GET');

  },[]);

  function formatDate(dateString){
    const date = new Date(dateString)
    const formattedDate = date.toISOString().replace('T', ' ').split('.')[0];
    return formattedDate;
  }

  function onClickPrevButton(){
    console.log("firstVal : "+firstId);
    if(data.reservationList[0].reservationId > firstId){
      setPathParams({
          direction : "prev"
      });

      setQueryParams({
          size : 10,
          lastValue : data.reservationList[0].reservationId
      });

      setMethod('GET');
    }
  }

  function onClickNextButton(){
      console.log('lastVal :'+ lastId);
      if(data.reservationList[data.reservationList.length-1].reservationId < lastId){
        setPathParams({
          direction : "next"
        });

        setQueryParams({
          size : 10,
          lastValue : data.reservationList[data.reservationList.length-1].reservationId
        });

        setMethod('GET');
      }
  }
  
      if (error) return <div>Error: {error}</div>;
      // if (!data) return <div>No reservation data available.</div>;
  
      return (
        <>
           
            <h5 className="contentTitle">예약 목록</h5>
            <div className="contentTable">
              <div className="table-height-fixed">
                {loading ?
                  <FetchLoadingComponent/> :

                  <Table
                    responsive="xl"
                    border={1}
                    className="table-hover table-bordered text-center"
                  >
                    <thead className="table-light">
                      <tr>
                        <th>예약ID</th>
                        <th>회원이름</th>
                        <th>객실유형</th>
                        <th>기본인원</th>
                        <th>최대인원</th>
                        <th>객실번호</th>
                        <th>체크인</th>
                        <th>체크아웃</th>
                        <th>예약상태</th>
                        <th>총 금액</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      {data.reservationList.map((item,index) => (<tr 
                          key={index}
                          onClick={() => {}}
                          style={{ cursor: 'pointer' }}
                        >
                          <td>{item.reservationId}</td>
                          <td>{item.memberName}</td>
                          <td>{item.roomType}</td>
                          <td>{item.baseOccupancy}</td>
                          <td>{item.maxOccupancy}</td>
                          <td>{item.roomNumber}</td>
                          <td>{formatDate(item.checkIn)}</td>
                          <td>{formatDate(item.checkOut)}</td>
                          <td>{item.status}</td>
                          <td>{item.totalAmount}</td>
                        </tr>)
                      )}
                    </tbody>
                  </Table>}
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className='btn col col-lg-2' onClick={()=>onClickPrevButton()}>{"<<<<<<"}</div>
              <div className='btn col col-lg-2'onClick={()=>onClickNextButton()}>{">>>>>>"}</div>
            </div>
        </>
      );
}
