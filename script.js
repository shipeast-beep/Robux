async function findUser() {
  const username = document.getElementById("username").value.trim();
  const profileDiv = document.getElementById("profile");
  const amountBox = document.getElementById("amounts");

  if (!username) {
    profileDiv.innerHTML = "<p style='color:red;'>Please enter a username.</p>";
    return;
  }

  try {
    const userResponse = await fetch(`https://users.roblox.com/v1/usernames/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames: [username] })
    });

    const userData = await userResponse.json();
    if (!userData.data || userData.data.length === 0) {
      profileDiv.innerHTML = "<p>User not found.</p>";
      return;
    }

    const userId = userData.data[0].id;
    const avatarUrl = `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=150&height=150&format=png`;

    profileDiv.innerHTML = `
      <p>Found user: <strong>${username}</strong></p>
      <img src="${avatarUrl}" alt="Profile picture">
    `;
    amountBox.style.display = "block";
  } catch (err) {
    profileDiv.innerHTML = "<p>Error fetching profile.</p>";
  }
}

function goToPayment(amount) {
  window.location.href = `payment.html?amount=${amount}`;
}
