import { useRouter } from 'next/router'
import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
function MeetupDetails(props) {
  
  return (
    <>
    <MeetupDetail
    image='https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'
    title={props.title}
    address={props.address} 
    description={props.description}
   ></MeetupDetail>
    </>
  )
}
export async function getStaticPaths(){
  return {
    paths : [
      {
        params :{ meetupId : 'm1'}
      }
    ]
  }
}
export async function getStaticProps(context){

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props:{
      meetupData : {
        image : 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
        id : meetupId,
        title : 'first Title',
        address : 'suwon',
        description : 'daslkdjas'
      }

    }
  }

}
export default MeetupDetails