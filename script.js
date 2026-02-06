// Typing effect for Hero name
const nameText = "AHSAN WARRAICH";
const typedName = document.getElementById("typed-name");
let index = 0;

function typeLetter() {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeLetter, 180);
  }
}
typeLetter();

// Project details data
const projectData = {
  hospital: {
    title: "Hospital Management System",
    description: "A comprehensive system designed to streamline hospital operations. It manages patient records, doctor appointments, billing, and staff schedules. The project emphasizes secure data handling, user-friendly dashboards, and efficient workflows to reduce manual errors and improve patient care."
  },
  university: {
    title: "University Management System",
    description: "A platform built to automate academic and administrative processes. It covers student enrollment, course registration, grading, faculty management, and fee tracking. The system ensures transparency, reduces paperwork, and provides real-time access to academic information for students and staff."
  },
  browser: {
    title: "Browser/Tab Manager",
    description: "A productivity tool that helps users organize and manage multiple browser tabs. Features include grouping tabs, saving sessions, quick search, and memory optimization. It’s designed to improve focus and efficiency for users who work with large numbers of tabs daily."
  },
  chatbot: {
    title: "AI Chatbot",
    description: "An intelligent chatbot capable of responding conversationally like GPT. It integrates natural language processing to answer queries, provide recommendations, and even generate audio/video responses. The project demonstrates advanced AI capabilities and showcases how conversational agents can enhance user engagement."
  },
  dashboard: {
    title: "Data Analytics Dashboard",
    description: "An intelligent chatbot capable of responding conversationally like GPT. It integrates natural language processing to answer queries, provide recommendations, and even generate audio/video responses. The project demonstrates advanced AI capabilities and showcases how conversational agents can enhance user engagement."
  },
  extra: {
    title: "Extra Project",
    description: "A placeholder project to showcase additional work."
  }
};

// Handle detail button clicks
document.querySelectorAll(".detail-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const projectKey = e.target.closest(".project-card").dataset.project;
    const detail = projectData[projectKey];
    document.getElementById("detail-title").textContent = detail.title;
    document.getElementById("detail-description").textContent = detail.description;
    document.getElementById("project-detail").style.display = "flex";
  });
});

// Close detail overlay
document.getElementById("close-detail").addEventListener("click", () => {
  document.getElementById("project-detail").style.display = "none";
});

// Animate one circle
function animateCircle(circle) {
  const percent = parseInt(circle.dataset.percent, 10);
  const bar = circle.querySelector(".bar");
  const counter = circle.querySelector(".counter");
  const radius = bar.getAttribute("r");
  const circumference = 2 * Math.PI * radius;

  // reset
  bar.style.strokeDasharray = circumference;
  bar.style.strokeDashoffset = circumference;
  counter.textContent = "0%";

  let current = 0;
  const interval = setInterval(() => {
    if (current <= percent) {
      counter.textContent = current + "%";
      const offset = circumference - (circumference * current / 100);
      bar.style.strokeDashoffset = offset;
      current++;
    } else {
      clearInterval(interval);
    }
  }, 50); // slower speed for smoother animation
}

// IntersectionObserver to animate every time section is visible
const achievementsSection = document.getElementById("achievements");
if (achievementsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // animate all circles when section is visible
        achievementsSection.querySelectorAll(".circle").forEach(circle => {
          animateCircle(circle);
        });
      } else {
        // reset circles when section goes out of view
        achievementsSection.querySelectorAll(".circle").forEach(circle => {
          const bar = circle.querySelector(".bar");
          const counter = circle.querySelector(".counter");
          const radius = bar.getAttribute("r");
          const circumference = 2 * Math.PI * radius;
          bar.style.strokeDashoffset = circumference;
          counter.textContent = "0%";
        });
      }
    });
  }, { threshold: 0.5 }); // trigger when 50% visible

  observer.observe(achievementsSection);
}
// Star rating interaction
document.querySelectorAll(".stars i").forEach((star, index, stars) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
});
