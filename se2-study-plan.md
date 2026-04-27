# 🎯 SE2 — TỔNG INDEX & LỘ TRÌNH ÔN TẬP — HANU

## 📌 Context

Kế hoạch ôn tập môn **SE2 — Software Engineering 2** (HANU/FIT). Hình thức thi: **giấy, MCQ + fill‑in‑blank** → cần học **wording chính xác**, **đếm số chuẩn**, và **phân biệt cặp khái niệm dễ nhầm**.

❗ **Không có đề thi gốc rò rỉ trên mạng** → chiến lược: **ôn chắc 100% nội dung 11 lectures** (giảng viên thường ra đề bám sát slide).

---

## 📁 TÀI LIỆU CHI TIẾT THEO LECTURE

> Mỗi file được viết theo format: **Definition (EN, exact wording)** + **Giải thích tiếng Việt** + **Ví dụ/Use case** + **Tại sao quan trọng cho thi (fill‑in‑blank target + MCQ trap)**.

| # | Lecture | File | Nội dung chính |
|---|---|---|---|
| **1** | Software Process & Agile | [lec1-process-agile.md](lec1-process-agile.md) | 4 process activities, 3 process models, 5 Agile principles, 4 Manifesto values, XP, TDD, pair programming |
| **2** | Reuse, Frameworks, Spring Boot | [lec2-reuse-spring-boot.md](lec2-reuse-spring-boot.md) | Maven, Spring Boot, Thymeleaf, JPA, ORM, Software Reuse (4 levels, 6 benefits, 5 problems), WAF, IoC |
| **3** | Architectural Design & Spring Controllers | [lec3-architecture-controllers.md](lec3-architecture-controllers.md) | 5 architectural patterns (MVC/Layered/Repository/Client‑Server/Pipe & Filter), Spring MVC 8‑step workflow, @Controller, @RequestMapping |
| **4** | Use Case, ER Modeling, Hibernate | [lec4-usecase-er-hibernate.md](lec4-usecase-er-hibernate.md) | Use case `<<include>>`/`<<extend>>`, Activity diagrams, ER (cardinality, supertypes), Hibernate annotations + relationships |
| **5** | Project Management | [lec5-project-management.md](lec5-project-management.md) | 4 success criteria, 3 software distinctions, 5 PM activities, Risk mgmt (4 stages, 3 strategies), People mgmt, Group org |
| **6** | Thymeleaf + Spring Security 1 | [lec6-thymeleaf-security.md](lec6-thymeleaf-security.md) | 5 Thymeleaf expression types, fragments, Spring Security basics, CSRF, UserDetailsManager (InMemory/Jdbc), BCrypt |
| **7** | Modeling Review, JPA Queries, Criteria API | [lec7-modeling-jpa-criteria.md](lec7-modeling-jpa-criteria.md) | Data Dictionary, UML class review, prototyping (4 fidelity levels), JPA derived queries, Criteria API (3 components) |
| **8** | Validation, Spring Security 2, Design & Implementation, Open Source | [lec8-validation-design.md](lec8-validation-design.md) | Hibernate Validation (4 annotations), JPA‑based auth (UserDetails 7 methods, MyUserDetails), 5 OO Design stages, 3 license models (GPL/LGPL/BSD) |
| **9‑11** | Design Patterns (Part 1, 2, 3) | [design-patterns-deep-dive.md](design-patterns-deep-dive.md) | 21 patterns chi tiết: 5 Creational + 7 Structural + 9 Behavioral. Có code Java, comparison tables, 20 MCQ deep |

---

## ⏱️ LỘ TRÌNH ÔN TẬP

> Tổng quỹ thời gian: **6–8 giờ học chủ động**, chia làm 4 block.

| Block | Thời lượng | Files | Mục tiêu |
|---|---|---|---|
| **B1 — Quy trình & PM** | 90' | [lec1](lec1-process-agile.md) + [lec5](lec5-project-management.md) | Thuộc 4 process activities, 5 Agile principles, 4 Manifesto values, 4 risk mgmt stages, 3 risk strategies |
| **B2 — Spring & Web** | 120' | [lec2](lec2-reuse-spring-boot.md) + [lec3](lec3-architecture-controllers.md) + [lec6](lec6-thymeleaf-security.md) + [lec8](lec8-validation-design.md) (phần Security/Validation) | Thuộc 5 architectural patterns, Spring MVC 8‑step, các annotation @Controller/@Valid, 5 Thymeleaf expression types |
| **B3 — Modeling & DB** | 90' | [lec4](lec4-usecase-er-hibernate.md) + [lec7](lec7-modeling-jpa-criteria.md) + [lec8](lec8-validation-design.md) (phần Design) | Thuộc `<<include>>`/`<<extend>>`, cardinality, 4 GenerationType, derived query keywords, 3 Criteria API components |
| **B4 — Design Patterns** | 120' | [lec9-11 deep dive](design-patterns-deep-dive.md) | Thuộc 3 nhóm pattern, định nghĩa từng pattern, phân biệt Factory/Abstract Factory, Strategy/State, Decorator/Proxy |
| **Wrap‑up** | 30' | Bảng so sánh + số đếm bên dưới | Tự test 25 sample questions |

---

# 📋 BẢNG SO SÁNH CẶP DỄ NHẦM (TỔNG HỢP)

| Cặp khái niệm | Khác biệt cốt lõi |
|---|---|
| Plan‑driven vs Agile | Plan‑driven: plan trước; Agile: interleave & flexible |
| Incremental vs Iterative | Incremental = thêm features; Iterative = refine |
| `<<include>>` vs `<<extend>>` | include = bắt buộc dùng chung; extend = tùy chọn thêm |
| Total vs Partial specialization | Total (==) phải thuộc subtype; Partial có thể không |
| Disjoint (d) vs Overlap (o) | d = mutually exclusive; o = đa subtype |
| Identifier vs Candidate Key | Identifier = candidate key được chọn |
| Repository (architectural) vs Repository (Spring Data) | Pattern khác interface JpaRepository |
| Spring vs Spring Boot | Spring = framework; Boot = auto‑config layer |
| JPA vs Hibernate | JPA = interfaces; Hibernate = implementation |
| `@ManyToOne` vs `@OneToMany` side | Many‑side = owning; One‑side dùng `mappedBy` |
| `@RequestParam` vs `@RequestBody` | Param = query string; Body = request body (JSON) |
| `@ModelAttribute` vs `@RequestBody` | ModelAttribute cho form‑urlencoded; RequestBody fail (415) |
| `${...}` vs `*{...}` | Variable expression vs Selection expression |
| `th:insert` vs `th:replace` | insert giữ host tag; replace thay host tag |
| Avoidance vs Contingency strategy | Avoidance ngăn xảy ra (probability); Contingency xử lý khi đã xảy ra |
| Project / Product / Business risk | Schedule‑resources / Quality‑performance / Organisation |
| GPL vs BSD | GPL reciprocal (must open); BSD non‑reciprocal (proprietary OK) |
| LGPL | Variant of GPL: link without publishing |
| Singleton Early vs Lazy | Early = load time; Lazy = on demand |
| Factory vs Abstract Factory | Factory = 1 object; Abstract Factory = family |
| Adapter vs Bridge | Adapter sửa interface có sẵn; Bridge tách abstraction & implementation từ đầu |
| Decorator vs Proxy | Decorator thêm chức năng; Proxy kiểm soát truy cập |
| Facade vs Adapter | Facade simplify subsystem; Adapter chuyển interface |
| Strategy vs State | Strategy chọn algo; State đổi behavior theo state |
| Strategy vs Template Method | Strategy composition; Template Method inheritance |
| Mediator vs Observer | Mediator centralize; Observer 1‑to‑many notify |
| Command vs Strategy | Command = request; Strategy = algorithm |
| Wireframe vs Mockup vs Prototype | Rough → Medium → Interactive |
| InMemoryUserDetailsManager vs JdbcUserDetailsManager | RAM (test) vs DB (prod) |
| `@Valid` vs `BindingResult` | @Valid trigger validation; BindingResult lưu errors |
| `permitAll()` vs `authenticated()` | permitAll mở; authenticated yêu cầu login |
| Verification vs Validation | "Build product right" vs "Build right product" |
| `@Controller` vs `@RestController` | @Controller return view name; @RestController return JSON/XML |

---

# 🔢 BẢNG SỐ ĐẾM CẦN NHỚ (CHỐNG CÂU "CÓ BAO NHIÊU...")

## Lecture 1 — Process & Agile

| Topic | Số đếm |
|---|---|
| Basic process activities | **4** (Specification, Design&Impl, Validation, Evolution) |
| Waterfall phases | **5** (Req → Design → Impl/Unit → Integration/System → Operation/Maintenance) |
| Process models | **3** (Waterfall, Incremental, Reuse‑oriented) |
| Reuse‑oriented stages | **5** |
| V&V testing stages | **3** (Component, System, Customer) |
| Agile principles | **5** |
| Agile manifesto values | **4** |
| XP practices (a) | **5** (Incremental planning, Small releases, Simple design, Test‑first, Refactoring) |
| XP practices (b) | **5** (Pair, Collective ownership, CI, Sustainable pace, On‑site customer) |
| Influential XP practices | **4** (User stories, Refactoring, Test‑first, Pair) |
| XP testing features | **4** |
| Test‑first problems | **3** |

## Lecture 2 — Reuse & Spring Boot

| Topic | Số đếm |
|---|---|
| Maven directories | **5** (pom.xml, src/main/java, src/main/resources, src/test/java, src/test/resources) |
| Reuse types/levels (Lec 2) | **4** (System, Application, Component, Object/function) |
| Software reuse benefits | **6** |
| Reuse problems | **5** |
| Reuse planning factors | **6** |
| WAF features | **5** |
| Framework classes | **3** (System infra, Middleware, Enterprise) |

## Lecture 3 — Architecture

| Topic | Số đếm |
|---|---|
| Architectural representation advantages | **3** |
| Architectural patterns | **5** (MVC, Layered, Repository, Client‑Server, Pipe & Filter) |
| MVC components | **3** (Model, View, Controller) |
| Layered components | **3** (Application‑specific, Application, Infrastructure) |
| Multi‑tier client‑server | **3** (Web, App, DB server) |
| Spring MVC workflow steps | **8** |
| Controller types | **2** (Interface‑based, Annotation‑based) |
| Handler mapping implementations | **4** |
| HTTP methods | **7** (GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE) |
| @RequestMapping attributes | **5** (name, value/path, method, params, headers) |
| Argument annotations | **4** (@RequestParam, @RequestHeader, @RequestBody, @CookieValue) |
| Argument types | **3** (Model, HttpServletRequest, MultipartRequest) |

## Lecture 4 — Use Case & ER

| Topic | Số đếm |
|---|---|
| Use case concepts | **4** (Use case, Actor, Association, System boundary) |
| Use case relationships | **2** (`<<include>>`, `<<extend>>`) |
| Written use case sections | **3** (Normal, Alternative, Exceptions) |
| Relationship degrees | **3** (Unary, Binary, Ternary) |
| Cardinality components | **2** (Min, Max) |
| Cardinality combinations | **3** (1:1, 1:N, M:N) |
| Specialization constraints | **2x2** (Total/Partial × Disjoint/Overlap) |
| GenerationType strategies | **4** (IDENTITY, AUTO, TABLE, SEQUENCE) |
| @JoinTable parts | **3** (name, joinColumns, inverseJoinColumns) |

## Lecture 5 — Project Management

| Topic | Số đếm |
|---|---|
| Success criteria | **4** |
| Software distinctions | **3** (intangible, one‑off, variable) |
| Influencing factors | **6** |
| PM activities | **5** (Planning, Risk, People, Reporting, Proposal) |
| Risk types | **7** |
| Risk effect categories | **3** (Project, Product, Business) |
| Risk mgmt stages | **4** (Identification, Analysis, Planning, Monitoring) |
| Probability levels | **5** (Very low, Low, Moderate, High, Very high) |
| Risk consequences | **4** (Catastrophic, Serious, Tolerable, Insignificant) |
| Risk strategy types | **3** (Avoidance, Minimization, Contingency) |
| People mgmt factors | **4** (Consistency, Respect, Inclusion, Honesty) |
| Need types (Maslow simplified) | **3** (Basic, Personal, Social) |
| Personality types | **3** (Task, Self, Interaction) |
| Group org types | **3** (Informal, Hierarchical, Agile) |
| Communication factors | **4** (Size, Structure, Composition, Environment) |

## Lecture 6 — Thymeleaf & Security

| Topic | Số đếm |
|---|---|
| Thymeleaf expression types | **5** (`${...}`, `*{...}`, `#{...}`, `@{...}`, `~{...}`) |
| Thymeleaf URL types | **5** (Absolute, Page‑rel, Context‑rel, Server‑rel, Protocol‑rel) |
| Spring Security config annotations | **2** (@Configuration, @EnableWebSecurity) |
| RequestMatcher wildcards | **3** (`?`, `*`, `**`) |
| UserDetailsManager built‑in | **2** (InMemory, Jdbc) |
| Login customizer methods | **5** |

## Lecture 7 — JPA Queries

| Topic | Số đếm |
|---|---|
| Data dictionary contents | **6** |
| Data dictionary advantages | **3** |
| Prototype fidelity levels | **4** (Wireframe, Mockup, Prototype, Interactive Prototype) |
| Prototyping tool features | **5** |
| Built‑in JpaRepository methods | **9** (findAll, findById, findAllById, save, saveAll, delete, deleteAll, deleteById, deleteAllById) |
| Criteria API components | **3** (CriteriaBuilder, CriteriaQuery, Root) |

## Lecture 8 — Validation, Design, OS

| Topic | Số đếm |
|---|---|
| Validation common annotations | **4** (@NotNull, @Size, @Min/@Max, @Pattern) |
| UserDetails methods | **7** |
| Implementation approaches | **2** (User implements / MyUserDetails) |
| OO Design stages | **5** |
| Object identification approaches | **4** (Grammatical, Tangible, Behavioural, Scenario) |
| Design model types | **2** (Structural, Dynamic) |
| Design model examples | **5** |
| Implementation issues | **3** (Reuse, Configuration mgmt, Host‑target) |
| Reuse levels (Lec 8) | **4** (Abstraction, Object, Component, System) |
| Reuse costs | **4** (Searching, Acquisition, Adaptation, Integration) |
| Configuration mgmt activities | **3** |
| Component deployment factors | **3** |
| Best‑known open source | **4** (Linux, Java, Apache, MySQL) |
| Open source license models | **3** (GPL, LGPL, BSD) |
| License mgmt activities | **6** |

## Lectures 9‑11 — Design Patterns

| Topic | Số đếm |
|---|---|
| Pattern categories | **3** (Creational, Structural, Behavioral) |
| Creational patterns | **5** (Singleton, Factory, Abstract Factory, Builder, Prototype) |
| Structural patterns | **7** (Adapter, Composite, Decorator, Proxy, Bridge, Facade, Flyweight) |
| Behavioral patterns | **9** (Iterator, Observer, Memento, State, Chain, Command, Mediator, Strategy, Template) |
| Total GoF patterns | **23** (slide HANU dạy 21) |
| Singleton forms | **2** (Early, Lazy) |
| Proxy scenarios | **4** (Virtual, Protective, Remote, Smart) |
| Bridge benefits | **4** |
| Memento components | **3** (Originator, Memento, Caretaker) |
| Command roles | **4** (Command, Receiver, Invoker, Client) |
| Chain of Resp handler actions | **4** |

---

# 📝 25 CÂU TỰ KIỂM TRA

> Tự trả lời, sau đó check lại các phần ở trên. Mỗi câu sai → quay lại lecture đó học lại.

1. The Agile Manifesto values ___ over comprehensive documentation. → **working software**
2. Which is NOT one of the 5 Agile principles? a) Customer involvement b) Comprehensive documentation c) Embrace change d) People not process. → **b**
3. In the Waterfall model, which phase comes immediately after "System and software design"? → **Implementation and unit testing**
4. ____ is the architectural pattern where all data is managed in a central repository. → **Repository**
5. The Spring MVC workflow has ___ steps. → **8**
6. `@OneToMany(mappedBy="author")` — the owning side is the entity with annotation ___. → **@ManyToOne**
7. Which is NOT a GenerationType? a) IDENTITY b) AUTO c) RANDOM d) SEQUENCE. → **c**
8. ____ relationship in use case diagram means the source is incomplete without the target. → **`<<include>>`**
9. In ER, "d" inside specialization circle means ___. → **Disjoint** (mutually exclusive)
10. Risk Management has ___ stages: Identification, Analysis, Planning, Monitoring. → **4**
11. The risk that affects schedule or resources is called a ___ risk. → **project**
12. The 3 risk strategy types are: Avoidance, ___, Contingency. → **Minimization**
13. The personality types in Alice's team include task‑oriented, self‑oriented, and ___-oriented. → **interaction**
14. Thymeleaf fragment expression syntax is ___. → **`~{...}`**
15. The expression `*{name}` is a ___ expression. → **Selection**
16. Spring Security CSRF stands for ___. → **Cross‑Site Request Forgery**
17. Which built‑in UserDetailsManager is for testing only? → **InMemoryUserDetailsManager**
18. The recommended password encoder is ___. → **BCryptPasswordEncoder**
19. The ___ annotation triggers Bean Validation in Spring. → **@Valid**
20. The ___ class wraps User entity to implement UserDetails (recommended). → **MyUserDetails**
21. Criteria API has 3 components: CriteriaBuilder, ___, Root. → **CriteriaQuery**
22. `findByNameContaining("Quan")` produces SQL with parameter wrapped as ___. → **`%Quan%`**
23. Which design pattern provides one instance with global access? → **Singleton**
24. ___ pattern decouples abstraction and implementation by using composition instead of inheritance. → **Bridge**
25. The 3 components of Memento pattern are Originator, Memento, and ___. → **Caretaker**

---

# 🎯 CHIẾN LƯỢC LÀM BÀI THI

### Trước giờ thi
- Đọc lướt **bảng cặp dễ nhầm** + **số đếm** trong 30 phút
- Tránh học mới — não cần nghỉ
- Chuẩn bị 2 bút bi đen, máy tính (nếu cho phép), thẻ sinh viên

### Trong giờ thi
1. **Quét nhanh đề** — đánh dấu câu dễ vs khó
2. **Làm câu dễ trước** (fill‑in‑blank định nghĩa thuộc lòng → 30s/câu)
3. **MCQ "NOT/EXCEPT"** đọc kỹ — đáp án thường là cái KHÔNG xuất hiện trong list
4. Câu MCQ **annotation/code** — đọc kỹ scope (class‑level vs method‑level)
5. Câu **so sánh patterns** — vẽ nhanh 1 cặp lên giấy nháp
6. Cuối giờ rà lại + kiểm tra "có bao nhiêu" (4 hay 5?)

### Trap phổ biến
- Đếm sai (4 vs 5 vs 6)
- Đảo vai trò (One side ↔ Many side)
- Định nghĩa gần giống (Strategy ↔ State)
- Thuật ngữ đồng nghĩa (Adapter = Wrapper)
- Pattern category nhầm (Factory thuộc Creational ✅, Adapter thuộc Structural ✅)
- 2 bộ "reuse levels" khác nhau ở Lec 2 (System/App/Component/Object) và Lec 8 (Abstraction/Object/Component/System)

---

# 🗂️ LƯU Ý CUỐI

### Các file lecture gốc đã được phân tích
- `Lecture 1 - Process  Agile - sm.pdf` → [lec1-process-agile.md](lec1-process-agile.md)
- `Lecture 2 - Reuse, Framework, Spring Boot.pdf` → [lec2-reuse-spring-boot.md](lec2-reuse-spring-boot.md)
- `Lecture 3 - Arch Design  Spring Controller.pdf` → [lec3-architecture-controllers.md](lec3-architecture-controllers.md)
- `Lecture 4.pdf` → [lec4-usecase-er-hibernate.md](lec4-usecase-er-hibernate.md)
- `Lecture 5.pdf` → [lec5-project-management.md](lec5-project-management.md)
- `Lecture 6.pdf` → [lec6-thymeleaf-security.md](lec6-thymeleaf-security.md)
- `Lecture 7.pdf` → [lec7-modeling-jpa-criteria.md](lec7-modeling-jpa-criteria.md)
- `Lecture 8.pdf` → [lec8-validation-design.md](lec8-validation-design.md)
- `Lecture 9.pdf, 10.pdf, 11.pdf` → [design-patterns-deep-dive.md](design-patterns-deep-dive.md)

### Kiểm chứng việc học (verification)
1. **Test 25 câu sample** — đúng ≥ 22/25 → đã sẵn sàng
2. **Đọc lại 5 architectural patterns** không nhìn slide — viết 1 câu cho mỗi pattern
3. **List 21 design patterns** chia theo 3 nhóm — không nhìn ghi chú
4. **Phục dựng Spring MVC 8‑step workflow** từ trí nhớ
5. **Vẽ ER cho Student/Course/Enrollment** với cardinality + associative entity

### Yêu cầu bổ sung bạn có thể nhờ tôi
- Bài test mô phỏng 50 MCQ + 20 fill‑in‑blank toàn bộ 11 lectures (có giải)
- Cheat sheet 1‑2 trang in ra mang vào thi
- Flashcards Q&A (~150 thẻ)
- Giải thích sâu hơn bất kỳ khái niệm/pattern khó

**Chúc thi tốt! 🍀**
