async function fetchUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const usersList = document.getElementById("users");
    usersList.innerHTML = "";

    console.log("Users Information");
    users.forEach(user => {
        
        usersList.innerHTML += `
            <div class="user-card">
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
            </div>
        `;
    });
}