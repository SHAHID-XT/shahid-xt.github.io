// Terminal Commands
const terminalCommands = {
    'help': () => `Available commands:
whoami          - Display user information
ls              - List directory contents
cat resume      - Display resume summary
download resume - Download resume PDF
skills          - Show technical skills
projects        - List featured projects
contact         - Show contact information
clear           - Clear terminal
tryhackme       - Show TryHackMe stats
experience      - Show work experience
education       - Show education details`,

    'whoami': () => `Shahid Shaikh - Cybersecurity Professional
Location: Mumbai, Maharashtra - 400017
Email: shahidxtshahid@gmail.com
Phone: +91 9648857886
GitHub: github.com/shahidxt
TryHackMe: Top 2% | 190+ Rooms Solved`,

    'ls': () => `total 7
drwxr-xr-x  7 shahidxt staff   224 Jul 27 23:00 .
drwxr-xr-x  3 shahidxt staff    96 Jul 27 22:30 ..
-rw-r--r--  1 shahidxt staff  2.1K Jul 27 23:00 about.md
drwxr-xr-x  5 shahidxt staff   160 Jul 27 22:45 experience/
drwxr-xr-x  8 shahidxt staff   256 Jul 27 22:50 projects/
-rw-r--r--  1 shahidxt staff  1.5K Jul 27 23:00 resume.pdf
drwxr-xr-x  4 shahidxt staff   128 Jul 27 22:40 skills/
drwxr-xr-x  3 shahidxt staff    96 Jul 27 22:35 certifications/`,

    'cat resume': () => `SHAHID SHAIKH - CYBERSECURITY PROFESSIONAL
========================================

OBJECTIVE:
Cybersecurity enthusiast with strong foundation in Python, Linux, and web security.
Top 2% on TryHackMe with 190+ rooms solved. Currently pursuing Master's in 
Information & Cyber Security. Seeking junior role in Penetration Testing.

CURRENT EXPERIENCE:
• Cyber Security Intern - Maharashtra Cyber Cell (Dec 2024 - June 2025)
• Python Developer Freelancer - Fiverr (Nov 2023 - Dec 2024)

EDUCATION:
• Master's in Information & Cyber Security (Pursuing) - 2024-2026
• Bachelor of Computer Applications (BCA) - 2021-2024

For full resume, use: download resume`,

    'download resume': () => {
        // Trigger resume download
        const link = document.createElement('a');
        link.href = 'Shahid-Shaikh-Resume.pdf';
        link.download = 'Shahid-Shaikh-Resume.pdf';
        link.click();
        return 'Downloading resume... Check your downloads folder.';
    },

    'skills': () => `TECHNICAL SKILLS:

Programming & Scripting:
• Python (Automation, Sockets, Regex) • Bash • JavaScript • PowerShell • SQL

Cybersecurity Tools:
• Nmap • Burp Suite • Metasploit • Wireshark • SQLMap • Gobuster • Hydra • Netcat

Specializations:
• Penetration Testing • Web Application Security • OSINT • Vulnerability Assessment

Web Technologies:
• HTML5/CSS3 • JavaScript • REST APIs • WebSockets • HTTP/S protocols

Databases:
• MySQL • SQLite • PostgreSQL

Cloud & DevOps:
• AWS (EC2, S3) • Docker • Git/GitHub • SSH • Cron Jobs`,

    'projects': () => `FEATURED PROJECTS:

1. XTShop - Full Stack E-Commerce Platform
   → Django, PostgreSQL, Payment Integration
   → GitHub: github.com/SHAHID-XT/xtshop-Ecommece-website

2. Winmark Seller Automation Bot
   → Selenium, ChatGPT API Integration
   → GitHub: github.com/SHAHID-XT/Winmark-seller-bot

3. Flipkart Auto Listing Chrome Extension
   → Chrome Extension, Flask Backend
   → GitHub: github.com/SHAHID-XT/Flipkart-Seller-Listing-Helper

4. Election Voter Info Automation Tool
   → PDF Processing, WhatsApp Integration
   → GitHub: github.com/SHAHID-XT/election-voter-tool

5. PDF Label Cropper for e-Kart & Meesho
   → Desktop GUI, PyPDF2, Smart Detection
   → GitHub: github.com/SHAHID-XT/Invoice-Label-Cropper-Ekart---Messho-`,

    'contact': () => `CONTACT INFORMATION:

📧 Email: shahidxtshahid@gmail.com
📱 Phone: +91 9648857886
📍 Location: Mumbai, Maharashtra - 400017, India

🔗 Social Links:
• GitHub: github.com/shahidxt
• LinkedIn: linkedin.com/in/shahidxt
• TryHackMe: tryhackme.com/p/shahidxt

💼 Status: Available for cybersecurity opportunities
⏰ Availability: 5 days a week`,

    'tryhackme': () => `TRYHACKME STATISTICS:

🏆 Global Ranking: Top 2%
🎯 Rooms Completed: 190+
🔥 Streak: Active learner
📚 Learning Paths Completed:
  • Jr Penetration Tester (Jun 2025)
  • Cyber Security 101 (May 2025)

🛡️ Skills Demonstrated:
  • Web Application Security
  • Penetration Testing
  • Digital Forensics
  • Network Security
  • Linux System Administration
  • OSINT (Open Source Intelligence)

Profile: tryhackme.com/p/shahidxt`,

    'experience': () => `WORK EXPERIENCE:

🔐 CYBER SECURITY INTERN
Maharashtra Cyber Cell - Navi Mumbai (Dec 2024 - June 2025)
• Monitor social media for cyber threat detection
• Create public awareness content for cyber safety
• Assist in voice-based cyber complaint system development
• Learn real-time cybercrime investigation procedures

🐍 PYTHON DEVELOPER - FREELANCER
Fiverr (Remote) (Nov 2023 - Dec 2024)
• Developed Python automation tools for web scraping
• Built WhatsApp data extractors and e-commerce bots
• Created Selenium-based automation solutions
• Focused on reliable, reusable automation systems`,

    'education': () => `EDUCATION & CERTIFICATIONS:

🎓 FORMAL EDUCATION:
• Master of Science (Information & Cyber Security) - Pursuing (2024-2026)
  Guru Nanak Khalsa College Of Arts, Science & Commerce

• Bachelor of Computer Applications (BCA) - 2021-2024
  Chetna's Hazarimal Somani College Of Commerce & Economics

🏅 CERTIFICATIONS:
• Jr Penetration Tester Learning Path Certificate (Jun 2025) - TryHackMe
• Cyber Security 101 Learning Path Certificate (May 2025) - TryHackMe
• Ethical Hacking Bootcamp (Aug-Nov 2024) - Udemy
• Machine Learning & Data Science Bootcamp (Apr-Jun 2024) - Udemy
• Advanced Python Programming (Aug-Oct 2023) - Udemy
• Python Programming Full Course (Jun-Aug 2023) - Udemy`,

    'clear': () => 'CLEAR_TERMINAL'
};

// Terminal functionality
document.addEventListener('DOMContentLoaded', function () {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    terminalInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();

            // Add command to output
            const commandLine = document.createElement('div');
            commandLine.className = 'command-line';
            commandLine.innerHTML = `
                <span class="prompt">shahidxt@portfolio:~$</span>
                <span class="command">${this.value}</span>
            `;
            terminalOutput.appendChild(commandLine);

            // Execute command
            if (terminalCommands[command]) {
                const result = terminalCommands[command]();

                if (result === 'CLEAR_TERMINAL') {
                    terminalOutput.innerHTML = '';
                } else {
                    const output = document.createElement('div');
                    output.className = 'output';
                    output.style.whiteSpace = 'pre-line';
                    output.textContent = result;
                    terminalOutput.appendChild(output);
                }
            } else if (command !== '') {
                const output = document.createElement('div');
                output.className = 'output';
                output.style.color = '#ff4757';
                output.textContent = `Command not found: ${command}. Type 'help' for available commands.`;
                terminalOutput.appendChild(output);
            }

            // Clear input and scroll to bottom
            this.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Create mailto link
            const mailtoLink = `mailto:shahidxtshahid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Open default email client
            window.location.href = mailtoLink;

            // Show success message
            alert('Email client opened! Please send the email from your default email application.');

            // Reset form
            this.reset();
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Add some terminal startup animation
window.addEventListener('load', function () {
    const terminalOutput = document.getElementById('terminal-output');
    if (terminalOutput) {

    }
});
