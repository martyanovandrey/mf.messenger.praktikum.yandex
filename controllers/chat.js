import {users, messages} from '../static/pages/storage.js'



export const chats = (req, res) => {
    console.log(req.body);
    let userName = users.find(x => x.id === req.body.id).first_name;
    let chatMessages = messages.find(x => x.chat === userName);
    console.log('GET CHATS');
    //res.mydata={test: 'test'}
    res.status(200).send(userName)
}

/*
export const remove = (req, res) => {
    console.log('ID', req.params.id)
    users = users.filter(s => s.id !== req.params.id)
    res.json({message: 'Deleted'})
}
*/


