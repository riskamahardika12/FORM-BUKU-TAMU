function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("id-ID", {
    weekday: "long", day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  document.getElementById("datetime").textContent = "⌛ " + formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

document.getElementById("guestForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("thanksMessage").classList.remove("hidden");
  this.reset();
});
