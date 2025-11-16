{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // 1. Get all navigation buttons and content sections\
    const navButtons = document.querySelectorAll('.nav-button');\
    const contentSections = document.querySelectorAll('.content-section');\
\
    // 2. Add a click event listener to each button\
    navButtons.forEach(button => \{\
        button.addEventListener('click', (event) => \{\
            // Get the ID of the section we want to show from the data-section attribute\
            const targetSectionId = event.target.getAttribute('data-section');\
\
            // --- Update Button Styles (Active/Inactive) ---\
            navButtons.forEach(btn => \{\
                // Remove the 'active' class from all buttons\
                btn.classList.remove('active');\
            \});\
            // Add the 'active' class to the button that was just clicked\
            event.target.classList.add('active');\
\
            // --- Update Content Visibility ---\
            contentSections.forEach(section => \{\
                // Check if the section's ID matches the target ID\
                if (section.id === targetSectionId) \{\
                    // Show the target section\
                    section.classList.remove('hidden');\
                \} else \{\
                    // Hide all other sections\
                    section.classList.add('hidden');\
                \}\
            \});\
        \});\
    \});\
\});\
}