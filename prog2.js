async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Users Information");
    users.forEach(user => {
        console.log("-----------------------------");
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`City: ${user.address.city}`);
        console.log("----------------------------");
    });
}
fetchUser();