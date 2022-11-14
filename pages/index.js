
import MeetupList from '../components/meetups/MeetupList'

const DUMMY = [
    {
        id:'m1',
        title : 'A first Meet up',
        image : 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
        address: 'suwon',
        description: "갱얼쥐귀여워"
    }
]
function HomePage(props) {
  return (
    <>
    
    <MeetupList meetups={props.meetups}></MeetupList>
    
    </>
  )
}
export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;
    // 요청이 들어올때 업데이트함
    return {
        props:{
            meetups : DUMMY
        }
        //revalidate 사용불가
    }
}
// export async function getStaticProps(){
//     //일반적으로 서버에서만 돌아가는 코드들
//     //파일시스템 , 데이터베이스접근 ... 
//     //클라이언트측에서 절대 실행되지 않음 !
//     //빌드 프로세스중에 실행됨 !
//     return {
//         props:{
//             meetups : DUMMY, // 컴포넌트 props로 올라감 
//         }
//     }
// }

export default HomePage