// === CONFIG — EDIT THIS ===
// Your WhatsApp number in international format, digits only (no +, no spaces).
// Example: 919345568244  (that's +91 93455 68244)
const WHATSAPP_NUMBER = "919345568244";

// ==========================

const priceMap = {
  "Starter (₹499)": "₹499",
  "Creator (₹1,999 / 5 videos)": "₹1,999",
  "Channel (₹7,999 / 30 videos)": "₹7,999",
  "Custom": "To be discussed",
};

function buildMessage() {
  const name = document.getElementById("custName").value.trim() || "—";
  const phone = document.getElementById("custPhone").value.trim() || "—";
  const pack = document.getElementById("packSelect").value;
  const vidType = document.getElementById("vidType").value;
  const script = document.getElementById("scriptText").value.trim() || "—";
  const price = priceMap[pack] || "";

  return [
    "🎬 *New AI Video Order — Prem AI Video Studio*",
    "",
    "*Name / Brand:* " + name,
    "*WhatsApp:* " + phone,
    "*Package:* " + pack + (price ? "  (" + price + ")" : ""),
    "*Video type:* " + vidType,
    "*Topic / Script:*",
    script,
  ].join("\n");
}

document.getElementById("year").textContent = new Date().getFullYear();

// Pre-fill package select when clicking a pricing card
document.querySelectorAll(".pack a[data-pack]").forEach((a) => {
  a.addEventListener("click", () => {
    document.getElementById("packSelect").value = a.dataset.pack;
  });
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = encodeURIComponent(buildMessage());
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
  window.open(url, "_blank");
});

document.getElementById("copyUpi").addEventListener("click", () => {
  const id = document.getElementById("upiId").textContent;
  navigator.clipboard?.writeText(id).then(() => {
    const btn = document.getElementById("copyUpi");
    const old = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = old), 1500);
  });
});
