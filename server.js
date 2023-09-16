import express from "express";
const app = express();


app.use(express.json());


let currentUser = {
    "name": "John doe",
    "age": 34,
    "hairColor": "red",
    "hobbies": ["swimming", "Eating", "video games"]
};

let users = [

    {
        "id": 1,
        "name": "Jack daniel",
        "age": 34,
        "hairColor": "red",
        "hobbies": ["Drinking", "Drinking", "Conflicts"]
    },
    {
        id: 2,
        "name": "vikram rathod",
        "age": 34,
        "hairColor": "32",
        "hobbies": ["GYm", "Killing criminals", "Playing With Daughter"]
    },
    {
        "id": 3,
        "name": "Veerappan",
        "age": 55,
        "hairColor": "brown",
        "hobbies": ["Killing", "Smuggling", "Playing games"]
    },
    {
        "id": 4,
        "name": "Megana kaur",
        "age": 20,
        "hairColor": "black",
        "hobbies": ["Chatting", "Eating", "Flirting"]
    }
];

const products = [
    {
        "id": 1,
        "name": "fan",
        "price": "500$",
        "description": "good fans that spins without giving air",
        "rating": "4.5"
    },
    {
        "id": 2,
        "name": "Refrigerator",
        "price": "1000$",
        "description": "good refrigerator that keeps food warm",
        "rating": "4.5"
    },
    {
        "id": 3,
        "name": "AC",
        "price": "2000$",
        "description": "good AC that keeps room warm",
        "rating": "4.5"
    },
    {
        "id": 4,
        "name": "TV",
        "price": "3000$",
        "description": "good TV that keeps room warm",
        "rating": "4.5"
    },
    {
        "id": 5,
        "name": "Washing Machine",
        "price": "4000$",
        "description": "good Washing Machine that keeps room warm",
        "rating": "4.5"
    }
];


app.get("/api/currentuser", (req, res) => {
    res.json(currentUser);
})

app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    res.json(users.find(user => user.id === Number(id)))
})

app.post("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const { user: UpdatedUser } = req.body;
    users = users.map(user => user.id === Number(id) ? UpdatedUser : user);
    res.json(users.find(user => user.id === Number(id)))
}
)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})