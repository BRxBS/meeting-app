import Head from 'next/head'
import MeetupList from '@/components/meetups/MeetupList'
import { MongoClient } from 'mongodb'


// const inter = Inter({ subsets: ['latin'] })


export default function Home(props) {

  return (
    <>
      <Head>
        <title>Let's Meet </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main > 
           <MeetupList meetups={props.meetups}/>
      </main>
    </>
  )
}

export async function getStaticProps(){
  MongoClient.connect();
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db()

  const meetupsCollection =  db.collection(process.env.MONGODB_COLLECTION);

  const meetups = await meetupsCollection.find().sort({_id: -1}).toArray()
 
  client.close();
 
 
  return{
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        date: meetup.date,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}