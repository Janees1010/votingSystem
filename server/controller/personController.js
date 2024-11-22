const Person = require("../model/personModel")


const createPerson = async(req,res)=>{
    try {
        const {name} = req.body;
        const newPerson = new Person({
            name:name,
            count:0
        })
        const response = await newPerson.save()
        console.log(response);
        return res.status(200).json(response)
    } catch (error) {
         return res.status(500).json(error.message)
    }
}

const handleLikeIncriment = async(req,res)=>{
    try {
        const {name} = req.body;
        const response = await Person.findOneAndUpdate({name:name},{$inc:{count:1}},{new:true})
        return res.status(200).json(response)
    } catch (error) {
         return res.status(500).json(error.message)
    }
}

const handleLikeDecriment = async(req,res)=>{
    try {
        const {name} = req.body;
        const checkingCount = await Person.findOne({name:name}) 
        console.log(checkingCount);
        
        if(checkingCount.count === 0){
            console.log(checkingCount);
            return res.status(400).json("zero cant be decrimented")
        }
        const response = await Person.findOneAndUpdate({name:name},{$inc:{count:-1}},{new:true})
        return res.status(200).json(response)
    } catch (error) {
         return res.status(500).json(error.message)
    }
}

const getPersons = async(req,res)=>{
     try {
         const persons = await Person.find()
         return res.status(200).json(persons)
     } catch (error) {
        return res.status(500).json(error.message)
     }
}

module.exports = {
    handleLikeIncriment,
    createPerson,
    handleLikeDecriment,
    getPersons
}

