// Initialize Navbar State
    document.addEventListener("DOMContentLoaded", function() {
        var content = document.querySelector(".content");
        var arrow = document.querySelector(".arrow-container");
        var navbar = document.getElementById("navbar");
        
        navbar.style.left = "0";
        content.classList.add("expanded");
        arrow.classList.add("rotate");
        
    });

// Function to Toggle Navbar
    function toggleNavbar() {
        var navbar = document.getElementById("navbar");
        var content = document.querySelector(".content");
        var arrow = document.querySelector(".arrow-container");
        var isOpen = navbar.style.left === "0px";
        
        navbar.style.left = isOpen ? "-250px" : "0";
        content.classList.toggle("expanded");
        arrow.classList.toggle("rotate");
        arrow.dataset.tooltip = isOpen ? "Open Sidebar" : "Close Sidebar";
    }

