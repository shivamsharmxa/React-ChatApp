const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try{
        const r = await axios.put 
        ("https://api.chatengine.io/users/",
        {username: username , secret: username,first_name: username},
        {headers: {'private-key': 'c028441a-da58-4732-bd8a-8f2dc7696f19'}})

        return res.status(r.status).json(r.data)
    } 
    catch (e){
        return res.status(e.response.status).json(e.response.data)
    }
});


app.get('/ping', async(req, res)=>{
    return res.status(200).json({
        message: "pong"
    })
})
app.listen(3001);