import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json());
// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:4200"]
// }))
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"  // Use a single string instead of an array if only one origin
}));


app.get("/api/foods", (req, res) => {
    try {
        res.send(sample_foods);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred");
    }
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    try {
        const searchTerm = req.params.searchTerm;
        const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
        res.send(foods)

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred");
    }

})

app.get("/api/foods/tags", (req, res) => {
    try {
        res.send(sample_tags)

    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred");
    }
})

app.get("/api/foods/tag/:tagName", (req, res) => {
    try {
        const tagName = req.params.tagName;
        const foods = sample_foods.filter(food => food.tags?.includes(tagName));
        res.send(foods)
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred");
    }
})
app.get("/api/foods/:foodId", (req, res) => {
    try {
        const foodId = req.params.foodId;
        const food = sample_foods.find(food => food.id === foodId); // Use `find` instead of `filter`
        
        if (food) {
            res.send(food);  // Send the single object directly
        } else {
            res.status(404).send({ message: "Food not found" });  // Handle not found
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred");
    }
});
 app.post("/api/users/login",(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body)
    const user=sample_users.find(user=>user.email===email && user.password===password);
    if(user){
        res.send(generateTokeResponse(user))
    }else{
        res.status(400).send("User name or password is not valid");
    }


 })

 const generateTokeResponse=(user:any)=>{
    const token=jwt.sign({
        email:user.email,
        isAdmin:user.isAdmin
    },"Sjhdsrhm",{
        expiresIn:"30d"
    });
    user.token=token;
    return user;

 }


const port = 5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port)
})