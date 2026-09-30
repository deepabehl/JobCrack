# JobCrack - Job Portal & Placement Preparation Platform

A modern, full-featured **Job Portal & Placement Preparation Platform** designed for engineering students, freshers, and experienced software professionals.

---

## 🌟 Key Features

### 1. 💼 Job Portal
- **Rich Tech Job Listings**: High-paying software engineering, backend, frontend, cloud/DevOps, and data science roles from top product and service enterprises (Razorpay, Swiggy, Microsoft, Atlassian, Zomato, TCS Prime, Infosys SP, Stripe).
- **Dynamic Search & Filtering**: Filter by keyword/skill, Job Type (Full-time, Internship), Experience (Fresher, 1-3 yrs, 3-5 yrs), Workplace mode (Remote, Hybrid, On-site), and Bookmarked roles.
- **Easy Apply Flow**: Multi-step application submission modal with simulated resume file upload, college details, GitHub/portfolio links, and real-time confetti celebration.
- **Recruiter Posting**: In-app "Post an Opening" modal allowing employers or recruiters to post custom openings directly into the portal.

### 2. 📚 Preparation Hub
- **Quantitative Aptitude**:
  - Formulas, time-saving tricks, and shortcut notes for Time & Work, Time-Speed-Distance, Profit & Loss, Permutations & Combinations, Probability.
  - Interactive timed practice questions with real-time feedback, detailed step-by-step mathematical explanations, and score tracking.
- **Logical Reasoning**:
  - Syllogisms (4 standard categorical forms & Venn logic), Blood Relations (family tree conventions), Circular & Linear Seating Arrangements.
  - Interactive practice problems with complete reasoning deductions.
- **Verbal Ability & English**:
  - Top 5 placement grammar rules (Subject-Verb agreement, Dangling modifiers, Parallelism), Para Jumbles strategies, and sentence correction tests.
- **Technical Core CS**:
  - Cheat sheets and top 20 interview Q&As for:
    - **Operating Systems (OS)**: Process vs Thread, 4 Coffman conditions for deadlock, Banker's algorithm, Paging, Virtual Memory, Belady's anomaly.
    - **Database Systems (DBMS)**: ACID properties, Normalization (1NF to BCNF), Indexing internals (B-Tree vs B+ Tree), 4 Isolation levels, Truncate vs Drop vs Delete.
    - **Computer Networks (CN)**: OSI 7 layers, TCP vs UDP, 3-way handshake, DNS resolution step-by-step, ARP.
    - **Object-Oriented Programming (OOPs)**: 4 pillars, Compile-time vs Runtime polymorphism, SOLID principles.
    - **System Design Fundamentals**: Scaling (Horizontal vs Vertical), Consistent Hashing, CAP Theorem, Caching strategies (Cache-Aside, Write-Through, Write-Back).
- **HR & Behavioral Prep**:
  - **STAR Method Masterclass**: Situation, Task, Action, Result framework with breakdown and examples.
  - **Interactive STAR Builder Tool**: Allows candidates to draft their own personalized STAR story and copy the script directly.
  - High-frequency HR questions ("Tell me about yourself", "Why our company?", "Strengths & Weaknesses", "Conflict Resolution", "5-year plan") with evaluation intent, sample answers, and dos/don'ts.
  - Curated questions to ask interviewers at the end.

### 3. 🏢 Companies Hiring Process
- Detailed intel for 15+ tech companies across **Product/FAANG** (Google, Microsoft, Amazon), **Fintech** (Goldman Sachs), and **Mass Recruiters / IT Services** (TCS NQT Ninja/Digital/Prime, Infosys SP/DSE).
- For each company:
  - **Exam Pattern & Rounds**: Online assessment duration, question formats, negative marking rules, platform used (Codility, HackerRank, TCS iON, HackerEarth).
  - **Eligibility Criteria**: Degree requirements, CGPA cutoff, backlog rules, gap year allowance.
  - **Detailed Syllabus**: Section-wise coding topics, CS fundamentals, and behavioral culture traits.
  - **Proven Preparation Strategies & Tips**: Expert tips on pacing, test-case passing thresholds, and interview etiquette.

### 4. ⚡ Dedicated DSA Prep (Topic-Wise Sheet)
- Structured curriculum modeled after top industry sheets (Striver A2Z / Blind 75 / NeetCode 150):
  - Topics: Arrays & Hashing, Strings & Two Pointers, Linked Lists, Binary Trees & BST, Graphs, Dynamic Programming.
- For each problem:
  - Difficulty badge (Easy, Medium, Hard), acceptance rate, LeetCode link, and companies that asked it.
  - Solution Modal with:
    - Problem description & sample test cases.
    - Intuition and optimal approach breakdown.
    - Time & Space complexity analysis.
    - Multi-language code implementations (**C++**, **Java**, and **Python 3**) with one-click copy.
    - Personal Notes editor: add and persist your personal revision takeaways in `localStorage`.
- Live visual progress bar with overall completion % and Easy/Medium/Hard breakdown.

### 5. 🎯 My Hub / Candidate Dashboard
- Overall **Readiness Index Score** (0-100) dynamically calculated from solved problems and submitted applications.
- **Application Status Tracker**: Real-time list of all applied jobs with applied dates, resumes, and status badges (Applied, Under Review, Interview, Offer).
- Quick access to bookmarked jobs and revision problems.

### 6. 🎨 Platform Ergonomics
- **Dark Mode & Light Mode**: Seamless theme toggle with persistent preferences.
- **Global Spotlight Search (`Ctrl+K` / `⌘K`)**: Instant search across all jobs, DSA problems, company guides, and technical concepts.
- **Local Persistence**: Solved problems, starred problems, notes, custom jobs, and applications are synced with `localStorage`.

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to the project directory
cd prep-job-portal

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
