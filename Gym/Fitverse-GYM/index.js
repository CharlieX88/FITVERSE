/*Sliding Effect*/
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show-menu');
}

let currentIndex = 1;
const totalSlides = 3;
function rotateSlides() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");

  if (currentIndex === 1) {
    card1.classList.remove("left", "center", "right");
    card1.classList.add("right");
    card2.classList.remove("center", "right", "left");
    card2.classList.add("left");
    card3.classList.remove("right", "left", "center");
    card3.classList.add("center");
    currentIndex = 2;
  } else if (currentIndex === 2) {
    card1.classList.remove("left", "center", "right");
    card1.classList.add("center");
    card2.classList.remove("center", "right", "left");
    card2.classList.add("right");
    card3.classList.remove("right", "left", "center");
    card3.classList.add("left");
    currentIndex = 3;
  } else {
    card1.classList.remove("left", "center", "right");
    card1.classList.add("left");
    card2.classList.remove("center", "right", "left");
    card2.classList.add("center");
    card3.classList.remove("right", "left", "center");
    card3.classList.add("right");
    currentIndex = 1;
  }
}
setInterval(rotateSlides, 3000);
/*Scroll-Top Button*/
window.onscroll = function () {
  const scrollButton = document.querySelector('.scroll-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*Table*/

function highlightToday() {
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const rows = document.querySelectorAll('#classTable tbody tr');

  rows.forEach(row => {
    const dayCell = row.cells[1];
    if (dayCell.innerText === today) {
      row.style.backgroundColor = '#d4edda';
      row.style.fontWeight = 'bold';
    }
  });
}

function filterTable() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const table = document.getElementById('classTable');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const classCell = rows[i].getElementsByTagName('td')[0];
    const dayCell = rows[i].getElementsByTagName('td')[1];
    if (classCell || dayCell) {
      const classText = classCell.textContent || classCell.innerText;
      const dayText = dayCell.textContent || dayCell.innerText;
      if (classText.toUpperCase().indexOf(input) > -1 || dayText.toUpperCase().indexOf(input) > -1) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }
}

function sortTable(n) {
  const table = document.getElementById('classTable');
  let rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  switching = true;
  dir = 'asc';

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];

      if (dir === 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount === 0 && dir === 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}
window.onload = highlightToday;
function popup(){
alert("Your feedback recorded");
}

const fitnessData = {
  workouts: [
    { name: 'Push-ups', count: 0 },
    { name: 'Squats', count: 0 },
    { name: 'Lunges', count: 0 }
  ]
};

async function updateFitnessData() {
  const button = document.getElementById('update-data-btn');
  button.disabled = true;
  button.innerText = 'Updating...';

  await new Promise(resolve => setTimeout(resolve, 2000));

  fitnessData.workouts.forEach(workout => workout.count += 10);
  
  displayFitnessData();

  button.disabled = false;
  button.innerText = 'Update Fitness Data';
}

function displayFitnessData() {
  const fitnessDataDiv = document.getElementById('fitness-data');
  fitnessDataDiv.innerHTML = `
    <h2>Fitness Data:</h2>
    <ul>
      ${fitnessData.workouts.map(workout => `
        <li>${workout.name}: ${workout.count}</li>
      `).join('')}
    </ul>
  `;
}

displayFitnessData();

document.getElementById('update-data-btn')
  .addEventListener('click', updateFitnessData);

