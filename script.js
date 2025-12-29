const pipes = {
  1: { ph: 7.2, turbidity: "2 NTU", tds: "420 ppm", status: "NORMAL" },
  2: { ph: 6.8, turbidity: "4 NTU", tds: "460 ppm", status: "WARNING" },
  3: { ph: 9.1, turbidity: "12 NTU", tds: "820 ppm", status: "CRITICAL" },
  4: { ph: 7.0, turbidity: "3 NTU", tds: "400 ppm", status: "NORMAL" },
  5: { ph: 7.3, turbidity: "2 NTU", tds: "390 ppm", status: "NORMAL" }
};

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function viewPipe(id) {
  const p = pipes[id];
  document.getElementById("pipeTitle").innerText = `Pipe IN‑00${id} Details`;
  document.getElementById("ph").innerText = p.ph;
  document.getElementById("turbidity").innerText = p.turbidity;
  document.getElementById("tds").innerText = p.tds;

  const status = document.getElementById("pipeStatus");
  status.innerText = p.status;
  status.className = `status ${p.status.toLowerCase()}`;

  showSection('details');
}

function simulateAlert() {
  alert("🚨 Contamination detected! Alert sent to authorities.");
}
