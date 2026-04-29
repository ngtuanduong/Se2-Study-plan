# 📝 SE2 — BỘ ĐỀ LUYỆN TẬP TỰ LUẬN (CODE TRÊN GIẤY)

> **Phong cách**: Bám sát Lec 2–11 của HANU. Các bài chia nhỏ theo lecture, tăng dần độ khó.
> **Cách dùng**: Lấy bút + giấy A4, bấm timer, tự code không nhìn note. Sau khi làm xong → mở [solutions.md](solutions.md) để check.
> **Ước lượng điểm**: dựa trên độ phức tạp + thời gian (giả định scale 10đ).

---

## 📑 MỤC LỤC

- [PHẦN A — Lecture 2: Spring Boot, Entity, Repository, Controller cơ bản](#phần-a)
- [PHẦN B — Lecture 3: Spring MVC Controllers nâng cao](#phần-b)
- [PHẦN C — Lecture 4: Hibernate Relationships (OneToMany, ManyToMany)](#phần-c)
- [PHẦN D — Lecture 6: Thymeleaf + Spring Security config](#phần-d)
- [PHẦN E — Lecture 7: JPA Derived Queries + Criteria API](#phần-e)
- [PHẦN F — Lecture 8: Validation + JPA‑based Authentication](#phần-f)
- [PHẦN G — Lecture 9–11: Design Patterns Implementation](#phần-g)
- [PHẦN H — ĐỀ TỔNG HỢP (mô phỏng đề thi 60 phút)](#phần-h)

---

<a id="phần-a"></a>
# 🟦 PHẦN A — Lecture 2 (Spring Boot căn bản)

## Bài A1 — Tạo Entity cơ bản (1.5 điểm)

Bạn đang xây dựng hệ thống quản lý thư viện. Hãy tạo class entity `Book` cho Spring Data JPA với các yêu cầu:

a) Class `Book` được map sang bảng database tên `books`.
b) Có các thuộc tính: `id` (Long, primary key, auto‑generated bởi DB), `title` (String, map sang cột `book_title`), `author` (String), `publishedYear` (int), `isbn` (String).
c) Bao gồm getter/setter cho mọi field.

**Yêu cầu**: Viết class hoàn chỉnh kèm tất cả annotation cần thiết.

---

## Bài A2 — Tạo Repository (1 điểm)

Dựa trên entity `Book` ở Bài A1, hãy:

a) Viết interface `BookRepository` để thực hiện các CRUD operation.
b) Bổ sung 2 method derived query:
   - Tìm tất cả sách theo tên tác giả.
   - Tìm sách theo ISBN.

---

## Bài A3 — Spring Boot Configuration (1 điểm)

Bạn đang cấu hình kết nối MySQL cho project Spring Boot. Hãy viết nội dung file `application.properties` để:

a) Kết nối MySQL ở `localhost:3306`, database `library_db`, username `root`, password `12345`.
b) Cho Hibernate tự động cập nhật schema khi entity thay đổi.
c) Đặt server chạy ở port `9090`.
d) Đặt tên ứng dụng là `library-service`.

---

## Bài A4 — Controller hiển thị danh sách (2 điểm)

Tạo class `BookController` cho phép user xem danh sách sách:

a) Khi user truy cập `/books`, controller gọi `BookRepository.findAll()` và trả về template `bookList`.
b) Truyền danh sách sách qua model với key `"books"`.
c) Viết template Thymeleaf `bookList.html` hiển thị bảng gồm: Title, Author, Published Year, ISBN. Mỗi sách 1 dòng.

**Lưu ý**: Sử dụng `@Autowired` hoặc constructor injection (slide khuyến nghị constructor).

---

<a id="phần-b"></a>
# 🟦 PHẦN B — Lecture 3 (Spring MVC Controllers nâng cao)

## Bài B1 — Phân tích `@RequestMapping` (1 điểm)

Cho đoạn code sau:

```java
@Controller
@RequestMapping("/order.*")
public class OrderController {
    @RequestMapping(method = {RequestMethod.PUT, RequestMethod.POST})
    public String processOrder() {
        return "processOrder";
    }
}
```

Trả lời các câu hỏi:

a) URL nào sẽ match? Liệt kê 3 URL hợp lệ.
b) HTTP method nào được hỗ trợ?
c) Nếu user gửi GET request đến `/order.htm`, điều gì xảy ra?

---

## Bài B2 — Multiple argument annotations (2 điểm)

Viết controller method xử lý request sau:

a) URL: `/api/users/search`
b) HTTP method: GET
c) Nhận 2 query parameter: `name` (String, optional) và `age` (Integer, optional).
d) Lấy header `Authorization` từ request.
e) Trả về view name "userSearchResult" với các attribute trong model: `name`, `age`, `authHeader`.

**Yêu cầu**: Dùng đúng các annotation đã học (`@RequestParam`, `@RequestHeader`, `Model`).

---

## Bài B3 — Vẽ Spring MVC Workflow (1.5 điểm)

Liệt kê **8 bước** của Spring MVC Request Handling Workflow theo đúng thứ tự, kèm giải thích ngắn cho mỗi bước (1 câu/bước).

---

<a id="phần-c"></a>
# 🟦 PHẦN C — Lecture 4 (Hibernate Relationships)

## Bài C1 — One‑to‑Many (2 điểm)

Một **Author** có thể viết nhiều **Book**. Mỗi **Book** chỉ thuộc về 1 Author duy nhất.

a) Vẽ ER diagram thể hiện quan hệ này (chỉ cần text/ASCII, không cần phần mềm).
b) Viết 2 entity class `Author` và `Book` với annotation Hibernate.
c) Áp dụng best practice: phía `Book` (many side) là **owning side**, phía `Author` (one side) dùng `mappedBy`.
d) Author có các field: `id`, `name`, `email`. Book có: `id`, `title`, `publishedYear`, và reference đến Author.

---

## Bài C2 — Many‑to‑Many với JoinTable (2 điểm)

Sinh viên (`Student`) có thể đăng ký nhiều khóa học (`Course`). Mỗi khóa học có nhiều sinh viên.

a) Viết 2 entity class `Student` và `Course`.
b) Cấu hình `@JoinTable` cho relationship với:
   - Join table tên `student_course_enrollment`
   - Cột phía `Student`: `student_id`
   - Cột phía `Course`: `course_id`
c) Student có: `id`, `studentCode`, `fullName`. Course có: `id`, `courseCode`, `courseName`.

---

## Bài C3 — Use Case Diagram + Written Use Case (1.5 điểm)

Cho hệ thống ATM với các chức năng: rút tiền, kiểm tra số dư, đổi PIN, đăng nhập.

a) Vẽ use case diagram (text/ASCII): xác định actor và use cases. Sử dụng `<<include>>` cho login (vì rút tiền và kiểm tra số dư đều cần login trước).
b) Viết written use case cho "Rút tiền" với 3 sections: **Normal Flow**, **Alternative Flow**, **Exception**.

---

## Bài C4 — Cardinality (0.5 điểm)

Cho 4 cardinality combination dưới đây, mô tả ý nghĩa và đưa ra ví dụ thực tế:

a) Person 1 — 1 Passport
b) Customer 1 — N Order
c) Student M — N Course
d) Employee 1 — N (optional) Project

---

<a id="phần-d"></a>
# 🟦 PHẦN D — Lecture 6 (Thymeleaf + Spring Security)

## Bài D1 — Form đăng ký bằng Thymeleaf (2 điểm)

Tạo template Thymeleaf `register.html` cho form đăng ký user mới:

a) Form submit POST đến URL `/register`.
b) Bind với object `userTemplate` qua `th:object`.
c) Gồm 4 input field: `username`, `email`, `password`, `address`.
d) Mỗi input dùng `th:field` (selection expression).
e) Hiển thị thông báo lỗi cho field `username` nếu có (dùng `th:if` + `#fields.hasErrors` + `th:errors`).
f) Nút submit: "Đăng ký".

---

## Bài D2 — Spring Security Configuration (2.5 điểm)

Viết class cấu hình Spring Security có yêu cầu:

a) Class tên `SecurityConfig`, có 2 annotation cần thiết.
b) Bean `SecurityFilterChain` với cấu hình:
   - URL `/`, `/register`, `/login` cho phép truy cập **không cần login**.
   - URL `/admin/**` chỉ cho phép user có role **ADMIN**.
   - Mọi URL khác yêu cầu phải authenticated.
c) Custom form login: trang login ở `/login`, sau khi login thành công redirect đến `/dashboard`, fail thì `/login?error=true`.
d) Custom logout: URL logout là `/logout`, sau logout redirect `/login?logout=true`.
e) Disable CSRF (cho đơn giản).
f) Bean `BCryptPasswordEncoder` để mã hóa password.

**Gợi ý**: Order rule trong `authorizeHttpRequests` quan trọng — specific trước, general sau.

---

## Bài D3 — Thymeleaf Fragment (1 điểm)

Tạo:

a) File `fragments/footer.html` định nghĩa fragment tên `copyright` hiển thị `"© 2026 HANU FIT - All rights reserved"`.
b) Trong file `home.html`, include fragment đó dùng `th:replace`. Ngoài ra, cũng include fragment cùng đó dùng `th:insert` để so sánh kết quả.
c) Sau khi render, `th:insert` và `th:replace` khác nhau như thế nào? Viết HTML output dự kiến cho mỗi cách.

---

## Bài D4 — Thymeleaf Expression (0.5 điểm)

Cho biết kết quả của các Thymeleaf expression sau (giả sử `user` là object có field `name="An"`, `age=20`):

a) `<p th:text="${user.name}">name</p>`
b) `<p th:text="*{age}">age</p>` (giả sử có `th:object="${user}"` ở thẻ cha)
c) `<a th:href="@{/profile/{id}(id=${user.id})}">Profile</a>` (giả sử `user.id=5`)

---

<a id="phần-e"></a>
# 🟦 PHẦN E — Lecture 7 (JPA Queries + Criteria API)

## Bài E1 — Derived Queries (2 điểm)

Cho entity `Employee` có các field: `id`, `firstName`, `lastName`, `age`, `department`, `salary`. Viết các method trong `EmployeeRepository extends JpaRepository<Employee, Long>` để thực hiện các query:

a) Tìm employee theo `firstName` (chính xác).
b) Tìm employee có `firstName` chứa từ khóa.
c) Tìm employee có `firstName` bắt đầu bằng từ khóa.
d) Tìm employee có `age >= 30` AND `department = "IT"`.
   *(Gợi ý: dùng `findByAgeGreaterThanEqualAndDepartment` + xác nhận operator có hỗ trợ)*
e) Tìm employee không phân biệt hoa thường theo `lastName`.
f) Tìm các department khác biệt (distinct).

**Yêu cầu**: Với mỗi method, ghi chú JPQL/SQL tương đương được generate.

---

## Bài E2 — Criteria API Dynamic Query (2.5 điểm)

Viết một method `searchEmployees` nhận 3 tham số optional: `name` (String, có thể null), `minAge` (Integer, có thể null), `department` (String, có thể null). Trả về `List<Employee>`.

Yêu cầu sử dụng **Criteria API** để build query động — chỉ thêm điều kiện vào WHERE nếu tham số tương ứng != null.

a) Khai báo 3 component cốt lõi của Criteria API.
b) Build danh sách Predicate dựa trên tham số.
c) Apply predicate vào `cq.where(...)`.
d) Order kết quả theo `lastName` ASC.
e) Execute query và trả về list.

---

<a id="phần-f"></a>
# 🟦 PHẦN F — Lecture 8 (Validation + Auth)

## Bài F1 — Hibernate Validation Annotations (1.5 điểm)

Cho class `Product`. Hãy thêm các validation annotation phù hợp:

```java
public class Product {
    private String name;       // không được null, độ dài 3-100 ký tự
    private double price;      // giá trị tối thiểu 0.01, tối đa 999999.99
    private int stock;         // giá trị tối thiểu 0
    private String email;      // phải đúng format email (regex: .+@.+\..+)
    private String sku;        // không null, đúng format: 3 chữ in hoa + 4 chữ số (vd: ABC1234)
}
```

a) Thêm các annotation từ `jakarta.validation.constraints.*` phù hợp với mỗi field.
b) Bổ sung message lỗi cho từng annotation.

---

## Bài F2 — Controller xử lý form với @Valid (1.5 điểm)

Viết controller method xử lý POST `/products/add`:

a) Bind form data vào object `Product`.
b) Trigger validation bằng `@Valid`.
c) Nếu có lỗi validation → trả về template `productForm` (re‑render form).
d) Nếu không có lỗi → save vào DB (giả định có `productRepository`), redirect đến `/products` và hiển thị thông báo thành công.

---

## Bài F3 — UserDetails Implementation (Approach #2 — Recommended) (2.5 điểm)

Cho entity `User` đã có sẵn (`username`, `password`, `roles` dạng comma‑separated như `"USER,ADMIN"`):

a) Tạo class `MyUserDetails` (cách RECOMMENDED, KHÔNG phải User implements UserDetails).
b) Class này wrap object `User` qua composition.
c) Implement đầy đủ 7 method của `UserDetails` interface.
d) Method `getAuthorities()` parse string `roles` thành `List<GrantedAuthority>` (vd: `"USER,ADMIN"` → 2 SimpleGrantedAuthority).
e) Các method `isAccountNonExpired`, `isAccountNonLocked`, `isCredentialsNonExpired`, `isEnabled` trả về `true` (đơn giản hóa).

---

## Bài F4 — JpaUserDetailsService (1.5 điểm)

Viết class `JpaUserDetailsService` thực thi `UserDetailsService`:

a) Inject `UserRepository` qua **constructor injection** (KHÔNG dùng @Autowired field — slide khuyến nghị).
b) Override method `loadUserByUsername(String username)`:
   - Tìm User trong DB qua `userRepo.findByUsername(username)` (giả định trả về `Optional<User>`).
   - Nếu tìm thấy: wrap bằng `MyUserDetails` và return.
   - Nếu không: throw `UsernameNotFoundException`.

---

<a id="phần-g"></a>
# 🟦 PHẦN G — Design Patterns Implementation (Lec 9‑11)

## Bài G1 — Singleton Pattern (Lazy) (1 điểm)

Implement Singleton pattern cho class `DatabaseConnection`:

a) Class chỉ có 1 instance duy nhất trong toàn bộ ứng dụng.
b) Sử dụng **lazy instantiation** (chỉ tạo khi `getInstance()` được gọi lần đầu).
c) Constructor private.
d) Method `connect()` in ra `"Connected to DB"`.

---

## Bài G2 — Factory Pattern (1.5 điểm)

Bạn có 3 loại notification: `EmailNotification`, `SMSNotification`, `PushNotification`. Tất cả implement interface `Notification` với method `void send(String message)`.

a) Viết interface `Notification` và 3 class concrete.
b) Viết class `NotificationFactory` với static method `create(String type)` trả về instance phù hợp dựa trên type ("email", "sms", "push").
c) Viết đoạn code client minh họa cách sử dụng (KHÔNG dùng `new EmailNotification()` trực tiếp).

---

## Bài G3 — Builder Pattern (1.5 điểm)

Tạo class `Computer` với nhiều field optional: `cpu` (String), `ram` (int, GB), `storage` (int, GB), `graphics` (String), `os` (String).

a) Viết class `Computer` với private fields + getter.
b) Viết static inner class `Builder` cho phép chain method:
   - `setCpu(String)`
   - `setRam(int)`
   - `setStorage(int)`
   - `setGraphics(String)`
   - `setOs(String)`
   - `build()` return Computer
c) Viết đoạn client tạo 1 `Computer` với CPU "i7", RAM 16, Storage 512, dùng builder.

---

## Bài G4 — Strategy Pattern (1.5 điểm)

Một e‑commerce app cần hỗ trợ 3 phương thức thanh toán: tiền mặt, thẻ tín dụng, ví điện tử.

a) Tạo interface `PaymentStrategy` với method `pay(double amount)`.
b) Tạo 3 class concrete: `CashPayment`, `CreditCardPayment`, `EWalletPayment`. Mỗi class in ra thông báo phù hợp khi `pay()` được gọi.
c) Tạo class `ShoppingCart` chứa field `PaymentStrategy strategy` (composition!) + method `setStrategy()` + method `checkout(double total)` gọi `strategy.pay(total)`.
d) Đoạn client: tạo cart, đổi qua 3 strategy khác nhau, gọi checkout.

---

## Bài G5 — Observer Pattern (2 điểm)

Một hệ thống tin tức (NewsAgency) cần thông báo cho nhiều subscriber (báo, đài, blog).

a) Tạo interface `Observer` với method `update(String news)`.
b) Tạo class `NewsAgency` (Subject):
   - Field `List<Observer> observers`
   - Method `subscribe(Observer)` để đăng ký
   - Method `unsubscribe(Observer)` để hủy đăng ký
   - Method `publish(String news)` để gửi tin → notify mọi observer
c) Tạo 2 class concrete observer: `Newspaper` và `RadioStation`. Mỗi class in ra cách thông báo riêng khi nhận update.
d) Đoạn client: tạo agency, subscribe 2 observer, publish 1 tin → kiểm tra cả 2 observer đều nhận.

---

## Bài G6 — Identify Pattern (1 điểm)

Cho các đoạn code/scenario sau, hãy xác định Design Pattern nào đang được áp dụng:

**Scenario 1**: Spring Beans được tạo 1 lần duy nhất trong IoC container, mọi component khác đều dùng chung instance đó.

**Scenario 2**: 
```java
http.csrf(c -> c.disable())
    .authorizeHttpRequests(...)
    .formLogin(...)
    .build();
```

**Scenario 3**: Spring Security có chuỗi các filter — mỗi filter có cơ hội xử lý request, có thể block hoặc cho qua filter tiếp theo.

**Scenario 4**: Bạn có class `OldPaymentAPI` với method `processOldPayment(...)` nhưng codebase mới yêu cầu interface `PaymentService` với method `pay(...)`. Bạn viết class trung gian để chuyển đổi.

**Scenario 5**: Trong text editor, mỗi action (Cut, Copy, Paste, Bold) được encapsulate thành object riêng để có thể queue, undo, redo.

---

<a id="phần-h"></a>
# 🟦 PHẦN H — ĐỀ TỔNG HỢP (Mô phỏng đề thi 60–90 phút, 10 điểm)

## Đề mô phỏng — Hệ thống quản lý Blog

Bạn đang xây dựng ứng dụng quản lý blog cá nhân cho phép user đăng ký, đăng nhập, viết bài. Hệ thống có 2 entity:
- `User`: id, username, password, email, roles ("USER,ADMIN")
- `Post`: id, title, content, createdAt, author (User)

**Quan hệ**: Một `User` có nhiều `Post`. Mỗi `Post` thuộc về 1 `User`.

---

### Câu 1 (2.5 điểm) — Entity & Repository

a) Viết 2 entity class `User` và `Post` với các annotation Hibernate đầy đủ. Áp dụng best practice owning side cho relationship.

b) Viết interface `UserRepository extends JpaRepository<User, Long>` với 1 method derived: `findByUsername(String)` trả về `Optional<User>`.

c) Viết interface `PostRepository extends JpaRepository<Post, Long>` với 2 method: `findByAuthor(User)` và `findByTitleContaining(String)`.

---

### Câu 2 (2 điểm) — Validation + Registration

a) Tạo class `UserTemplate` (DTO) cho form đăng ký với validation:
   - `username`: 6–60 ký tự
   - `password`: regex (ít nhất 1 chữ số, ít nhất 1 chữ in hoa, 6–60 ký tự)
   - `email`: regex `.+@.+\..+`
   - Đầy đủ message lỗi.

b) Viết controller method GET `/register` để show form + POST `/register` để xử lý:
   - Validate input.
   - Nếu có lỗi → re‑render form.
   - Nếu OK → save User vào DB (giả định có constructor `User(UserTemplate ut, PasswordEncoder encoder)` đã encode password).

---

### Câu 3 (2 điểm) — Security Configuration

Viết class `SecurityConfig` với yêu cầu:

a) URL `/`, `/register`, `/login` cho phép truy cập không cần login.
b) URL `/admin/**` chỉ ADMIN truy cập.
c) Mọi URL khác yêu cầu authenticated.
d) Form login: page `/login`, success → `/dashboard`, fail → `/login?error`.
e) Logout: `/logout` → `/login?logout`.
f) Bean `BCryptPasswordEncoder`.

---

### Câu 4 (1.5 điểm) — Controller hiển thị Posts của User hiện tại

Viết controller method GET `/my-posts`:

a) Lấy username của user đang login (giả định có method `SecurityContextHolder.getContext().getAuthentication().getName()`).
b) Tìm User trong DB qua username.
c) Lấy danh sách posts của user đó qua `postRepository.findByAuthor(user)`.
d) Truyền vào model với key `"posts"` và return view name `"myPosts"`.

---

### Câu 5 (1 điểm) — Thymeleaf Template

Viết template `myPosts.html` hiển thị danh sách post của user:
- Vòng lặp qua `${posts}`.
- Hiển thị title (như link đến `/posts/{id}`), content (max 100 ký tự đầu), createdAt (format dd/MM/yyyy).
- Nếu danh sách rỗng, hiển thị `"Bạn chưa có bài viết nào."`.

---

### Câu 6 (1 điểm) — Identify Design Patterns

Trong hệ thống Blog ở trên, identify ít nhất 3 Design Pattern đang được áp dụng (giải thích ngắn vì sao):

a) Spring Beans cho controllers / repositories / services.
b) Cấu hình `HttpSecurity` với chained method calls.
c) `MyUserDetails` wrap `User` entity.
d) Spring Security filter chain.
e) Use of `BCryptPasswordEncoder` qua interface `PasswordEncoder`.

(Chọn ít nhất 3 trong 5 scenario trên + chỉ rõ pattern.)

---

# 📊 BẢNG TỔNG ĐIỂM ĐỀ TỔNG HỢP

| Câu | Nội dung | Điểm |
|---|---|---|
| 1 | Entity + Repository | 2.5 |
| 2 | Validation + Registration | 2.0 |
| 3 | Security Config | 2.0 |
| 4 | Controller | 1.5 |
| 5 | Thymeleaf Template | 1.0 |
| 6 | Identify Patterns | 1.0 |
| **TỔNG** | | **10** |

---

# 🎯 LỜI KHUYÊN LÀM BÀI

1. **Đọc đề kỹ** — gạch chân các từ quan trọng (annotation cụ thể, URL pattern, tên field).
2. **Code có cấu trúc**: import → class declaration → fields → constructor → methods.
3. **Annotation phải đầy đủ**: thiếu `@Entity` hay `@Id` là **mất điểm chắc chắn**.
4. **Tab/indent đẹp**: dù viết tay vẫn cần thẳng hàng để dễ đọc cho giảng viên.
5. **Best practice**: dùng owning side đúng (`@ManyToOne` là owning), constructor injection (không phải `@Autowired`), MyUserDetails (không phải User implements UserDetails).
6. **Khi không nhớ chính xác**: viết comment giải thích ý → có thể được điểm partial.
7. **Phân bổ thời gian**: ưu tiên câu nắm chắc trước, để câu khó cuối.

**Sau khi hoàn thành → mở [solutions.md](solutions.md) để check đáp án.**

**Chúc bạn luyện tập hiệu quả! 🍀**
