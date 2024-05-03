// Get ip address from the title
const serverLink = document.querySelector(".blocknewheader02 a").href.split("server_info/")[1];

// Create button, set Steam URI path (Steam browser protocol)
const connectButton = document.createElement("a");
connectButton.setAttribute("href", "steam://connect/" + serverLink);
connectButton.setAttribute("class", "fbutton");
connectButton.textContent = "Connect";

// Find mainLine
const mainLine = document.querySelector(".blocknewheadercnt");

// Add connect button to the end of the mainLine
mainLine.appendChild(connectButton);