const schedule = {
  mon: [
    { time: "6:30 AM", name: "Strong Start", type: "Strength · 45 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "12:15 PM", name: "Lunch Break Burn", type: "Conditioning · 35 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "6:00 PM", name: "Lift Together", type: "Strength · 50 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "7:15 PM", name: "Slow Down", type: "Mobility · 40 min", coach: "Coach Lee", level: "ALL LEVELS" },
  ],
  tue: [
    { time: "7:00 AM", name: "Engine Room", type: "Conditioning · 40 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "12:15 PM", name: "Move Better", type: "Mobility · 35 min", coach: "Coach Lee", level: "ALL LEVELS" },
    { time: "5:45 PM", name: "The Heavy-ish", type: "Strength · 50 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "7:00 PM", name: "Sweat & Reset", type: "Conditioning · 45 min", coach: "Coach Jules", level: "ALL LEVELS" },
  ],
  wed: [
    { time: "6:30 AM", name: "Strong Start", type: "Strength · 45 min", coach: "Coach Lee", level: "ALL LEVELS" },
    { time: "12:15 PM", name: "Lunch Break Burn", type: "Conditioning · 35 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "6:00 PM", name: "Lift Together", type: "Strength · 50 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "7:15 PM", name: "Slow Down", type: "Mobility · 40 min", coach: "Coach Lee", level: "ALL LEVELS" },
  ],
  thu: [
    { time: "7:00 AM", name: "Engine Room", type: "Conditioning · 40 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "12:15 PM", name: "Move Better", type: "Mobility · 35 min", coach: "Coach Lee", level: "ALL LEVELS" },
    { time: "5:45 PM", name: "The Heavy-ish", type: "Strength · 50 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "7:00 PM", name: "Sweat & Reset", type: "Conditioning · 45 min", coach: "Coach Jules", level: "ALL LEVELS" },
  ],
  fri: [
    { time: "6:30 AM", name: "Strong Start", type: "Strength · 45 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "12:15 PM", name: "Lunch Break Burn", type: "Conditioning · 35 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "5:30 PM", name: "Friday Feel Good", type: "Full Body · 45 min", coach: "Coach Lee", level: "ALL LEVELS" },
  ],
  sat: [
    { time: "8:30 AM", name: "Weekend Strong", type: "Strength · 50 min", coach: "Coach Sam", level: "ALL LEVELS" },
    { time: "10:00 AM", name: "Good Sweat", type: "Conditioning · 45 min", coach: "Coach Jules", level: "ALL LEVELS" },
    { time: "11:15 AM", name: "Stretch It Out", type: "Mobility · 40 min", coach: "Coach Lee", level: "ALL LEVELS" },
  ],
};

const classList = document.querySelector(".class-list");
const dayTabs = document.querySelectorAll(".day-tab");

function renderSchedule(day) {
  classList.replaceChildren(...schedule[day].map((session) => {
    const row = document.createElement("article");
    row.className = "class-row";

    const time = document.createElement("span");
    time.className = "class-time";
    time.textContent = session.time;

    const detail = document.createElement("div");
    detail.className = "class-detail";
    const name = document.createElement("strong");
    name.textContent = session.name;
    const type = document.createElement("span");
    type.textContent = session.type;
    detail.append(name, type);

    const coach = document.createElement("span");
    coach.className = "class-coach";
    coach.textContent = session.coach;

    const level = document.createElement("span");
    level.className = "class-level";
    level.textContent = session.level;

    row.append(time, detail, coach, level);
    return row;
  }));
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dayTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderSchedule(tab.dataset.day);
  });
});

renderSchedule("mon");

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("open");
  }
});

document.querySelector(".trial-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const name = new FormData(form).get("name").trim();
  document.querySelector(".form-feedback").textContent =
    `You’re on your way, ${name}! The Northline team will be in touch to set up your free session.`;
  form.reset();
});
