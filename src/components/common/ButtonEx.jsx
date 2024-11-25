import { useNavigate } from "react-router-dom";

// props{ isREST, url, fetchType, data{}, isImage, src, content}
//24.11.12 한택 [완료] : fetchApi 기능 분리 작업 완료
//24.11.13 성준 [완료] : className 추가함
/*
    사용 방법

    event
    <ButtonEx id={"buttonSample"} action={fetch()}>
        <img src=""/>
    </ButtonEx>

    link
    <ButtonEx id={"buttonSample"} url={"/"}>
        <p>Link</p>
    </ButtonEx>
    
*/
function ButtonEx({id, className, children, action=null, url = "/"}){

    const nav = useNavigate();

    function onClickButton() {

        if(action != null){
            action();
        }
        else{
            nav(url);
        }

    }

    //24.10.30 HT^^ : 안쓰이는 기능 {isImage ? <img src={src} alt="" />  : <p>${content}</p>}
    return (
        <button id={id} className={className} onClick={onClickButton}>
            {children}
        </button>
    );

}

export default ButtonEx;