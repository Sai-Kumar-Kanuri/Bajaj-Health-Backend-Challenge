const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

app.use(express.json())

app.post('/',(req,res)=>{
    try{

        const Info = req.body.data
        const charArr = []
        const numArr = []
        console.log(Info.length)
         for(idx = 0;idx<Info.length;idx++){
            var num = parseInt(Info[idx])
            if(!num){

                const alphabetPattern = /^[A-Za-z]+$/;
                const isValid = alphabetPattern.test(Info[idx]);
                if(isValid)
                {
                    charArr.push(Info[idx]);
                }
            }else{  
                numArr.push(Info[idx]);
            }
        }
        res.status(200).json({
            is_success:true,
            user_id:"john_doe_17091999",
            email:"john@xyz.com",
            num:numArr,
            alphabets:charArr,
        })

    }
    catch(err){
        console.log(err);
    }
}) 



const port = process.env.PORT
app.listen({ port }, () => {
    console.log(`Server is running at port ${port}`);
})