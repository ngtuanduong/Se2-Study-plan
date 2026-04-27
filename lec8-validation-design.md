# 📘 LECTURE 8 — Hibernate Validation, Spring Security 2 (JPA Auth), Design & Implementation, Open Source (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

# 🟦 PART 1 — HIBERNATE VALIDATION

## 8.1 — HIBERNATE VALIDATION — DEFINITION

### Definition
> *"Hibernate Validation is an implementation of the Bean Validation specification."*

### Versions of Bean Validation
- **JSR 303** (Bean Validation 1.0)
- **JSR 349** (Bean Validation 1.1)
- **JSR 380** (Bean Validation 2.0)
- **Jakarta Bean Validation 2.0**
- **Jakarta Bean Validation 3.0**
- **Jakarta Bean Validation 3.1**

### Purpose
> *"Used to define validation constraints on Entity objects and handle validation errors."*

### Adding Dependency
```xml
<dependency>
    <groupId>org.hibernate.validator</groupId>
    <artifactId>hibernate-validator</artifactId>
</dependency>
```

### Giải thích (VN)
**Bean Validation** = **chuẩn (specification)** Java cho validation, không phải implementation.
**Hibernate Validator** = **implementation chính thức** của Bean Validation spec.

Tương tự cách JPA / Hibernate hoạt động: spec ↔ implementation.

**Different versions** chỉ khác về version (core vẫn giống nhau).

### Tại sao quan trọng cho thi
- **MCQ**: Hibernate Validation = **implementation** của Bean Validation specification
- **MCQ list**: JSR 303 / 349 / 380, Jakarta 2.0/3.0/3.1
- **Fill‑in‑blank**: Purpose = "*define validation constraints on Entity objects and handle validation errors*"

---

## 8.2 — VALIDATION CONSTRAINTS — 4 COMMON ANNOTATIONS

### Definition
> *"Constraints are defined using annotations on your Java bean (Entity/DTO) attributes."*

### 4 Common Annotations

| Annotation | Purpose |
|---|---|
| **`@NotNull`** | Field is **not null** |
| **`@Size(min=X, max=Y)`** | Field's size **within range** (String length, Collection size) |
| **`@Min(X)` / `@Max(Y)`** | Numeric value **within range** |
| **`@Pattern(regexp="...")`** | Field matches **regex** |

### Code Example
```java
import jakarta.validation.constraints.*;

public class User {
    @NotNull
    private String name;
    
    @Size(min = 2, max = 14)
    private String username;
    
    @Min(18)
    @Max(100)
    private int age;
    
    @Pattern(regexp = ".+@.+\\..+")
    private String email;
    
    // Getters and setters
}
```

### Giải thích (VN)
- **`@NotNull`**: chống null (nhưng cho phép empty string `""`)
- **`@NotEmpty`** (không trong slide nhưng phổ biến): chống null + empty
- **`@Size`**: dùng cho String, Collection, Map, Array
- **`@Min/@Max`**: chỉ cho số (int, long, double, BigDecimal)
- **`@Pattern`**: regex — phổ biến nhất cho email, phone

### Use case
- Form đăng ký user → cần validate username 6+ char, password match regex, email đúng format

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 common annotations**
- **MCQ phân biệt**: `@Size` cho length, `@Min/@Max` cho numeric range
- **MCQ**: `@Pattern` dùng **regex**

---

## 8.3 — ADDING VALIDATION ERROR MESSAGES

### Code
```java
public class User {
    @NotNull(message = "Name cannot be null")
    private String name;
    
    @Size(min = 2, max = 15, message = "Username must be between 2 and 15 chars")
    private String username;
    
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 100, message = "Age must be at most 100")
    private int age;
    
    @Pattern(regexp = ".+@.+\\..+", message = "Invalid email address")
    private String email;
}
```

### Giải thích (VN)
Mỗi annotation có thuộc tính **`message`** — text hiển thị khi validation fail. Nếu không set, Hibernate dùng default message.

**Best practice**: dùng message keys + i18n thay vì hardcode tiếng Anh:
```java
@NotNull(message = "{user.name.notNull}")
```

### Tại sao quan trọng cho thi
- **MCQ**: Mỗi annotation có thuộc tính `message`
- **MCQ syntax**: `@Min(value = 18, message = "...")`

---

## 8.4 — VALIDATING WITH `@Valid` + BindingResult

### `@Valid` Annotation
> *"The `@Valid` annotation is a convenient way to validate a Java bean whose attributes are annotated with validation constraints."*

### BindingResult
> *"Validation results are stored in the BindingResult object."*

### Code Example
```java
@RequestMapping(value = "/save")
public String saveUpdate(@Valid Employee employee, BindingResult result) {
    if (result.hasErrors()) {
        return "employeeUpdate";  // back to form with errors
    }
    employeeRepository.save(employee);
    return "redirect:/update/" + employee.getId();
}
```

### Giải thích (VN)
**Quan trọng**: `BindingResult` **PHẢI** đứng **NGAY SAU** `@Valid` parameter — Spring quét theo position.

**Workflow**:
1. User submit form
2. Spring binds form data → Employee object
3. `@Valid` triggers validation
4. Errors lưu vào `BindingResult` (không throw exception!)
5. Bạn check `result.hasErrors()` để xử lý

### Tại sao quan trọng cho thi
- **MCQ**: `@Valid` triggers validation; `BindingResult` lưu errors
- **MCQ trap**: BindingResult phải **ngay sau** @Valid parameter
- **MCQ**: Errors **không throw exception** → check `result.hasErrors()` thủ công

---

## 8.5 — DISPLAYING ERRORS IN THYMELEAF

### Step 1: Validate in Controller
```java
@PostMapping("/add-user")
public String addUser(@Valid User user, BindingResult result, Model model) {
    if (result.hasErrors()) {
        return "addUserForm";  // re‑render form
    }
    model.addAttribute("user", user);
    return "addUserSuccess";
}
```

### Step 2: Display in Thymeleaf
```html
<form action="#" th:action="@{/add-user}" th:object="${user}" method="post">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" th:field="*{name}" />
        <div th:if="${#fields.hasErrors('name')}" th:errors="*{name}">
            Name Error
        </div>
    </div>
    <!-- ... -->
</form>
```

### Key Thymeleaf Constructs
- **`th:object="${user}"`** — bind form to object
- **`th:field="*{name}"`** — bind input to field (selection expression)
- **`#fields.hasErrors('name')`** — check if field has errors
- **`th:errors="*{name}"`** — display error message

### Tại sao quan trọng cho thi
- **MCQ**: `#fields.hasErrors('field')` để check
- **MCQ**: `th:errors="*{field}"` để display

---

# 🟦 PART 2 — SPRING SECURITY: JPA‑BASED AUTHENTICATION

## 8.6 — JPA‑BASED AUTH OVERVIEW

### Configuration Approach
> *"Instead of providing a UserDetailsManager, we can supply a UserDetailsService as a source of users."*

### Security Configuration Example
```java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .userDetailsService(jpaUserDetailsService)
        .authorizeHttpRequests(req -> req
            .requestMatchers("/register").permitAll()
            .anyRequest().authenticated()
        )
        .formLogin(Customizer.withDefaults())
        .build();
}
```

### Giải thích (VN)
- **Lec 6**: dùng `InMemoryUserDetailsManager` hoặc `JdbcUserDetailsManager`
- **Lec 8**: dùng **`UserDetailsService`** custom — load user từ DB qua JPA → flexible hơn

### Tại sao quan trọng cho thi
- **MCQ**: JPA‑based dùng **UserDetailsService** thay UserDetailsManager
- **MCQ**: `/register` cần `permitAll()` (cho user chưa login đăng ký)

---

## 8.7 — `UserDetails` INTERFACE (7 METHODS)

### Definition
> *"Spring Security uses the UserDetails interface for performing authentication."*

### Interface Methods
```java
public interface UserDetails extends Serializable {
    Collection<? extends GrantedAuthority> getAuthorities();
    String getPassword();
    String getUsername();
    boolean isAccountNonExpired();
    boolean isAccountNonLocked();
    boolean isCredentialsNonExpired();
    boolean isEnabled();
}
```

### Giải thích (VN)
**7 methods** Spring Security cần để xác thực:
1. `getAuthorities()` — list of roles/permissions
2. `getPassword()` — password (hashed)
3. `getUsername()` — username
4. `isAccountNonExpired()` — account còn valid không
5. `isAccountNonLocked()` — account có bị lock không
6. `isCredentialsNonExpired()` — password còn valid không
7. `isEnabled()` — account active không

→ 4 method `is*()` đa số trả về `true` (trừ khi cần feature lock account, expire password).

### Tại sao quan trọng cho thi
- **MCQ đếm**: **7 methods** trong UserDetails
- **MCQ**: 3 fields chính = username, password, authorities

---

## 8.8 — USER ENTITY (Required & Optional Fields)

### Required Fields
- **username**
- **password**
- **roles (authorities)**

### Optional Fields
- phone number
- address
- avatar
- etc.

### Relationships
- Có thể có relationship với entities khác
- Example: one‑to‑many với Post entity

### Code Example
```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    private String roles; // "ADMIN,USER,MOD"
    private String address;
    
    @OneToMany(mappedBy = "author")
    private List<Post> posts;
}
```

### Tại sao quan trọng cho thi
- **MCQ**: Required = username, password, roles
- **MCQ**: roles có thể lưu dạng comma‑separated `"ADMIN,USER,MOD"`

---

## 8.9 — IMPLEMENTING UserDetails — 2 APPROACHES (CỰC QUAN TRỌNG!)

### Approach #1: User Entity implements UserDetails
**NOT recommended** — entity stuff (attributes, constructors, getters, setters) **mixed with** UserDetails methods → **messy code**.

### Approach #2: Create MyUserDetails class to implement UserDetails
**RECOMMENDED**:
- Create `User` attribute in `MyUserDetails`
- Supply `MyUserDetails` objects to Spring Security instead of `User` objects
- **Benefits**:
  - User class **untouched**
  - **Separation of concerns** achieved

### Approach #1 Code (messy)
```java
@Entity
public class User implements UserDetails {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    private String roles;
    private String address;
    
    @OneToMany(mappedBy = "author")
    private List<Post> posts;
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {...}
    
    @Override
    public boolean isAccountNonExpired() { return true; }
    
    @Override
    public boolean isAccountNonLocked() { return true; }
    
    @Override
    public boolean isCredentialsNonExpired() { return true; }
    
    @Override
    public boolean isEnabled() { return true; }
    
    // constructors, getters & setters
}
```

→ Có cả entity stuff lẫn security stuff trong 1 class.

### Approach #2 Code (clean)
```java
public class MyUserDetails implements UserDetails {
    private User user;  // composition
    
    public MyUserDetails(User user) {
        this.user = user;
    }
    
    @Override
    public String getUsername() {
        return user.getUsername();
    }
    
    @Override
    public String getPassword() {
        return user.getPassword();
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // create & return List<GrantedAuthority> from roles
    }
    
    @Override
    public boolean isAccountNonExpired() { return true; }
    
    @Override
    public boolean isAccountNonLocked() { return true; }
    
    @Override
    public boolean isCredentialsNonExpired() { return true; }
    
    @Override
    public boolean isEnabled() { return true; }
}
```

→ User class chỉ là entity; MyUserDetails wrap User.

### Giải thích (VN)
**Separation of Concerns** = mỗi class **một việc duy nhất**. User entity quản lý data; MyUserDetails xử lý security. Không nên trộn 2 thứ.

### Tại sao quan trọng cho thi
- **MCQ trap**: Approach #1 = NOT recommended; **Approach #2 (MyUserDetails) = recommended**
- **MCQ**: Lý do = separation of concerns
- **Fill‑in‑blank**: "*Entity‑related stuffs (attributes, constructors, getters, setters) will be mixed with UserDetails methods*"

---

## 8.10 — UserTemplate CLASS (For Validation)

### The Problem
- User password **will be encoded**
- Validation **only needed on raw password**
- Therefore, should **NOT** put validation annotation on the password field of User class

### The Solution
- Create another class for validating user info (e.g., `UserTemplate`)
- Create constructor in User to accept (valid) UserTemplate and **encode the password**, initialize other fields (such as roles)

### UserTemplate Code Example
```java
public class UserTemplate {
    @Length(min = 6, max = 60)
    private String username;
    
    @Pattern(regexp = "^(?=.*\\d)(?=.*[A-Z]).{6,60}$",
             message = "6 chars min (at least 1 digit & 1 uppercase letter)")
    private String password;
    
    private String address;
    
    // getter & setter methods
}
```

### Giải thích (VN)
**Lý do tách UserTemplate**:
1. User entity lưu **encoded password** (BCrypt) trong DB
2. Validation cần kiểm tra **raw password** (vd: 6+ chars, có số, có hoa)
3. Nếu validate trên User → validate cả encoded password (vô lý)

→ **UserTemplate** = **DTO for input validation**. Khi user submit form → validate UserTemplate. Nếu pass → tạo User với encoded password.

### Workflow
```
User submits form → Bind to UserTemplate → @Valid validates raw password
→ If valid: create User from UserTemplate (encode password) → save User
```

### Tại sao quan trọng cho thi
- **MCQ "Why UserTemplate?"**: validate **raw** password, không validate encoded
- **MCQ**: UserTemplate là **DTO pattern** (Data Transfer Object)

---

## 8.11 — REGISTRATION FLOW

### Show Registration Form
```java
@GetMapping("/register")
public String register(Model model) {
    model.addAttribute("user", new UserTemplate());
    return "register";
}
```

**Key Point**: Use **UserTemplate** instead of User when working with a form.

### Handle Form Submission
```java
@PostMapping("/register")
public String registerHandle(Model model, PasswordEncoder encoder,
        @Valid UserTemplate ut, BindingResult result) {
    if (result.hasErrors()) {
        model.addAttribute("user", ut);
        return "register";
    } else {
        userRepository.save(new User(ut, encoder));
        model.addAttribute("user", new UserTemplate());
        model.addAttribute("success", true);
        return "register";
    }
}
```

### Giải thích (VN)
- GET `/register` → render form với empty `UserTemplate`
- POST `/register` → validate; nếu OK → create User entity + encode password + save
- `new User(ut, encoder)` → constructor User nhận UserTemplate + PasswordEncoder, tự encode password

### Tại sao quan trọng cho thi
- **MCQ**: Form dùng UserTemplate, KHÔNG phải User entity
- **MCQ**: Constructor User encode password trước khi save

---

## 8.12 — UserDetailsService IMPLEMENTATION

### Code
```java
@Service
public class JpaUserDetailsService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepo;
    
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByUsername(username);
        if (user.isPresent()) {
            return new SecurityUser(user.get());  // wrap with MyUserDetails
        } else {
            throw new UsernameNotFoundException("User not found: " + username);
        }
    }
}
```

### Giải thích (VN)
**`UserDetailsService`** có **1 method** duy nhất: `loadUserByUsername(String)`.

Spring Security khi authenticate:
1. Lấy username user nhập
2. Gọi `loadUserByUsername(username)` → trả về UserDetails
3. So sánh password user nhập với UserDetails.getPassword()

### Tại sao quan trọng cho thi
- **MCQ**: UserDetailsService có 1 method `loadUserByUsername`
- **MCQ**: Trả về `UserDetails` (wrap User entity với MyUserDetails)
- **MCQ**: Throw `UsernameNotFoundException` nếu không tìm thấy

---

## 8.13 — `@Autowired` IS NOT RECOMMENDED!

### Not Recommended
> *"Auto‑wiring uses Java Reflection, which introduces:*
> - *Performance overheads*
> - *Possibly security issues*
> *Dependencies are not exposed explicitly."*

### What's Recommended
**Dependency Injection through constructor parameters**.

### Code Comparison

**❌ Not recommended (field injection)**:
```java
@Service
public class JpaUserDetailsService {
    @Autowired
    private UserRepository userRepo;
}
```

**✅ Recommended (constructor injection)**:
```java
@Service
public class JpaUserDetailsService {
    private final UserRepository userRepo;
    
    public JpaUserDetailsService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }
}
```

### Giải thích (VN)
3 lý do constructor injection tốt hơn:
1. **Performance**: không reflection
2. **Security**: không hidden dependencies
3. **Testability**: dễ test (pass mock vào constructor)
4. **Immutability**: dùng `final` được

### Tại sao quan trọng cho thi
- **MCQ trap**: Slide nói `@Autowired` **NOT recommended** (mặc dù phổ biến trong thực tế)
- **MCQ**: Recommended = **constructor injection**

---

# 🟦 PART 3 — DESIGN & IMPLEMENTATION PROCESS

## 8.14 — DESIGN & IMPLEMENTATION — DEFINITION

### Definition
> *"Software design and implementation is the stage in the software engineering process at which an executable software system is developed."*

### Key Points
- Design and implementation activities are **invariably inter‑leaved**
- Design = creative activity identifying components and relationships, based on customer's requirements
- Implementation = process of realizing the design as a program

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "*the stage in the software engineering process at which an executable software system is developed*"
- **MCQ**: Design + Implementation là **interleaved** (không sequential)

---

## 8.15 — BUILD OR BUY?

### When to Buy COTS
> *"In a wide range of domains, it is now possible to buy commercial off‑the‑shelf systems. These can be adapted and tailored to users' requirements."*

### Example
**Medical records system** used in hospitals — buy COTS thay vì self‑develop.

### Advantages
> *"Can be cheaper and faster than developing in conventional programming language."*

### Design Implication
> *"When developing using COTS, the design process becomes concerned with how to use the configuration features of that system to deliver the system requirements."*

### Giải thích (VN)
**Build vs Buy** trade‑off:
- **Build**: customize tự do, control cao, nhưng tốn thời gian + chi phí
- **Buy** (COTS): nhanh, rẻ hơn, nhưng phải **thỏa hiệp** vs requirements

### Tại sao quan trọng cho thi
- **MCQ**: Khi dùng COTS, design = **how to configure** (không phải build from scratch)

---

## 8.16 — OBJECT‑ORIENTED DESIGN — 5 STAGES (HỌC THUỘC THỨ TỰ!)

### 5 Stages
1. **Define the context and modes of use** of the system
2. **Design the system architecture**
3. **Identify the principal system objects**
4. **Develop design models**
5. **Specify object interfaces**

### Example Used (slide)
**Wilderness weather station** design.

### Giải thích (VN)
1. **Context**: Hệ thống tương tác với gì? (User, external systems, sensors, …)
2. **Architecture**: Vẽ tổng thể hệ thống (components, layers)
3. **Identify objects**: Tìm các class chính
4. **Design models**: Vẽ các diagram (sequence, state, ...)
5. **Specify interfaces**: Định nghĩa interface của mỗi object

### Tại sao quan trọng cho thi
- **MCQ đếm**: **5 stages**
- **MCQ thứ tự**: Context → Architecture → Objects → Models → Interfaces

---

## 8.17 — SYSTEM CONTEXT & INTERACTIONS

### Definition
> *"System context: The relationships between the software being designed and its external environment."*

### Why It Matters
- Essential for deciding **how to provide functionality**
- Essential for deciding **how to structure system to communicate with environment**
- Understanding context lets you **establish boundaries** of system

### Boundary Definition
> *"Setting the system boundaries helps you decide what features are implemented in the system being designed and what features are in other associated systems."*

### Tại sao quan trọng cho thi
- **MCQ**: System context = relationships with **external environment**
- **MCQ**: Boundary helps decide what's IN vs OUT of system

---

## 8.18 — CONTEXT vs INTERACTION MODELS (2 KINDS)

### 2 Types

| Model | Type | Purpose |
|---|---|---|
| **System Context Model** | **Structural** | Other systems in environment of system being developed |
| **Interaction Model** | **Dynamic** | How system **interacts** with its environment as it is used |

### Giải thích (VN)
- **Context Model** = static — vẽ ra hệ thống nào liên quan
- **Interaction Model** = dynamic — vẽ ra timing, sequence của interactions

### Tại sao quan trọng cho thi
- **MCQ**: 2 types — Structural vs Dynamic
- **MCQ**: System Context = structural; Interaction = dynamic

---

## 8.19 — USE CASES (Weather Station Example)

### Use Case Description: Report Weather

| Component | Detail |
|---|---|
| **System** | Weather station |
| **Use case** | Report weather |
| **Actors** | Weather information system, Weather station |
| **Description** | The weather station sends a summary of the weather data... |
| **Stimulus** | The weather information system establishes a satellite communication link with the weather station and requests transmission |
| **Response** | The summarized data is sent to the weather information system |
| **Comments** | Weather stations are usually asked to report once per hour but this frequency may differ from one station to another and may be modified in the future |

### Tại sao quan trọng cho thi
- **MCQ scenario**: Weather station example có thể xuất hiện
- **MCQ**: Use case có sections: System, Use case, Actors, Description, Stimulus, Response, Comments

---

## 8.20 — ARCHITECTURAL DESIGN

### Process
- Identify **major components**
- Identify **interactions**
- Organize using **architectural pattern** (such as layered or client‑server)

### Weather Station Architecture
> *"The weather station is composed of independent subsystems that communicate by broadcasting messages on a common infrastructure."*

### Tại sao quan trọng cho thi
- **MCQ**: Architectural design dùng **architectural patterns** (Lec 3 đã học)

---

## 8.21 — OBJECT CLASS IDENTIFICATION

### Definition & Difficulty
> *"Identifying object classes is often a difficult part of object‑oriented design."*

> *"No magic formula — relies on the skill, experience and domain knowledge of system designers."*

> *"Iterative Process: You are unlikely to get it right first time."*

### 4 Approaches to Identification

| # | Approach | Description |
|---|---|---|
| 1 | **Grammatical** | Based on **natural language description** of the system |
| 2 | **Tangible Things** | Based on **tangible things** in application domain |
| 3 | **Behavioural** | Identify objects based on **what participates in what behaviour** |
| 4 | **Scenario‑Based** | Identify objects, attributes, methods in **each scenario** |

### Giải thích (VN)
1. **Grammatical**: Đọc spec → mỗi noun = candidate object, mỗi verb = candidate method
2. **Tangible**: Tìm vật thể thật trong domain (Book, Customer, Order, …)
3. **Behavioural**: Tìm object qua role hành vi (Authenticator, Validator, Logger)
4. **Scenario**: Đi qua từng use case → identify object xuất hiện

### Weather Station Object Classes (Example)
1. **Ground thermometer, Anemometer, Barometer** — application domain hardware objects
2. **Weather station** — basic interface to environment
3. **Weather data** — encapsulates summarized data

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 approaches**
- **MCQ definitions**: từng approach
- **Fill‑in‑blank**: "*Iterative process — you are unlikely to get it right first time*"

---

## 8.22 — DESIGN MODELS — 2 KINDS

### Definition
> *"Design models show the objects and object classes and relationships between these entities."*

### 2 Kinds

| Kind | Description |
|---|---|
| **Structural Models** | Describe the **static structure** of the system. In terms of object classes and relationships |
| **Dynamic Models** | Describe the **dynamic interactions** between objects |

### 5 Examples of Models
1. **Subsystem models** — show logical groupings of objects into coherent subsystems
2. **Sequence models** — show sequence of object interactions
3. **State machine models** — show how individual objects change state in response to events
4. **Use‑case models** (other examples)
5. **Aggregation models, Generalisation models** (other examples)

### Giải thích (VN)
- **Structural** (static): Class diagram, Component diagram, Package diagram
- **Dynamic** (behavior over time): Sequence, Activity, State machine

### Tại sao quan trọng cho thi
- **MCQ**: 2 kinds — Structural (static) vs Dynamic (interactions)
- **MCQ đếm**: 5 model examples

---

## 8.23 — SUBSYSTEM, SEQUENCE, STATE MODELS

### Subsystem Models
- Show how design is **organised into logically related groups** of objects
- In UML: shown using **packages** (encapsulation construct)
- It is a **logical model** — actual organisation may be different

### Sequence Models
- Show **sequence of object interactions** that take place
- **Objects horizontal** across the top
- **Time represented vertically** — read top to bottom
- **Interactions** = labelled arrows
- Different styles of arrow = different types of interaction
- **Thin rectangle** in object lifeline = time when object is the **controlling object**

### State Diagrams
- Show how objects respond to **service requests**
- Show **state transitions** triggered by these requests
- Useful **high‑level model** of run‑time behavior
- **Don't usually need** state diagram for ALL objects — many simple objects don't need it

### Giải thích (VN — Sequence Diagram)
```
Object A          Object B          Object C
  |                  |                  |
  |--method()------->|                  |
  | (lifeline)       |                  |
  |                  |--call()--------->|
  |                  |<-----return------|
  |<--return---------|                  |
```

### Tại sao quan trọng cho thi
- **MCQ Subsystem**: dùng **packages** trong UML
- **MCQ Sequence**: objects **horizontal top**, time **vertical down**, **thin rectangle** = controlling
- **MCQ State**: NOT for all objects — chỉ những object có behavior phức tạp

---

## 8.24 — INTERFACE SPECIFICATION

### Definition
> *"Object interfaces have to be specified so that:*
> - *The objects can be designed in parallel*
> - *Other components can be designed in parallel."*

### Design Principle
- **Designers should avoid designing the interface representation**
- **Should hide this in the object itself**

### Multiple Interfaces
- Objects may have **several interfaces**
- Each interface = **viewpoint** on the methods provided

### Documentation
- UML uses **class diagrams** for interface specification
- **Java** may also be used to document interfaces

### Tại sao quan trọng cho thi
- **MCQ**: Interface specification cho **parallel design**
- **MCQ**: Hide interface representation **in object itself**

---

# 🟦 PART 4 — IMPLEMENTATION ISSUES

## 8.25 — 3 IMPLEMENTATION ISSUES (Beyond Programming)

### 3 Issues

| # | Issue | Description |
|---|---|---|
| 1 | **Reuse** | Most modern software is constructed by reusing existing components |
| 2 | **Configuration management** | Keep track of many different versions of each component |
| 3 | **Host‑target development** | Production software doesn't usually execute on same computer as dev environment |

### Giải thích (VN)
3 vấn đề khi triển khai phần mềm thực tế:
1. **Reuse**: nên reuse hơn là build from scratch
2. **Configuration management**: quản lý version source code, build, dependencies
3. **Host‑target**: dev máy laptop, run máy server — khác nhau

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 implementation issues**

---

## 8.26 — REUSE — HISTORICAL EVOLUTION & 4 LEVELS

### Historical Evolution
- **1960s–1990s**: Most new software developed **from scratch** in high‑level programming language
- **Only significant reuse**: Functions and objects in programming language libraries

### Why Reuse Became Important
- Costs and schedule pressure made scratch development unviable
- Especially for commercial and Internet‑based systems
- Reuse‑based approach now used for **business and scientific software**

### 4 Reuse Levels (HỌC THUỘC!)

| # | Level | Description |
|---|---|---|
| 1 | **Abstraction** | Don't reuse software directly; use **knowledge of successful abstractions** in design |
| 2 | **Object** | **Directly reuse objects** from a library |
| 3 | **Component** | **Components = collections of objects and object classes**; reuse in application systems |
| 4 | **System** | **Reuse entire application systems** |

### Giải thích (VN — từ thấp đến cao)
1. **Abstraction**: dùng pattern/idea (không phải code) — vd: design pattern
2. **Object**: gọi class có sẵn (vd: `ArrayList`, `HashMap`)
3. **Component**: dùng module lớn (vd: Stripe SDK, Auth0 library)
4. **System**: dùng cả hệ thống (vd: Salesforce, SAP)

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 levels**
- **MCQ thứ tự**: từ thấp (Abstraction) đến cao (System)
- **MCQ trap**: 4 levels này khác 4 levels reuse trong Lec 2 (System/Application/Component/Object) — BIẾT cả 2!

---

## 8.27 — REUSE COSTS (4)

### 4 Types of Costs

| # | Cost | Description |
|---|---|---|
| 1 | **Searching & Assessment** | Time spent looking for software to reuse + assessing if it meets needs |
| 2 | **Acquisition** | Cost of **buying** reusable software (large COTS very high) |
| 3 | **Adaptation** | Costs of **adapting and configuring** reusable components |
| 4 | **Integration** | Costs of **integrating** reusable software with each other and with new code |

### Giải thích (VN)
Reuse **không miễn phí**! 4 chi phí ẩn:
1. Tìm component phù hợp — nhiều hours của senior dev
2. Mua license — đắt cho enterprise software
3. Adapt cho project cụ thể — tweak config, code wrapper
4. Integrate với code khác — debug compatibility, fix conflicts

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 reuse costs**
- **MCQ trap**: phân biệt với reuse benefits (đừng nhầm)

---

## 8.28 — CONFIGURATION MANAGEMENT (3 ACTIVITIES)

### Definition
> *"Configuration management is the name given to the general process of managing a changing software system."*

### Aim
- **Support system integration process**
- Allow developers to **access project code/documents** in controlled way
- **Find out what changes** have been made
- **Compile and link** components to create system

### 3 Main Activities

| # | Activity | Description |
|---|---|---|
| 1 | **Version Management** | Keep track of **different versions** of components. Includes facilities to coordinate development by several programmers (Git, SVN) |
| 2 | **System Integration** | Define **what versions of components** are used to create each system version. Build automatically by compiling/linking |
| 3 | **Problem Tracking** | Allow users to **report bugs/problems**. Allow developers to see who's working on what, when fixed (Jira, GitHub Issues) |

### Giải thích (VN)
- **Version Mgmt**: Git/SVN
- **System Integration**: Maven/Gradle/CI
- **Problem Tracking**: Jira/GitHub Issues/Linear

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 activities**
- **Fill‑in‑blank**: Configuration mgmt = "*the general process of managing a changing software system*"

---

## 8.29 — HOST‑TARGET DEVELOPMENT

### Definition
> *"Most software is developed on one computer (the host), but runs on a separate machine (the target)."*

### More General Terms
- Can talk about **development platform** and **execution platform**
- **Platform** is more than just hardware
- Includes **OS** + supporting software (DBMS, IDE)

### Platform Differences
- Dev platform usually has **different installed software** than execution platform
- Platforms may have **different architectures** (vd: develop on Mac M1 ARM, deploy on x86 Linux server)

### Tại sao quan trọng cho thi
- **MCQ**: **host** = development; **target** = execution
- **MCQ**: Platform = hardware + OS + software stack

---

## 8.30 — DEVELOPMENT PLATFORM TOOLS (5 Common)

### Common Tools

| # | Tool | Purpose |
|---|---|---|
| 1 | **Integrated compiler + syntax‑directed editing** | Create, edit, compile code |
| 2 | **Language debugging system** | Debug |
| 3 | **Graphical editing tools** | Edit UML models |
| 4 | **Testing tools** | E.g., **JUnit** auto‑run tests |
| 5 | **Project support tools** | Organize code for different projects |

### Tại sao quan trọng cho thi
- **MCQ đếm**: 5 common dev tools
- **MCQ**: JUnit là **testing tool**

---

## 8.31 — INTEGRATED DEVELOPMENT ENVIRONMENT (IDE)

### Definition
> *"An IDE is a set of software tools that supports different aspects of software development within some common framework and user interface."*

### Language‑Specific IDEs
- IDEs created to support **specific programming language** (such as Java)
- Language IDE may be developed specially OR be an **instantiation of general‑purpose IDE** with specific language tools

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: IDE = "*set of software tools that supports different aspects of software development*"
- **MCQ**: IDE có thể language‑specific hoặc general‑purpose

---

## 8.32 — COMPONENT/SYSTEM DEPLOYMENT FACTORS (3)

### 3 Main Factors

| # | Factor | Description |
|---|---|---|
| 1 | **Hardware and Software Requirements** | Component designed for specific hardware/software → must deploy on platform that supports |
| 2 | **High Availability Systems** | May require components on **multiple platforms** for redundancy |
| 3 | **Communications Traffic** | High traffic → deploy components on **same platform** or platforms physically close — reduces delay |

### Giải thích (VN)
- **HW/SW Reqs**: ARM build không chạy x86 server → phải compile target
- **High availability**: 1 server fail thì server khác take over
- **Comm traffic**: microservice giao tiếp nhiều → đặt cùng data center

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 deployment factors**, KHÔNG phải 4

---

# 🟦 PART 5 — OPEN SOURCE DEVELOPMENT

## 8.33 — OPEN SOURCE — DEFINITION

### Definition
> *"Open source development is an approach to software development in which the source code of a software system is published, and volunteers are invited to participate in the development process."*

### Historical Roots
- Roots in the **Free Software Foundation (FSF)** — `www.fsf.org`
- Advocates: source code should **NOT be proprietary**; should always be available for users to examine and modify

### Modern Evolution
- Open source extended this idea using **Internet** to recruit **larger population of volunteer developers**
- Many developers are also users of the code

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Open source = "*source code... is published, volunteers invited to participate*"
- **MCQ**: Roots = **FSF (Free Software Foundation)**

---

## 8.34 — BEST‑KNOWN OPEN SOURCE SYSTEMS (4)

### 4 Examples

1. **Linux** Operating System
   - Widely used as **server system**
   - Increasingly used as **desktop environment**
2. **Java**
3. **Apache** Web Server
4. **MySQL** Database Management System

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 best‑known**
- **MCQ list**: Linux, Java, Apache, MySQL

---

## 8.35 — OPEN SOURCE ISSUES

### 2 Key Questions
1. **Should the product being developed make use of open source components?**
2. **Should an open source approach be used for the software's development?**

### Giải thích (VN)
2 quyết định riêng biệt:
1. Có **dùng** open source trong code mình không? (vd: dùng Spring? Hibernate?)
2. Có **publish** code mình thành open source không?

### Tại sao quan trọng cho thi
- **MCQ đếm**: 2 questions

---

## 8.36 — OPEN SOURCE BUSINESS MODEL

### Business Model
> *"More and more product companies are using an open source approach. Business model: not reliant on selling a software product, but on selling support for that product."*

### Beliefs
- Open source community allows software:
  - Developed **more cheaply**
  - Developed **more quickly**
  - Create **community of users**

### Examples
- **Red Hat**: bán support cho Linux (RHEL)
- **MongoDB**: bán managed service (Atlas)
- **Confluent**: bán support cho Kafka

### Tại sao quan trọng cho thi
- **MCQ**: Business model = **selling SUPPORT**, not product
- **Fill‑in‑blank**: 3 beliefs (cheaper, quicker, community)

---

## 8.37 — OPEN SOURCE LICENSING — KEY PRINCIPLE

### Key Principle
> *"A fundamental principle of open‑source development is that source code should be freely available. This does NOT mean that anyone can do as they wish with that code."*

### Ownership & Restrictions
- **Legally**, the developer (company or individual) **still owns the code**
- Can **place restrictions** on how it is used
- Restrictions in **open source software license** — legally binding conditions

### 2 Perspectives

**Reciprocal Approach**:
- If open source component used to develop new system → **new system should also be open source**

**Non‑Reciprocal Approach**:
- Allow code to be used **without this restriction**
- Developed systems may be **proprietary**, sold as closed source

### Giải thích (VN)
**Open source ≠ public domain**! Vẫn có owner. Owner đặt rules qua license. Có 2 loại:
- **Reciprocal** ("copyleft"): bắt buộc software dùng phải cũng open source (GPL)
- **Non‑reciprocal** ("permissive"): không bắt buộc (BSD, MIT)

### Tại sao quan trọng cho thi
- **MCQ trap**: Open source vẫn có **owner** (KHÔNG phải public domain)
- **MCQ**: 2 perspectives — Reciprocal vs Non‑reciprocal

---

## 8.38 — 3 LICENSE MODELS (CỰC QUAN TRỌNG!)

### 1. GNU General Public License (GPL)
- **Type**: **Reciprocal** license
- **Key Feature**: If you use software licensed under GPL → **you MUST make your software open source**

### 2. GNU Lesser General Public License (LGPL)
- **Type**: **Variant of GPL**
- **Key Feature**: You can write components that **link to** open source code without having to **publish source of these components**

### 3. Berkeley Standard Distribution (BSD) License
- **Type**: **Non‑reciprocal** license
- **Key Feature**: You are **NOT obliged** to re‑publish any changes/modifications. Can include code in **proprietary systems** that are sold

### Giải thích (VN)

| License | Reciprocal? | Có thể dùng trong proprietary? | Ví dụ phần mềm |
|---|---|---|---|
| **GPL** | YES (toàn bộ) | NO — phải open source toàn bộ | Linux kernel |
| **LGPL** | YES (chỉ component) | YES — link thôi, không cần publish app | glibc |
| **BSD** | NO | YES — tự do | FreeBSD, React, MIT lib |

**GPL viral**: nếu kế thừa GPL → bắt buộc kế thừa GPL toàn bộ (như "viral" lan truyền)
**LGPL trung gian**: cho phép link mà không bị viral — phù hợp libraries
**BSD permissive**: không yêu cầu gì, free dùng

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 license models**
- **MCQ phân biệt**:
  - GPL = reciprocal toàn bộ
  - LGPL = variant of GPL, link without publishing
  - BSD = non‑reciprocal
- **Fill‑in‑blank**: Full names — GPL = General Public License, LGPL = Lesser GPL, BSD = Berkeley Standard Distribution

---

## 8.39 — LICENSE MANAGEMENT (6 ACTIVITIES)

### 6 Key Activities

1. **Establish a system** for maintaining info about open‑source components downloaded and used
2. **Be aware** of different types of licenses; understand how a component is licensed before using
3. **Be aware** of evolution pathways for components
4. **Educate people** about open source
5. **Have auditing systems** in place
6. **Participate in** the open source community

### Giải thích (VN)
Doanh nghiệp dùng open source phải có quy trình:
1. **Inventory**: list các component đang dùng + license
2. **License awareness**: training về GPL/LGPL/BSD/MIT
3. **Evolution**: theo dõi component có còn maintain không, có CVE không
4. **Education**: dev biết khi nào được dùng/không
5. **Audit**: kiểm tra định kỳ tuân thủ license
6. **Participate**: contribute back để build relationship

### Tại sao quan trọng cho thi
- **MCQ đếm**: **6 activities**

---

## 🎯 KEY POINTS LECTURE 8

### Hibernate Validation
- Implementation of **Bean Validation specification** (JSR 303/349/380, Jakarta 2.0/3.0/3.1)
- 4 common annotations: `@NotNull`, `@Size`, `@Min/@Max`, `@Pattern`
- `@Valid` triggers; `BindingResult` stores errors (no exception thrown)
- Display in Thymeleaf: `#fields.hasErrors('field')` + `th:errors="*{field}"`

### Spring Security JPA
- **UserDetailsService** thay UserDetailsManager
- `UserDetails` has **7 methods**
- 2 approaches: User implements UserDetails (**NOT recommended**) vs **MyUserDetails class** (**RECOMMENDED**)
- **UserTemplate** for validation (raw password, before encoding)
- `@Autowired` **NOT recommended** → constructor injection

### Design Process
- **5 OO Design stages**: Context → Architecture → Objects → Models → Interfaces
- **2 Context Models**: System Context (structural) vs Interaction (dynamic)
- **4 Object Identification approaches**: Grammatical / Tangible / Behavioural / Scenario‑based
- **2 Design Model kinds**: Structural (static) vs Dynamic
- **5 Design Model examples**: Subsystem / Sequence / State machine / Use‑case / Aggregation+Generalisation
- Sequence diagram: objects horizontal, time vertical, thin rectangle = controlling

### Implementation Issues (3)
1. **Reuse** — 4 levels (Abstraction / Object / Component / System)
2. **Configuration mgmt** — 3 activities (Version mgmt / System integration / Problem tracking)
3. **Host‑target development** — host = dev, target = execution

### Reuse Costs (4)
- Searching & Assessment / Acquisition / Adaptation / Integration

### Component Deployment Factors (3)
- HW/SW requirements / High availability / Communications traffic

### Open Source
- 4 best‑known: **Linux, Java, Apache, MySQL**
- 3 License Models:
  - **GPL** (reciprocal — must open source)
  - **LGPL** (variant — link without publishing)
  - **BSD** (non‑reciprocal — proprietary OK)
- 6 License Mgmt activities

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 8

- [ ] 4 validation annotations: `@NotNull`, `@Size`, `@Min/@Max`, `@Pattern`
- [ ] `@Valid` + `BindingResult` (BindingResult ngay sau @Valid)
- [ ] Thymeleaf error display: `#fields.hasErrors()`, `th:errors`
- [ ] UserDetails có **7 methods**
- [ ] MyUserDetails (approach #2) RECOMMENDED, NOT User implements UserDetails
- [ ] UserTemplate cho validation raw password
- [ ] @Autowired NOT recommended (slide); dùng constructor injection
- [ ] 5 OO Design stages (Context → Architecture → Objects → Models → Interfaces)
- [ ] 2 Context Models (Structural System Context vs Dynamic Interaction)
- [ ] 4 Object Identification approaches
- [ ] 2 kinds + 5 examples Design Models
- [ ] Sequence diagram: objects horizontal top, time vertical down
- [ ] 3 Implementation Issues
- [ ] 4 Reuse Levels (Lec 8 version: Abstraction/Object/Component/System) — ≠ Lec 2 version!
- [ ] 4 Reuse Costs (Searching/Acquisition/Adaptation/Integration)
- [ ] 3 Configuration Mgmt activities
- [ ] Host (dev) vs Target (execution)
- [ ] 3 Deployment Factors
- [ ] 4 Best‑known open source (Linux/Java/Apache/MySQL)
- [ ] 3 License Models: GPL (reciprocal), LGPL (variant), BSD (non‑reciprocal)
- [ ] 6 License Mgmt Activities
