export const aptitudeData = {
  quantitative: {
    title: 'Quantitative Aptitude',
    description: 'Master numerical ability, mental arithmetic tricks, and high-frequency placement exam math topics.',
    topics: [
      {
        id: 'quant-time-work',
        name: 'Time and Work',
        badge: 'High Frequency',
        summary: 'Fundamental concepts on individual work efficiency, combined work, pipe & cisterns, and man-days formulas.',
        notes: [
          {
            title: 'Core Concept & The LCM Method',
            content: `If A can do a piece of work in \\(X\\) days and B can do it in \\(Y\\) days:
- Work done by A in 1 day = \\(1/X\\)
- Work done by B in 1 day = \\(1/Y\\)
- Work done by both (A + B) in 1 day = \\(\\frac{1}{X} + \\frac{1}{Y} = \\frac{X + Y}{X \\cdot Y}\\)
- Time taken together = \\(\\frac{X \\cdot Y}{X + Y}\\) days.

**LCM Method Trick:**
1. Assume total work = LCM of individual times \\(X\\) and \\(Y\\).
2. Calculate individual 1-day efficiencies (Work / Time).
3. Combine efficiencies to find total days = Total Work / Combined Efficiency.`
          },
          {
            title: 'Chain Rule / Man-Days Formula',
            content: `\\(\\frac{M_1 \\cdot D_1 \\cdot H_1}{W_1} = \\frac{M_2 \\cdot D_2 \\cdot H_2}{W_2}\\)
- \\(M\\) = Number of men/workers
- \\(D\\) = Number of days
- \\(H\\) = Working hours per day
- \\(W\\) = Amount of work done or wages earned

If efficiency \\(E\\) is given: \\(\\frac{M_1 D_1 H_1 E_1}{W_1} = \\frac{M_2 D_2 H_2 E_2}{W_2}\\)`
          },
          {
            title: 'Pipes and Cisterns Variant',
            content: `Pipes working to fill a tank have positive efficiency (+), while leak/emptying pipes have negative efficiency (-).
- Filling pipe in \\(A\\) hours: \\(+1/A\\) tank/hr.
- Emptying pipe in \\(B\\) hours: \\(-1/B\\) tank/hr.
- Net rate per hour = \\(\\frac{1}{A} - \\frac{1}{B}\\).`
          }
        ],
        practice: [
          {
            id: 'qw-1',
            question: 'A can complete a project in 12 days and B can complete the same project in 18 days. If they work together for 4 days, what fraction of the total work remains?',
            options: ['1/3', '4/9', '5/9', '2/3'],
            correctIndex: 1,
            explanation: `1. Total work = LCM(12, 18) = 36 units.\n2. A's efficiency = 36/12 = 3 units/day.\n3. B's efficiency = 36/18 = 2 units/day.\n4. Combined efficiency = 3 + 2 = 5 units/day.\n5. Work done in 4 days = 4 * 5 = 20 units.\n6. Remaining work = 36 - 20 = 16 units.\n7. Fraction remaining = 16 / 36 = 4/9.`
          },
          {
            id: 'qw-2',
            question: 'Pipe A can fill a tank in 20 minutes and Pipe B can fill it in 30 minutes, while Pipe C can empty the full tank in 40 minutes. If all three pipes are opened together, in how many minutes will the tank be full?',
            options: ['15 minutes', '17 1/7 minutes', '24 minutes', '12 2/3 minutes'],
            correctIndex: 1,
            explanation: `Total tank capacity = LCM(20, 30, 40) = 120 units.\n- Rate of A = +6 units/min\n- Rate of B = +4 units/min\n- Rate of C = -3 units/min\nNet rate when all open = 6 + 4 - 3 = 7 units/min.\nTime required = 120 / 7 = 17 1/7 minutes.`
          }
        ]
      },
      {
        id: 'quant-speed-distance',
        name: 'Time, Speed and Distance',
        badge: 'High Frequency',
        summary: 'Relative speed, trains, boats & streams, and average speed shortcuts.',
        notes: [
          {
            title: 'Fundamental Formulas & Conversions',
            content: `- \\(\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}\\)
- Conversion: \\(1 \\text{ km/h} = \\frac{5}{18} \\text{ m/s}\\)
- Conversion: \\(1 \\text{ m/s} = \\frac{18}{5} \\text{ km/h}\\)
- If a person travels distance \\(D\\) at speed \\(S_1\\) and equal distance \\(D\\) at speed \\(S_2\\), Average Speed = \\(\\frac{2 S_1 S_2}{S_1 + S_2}\\).`
          },
          {
            title: 'Relative Speed',
            content: `- Same direction: \\(S_{\\text{rel}} = |S_1 - S_2|\\)
- Opposite direction: \\(S_{\\text{rel}} = S_1 + S_2\\)
- **Train crossing a pole/person**: Distance = Length of Train.
- **Train crossing a platform/bridge of length L**: Distance = \\(\\text{Length of Train} + L\\).`
          },
          {
            title: 'Boats and Streams',
            content: `- Speed of boat in still water = \\(u\\), Speed of stream = \\(v\\).
- Downstream Speed \\(D = u + v\\)
- Upstream Speed \\(U = u - v\\)
- \\(u = \\frac{D + U}{2}\\), \\(v = \\frac{D - U}{2}\\)`
          }
        ],
        practice: [
          {
            id: 'qs-1',
            question: 'A train 180 meters long running at 72 km/h crosses a platform in 20 seconds. What is the length of the platform?',
            options: ['220 m', '200 m', '240 m', '180 m'],
            correctIndex: 0,
            explanation: `1. Speed in m/s = 72 * (5/18) = 20 m/s.\n2. Total Distance = Speed * Time = 20 * 20 = 400 meters.\n3. Total Distance = Train Length + Platform Length\n4. 400 = 180 + Platform Length => Platform Length = 400 - 180 = 220 meters.`
          },
          {
            id: 'qs-2',
            question: 'A man rows downstream at 14 km/h and upstream at 8 km/h. Find the speed of the current/stream.',
            options: ['3 km/h', '4 km/h', '2 km/h', '6 km/h'],
            correctIndex: 0,
            explanation: `Speed of stream = (Downstream Speed - Upstream Speed) / 2 = (14 - 8) / 2 = 6 / 2 = 3 km/h.`
          }
        ]
      },
      {
        id: 'quant-profit-loss',
        name: 'Profit, Loss & Percentages',
        badge: 'High Frequency',
        summary: 'Cost price (CP), Selling price (SP), Marked price (MP), successive discounts, and dishonest dealer problems.',
        notes: [
          {
            title: 'Formulas & Definitions',
            content: `- \\(\\text{Profit} = SP - CP\\), \\(\\text{Loss} = CP - SP\\)
- \\(\\text{Profit }\\% = \\left(\\frac{\\text{Profit}}{CP}\\right) \\times 100\\)
- \\(\\text{Loss }\\% = \\left(\\frac{\\text{Loss}}{CP}\\right) \\times 100\\)
- \\(SP = CP \\times \\frac{100 + P\\%}{100} = CP \\times \\frac{100 - L\\%}{100}\\)
- \\(\\text{Discount }\\% = \\left(\\frac{MP - SP}{MP}\\right) \\times 100\\)`
          },
          {
            title: 'Successive Percentage Changes',
            content: `If a value is changed by \\(a\\%\\) and then by \\(b\\%\\), the net percentage change is:
\\[
\\text{Net }\\% = a + b + \\frac{a \\cdot b}{100}
\\]
(Use positive sign for increase/profit and negative for decrease/discount/loss).`
          }
        ],
        practice: [
          {
            id: 'qp-1',
            question: 'An article is sold at 15% profit. If it had been bought at 10% less and sold for ₹24 more, the profit would have been 30%. Find the original cost price.',
            options: ['₹800', '₹1,000', '₹1,200', '₹1,500'],
            correctIndex: 2,
            explanation: `Let original CP = 100x.\nOriginal SP = 115x.\nNew CP = 90x.\nNew SP = 90x * 1.30 = 117x.\nDifference in SP = 117x - 115x = 2x.\nGiven 2x = 24 => x = 12.\nOriginal CP = 100 * 12 = ₹1,200.`
          }
        ]
      },
      {
        id: 'quant-permutations-probability',
        name: 'Permutations, Combinations & Probability',
        badge: 'Advanced',
        summary: 'Arrangements (nPr), selections (nCr), coin tosses, dice rolls, and card draws.',
        notes: [
          {
            title: 'Permutation vs Combination',
            content: `- **Permutation (Order matters)**: \\(P(n, r) = \\frac{n!}{(n - r)!}\\)
- **Combination (Order does not matter)**: \\(C(n, r) = \\frac{n!}{r! (n - r)!}\\)
- Probability: \\(P(E) = \\frac{\\text{Number of Favorable Outcomes}}{\\text{Total Number of Possible Outcomes}}\\)
- Probability of independent events: \\(P(A \\cap B) = P(A) \\cdot P(B)\\)`
          }
        ],
        practice: [
          {
            id: 'qpc-1',
            question: 'In how many different ways can the letters of the word "LEADING" be arranged such that the vowels always appear together?',
            options: ['360', '480', '720', '5040'],
            correctIndex: 2,
            explanation: `The word LEADING has 7 letters: Vowels are E, A, I (3 vowels) and consonants are L, D, N, G (4 consonants).\nBundle the 3 vowels as 1 unit: We now have 4 consonants + 1 vowel-bundle = 5 units.\n5 units can be arranged in 5! = 120 ways.\nThe 3 vowels inside the bundle can be arranged in 3! = 6 ways.\nTotal arrangements = 120 * 6 = 720 ways.`
          }
        ]
      }
    ]
  },
  logical: {
    title: 'Logical Reasoning',
    description: 'Sharpen analytical thinking, deductive deduction, seating arrangements, and pattern cracking.',
    topics: [
      {
        id: 'logic-syllogisms',
        name: 'Syllogisms (Venn Diagrams)',
        badge: 'High Frequency',
        summary: 'Deductive logic from categorical statements (All A are B, Some A are B, No A is B).',
        notes: [
          {
            title: '4 Fundamental Categorical Forms',
            content: `1. **A-Type (Universal Affirmative)**: "All A are B" -> Every member of A is inside B.
2. **E-Type (Universal Negative)**: "No A is B" -> Disjoint circles.
3. **I-Type (Particular Affirmative)**: "Some A are B" -> Overlapping region between A and B.
4. **O-Type (Particular Negative)**: "Some A are not B" -> At least one element of A is outside B.

**Golden Rule of Syllogisms**:
A conclusion definitely follows ONLY IF it holds true across ALL possible Venn diagram interpretations. If even one valid counter-diagram violates it, the conclusion does not definitely follow.`
          }
        ],
        practice: [
          {
            id: 'ls-1',
            question: `Statements:\n1. All cars are vehicles.\n2. Some vehicles are electric.\n\nConclusions:\nI. Some cars are electric.\nII. Some electric are vehicles.`,
            options: ['Only conclusion I follows', 'Only conclusion II follows', 'Either I or II follows', 'Both I and II follow'],
            correctIndex: 1,
            explanation: `Conclusion I: "Some vehicles are electric" does not necessarily intersect with the subset of cars. Thus, I does not definitely follow.\nConclusion II: If some vehicles are electric, then by direct conversion, some electric are vehicles. Conclusion II definitely follows.`
          }
        ]
      },
      {
        id: 'logic-blood-relations',
        name: 'Blood Relations',
        badge: 'High Frequency',
        summary: 'Family tree diagrams, coded relationships (A + B means A is father of B), and pointing puzzles.',
        notes: [
          {
            title: 'Standard Family Tree Notation',
            content: `- Use **+** or square for Male; **-** or circle for Female.
- Use horizontal double line ( = ) for husband-wife (married couple).
- Use horizontal single line ( - ) for siblings (brother/sister).
- Use vertical line ( | ) to denote generational step (parent-child).
- Father's/Mother's sister = Aunt; Father's/Mother's brother = Uncle.
- Aunt's/Uncle's son or daughter = Cousin.`
          }
        ],
        practice: [
          {
            id: 'lbr-1',
            question: 'Pointing to a photograph of a boy, Suresh said, "He is the only son of the only daughter of my mother." How is Suresh related to the boy in the photograph?',
            options: ['Father', 'Maternal Uncle', 'Brother', 'Grandfather'],
            correctIndex: 1,
            explanation: `"My mother's only daughter" = Suresh's sister.\n"The only son of my sister" = Suresh's nephew.\nTherefore, Suresh is the Maternal Uncle of that boy.`
          }
        ]
      },
      {
        id: 'logic-seating-arrangement',
        name: 'Seating Arrangements & Puzzles',
        badge: 'Essential',
        summary: 'Linear rows, circular tables (facing center / facing outside), and floor puzzles.',
        notes: [
          {
            title: 'Circular Arrangements Strategy',
            content: `- When people are **facing inside (towards the center)**:
  - Right of a person = Counter-Clockwise direction.
  - Left of a person = Clockwise direction.
- When people are **facing outside**:
  - Right = Clockwise.
  - Left = Counter-Clockwise.
- Always start the puzzle with the most definite and connected clues rather than conditional possibilities.`
          }
        ],
        practice: [
          {
            id: 'lsa-1',
            question: 'Five friends P, Q, R, S, T are sitting in a circle facing the center. R is immediately to the right of P. Q is between S and T. If P is to the immediate right of T, who is to the immediate left of R?',
            options: ['P', 'Q', 'S', 'T'],
            correctIndex: 0,
            explanation: `Given that "R is immediately to the right of P".\nHence, moving to the left from R brings us directly back to P.\nTherefore, P is to the immediate left of R.`
          }
        ]
      }
    ]
  },
  verbal: {
    title: 'Verbal Ability & English',
    description: 'Master grammatical precision, reading comprehension inference, vocabulary, and sentence ordering.',
    topics: [
      {
        id: 'verbal-grammar-rules',
        name: 'Sentence Correction & Grammar Rules',
        badge: 'High Frequency',
        summary: 'Subject-Verb agreement, dangling modifiers, parallelism, and conditional clauses.',
        notes: [
          {
            title: 'Top 5 Placement Grammar Rules',
            content: `1. **Subject-Verb Agreement**: Words like *along with, together with, as well as, accompanied by* do not change the number of the subject. (e.g. *The CEO, along with the directors, is attending.*)
2. **Neither/Nor & Either/Or**: The verb agrees with the subject closest to it. (e.g. *Neither the manager nor the engineers were present.*)
3. **Each, Everyone, Somebody**: Always singular and require singular verbs and pronouns.
4. **Dangling Modifiers**: A modifier must be placed right next to the noun it modifies.
5. **Parallelism**: Items in a series must maintain grammatical balance (all gerunds or all infinitives).`
          }
        ],
        practice: [
          {
            id: 'vg-1',
            question: 'Identify the grammatically correct sentence from the following options:',
            options: [
              'The team of researchers have published their results in the journal.',
              'The team of researchers has published its results in the journal.',
              'The team of researchers have published its results in the journal.',
              'The team of researchers has published their results in the journal.'
            ],
            correctIndex: 1,
            explanation: `'The team' is a collective noun treated as a single entity performing a unified action, so it takes the singular verb 'has' and the singular pronoun 'its'.`
          }
        ]
      },
      {
        id: 'verbal-para-jumbles',
        name: 'Para Jumbles (Sentence Reordering)',
        badge: 'Critical',
        summary: 'Identify opening independent statements, mandatory chronological pairs, and transition words.',
        notes: [
          {
            title: 'Solving Strategy for Jumbled Sentences',
            content: `- **Find the Starter**: The introductory sentence is almost never a pronoun (he, she, they, it) or a conjunction (however, therefore, but).
- **Find Mandatory Pairs**:
  - Full Name followed by Acronym/Surname (e.g., *Tata Consultancy Services -> TCS*).
  - Cause followed by Effect.
  - Question followed by Answer.
- **Watch Concluding Signals**: Sentences beginning with *In conclusion, Hence, Thus, Ultimately* are typically placed at the end.`
          }
        ],
        practice: [
          {
            id: 'vp-1',
            question: `Arrange the following sentences in a logical coherent paragraph:
A. However, modern lithium-ion batteries suffer from degradation over repeated charge cycles.
B. Electric vehicles have emerged as a prominent alternative to fossil fuels.
C. This transition is primarily propelled by advances in battery energy density.
D. Consequently, global research is now shifting towards solid-state alternatives.`,
            options: ['B - C - A - D', 'A - B - C - D', 'B - A - C - D', 'C - B - A - D'],
            correctIndex: 0,
            explanation: `B introduces the central topic (Electric vehicles). C explains what propels this transition (battery advances). A introduces a counter-challenge (battery degradation with "However"). D concludes with the outcome (shift to solid-state alternatives with "Consequently"). Order: B-C-A-D.`
          }
        ]
      }
    ]
  }
};
