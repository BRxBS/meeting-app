

function MeetupDetails(props) {
  return (
    <div>
        <img src='https://picsum.photos/200/300' alt='' />
        <h2>Title</h2>
        <h3>Address</h3>
        <p> discription</p>

    </div>
  );
}


export async function getStaticProps(context){
// fetch the data for a single meetup

const meetId = context.parans.meetId

  return{
    props:{

    }
  }

}

export default MeetupDetails;
