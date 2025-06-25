document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress"); // fixed class name
    const hardProgressCircle = document.querySelector(".hard-progress");

    const cardStatsContainer = document.querySelector(".stats-card"); // fixed class name

    // Validates username based on regex rules
    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid username (must start with a letter, 3–15 characters, only letters/numbers/underscores)");
        }
        return isMatching;
    }

    // Dummy fetch function (replace with real API later)
    async function fetch_user_details(username) {
        const url = `https://example.com/api/user/${username}`; // replace with real API
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch the user details.");
            }

            const data = await response.json();
            console.log("Logging data: ", data);

            // // Example of updating stats
            // document.getElementById("easy-level").textContent = data.easy || "N/A";
            // document.getElementById("medium-level").textContent = data.medium || "N/A";
            // document.getElementById("hard-level").textContent = data.hard || "N/A";

            // // Optionally update stats card
            // cardStatsContainer.innerHTML = `
            //     <p>Total Problems Solved: ${data.totalSolved || "N/A"}</p>
            //     <p>Ranking: ${data.ranking || "N/A"}</p>
            // `;

        } catch (error) {
            statsContainer.innerHTML = '<p> No data Found </p>'
            // console.error("Error fetching user details:", error);
            // alert("Failed to fetch user details.");
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    // Handle search button click
    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("Logging username: ", username);
        if (validateUsername(username)) {
            fetch_user_details(username);
        }
    });
});
