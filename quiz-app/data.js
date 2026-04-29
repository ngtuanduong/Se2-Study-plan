// ===== SE2 Quiz Data =====
// Mỗi lecture: 8 MCQ + 4 Fill-in-blank
// MCQ format: { type, question, options[], correct (index), explanation }
// Fill format: { type, question, answers[] (accept multiple), explanation }

const QUIZ_DATA = {

// ============================================================
// LECTURE 1 — Software Process & Agile
// ============================================================
"lec1": {
    title: "Lecture 1 — Software Process & Agile",
    topics: "4 process activities, Waterfall, Incremental, Agile principles, XP, TDD",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "How many basic process activities exist in all software processes?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "4 activities: Specification, Design & Implementation, Validation, Evolution."
        },
        {
            type: "mcq",
            question: "Which is NOT one of the 4 basic process activities?",
            options: ["Specification", "Programming", "Validation", "Evolution"],
            correct: 1,
            explanation: "Programming là một phần của Design & Implementation, không phải hoạt động cơ bản riêng."
        },
        {
            type: "mcq",
            question: "Which phase comes immediately after 'System and software design' in Waterfall?",
            options: [
                "Requirements analysis",
                "Implementation and unit testing",
                "Integration and system testing",
                "Operation and maintenance"
            ],
            correct: 1,
            explanation: "Thứ tự Waterfall: Requirements → Design → Implementation/Unit Testing → Integration/System Testing → Operation/Maintenance."
        },
        {
            type: "mcq",
            question: "How many principles of Agile methods are there?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            explanation: "5 principles: Customer involvement, Incremental delivery, People not process, Embrace change, Maintain simplicity."
        },
        {
            type: "mcq",
            question: "The Agile Manifesto values ___ over comprehensive documentation.",
            options: [
                "Detailed planning",
                "Working software",
                "Strict processes",
                "Vendor contracts"
            ],
            correct: 1,
            explanation: "Một trong 4 core values của Agile Manifesto."
        },
        {
            type: "mcq",
            question: "How often does XP deliver increments to customers?",
            options: ["Every day", "Every 2 weeks", "Every month", "Every 3 months"],
            correct: 1,
            explanation: "Increments được giao cho customer mỗi 2 tuần; new versions có thể built nhiều lần/ngày."
        },
        {
            type: "mcq",
            question: "Which is NOT an XP practice?",
            options: ["Pair programming", "Refactoring", "Big design upfront", "Test-first development"],
            correct: 2,
            explanation: "XP avoids 'big design upfront' (Simple design — chỉ design đủ cho yêu cầu hiện tại)."
        },
        {
            type: "mcq",
            question: "In TDD, when are tests written?",
            options: [
                "After code is implemented",
                "Before code is implemented",
                "During QA phase only",
                "Only when bugs are found"
            ],
            correct: 1,
            explanation: "Test-first development: tests written BEFORE functionality is implemented."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "A software process is a _____ set of activities required to develop a software system.",
            answers: ["structured"],
            explanation: "Định nghĩa chính xác trong slide."
        },
        {
            type: "fill",
            question: "TDD = Test-_____ Development.",
            answers: ["driven"],
            explanation: "TDD = Test-Driven Development."
        },
        {
            type: "fill",
            question: "Pair programming involves _____ programmers at the same computer.",
            answers: ["two", "2"],
            explanation: "1 driver, 1 navigator."
        },
        {
            type: "fill",
            question: "The Java testing framework commonly used in TDD is _____.",
            answers: ["JUnit"],
            explanation: "JUnit là framework chuẩn cho automated unit testing trong Java."
        },
    ]
},

// ============================================================
// LECTURE 2 — Reuse, Frameworks, Spring Boot
// ============================================================
"lec2": {
    title: "Lecture 2 — Reuse, Frameworks, Spring Boot",
    topics: "Maven, Spring Boot, Thymeleaf, JPA, ORM, WAF, IoC",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "What is Maven?",
            options: [
                "A database management system",
                "A build tool and dependency manager",
                "A Java IDE",
                "A web framework"
            ],
            correct: 1,
            explanation: "Maven = build tool + dependency manager. Alternative: Gradle."
        },
        {
            type: "mcq",
            question: "Where is `application.properties` located in a Spring Boot project?",
            options: [
                "src/main/java/",
                "src/main/resources/",
                "src/test/resources/",
                "Project root directory"
            ],
            correct: 1,
            explanation: "application.properties ở src/main/resources/."
        },
        {
            type: "mcq",
            question: "What is the relationship between JPA and Hibernate?",
            options: [
                "JPA is an implementation of Hibernate",
                "Hibernate is an implementation of JPA",
                "They are competitors and unrelated",
                "Hibernate replaces JPA in Spring Boot"
            ],
            correct: 1,
            explanation: "JPA = specification (set of interfaces). Hibernate = implementation chính thức."
        },
        {
            type: "mcq",
            question: "Inversion of Control (IoC) means:",
            options: [
                "Application code calls the framework",
                "Framework calls the application code",
                "User controls the application flow",
                "Database controls the logic"
            ],
            correct: 1,
            explanation: "IoC: framework gọi application code (không ngược lại)."
        },
        {
            type: "mcq",
            question: "Which is NOT a benefit of software reuse?",
            options: [
                "Accelerated development",
                "Lower development costs",
                "Increased dependability",
                "Vendor lock-in"
            ],
            correct: 3,
            explanation: "Vendor lock-in là PROBLEM, không phải benefit."
        },
        {
            type: "mcq",
            question: "How many levels of software reuse are mentioned in Lecture 2?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "4 levels: System / Application / Component / Object & function."
        },
        {
            type: "mcq",
            question: "Which feature is NOT part of typical WAF (Web Application Framework)?",
            options: [
                "Security (authentication)",
                "Dynamic web pages",
                "Operating system kernel",
                "Session management"
            ],
            correct: 2,
            explanation: "WAF không bao gồm OS kernel. 5 features: Security, Dynamic pages, DB support, Session mgmt, User interaction."
        },
        {
            type: "mcq",
            question: "Thymeleaf attributes start with which prefix?",
            options: ["thy:", "tl:", "th:", "thyme:"],
            correct: 2,
            explanation: "Thymeleaf standard dialect uses prefix 'th:'."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "POM stands for Project Object _____.",
            answers: ["Model"],
            explanation: "Project Object Model — file pom.xml chứa config Maven."
        },
        {
            type: "fill",
            question: "ORM stands for Object-Relational _____.",
            answers: ["Mapping"],
            explanation: "ORM = bridge giữa OOP và relational database."
        },
        {
            type: "fill",
            question: "Spring Boot supports Java version _____ and above.",
            answers: ["17"],
            explanation: "Spring Boot hiện tại require Java 17+."
        },
        {
            type: "fill",
            question: "COTS stands for _____ Off-The-Shelf.",
            answers: ["Commercial"],
            explanation: "COTS = Commercial Off-The-Shelf systems (như SAP, Salesforce)."
        },
    ]
},

// ============================================================
// LECTURE 3 — Architectural Design & Spring Controllers
// ============================================================
"lec3": {
    title: "Lecture 3 — Architecture & Spring Controllers",
    topics: "5 architectural patterns, Spring MVC workflow, @RequestMapping",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "How many major architectural patterns are taught?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "5 patterns: MVC, Layered, Repository, Client-Server, Pipe and Filter."
        },
        {
            type: "mcq",
            question: "Which pattern centralizes ALL data in one component?",
            options: ["MVC", "Layered", "Repository", "Pipe and Filter"],
            correct: 2,
            explanation: "Repository = central data store, components interact only via repository."
        },
        {
            type: "mcq",
            question: "How many steps are in the Spring MVC request handling workflow?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            explanation: "8 steps: incoming → dispatching → handling → model/view prep → ModelAndView → rendering → return to servlet → response."
        },
        {
            type: "mcq",
            question: "What is the key Spring class that dispatches HTTP requests?",
            options: [
                "RequestDispatcher",
                "DispatcherServlet",
                "HandlerMapping",
                "FrontController"
            ],
            correct: 1,
            explanation: "DispatcherServlet = front controller trong Spring MVC."
        },
        {
            type: "mcq",
            question: "In MVC, which component handles user interaction?",
            options: ["Model", "View", "Controller", "Database"],
            correct: 2,
            explanation: "Controller manages user input (clicks, form submission), passes to Model and View."
        },
        {
            type: "mcq",
            question: "Which annotation extracts a value from URL query string?",
            options: ["@RequestBody", "@RequestParam", "@RequestHeader", "@CookieValue"],
            correct: 1,
            explanation: "@RequestParam binds query string param. @RequestBody binds entire body (JSON/XML)."
        },
        {
            type: "mcq",
            question: "Which is a disadvantage of the Pipe and Filter pattern?",
            options: [
                "Hard to understand",
                "Cannot be implemented concurrently",
                "Format must be agreed between filters",
                "Cannot reuse transformations"
            ],
            correct: 2,
            explanation: "Disadvantage: data format giữa các filter phải thống nhất, gây overhead."
        },
        {
            type: "mcq",
            question: "Which is a disadvantage of the Repository pattern?",
            options: [
                "Components must know each other directly",
                "Cannot have many components",
                "Repository is a single point of failure",
                "Data is duplicated across components"
            ],
            correct: 2,
            explanation: "Repository centralized → nếu repo lỗi, toàn bộ system fail."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "MVC stands for Model-_____-Controller.",
            answers: ["View"],
            explanation: "Model-View-Controller pattern."
        },
        {
            type: "fill",
            question: "The annotation that maps an HTTP request to a controller method is @_____.",
            answers: ["RequestMapping"],
            explanation: "@RequestMapping (general); @GetMapping/@PostMapping cho specific methods."
        },
        {
            type: "fill",
            question: "In Layered architecture, the bottom layer is called the _____ layer.",
            answers: ["Infrastructure", "infrastructure"],
            explanation: "3 layers: Application-specific (top), Application, Infrastructure (bottom)."
        },
        {
            type: "fill",
            question: "An architecture where each component performs ONE data transformation is the _____ and Filter pattern.",
            answers: ["Pipe"],
            explanation: "Pipe and Filter — data flows through filters, each does 1 transformation."
        },
    ]
},

// ============================================================
// LECTURE 4 — Use Case, ER Modeling, Hibernate
// ============================================================
"lec4": {
    title: "Lecture 4 — Use Case, ER Modeling, Hibernate",
    topics: "include/extend, ER cardinality, Hibernate annotations, relationships",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "Which use case relationship means 'source is incomplete without target'?",
            options: ["<<extend>>", "<<include>>", "<<generalize>>", "<<realize>>"],
            correct: 1,
            explanation: "<<include>>: bắt buộc dùng chung. <<extend>>: tùy chọn thêm."
        },
        {
            type: "mcq",
            question: "Which relationship degree is MOST COMMON in data modeling?",
            options: ["Unary", "Binary", "Ternary", "Quaternary"],
            correct: 1,
            explanation: "Binary (giữa 2 entity types) là phổ biến nhất."
        },
        {
            type: "mcq",
            question: "Which is NOT a GenerationType in JPA?",
            options: ["IDENTITY", "AUTO", "RANDOM", "SEQUENCE"],
            correct: 2,
            explanation: "4 strategies: IDENTITY, AUTO, TABLE, SEQUENCE. RANDOM không phải."
        },
        {
            type: "mcq",
            question: "In a OneToMany relationship between Author and Book, which side should be the OWNING side (best practice)?",
            options: [
                "Author (the One side)",
                "Book (the Many side)",
                "Both sides",
                "Neither side"
            ],
            correct: 1,
            explanation: "Many side là owning (Book chứa @ManyToOne); One side dùng mappedBy."
        },
        {
            type: "mcq",
            question: "In ER specialization, what does the 'd' symbol indicate?",
            options: [
                "Default subtype",
                "Disjoint (mutually exclusive)",
                "Decomposed",
                "Dependent"
            ],
            correct: 1,
            explanation: "'d' = Disjoint: instance không thể thuộc nhiều subtype cùng lúc."
        },
        {
            type: "mcq",
            question: "Total specialization in ER is represented by:",
            options: [
                "Single line",
                "Double lines",
                "Dashed line",
                "Bold line"
            ],
            correct: 1,
            explanation: "Double lines (==) = Total: instance phải thuộc 1 subtype."
        },
        {
            type: "mcq",
            question: "An associative entity is also called a:",
            options: ["Junction", "Bridge", "Gerund", "Linker"],
            correct: 2,
            explanation: "Gerund — entity tạo từ relationship có attribute riêng (vd: Enrollment giữa Student & Course)."
        },
        {
            type: "mcq",
            question: "How many parts does @JoinTable have?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 parts: name, joinColumns, inverseJoinColumns."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "An external entity that interacts with a system in a use case diagram is called an _____.",
            answers: ["actor", "Actor"],
            explanation: "Actor = user role hoặc external system."
        },
        {
            type: "fill",
            question: "A candidate key that has been selected as the unique identifying characteristic is called an _____.",
            answers: ["identifier", "Identifier"],
            explanation: "Identifier = primary candidate key (= primary key trong DB)."
        },
        {
            type: "fill",
            question: "A relationship between instances of one entity type is called a _____ (or recursive) relationship.",
            answers: ["unary", "Unary"],
            explanation: "Unary relationship — 1 entity type, vd: Employee manages Employee."
        },
        {
            type: "fill",
            question: "In the inverse side of @OneToMany, the property to specify the owning side's field is _____.",
            answers: ["mappedBy"],
            explanation: "mappedBy = trỏ đến field bên owning side."
        },
    ]
},

// ============================================================
// LECTURE 5 — Project Management
// ============================================================
"lec5": {
    title: "Lecture 5 — Project Management",
    topics: "Risk management, People management, Group organization",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "How many success criteria for a software project?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "4: deliver on time / within budget / meets expectations / coherent team."
        },
        {
            type: "mcq",
            question: "Which is NOT a unique characteristic that distinguishes software projects?",
            options: [
                "Product is intangible",
                "Many projects are 'one-off'",
                "Software processes are variable",
                "Software is always developed by a single person"
            ],
            correct: 3,
            explanation: "3 distinctions: intangible / one-off / variable processes."
        },
        {
            type: "mcq",
            question: "How many stages in the Risk Management Process?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "4 stages: Identification → Analysis → Planning → Monitoring."
        },
        {
            type: "mcq",
            question: "A risk that affects schedule or resources is called a:",
            options: ["Project risk", "Product risk", "Business risk", "Technical risk"],
            correct: 0,
            explanation: "Project risk = schedule/resources. Product risk = quality. Business risk = organisation."
        },
        {
            type: "mcq",
            question: "Which strategy aims to REDUCE THE PROBABILITY of risk arising?",
            options: ["Avoidance", "Minimization", "Contingency", "Acceptance"],
            correct: 0,
            explanation: "Avoidance: giảm probability. Minimization: giảm impact. Contingency: kế hoạch khi đã xảy ra."
        },
        {
            type: "mcq",
            question: "Which is NOT a People Management factor in Lecture 5?",
            options: ["Consistency", "Respect", "Inclusion", "Productivity"],
            correct: 3,
            explanation: "4 factors: Consistency, Respect, Inclusion, Honesty."
        },
        {
            type: "mcq",
            question: "Which group organization is ALWAYS informal?",
            options: ["Hierarchical", "Matrix", "Agile", "Functional"],
            correct: 2,
            explanation: "Agile development always uses informal group structure (formal structure inhibits info exchange)."
        },
        {
            type: "mcq",
            question: "Which is NOT one of the 3 personality types?",
            options: [
                "Task-oriented",
                "Self-oriented",
                "Detail-oriented",
                "Interaction-oriented"
            ],
            correct: 2,
            explanation: "3 types: Task / Self / Interaction."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "The 5 universal management activities are: Project Planning, Risk Management, People Management, Reporting, and _____ Writing.",
            answers: ["Proposal", "proposal"],
            explanation: "Proposal Writing — viết proposal để win contract (first stage)."
        },
        {
            type: "fill",
            question: "A risk consequence that is the most severe is called _____.",
            answers: ["Catastrophic", "catastrophic"],
            explanation: "4 levels: Catastrophic / Serious / Tolerable / Insignificant."
        },
        {
            type: "fill",
            question: "The PM activity that involves choosing people and organizing the team is _____ Management.",
            answers: ["People", "people"],
            explanation: "People Management."
        },
        {
            type: "fill",
            question: "A risk that affects QUALITY or PERFORMANCE of the software is called a _____ risk.",
            answers: ["product", "Product"],
            explanation: "Product risk = quality/performance."
        },
    ]
},

// ============================================================
// LECTURE 6 — Thymeleaf, Spring Security 1
// ============================================================
"lec6": {
    title: "Lecture 6 — Thymeleaf & Spring Security 1",
    topics: "5 expression types, Security config, CSRF, BCrypt",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "How many types of Thymeleaf expressions are there?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "5 types: ${...} (variable), *{...} (selection), #{...} (i18n), @{...} (URL), ~{...} (fragment)."
        },
        {
            type: "mcq",
            question: "Which Thymeleaf syntax is used for URL expressions?",
            options: ["${...}", "*{...}", "#{...}", "@{...}"],
            correct: 3,
            explanation: "@{...} cho URLs, tự động prepend context path."
        },
        {
            type: "mcq",
            question: "What does CSRF stand for?",
            options: [
                "Cross-Site Request Forgery",
                "Client-Side Resource Format",
                "Common Security Response Filter",
                "Cross-System Resource Federation"
            ],
            correct: 0,
            explanation: "CSRF = Cross-Site Request Forgery — attacker tricks victim to send requests."
        },
        {
            type: "mcq",
            question: "Difference between th:insert and th:replace?",
            options: [
                "th:insert keeps host tag, th:replace removes it",
                "th:insert removes host tag, th:replace keeps it",
                "They are identical",
                "th:replace is deprecated"
            ],
            correct: 0,
            explanation: "th:insert = giữ host tag, insert fragment làm body. th:replace = thay host tag."
        },
        {
            type: "mcq",
            question: "Which is NOT a built-in UserDetailsManager in Spring Security?",
            options: [
                "InMemoryUserDetailsManager",
                "JdbcUserDetailsManager",
                "JpaUserDetailsManager",
                "(only 2 exist)"
            ],
            correct: 2,
            explanation: "Chỉ có 2 built-in: InMemory và Jdbc. JpaUserDetailsManager không tồn tại."
        },
        {
            type: "mcq",
            question: "Which is the recommended password encoder for production?",
            options: [
                "MD5PasswordEncoder",
                "BCryptPasswordEncoder",
                "SHA256PasswordEncoder",
                "PlainTextPasswordEncoder"
            ],
            correct: 1,
            explanation: "BCryptPasswordEncoder = recommended (one-way hash with salt)."
        },
        {
            type: "mcq",
            question: "Which RequestMatcher wildcard matches ZERO OR MORE 'directories' in path?",
            options: ["?", "*", "**", "+"],
            correct: 2,
            explanation: "** matches 0+ directories. * matches 0+ chars (no slash). ? matches 1 char."
        },
        {
            type: "mcq",
            question: "When configuring authorizeHttpRequests, the correct rule order is:",
            options: [
                "General rules first, then specific",
                "Specific rules first, then general",
                "Order doesn't matter",
                "Only one rule allowed"
            ],
            correct: 1,
            explanation: "Specific trước, general sau — nếu không, anyRequest() bắt hết, các rule khác bị bỏ qua."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "The selection expression in Thymeleaf uses syntax *{...}. Variable expression uses _____.",
            answers: ["${...}", "${}"],
            explanation: "${...} cho variable expression (Spring EL)."
        },
        {
            type: "fill",
            question: "HTTP status code for 'Unsupported Media Type' is _____.",
            answers: ["415"],
            explanation: "415 = Unsupported Media Type — gặp khi @RequestBody không khớp Content-Type."
        },
        {
            type: "fill",
            question: "Spring Security configuration class needs annotations @Configuration and @_____.",
            answers: ["EnableWebSecurity"],
            explanation: "@EnableWebSecurity bắt buộc để enable Spring Security."
        },
        {
            type: "fill",
            question: "The InMemory password prefix to skip encoding is _____.",
            answers: ["{noop}"],
            explanation: "{noop} = no operation, dùng cho test, KHÔNG dùng prod."
        },
    ]
},

// ============================================================
// LECTURE 7 — JPA Queries & Criteria API
// ============================================================
"lec7": {
    title: "Lecture 7 — JPA Queries & Criteria API",
    topics: "Data Dictionary, Prototyping, Derived Queries, Criteria API",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "Which derived query method searches for a name CONTAINING a keyword?",
            options: [
                "findByNameStartingWith",
                "findByNameEndingWith",
                "findByNameContaining",
                "findByNameLike"
            ],
            correct: 2,
            explanation: "Containing wraps parameter as %X%. StartingWith = X%. EndingWith = %X."
        },
        {
            type: "mcq",
            question: "How many components does the Criteria API have?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 components: CriteriaBuilder, CriteriaQuery, Root."
        },
        {
            type: "mcq",
            question: "In Criteria API, which clause does Root represent?",
            options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
            correct: 1,
            explanation: "Root represents the entity in the FROM clause."
        },
        {
            type: "mcq",
            question: "What does findByNameContaining('abc') generate as SQL parameter?",
            options: ["abc", "%abc", "abc%", "%abc%"],
            correct: 3,
            explanation: "Containing tự bọc %X% cả 2 phía."
        },
        {
            type: "mcq",
            question: "Which fidelity level is the LOWEST in prototyping?",
            options: ["Mockup", "Wireframe", "Prototype", "Interactive Prototype"],
            correct: 1,
            explanation: "Wireframe = rough sketch, lowest fidelity. Mockup = medium, Prototype = interactive."
        },
        {
            type: "mcq",
            question: "Which method generates 'WHERE UPPER(field) = UPPER(?1)'?",
            options: [
                "findByNameLike",
                "findByNameContaining",
                "findByNameIgnoreCase",
                "findByNameDistinct"
            ],
            correct: 2,
            explanation: "IgnoreCase generate UPPER(field) = UPPER(?) cho case-insensitive search."
        },
        {
            type: "mcq",
            question: "In Criteria API, what is a Predicate?",
            options: [
                "A query builder",
                "A condition or filter",
                "A SQL keyword",
                "An entity reference"
            ],
            correct: 1,
            explanation: "Predicate represents a condition/filter applied to query."
        },
        {
            type: "mcq",
            question: "Which is NOT a built-in JpaRepository method?",
            options: ["findById", "findAll", "save", "execute"],
            correct: 3,
            explanation: "Built-in: findAll, findById, save, delete, etc. 'execute' không phải."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "A document that describes data elements, types, validation, and examples is called a Data _____.",
            answers: ["Dictionary", "dictionary"],
            explanation: "Data Dictionary — bổ sung cho ER diagram."
        },
        {
            type: "fill",
            question: "To sort ascending in Criteria API, use cb._____(root.get('field')).",
            answers: ["asc"],
            explanation: "cb.asc() cho ASC, cb.desc() cho DESC."
        },
        {
            type: "fill",
            question: "To execute a Criteria query and get list of results, call entityManager.createQuery(cq)._____().",
            answers: ["getResultList"],
            explanation: "getResultList() returns List<T>."
        },
        {
            type: "fill",
            question: "The famous quote about prototyping is by Kent _____: 'Users don't know what they want until you show it to them.'",
            answers: ["Beck"],
            explanation: "Kent Beck — cũng là cha đẻ của XP."
        },
    ]
},

// ============================================================
// LECTURE 8 — Validation, Auth, Design, Open Source
// ============================================================
"lec8": {
    title: "Lecture 8 — Validation, JPA Auth, OO Design, Open Source",
    topics: "Hibernate Validation, UserDetails, Design process, License models",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "Which is NOT one of the 4 common Hibernate Validation annotations?",
            options: ["@NotNull", "@Size", "@Pattern", "@Required"],
            correct: 3,
            explanation: "4 common: @NotNull, @Size, @Min/@Max, @Pattern. @Required không có."
        },
        {
            type: "mcq",
            question: "How many methods are in the UserDetails interface?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "7 methods: getAuthorities, getPassword, getUsername, isAccountNonExpired, isAccountNonLocked, isCredentialsNonExpired, isEnabled."
        },
        {
            type: "mcq",
            question: "Which approach is RECOMMENDED for implementing UserDetails?",
            options: [
                "User entity implements UserDetails",
                "Create separate MyUserDetails class wrapping User",
                "Extend JpaRepository directly",
                "Use raw SQL"
            ],
            correct: 1,
            explanation: "MyUserDetails class (composition) recommended — separation of concerns."
        },
        {
            type: "mcq",
            question: "Why use a UserTemplate class instead of validating User entity directly?",
            options: [
                "User entity is too large",
                "Validation needs RAW password before encoding",
                "Spring requires it",
                "It's faster"
            ],
            correct: 1,
            explanation: "Password trên User entity đã encoded → cần validate raw password ở UserTemplate trước."
        },
        {
            type: "mcq",
            question: "How many license models for open source?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 models: GPL (reciprocal), LGPL (variant), BSD (non-reciprocal)."
        },
        {
            type: "mcq",
            question: "Which license REQUIRES derivative works to also be open source?",
            options: ["GPL", "BSD", "MIT", "Apache"],
            correct: 0,
            explanation: "GPL = reciprocal. BSD = non-reciprocal (proprietary OK)."
        },
        {
            type: "mcq",
            question: "Which is NOT one of the 5 OO Design stages?",
            options: [
                "Define context and modes of use",
                "Design the system architecture",
                "Identify principal system objects",
                "Write user manual"
            ],
            correct: 3,
            explanation: "5 stages: Context → Architecture → Objects → Models → Interfaces. User manual không phải design stage."
        },
        {
            type: "mcq",
            question: "Which is NOT a 'best-known' open source product mentioned in slide?",
            options: ["Linux", "Java", "Apache", "Windows"],
            correct: 3,
            explanation: "4 best-known: Linux, Java, Apache, MySQL."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "The annotation that triggers Bean Validation in Spring is @_____.",
            answers: ["Valid"],
            explanation: "@Valid triggers validation; BindingResult lưu errors."
        },
        {
            type: "fill",
            question: "Validation errors are stored in a _____ object that follows the @Valid parameter.",
            answers: ["BindingResult"],
            explanation: "BindingResult phải đứng NGAY SAU @Valid parameter."
        },
        {
            type: "fill",
            question: "The host computer is the _____ platform; the target is the execution platform.",
            answers: ["development"],
            explanation: "Most software developed on host (dev), runs on target (execution)."
        },
        {
            type: "fill",
            question: "GPL stands for GNU General Public _____.",
            answers: ["License"],
            explanation: "GPL = GNU General Public License — reciprocal."
        },
    ]
},

// ============================================================
// LECTURE 9-11 — Design Patterns
// ============================================================
"lec9-11": {
    title: "Lectures 9-11 — Design Patterns",
    topics: "23 GoF patterns: Creational + Structural + Behavioral",
    questions: [
        // ----- MCQ -----
        {
            type: "mcq",
            question: "How many categories of design patterns are there?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 categories: Creational, Structural, Behavioral."
        },
        {
            type: "mcq",
            question: "Which pattern ensures only one instance of a class exists?",
            options: ["Factory", "Singleton", "Builder", "Prototype"],
            correct: 1,
            explanation: "Singleton: one instance, global access point."
        },
        {
            type: "mcq",
            question: "How many Singleton instantiation forms?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "2 forms: Early (load time) and Lazy (when required)."
        },
        {
            type: "mcq",
            question: "Which pattern is used in Spring Security HttpSecurity configuration?",
            options: ["Singleton", "Factory", "Builder", "Adapter"],
            correct: 2,
            explanation: "Builder pattern: chained method calls + .build() at end."
        },
        {
            type: "mcq",
            question: "The Adapter pattern is also known as:",
            options: ["Bridge", "Facade", "Wrapper", "Proxy"],
            correct: 2,
            explanation: "Adapter (a.k.a. Wrapper): converts interface."
        },
        {
            type: "mcq",
            question: "Which structural pattern uses COMPOSITION instead of INHERITANCE to add functionality?",
            options: ["Adapter", "Decorator", "Facade", "Composite"],
            correct: 1,
            explanation: "Decorator: 'uses composition instead of inheritance to extend functionality at runtime'."
        },
        {
            type: "mcq",
            question: "How many Proxy usage scenarios?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "4: Virtual, Protective, Remote, Smart."
        },
        {
            type: "mcq",
            question: "The Bridge pattern decouples ___ from ___ so they can vary independently.",
            options: [
                "Class from object",
                "Interface from implementation",
                "Functional abstraction from implementation",
                "Frontend from backend"
            ],
            correct: 2,
            explanation: "Bridge: decouple functional abstraction from implementation."
        },
        {
            type: "mcq",
            question: "How many components does the Memento pattern have?",
            options: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 components: Originator, Memento, Caretaker."
        },
        {
            type: "mcq",
            question: "Which pattern is used in Spring Security's filter chain?",
            options: ["Strategy", "Decorator", "Chain of Responsibility", "Observer"],
            correct: 2,
            explanation: "Chain of Responsibility: each filter has chance to handle request."
        },
        {
            type: "mcq",
            question: "Which pattern lets behavior change based on object's state?",
            options: ["Strategy", "State", "Observer", "Command"],
            correct: 1,
            explanation: "State: behavior changes based on state. Strategy: client chooses algorithm."
        },
        {
            type: "mcq",
            question: "The Command pattern has how many roles?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "4 roles: Command, Receiver, Invoker, Client."
        },
        {
            type: "mcq",
            question: "Which pattern uses INHERITANCE (subclasses override steps)?",
            options: ["Strategy", "Template Method", "Decorator", "Bridge"],
            correct: 1,
            explanation: "Template Method: abstract class với template method, subclass override các step (KHÔNG override template)."
        },
        {
            type: "mcq",
            question: "Which is NOT a creational pattern?",
            options: ["Singleton", "Factory", "Adapter", "Builder"],
            correct: 2,
            explanation: "Adapter là STRUCTURAL pattern. 5 Creational: Singleton, Factory, Abstract Factory, Builder, Prototype."
        },
        {
            type: "mcq",
            question: "Mediator pattern is commonly used in:",
            options: [
                "Sorting algorithms",
                "Chat applications",
                "Database transactions",
                "File compression"
            ],
            correct: 1,
            explanation: "Mediator commonly used in message-based systems like chat (slide cũng nhắc tới ATC, taxi dispatch)."
        },
        // ----- Fill-in-blank -----
        {
            type: "fill",
            question: "There are 5 Creational patterns, 7 Structural patterns, and ___ Behavioral patterns in slides Lec 9-11.",
            answers: ["9"],
            explanation: "5 + 7 + 9 = 21 patterns trong slide HANU."
        },
        {
            type: "fill",
            question: "The pattern that constructs a complex object STEP-BY-STEP is the _____ pattern.",
            answers: ["Builder", "builder"],
            explanation: "Builder: step-by-step approach for complex objects."
        },
        {
            type: "fill",
            question: "Make CLONES of an existing object instead of creating new — this is the _____ pattern.",
            answers: ["Prototype", "prototype"],
            explanation: "Prototype pattern: clone existing object."
        },
        {
            type: "fill",
            question: "The 3 Memento components are: Originator, Memento, and _____.",
            answers: ["Caretaker", "caretaker"],
            explanation: "Caretaker triggers save & restore operations."
        },
        {
            type: "fill",
            question: "Define a family of algorithms, put each in a separate class, and make them interchangeable — this is the _____ pattern.",
            answers: ["Strategy", "strategy"],
            explanation: "Strategy pattern definition."
        },
    ]
},

}; // End QUIZ_DATA
