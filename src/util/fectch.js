
//24.11.12 한택 [완료] : ButtonEx 와 fetchApi 기능 분리 작업 완료
export const REST = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE:'DELETE'
});


export async function fetch(url,data = {},fetchType = REST.GET){

    const baseUrl = url;
    let fetchUrl = baseUrl;
    if(fetchType == REST.GET){
        const parameter = setQueryString(data);
        fetchUrl += `?${parameter}`;
    }

    try {
        const response = await fetch(fetchUrl, {
            method: fetchType,         // HTTP 메서드 (기본값: GET)
            headers: {  // HTTP 헤더 설정
                "Accept": "application/json", // JSON으로 요청 수락
                "Content-Type": "application/json" // JSON 데이터 전송 시 필요
            },
            body: fetchType == REST.PUT || fetchType == REST.POST ? JSON.stringify(data) : undefined,              // 요청 본문 (POST, PUT 등에서 사용)
            
            /*
            mode: "cors",          // CORS 정책 설정
            credentials: "same-origin", // 쿠키 및 인증 정보 처리
            cache: "default",      // 캐시 처리 방법 설정
            redirect: "follow",    // 리다이렉트 처리 방식
            referrer: "client",    // 요청의 참조 페이지(referrer) 설정
            referrerPolicy: "no-referrer-when-downgrade", // Referrer 정책 설정
            integrity: "",         // 리소스 무결성 검증
            keepalive: false,      // 페이지 종료 후에도 요청 유지 여부
            signal: AbortSignal,   // 요청 중단(Abort) 시 사용
            */
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // JSON 형태로 응답 파싱
        console.log("데이터:", data); // 파싱된 데이터 사용
        return data;
    } catch (error) {
        console.error("에러 발생:", error); // 에러 처리
    }
}


//util
function setQueryString(dicData){

    const queryString = new URLSearchParams(Object.entries(dicData)).toString();

    return queryString;
}
