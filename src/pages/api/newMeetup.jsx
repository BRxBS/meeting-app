// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  if(req.method === 'POST'){
    const data = req.body

   const client = await MongoClient.connect(process.env.MONGODB_URI)
   const db = client.db()

   const meetupsCollection =  db.collection(process.env.MONGODB_COLLECTION);

   const result = await meetupsCollection.insertOne(data)

   console.log("result", result)
   console.log("API data", data)  


  //  to close the data base when done
  client.close();

  res.status(201).json({messege: 'Meetup inserted!'})
  }
}
