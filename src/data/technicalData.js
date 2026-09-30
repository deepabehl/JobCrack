export const technicalData = [
  {
    id: 'os',
    name: 'Operating Systems',
    shortName: 'OS',
    color: 'from-blue-500 to-indigo-600',
    description: 'Processes, Threads, Concurrency, Deadlocks, CPU Scheduling, and Virtual Memory management.',
    cheatsheet: [
      {
        title: 'Process vs Thread',
        content: `**Process**: An executing program with its own independent address space, program counter, registers, and stack. Heavyweight context switching.
**Thread**: A lightweight execution unit within a process that shares the code, data section, and OS resources (open files) with peer threads, but maintains its own stack and registers. Fast context switching.`
      },
      {
        title: 'The 4 Coffman Conditions for Deadlock',
        content: `A deadlock can occur if and only if all four conditions hold simultaneously:
1. **Mutual Exclusion**: At least one resource must be held in a non-shareable mode.
2. **Hold and Wait**: A process is holding at least one resource and waiting to acquire additional resources held by others.
3. **No Preemption**: Resources cannot be preempted; they can only be released voluntarily.
4. **Circular Wait**: A closed chain of processes exists such that each process holds at least one resource needed by the next.`
      },
      {
        title: 'Virtual Memory & Demand Paging',
        content: `Virtual memory creates an illusion of unlimited contiguous memory.
- **Paging**: Physical memory is split into fixed-size frames, and logical memory into pages of the same size.
- **Page Fault**: Occurs when a requested page is not currently resident in physical RAM. Triggers OS trap, fetches page from swap disk, updates page table, and restarts instruction.
- **Thrashing**: When the OS spends more time swapping pages in/out than executing instructions.`
      }
    ],
    interviewQuestions: [
      {
        q: 'What is the difference between Mutex and Semaphore?',
        a: `1. **Mutex (Mutual Exclusion Object)**: A locking mechanism used to synchronize access to a single shared resource. Only the thread that locked the mutex can unlock it (Ownership concept).
2. **Binary Semaphore**: A signaling mechanism with values 0 or 1. Any thread can signal (unlock) it.
3. **Counting Semaphore**: Holds an integer count \\(N\\), allowing up to \\(N\\) threads to access finite concurrent instances of a resource simultaneously.`
      },
      {
        q: 'Explain the working of Banker\'s Algorithm in Deadlock Avoidance.',
        a: `Banker\'s algorithm tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources, and then makes an "s-state" check to test for possible activities, before deciding whether allocation should be allowed to continue. If granting a resource leaves the system in a safe state (where there is at least one sequence \\(\\langle P_1, P_2, \\dots, P_n \\rangle\\) such that every process can finish), the resource is granted; otherwise, the requesting process waits.`
      },
      {
        q: 'What is Belady\'s Anomaly in Page Replacement?',
        a: `Belady\'s Anomaly is the phenomenon in which increasing the number of page frames results in an increase in the number of page faults for certain memory access patterns. This anomaly commonly occurs in FIFO (First-In-First-Out) page replacement algorithm, but never occurs in stack-based algorithms like LRU (Least Recently Used) or Optimal.`
      }
    ]
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    shortName: 'DBMS',
    color: 'from-emerald-500 to-teal-600',
    description: 'Relational model, ACID properties, Normalization (1NF to BCNF), Indexing, and Concurrency.',
    cheatsheet: [
      {
        title: 'ACID Properties of Transactions',
        content: `- **Atomicity**: "All or nothing" — if any part of the transaction fails, the entire transaction is rolled back.
- **Consistency**: The database must remain in a valid state adhering to all constraints before and after execution.
- **Isolation**: Concurrent transactions execute as if they were running serially without interfering with one another.
- **Durability**: Once a transaction commits, its changes are permanently recorded in non-volatile storage even across power cuts.`
      },
      {
        title: 'Database Normalization Forms',
        content: `- **1NF**: Atomic values in each column; no repeating groups/arrays.
- **2NF**: In 1NF + No partial dependency (all non-key attributes must be fully functionally dependent on the entire composite primary key).
- **3NF**: In 2NF + No transitive dependency (non-prime attributes must depend solely on the candidate key: \\(A \\to B\\) and \\(B \\to C\\) is disallowed).
- **BCNF (Boyce-Codd NF)**: Stricter version of 3NF — For every functional dependency \\(X \\to Y\\), \\(X\\) must be a super key.`
      },
      {
        title: 'B-Tree vs B+ Tree Indexing',
        content: `- In a **B-Tree**, keys and data pointers are stored in both internal nodes and leaf nodes.
- In a **B+ Tree**, data pointers and records are stored **strictly in leaf nodes**. Internal nodes store only index keys for navigation. Leaf nodes are linked via a doubly linked list, making range queries (\\(BETWEEN\\) and \\(ORDER BY\\)) extremely fast.`
      }
    ],
    interviewQuestions: [
      {
        q: 'What are the 4 Transaction Isolation Levels and their associated read anomalies?',
        a: `1. **Read Uncommitted**: Lowest level. Vulnerable to *Dirty Reads* (reading uncommitted data).
2. **Read Committed**: Solves Dirty Reads. Susceptible to *Non-repeatable Reads* (re-reading a row gives different values because another transaction committed an update).
3. **Repeatable Read**: Solves Non-repeatable Reads. Susceptible to *Phantom Reads* (a new row matches search criteria on re-query). Default in MySQL InnoDB.
4. **Serializable**: Highest isolation. Strict locking or snapshot isolation; completely eliminates Dirty Reads, Non-repeatable Reads, and Phantoms.`
      },
      {
        q: 'What is the difference between Clustered and Non-Clustered Indexes?',
        a: `A **Clustered Index** determines the physical storage order of rows in the table. Because physical data can only be sorted in one order, a table can have only ONE clustered index (typically the Primary Key). A **Non-Clustered Index** creates a separate structure containing indexed keys and row locators/pointers to physical table rows. A single table can have multiple non-clustered indexes.`
      },
      {
        q: 'Explain the difference between DELETE, TRUNCATE, and DROP.',
        a: `- **DELETE**: DML command, deletes specified rows (with WHERE), logs each row deletion, slower, triggers fire, can be rolled back.
- **TRUNCATE**: DDL command, removes all rows by deallocating pages, minimal logging, faster, cannot use WHERE, resets auto-increment counters.
- **DROP**: DDL command, completely deletes table structure, indexes, constraints, and data from database schema.`
      }
    ]
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    shortName: 'CN',
    color: 'from-amber-500 to-orange-600',
    description: 'OSI 7 Layers, TCP/IP Suite, Three-Way Handshake, DNS, HTTP/HTTPS, and Subnetting.',
    cheatsheet: [
      {
        title: 'The OSI 7-Layer Reference Model',
        content: `1. **Application Layer (L7)**: User interface, HTTP, HTTPS, FTP, DNS, SMTP.
2. **Presentation Layer (L6)**: Data formatting, encryption/decryption (SSL/TLS), compression.
3. **Session Layer (L5)**: Authentication, session checkpoints, RPC.
4. **Transport Layer (L4)**: End-to-end transport, port numbers, TCP, UDP, flow and error control.
5. **Network Layer (L3)**: Logical addressing (IP), routing packets, routers, ICMP.
6. **Data Link Layer (L2)**: Physical addressing (MAC), framing, switches, ARP.
7. **Physical Layer (L1)**: Bit transmission over cables, radio frequencies, hubs.`
      },
      {
        title: 'TCP vs UDP',
        content: `| Feature | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---|---|---|
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Guaranteed delivery (ACKs, Retransmission) | Unreliable (Best-effort delivery) |
| Ordering | Strict packet sequencing | Packets may arrive out of order |
| Speed | Slower due to overhead & flow control | Faster, lightweight headers (8 bytes) |
| Use Cases | Web browsing, Email, File transfer | Video streaming, Gaming, DNS, VoIP |`
      },
      {
        title: 'TCP 3-Way Handshake & Teardown',
        content: `**Establishment:**
1. Client sends **SYN** (Synchronize sequence number).
2. Server responds with **SYN-ACK** (Acknowledge client + server sequence number).
3. Client responds with **ACK**. Connection is established!

**Teardown (4-Way):**
Client sends **FIN** -> Server sends **ACK** -> Server sends **FIN** -> Client sends **ACK** + waits for **TIME_WAIT** (2MSL).`
      }
    ],
    interviewQuestions: [
      {
        q: 'What happens behind the scenes when you type https://www.google.com in a browser and press Enter?',
        a: `1. **URL Parsing & HSTS check**: Browser checks cached DNS and preloaded HTTPS requirements.
2. **DNS Resolution**: Local browser cache -> OS cache -> Router cache -> ISP Recursive DNS resolver -> Root -> TLD (.com) -> Authoritative Nameserver returns IP.
3. **TCP Connection**: Three-way handshake (SYN, SYN-ACK, ACK) with server IP on port 443.
4. **TLS/SSL Handshake**: ClientHello -> ServerHello (Certificate + Public key) -> Key exchange (Diffie-Hellman) -> Symmetric session keys established.
5. **HTTP Request & Response**: Browser sends GET request with headers. Server responds with HTML/CSS/JS.
6. **DOM Rendering**: Browser constructs DOM and CSSOM trees, creates render tree, computes layout, paints pixels.`
      },
      {
        q: 'What is the purpose of ARP (Address Resolution Protocol)?',
        a: `ARP resolves a known logical Network Layer address (IPv4 address) into a physical Link Layer address (MAC address) on the same local area network broadcast domain. A node sends an ARP Request broadcast asking "Who has IP X.X.X.X? Tell me your MAC". The target node responds with a unicast ARP Reply.`
      }
    ]
  },
  {
    id: 'oops',
    name: 'Object-Oriented Programming',
    shortName: 'OOPs',
    color: 'from-violet-500 to-purple-600',
    description: 'The 4 Pillars, Polymorphism, Abstract classes vs Interfaces, and SOLID Principles.',
    cheatsheet: [
      {
        title: 'The 4 Core Pillars',
        content: `1. **Encapsulation**: Bundling data (variables) and methods operating on that data into a single unit (class), while restricting direct access via private/protected access modifiers (Data Hiding).
2. **Abstraction**: Hiding internal implementation details and exposing only essential functional interfaces (via Abstract Classes or Interfaces).
3. **Inheritance**: Mechanism where a child class acquires the properties and behaviors of a parent class (promoting code reuse).
4. **Polymorphism**: The ability of an entity to take multiple forms. Compile-time (Method Overloading) vs Runtime (Method Overriding using virtual functions).`
      },
      {
        title: 'SOLID Principles Cheat Sheet',
        content: `- **S - Single Responsibility Principle**: A class should have one, and only one, reason to change.
- **O - Open/Closed Principle**: Software entities should be open for extension, but closed for modification.
- **L - Liskov Substitution Principle**: Subtypes must be substitutable for their base types without altering correctness.
- **I - Interface Segregation Principle**: Clients should not be forced to depend upon interfaces they do not use.
- **D - Dependency Inversion Principle**: High-level modules should not depend on low-level modules; both should depend on abstractions.`
      }
    ],
    interviewQuestions: [
      {
        q: 'What is the difference between Method Overloading and Method Overriding?',
        a: `- **Method Overloading (Compile-time / Static Polymorphism)**: Multiple methods within the same class have the exact same name but differ in parameter count or parameter types. Return type alone cannot distinguish overloads.
- **Method Overriding (Runtime / Dynamic Polymorphism)**: A child class provides a specific implementation of a method that is already defined in its superclass, maintaining the exact same name, return type, and signature. Resolution occurs at runtime using vtables.`
      },
      {
        q: 'Why can\'t we instantiate an Interface or Abstract Class?',
        a: `An interface or abstract class represents an incomplete blueprint with undefined abstract method declarations that lack concrete execution bodies. Instantiating it would create an object with missing runtime behavior. You must instantiate a concrete subclass that provides full implementations for all abstract contracts.`
      }
    ]
  },
  {
    id: 'system-design',
    name: 'System Design Fundamentals',
    shortName: 'SysDesign',
    color: 'from-rose-500 to-pink-600',
    description: 'Scalability, Load Balancing, Caching, CAP Theorem, and Microservices design patterns.',
    cheatsheet: [
      {
        title: 'Scalability & Load Balancing',
        content: `- **Vertical Scaling (Scale-up)**: Adding more CPU/RAM to a single server. Simple, but hits hardware ceilings and creates a single point of failure (SPOF).
- **Horizontal Scaling (Scale-out)**: Adding more commodity server nodes into a cluster. Requires load balancers (Round Robin, Least Connections, Consistent Hashing).
- **Consistent Hashing**: Minimizes key remapping when cache or database nodes are added/removed (only \\(K/N\\) keys move).`
      },
      {
        title: 'The CAP Theorem',
        content: `In any distributed data store, it is impossible to simultaneously provide more than two out of three guarantees:
- **Consistency (C)**: Every read receives the most recent write or an error.
- **Availability (A)**: Every non-failing request receives a non-error response (without guarantee that it contains the latest write).
- **Partition Tolerance (P)**: The system continues to operate despite network packet loss or network partitions.
*Since network partitions are inevitable in physical distributed networks, you must choose either CP (e.g. HBase, MongoDB) or AP (e.g. Cassandra, DynamoDB).*`
      }
    ],
    interviewQuestions: [
      {
        q: 'Explain Caching Strategies: Cache-Aside, Write-Through, and Write-Back.',
        a: `1. **Cache-Aside (Lazy Loading)**: Application first checks cache. On cache hit, returns data. On cache miss, reads from database, populates cache, and returns data.
2. **Write-Through**: Application writes data to cache, and the cache synchronously writes to the backing database before returning success. Strong consistency, higher write latency.
3. **Write-Back (Write-Behind)**: Application writes to cache immediately; cache asynchronously flushes batch writes to the database in background intervals. High write performance, risk of data loss on cache crash.`
      }
    ]
  }
];
