export const hrData = {
  starFramework: {
    title: 'The STAR Method Masterclass',
    description: 'The industry-standard behavioral answering framework used by Amazon, Google, Microsoft, and top enterprise recruiters.',
    steps: [
      {
        letter: 'S',
        title: 'Situation',
        detail: 'Set the context. Describe the specific scenario, project, challenge, or workplace problem you encountered. Keep it concise (15-20% of your time).',
        example: '"During my final-year capstone project with 4 team members, our web portal crashed under unexpected peak traffic 3 days before submission."'
      },
      {
        letter: 'T',
        title: 'Task',
        detail: 'Explain your personal responsibility or role in that challenge. What was the goal or expectation placed on you?',
        example: '"As the lead backend developer, I needed to identify the database bottleneck and restore response times under 500ms without losing user submissions."'
      },
      {
        letter: 'A',
        title: 'Action',
        detail: 'Detail the concrete actions YOU personally took. Emphasize your problem-solving, collaboration, tools, and technical decisions (60% of your time).',
        example: '"I profiled our SQL queries, added Redis caching for frequently queried course catalogs, and implemented indexing on foreign keys. I also hosted daily 15-minute syncs with the frontend team."'
      },
      {
        letter: 'R',
        title: 'Result',
        detail: 'Quantify your outcome! Share metrics, business impact, learnings, and recognition gained (20% of your time).',
        example: '"Our API latency dropped by 78%, server uptime hit 99.9%, and our team received the Highest Innovation Award in our department."'
      }
    ]
  },
  questions: [
    {
      id: 'hr-1',
      category: 'Introduction',
      question: 'Tell me about yourself / Walk me through your resume.',
      intent: 'Evaluates your communication skills, career trajectory clarity, relevance to the role, and elevator pitch confidence.',
      structure: 'Present (current role/education) -> Past (key technical projects, internships, milestones) -> Future (why this specific company & role excites you).',
      sampleAnswer: `I am currently graduating in Computer Science with a strong passion for scalable distributed systems and web development. Over the past two years, I built multiple full-stack applications, including an automated resume analysis tool using React and Node.js that processed over 5,000 documents. During my summer internship at XYZ, I optimized microservice API latencies by 35% through Redis caching and query indexing. I love solving challenging algorithmic problems, having solved over 350 problems on LeetCode. When I saw this opening at your company, I was particularly drawn to your team's mission in building high-throughput payment pipelines, and I am excited to bring my backend skills to help scale those systems.`,
      dos: ['Keep it under 90-120 seconds.', 'Focus on achievements and impact, not just coursework.', 'Tie your ending directly to why you want this specific job.'],
      donts: ['Do not recount your entire life story or family background.', 'Do not merely repeat line-by-line what is already written on your CV.']
    },
    {
      id: 'hr-2',
      category: 'Company Fit',
      question: 'Why do you want to work with our company?',
      intent: 'Checks if you did company research, understand their products/culture, or are just spraying random applications.',
      structure: 'Company Mission/Product admiration -> Alignment with your values/tech stack -> Growth opportunities and value you contribute.',
      sampleAnswer: `I've been following your engineering blog closely, particularly your recent migration towards event-driven microservices with Kafka. What excites me most about your company is how your software directly impacts millions of small merchants every day by democratizing digital transactions. With my background in Java and distributed architectures, I want to contribute to high-availability systems where reliability is paramount, while learning from your world-class engineering team.`,
      dos: ['Cite specific recent company news, engineering blogs, or product launches.', 'Explain what mutual value you will exchange.'],
      donts: ['Never say "Because you pay high salaries" or "Because it is a big MNC brand name."']
    },
    {
      id: 'hr-3',
      category: 'Self-Awareness',
      question: 'What are your greatest strengths and weaknesses?',
      intent: 'Measures self-awareness, authenticity, and whether you are actively taking steps toward self-improvement.',
      structure: 'Strength: Pick a technical/interpersonal trait + proof with metric. Weakness: Genuine non-fatal skill + active mitigation plan.',
      sampleAnswer: `My greatest strength is my methodical approach to root-cause debugging and problem-solving. When faced with ambiguous bugs, I rely on structured logging and reproducible unit tests rather than guesswork. 
For my weakness, in the past I sometimes found it difficult to say 'no' to additional feature requests, which occasionally spread my attention thin across sprints. To address this, I started using Eisenhower priority matrices and structured capacity planning to set realistic stakeholder boundaries, which has significantly improved my sprint delivery predictability.`,
      dos: ['Choose a real weakness, not a humblebrag like "I work too hard".', 'Show tangible active steps you are taking to overcome it.'],
      donts: ['Never name a weakness that is a core requirement for the job (e.g. "I am bad at coding").']
    },
    {
      id: 'hr-4',
      category: 'Conflict Resolution',
      question: 'Describe a time you had a disagreement with a teammate. How did you resolve it?',
      intent: 'Tests emotional intelligence, maturity, constructive confrontation, and team collaboration.',
      structure: 'Context -> Nature of the disagreement -> How you listened and found objective data/compromise -> Positive final outcome.',
      sampleAnswer: `During our college hackathon project, my teammate and I disagreed on whether to use MongoDB or PostgreSQL for our user transaction ledger. My teammate favored MongoDB for speed of prototyping, whereas I was concerned about ACID compliance for financial balances. Instead of arguing opinion, I proposed we build a quick POC measuring concurrent double-entry write integrity. The tests showed potential race conditions with unconstrained documents, so we agreed to use PostgreSQL for ledger transactions and MongoDB for user session logs. We completed the project on time and won 2nd place.`,
      dos: ['Focus on the issue, not personalities.', 'Highlight mutual respect and data-driven resolution.'],
      donts: ['Never paint the other person as foolish, malicious, or incompetent.']
    },
    {
      id: 'hr-5',
      category: 'Career Vision',
      question: 'Where do you see yourself in 5 years?',
      intent: 'Assesses career ambition, commitment, realistic expectations, and company alignment.',
      structure: 'Short-term competence (mastering stack & domain) -> Medium-term autonomy (leading feature architectures) -> Long-term leadership/mentorship.',
      sampleAnswer: `In 5 years, I envision myself as a Senior Software Engineer with deep domain expertise in distributed systems architecture. In the first couple of years, my focus will be on mastering your codebase, shipping robust features, and minimizing operational errors. Over time, I aim to take end-to-end ownership of larger system modules, lead technical design RFCs, and mentor junior engineers and interns joining our engineering team.`,
      dos: ['Show commitment to technical mastery and progressive responsibility.', 'Keep it aligned with the company\'s engineering ladder.'],
      donts: ['Don\'t say "I want to start my own startup" or "In your chair as CEO".']
    }
  ],
  dosAndDonts: {
    dos: [
      'Maintain strong eye contact (look directly into the camera lens in virtual interviews).',
      'Smile and project enthusiasm; interviewers want colleagues they will enjoy working with.',
      'Have 3-4 structured stories pre-prepared following the STAR methodology.',
      'Always have 2-3 thoughtful questions prepared for the interviewer at the end.',
      'Send a polite thank-you email/note within 24 hours of the interview.'
    ],
    donts: [
      'Never speak negatively about past employers, college professors, or teammates.',
      'Never interrupt the interviewer while they are presenting a question or context.',
      'Do not answer with monosyllabic "yes" or "no" responses; provide relevant context.',
      'Avoid checking your phone or glancing away frequently during video interviews.',
      'Never guess or pretend you know an answer when you don\'t — transparently admit it and walk through your logical thinking.'
    ]
  },
  questionsToAsk: [
    'What does a typical day look like for an engineer in this team?',
    'What are the key technical challenges your engineering team is aiming to solve in the next 6-12 months?',
    'How do you measure success for someone in this role during their first 90 days?',
    'What opportunities exist for cross-functional learning and mentorship within the department?'
  ]
};
