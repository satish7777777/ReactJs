

export const welcome = async(req, res) => {
    try{
        console.log(req.body)
        res.status(200).send({message:req.body});
    }
   catch(error){
        res.status(500).json("internal server error");
   }
};

export const register = async(req, res) => {
    try{
        console.log(req.body)
    
    //    return res.status(200).send("Welcome to REGISTER");
     res.status(200).json(req.body)
    }catch(error){
        res.status(500).json("internal server error");
    }
};
