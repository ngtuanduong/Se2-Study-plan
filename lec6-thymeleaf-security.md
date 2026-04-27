# 📘 LECTURE 6 — Thymeleaf Expressions, Spring MVC + Security Basics (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

# 🟦 PART 1 — THYMELEAF EXPRESSIONS

## 6.1 — KEY PRINCIPLE OF THYMELEAF

### Principle
> *"Thymeleaf expressions outside of `th:*` attributes will not be processed and will be treated as plain text. This is intentional by design as Thymeleaf prioritizes compatibility with standard HTML."*

### Giải thích (VN)
**Triết lý của Thymeleaf**: file `.html` phải vẫn là HTML hợp lệ — designer mở browser xem được layout thật. Để làm được vậy:
- Logic của Thymeleaf đặt **bên trong `th:*` attribute** (browser bỏ qua attribute lạ)
- Code Thymeleaf **bên ngoài** không chạy → là text thường

### Ví dụ
```html
<!-- WORKS: th:text bên trong attribute -->
<h1 th:text="${user.name}">Default Name</h1>

<!-- KHÔNG CHẠY: bên ngoài attribute, là text -->
<h1>Hello, ${user.name}</h1>
```

→ Tuy nhiên có **inline expression** dùng `[[...]]` để bỏ qua quy tắc này.

### Tại sao quan trọng cho thi
- **MCQ trap**: Nếu code có `${...}` không nằm trong `th:*` → KHÔNG được xử lý
- **Fill‑in‑blank**: Thymeleaf "*prioritizes compatibility with standard HTML*"

---

## 6.2 — 5 TYPES OF THYMELEAF EXPRESSIONS (CỰC QUAN TRỌNG!)

### Definition của từng loại

| # | Syntax | Name | Purpose |
|---|---|---|---|
| 1 | **`${...}`** | Variable expressions (Spring EL) | Truy cập context variables / model attributes |
| 2 | **`*{...}`** | Selection expressions | Truy cập field của object đang select (qua `th:object`) |
| 3 | **`#{...}`** | Message (i18n) expressions | Lấy text từ message bundle (đa ngôn ngữ) |
| 4 | **`@{...}`** | Link (URL) expressions | Tạo URL động |
| 5 | **`~{...}`** | Fragment expressions | Reference đến fragment để insert/replace |

### Mnemonic
**`$`, `*`, `#`, `@`, `~`** — học thứ tự + mỗi ký hiệu 1 chức năng.

### Chi tiết từng loại

---

## 6.3 — VARIABLE EXPRESSIONS `${...}` (Spring EL)

### Definition
> *"Called Spring EL when integrating Thymeleaf with Spring. Used to work with context variables (a.k.a. model attributes)."*

### Code Example
```java
// Controller
@RequestMapping(value = "/add")
public String addEmployee(Model model) {
    Employee employee = new Employee();
    model.addAttribute("employee", employee);
    return "employeeAdd";
}
```

```html
<!-- Template -->
<form th:action="'/insert'" th:object="${employee}" method="post">
    <input th:value="${employee.name}" />
</form>
```

### Giải thích (VN)
**`${...}`** là loại phổ biến nhất. Truy cập variable trong Model qua tên (key trong `model.addAttribute(key, value)`).

**Spring EL** (Expression Language) cho phép:
- Property access: `${user.name}`, `${user.address.city}`
- Method call: `${user.getName()}`
- Operators: `${age > 18}`, `${name == 'John'}`

### Tại sao quan trọng cho thi
- **MCQ**: `${...}` = **Variable expression / Spring EL**
- **Fill‑in‑blank**: "*context variables (a.k.a. model attributes)*"

---

## 6.4 — SELECTION EXPRESSIONS `*{...}`

### Purpose
Truy cập field của **object đang được select** qua `th:object`.

### Code Example
```html
<form th:object="${user}" method="post">
    <!-- 2 cách viết tương đương: -->
    <input th:value="${user.name}" />   <!-- variable expression -->
    <input th:value="*{name}" />        <!-- selection expression -->
</form>
```

### Giải thích (VN)
**Selection** = "trong context của object đã select bằng `th:object`, truy cập field này".

**Lợi ích**: code ngắn gọn, ít lặp lại tên object.

### Tại sao quan trọng cho thi
- **MCQ phân biệt**: `${user.name}` (variable, full path) vs `*{name}` (selection, in context)
- **MCQ**: `*{...}` cần `th:object` đi kèm

---

## 6.5 — MESSAGE EXPRESSIONS `#{...}`

### Purpose
**Internationalization (i18n)** — lấy text từ file message bundle (`messages.properties`).

### Example
```properties
# messages_en.properties
greeting=Hello, {0}!

# messages_vi.properties
greeting=Xin chào, {0}!
```

```html
<h1 th:text="#{greeting('World')}">Greeting</h1>
```

→ Tùy locale của browser/user → render `Hello, World!` hoặc `Xin chào, World!`.

### Tại sao quan trọng cho thi
- **MCQ**: `#{...}` = **i18n / message expression**
- **MCQ**: Dùng cho **đa ngôn ngữ**

---

## 6.6 — LINK (URL) EXPRESSIONS `@{...}`

### Definition
> *"Special syntax for URLs."*

### 4 Types of URLs

| Type | Example |
|---|---|
| **Absolute URLs** | `http://www.thymeleaf.org` |
| **Page‑relative** | `user/login.html` |
| **Context‑relative** | `/itemdetails?id=3` (context path tự động prepend) |
| **Server‑relative** | `~/billing/processInvoice` (calling URLs in another context same server) |
| **Protocol‑relative** | `//code.jquery.com/2.0.3.min.js` |

### Code Examples
```html
<!-- Will produce 'http://localhost:8080/order/details?orderId=3' -->
<a href="details.html"
   th:href="@{http://localhost:8080/order/details(orderId=${o.id})}">view</a>

<!-- Will produce '/order/details?orderId=3' -->
<a href="details.html" th:href="@{/details(orderId=${o.id})}">view</a>

<!-- Will produce '/order/3/details' -->
<a href="details.html" th:href="@{/{orderId}/details(orderId=${o.id})}">view</a>
```

### Key Points
- **`th:href`** is a **modifier attribute**: once processed, it computes the link URL and sets that value to the `href` attribute
- URL may have **one or many parameters** (separated by commas)
- Variables allowed in URL paths: `@{/{orderId}/details(orderId=${orderId})}`

### Giải thích (VN)
**Tại sao cần `@{...}`?** Vì context path của app có thể thay đổi (deploy ở `/myapp` thay vì root `/`). Dùng `@{...}` thì Thymeleaf tự prepend context path → URL đúng dù deploy ở đâu.

**Param syntax**: `@{/path(key1=value1, key2=value2)}` → trở thành `/path?key1=value1&key2=value2`.

### Tại sao quan trọng cho thi
- **MCQ đếm**: 5 URL types (Absolute, Page‑relative, Context‑relative, Server‑relative, Protocol‑relative)
- **MCQ syntax**: `@{...}` cho URL
- **Code reading**: hiểu `@{/{id}/details(id=${o.id})}` → URL như `/3/details`

---

## 6.7 — FRAGMENTS `~{...}`

### Definition
> *"An easy way to represent fragments of markup and move them around templates. This allows you to replicate them, pass them to other templates as arguments, etc."*

### Defining Fragments
Use **`th:fragment`** attribute:

```html
<!-- footer.html -->
<div th:fragment="copy">
    &copy; 2024 FIT HANU
</div>
```

### Including Fragments
```html
<!-- Use th:insert or th:replace -->
<div th:insert="~{footer :: copy}"></div>
```

### Fragment Expression Syntax
```
~{templatename::selector}
```

**Non‑complex example** (không cần `~{}`):
```html
<div th:insert="footer :: copy"></div>
```

### `th:insert` vs `th:replace` (CỰC QUAN TRỌNG!)

| Attribute | Behavior |
|---|---|
| **`th:insert`** | Will simply **insert** the specified fragment as the **body** of its host tag |
| **`th:replace`** | **Replaces** its host tag with the specified fragment |

### Ví dụ minh họa
```html
<!-- Source -->
<div th:insert="footer :: copy"></div>
<!-- Result: <div><div>© 2024 FIT HANU</div></div> -->

<div th:replace="footer :: copy"></div>
<!-- Result: <div>© 2024 FIT HANU</div> -->
```

### Use case
- **Header, navbar, footer** dùng chung nhiều page → tạo fragment, include ở mỗi page.

### Tại sao quan trọng cho thi
- **MCQ phân biệt**: `th:insert` (giữ host tag) vs `th:replace` (thay host tag)
- **MCQ syntax**: `~{templatename::selector}`
- **Fill‑in‑blank**: Fragment expression syntax

---

## 6.8 — EXPRESSION OBJECTS

### Accessed Using `#` Symbol

### Expression Basic Objects
- **`#ctx`** — the context object
- **`#vars`** — the context variables
- **`#request`** — (Web) the `HttpServletRequest` object
- **`#response`** — (Web) the `HttpServletResponse` object
- **`#session`** — (Web) the `HttpSession` object

### Expression Utility Objects
- **URIs/URLs**
- **Dates** / **Numbers** / **Strings**
- **Arrays** / **Lists** / **Sets** / **Maps**

### Giải thích (VN)
- **Basic objects** = truy cập context của request hiện tại
- **Utility objects** = các function helpers (format date, format number, manipulate string)

**Lưu ý**: prefix `#` nhưng KHÁC `#{...}` (i18n) — `#{name}` là i18n, `#name` là utility object.

### Tại sao quan trọng cho thi
- **MCQ list**: 5 basic expression objects (#ctx, #vars, #request, #response, #session)
- **MCQ trap**: `#{...}` (i18n) ≠ `#name` (utility object access)

---

## 6.9 — FORMATTING & UTILITIES

### Date Formatting
```html
${#dates.format(date, 'dd/MMM/yyyy HH:mm')}
${#calendars.format(date, 'dd/MMM/yyyy HH:mm')}
```

### URL Escaping
```java
// Controller
model.addAttribute("myURL", "http://fit.hanu.vn/?first=Quân&last=Đặng");
```
```html
<!-- Template -->
<div th:text="${#uris.escapePath(myURL)}"></div>

<!-- HTML result -->
<div>http://fit.hanu.vn/%3Ffirst=Qu%C3%A2n&amp;last=%C4%90%E1%BA%B7ng</div>
```

### Number Formatting
```html
<!-- 3 integer digits, 2 decimal places -->
${#numbers.formatDecimal(num, 3, 2)}

<!-- With thousand separator (COMMA) -->
${#numbers.formatDecimal(num, 3, 2, 'COMMA')}
```

### String Operations
```html
${#strings.toString(obj)}
${#strings.isEmpty(name)}
${#strings.contains(name, 'ez')}
${#strings.startsWith(name, 'Don')}
${#strings.indexOf(name, frag)}
${#strings.substring(name, 3, 5)}
${#strings.toUpperCase(name)}
${#strings.arraySplit(namesStr, ',')}
${#strings.arrayJoin(namesArray, ',')}
${#strings.trim(str)}
${#strings.length(str)}
```

### Tại sao quan trọng cho thi
- **MCQ**: Method names trong utility objects (`format`, `formatDecimal`, `escapePath`, `isEmpty`, `contains`, …)

---

## 6.10 — CHECKING IF VARIABLE EXISTS (2 METHODS)

### Method 1: `#ctx.containsVariable`
```html
<p th:if="#ctx.containsVariable('message')">
    The message is: [[${message}]]
</p>
```

### Method 2: Compare with null
```html
<p th:if="${message != null}">
    The message is: [[${message}]]
</p>
```

### Inline Expression `[[...]]`
Cho phép dùng expression **bên ngoài** `th:*` attribute (override default behavior).

### Tại sao quan trọng cho thi
- **MCQ**: 2 cách check variable (containsVariable vs != null)
- **MCQ**: `[[...]]` = inline expression

---

# 🟦 PART 2 — SPRING MVC + THYMELEAF EXAMPLES

## 6.11 — HANDLING POST REQUESTS (`@ModelAttribute`)

### Important Note
> *"The `@RequestBody` annotation wouldn't work in many cases for form submissions because no converter object is found for a form's content type. Returns 'Media Type Not Supported' error (code **415**). Regular www‑urlencoded POST request from HTML form can be received as an object using `@ModelAttribute` annotation."*

### Code Example
```java
@RequestMapping(value = "/handleAddStudent", method = RequestMethod.POST)
public String handleAddStudent(@ModelAttribute Student s, Model model) {
    model.addAttribute("student", s);
    return "studentAdd";
}
```

### Giải thích (VN)
- **`@RequestBody`**: deserialize từ JSON/XML → object. **KHÔNG work với form** (Content‑Type: `application/x-www-form-urlencoded`)
- **`@ModelAttribute`**: bind form fields (name, email, ...) → object's setters

→ Form HTML thường → **`@ModelAttribute`**. JSON API → **`@RequestBody`**.

### Tại sao quan trọng cho thi
- **MCQ**: HTTP **415** = Unsupported Media Type
- **MCQ**: Form POST → `@ModelAttribute`, không phải `@RequestBody`

---

## 6.12 — TOPICS IN SPRING MVC + THYMELEAF (slide ghi)

1. Using **spring-boot-devtools** — auto‑restart app to speed up dev
2. **Populating a form** in Thymeleaf
3. **Spring MVC HTTP Message Conversion** — converting form data into entity instance
4. **Add vs. Edit** example
5. Call a Bean's method from Thymeleaf view using `${@beanName.method()}` syntax

### Giải thích (VN)
- **devtools**: auto‑reload khi save file (tăng productivity)
- **Bean method call** từ Thymeleaf: `${@myBean.someMethod()}` → gọi method trên Spring bean

### Tại sao quan trọng cho thi
- **MCQ**: `${@beanName.method()}` syntax để gọi bean method từ template

---

# 🟦 PART 3 — SPRING SECURITY BASICS

## 6.13 — ENABLING SPRING SECURITY

### Dependency
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### Configuration Class Setup
Annotated with:
- **`@Configuration`**
- **`@EnableWebSecurity`**

### Code
```java
@Configuration
@EnableWebSecurity
public class SecurityCfg {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            // insert filters here
            .build();
    }
}
```

### Giải thích (VN)
- Thêm dependency → mặc định **mọi URL bị block**, trừ khi config
- Class config phải có **2 annotation**: `@Configuration` + `@EnableWebSecurity`
- Bean trả về `SecurityFilterChain` từ `HttpSecurity` (Builder pattern!)

### Tại sao quan trọng cho thi
- **MCQ**: Dependency = **`spring-boot-starter-security`**
- **MCQ**: 2 annotations cần thiết
- **MCQ**: Builder pattern dùng trong HttpSecurity (Lec 9 sẽ học)

---

## 6.14 — HTTP REQUEST AUTHORIZATION

### Using `authorizeHttpRequests()`

```java
.authorizeHttpRequests(req -> req
    // let everyone access homepage
    .requestMatchers("/").permitAll()
    // other URLs are for authenticated users only
    .anyRequest().authenticated()
)
```

### IMPORTANT RULE
> *"The order of rules is significant — more specific rules need to come first, followed by more general ones."*

### Giải thích (VN)
**Order matters within `authorizeHttpRequests`** — nếu để `anyRequest()` trước thì rule sau bị bỏ qua.

**Sai**:
```java
.anyRequest().authenticated()
.requestMatchers("/").permitAll()  // ← KHÔNG có hiệu lực!
```

**Đúng**:
```java
.requestMatchers("/").permitAll()  // specific
.anyRequest().authenticated()      // general
```

### Tại sao quan trọng cho thi
- **MCQ**: Order rules **specific trước, general sau**
- **MCQ**: `permitAll()` cho phép truy cập không cần login; `authenticated()` yêu cầu login

---

## 6.15 — DEFAULT LOGIN

### Default Spring Security Behavior
- Default login page at **`/login`**
- Default logout URL is **`/logout`**
- Upon successful login: **redirects to previous URL and appends `?continue`**
- Upon failed login: redirects to **`/login?error`**

### Using Default
```java
.formLogin(Customizer.withDefaults())
```

### Note
> *"Not recommended to use defaults as it lets attackers know you're using Spring Security."*

### Tại sao quan trọng cho thi
- **MCQ**: Default URL = `/login`
- **MCQ**: Failure → `/login?error`
- **MCQ**: Defaults **NOT recommended** vì security through obscurity

---

## 6.16 — CUSTOM FORM LOGIN

### Code
```java
.formLogin(formLogin -> formLogin
    .loginPage("/sign-in")
    .loginProcessingUrl("/sign-in")
    .defaultSuccessUrl("/member", true)
    .failureUrl("/sign-in?error=true")
    .permitAll()
)
```

### Parameters

| Method | Purpose |
|---|---|
| **`.loginPage("/sign-in")`** | Custom login URL |
| **`.loginProcessingUrl("/sign-in")`** | URL to **process** login form submission |
| **`.defaultSuccessUrl("/member", true)`** | Redirect URL after **successful login** |
| **`.failureUrl("/sign-in?error=true")`** | Redirect URL after **failed login** |
| **`.permitAll()`** | Make these URLs accessible to **unauthenticated users** |

### Giải thích (VN)
- **`loginPage`** vs **`loginProcessingUrl`**: GET trang login khác POST submit. Có thể cùng URL nếu controller xử lý cả 2 method.
- **`permitAll()`** cần thiết: nếu không, user **chưa login** không thể truy cập trang login → vòng lặp infinite.

### Tại sao quan trọng cho thi
- **MCQ**: Phân biệt `loginPage` (GET form) vs `loginProcessingUrl` (POST submit)
- **MCQ**: `.permitAll()` mục đích = cho user chưa login truy cập trang login

---

## 6.17 — CUSTOM LOGIN PAGE (Thymeleaf)

### Code
```html
<form method="post" th:action="'/sign-in'">
    <h2>Please sign in</h2>
    <p th:if="${param.error}">Invalid credentials!</p>
    <p th:if="${param.logout}">You have been logged out!</p>
    <p>
        <label for="username">Username</label>
        <input type="text" id="username" name="username"/>
    </p>
    <p>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"/>
    </p>
    <input type="submit" value="Sign in"/>
</form>
```

### Controller Method
```java
@Controller
public class AuthController {
    @GetMapping("/sign-in")
    public String login() {
        return "sign-in";
    }
}
```

### Convention
> *"Dedicate AuthController to authentication‑related stuffs (sign in, sign up, etc.)"*

### Giải thích (VN)
- Form **MUST** have field names `username` and `password` (Spring Security default)
- `${param.error}` check query param `?error` để show error message
- `${param.logout}` check `?logout` để show logout message

### Tại sao quan trọng cho thi
- **MCQ**: Field name **bắt buộc** = `username`, `password`
- **MCQ**: `${param.X}` đọc query parameter trong Thymeleaf

---

## 6.18 — LOGOUT CONFIGURATION

### Code
```java
.logout(logout -> logout
    .logoutUrl("/sign-out")
    .logoutSuccessUrl("/sign-in?logout=true")
    .permitAll()
)
```

### Note
> *"No need to have a controller method for logout."*

### Giải thích (VN)
Spring Security tự xử lý logout — bạn **không cần viết controller**. Chỉ cần `<a href="/sign-out">Logout</a>` (hoặc form POST nếu CSRF enabled).

### Tại sao quan trọng cho thi
- **MCQ**: Logout **KHÔNG cần** controller method

---

## 6.19 — CSRF PROTECTION

### What is CSRF?
> *"CSRF (Cross‑Site Request Forgery): Attacker tricks victim to send POST requests from a different site to the target site (e.g., for changing account's email address)."*

### Spring Security Default
- Built‑in CSRF protection **enabled by default**
- Requires **POST** request for logout if CSRF enabled

### Disabling CSRF (for simplicity)
```java
http
    // disable so we can visit "/sign-out" using GET
    .csrf(c -> c.disable())
```

### Giải thích (VN)
**Cách CSRF attack hoạt động**:
1. User login vào `bank.com`, có session cookie
2. Trong tab khác, user mở `evil.com`
3. `evil.com` có hidden form gửi POST `bank.com/transfer?to=hacker&amount=1000` 
4. Browser tự gắn cookie của bank.com → bank server tưởng user thực sự transfer

**Spring CSRF protection**: yêu cầu **CSRF token** trong mọi POST request → evil.com không có token → request bị reject.

### Use case
- App công ty enterprise → KHÔNG nên disable CSRF
- Demo project trong lab → có thể disable cho đơn giản

### Tại sao quan trọng cho thi
- **MCQ**: CSRF = **Cross‑Site Request Forgery**
- **MCQ**: Default = **enabled**
- **MCQ**: Disable bằng `.csrf(c -> c.disable())`

---

## 6.20 — SECURITY FILTER CHAIN ORDER

### Order Independence (giữa các configurer khác nhau)
> *"The order of `csrf()`, `formLogin()`, `logout()` and `authorizeHttpRequests()` does NOT matter as they are independent configurers."*

### Order Matters (trong cùng `authorizeHttpRequests`)
**Specific rules trước, general sau!**

### Giải thích (VN)
- **Order GIỮA configurers**: KHÔNG quan trọng (csrf, formLogin, logout, authorize có thể đảo)
- **Order TRONG authorizeHttpRequests**: QUAN TRỌNG (specific → general)

### Tại sao quan trọng cho thi
- **MCQ trap**: order độc lập **giữa** vs phụ thuộc **trong** authorizeHttpRequests

---

## 6.21 — REQUEST MATCHERS WILDCARDS

### Wildcards
- **`?`** — matches a single character
- **`*`** — matches zero or more characters
- **`**`** — matches zero or more 'directories' in a path

### Examples
- `/user/?` matches `/user/a`, `/user/b` (1 char)
- `/user/*` matches `/user/`, `/user/abc`, `/user/123` (any name, but no slash)
- `/user/**` matches `/user/`, `/user/profile`, `/user/profile/edit` (any depth)

### Tại sao quan trọng cho thi
- **MCQ phân biệt 3 wildcards**: 1 char vs 0+ chars vs 0+ directories

---

## 6.22 — USER DETAILS MANAGERS

### Default Behavior
> *"If no bean of type UserDetailsManager is found, Spring will generate a default user named `user` with a randomly generated password shown on the console."*

### 2 Built‑in User Details Managers

| Manager | Purpose |
|---|---|
| **`InMemoryUserDetailsManager`** | For quick **testing** with a few users |
| **`JdbcUserDetailsManager`** | For storing users in **database** |

### Tại sao quan trọng cho thi
- **MCQ**: Default user name = **`user`**, password **random shown on console**
- **MCQ đếm**: 2 built‑in managers
- **MCQ**: InMemory cho test, Jdbc cho prod

---

## 6.23 — IN‑MEMORY USER DETAILS MANAGER

### Code Example
```java
@Bean
InMemoryUserDetailsManager users() {
    return new InMemoryUserDetailsManager(
        User.withUsername("quan")
            .password("{noop}123123")
            .roles("USER")
            .build()
    );
}
```

### `{noop}` Prefix
> *"Added when we don't want to use any PasswordEncoder. We'll add and use a password encoder later."*

### Giải thích (VN)
**`{noop}`** = "**no operation**" — báo cho Spring Security: password này **plaintext, không cần decode**. Phù hợp cho test, **KHÔNG dùng prod**.

### Tại sao quan trọng cho thi
- **MCQ**: `{noop}` = no encoder
- **MCQ**: InMemory phù hợp test

---

## 6.24 — PASSWORD ENCODER (BCryptPasswordEncoder)

### Recommendation
> *"BCryptPasswordEncoder is the most popular and sufficient for professional usage."*

### Code Example
```java
@Bean
PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}

@Bean
InMemoryUserDetailsManager users() {
    return new InMemoryUserDetailsManager(
        User.withUsername("quan")
            .password(passwordEncoder().encode("123123"))
            .roles("USER")
            .build()
    );
}
```

### Giải thích (VN)
**BCrypt** là thuật toán hash 1‑chiều (không decode được) + có salt + adaptive (cost factor có thể tăng).

**Quy trình login**:
1. User nhập password "123123"
2. Spring lấy hashed password từ DB (vd: `$2a$10$...`)
3. Spring `BCryptPasswordEncoder.matches("123123", "$2a$10$...")` → true/false

→ DB **không bao giờ lưu plaintext**, kể cả admin cũng không xem được password user.

### Tại sao quan trọng cho thi
- **MCQ**: Recommended = **BCryptPasswordEncoder**
- **MCQ**: BCrypt là **1‑way hash** với salt

---

## 6.25 — JDBC USER DETAILS MANAGER

### Setup Requirements
Cần tạo bảng DB trước.

### Default Schema
> *"The default schema is provided as a CLASSPATH resource: `org/springframework/security/core/userdetails/jdbc/users.ddl`"*

> *"The provided DDL uses a dialect not suitable for MySQL and needs manual modification."*

### Setup Script for MySQL
```sql
CREATE TABLE users (
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    password VARCHAR(500) NOT NULL,
    enabled BOOLEAN NOT NULL
);

CREATE TABLE authorities (
    username VARCHAR(50) NOT NULL,
    authority VARCHAR(50) NOT NULL,
    CONSTRAINT fk_authorities_users FOREIGN KEY(username) REFERENCES users(username)
);

CREATE UNIQUE INDEX ix_auth_username
ON authorities (username, authority);
```

### Configuration
```java
@Bean
UserDetailsManager users(DataSource dataSource) {
    UserDetails user = User.builder()
        .username("quan")
        .password(passwordEncoder().encode("123"))
        .roles("USER")
        .build();
    
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    users.createUser(user);
    return users;
}
```

### DataSource Config in `application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=
```

### Tại sao quan trọng cho thi
- **MCQ**: Default DDL ở `org/springframework/security/core/userdetails/jdbc/users.ddl`
- **MCQ**: Cần **manual modification** cho MySQL
- **MCQ**: 2 bảng = `users` + `authorities`

---

## 🎯 KEY POINTS LECTURE 6

### Thymeleaf
- 5 expression types: `${...}` (variable/Spring EL), `*{...}` (selection), `#{...}` (i18n), `@{...}` (URL), `~{...}` (fragment)
- 5 URL types: Absolute, Page‑relative, Context‑relative, Server‑relative, Protocol‑relative
- Fragments: `th:fragment` define, `th:insert` (giữ host) vs `th:replace` (thay host)
- Expression objects: `#ctx`, `#vars`, `#request`, `#response`, `#session`
- Utility objects: `#dates`, `#numbers`, `#strings`, `#uris`, `#calendars`
- Form POST → `@ModelAttribute` (NOT `@RequestBody`); HTTP **415** nếu sai

### Spring Security
- Dependency: `spring-boot-starter-security`; `@Configuration` + `@EnableWebSecurity`
- `authorizeHttpRequests`: specific trước, general sau
- Default: `/login`, `/logout`, fail → `/login?error`
- Form login methods: `loginPage`, `loginProcessingUrl`, `defaultSuccessUrl`, `failureUrl`, `permitAll`
- CSRF: enabled default, `Cross‑Site Request Forgery`
- 2 UserDetailsManager: InMemory (test), Jdbc (prod)
- BCryptPasswordEncoder = recommended
- 3 Wildcards: `?` (1 char), `*` (0+ chars), `**` (0+ directories)

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 6

- [ ] 5 expression types với syntax + purpose
- [ ] Phân biệt `${...}` vs `*{...}` (variable vs selection)
- [ ] 5 URL types
- [ ] `th:insert` vs `th:replace` (giữ vs thay host tag)
- [ ] Fragment syntax `~{template::selector}`
- [ ] HTTP 415 = Unsupported Media Type
- [ ] Form POST dùng `@ModelAttribute`, NOT `@RequestBody`
- [ ] 2 annotations Spring Security config: `@Configuration` + `@EnableWebSecurity`
- [ ] Order rules: specific → general TRONG authorizeHttpRequests
- [ ] Default URLs: `/login`, `/logout`, `/login?error`
- [ ] Form login methods (5 methods)
- [ ] CSRF = Cross‑Site Request Forgery; default enabled
- [ ] 3 wildcards: `?`, `*`, `**`
- [ ] 2 UserDetailsManager + when to use
- [ ] `{noop}` = no encoder (test only)
- [ ] BCryptPasswordEncoder = recommended cho prod
