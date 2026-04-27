# 📘 LECTURE 3 — Architectural Design & Spring Controllers (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

## 3.1 — ARCHITECTURAL DESIGN — DEFINITION

### Definition
> *"Architectural design is concerned with understanding how a software system should be organized and designing the overall structure of that system. It is the critical link between design and requirements engineering."*

### Purpose
> *"Identifies main structural components in system; shows relationships between them. Output is architectural model describing how system organized as set of communicating components."*

### Giải thích (VN)
**Architecture** = "**bản đồ tổng thể**" của hệ thống. Trước khi code 1 dòng, bạn cần biết:
- Hệ thống có những module nào?
- Module nào chạy ở đâu (server/client/cloud)?
- Module giao tiếp với nhau qua giao thức gì?

**Tại sao là "critical link"**: nó nối **requirements** (cái khách hàng cần) với **detailed design** (chi tiết từng class). Sai architecture = không thể fix bằng tinh chỉnh chi tiết.

### Use case
- Bạn xây Uber clone: architecture phải trả lời "User App giao tiếp với Driver App qua direct TCP, hay qua Backend?", "Map service tự host hay dùng Google Maps?", "Payment xử lý sync hay async?"

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Architectural design is concerned with *understanding how a software system should be organized and designing the overall structure of that system*"

---

## 3.2 — ARCHITECTURAL REPRESENTATIONS

### Common Method
> *"Simple, informal block diagrams showing entities and relationships are most frequently used for documenting software architectures."*

### Limitations
- Architectures **very abstract** and **lack semantics**
- Do NOT show **nature of component relationships** nor **externally visible properties** of sub‑systems
- However, **useful for communication** with stakeholders and project planning

### Giải thích (VN)
Block diagrams (vẽ ô vuông + mũi tên) đơn giản nhưng **mơ hồ** — không nói rõ "mũi tên này nghĩa là gì" (HTTP? Function call? Message queue?). Vẫn dùng vì dễ hiểu cho non‑technical stakeholders.

Có chuẩn hơn: **UML component diagrams**, **C4 model** (Context, Container, Component, Code).

### Tại sao quan trọng cho thi
- **MCQ trap**: Block diagrams "useful for communication" nhưng **lack semantics**

---

## 3.3 — ADVANTAGES OF EXPLICIT ARCHITECTURE (3)

| Advantage | Explanation |
|---|---|
| **Stakeholder communication** | *"Architecture may be used as focus of discussion by system stakeholders"* |
| **System analysis** | *"Means analysis of whether system can meet non‑functional requirements is possible"* |
| **Large‑scale reuse** | *"Architecture may be reusable across range of systems. Product‑line architectures may be developed"* |

### Giải thích (VN)
1. **Communication**: PM, BA, dev, QA, customer cùng nhìn 1 bức tranh → tránh hiểu lầm.
2. **Analysis**: nhìn architecture biết được hệ thống có chịu được 10k users không (scalability), có an toàn không (security)…
3. **Reuse**: cùng 1 architecture có thể dùng cho nhiều dự án (vd: e‑commerce architecture template cho nhiều shop).

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 advantages**

---

## 3.4 — USES OF ARCHITECTURAL MODELS (2 PRIMARY USES)

### Use 1: Facilitating discussion about system design
- High‑level view useful for **communication with stakeholders & project planning**
- **Not cluttered with detail** → stakeholders hiểu, không bị overload

### Use 2: Documenting an architecture that has been designed
- Aim: produce **complete system model**
- Shows **different components, interfaces, connections**

### Giải thích (VN)
- **Use 1** = bản vẽ "high‑level" cho meeting với CEO/CTO
- **Use 2** = bản vẽ "low‑level" chi tiết cho dev team

### Tại sao quan trọng cho thi
- **MCQ**: 2 primary uses — discussion vs documentation

---

## 3.5 — ARCHITECTURAL PATTERNS — DEFINITION

### Definition
> *"Means of representing, sharing, and reusing knowledge. Stylized description of good design practice tried and tested in different environments. Should include information about when they are and when they are NOT useful. May be represented using tabular and graphical descriptions."*

### Giải thích (VN)
**Architectural pattern** = "**công thức đã test thành công** cho 1 loại bài toán phổ biến". Như công thức nấu ăn — không cần phát minh lại bánh mì, chỉ cần dùng công thức có sẵn.

**Quan trọng**: pattern phải kèm "**when NOT to use**" — không có pattern nào universal.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Pattern là "*means of representing, sharing, and reusing knowledge*"

---

## 3.6 — FIVE MAJOR ARCHITECTURAL PATTERNS (BẢNG CỐT LÕI)

### Bảng tổng quan (HỌC THUỘC!)

| Pattern | Description (1 câu) | Used when | Advantage chính | Disadvantage chính |
|---|---|---|---|---|
| **MVC** | Separates presentation/interaction from system data | Multiple ways to view & interact with data | Data & view independent | Added complexity for simple data |
| **Layered** | Organizes system into layers; each layer provides services to layer above | Build on existing system; multi‑level security | Layer replacement possible | Performance hit; clean separation difficult |
| **Repository** | All data managed in central repository; components interact only via it | Large volumes of data; data‑driven systems | Components independent; consistent data | Single point of failure |
| **Client‑Server** | Functionality organized into services delivered from separate servers | Shared DB accessed from multiple locations | Servers distributable | Each service single point of failure |
| **Pipe and Filter** | Each component (filter) does ONE transformation; data flows through pipes | Data processing apps (batch/transaction) | Easy to understand; reuse | Format must be agreed; overhead |

---

## 3.7 — MODEL‑VIEW‑CONTROLLER (MVC)

### Description (FILL‑IN‑BLANK)
> *"Separates presentation and interaction from system data. System structured into three logical components interacting with each other:*
> *• Model: manages system data and associated operations*
> *• View: defines and manages how data presented to user*
> *• Controller: manages user interaction (key presses, mouse clicks, etc.) and passes interactions to View and Model"*

### Giải thích (VN — diagram trong đầu)
```
   ┌──────┐  user input  ┌────────────┐
   │ View │ ────────────▶│ Controller │
   └──────┘              └────────────┘
      ▲                        │
      │ display                │ updates
      │                        ▼
      │                    ┌───────┐
      └─── data from ───── │ Model │
                           └───────┘
```

- **Model**: Class `User`, `Order`, business logic, DB queries
- **View**: HTML template (Thymeleaf, JSP)
- **Controller**: Class có `@Controller`, nhận request, gọi Model, chọn View

### Used when
> *"Used when there are multiple ways to view and interact with data. Also when future requirements for interaction and presentation of data are unknown."*

### Advantages
> *"Allows data to change independently of representation and vice versa. Supports presentation of same data in different ways with changes made in one representation shown in all of them."*

### Disadvantages
> *"Can involve additional code and code complexity when data model and interactions are simple."*

### Use case
- Web app (đa số): Spring MVC, Django, Rails
- Desktop app: cửa sổ Word có Model (document), View (cửa sổ), Controller (xử lý click/typing)

### Tại sao quan trọng cho thi
- **MCQ**: 3 components Model, View, Controller — biết role mỗi cái
- **MCQ trap**: Model **KHÔNG phải database** — Model là class quản lý data + operations, có thể có hoặc không có DB

---

## 3.8 — LAYERED ARCHITECTURE

### Description
> *"Organizes system into layers with related functionality associated with each layer. A layer provides services to layer above it; lowest‑level layers represent core services likely used throughout system."*

### 3 Layers (slide ghi)
- **Application‑specific layer** (top) — business logic riêng cho app
- **Application layer** (middle) — common app functions
- **Infrastructure layer** (bottom) — DB, network, OS

### Giải thích (VN)
**Hình ảnh tòa nhà**: tầng dưới đỡ tầng trên. Tầng trên gọi service từ tầng dưới, **không gọi ngược**.

**Quy tắc**: Layer N chỉ gọi Layer N‑1 (adjacent). Trong thực tế **vi phạm thường xuyên** (Layer 3 gọi thẳng Layer 1) → 1 trong những disadvantages.

### Used when
- Building **on top of existing systems**
- Development spread across **several teams**, each team responsible for 1 layer
- **Multi‑level security** required

### Advantages
> *"Allows replacement of entire layers so long as interface is maintained. Redundant facilities (e.g., authentication) can be provided in each layer to increase dependability."*

### Disadvantages
> *"In practice, providing clean separation between layers often difficult; high‑level layer may have to interact directly with lower‑level layers rather than through immediately adjacent layer. Performance can be problem because of multiple levels of interpretation."*

### Use case
- **iLearn system** (slide có ví dụ): 4 layers từ infrastructure đến application
- **Network OSI model**: 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)
- **Spring app**: Controller → Service → Repository → Database

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 layers** (Application‑specific, Application, Infrastructure)
- **MCQ trap**: Layer dưới = core services (NOT application‑specific!)

---

## 3.9 — REPOSITORY ARCHITECTURE

### Description
> *"All data in system managed in central repository accessible to all system components. Components do not interact directly, only through repository."*

### Giải thích (VN)
**Hình ảnh thư viện**: Tất cả sách (data) ở 1 nơi (repository). Người dùng (components) không trao đổi sách trực tiếp — luôn qua thư viện.

**Khác Layered**: Layered là vertical, Repository là **central hub**.

### Used when
- Large volumes of information generated, stored long time
- Data‑driven systems where inclusion of data **triggers action or tool**

### Advantages
> *"Components can be independent—don't need to know existence of other components. Changes by one component propagated to all components. All data managed consistently (e.g., backups done same time)."*

### Disadvantages
> *"Repository is single point of failure; problems in repository affect whole system. May be inefficiencies in organizing all communication through repository. Distributing repository across several computers may be difficult."*

### Use case
- **IDE Architecture** (slide có ví dụ): Editor, Debugger, Compiler, Profiler — tất cả truy cập 1 repository chứa source code, AST, symbol table.
- **CMS** (Content Management System): tất cả page/asset ở 1 DB, các module truy cập DB.

### Repository vs Shared Data Models
- **Repository Model**: shared data ở central DB, all sub‑systems access
- **Alternative**: each sub‑system maintains own DB, passes data explicitly

### Tại sao quan trọng cho thi
- **MCQ**: Repository = **single point of failure**
- **MCQ trap**: "Repository pattern" (architectural) ≠ "Repository" (Spring Data JPA interface)
- **Fill‑in‑blank**: "Components don't interact directly, only through *repository*"

---

## 3.10 — CLIENT‑SERVER ARCHITECTURE

### Description
> *"Functionality of system organized into services, with each service delivered from separate server. Clients are users of services and access servers to use them."*

### Giải thích (VN)
**Distributed system model** — chia hệ thống thành **clients** (yêu cầu service) và **servers** (cung cấp service). Server có thể chạy nhiều bản (replicate) để chịu tải.

### Implementation Options
- Single computer (cả client+server cùng máy)
- Set of stand‑alone servers + clients + network
- Web‑based: client = browser, server = web server / app server / DB server

### Multi‑tier Web App (3 tiers)
| Tier | Role |
|---|---|
| **Web server** | Communication với user; UI qua web browser |
| **Application server** | Business logic, info storage/retrieval |
| **Database server** | Move data to/from DB; transaction management |

### Used when
- Data in shared database accessed from **multiple locations**
- Servers can be **replicated** when load is variable

### Advantages
> *"Servers can be distributed across network. General functionality (e.g., printing service) can be available to all clients."*

### Disadvantages
> *"Each service is single point of failure; susceptible to denial of service attacks or server failure. Performance unpredictable—depends on network as well as system. Management problems if servers owned by different organizations."*

### Use case
- **Web apps**: Facebook, Gmail, Amazon (clients = browser/mobile, servers = data centers)
- **E‑commerce**: client = customer browser, server = web/app/DB
- **Film/DVD library** (slide có ví dụ)

### Tại sao quan trọng cho thi
- **MCQ**: 3 tiers Web/App/Database
- **MCQ**: Single point of failure cho **MỖI service** (không phải cả hệ thống như Repository)
- **Fill‑in‑blank**: "Clients are *users of services*"

---

## 3.11 — PIPE AND FILTER ARCHITECTURE

### Description
> *"Processing of data organized so each processing component (filter) is discrete and carries out one type of data transformation. Data flows (as in pipe) from one component to another for processing. Functional transformations process inputs to produce outputs."*

### Giải thích (VN)
**Hình ảnh dây chuyền sản xuất**: input → filter 1 → pipe → filter 2 → pipe → filter 3 → output. Mỗi filter làm **1 việc duy nhất** rồi pass cho filter sau.

**Linux command pipe**: `cat file.txt | grep "error" | sort | uniq -c`
- `cat` filter 1 (read file)
- `grep` filter 2 (filter lines)
- `sort` filter 3 (sort)
- `uniq -c` filter 4 (count duplicates)
- `|` là pipe

### Used when
> *"Commonly used in data processing applications (both batch‑ and transaction‑based) where inputs processed in separate stages to generate related outputs."*

### Advantages
> *"Easy to understand and supports transformation reuse. Workflow style matches structure of many business processes. Evolution by adding transformations straightforward. Can be implemented as either sequential or concurrent system."*

### Disadvantages
> *"Format for data transfer must be agreed upon between communicating transformations. Each transformation must parse input and unparse output to agreed form. Increases system overhead; may mean impossible to reuse functional transformations using incompatible data structures."*

### Related Concept
**Batch sequential model**: khi transformations sequential. Used in data processing systems. **Not really suitable** for interactive systems.

### Use case
- ETL (Extract‑Transform‑Load) trong data warehouse
- Compiler: source code → lexer → parser → semantic analyzer → optimizer → code generator
- **Payment processing** (slide có ví dụ): receive → validate → authorize → settle → notify
- Image processing: read → resize → crop → filter → save

### Tại sao quan trọng cho thi
- **MCQ trap**: Pipe & Filter "easy to understand" nhưng **format must be agreed** — disadvantage chính
- **MCQ**: Phù hợp **data processing** apps, **không phù hợp** interactive systems

---

## 3.12 — SPRING MVC WORKFLOW (8 STEPS — THUỘC THỨ TỰ!)

### Workflow

| Step | What happens |
|---|---|
| **1** | The incoming request — Client sends HTTP request |
| **2** | Dispatching the request to the handler — **DispatcherServlet** dispatches to handler |
| **3** | Handling the request — Handler processes |
| **4** | Preparing the model and selecting the view — Handler builds model + chooses view |
| **5** | Returning ModelAndView object — Handler returns ModelAndView |
| **6** | Rendering View with the model — View rendered with data |
| **7** | Returning control to the servlet — Back to DispatcherServlet |
| **8** | Returning the response to the client — HTTP response sent |

### Giải thích (VN)
**DispatcherServlet** = "**front controller**" — entry point cho mọi HTTP request. Nó tra cứu xem URL nào → controller method nào, gọi method, lấy kết quả, render view, trả về.

### View Rendering
- Nếu controller return **String** = view name
- DispatcherServlet hỏi **ViewResolver** beans → resolve thành actual View implementation (vd: `"hello"` → `templates/hello.html`)

### Use case
- Bạn không phải viết DispatcherServlet — Spring có sẵn. Chỉ cần viết Controller với annotation.

### Tại sao quan trọng cho thi
- **MCQ thứ tự**: 8 bước, biết bước nào trước bước nào
- **MCQ key term**: **DispatcherServlet** (không phải DispatcherController!)
- **MCQ**: ModelAndView trả về ở bước **5**

---

## 3.13 — CONTROLLER

### Definition
> *"A Controller is a component responsible for responding to action user takes (form submission, clicking link, accessing page). May:*
> *• Select or update data needed for view*
> *• Select name of view to render*
> *• Render the view itself"*

### 2 Types of Controllers

| Type | Characteristics |
|---|---|
| **Interface‑based** | Strict method signatures; explicit URL mapping; all URLs in single location |
| **Annotation‑based (FOCUS)** | Flexible signatures; mappings scattered throughout codebase |

### Giải thích (VN)
**Annotation‑based** đang là chuẩn hiện tại — flexibility cao. Interface‑based là cách cũ (trước Spring 2.5).

### How to Create Annotation‑based Controller
1. Put **`@Controller`** on class
2. Add **`@RequestMapping`** on class, method, or both

### Code Example
```java
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
    @RequestMapping(value = "/index.htm")
    public ModelAndView indexPage() {
        return new ModelAndView("index");
    }
}
```

### Tại sao quan trọng cho thi
- **MCQ**: 2 types — Interface‑based vs **Annotation‑based** (focus)
- **MCQ**: `@Controller` import từ `org.springframework.stereotype.Controller`

---

## 3.14 — REQUEST MAPPING & HANDLER MAPPING

### Out‑of‑the‑Box Handler Mapping Implementations (4)
- **BeanNameUrlHandlerMapping**
- **SimpleUrlHandlerMapping**
- **RequestMappingHandlerMapping** (FOCUS — đây là cái bạn dùng khi có `@RequestMapping`)
- **RouterFunctionMapping**

### Request‑Handling Methods — Factors Influencing Selection
1. **Request URL** (path)
2. **HTTP method** (GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE)
3. **Request parameters, headers, content type** (text/plain, application/json, ...)

### How to Configure
- Put `@RequestMapping` annotation on method
- Be more specific by specifying annotation's **attributes**

### Tại sao quan trọng cho thi
- **MCQ đếm**: 4 handler mapping implementations
- **MCQ**: Focus = **RequestMappingHandlerMapping**
- **MCQ HTTP methods**: 7 methods (GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE)

---

## 3.15 — `@RequestMapping` ATTRIBUTES

### Attributes (1)

| Attribute | Description |
|---|---|
| **name** | Name to use for mapping; can generate dynamic links |
| **value** or **path** | Specifies which URL(s) controller reacts to (e.g., `/order.htm`) |
| **method** | Binds method to specific HTTP methods (GET, POST, ...) |

### Attributes (2)

| Attribute | Description |
|---|---|
| **params** | Narrows on existence/absence of request parameters. Expressions: `param-name=param-value`, `param-name!=param-value`, `!param-name` |
| **headers** | Narrows on HTTP request headers. Expressions: `header-name=header-value`, `header-name!=header-value`, `!header-name` |

### Examples

**Example 1**: GET request mapping
```java
@Controller
@RequestMapping("/order.htm")
public class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String getOrder() {
        return "getorder";
    }
}
```
→ Maps `getOrder()` to all GET requests to `/order.htm`.

**Example 2**: PUT/POST with wildcard
```java
@Controller
@RequestMapping("/order.*")
public class IndexController {
    @RequestMapping(method = {RequestMethod.PUT, RequestMethod.POST})
    public String processOrder() {
        return "processorder";
    }
}
```
→ Maps to PUT and POST requests to URL `/order.*` (asterisk = any extension).

### Tại sao quan trọng cho thi
- **MCQ**: 5 attributes (name, value/path, method, params, headers)
- **MCQ wildcard**: `*` matches any extension trong URL
- **Code reading**: hiểu code sample để answer "URL nào sẽ được match?"

---

## 3.16 — CONTROLLER METHOD ARGUMENTS

### Supported Argument Types

| Type | Description |
|---|---|
| **org.springframework.ui.Model** | Implicit model belonging to controller/request |
| **javax.servlet.http.HttpServletRequest** | HTTP request object that triggered method |
| **org.springframework.web.multipart.MultipartRequest** | For multipart requests (file uploads) |

### Supported Argument Annotations

| Annotation | Description |
|---|---|
| **@RequestParam** | Binds argument to single request parameter or all request parameters |
| **@RequestHeader** | Binds argument to single request header or all request headers |
| **@RequestBody** | Gets request body. Value converted using `HttpMessageConverter` |
| **@CookieValue** | Binds method parameter to `javax.servlet.http.Cookie` |

### Examples

**Using Model**:
```java
@RequestMapping(value = "/")
public String getAllEmployee(Model model) {
    List<Employee> employees = employeeRepository.findAll();
    model.addAttribute("employees", employees);
    return "employeeList";
}
```

**Using @RequestParam**:
```java
@RequestMapping(path = "/api/foo", method = RequestMethod.GET)
public String getFoo(@RequestParam String id) {
    return "ID: " + id;
}
// Called with: /api/foo?id=123
```

### Giải thích (VN)
- **`Model`** = container chứa data để pass sang view (Thymeleaf truy cập bằng `${employees}`)
- **`@RequestParam`** = lấy giá trị từ query string (`?id=123`)
- **`@RequestBody`** = lấy toàn bộ body của request (JSON, XML)
- **`@RequestHeader`** = lấy header value (vd: `Authorization`)
- **`@CookieValue`** = lấy cookie

### Tại sao quan trọng cho thi
- **MCQ phân biệt**: `@RequestParam` (query) vs `@RequestBody` (body) vs `@PathVariable` (URL part)
- **MCQ**: 3 argument types + 4 annotations
- **Code reading**: hiểu URL `/api/foo?id=123` → `@RequestParam String id` lấy được `"123"`

---

## 🎯 KEY POINTS LECTURE 3

1. **Architectural design** = how system organized; critical link design ↔ requirements
2. **Architectural patterns** (5): MVC, Layered, Repository, Client‑Server, Pipe & Filter
3. **MVC**: Model (data) + View (presentation) + Controller (interaction)
4. **Layered**: hierarchical layers; lower = core services
5. **Repository**: central data store; single point of failure
6. **Client‑Server**: distributed services; replication possible
7. **Pipe & Filter**: data flows through transformation filters
8. **Spring MVC workflow** = 8 steps; **DispatcherServlet** is front controller
9. **Controllers**: 2 types (Interface‑based, Annotation‑based)
10. **`@RequestMapping`** has 5 attributes (name, value/path, method, params, headers)
11. **Controller arguments**: Model, HttpServletRequest, MultipartRequest + 4 annotations

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 3

- [ ] Định nghĩa exact wording: architectural design, 5 patterns
- [ ] Bảng 5 architectural patterns: 1 câu description + when used + adv + disadv
- [ ] Phân biệt 5 patterns qua keywords: "central data" → Repository, "layers" → Layered, "filter" → Pipe & Filter, "services" → Client‑Server, "Model/View/Controller" → MVC
- [ ] 8‑step Spring MVC workflow (đúng thứ tự)
- [ ] Controller annotations: `@Controller`, `@RequestMapping`, `@GetMapping`, `@PostMapping`
- [ ] 5 RequestMapping attributes
- [ ] 4 argument annotations: `@RequestParam`, `@RequestHeader`, `@RequestBody`, `@CookieValue`
- [ ] Phân biệt Single point of failure: Repository (toàn hệ thống) vs Client‑Server (mỗi service)
