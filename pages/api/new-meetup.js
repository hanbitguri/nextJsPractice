import { MongoClient } from "mongodb";

//서버 사이드 코드 정의
// api/new-meetup 치면 함수 트리거됨
async function handler(req,res){
    if(req.method==='POST'){

        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://exam:1234@cluster0.k0pptbu.mongodb.net/meetups?retryWrites=true&w=majority');
        
        const db = client.db();

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        res.status(201).json({message : 'inserted!!'})

        console.log(result);

        client.close();
    }
}

export default handler;