async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = "";

    // Create a <ul> element
    const userList = document.createElement("ul");

    // Loop through users and create <li> for each
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
