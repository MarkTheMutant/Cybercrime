let data = [];

async function loadFeed() {
  const res = await fetch("feed.json");
  data = await res.json();
  render(data);
}

function render(items) {
  const list = document.getElementById("news-list");
  list.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="${item.severity}">[ ${item.severity} ]</div>
      <a href="${item.link}" target="_blank">${item.title}</a>
      <div>${item.date}</div>
    `;

    list.appendChild(li);
  });
}

function filter(level) {
  if (level === "ALL") {
    render(data);
  } else {
    render(data.filter(item => item.severity === level));
  }
}

loadFeed();