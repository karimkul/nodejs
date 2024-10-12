// Original data
const user = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "securepassword",
    passwordConfirmation: "securepassword"
};

const hobbies = ["Reading", "Swimming", "Coding"];

// Serialization (Client Side)
const userJSON = JSON.stringify(user);
const hobbiesJSON = JSON.stringify(hobbies);

// Send userJSON and hobbiesJSON to the server...

// Deserialization (Server Side)
const receivedUser = JSON.parse(userJSON);
const receivedHobbies = JSON.parse(hobbiesJSON);

// Access the structured data
console.log(receivedUser.username); // Outputs: "JohnDoe"
console.log(receivedHobbies[0]); // Outputs: "Reading"
