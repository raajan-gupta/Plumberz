// create a server 
const express = require("express")

const app = express()
app.use(express.static("static"))

app.listen(8000, () => {
    console.log(`Server is running at https://localhost:8000`)
})




















































// simple rounting
 
// const express = require("express")
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("<h1>This is Home Page</h1>")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>This is About Page</h1>")
// })
// app.get("/profile",(req,res)=>{
//     res.send("<h1>This is Profile Page</h1>")
// })
// app.get("/blog",(req,res)=>{
//     res.send("<h1>This is Blog Page</h1>")
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>This is Contact Page</h1>")
// })
// app.use("/*",(req,res)=>{
//     res.status(404).send("<h1>404! Page Not Found</h1>")
// })

// app.listen(5000,()=>{
//     console.log(`Server is running at https://localhost:5000`)
// })



// const express = require("express")
// const app = express()

// http://localhost:5000/profile/Rajan%20Gupta/Web-Developer/35000/NewDelhi/Delhi
// app.get("/profile/:name?/:dsg?/:salary?/:city?/:state?", (req, res) => {
//     console.log(req.params)
//     res.send(`<h1>This is Profile Page</h1>
//         ${req.params.name?"<h1>name = " + req.params.name + "</h1>" :""}
//         ${req.params.dsg?"<h1>Designation = " + req.params.dsg + "</h1>" :""}
//         ${req.params.salary?"<h1>salary = " + req.params.salary + "</h1>" :""}
//         ${req.params.city?"<h1>city = " + req.params.city + "</h1>" :""}
//         ${req.params.state?"<h1>state = " + req.params.state + "</h1>" :""}

//         `)

// })
// http://localhost:5000/contact?name=Rajan%20Gupta&dsg=Full%20stack%20Developer&salary=35000&city=New%20Delhi&state=Delhi
// app.get("/contact", (req, res) => {
//     console.log(req.query)
//     res.send(`<h1>This is Contact Page</h1>
//         ${req.query.name?"<h1>name = " + req.query.name + "</h1>" :""}
//         ${req.query.dsg?"<h1>Designation = " + req.query.dsg + "</h1>" :""}
//         ${req.query.salary?"<h1>salary = " + req.query.salary + "</h1>" :""}
//         ${req.query.city?"<h1>city = " + req.query.city + "</h1>" :""}
//         ${req.query.state?"<h1>state = " + req.query.state + "</h1>" :""}

//         `)

// })

// app.get("/*", (req, res) => {
//     res.status(404).send("<h1> 404! Page Not found</h1>")

// })
// app.listen(5000, console.log("server is Running at http://localhost:8000"))


// const express = require("express")

// const app = express()

// app.get("/", (req, res) => {
//     res.send("<h1 >This is Home Page</h1>")
// })
// app.get("/data", (req, res) => {
//     let data = [
//         {
//             "id": 1,
//             "name": "Rohit Sharma",
//             "email": "rohit.sharma@example.com",
//             "designation": "Software Engineer",
//             "salary": 75000,
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "phone": "9876543210"
//         },
//         {
//             "id": 2,
//             "name": "Anjali Verma",
//             "email": "anjali.verma@example.com",
//             "designation": "UI/UX Designer",
//             "salary": 68000,
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "phone": "9123456780"
//         },
//         {
//             "id": 3,
//             "name": "Sandeep Kumar",
//             "email": "sandeep.kumar@example.com",
//             "designation": "Project Manager",
//             "salary": 95000,
//             "city": "Delhi",
//             "state": "Delhi",
//             "phone": "9988776655"
//         },
//         {
//             "id": 4,
//             "name": "Priya Singh",
//             "email": "priya.singh@example.com",
//             "designation": "Backend Developer",
//             "salary": 72000,
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "phone": "9012345678"
//         },
//         {
//             "id": 5,
//             "name": "Vikram Patel",
//             "email": "vikram.patel@example.com",
//             "designation": "QA Engineer",
//             "salary": 65000,
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "phone": "9871234560"
//         }, {
//             "id": 1,
//             "name": "Rohit Sharma",
//             "email": "rohit.sharma@example.com",
//             "designation": "Software Engineer",
//             "salary": 75000,
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "phone": "9876543210"
//         },
//         {
//             "id": 2,
//             "name": "Anjali Verma",
//             "email": "anjali.verma@example.com",
//             "designation": "UI/UX Designer",
//             "salary": 68000,
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "phone": "9123456780"
//         },
//         {
//             "id": 3,
//             "name": "Sandeep Kumar",
//             "email": "sandeep.kumar@example.com",
//             "designation": "Project Manager",
//             "salary": 95000,
//             "city": "Delhi",
//             "state": "Delhi",
//             "phone": "9988776655"
//         },
//         {
//             "id": 4,
//             "name": "Priya Singh",
//             "email": "priya.singh@example.com",
//             "designation": "Backend Developer",
//             "salary": 72000,
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "phone": "9012345678"
//         },
//         {
//             "id": 5,
//             "name": "Vikram Patel",
//             "email": "vikram.patel@example.com",
//             "designation": "QA Engineer",
//             "salary": 65000,
//             "city": "Ahmedabad",
//             "state": "Gujarat",
//             "phone": "9871234560"
//         }
//     ]
//     res.send(data)

// })


// app.get("/*", (req, res) => {
//     res.status(404).send("<h1 >404! Page Not Found</h1>")
// })
// app.listen(8000, () => {
//     console.log(`server is running at https://localhost:8000`)
// })


// const express = require("express")
// const fs = require("fs")

// const app = express()

// app.get("/",(req,res)=>{
//     res.send("<h1>This is Home Page</h1>")
// })
// app.get("/data", (req, res) => {
//     const data = fs.readFileSync("data.json", "utf-8")
//     res.send(JSON.parse(data))
// })

// app.get("/*", (req, res) => {
//     res.status(404).send("<h1 >404! Page Not Found</h1>")
// })
// app.listen(8000, () => {
//     console.log(`Server is Running at https://localhost:8000 `)
// })