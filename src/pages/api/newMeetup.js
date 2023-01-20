// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  if(req.method === post){
    const data = req.body

    const {title, image, address,description} = data;

   const client = await MongoClient.connect(process.env.MONGODB_URI)
   const db = client.db()

   const meetupsCollection =  db.collection(process.env.MONGODB_COLLECTION);
   meetupsCollection.insertOne(data)


  //  to close the data base when done
  client.close();

  res.status(201).json({messege: 'Meetupinserted!'})
  }
}
