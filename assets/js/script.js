"use strict";

// Local time in Minas Gerais, like Nim's home clock
const timeZone = "America/Sao_Paulo";
const timeElement = document.querySelector("[data-clock-time]");
const dateElement = document.querySelector("[data-clock-date]");

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone,
  hour: "2-digit",
  minute: "2-digit",
});
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone,
  weekday: "short",
  day: "numeric",
  month: "short",
});

function tick() {
  const now = new Date();
  timeElement.textContent = timeFormat.format(now);
  timeElement.dateTime = now.toISOString();
  dateElement.textContent = `${dateFormat.format(now)} · Minas Gerais, Brasil`;
}

tick();
setInterval(tick, 10_000);

document.querySelector("[data-year]").textContent = new Date().getFullYear();
