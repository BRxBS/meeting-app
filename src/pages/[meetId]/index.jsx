import { MongoClient, ObjectId } from 'mongodb'
import classes from './MeetDets.module.scss';

function MeetupDetails(props) {
  return (
    <div className={classes.container}>
        <img className={classes.img} src={props.meetupData.image} alt='' />
        <h2 className={classes.title} >{props.meetupData.title}</h2>
        <h3 className={classes.address} >{props.meetupData.address}</h3>
        <p className={classes.description} > {props.meetupData.description}</p>

    </div>
  );
}

export async function getStaticPaths(){

MongoClient.connect();
const client = await MongoClient.connect(process.env.MONGODB_URI)
const db = client.db()

const meetupsCollection =  db.collection(process.env.MONGODB_COLLECTION);

const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()
client.close();

return{
  fallback: 'blocking',
  paths: meetups.map((meetup) => ({
    params: {meetId : meetup._id.toString()}
  }))
}
}

export async function getStaticProps(context){
// fetch the data for a single meetup
const meetId = context.params.meetId

MongoClient.connect();
const client = await MongoClient.connect(process.env.MONGODB_URI)
const db = client.db()

const meetupsCollection =  db.collection(process.env.MONGODB_COLLECTION);

const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetId)});

client.close();



  return{
    props:{
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      }
    }
  }

}

export default MeetupDetails;
