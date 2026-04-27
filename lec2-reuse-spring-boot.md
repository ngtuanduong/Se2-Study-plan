# 📘 LECTURE 2 — Software Reuse, Frameworks, Spring Boot (CHI TIẾT)

> **Format**: Definition (EN) + Giải thích (VN) + Ví dụ/Use case + Tại sao quan trọng cho thi.

---

## 2.1 — MAVEN

### Definition
> *"Maven is a build tool and dependencies management tool. It comes built‑in in many IDEs, including IntelliJ IDEA. One of two choices for dependencies management in Spring application (other is Gradle)."*

### Giải thích (VN)
**Maven** giải quyết 2 vấn đề lớn:
1. **Build tool**: Tự động compile, package thành JAR/WAR, run test, deploy.
2. **Dependency management**: Tự động download các thư viện (như Spring, Hibernate, MySQL connector) từ kho online (Maven Central) — bạn chỉ cần khai báo trong file `pom.xml`.

Trước khi có Maven: dev phải tải file JAR thủ công, copy vào `lib/`, dễ thiếu/sai version → "JAR hell".

### Maven Project Structure
```
my-project/
├── pom.xml                    ← file cấu hình chính (XML)
├── src/main/java/             ← application source code
├── src/main/resources/        ← config files (application.properties), templates
├── src/test/java/             ← test source code
└── src/test/resources/        ← test resources
```

### Maven Repositories (online repos)
- **Central**: `https://repo1.maven.org/maven2/` — kho lớn nhất, mặc định
- Atlassian: `https://packages.atlassian.com/mvn/maven-atlassian-external/`
- Sonatype: `https://oss.sonatype.org/content/repositories/releases/`
- Spring: `https://repo.spring.io/plugins-release/`

### POM (Project Object Model)
> *"pom.xml is an XML file containing information about the project and configuration details used by Maven. Stores project's dependencies."*

**Ví dụ khai báo dependency**:
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
  </dependency>
</dependencies>
```
3 thông tin xác định 1 lib: **groupId + artifactId + version** (gọi là **GAV**).

### Use case
- Bạn dùng Spring Boot — chỉ cần thêm `spring-boot-starter-web` → Maven tự download Spring + Tomcat + Jackson + 50 dependencies khác.
- Chuyển dự án máy mới? Clone repo + `mvn install` → xong.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "POM = *Project Object Model*", file `pom.xml` = **XML**
- **MCQ**: Maven là **build tool + dependency manager**, **KHÔNG phải** DBMS, IDE, hay programming language
- **MCQ**: 2 lựa chọn cho Spring dependency mgmt = **Maven** và **Gradle**

---

## 2.2 — SPRING & SPRING BOOT

### Definition
> *"Spring is the most popular, modern application development framework for enterprise Java. It provides infrastructures so developers can focus on application‑level business logic."*

> *"Spring Boot makes it easy to create stand‑alone, production‑grade Spring‑based applications."*

### Giải thích (VN)
**Spring** = framework Java khổng lồ giải quyết các bài toán lặp lại trong enterprise app: dependency injection, web MVC, security, transaction, ORM, …

**Vấn đề của Spring "thuần"**: Cấu hình rất phức tạp (XML hàng trăm dòng).

**Spring Boot** = lớp phủ trên Spring với 3 ưu điểm:
1. **Auto‑configuration**: tự cấu hình dựa trên dependencies bạn thêm (vd: thấy `spring-boot-starter-web` → tự cấu hình Tomcat embedded)
2. **Standalone**: chạy `java -jar app.jar` là xong, không cần deploy WAR vào Tomcat ngoài
3. **Production‑grade**: có sẵn metrics, health check, externalized config

### Cách tạo Spring Boot project
- Visit **https://start.spring.io/** → chọn dependencies → download → extract → mở IntelliJ
- Hoặc dùng IntelliJ Ultimate (có sẵn wizard)
- Spring Boot supports **Java 17+**

### Use case
- Bạn cần xây 1 REST API → tạo Spring Boot project có `spring-boot-starter-web` + `spring-boot-starter-data-jpa` → trong 5 phút có project chạy được.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Spring Boot makes it easy to create *stand‑alone, production‑grade* Spring‑based applications"
- **MCQ phân biệt Spring vs Spring Boot**: Spring là framework, Spring Boot là **simplification layer**
- **MCQ**: Spring Boot supports Java **17+**

---

## 2.3 — application.properties (Spring Boot Configuration)

### Definition
> *"application.properties is a key configuration file in a Spring Boot project. Located at src/main/resources/application.properties. Used to configure various aspects: DB connections, server settings, logging, security."*

### Giải thích (VN)
File này thay thế hàng trăm dòng XML config. Dùng cú pháp `key=value`.

**Ví dụ**:
```properties
server.port=8080
spring.application.name=userservice
spring.datasource.url=jdbc:mysql://localhost:3306/db_example
spring.datasource.username=springuser
spring.datasource.password=ThePassword
spring.jpa.hibernate.ddl-auto=update
```

### Cách truy cập properties trong code (2 cách)
1. **`@Value` annotation**:
```java
@Value("${server.port}")
private int port;
```
2. **Inject Environment object**:
```java
@Autowired
private Environment env;
public int getPort() { return env.getProperty("server.port", Integer.class); }
```

### Use case
- Cùng 1 codebase, deploy ở dev/staging/prod với config khác nhau (DB URL, log level) → chỉ thay file `application.properties`.

### Tại sao quan trọng cho thi
- **MCQ**: file ở `src/main/resources/application.properties`
- **MCQ**: 2 cách access — `@Value` hoặc `Environment`

---

## 2.4 — THYMELEAF

### Definition
> *"Thymeleaf is a modern server‑side Java template engine for both web and standalone environments. Works similarly to EJS, Pug, HandleBars, Twig, etc. Templates still look and work like HTML, so remain useful design artifacts."*

### Giải thích (VN)
**Thymeleaf** = engine trộn data từ server vào HTML để tạo ra HTML cuối cùng gửi về browser.

**Đặc điểm độc đáo**: file Thymeleaf **vẫn là HTML hợp lệ** — designer có thể mở trực tiếp trong browser để xem layout, dev backend chỉ thêm `th:*` attributes để gắn data.

### Template Structure
- File extension: **`.html`**
- Vị trí: **`src/main/resources/templates/`**
- Standard dialect (built‑in): các attribute bắt đầu bằng **`th:`**

### Common Thymeleaf Attributes
| Attribute | Mục đích |
|---|---|
| `th:text` | Set nội dung text của tag |
| `th:action` | Set action attribute của form |
| `th:value` | Set value của input |
| `th:each` | Iterate over collection |
| `th:if` | Conditional render |
| `th:href` | Set href động |
| `th:object` | Bind form với object |
| `th:field` | Bind input với field của object |
| `th:fragment` | Define reusable fragment |

### Ví dụ
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<body>
  <h1 th:text="'Hello, ' + ${user.name}">Hello, World</h1>
  <ul>
    <li th:each="item : ${items}" th:text="${item}">item placeholder</li>
  </ul>
</body>
</html>
```

### Use case
- Server‑rendered web app (như blog, admin dashboard) — Thymeleaf hoạt động tốt nhất.
- Không phù hợp cho SPA (Single Page App) — dùng React/Vue thay thế.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Thymeleaf templates stored at *src/main/resources/templates*"
- **MCQ**: Thymeleaf attributes prefix = **`th:`**
- **MCQ "compare with"**: EJS, Pug, HandleBars, Twig (tất cả đều là template engine)

---

## 2.5 — OBJECT‑RELATIONAL MAPPING (ORM)

### Definition
> *"ORM is a technique used in creating bridge between object‑oriented programs and relational databases. Use OOP methods to do CRUD instead of SQL queries."*

### Giải thích (VN)
**Vấn đề (object‑relational impedance mismatch)**: OOP có objects + inheritance + polymorphism. Relational DB có tables + rows + foreign keys. Hai world này **không tương thích tự nhiên**.

**ORM giải pháp**: tự động dịch giữa 2 world.
- Tạo class `User` có `id`, `name` → ORM tạo bảng `user(id, name)`
- Gọi `userRepo.save(user)` → ORM dịch thành `INSERT INTO user (...) VALUES (...)`
- Gọi `userRepo.findById(20)` → ORM dịch thành `SELECT * FROM user WHERE id = 20`

### So sánh code
**Truyền thống (JDBC)**:
```java
String sql = "SELECT id, name, email, country, phone_number FROM users WHERE id = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setLong(1, 20);
ResultSet rs = ps.executeQuery();
// ... map từng cột vào object thủ công
```

**ORM**:
```java
User u = userRepo.findById(20).orElseThrow();
```

### Use case
- Project enterprise hầu như đều dùng ORM để giảm boilerplate code.
- Khi cần tối ưu performance cực cao → dùng raw SQL.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: ORM = "*technique used in creating bridge between object‑oriented programs and relational databases*"
- **MCQ**: ORM cho phép switch DB systems dễ dàng (chỉ thay config)

---

## 2.6 — JPA (Java Persistence API)

### Definition
> *"JPA provides Java developers with object/relational mapping facility for managing relational data. JPA is a set of interfaces defining how to persist data in Java applications. Cannot be used by itself. Concrete implementations of JPA exist (e.g., Hibernate)."*

### Giải thích (VN)
**JPA** = **chuẩn (specification)** chứ không phải implementation. Như "USB standard" — định nghĩa cách hoạt động, nhưng không phải sản phẩm thật.

**Hibernate** = một **implementation** thực tế của JPA standard. Có các implementation khác như EclipseLink, OpenJPA.

**Quan hệ**: JPA (interfaces) ← Hibernate (implementation)

### Spring Data JPA
> *"Spring Data JPA is built upon JPA. Has all features of JPA with additional convenient features."*

**Spring Data JPA** = thêm 1 lớp tiện ích trên JPA, tự động generate query từ tên method (`findByName`, `findByAgeGreaterThan`).

→ Stack thực tế: **Spring Data JPA → JPA → Hibernate → JDBC → Database**

### Tại sao quan trọng cho thi
- **MCQ "JPA là gì?"**: Là **set of interfaces** (specification), KHÔNG phải implementation
- **MCQ trap**: Hibernate ≠ JPA — Hibernate **implements** JPA
- **Fill‑in‑blank**: "JPA cannot be used *by itself*" (cần implementation cụ thể)

---

## 2.7 — DATA SOURCE CONFIGURATION

### Configuration Keys (application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/db_example
spring.datasource.username=springuser
spring.datasource.password=ThePassword
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
```

### `ddl-auto` options
| Value | Behavior |
|---|---|
| `none` | Không làm gì với schema |
| `validate` | Verify schema khớp entities (lỗi nếu sai) |
| `update` | Update schema (thêm column nếu thiếu, không xóa) |
| `create` | Drop & create schema mỗi lần start |
| `create-drop` | Như create + drop khi shutdown (test only) |

### Giải thích (VN)
ORM cho phép **switch DB easily** — đổi từ MySQL sang PostgreSQL chỉ cần đổi `url` + `driver-class-name`, code Java không thay đổi.

### Tại sao quan trọng cho thi
- **MCQ**: Đổi DB chỉ cần đổi config (đặc tính của ORM)

---

## 2.8 — ENTITY (JPA)

### Definition
> *"An Entity is a class that maps to a database table. Annotated with @Entity. Must have a primary key (annotated with @Id). Often placed in model package."*

### Code Example
```java
import jakarta.persistence.*;

@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String email;
    // Getters and setters
}
```

### Giải thích (VN)
**`@Entity`** đánh dấu class là persistent (lưu vào DB). **`@Id`** chỉ field nào là primary key.

Mặc định ORM tạo bảng cùng tên class (`User` → bảng `user`), cột cùng tên field. Có thể override bằng `@Table(name="...")` và `@Column(name="...")`.

### Use case
- Mỗi domain object trong app cần persist (User, Product, Order, …) → tạo Entity class.

### Tại sao quan trọng cho thi
- **MCQ**: Entity **phải** có @Id (primary key)
- **MCQ**: @Entity và @Id là **bắt buộc**; @Table và @Column là **optional**

---

## 2.9 — REPOSITORY (Spring Data JPA)

### Definition
> *"Repositories are used to create CRUD repository for database tables. Implement JpaRepository interface for CRUD operations."*

### Code Example
```java
public interface EmployeeRepository extends JpaRepository<Employee, Long> { }
```

### Giải thích (VN)
**Magic của Spring Data JPA**: Bạn chỉ cần định nghĩa **interface**, không cần implement gì. Spring tự động generate implementation tại runtime.

**Có sẵn các method CRUD**:
- `findAll()` — get tất cả
- `findById(id)` — get theo ID
- `save(entity)` — insert hoặc update
- `delete(entity)` / `deleteById(id)` — xóa
- `count()` — đếm

**Derived queries** (slide Lec 7 sẽ học chi tiết):
```java
List<Employee> findByFirstName(String name);
// Spring tự generate SQL: SELECT * FROM employee WHERE first_name = ?
```

### Use case
```java
@Autowired
EmployeeRepository repo;

List<Employee> employees = repo.findByFirstName("John");
Employee emp1 = repo.getById(15);
repo.save(employee);
```

### Tại sao quan trọng cho thi
- **MCQ**: Repository là **interface** kế thừa JpaRepository, KHÔNG phải class
- **Fill‑in‑blank**: `JpaRepository<Entity, Long>` — 2 generic params (entity type + ID type)

---

## 2.10 — CONTROLLER (Spring MVC)

### Definition
> *"A Controller is a class that handles incoming HTTP requests and returns responses. Annotated with @Controller. Often placed under controller package."*

### Code Example
```java
@Controller
@RequestMapping("/hello")
public class HelloController {
    @GetMapping
    public String sayHello() {
        return "hello"; // tên view (file hello.html ở /templates/)
    }
}
```

### Giải thích (VN)
**Controller** = lớp xử lý HTTP request:
1. Browser gửi GET `/hello` → Spring MVC
2. Spring tìm method có `@RequestMapping` khớp URL → gọi `sayHello()`
3. Method trả về string `"hello"` → Spring tìm template `hello.html` → render → trả browser

**Annotation chính**:
- `@Controller` — đánh dấu class
- `@RequestMapping("/path")` — gắn URL với class hoặc method
- `@GetMapping` / `@PostMapping` / `@PutMapping` / `@DeleteMapping` — shortcut cho HTTP methods

### Tại sao quan trọng cho thi
- **MCQ**: Controller class cần `@Controller` annotation
- **MCQ**: Method return string = view name (Thymeleaf template)
- **Lec 3 sẽ đi sâu hơn**

---

## 2.11 — SOFTWARE REUSE — CONCEPT

### Definition
> *"In most engineering disciplines, systems are designed by composing existing components from other systems. Software engineering historically focused on original development, but now recognized need for systematic software reuse. Major switch to reuse‑based development over past 10 years."*

### Giải thích (VN)
Engineering khác (cơ khí, điện tử, xây dựng) đã reuse từ lâu (bu‑lông, IC chip, gạch tiêu chuẩn). Software engineer **trước đây thích viết từ đầu** ("Not‑Invented‑Here syndrome").

**Hiện tại**: chuyển sang **reuse‑based development** vì:
- Faster delivery (giao nhanh hơn)
- Lower cost (rẻ hơn)
- Higher quality (đã được test bởi người khác)

### Tại sao quan trọng cho thi
- **MCQ**: "Major switch to reuse‑based development over past *10 years*"

---

## 2.12 — TYPES OF SOFTWARE REUSE (4 LEVELS)

### Definition

| Level | Description |
|---|---|
| **System reuse** | *"Complete systems, which may include several application programs, may be reused"* |
| **Application reuse** | *"An application may be reused either by incorporating it without change into others or by developing application families"* |
| **Component reuse** | *"Components of an application from sub‑systems to single objects may be reused"* |
| **Object and function reuse** | *"Small‑scale software components implementing a single well‑defined object or function may be reused"* |

### Giải thích (VN) — từ "to" xuống "nhỏ"
1. **System reuse** = reuse cả 1 hệ thống (vd: dùng SAP cho ERP toàn công ty)
2. **Application reuse** = reuse 1 ứng dụng (vd: nhúng QuickBooks vào hệ thống lớn)
3. **Component reuse** = reuse module/library (vd: dùng Stripe SDK cho payment)
4. **Object/function reuse** = reuse function nhỏ (vd: `Math.sqrt()` từ Java standard library)

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 levels**
- **MCQ thứ tự**: từ lớn → nhỏ (System > Application > Component > Object/Function)

---

## 2.13 — BENEFITS OF SOFTWARE REUSE (6)

### Definition (HỌC CHÍNH XÁC!)

| Benefit | Explanation |
|---|---|
| **Accelerated development** | *"Bringing system to market early often more important than overall costs. Reusing software speeds up production because both development and validation time may be reduced."* |
| **Effective use of specialists** | *"Instead of doing same work repeatedly, application specialists can develop reusable software encapsulating their knowledge."* |
| **Increased dependability** | *"Reused software, tried and tested in working systems, should be more dependable than new software."* |
| **Lower development costs** | *"Development costs proportional to size of software. Reusing software means fewer lines of code to write."* |
| **Reduced process risk** | *"Cost of existing software already known, whereas development costs always matter of judgment. Reduces margin of error in project cost estimation."* |
| **Standards compliance** | *"Some standards (e.g., user interface standards) can be implemented as reusable components. Improves dependability because users make fewer mistakes with familiar interface."* |

### Giải thích (VN — mnemonic)
**A‑E‑I‑L‑R‑S** (vần dễ nhớ): **A**ccelerated, **E**ffective specialist, **I**ncreased dependability, **L**ower cost, **R**educed risk, **S**tandards compliance.

### Use case từng benefit
- **Accelerated**: Startup cần go‑to‑market trong 2 tháng → reuse Stripe + Auth0 + AWS thay vì tự build payment + auth + infra (mất 1 năm).
- **Increased dependability**: Spring đã được test bởi triệu dev trên thế giới → ít bug hơn code mới của bạn.
- **Standards compliance**: Reuse Material UI components → giao diện đồng nhất, người dùng quen thuộc.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **6 benefits**
- **MCQ trap**: **Standards compliance** dễ quên — nhớ là 1 trong 6

---

## 2.14 — PROBLEMS WITH REUSE (5)

### Definition

| Problem | Explanation |
|---|---|
| **Creating, maintaining, using component library** | *"Populating library and ensuring developers can use it can be expensive. Development processes must be adapted to ensure library is used."* |
| **Finding, understanding, adapting reusable components** | *"Components must be discovered in library, understood, and sometimes adapted to work in new environment."* |
| **Increased maintenance costs** | *"If source code of reused software not available, maintenance costs may be higher because reused elements may become incompatible with system changes."* |
| **Lack of tool support** | *"Some software tools don't support development with reuse. Software process assumed by tools may not account for reuse."* |
| **Not‑invented‑here syndrome** | *"Some software engineers prefer to rewrite components believing they can improve on them. Partly trust; partly because writing original software seen as more challenging."* |

### Giải thích (VN)
- **Component library** không miễn phí — cần tổ chức, document, maintain library.
- **Finding components** mất thời gian — phải search, đọc doc, thử nghiệm.
- **Maintenance**: nếu library bên thứ 3 stop maintenance → bạn stuck với version cũ có lỗ hổng bảo mật.
- **NIH syndrome**: Dev xấu hổ khi dùng code người khác → tự viết lại (lãng phí).

### Use case
- Bạn dùng `lodash` cho utility functions. Sau 5 năm `lodash` lỗi thời, có alternative tốt hơn → migration cost cao.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **5 problems**
- **MCQ trap**: "Not‑invented‑here syndrome" thuộc **problems**, không phải benefits
- **Fill‑in‑blank**: Định nghĩa NIH = "*prefer to rewrite components believing they can improve on them*"

---

## 2.15 — REUSE PLANNING FACTORS (Khi quyết định reuse hay không)

> *"When deciding whether to implement software reuse strategy, consider:"*

1. **Development schedule** for the software
2. **Expected software lifetime**
3. **Background, skills, and experience** of development team
4. **Criticality of software** and its non‑functional requirements
5. **Application domain**
6. **Execution platform** for software

### Giải thích (VN)
Reuse không phải lúc nào cũng tốt:
- **Schedule chặt** → reuse (faster)
- **Lifetime dài** → cẩn thận (vendor có còn sống không?)
- **Team newbie** → khó adapt component → có khi tự code dễ hơn
- **Critical software** (như y tế) → cần test kỹ component reused
- **Domain hiếm** → ít component có sẵn

### Tại sao quan trọng cho thi
- **MCQ "Factors influencing reuse decision"**: 6 factors

---

## 2.16 — APPLICATION FRAMEWORKS

### Definition (CỰC QUAN TRỌNG!)
> *"…an integrated set of software artefacts (such as classes, objects and components) that collaborate to provide a reusable architecture for a family of related applications."*

### Characteristics
- **Moderately large entities** that can be reused
- **Somewhere between system and component reuse**
- Sub‑system design made up of **collection of abstract and concrete classes** + interfaces between them
- Implemented by **adding components** to fill in parts of design + **instantiating abstract classes**

### Giải thích (VN)
**Framework** ≠ Library:
- **Library**: bạn gọi code của library (vd: `Math.sqrt(9)`)
- **Framework**: framework gọi code của bạn (gọi là **Inversion of Control**)

**Hình ảnh**: Library như "thư viện sách" — bạn tự đến lấy. Framework như "lò luyện kim" — bạn đưa quặng vào, lò xử lý theo quy trình của nó.

### Inversion of Control (IoC) — KEY CONCEPT
> *"Framework calls application code rather than application calling framework."*

**Ví dụ Spring**: Bạn không gọi `dispatcher.dispatch(request)` — Spring tự nhận request rồi gọi controller method của bạn.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank** (HỌC THUỘC TỪNG CHỮ): "Framework = *integrated set of software artefacts (such as classes, objects and components) that collaborate to provide a reusable architecture for a family of related applications*"
- **MCQ "IoC"**: framework calls application code, **NOT** application calls framework

---

## 2.17 — WEB APPLICATION FRAMEWORKS (WAF)

### Definition
> *"Support construction of dynamic websites as frontend for web applications. Available for all commonly used web programming languages (Java, Python, Ruby, etc.). Interaction model based on Model‑View‑Controller composite pattern."*

### WAF Features (5)

| Feature | Description |
|---|---|
| **Security** | Classes for user authentication (login) and access control |
| **Dynamic web pages** | Classes to define web page templates and populate from database |
| **Database support** | Abstract interface to different databases |
| **Session management** | Classes to create and manage sessions |
| **User interaction** | Most provide AJAX support for interactive pages |

### Ví dụ WAF
- Java: **Spring Boot**, JSF, Struts
- Python: Django, Flask
- Ruby: Rails
- PHP: Laravel, Symfony
- JavaScript: Express, Next.js

### Tại sao quan trọng cho thi
- **MCQ đếm**: **5 features** WAF
- **MCQ**: WAF dựa trên **MVC composite pattern**

---

## 2.18 — EXTENDING FRAMEWORKS

### Definition
> *"Frameworks are generic and extended to create more specific application or sub‑system. Provide skeleton architecture for system."*

### How to extend
- **Adding concrete classes** that inherit operations from abstract classes in framework
- **Adding methods** that are called in response to events recognized by framework

### Problem
> *"Framework complexity means long time to use them effectively."*

### Giải thích (VN)
Framework rất mạnh nhưng **học cong**. Spring có hàng trăm class/annotation — mất 6 tháng đến 1 năm mới thành thạo. Đó là trade‑off với productivity sau này.

### Tại sao quan trọng cho thi
- **MCQ trap**: Framework "long time to use effectively" — đây là disadvantage chính

---

## 2.19 — FRAMEWORK CLASSES (3 TYPES)

### Definition

| Type | Description |
|---|---|
| **System infrastructure frameworks** | *"Support development of system infrastructures such as communications, user interfaces, and compilers"* |
| **Middleware integration frameworks** | *"Standards and classes supporting component communication and information exchange"* |
| **Enterprise application frameworks** | *"Support development of specific types of applications such as telecommunications or financial systems"* |

### Ví dụ thực tế
- **System infrastructure**: Eclipse RCP (build IDE), Qt (build desktop UI)
- **Middleware integration**: CORBA, .NET Remoting, gRPC
- **Enterprise**: SAP NetWeaver, Salesforce Lightning

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 framework classes**

---

## 2.20 — MVC PATTERN IN FRAMEWORKS

### Definition
- System infrastructure framework for GUI design
- Allows **multiple presentations** of an object and **separate interactions** with presentations
- MVC framework involves instantiation of **number of patterns**
- Web‑based application architecture uses MVC pattern

### Giải thích (VN)
**Lec 3 sẽ học chi tiết MVC** — ở đây chỉ giới thiệu sơ.
- **Model**: data + business logic
- **View**: presentation (HTML, UI)
- **Controller**: handle user input, coordinate Model & View

### Tại sao quan trọng cho thi
- **MCQ**: Web app architecture **uses MVC pattern**

---

## 🎯 KEY POINTS LECTURE 2

1. **Maven** = build tool + dependency manager (alt: Gradle); cấu hình qua `pom.xml`
2. **Spring** = framework Java enterprise; **Spring Boot** = simplification (auto‑config, standalone, production‑grade)
3. **Thymeleaf** = server‑side template engine (Java); attr `th:*`; ở `templates/`
4. **JPA** = specification (interfaces); **Hibernate** = implementation; **Spring Data JPA** = + tiện ích
5. **Entity** = class + `@Entity` + `@Id`; **Repository** = interface kế thừa `JpaRepository`
6. **Software Reuse** — 4 levels (System/App/Component/Object), 6 benefits, 5 problems
7. **Framework** = integrated set of artefacts; **IoC**: framework calls app code
8. **WAF** features 5: Security, Dynamic pages, DB support, Session, User interaction (AJAX)
9. Framework classes 3: System infrastructure / Middleware integration / Enterprise application

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 2

- [ ] Maven structure (5 directories) + GAV (groupId, artifactId, version)
- [ ] application.properties location + 2 ways to access (@Value, Environment)
- [ ] 5 Thymeleaf attributes phổ biến (`th:text`, `th:each`, `th:if`, `th:href`, `th:fragment`)
- [ ] Phân biệt JPA / Hibernate / Spring Data JPA
- [ ] Entity required = `@Entity` + `@Id`; optional = `@Table`, `@Column`
- [ ] 4 reuse levels (System > Application > Component > Object/Function)
- [ ] 6 reuse benefits (mnemonic A‑E‑I‑L‑R‑S)
- [ ] 5 reuse problems
- [ ] Framework definition word‑by‑word
- [ ] IoC: framework gọi code của bạn (không ngược lại)
- [ ] 5 WAF features
- [ ] 3 framework classes (System infra / Middleware / Enterprise)
