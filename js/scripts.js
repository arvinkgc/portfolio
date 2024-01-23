// Loader JS

document.addEventListener("DOMContentLoaded", function () {
    // Show the loader initially
  
    // Simulate a 2-second delay before hiding the loader
    setTimeout(function () {
      // Hide the loader after the delay
      document.querySelector('.loading').style.display = 'none';
  
      // Show the content container
      document.getElementById('content-container').style.display = 'block';
    },1500);
  });
  

// Changing Text JS

var typed = new Typed("#auto-type", {
strings: ['Web Developer.', 'Freelancer.', 'Web Designer.'],
typeSpeed: 100,
backSpeed: 100,
loop: true,
loopCount: Infinity
});
