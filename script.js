function showPipes() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("pipes").classList.remove("hidden");
}

function showDetails() {
  document.getElementById("pipes").classList.add("hidden");
  document.getElementById("details").classList.remove("hidden");
}

function goBack() {
  document.getElementById("pipes").classList.add("hidden");
  document.getElementById("details").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function triggerAlert() {
  document.getElementById("alert").classList.remove("hidden");
  document.getElementById("status").innerText = "CRITICAL";
  document.getElementById("status").className = "red";
}
