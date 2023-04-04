let dbUsers = [
    {
        username: "nave",
        password: "123456",
        name: "Nave",
        email: "nave@student.utem.edu.my"
    },

    {
        username: "john",
        password: "password",
        name:  "John",
        email: "john@student.utem.edu.my"
    },
    
    {
        username: "ali",
        password: "654321",
        name: "Ali",
        email: "ali@student.utem.edu.my"
    },
]

//function login(reqUsername, reqPassword) {
//  let matchUser = dbUsers.find (user => user.username == reqUsername)
//   console.log(matchUser)
//}

function login(reqUsername, reqPassword) {
    let matchUser = dbUsers.find (x => x.username == reqUsername)

if(!matchUser) return "User not found!"
if (matchUser.password == reqPassword){
    return matchUser
} else {
    return "Invalid password"
}
}




// to register an account
function register (reqUsername, reqPassword, reqName, reqEmail) {
    dbUsers.push( {
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email:reqEmail
    })
}

//try to login
console.log (login("nave","123456"))
console.log (login ("utem","password"))

register("utem", "password", "fkekk", "fkekk@utem.edu.my")

console.log (login("utem", "password", "fkekk", "fkekk@utem.edu.my"))



