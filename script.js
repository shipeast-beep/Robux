function findUser() {
  const username = document.getElementById("username").value.trim();
  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = "<p style='color:red;'>Please enter a username.</p>";
    return;
  }

  const dummyAvatarURL = "https://tr.rbxcdn.com/6f27f5f3145eae5c93b56d0d1b167d13/150/150/AvatarHeadshot/Png";

  profileDiv.innerHTML = `
    <p>Found user: <strong>${username}</strong></p>
    <img src="${dummyAvatarURL}" alt="Profile picture">
  `;
}

function selectAmount(amount) {
  document.getElementById("payment").style.display = "block";
}

function pay() {
  document.getElementById("payment").style.display = "none";
  document.getElementById("result").style.display = "block";
}
