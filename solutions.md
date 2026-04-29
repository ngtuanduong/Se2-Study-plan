# ✅ SE2 — ĐÁP ÁN MẪU CHO BỘ ĐỀ LUYỆN TẬP

> **Lưu ý**: Đáp án mang tính tham khảo. Có thể có nhiều cách viết khác nhau đều đúng — quan trọng là **tuân thủ best practice slide** (annotations chính xác, owning side đúng, constructor injection, MyUserDetails approach…).

---

## 📑 MỤC LỤC

- [PHẦN A — Lecture 2](#phần-a)
- [PHẦN B — Lecture 3](#phần-b)
- [PHẦN C — Lecture 4](#phần-c)
- [PHẦN D — Lecture 6](#phần-d)
- [PHẦN E — Lecture 7](#phần-e)
- [PHẦN F — Lecture 8](#phần-f)
- [PHẦN G — Design Patterns](#phần-g)
- [PHẦN H — ĐỀ TỔNG HỢP](#phần-h)

---

<a id="phần-a"></a>
# 🟦 PHẦN A — Lecture 2

## ✅ A1 — Entity Book

```java
import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "book_title")
    private String title;
    
    private String author;
    private int publishedYear;
    private String isbn;
    
    // Constructors
    public Book() {}
    
    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public int getPublishedYear() { return publishedYear; }
    public void setPublishedYear(int publishedYear) { this.publishedYear = publishedYear; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
}
```

**Điểm chú ý**:
- `@Entity` BẮT BUỘC.
- `@Id` BẮT BUỘC.
- `@GeneratedValue(strategy = GenerationType.IDENTITY)` cho auto‑increment (MySQL).
- `@Table(name="books")` vì tên bảng khác tên class.
- `@Column(name="book_title")` vì tên cột khác tên field.

---

## ✅ A2 — BookRepository

```java
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthor(String author);
    Optional<Book> findByIsbn(String isbn);
}
```

**Điểm chú ý**:
- `extends JpaRepository<Book, Long>` — Long là kiểu của primary key.
- `findByIsbn` trả về `Optional<Book>` (vì ISBN unique nên 0 hoặc 1 record).
- `findByAuthor` trả về `List<Book>` (1 author có nhiều book).

---

## ✅ A3 — application.properties

```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/library_db
spring.datasource.username=root
spring.datasource.password=12345
spring.datasource.driver-class-name=com.mysql.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update

# Server
server.port=9090

# Application
spring.application.name=library-service
```

---

## ✅ A4 — BookController + Template

**Controller**:
```java
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/books")
public class BookController {
    
    private final BookRepository bookRepository;
    
    // Constructor injection (slide khuyến nghị, không phải @Autowired field)
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    @GetMapping
    public String listBooks(Model model) {
        model.addAttribute("books", bookRepository.findAll());
        return "bookList";
    }
}
```

**Template `bookList.html`**:
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Book List</title>
</head>
<body>
    <h1>Danh sách sách</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody>
            <tr th:each="book : ${books}">
                <td th:text="${book.title}">Title</td>
                <td th:text="${book.author}">Author</td>
                <td th:text="${book.publishedYear}">2024</td>
                <td th:text="${book.isbn}">ISBN</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

---

<a id="phần-b"></a>
# 🟦 PHẦN B — Lecture 3

## ✅ B1 — Phân tích @RequestMapping

a) URL match `/order.*`:
   - `/order.htm` ✅
   - `/order.html` ✅
   - `/order.xls` ✅
   - `/order.json` ✅
   *(Bất kỳ phần mở rộng nào sau `/order.`)*

b) HTTP methods hỗ trợ: **PUT** và **POST**.

c) Nếu user gửi **GET** request đến `/order.htm`:
   - URL match nhưng method KHÔNG match
   - Spring trả về **405 Method Not Allowed**

---

## ✅ B2 — Multiple argument annotations

```java
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserSearchController {
    
    @GetMapping("/api/users/search")
    public String searchUsers(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer age,
            @RequestHeader("Authorization") String authHeader,
            Model model) {
        
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        model.addAttribute("authHeader", authHeader);
        
        return "userSearchResult";
    }
}
```

**Điểm chú ý**:
- `@RequestParam(required = false)` cho optional params.
- `@RequestHeader("Authorization")` chỉ rõ tên header.
- `Model` để pass attribute sang view.

---

## ✅ B3 — Spring MVC 8‑step Workflow

| Bước | Mô tả ngắn |
|---|---|
| 1 | **The incoming request** — Client gửi HTTP request đến server. |
| 2 | **Dispatching the request to the handler** — `DispatcherServlet` nhận request và dispatch tới handler tương ứng (dựa trên URL mapping). |
| 3 | **Handling the request** — Handler (Controller method) xử lý logic (gọi service, repository...). |
| 4 | **Preparing the model and selecting the view** — Handler chuẩn bị data trong Model và chọn view name. |
| 5 | **Returning ModelAndView object** — Handler trả về `ModelAndView` chứa model + view reference. |
| 6 | **Rendering View with the model** — View (thường là Thymeleaf) được render với data từ Model. |
| 7 | **Returning control to the servlet** — Sau khi render xong, control quay về `DispatcherServlet`. |
| 8 | **Returning the response to the client** — `DispatcherServlet` trả HTTP response về client. |

---

<a id="phần-c"></a>
# 🟦 PHẦN C — Lecture 4

## ✅ C1 — One‑to‑Many

**ER Diagram (text)**:
```
Author (1) -------writes------- (N) Book
   |                                  |
   id (PK)                            id (PK)
   name                               title
   email                              publishedYear
                                      author_id (FK)
```

**Author entity**:
```java
import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;

@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    
    @OneToMany(mappedBy = "author")  // ← inverse side, dùng mappedBy
    private List<Book> books = new ArrayList<>();
    
    // Constructors, getters, setters
}
```

**Book entity** (owning side):
```java
import jakarta.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private int publishedYear;
    
    @ManyToOne  // ← owning side (nắm giữ FK author_id)
    private Author author;
    
    // Constructors, getters, setters
}
```

**Điểm chú ý**:
- **Many side là owning** (`@ManyToOne` trên Book) — đây là best practice slide.
- **One side dùng `mappedBy`** trỏ đến field `author` trong Book.

---

## ✅ C2 — Many‑to‑Many với JoinTable

**Student entity**:
```java
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String studentCode;
    private String fullName;
    
    @ManyToMany
    @JoinTable(
        name = "student_course_enrollment",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses;
    
    // Constructors, getters, setters
}
```

**Course entity**:
```java
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String courseCode;
    private String courseName;
    
    @ManyToMany(mappedBy = "courses")  // inverse side
    private List<Student> students;
    
    // Constructors, getters, setters
}
```

**Điểm chú ý**:
- `@JoinTable` chỉ ở **1 side** (owning side — Student).
- 3 phần của `@JoinTable`: `name`, `joinColumns` (this side), `inverseJoinColumns` (other side).

---

## ✅ C3 — Use Case ATM

**Use case diagram (ASCII)**:
```
                    ┌─────────────────────┐
                    │      System         │
                    │                     │
                    │   ○ Login           │
                    │   ▲                 │
                    │   │ <<include>>     │
            ┌───────┼───┴─────────────┐   │
   Customer ────────● Withdraw Cash    │   │
            ┌───────● Check Balance    │   │
            ┌───────● Change PIN ──────┘   │
                    │                     │
                    └─────────────────────┘
```

**Written use case "Rút tiền"**:

**Use Case**: Withdraw Cash  
**Actor**: Customer

**Normal Flow**:
1. Customer inserts ATM card.
2. System prompts for PIN.
3. Customer enters PIN.
4. System validates PIN successfully.
5. Customer selects "Withdraw Cash".
6. System displays available accounts.
7. Customer selects account & enters amount.
8. System checks sufficient balance.
9. System dispenses cash.
10. System prints receipt.
11. System returns card.

**Alternative Flow**:
- 7a. Customer chooses "Withdraw with receipt option": System prints detailed receipt with account balance after transaction.
- 9a. Customer chooses fast cash (50, 100, 200 USD): System dispenses without prompting amount.

**Exception**:
- 4a. PIN incorrect: System gives 2 more chances. After 3 failed attempts → retain card and notify bank security.
- 8a. Insufficient balance: System shows "Insufficient funds" message → return to menu without dispensing cash.
- 9a. ATM out of cash: System shows "Service temporarily unavailable" → cancel transaction and return card.

---

## ✅ C4 — Cardinality

a) **Person 1 — 1 Passport**: Mỗi người có duy nhất 1 passport, mỗi passport chỉ thuộc về 1 người. **Mandatory** ở cả 2 phía nếu mọi người đều phải có passport.
   - Ví dụ: hệ thống quản lý xuất nhập cảnh.

b) **Customer 1 — N Order**: Một customer có thể đặt nhiều order, mỗi order thuộc về 1 customer. **Mandatory** phía Order (mỗi order phải có owner) — **Optional** phía Customer (customer có thể chưa đặt order nào).
   - Ví dụ: e‑commerce site như Shopee.

c) **Student M — N Course**: Một student đăng ký nhiều course, một course có nhiều student. Cần bảng trung gian (Enrollment).
   - Ví dụ: hệ thống đăng ký môn học của trường đại học.

d) **Employee 1 — N (optional) Project**: Một employee tham gia 0 hoặc nhiều project. Một project thuộc về 1 employee (chủ trì).
   - Ví dụ: hệ thống PM nội bộ.

---

<a id="phần-d"></a>
# 🟦 PHẦN D — Lecture 6

## ✅ D1 — Form đăng ký Thymeleaf

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Đăng ký</title>
</head>
<body>
    <h1>Đăng ký tài khoản</h1>
    <form th:action="@{/register}" th:object="${userTemplate}" method="post">
        
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" th:field="*{username}" />
            <span th:if="${#fields.hasErrors('username')}" 
                  th:errors="*{username}" 
                  style="color:red;">Lỗi username</span>
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" th:field="*{email}" />
            <span th:if="${#fields.hasErrors('email')}" 
                  th:errors="*{email}" 
                  style="color:red;">Lỗi email</span>
        </div>
        
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" th:field="*{password}" />
            <span th:if="${#fields.hasErrors('password')}" 
                  th:errors="*{password}" 
                  style="color:red;">Lỗi password</span>
        </div>
        
        <div>
            <label for="address">Address:</label>
            <input type="text" id="address" th:field="*{address}" />
        </div>
        
        <button type="submit">Đăng ký</button>
    </form>
</body>
</html>
```

**Điểm chú ý**:
- `th:object="${userTemplate}"` ở thẻ form.
- `th:field="*{username}"` selection expression (thay thế cho `${userTemplate.username}` ngắn hơn).
- `th:if="${#fields.hasErrors('username')}"` để check lỗi.
- `th:errors="*{username}"` để hiển thị lỗi.

---

## ✅ D2 — Spring Security Configuration

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(c -> c.disable())
            .authorizeHttpRequests(req -> req
                // specific rules trước, general sau
                .requestMatchers("/", "/register", "/login").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard", true)
                .failureUrl("/login?error=true")
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout=true")
                .permitAll()
            )
            .build();
    }
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

**Điểm chú ý**:
- `@Configuration` + `@EnableWebSecurity` — 2 annotation BẮT BUỘC.
- Order: specific URL trước (`/register`, `/admin/**`), general (`anyRequest()`) sau.
- `hasRole("ADMIN")` thay vì `hasAuthority("ROLE_ADMIN")` (Spring tự thêm prefix `ROLE_`).
- Bean `PasswordEncoder` riêng để inject vào registration controller.

---

## ✅ D3 — Thymeleaf Fragment

**File `templates/fragments/footer.html`**:
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<body>
    <div th:fragment="copyright">
        © 2026 HANU FIT - All rights reserved
    </div>
</body>
</html>
```

**File `home.html`**:
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<body>
    <h1>Home</h1>
    
    <!-- Cách 1: th:replace -->
    <div th:replace="~{fragments/footer :: copyright}"></div>
    
    <!-- Cách 2: th:insert -->
    <div th:insert="~{fragments/footer :: copyright}"></div>
</body>
</html>
```

**HTML output dự kiến**:

Với `th:replace` (thay thế host tag):
```html
<div>
    © 2026 HANU FIT - All rights reserved
</div>
```

Với `th:insert` (giữ host tag, insert fragment làm body):
```html
<div>
    <div>
        © 2026 HANU FIT - All rights reserved
    </div>
</div>
```

→ **`th:replace`** cho HTML gọn hơn. **`th:insert`** giữ thẻ wrapper.

---

## ✅ D4 — Thymeleaf Expression

a) `<p th:text="${user.name}">name</p>` → `<p>An</p>`
b) `<p th:text="*{age}">age</p>` (với `th:object="${user}"`) → `<p>20</p>`
c) `<a th:href="@{/profile/{id}(id=${user.id})}">Profile</a>` → `<a href="/profile/5">Profile</a>`

---

<a id="phần-e"></a>
# 🟦 PHẦN E — Lecture 7

## ✅ E1 — Derived Queries

```java
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // a) Tìm chính xác theo firstName
    List<Employee> findByFirstName(String firstName);
    // SQL: SELECT * FROM employee WHERE first_name = ?1
    
    // b) firstName chứa từ khóa
    List<Employee> findByFirstNameContaining(String keyword);
    // SQL: SELECT * FROM employee WHERE first_name LIKE %?1% (parameter wrapped in %)
    
    // c) firstName bắt đầu bằng từ khóa
    List<Employee> findByFirstNameStartingWith(String keyword);
    // SQL: SELECT * FROM employee WHERE first_name LIKE ?1% (% appended)
    
    // d) age >= 30 AND department = "IT"
    List<Employee> findByAgeGreaterThanEqualAndDepartment(int age, String department);
    // SQL: SELECT * FROM employee WHERE age >= ?1 AND department = ?2
    
    // e) lastName không phân biệt hoa thường
    List<Employee> findByLastNameIgnoreCase(String lastName);
    // SQL: SELECT * FROM employee WHERE UPPER(last_name) = UPPER(?1)
    
    // f) Distinct departments
    List<Employee> findDistinctByDepartment(String department);
    // SQL: SELECT DISTINCT * FROM employee WHERE department = ?1
}
```

**Điểm chú ý**:
- `Containing` wrap **`%X%`** ở cả 2 phía.
- `StartingWith` chỉ append `%` (`X%`).
- `EndingWith` chỉ prepend `%` (`%X`).
- `IgnoreCase` generate `UPPER(field) = UPPER(?)`.

---

## ✅ E2 — Criteria API Dynamic Query

```java
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

public class EmployeeService {
    
    private final EntityManager entityManager;
    
    public EmployeeService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    
    public List<Employee> searchEmployees(String name, Integer minAge, String department) {
        // a) 3 components cốt lõi
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
        Root<Employee> root = cq.from(Employee.class);
        
        // b) Build predicates dynamically
        List<Predicate> predicates = new ArrayList<>();
        
        if (name != null) {
            predicates.add(cb.like(root.get("firstName"), "%" + name + "%"));
        }
        if (minAge != null) {
            predicates.add(cb.greaterThanOrEqualTo(root.get("age"), minAge));
        }
        if (department != null) {
            predicates.add(cb.equal(root.get("department"), department));
        }
        
        // c) Apply predicates (implicit AND)
        if (!predicates.isEmpty()) {
            cq.where(predicates.toArray(new Predicate[0]));
        }
        
        // d) Order by lastName ASC
        cq.orderBy(cb.asc(root.get("lastName")));
        
        // e) Execute and return
        return entityManager.createQuery(cq).getResultList();
    }
}
```

**Điểm chú ý**:
- 3 components: **CriteriaBuilder, CriteriaQuery, Root** (slide nhấn mạnh).
- Predicate combine via array (implicit AND).
- `cb.asc()` cho ordering.

---

<a id="phần-f"></a>
# 🟦 PHẦN F — Lecture 8

## ✅ F1 — Validation Annotations

```java
import jakarta.validation.constraints.*;

public class Product {
    
    @NotNull(message = "Name không được để trống")
    @Size(min = 3, max = 100, message = "Name phải từ 3 đến 100 ký tự")
    private String name;
    
    @DecimalMin(value = "0.01", message = "Giá tối thiểu là 0.01")
    @DecimalMax(value = "999999.99", message = "Giá tối đa là 999999.99")
    private double price;
    
    @Min(value = 0, message = "Stock không được âm")
    private int stock;
    
    @Pattern(regexp = ".+@.+\\..+", message = "Email không đúng định dạng")
    private String email;
    
    @NotNull(message = "SKU không được để trống")
    @Pattern(regexp = "^[A-Z]{3}\\d{4}$", message = "SKU phải gồm 3 chữ in hoa + 4 chữ số")
    private String sku;
    
    // Getters, Setters
}
```

**Lưu ý**: Slide chỉ liệt kê 4 annotation phổ biến (`@NotNull`, `@Size`, `@Min/@Max`, `@Pattern`). Câu này có dùng `@DecimalMin/@DecimalMax` cho double — nếu không nhớ có thể thay bằng `@Min`/`@Max` (vẫn được điểm vì idea đúng).

---

## ✅ F2 — Controller với @Valid

```java
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/products")
public class ProductController {
    
    private final ProductRepository productRepository;
    
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    @PostMapping("/add")
    public String addProduct(@Valid Product product, BindingResult result, Model model) {
        if (result.hasErrors()) {
            // Re‑render form với errors
            return "productForm";
        }
        productRepository.save(product);
        model.addAttribute("success", true);
        return "redirect:/products";
    }
}
```

**Điểm chú ý**:
- `BindingResult` **PHẢI** đứng **NGAY SAU** `@Valid` parameter.
- Errors **không throw exception** — bạn check `result.hasErrors()` thủ công.
- `redirect:/products` để PRG pattern (Post‑Redirect‑Get) — tránh duplicate submit khi refresh.

---

## ✅ F3 — MyUserDetails (Recommended)

```java
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MyUserDetails implements UserDetails {
    
    private final User user;  // composition (wrap User entity)
    
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
        // Parse "USER,ADMIN" → 2 SimpleGrantedAuthority
        if (user.getRoles() == null || user.getRoles().isBlank()) {
            return List.of();
        }
        return Arrays.stream(user.getRoles().split(","))
            .map(String::trim)
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());
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

**Điểm chú ý**:
- **Composition** (wrap User), KHÔNG implements UserDetails trên User entity (slide khuyến nghị).
- `ROLE_` prefix Spring quy ước cho `hasRole()` matching.
- 7 methods phải đầy đủ.

---

## ✅ F4 — JpaUserDetailsService

```java
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class JpaUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepo;
    
    // Constructor injection (slide khuyến nghị, KHÔNG dùng @Autowired field)
    public JpaUserDetailsService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) 
            throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByUsername(username);
        if (user.isPresent()) {
            return new MyUserDetails(user.get());
        }
        throw new UsernameNotFoundException("User not found: " + username);
    }
}
```

**Điểm chú ý**:
- Constructor injection (slide ghi `@Autowired` field NOT recommended).
- Throw `UsernameNotFoundException` (KHÔNG return null).

---

<a id="phần-g"></a>
# 🟦 PHẦN G — Design Patterns

## ✅ G1 — Singleton (Lazy)

```java
public class DatabaseConnection {
    
    private static DatabaseConnection instance;  // 1 lưu trữ duy nhất
    
    private DatabaseConnection() {}  // private constructor!
    
    public static DatabaseConnection getInstance() {  // global access point
        if (instance == null) {  // lazy: chỉ tạo khi cần
            instance = new DatabaseConnection();
        }
        return instance;
    }
    
    public void connect() {
        System.out.println("Connected to DB");
    }
}

// Client usage:
// DatabaseConnection db = DatabaseConnection.getInstance();
// db.connect();
```

**Điểm chú ý**:
- Constructor PHẢI private (chống `new` từ ngoài).
- `getInstance()` static.
- **Lazy**: chỉ tạo khi gọi lần đầu.

---

## ✅ G2 — Factory Pattern

```java
// Interface
interface Notification {
    void send(String message);
}

// 3 concrete classes
class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

class SMSNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("SMS sent: " + message);
    }
}

class PushNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Push notification sent: " + message);
    }
}

// Factory
class NotificationFactory {
    public static Notification create(String type) {
        if ("email".equalsIgnoreCase(type)) return new EmailNotification();
        if ("sms".equalsIgnoreCase(type))   return new SMSNotification();
        if ("push".equalsIgnoreCase(type))  return new PushNotification();
        throw new IllegalArgumentException("Unknown type: " + type);
    }
}

// Client
public class Demo {
    public static void main(String[] args) {
        Notification n1 = NotificationFactory.create("email");  // KHÔNG `new EmailNotification()`
        n1.send("Hello!");
        
        Notification n2 = NotificationFactory.create("sms");
        n2.send("Hi via SMS!");
    }
}
```

**Điểm chú ý**:
- Client **không** dùng `new EmailNotification()` trực tiếp.
- Factory ẩn logic instantiation.

---

## ✅ G3 — Builder Pattern

```java
public class Computer {
    private final String cpu;
    private final int ram;
    private final int storage;
    private final String graphics;
    private final String os;
    
    // Private constructor; chỉ Builder mới gọi được
    private Computer(Builder b) {
        this.cpu = b.cpu;
        this.ram = b.ram;
        this.storage = b.storage;
        this.graphics = b.graphics;
        this.os = b.os;
    }
    
    public static class Builder {
        private String cpu;
        private int ram;
        private int storage;
        private String graphics;
        private String os;
        
        public Builder setCpu(String cpu)        { this.cpu = cpu; return this; }
        public Builder setRam(int ram)           { this.ram = ram; return this; }
        public Builder setStorage(int storage)   { this.storage = storage; return this; }
        public Builder setGraphics(String g)     { this.graphics = g; return this; }
        public Builder setOs(String os)          { this.os = os; return this; }
        
        public Computer build() {
            return new Computer(this);
        }
    }
    
    // Getters
    public String getCpu() { return cpu; }
    public int getRam() { return ram; }
    // ...
}

// Client
public class Demo {
    public static void main(String[] args) {
        Computer pc = new Computer.Builder()
            .setCpu("i7")
            .setRam(16)
            .setStorage(512)
            .build();  // graphics & os để default null/0
    }
}
```

**Điểm chú ý**:
- Builder methods return **`this`** để chain.
- `build()` return Computer.
- Có thể skip optional fields.

---

## ✅ G4 — Strategy Pattern

```java
// Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// 3 concrete strategies
class CashPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Pay " + amount + " in cash");
    }
}

class CreditCardPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Charge " + amount + " to credit card");
    }
}

class EWalletPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Deduct " + amount + " from e-wallet");
    }
}

// Context (uses composition!)
class ShoppingCart {
    private PaymentStrategy strategy;
    
    public void setStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    
    public void checkout(double total) {
        strategy.pay(total);
    }
}

// Client
public class Demo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        
        cart.setStrategy(new CashPayment());
        cart.checkout(100);
        
        cart.setStrategy(new CreditCardPayment());
        cart.checkout(200);
        
        cart.setStrategy(new EWalletPayment());
        cart.checkout(150);
    }
}
```

**Điểm chú ý**:
- Strategy dùng **composition** (HAS‑A) — ShoppingCart chứa PaymentStrategy.
- Có thể đổi strategy runtime.

---

## ✅ G5 — Observer Pattern

```java
import java.util.ArrayList;
import java.util.List;

// Observer interface
interface Observer {
    void update(String news);
}

// Subject
class NewsAgency {
    private List<Observer> observers = new ArrayList<>();
    
    public void subscribe(Observer o) {
        observers.add(o);
    }
    
    public void unsubscribe(Observer o) {
        observers.remove(o);
    }
    
    public void publish(String news) {
        for (Observer o : observers) {
            o.update(news);
        }
    }
}

// Concrete observers
class Newspaper implements Observer {
    private String name;
    
    public Newspaper(String name) {
        this.name = name;
    }
    
    @Override
    public void update(String news) {
        System.out.println("Newspaper [" + name + "] prints: " + news);
    }
}

class RadioStation implements Observer {
    private String channel;
    
    public RadioStation(String channel) {
        this.channel = channel;
    }
    
    @Override
    public void update(String news) {
        System.out.println("Radio [" + channel + "] broadcasts: " + news);
    }
}

// Client
public class Demo {
    public static void main(String[] args) {
        NewsAgency agency = new NewsAgency();
        Observer paper = new Newspaper("HANU Daily");
        Observer radio = new RadioStation("FM 99.9");
        
        agency.subscribe(paper);
        agency.subscribe(radio);
        
        agency.publish("Breaking: SE2 exam tomorrow!");
        // Output:
        // Newspaper [HANU Daily] prints: Breaking: SE2 exam tomorrow!
        // Radio [FM 99.9] broadcasts: Breaking: SE2 exam tomorrow!
    }
}
```

**Điểm chú ý**:
- Subject quản lý list observers.
- Khi state thay đổi (publish) → notify mọi observer (loose coupling).

---

## ✅ G6 — Identify Pattern

| Scenario | Pattern | Lý do |
|---|---|---|
| 1 | **Singleton** | "1 instance duy nhất, dùng chung" — đặc trưng Singleton (Spring Beans) |
| 2 | **Builder** | Chained method calls + `.build()` cuối cùng |
| 3 | **Chain of Responsibility** | "Chain of filters", mỗi filter có cơ hội xử lý → pass next hoặc block |
| 4 | **Adapter** (còn gọi Wrapper) | Class trung gian chuyển đổi interface không tương thích |
| 5 | **Command** | Encapsulate request thành object để queue, undo, redo |

---

<a id="phần-h"></a>
# 🟦 PHẦN H — ĐỀ TỔNG HỢP — ĐÁP ÁN MẪU

## ✅ Câu 1 — Entity & Repository (2.5 điểm)

**User entity**:
```java
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String username;
    
    private String password;
    private String email;
    private String roles;  // "USER,ADMIN"
    
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private List<Post> posts;
    
    // Constructors, getters, setters...
    public User() {}
    public User(String username, String password, String email, String roles) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.roles = roles;
    }
    
    // Getters/Setters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public void setUsername(String u) { this.username = u; }
    public String getPassword() { return password; }
    public void setPassword(String p) { this.password = p; }
    public String getEmail() { return email; }
    public void setEmail(String e) { this.email = e; }
    public String getRoles() { return roles; }
    public void setRoles(String r) { this.roles = r; }
    public List<Post> getPosts() { return posts; }
}
```

**Post entity**:
```java
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    private LocalDateTime createdAt;
    
    @ManyToOne  // owning side
    @JoinColumn(name = "author_id")
    private User author;
    
    // Constructors, getters, setters
    public Post() {}
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String t) { this.title = t; }
    public String getContent() { return content; }
    public void setContent(String c) { this.content = c; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime d) { this.createdAt = d; }
    public User getAuthor() { return author; }
    public void setAuthor(User u) { this.author = u; }
}
```

**Repositories**:
```java
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByAuthor(User author);
    List<Post> findByTitleContaining(String keyword);
}
```

---

## ✅ Câu 2 — Validation + Registration (2 điểm)

**UserTemplate**:
```java
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

public class UserTemplate {
    
    @Length(min = 6, max = 60, message = "Username phải từ 6 đến 60 ký tự")
    private String username;
    
    @Pattern(
        regexp = "^(?=.*\\d)(?=.*[A-Z]).{6,60}$",
        message = "Password phải có ít nhất 1 chữ số, 1 chữ in hoa, độ dài 6-60"
    )
    private String password;
    
    @Pattern(regexp = ".+@.+\\..+", message = "Email không đúng định dạng")
    private String email;
    
    private String address;
    
    // Getters & setters
    public String getUsername() { return username; }
    public void setUsername(String u) { this.username = u; }
    public String getPassword() { return password; }
    public void setPassword(String p) { this.password = p; }
    public String getEmail() { return email; }
    public void setEmail(String e) { this.email = e; }
    public String getAddress() { return address; }
    public void setAddress(String a) { this.address = a; }
}
```

**Controller**:
```java
import jakarta.validation.Valid;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthController {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    @GetMapping("/register")
    public String showRegister(Model model) {
        model.addAttribute("userTemplate", new UserTemplate());
        return "register";
    }
    
    @PostMapping("/register")
    public String handleRegister(@Valid UserTemplate ut, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("userTemplate", ut);
            return "register";
        }
        userRepository.save(new User(ut, passwordEncoder));
        model.addAttribute("success", true);
        model.addAttribute("userTemplate", new UserTemplate());
        return "register";
    }
}
```

**Lưu ý**: Cần thêm constructor `User(UserTemplate, PasswordEncoder)` trong User entity:
```java
public User(UserTemplate ut, PasswordEncoder encoder) {
    this.username = ut.getUsername();
    this.password = encoder.encode(ut.getPassword());  // ← encode raw password
    this.email = ut.getEmail();
    this.roles = "USER";  // default
}
```

---

## ✅ Câu 3 — Security Config (2 điểm)

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    private final JpaUserDetailsService userDetailsService;
    
    public SecurityConfig(JpaUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }
    
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .userDetailsService(userDetailsService)
            .csrf(c -> c.disable())  // disable for simplicity
            .authorizeHttpRequests(req -> req
                .requestMatchers("/", "/register", "/login").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard", true)
                .failureUrl("/login?error=true")
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout=true")
                .permitAll()
            )
            .build();
    }
    
    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

---

## ✅ Câu 4 — Controller my‑posts (1.5 điểm)

```java
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class PostController {
    
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    
    public PostController(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    
    @GetMapping("/my-posts")
    public String myPosts(Model model) {
        // Lấy username của user đang login
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        
        // Tìm User
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Lấy posts của user
        List<Post> posts = postRepository.findByAuthor(user);
        
        model.addAttribute("posts", posts);
        return "myPosts";
    }
}
```

---

## ✅ Câu 5 — Thymeleaf Template myPosts.html (1 điểm)

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>My Posts</title>
</head>
<body>
    <h1>Bài viết của tôi</h1>
    
    <div th:if="${#lists.isEmpty(posts)}">
        <p>Bạn chưa có bài viết nào.</p>
    </div>
    
    <div th:unless="${#lists.isEmpty(posts)}">
        <ul>
            <li th:each="post : ${posts}">
                <h3>
                    <a th:href="@{/posts/{id}(id=${post.id})}" 
                       th:text="${post.title}">Title</a>
                </h3>
                <p th:text="${#strings.abbreviate(post.content, 100)}">Preview</p>
                <small th:text="${#temporals.format(post.createdAt, 'dd/MM/yyyy')}">Date</small>
            </li>
        </ul>
    </div>
</body>
</html>
```

**Điểm chú ý**:
- `#lists.isEmpty(...)` để check empty.
- `#strings.abbreviate(content, 100)` để cắt 100 ký tự đầu.
- `#temporals.format(date, 'dd/MM/yyyy')` để format LocalDateTime.
- `@{/posts/{id}(id=${post.id})}` cho dynamic URL.

---

## ✅ Câu 6 — Identify Patterns (1 điểm)

| Scenario | Pattern | Lý do |
|---|---|---|
| a) Spring Beans | **Singleton** | Spring tạo 1 instance per type per IoC container, dùng chung |
| b) HttpSecurity chain | **Builder** | Chained method calls + `.build()` ở cuối |
| c) MyUserDetails wrap User | **Adapter** (hoặc DTO/Decorator wrapper) | Wrap User entity để adapt với UserDetails interface (slide nói User entity không nên implements UserDetails trực tiếp — class wrapper là adapter) |
| d) Security filter chain | **Chain of Responsibility** | Chuỗi filter, mỗi filter có cơ hội xử lý request |
| e) PasswordEncoder injection | **Strategy** | `BCryptPasswordEncoder` là 1 strategy implement interface `PasswordEncoder`, có thể swap với strategy khác (vd: `Argon2PasswordEncoder`) |

(Chọn 3+ trong 5 → đủ điểm.)

---

# 🎯 LỜI NHẮC KHI CHẤM

Khi tự chấm điểm bản thân:
- **Annotation chính xác**: `@Entity`, `@Id`, `@GeneratedValue` — thiếu = trừ điểm.
- **Best practice slide**:
  - `@ManyToOne` = owning side (không phải `@OneToMany`)
  - Constructor injection (không phải `@Autowired` field)
  - MyUserDetails approach (không phải User implements UserDetails)
- **Order matters trong `authorizeHttpRequests`**: specific → general
- **Trong validation form POST**: `BindingResult` ngay sau `@Valid`
- **Form POST → @ModelAttribute hoặc binding tự động**, KHÔNG dùng `@RequestBody` (lỗi 415)

**Bạn đạt được**:
- 9‑10đ → Excellent, sẵn sàng thi
- 7‑8đ → Good, ôn lại điểm yếu
- 5‑6đ → Cần thêm thời gian luyện tập
- < 5đ → Phải đọc lại các file lecX.md tương ứng

---

**Chúc bạn đạt điểm cao! 🍀**
