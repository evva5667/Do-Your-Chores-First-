const comicBox = document.getElementById("comic-box");
const comicImage = document.getElementById("comic-image");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const decisionBtns = document.getElementById("decisionBtns");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const returnBtn = document.createElement("button");
returnBtn.textContent = "Return to Beginning";
returnBtn.style.display = "none";
document.getElementById("comic-controls").appendChild(returnBtn);

// Rectangle hover effects
document.querySelector('.character-rectangle').addEventListener('mouseenter', function() {
    this.style.transform += ' scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.character-rectangle').addEventListener('mouseleave', function() {
    this.style.transform = this.style.transform.replace(' scale(1.05)', '');
});

document.querySelector('.character-rectangle-bottom').addEventListener('mouseenter', function() {
    this.style.transform += ' scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.character-rectangle-bottom').addEventListener('mouseleave', function() {
    this.style.transform = this.style.transform.replace(' scale(1.05)', '');
});

// Optional: Add click effects to rectangles
document.querySelector('.character-rectangle').addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'slideUp 0.5s ease forwards';
    }, 10);
});

document.querySelector('.character-rectangle-bottom').addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'slideUp 0.5s ease forwards';
    }, 10);
});

// Trailer button functionality
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Spirited Away trailer would play here!');
});

// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(0, 0, 0, 0.9)';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '15px';
    } else {
        navLinks.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Comic functionality
let currentPanel = 0;
const comicPanels = [
    'Images/panel1.jpg',
    'Images/panel2.jpg',
    'Images/panel3.jpg',
    'Images/panel4.jpg',
    'Images/panel5.jpg',
    'Images/panel6.jpg',
    'Images/panel7.jpg',
    'Images/panel8.jpg',
    'Images/panel9.jpg',
    'Images/panel10.jpg',
    'Images/panel11.jpg',
    'Images/panel12.jpg',
    'Images/panel13.jpg',
    'Images/panel14.jpg',
    'Images/panel15.jpg',
    'Images/panel16.jpg',
    'Images/panel17.jpg',
    'Images/panel18.jpg',
    'Images/panel19.jpg',
    'Images/panel20.jpg',
    'Images/panel21.jpg',
    'Images/panel22.jpg',
    'Images/panel23.jpg',
    'Images/panel24.jpg',
    'Images/panel25.jpg',
    'Images/panel26.jpg',
    'Images/panel27.jpg',
    'Images/panel28.jpg',
    'Images/panel29.jpg',
    'Images/panel30.jpg',
    'Images/panel31.jpg',
    'Images/panel32.jpg',
    'Images/panel33.jpg',
    'Images/panel34.jpg',
    'Images/panel35.jpg',
    'Images/panel36.jpg',
    'Images/panel37.jpg',
    'Images/panel38.jpg',
    'Images/panel39.jpg',
    'Images/panel40.jpg',
    'Images/panel41.jpg',
    'Images/panel42.jpg',
    'Images/panel43.jpg',
    'Images/panel44.jpg',
    'Images/panel45.jpg',
    'Images/panel46.jpg',
    'Images/panel47.jpg',
    'Images/panel48.jpg',
    'Images/panel49.jpg',
    'Images/panel50.jpg',
    'Images/panel51.jpg',
    'Images/panel52.jpg',
    'Images/panel53.jpg',
    'Images/panel54.jpg',
    'Images/panel55.jpg',
    'Images/panel56.jpg',
    'Images/panel57.jpg',
    'Images/panel58.jpg',
    'Images/panel59.jpg',
    'Images/panel60.jpg',
    'Images/panel61.jpg',
    'Images/panel62.jpg',
    'Images/panel63.jpg',
    'Images/panel64.jpg',
    'Images/panel65.jpg',
    'Images/panel66.jpg',
    'Images/panel67.jpg',
    'Images/panel68.jpg',
    'Images/panel69.jpg',
    'Images/panel70.jpg',
    'Images/panel71.jpg',
    'Images/panel72.jpg',
    'Images/panel73.jpg',
    'Images/panel74.jpg',
    'Images/panel75.jpg',
    'Images/panel76.jpg',
    'Images/panel77.jpg',
    'Images/panel78.jpg',
    'Images/panel79.jpg',
    'Images/panel80.jpg',
    'Images/panel81.jpg',
    'Images/panel82.jpg',
    'Images/panel83.jpg',
    'Images/panel84.jpg',
    'Images/panel85.jpg',
    'Images/panel86.jpg',
    'Images/panel87.jpg',
    'Images/panel88.jpg',
    'Images/panel89.jpg',
    'Images/panel90.jpg',
    'Images/panel91.jpg',
    'Images/panel92.jpg',
    'Images/panel93.jpg',
    'Images/panel94.jpg',
    'Images/panel95.jpg',
    'Images/panel96.jpg',
    'Images/panel97.jpg',
    'Images/panel98.jpg',
    'Images/panel99.jpg',
    'Images/panel100.jpg',
    'Images/panel101.jpg',
    'Images/panel102.jpg',
    'Images/panel103.jpg',
    'Images/panel104.jpg',
    'Images/panel105.jpg',
    'Images/panel106.jpg',
    'Images/panel107.jpg',
    'Images/panel108.jpg',
    'Images/panel109.jpg',
    'Images/panel110.jpg',
    'Images/panel111.jpg',
    'Images/panel112.jpg',
    'Images/panel113.jpg',
    'Images/panel114.jpg',
    'Images/panel115.jpg',
    'Images/panel116.jpg',
    'Images/panel117.jpg',
    'Images/panel118.jpg',
    'Images/panel119.jpg',
    'Images/panel120.jpg',
    'Images/panel121.jpg',
    'Images/panel122.jpg',
    'Images/panel123.jpg',
    'Images/panel124.jpg',
    'Images/panel125.jpg',
    'Images/panel126.jpg',
    'Images/panel127.jpg',
    'Images/panel128.jpg',
    'Images/panel129.jpg',
    'Images/panel130.jpg',
    'Images/panel131.jpg',
    'Images/panel132.jpg',
    'Images/panel133.jpg',
    'Images/panel134.jpg',
    'Images/panel135.jpg',
    'Images/panel136.jpg',
    'Images/panel137.jpg'
];

document.getElementById('startBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('comic-image').style.display = 'block';
    document.getElementById('prevBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'inline-block';
    updateComicPanel();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentPanel > 0) {
        currentPanel--;
        updateComicPanel();
    }
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentPanel < comicPanels.length - 1) {
        currentPanel++;
        updateComicPanel();
    }
});

function updateComicPanel() {
    const comicImage = document.getElementById('comic-image');
    comicImage.src = comicPanels[currentPanel];
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentPanel === 0;
    document.getElementById('nextBtn').disabled = currentPanel === comicPanels.length - 1;
}

// Get all sections
const sections = document.querySelectorAll('section');
// Get all navigation links that point to sections
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

// Function to hide all sections
function hideAllSections() {
  sections.forEach(section => {
    section.style.display = 'none';
  });
  // Also hide the initial landing section
  document.querySelector('.spirited-section').style.display = 'none';
}

// Function to show a specific image in the comic box by path
function showComicImageByPath(imagePath) {
    const comicImage = document.getElementById('comic-image');
    comicImage.src = imagePath;
    comicImage.style.display = "block"; // Ensure display is block when setting source
}

// Function to show a specific section
function showSection(id) {
  const targetSection = document.querySelector(id);
  if (targetSection) {
    // Hide all sections first
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

    targetSection.style.display = 'block';

    // If the comic section is shown
    if (id === '#comic') {
      // Display the initial bob (01) image
      const comicImage = document.getElementById('comic-image');
      const startImg = document.getElementById("startImg");

      if (comicImage) {
        comicImage.src = 'Images/bob (01).png';
        comicImage.style.display = 'block'; // Ensure the image is visible
      }

      // Make sure the start image is visible initially
      if (startImg) {
        startImg.style.display = 'block';
      }

       // Hide other comic controls initially
       document.getElementById("prevBtn").style.display = "none";
       document.getElementById("nextBtn").style.display = "none";
       document.getElementById("decisionBtns").style.display = "none";
       const returnBtn = document.querySelector('#comic-controls button:last-child');
       if (returnBtn) returnBtn.style.display = "none";

       // Reset comic image index and state for the provided comic flow logic
       currentImageIndex = 0;
       state = "start";
       // The provided logic in script.js handles showing the first comic panel
       // when the start button is clicked, so we don't need to call showImage(0) here again.

    } else if (id === '#') { // Handle showing the landing section if needed
         const landingSection = document.querySelector('.spirited-section');
         if (landingSection) {
             landingSection.style.display = 'block';
         }
    }
  }
}

// Hide all sections except the landing section on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section:not(.spirited-section)').forEach(section => {
        section.style.display = 'none';
    });
    const landingSection = document.querySelector('.spirited-section');
    if (landingSection) {
        landingSection.style.display = 'block';
    }
});

// Add click event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    // Handle showing/hiding sections
    if (targetId === '#' || targetId === '') { // Assuming '#' or empty href is the link to the landing section
         hideAllSections();
         const landingSection = document.querySelector('.spirited-section');
         if (landingSection) {
             landingSection.style.display = 'block';
         }
    } else {
        hideAllSections(); // Hide all sections
        showSection(targetId); // Show the clicked section
    }

    // Optional: Scroll to the top of the shown section
    const sectionToScroll = document.querySelector(targetId === '#' || targetId === '' ? '.spirited-section' : targetId);
     if (sectionToScroll) {
        sectionToScroll.scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
});

