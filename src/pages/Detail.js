import { useParams } from 'react-router-dom';

function Detail(props){
    let {id} = useParams();
    id = Number(id);
    console.log(id);

    return (
        <div className="list_con">
            <p>{props.shoes[id].title}</p>
            {/* 현재 product0을 문자로 인식해서 id+1할 경우 001로 출력됨 */}
            {/* 따라서 문자열을 숫자로 변경해줌 */}
            <img  src={`${process.env.PUBLIC_URL}/img/product0${id+1}.jpg`} />
            <p>{props.shoes[id].price}</p>
        </div>
    )
}

export default Detail;