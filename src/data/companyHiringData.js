export const companyHiringData = [
  {
    id: 'google',
    name: 'Google',
    category: 'Tier-1 Product / FAANG',
    tier: 'Product',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹35 - ₹55 LPA (L3 / SDE-1)',
    difficulty: 'Very Hard',
    difficultyColor: 'text-red-500 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
    overview: 'Google assesses algorithmic prowess, clean problem solving, code efficiency, and Googleyness & Leadership through rigorous whiteboard-style rounds.',
    eligibility: {
      degrees: 'B.Tech / B.E / M.Tech / M.S / Dual Degree in CS/IT/ECE/EE or related fields',
      cutoff: '65% or 6.5+ CGPA (No strict cutoff for off-campus if resume is strong)',
      backlogs: 'Zero active backlogs at the time of joining',
      gapYears: 'Maximum 1 year gap permitted with valid justification'
    },
    examPattern: {
      platform: 'Google Internal Coding Platform / HackerEarth',
      totalRounds: '4 to 5 Rounds',
      sections: [
        {
          name: 'Online Assessment (OA)',
          duration: '90 Minutes',
          questions: '2 Algorithmic Coding Questions (Medium-Hard level: DP, Graphs, Tree Traversal)',
          negativeMarking: 'No'
        },
        {
          name: 'Technical Round 1 (Data Structures)',
          duration: '45 Minutes',
          questions: '1-2 DSA Problems (Focus on edge cases, time & space complexity)',
          negativeMarking: 'N/A'
        },
        {
          name: 'Technical Round 2 (Algorithms & Optimization)',
          duration: '45 Minutes',
          questions: 'Graph algorithms, Dynamic Programming, Segment Trees, or Trie implementations',
          negativeMarking: 'N/A'
        },
        {
          name: 'Technical Round 3 (Large Scale Systems / CS Fundamentals)',
          duration: '45 Minutes',
          questions: 'Concurrency, Memory management, Thread safety, API contracts',
          negativeMarking: 'N/A'
        },
        {
          name: 'Googleyness & Leadership',
          duration: '45 Minutes',
          questions: 'Navigating ambiguity, constructive collaboration, ethics, and intellectual humility',
          negativeMarking: 'N/A'
        }
      ]
    },
    syllabus: {
      coding: ['Graphs (Dijkstra, Topological Sort, Bipartite)', 'Dynamic Programming (2D/3D DP, Digit DP)', 'Tries & String Algorithms (KMP, Z-algorithm)', 'Binary Search Variations', 'Heaps & Priority Queues'],
      csFundamentals: ['Operating Systems (Multithreading, Deadlocks)', 'Distributed Caching', 'Database Indexing & ACID'],
      behavioral: ['Googleyness principles: intellectual humility, doing the right thing, thriving in ambiguity']
    },
    tips: [
      'Think out loud continuously. Google interviewers care more about your thought trajectory and communication than an immediate silent code dump.',
      'Never write code before clarifying constraints, edge cases (empty input, negatives, overflow), and confirming test cases.',
      'Always start with a brute force approach, state its O(N) complexity, then optimize step-by-step.'
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    category: 'Tier-1 Product / FAANG',
    tier: 'Product',
    logo: 'https://images.unsplash.com/photo-1523474253246-608b47938367?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹28 - ₹45 LPA (SDE-1)',
    difficulty: 'Hard',
    difficultyColor: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900',
    overview: 'Amazon focuses heavily on standard LeetCode Medium/Hard algorithmic challenges balanced with strict behavioral alignment with their 16 Leadership Principles.',
    eligibility: {
      degrees: 'B.E / B.Tech / M.Tech / MCA in CS / IT / Circuit branches',
      cutoff: '60% or 6.0+ CGPA with no current arrears',
      backlogs: 'Zero active backlogs during onboarding',
      gapYears: 'Up to 2 years accepted'
    },
    examPattern: {
      platform: 'HackerRank / Amazon Chime',
      totalRounds: '4 Rounds (OA + 3 Virtual Onsites)',
      sections: [
        {
          name: 'Online Assessment 1 (Code Debugging + Coding)',
          duration: '90 Minutes',
          questions: '2 DSA Coding Questions + Work Style Assessment (Behavioral)',
          negativeMarking: 'No'
        },
        {
          name: 'Online Assessment 2 (Work Simulation)',
          duration: '60 Minutes',
          questions: 'Simulated workplace decision scenarios prioritizing customer obsession',
          negativeMarking: 'No'
        },
        {
          name: 'Technical Virtual Onsite 1',
          duration: '60 Minutes',
          questions: '20 min Leadership Principles (STAR) + 40 min Coding (Trees / Binary Search)',
          negativeMarking: 'N/A'
        },
        {
          name: 'Technical Virtual Onsite 2',
          duration: '60 Minutes',
          questions: '20 min LP + 40 min Coding (Graphs / Dynamic Programming / Heaps)',
          negativeMarking: 'N/A'
        },
        {
          name: 'Bar Raiser Round',
          duration: '60 Minutes',
          questions: 'Deep dive into LP scenarios + Complex Problem Solving with high standard calibration',
          negativeMarking: 'N/A'
        }
      ]
    },
    syllabus: {
      coding: ['Binary Trees, BST & Lowest Common Ancestor', 'BFS/DFS & Shortest Path in Grids', 'Top-K Elements using Min/Max Heap', 'Sliding Window & Hash Maps', 'LRU Cache Design'],
      csFundamentals: ['OOPs Principles & Design Patterns (Factory, Singleton)', 'DBMS Transactions & SQL Joins'],
      behavioral: ['16 Leadership Principles: Customer Obsession, Ownership, Bias for Action, Dive Deep, Earn Trust']
    },
    tips: [
      'Every single technical interviewer will spend 15-20 minutes on Leadership Principle questions. Prepare 2 STAR stories for every major LP.',
      'Be prepared to design data structures (like LRU Cache or Trie with autocomplete).',
      'Handle integer overflow and null pointer validations explicitly in your code.'
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'Tier-1 Product / FAANG',
    tier: 'Product',
    logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹32 - ₹50 LPA (SDE-1)',
    difficulty: 'Hard',
    difficultyColor: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900',
    overview: 'Microsoft values robust coding, deep OS/Memory insights, clean object-oriented architecture, and Growth Mindset culture.',
    eligibility: {
      degrees: 'B.Tech / M.Tech / Dual Degree in Computer Science, IT, Electronics, or Math & Computing',
      cutoff: '7.0+ CGPA throughout academic career',
      backlogs: 'No active backlogs allowed',
      gapYears: 'Up to 1 year permitted'
    },
    examPattern: {
      platform: 'Mettle / Codility / Teams',
      totalRounds: '4 Rounds',
      sections: [
        {
          name: 'Online Assessment (Codility)',
          duration: '90 Minutes',
          questions: '3 Algorithmic Coding Problems (Array manipulation, Greedy, Graph/Tree)',
          negativeMarking: 'No'
        },
        {
          name: 'Technical Round 1',
          duration: '45 - 60 Minutes',
          questions: 'Data Structures (Strings, Linked Lists, Trees) + Resume Project Deep-Dive',
          negativeMarking: 'N/A'
        },
        {
          name: 'Technical Round 2',
          duration: '45 - 60 Minutes',
          questions: 'Dynamic Programming, Graph traversal, Operating System internals & Memory allocation',
          negativeMarking: 'N/A'
        },
        {
          name: 'Technical + Managerial Round (Director/Partner)',
          duration: '45 - 60 Minutes',
          questions: 'System Design basics, OOP architecture, and Growth Mindset evaluation',
          negativeMarking: 'N/A'
        }
      ]
    },
    syllabus: {
      coding: ['Linked List (Reversal, Cycle detection, Merge Sort)', 'Binary Search Trees & Serialization', 'Dynamic Programming (Knapsack, Subsequences)', 'String Manipulation & Matrix Traversal'],
      csFundamentals: ['OS: Virtual Memory, Paging, Deadlocks, Mutex vs Semaphore', 'OOPs: Abstraction, Interfaces, SOLID'],
      behavioral: ['Growth Mindset, Handling failure, Cross-team collaboration']
    },
    tips: [
      'Write modular, clean code with descriptive variable names. Microsoft places huge emphasis on production readiness.',
      'Know your resume projects inside out; expect questions on why you chose specific libraries or architectures.',
      'Be prepared to explain memory footprints and pointer arithmetic if coding in C++ or Java.'
    ]
  },
  {
    id: 'tcs',
    name: 'Tata Consultancy Services (TCS NQT)',
    category: 'IT Services & Mass Recruiter',
    tier: 'Services',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹3.36 LPA (Ninja) | ₹7.0 LPA (Digital) | ₹9.0 - ₹11.5 LPA (Prime)',
    difficulty: 'Moderate to Hard',
    difficultyColor: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
    overview: 'TCS conducts the National Qualifier Test (NQT) which bifurcates candidates into Ninja, Digital, and the elite Prime cadress based on sectional aptitude and advanced coding scores.',
    eligibility: {
      degrees: 'B.E / B.Tech / M.E / M.Tech / MCA / M.Sc in relevant disciplines',
      cutoff: 'Minimum 60% or 6.0 CGPA throughout 10th, 12th, Diploma, and Graduation',
      backlogs: 'Only 1 active backlog allowed at the time of examination (must be cleared before joining)',
      gapYears: 'Up to 24 months total education gap permitted'
    },
    examPattern: {
      platform: 'TCS iON Assessment Engine',
      totalRounds: '2 Stages (NQT Test + Technical & HR Interview)',
      sections: [
        {
          name: 'Foundation Section: Numerical Ability',
          duration: '25 Minutes',
          questions: '20 MCQs (Time & Work, Arithmetic, Percentages)',
          negativeMarking: 'No'
        },
        {
          name: 'Foundation Section: Verbal Ability',
          duration: '25 Minutes',
          questions: '25 MCQs (Reading Comprehension, Error spotting, Para jumbles)',
          negativeMarking: 'No'
        },
        {
          name: 'Foundation Section: Reasoning Ability',
          duration: '25 Minutes',
          questions: '20 MCQs (Syllogisms, Blood Relations, Seating arrangement)',
          negativeMarking: 'No'
        },
        {
          name: 'Advanced Section: Advanced Quantitative & Reasoning',
          duration: '25 Minutes',
          questions: '15 High-level questions (Permutation, Probability, Geometry)',
          negativeMarking: 'No'
        },
        {
          name: 'Advanced Section: Advanced Coding',
          duration: '90 Minutes',
          questions: '2 Coding Problems (1 Medium Array/String + 1 Hard DP/Graph/Greedy problem for Digital/Prime)',
          negativeMarking: 'No'
        }
      ]
    },
    syllabus: {
      coding: ['Arrays, Strings, Matrices', 'Hashing and Frequency maps', 'Greedy algorithms', 'Recursion & Dynamic Programming', 'Time Complexity analysis'],
      csFundamentals: ['Basic SQL queries (SELECT, JOIN, GROUP BY)', 'OOPs concepts in C++/Java', 'SDLC Models (Agile, Waterfall)'],
      behavioral: ['Willingness to relocate to PAN India locations, Night shifts readiness, Communication clarity']
    },
    tips: [
      'You CANNOT navigate back and forth between sections in the TCS iON platform. Once a section timer expires, it locks automatically.',
      'Solving at least 1 coding question with 100% test cases passes guarantees TCS Digital interview shortlisting.',
      'Passing all test cases in both coding questions qualifies you directly for the TCS Prime interview (₹9-11.5 LPA).'
    ]
  },
  {
    id: 'infosys',
    name: 'Infosys (InfyTQ / SP & DSE)',
    category: 'IT Services & Mass Recruiter',
    tier: 'Services',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹3.6 LPA (System Engineer) | ₹6.5 LPA (DSE) | ₹9.5 LPA (Specialist Programmer)',
    difficulty: 'Moderate to Hard',
    difficultyColor: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
    overview: 'Infosys offers three distinct tiers: System Engineer, Digital Specialist Engineer (DSE), and Specialist Programmer (SP). SP requires competitive programming mastery.',
    eligibility: {
      degrees: 'B.E / B.Tech / M.E / M.Tech / MCA in any branch (Circuit branches prioritized for SP)',
      cutoff: '60% or 6.0 CGPA throughout 10th, 12th, and Degree',
      backlogs: 'Zero active backlogs at time of joining',
      gapYears: 'Up to 2 years permitted'
    },
    examPattern: {
      platform: 'Infosys Assessment Platform / HackerEarth',
      totalRounds: '2 Rounds (Online Test + Technical/HR Interview)',
      sections: [
        {
          name: 'Specialist Programmer Coding Test',
          duration: '180 Minutes',
          questions: '3 High-complexity algorithmic problems (Medium to Hard: Segment Trees, Graph DP, Game Theory)',
          negativeMarking: 'No'
        },
        {
          name: 'DSE / System Engineer Test (General)',
          duration: '100 Minutes',
          questions: 'Reasoning Ability (15 Qs) + Mathematical Ability (10 Qs) + Verbal Ability (20 Qs) + Pseudo Code (5 Qs) + Puzzle Solving (4 Qs)',
          negativeMarking: 'No'
        },
        {
          name: 'Technical & HR Combined Interview',
          duration: '35 - 50 Minutes',
          questions: 'Deep dive into written test solutions, Project explanation, DBMS queries, and HR willingness',
          negativeMarking: 'N/A'
        }
      ]
    },
    syllabus: {
      coding: ['Dynamic Programming (Knapsack, Matrix Chain, Bitmasking)', 'Graphs (Floyd Warshall, Disjoint Set Union)', 'Greedy Algorithms & Priority Queues'],
      csFundamentals: ['Normalization up to 3NF', 'Primary vs Foreign keys', 'Inheritance vs Composition in Java/Python'],
      behavioral: ['Adaptability to new technologies, Shift timings, Team projects']
    },
    tips: [
      'For Specialist Programmer (SP), test case passing threshold is strict: Solving 2 full questions usually guarantees an SP interview call.',
      'Infosys interviewers always ask you to explain your test code line-by-line to verify originality.',
      'In Pseudo-code questions, trace bitwise XOR, AND, and recursion call stacks carefully on scratch paper.'
    ]
  },
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    category: 'Tier-1 Enterprise / Fintech',
    tier: 'Fintech',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&auto=format&fit=crop&q=80',
    ctcRange: '₹26 - ₹36 LPA (New Analyst)',
    difficulty: 'Very Hard',
    difficultyColor: 'text-red-500 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
    overview: 'Goldman Sachs looks for exceptional mathematical aptitude, high-speed algorithmic coding, and solid systems understanding for high-frequency trading and fintech systems.',
    eligibility: {
      degrees: 'B.Tech / Dual Degree in CS / IT / EE / Maths & Computing / Stats',
      cutoff: '7.0+ CGPA or 70%',
      backlogs: 'No active backlogs allowed',
      gapYears: 'Maximum 1 year allowed'
    },
    examPattern: {
      platform: 'HackerRank',
      totalRounds: '4 Rounds',
      sections: [
        {
          name: 'Aptitude & Math Section',
          duration: '45 Minutes',
          questions: 'Advanced Probability, Combinatorics, Matrix math, and Quantitative puzzles',
          negativeMarking: 'Yes (-0.25)'
        },
        {
          name: 'Coding Section',
          duration: '45 Minutes',
          questions: '2 DSA problems (1 Medium + 1 Hard: Math DP, Trees, Arrays)',
          negativeMarking: 'No'
        },
        {
          name: 'Technical Round 1 & 2',
          duration: '60 Minutes each',
          questions: 'Complex DSA + Math & Logic Puzzles + Multithreading & Memory optimization',
          negativeMarking: 'N/A'
        },
        {
          name: 'Senior Leadership / Fit Round',
          duration: '45 Minutes',
          questions: 'Cultural fit, risk management mindset, ethics, and high-pressure work handling',
          negativeMarking: 'N/A'
        }
      ]
    },
    syllabus: {
      coding: ['Binary Trees, Segment Trees, Trie', 'Dynamic Programming on Trees & Bitmasks', 'Mathematical and Number Theory algorithms (GCD, Modulo Arithmetic, Prime Sieve)'],
      csFundamentals: ['Operating Systems: Multithreading, Thread Safety, Locks, Context Switching', 'DBMS: ACID, Indexing internals'],
      behavioral: ['Attention to detail, Risk mindset, Integrity, Team collaboration']
    },
    tips: [
      'Practice probability and mathematical brain teasers (e.g. Monty Hall problem, Burning Ropes, 25 Horses race).',
      'Pay extreme attention to negative marking in the Aptitude section; skip questions if you are unsure.',
      'Know the time complexity down to big-O and auxiliary space for every solution you suggest.'
    ]
  }
];
