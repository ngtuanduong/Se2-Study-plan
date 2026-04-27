# 📘 LECTURE 4 — Use Case, Activity Diagrams, ER Modeling, Hibernate (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

# 🟦 PART 1 — USE CASE MODELING

## 4.1 — UML & USE CASE DIAGRAMS

### Definition
> *"Use case modeling is part of the Unified Modeling Language (UML). UML provides standardized notation for software modeling."*

### Use Case Diagram Purpose
> *"Analyze/record the functional requirements of a system. Document what functions system performs."*

### Giải thích (VN)
**UML** (Unified Modeling Language) = ngôn ngữ chuẩn để vẽ mô hình phần mềm. Có 14 loại diagram, **Use case diagram** là 1 trong số đó.

**Use case diagram** trả lời câu hỏi: "**Hệ thống làm GÌ và AI sử dụng nó?**" — không quan tâm cách thực hiện.

### Tại sao quan trọng cho thi
- **MCQ**: UML = **Unified Modeling Language**
- **Fill‑in‑blank**: Use case diagrams document "*functional requirements*"

---

## 4.2 — USE CASE DIAGRAM CONCEPTS

### Definitions

| Concept | Definition |
|---|---|
| **Use case** | A function that the system performs, usually in response to a trigger from an actor |
| **Actor** | An external entity that interacts with a system. Usually a user role but can also be external system |
| **Association** | Connection between actor and use case showing interaction |
| **System boundary** | Box showing what is part of the system and what is external |

### Notation
- **Actor** = stick figure (hình que)
- **Use case** = ellipse (hình bầu dục)
- **Association** = solid line giữa actor và use case
- **System boundary** = box bao quanh use cases

### Giải thích (VN)
**Actor không bắt buộc là người**! Có thể là:
- User role (Customer, Admin, Doctor, …)
- External system (Payment Gateway, Email Service, …)
- Time/scheduler (cron job)
- Hardware (Sensor, Printer, …)

### Use case examples
- **Hotel reservation system**: actors = Guest, Receptionist; use cases = Make Reservation, Check Availability, Cancel Reservation, Check‑in
- **ATM**: actor = Customer; use cases = Withdraw Cash, Check Balance, Transfer Money

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Use case = "*function that system performs*"; Actor = "*external entity*"
- **MCQ trap**: Actor có thể là **external system**, không chỉ user
- **MCQ**: 4 concepts cốt lõi (use case, actor, association, system boundary)

---

## 4.3 — USE CASE RELATIONSHIPS — `<<include>>` & `<<extend>>` (CỰC QUAN TRỌNG!)

### `<<include>>` Relationship

**Purpose**:
- Action **lặp lại** trong nhiều use case → tách ra thành use case riêng
- Decompose use case thành smaller use cases
- Reuse common use case

**Key Characteristic**:
> *"Source use case is **incomplete without** the included use cases."*

**Example**: "Login" included trong "Check Balance", "Transfer Money", "View History" — vì cả 3 đều bắt buộc login trước.

### `<<extend>>` Relationship

**Purpose**:
- Extends use case bằng cách **thêm new behaviors** hoặc actions
- Extending use case có **all actions** của original + thêm
- Specialized use case extends general use case

**Key Characteristic**:
> *"Shows specialization/extension of base use case."*

**Example**: "Login with MFA" extends "Login" — có thể login bình thường, **tùy chọn** thêm MFA.

### So sánh trực quan

| Aspect | `<<include>>` | `<<extend>>` |
|---|---|---|
| Bắt buộc? | **CÓ** — base luôn cần included | **KHÔNG** — extend là tùy chọn |
| Ý nghĩa | Decomposition / Reuse | Specialization |
| Mũi tên | Base **→** Included | Extend **→** Base (NGƯỢC!) |

### Mnemonic
- **`<<include>>`** = "**phải có**" — như import bắt buộc
- **`<<extend>>`** = "**có thể thêm**" — như feature flag

### Tại sao quan trọng cho thi
- **MCQ trap kinh điển**: nhầm chiều mũi tên + nhầm ý nghĩa
- **Fill‑in‑blank**: source incomplete WITHOUT included; extending **adds** new behavior
- **MCQ scenario**: "Login required for Withdraw" → dùng `<<include>>`; "Optional MFA on login" → dùng `<<extend>>`

---

## 4.4 — WRITTEN USE CASES

### Definition
> *"Document containing detailed specifications for a use case. Step‑by‑step description of what must occur in successful use case execution. Each ellipse in use case diagram should have corresponding written use case."*

### 3 Key Sections

| Section | Description |
|---|---|
| **Normal Flow** | Description of sequence of interactions between actor and system. The **happy path** where everything works as expected |
| **Alternative Flows** | Scenarios different from normal flow but **still deliver same business outcome**. Secondary paths that achieve goal |
| **Exceptions** | Potential conditions that **prevent** use case from succeeding. Error conditions and what happens when they occur |

### Giải thích (VN)
**Use case diagram** là tổng quan (bird's eye view). **Written use case** là chi tiết step‑by‑step.

**Ví dụ "Withdraw Cash from ATM"**:
- **Normal Flow**: Customer inserts card → enter PIN → choose Withdraw → enter amount → ATM dispenses cash → return card
- **Alternative Flow**: Customer chooses Withdraw with receipt → ATM prints receipt
- **Exception**: PIN wrong 3 times → card retained; Insufficient balance → show error

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 sections** (Normal, Alternative, Exception)
- **Fill‑in‑blank**: Normal flow = "*happy path*"
- **MCQ trap**: Alternative ≠ Exception (Alternative vẫn đạt được goal; Exception thì KHÔNG)

---

# 🟦 PART 2 — ACTIVITY DIAGRAMS

## 4.5 — ACTIVITY DIAGRAMS

### Definition
> *"Activity diagrams show conditional logic for sequence of system activities needed to accomplish business process. Clearly show parallel and alternative behaviors. Can be used to show logic of use case."*

### Purpose & Uses
- **Depict flow of control** from activity to activity
- Help in **use case analysis** to understand actions needed
- Help in **identifying extensions** in use case
- Model **workflow and business processes**
- Model **sequential and concurrent** steps

### Giải thích (VN)
**Activity diagram** ≈ flowchart hiện đại với UML notation:
- **Hình tròn đặc** (●) = start
- **Hình tròn bao tròn đặc** (◎) = end
- **Hình chữ nhật bo tròn** = activity
- **Hình thoi** (◇) = decision (rẽ nhánh)
- **Thanh dày** (━━) = fork/join (parallel)

### From Use Case to Activity Diagram
> *"Flowchart or UML activity diagram is useful way to visualize (complex) use case. These diagrams show decision points and conditions causing branch from normal flow into alternative flow."*

→ Mỗi step trong written use case **map** sang 1 activity trong diagram.

### Use case
- **Pizza ordering** (slide có ví dụ): pick pizza → customize → add to cart → checkout → pay → delivery
- **Approval workflow**: submit → manager approves → director approves → done

### Tại sao quan trọng cho thi
- **MCQ**: Activity diagram dùng để visualize **complex use cases**
- **MCQ**: Show **parallel** và **alternative** behaviors

---

# 🟦 PART 3 — CONCEPTUAL DATA MODELING

## 4.6 — CONCEPTUAL DATA MODELING

### Definition
> *"Detailed model that captures overall structure of data in organization. Entities, attributes, and relationships extracted from analyzing captured requirements. No assumptions about underlying technology. Independent of any DBMS or implementation."*

### Timing
- Done **in parallel** with other requirements analysis (process modeling, use case modeling)
- In design stage: **translated into physical design**
- Useful for project planning

### Outcome / Deliverables
- **Entity‑relationship (E‑R) diagram** OR **UML class diagram**
- Contents:
  - Entities (or classes)
  - Relationships (or associations)
  - Data elements (must appear in DFD too)
  - Data store relationships

### Giải thích (VN)
**Conceptual data model** = "**bản đồ dữ liệu**" của business — vẽ ra các "thực thể" (Customer, Order, Product) và quan hệ giữa chúng. **Không quan tâm** dùng MySQL hay Oracle, không quan tâm cột nào index.

→ Ở stage thiết kế sau, conceptual model **dịch sang physical model** (chọn DBMS, chọn data type cụ thể).

### Use case
- BA vẽ ER diagram cho dự án mới → dev/DBA dùng để tạo schema MySQL cụ thể.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Conceptual model "*independent of any DBMS or implementation*"
- **MCQ**: Done **in parallel** with use case modeling, NOT after

---

## 4.7 — ENTITIES

### Definition
> *"A person, place, object, event, or concept in user environment about which data is maintained. Should be something being represented by system."*

### Important Distinctions

| Term | Definition |
|---|---|
| **Entity** | A specific thing (often used interchangeably with Entity Type) |
| **Entity Type** | Collection of entities that share common properties or characteristics |
| **Entity Instance** | Single occurrence of an entity type |

> *Note: Terms "Entity" and "Entity Type" are often used interchangeably.*

### Giải thích (VN)
- **Entity Type** = **lớp** (class) trong OOP — vd: "Student"
- **Entity Instance** = **đối tượng** (instance) — vd: "Student với MSV 22A123, tên Nguyễn Văn A"

### 5 Categories — examples
- **Person**: Customer, Employee, Doctor
- **Place**: Warehouse, Branch, Store
- **Object**: Product, Vehicle, Book
- **Event**: Sale, Reservation, Visit
- **Concept**: Account, Course, Promotion

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Entity = "*person, place, object, event, or concept*"
- **MCQ phân biệt**: Entity Type (collection) vs Entity Instance (single occurrence)

---

## 4.8 — ATTRIBUTES

### Definition
> *"Named property or characteristic of entity that is of interest to organization. Example: Vehicle_ID."*

### Naming Conventions
- Attribute name is **noun** and should be **unique**
- Follow standard format
- Similar attributes of different entity types should use **similar but distinguishing names** (vd: `customer_id` vs `employee_id`)

### Giải thích (VN)
**Attribute** = **field/column** trong DB. Mỗi entity có nhiều attribute — vd: Student có `student_id`, `full_name`, `dob`, `email`.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Attribute = "*named property or characteristic of entity*"
- **MCQ**: Attribute name là **noun**

---

## 4.9 — CANDIDATE KEYS & IDENTIFIERS

### Definitions

| Term | Definition |
|---|---|
| **Candidate Key** | Attribute (or combination of attributes) that **uniquely identifies** each instance of entity type |
| **Identifier** | Candidate key that has been **selected as unique, identifying characteristic** for entity type |

### Giải thích (VN)
1 entity có thể có **nhiều candidate keys** — bất kỳ attribute nào identify duy nhất đều là candidate. Ví dụ Student có:
- `student_id` (duy nhất)
- `email` (giả sử duy nhất)
- `(full_name + dob)` combination cũng có thể duy nhất

→ Tất cả là **candidate keys**.

**Identifier** = bạn **chọn 1** candidate key làm primary identifier (thường là `student_id`). Identifier = primary key trong DB.

### Mnemonic
- **Candidate** = ứng cử viên (nhiều)
- **Identifier** = người trúng cử (chỉ 1)

### Tại sao quan trọng cho thi
- **MCQ trap**: Identifier = **selected** candidate key, không phải bất kỳ attribute nào
- **Fill‑in‑blank**: Candidate key "*uniquely identifies*"; Identifier "*selected as unique, identifying*"

---

## 4.10 — RELATIONSHIPS

### Definition
> *"Association between instances of one or more entity types that is of interest to organization."*

### Degree
**Degree** = **number of entity types** that participate in relationship.

### 3 Types by Degree

| Type | Definition | Frequency |
|---|---|---|
| **Unary** | Relationship between instances of **one** entity type. Also called **recursive** | Less common |
| **Binary** | Relationship between instances of **two** entity types | **MOST COMMON** |
| **Ternary** | Simultaneous relationship among instances of **three** entity types | Less common |

### Giải thích & Examples
- **Unary**: Employee `manages` Employee (manager‑subordinate); Person `is married to` Person
- **Binary**: Student `enrolls in` Course; Customer `places` Order
- **Ternary**: Doctor `prescribes` Drug `for` Patient (3 entity types liên quan đồng thời)

### Tại sao quan trọng cho thi
- **MCQ đếm**: 3 degrees
- **MCQ**: Binary là **most common**
- **MCQ synonym**: Unary = recursive

---

## 4.11 — CARDINALITY

### Definition
> *"Cardinality is number of instances of entity B that can (or must) be associated with each instance of entity A."*

### 2 Components

| Component | Definition |
|---|---|
| **Minimum Cardinality** | **Minimum number** of B instances that **may be associated** with each A. Indicates whether relationship is **optional** |
| **Maximum Cardinality** | **Maximum number** of B instances that **may be associated** with each A. Indicates whether **1‑to‑1 or 1‑to‑many** |

### Mandatory vs Optional
- **Mandatory**: instance **must exist** in relationship
- **Optional**: instance **can be absent** in relationship
- **Mixed**: 1 mandatory, 1 optional ở 2 phía

### Notation (Crow's Foot)

| Symbol | Meaning |
|---|---|
| `\|` (single bar) | Exactly one (mandatory, max 1) |
| `O` (circle) | Zero (optional) |
| `<` (crow's foot) | Many |
| `\|\|` | Exactly one (1 and only 1) |
| `O\|` | Zero or one |
| `\|<` | One or many (mandatory many) |
| `O<` | Zero or many |

### Cardinality Combinations

| Combination | Meaning | Example |
|---|---|---|
| **1:1** | One A ↔ one B | Person ↔ Passport |
| **1:N** | One A ↔ many B | Customer ↔ Orders |
| **M:N** | Many A ↔ many B | Student ↔ Course (many‑to‑many) |

### Giải thích (VN)
**Cardinality** = số lượng. Cách đọc: "Mỗi Customer có thể có **0..N** Orders, mỗi Order phải thuộc **1..1** Customer".

### Tại sao quan trọng cho thi
- **MCQ**: 2 components (min + max)
- **MCQ**: Mandatory = must exist; Optional = can be absent
- **Fill‑in‑blank**: "Number of instances of entity B that can (or must) be associated with each instance of entity A"

---

## 4.12 — ASSOCIATIVE ENTITIES

### Definition
> *"Entity type that associates instances of one or more entity types and contains attributes peculiar to relationship between those entity instances. Sometimes called a 'gerund'."*

### When to Use
> *"Data modeler chooses to model relationship as entity type when relationship itself has attributes/properties."*

### Giải thích (VN)
Khi relationship có **data của riêng nó** (không thuộc về entity nào) → tạo associative entity.

**Ví dụ**:
- Student và Course có quan hệ `enrolls in`
- `enrolls in` có **attribute riêng**: `grade`, `enrollment_date`, `status`
- `grade` không thuộc Student (Student có nhiều grade ở nhiều môn) cũng không thuộc Course (Course có nhiều grade của nhiều student)
- → Tạo **`Enrollment`** = associative entity giữa Student và Course

### Implementation
Trong DB: associative entity → bảng riêng có FK đến cả 2 bảng gốc + các attribute riêng.

```sql
CREATE TABLE Enrollment (
    student_id INT,
    course_id INT,
    grade FLOAT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(id),
    FOREIGN KEY (course_id) REFERENCES Course(id)
);
```

### Tại sao quan trọng cho thi
- **MCQ trap**: Associative entity còn gọi là **gerund**
- **MCQ**: Khi nào dùng? Khi relationship có **attribute riêng**
- **Common scenario**: Student/Course/Enrollment

---

# 🟦 EXTENDED ER DIAGRAM (Specialization)

## 4.13 — SUPERTYPES & SUBTYPES

### Definitions

| Term | Definition |
|---|---|
| **Subtype** | Subgrouping of entities in entity type. Meaningful to organization. Shares common attributes/relationships distinct from other subgroupings |
| **Supertype** | Generic entity type that has relationship with one or more subtypes. **Parent type** |

### Example
- **Supertype**: Person
- **Subtypes**: Employee, Customer, Patient

### Giải thích (VN)
**Inheritance trong DB** — như extends trong OOP.
- Person có attribute chung: `name`, `dob`, `address`
- Employee thêm: `salary`, `department`
- Customer thêm: `loyalty_points`, `preferred_payment`
- Patient thêm: `medical_history`, `insurance`

### Hospital Example (slide có)
Supertype `Patient` → subtypes `OutpatientPatient`, `InpatientPatient`.

### Tại sao quan trọng cho thi
- **MCQ**: Supertype = parent, Subtype = child
- **MCQ**: Subtype "**shares common attributes**" với supertype + có attribute riêng

---

## 4.14 — SPECIALIZATION CONSTRAINTS (Total vs Partial)

### Total Specialization
> *"Each entity instance of supertype **must** be member of some subtype."*
- Represented by **double lines** (==)
- All instances must be classified into subtypes

### Partial Specialization
> *"Entity instance of supertype does **not have to** belong to any subtype."*
- Represented by **single lines** (—)
- Some instances may not be classified

### Giải thích (VN)
**Total**: Person **PHẢI** là Employee HOẶC Customer HOẶC Patient (không có "just Person")
**Partial**: Person có thể chỉ là "Person" thôi, không cần thuộc subtype nào

### Tại sao quan trọng cho thi
- **MCQ notation**: Total = **double lines**, Partial = **single line**
- **MCQ**: Total = "must be member"; Partial = "does not have to"

---

## 4.15 — DISJOINT vs OVERLAP RULES

### Disjoint Rule (`d`)
> *"If entity instance of supertype is member of one subtype, **cannot simultaneously** be member of any other subtype. Mutually exclusive subtypes."*

### Overlap Rule (`o`)
> *"Entity instance **can simultaneously be member** of two (or more) subtypes. Subtypes not mutually exclusive."*

### Giải thích (VN) + Examples
- **Disjoint (d)**: Person là Employee **HOẶC** Customer (không thể là cả 2). Vd: Account loại Personal **hoặc** Business.
- **Overlap (o)**: Person có thể là cả Employee **VÀ** Customer (nhân viên mua hàng công ty mình).

### Combined Constraints (4 cases)
| Total + Disjoint | Mỗi instance phải thuộc duy nhất 1 subtype |
| Total + Overlap | Mỗi instance phải thuộc ít nhất 1 subtype, có thể nhiều |
| Partial + Disjoint | Có thể không thuộc subtype nào, nếu thuộc thì duy nhất 1 |
| Partial + Overlap | Có thể không thuộc, có thể thuộc nhiều |

### Tại sao quan trọng cho thi
- **MCQ symbol**: `d` = Disjoint (KHÔNG thuộc nhiều), `o` = Overlap (THUỘC NHIỀU được)
- **MCQ trap**: Total/Partial là về **bắt buộc thuộc** subtype, Disjoint/Overlap là về **cùng thuộc nhiều**
- **MCQ scenario**: Phân biệt 4 combinations

---

# 🟦 PART 4 — HIBERNATE ENTITIES & ANNOTATIONS

## 4.16 — HIBERNATE ENTITY BASICS

### Required Annotations
- **`@Entity`**: marks class as persistent entity
- **`@Id`**: marks primary key field

### Optional Annotations
- **`@Table(name="...")`**: specifies mapped table's name. If omitted → automatically uses entity name as table name
- **`@Column(name="...")`**: specifies mapped column. If omitted → automatically uses attribute name as column name

### Code Example
```java
@Entity
@Table(name = "users") // optional
public class User {
    @Id
    @Column(name = "user_id") // optional
    private Long id;
    private String name;
    private String email;
}
```

### Tại sao quan trọng cho thi
- **MCQ**: `@Entity` + `@Id` = **REQUIRED**; `@Table` + `@Column` = **OPTIONAL**
- **MCQ**: Default behavior khi omit → dùng class/attribute name

---

## 4.17 — `@GeneratedValue` & STRATEGIES (4)

### Definition
> *"`@GeneratedValue` is often attached to Entity's primary key. Specifies strategy for generating primary key values."*

### 4 Strategies (HỌC THUỘC!)

| Strategy | Description |
|---|---|
| **`GenerationType.IDENTITY`** | Primary key value generated by **database system**. Let DB handle it (auto‑increment) |
| **`GenerationType.AUTO`** | Lets database system **select appropriate** generation method. **Database chooses best strategy** |
| **`GenerationType.TABLE`** | Uses **separate database table** to generate primary key values. Table holds next ID |
| **`GenerationType.SEQUENCE`** | Uses **database sequence** to generate primary key values. Uses DB sequence object |

### Giải thích (VN)
- **IDENTITY**: phổ biến với MySQL (`AUTO_INCREMENT`)
- **SEQUENCE**: phổ biến với PostgreSQL, Oracle (có sequence object riêng)
- **AUTO**: cho Hibernate tự chọn — lười nhưng dễ
- **TABLE**: dùng bảng riêng lưu next ID — chậm nhất, ít dùng

### Code Example
```java
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
```

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 strategies**
- **MCQ trap**: AUTO **chooses** strategy, không phải tự generate; IDENTITY là DB **tự sinh** auto‑increment
- **Common test**: "Which is NOT a GenerationType?" → đáp án thường là RANDOM, MANUAL, INCREMENT (không có)

---

## 4.18 — `@OneToMany` & `@ManyToOne` (One‑To‑Many Relationship)

### Definition
> *"`@OneToMany` and `@ManyToOne` can be attached to Entity attribute. Used to define relationships between entities."*

### Example: Singer & Albums
- One **Singer** owns many **Albums**
- One **Album** belongs to one **Singer**

### Implementation

**Album Entity** (the "many" side):
```java
@Entity
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne
    private Singer author;
}
```

**Singer Entity** (the "one" side):
```java
@Entity
public class Singer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @OneToMany
    List<Album> albums;
}
```

### The Owning Side (BEST PRACTICE!)
> *"Good practice to mark many‑to‑one side as owning side. Ensures data consistency."*

Use `mappedBy` property on **inverse side**:

```java
@Entity
public class Singer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @OneToMany(mappedBy = "author") // ← inverse side
    List<Album> albums;
}
```

→ "author" = tên field trong Album entity tham chiếu đến Singer.

### Giải thích (VN)
**Owning side** = side **lưu foreign key** trong DB. Best practice: side `@ManyToOne` (Album) là owning, vì FK `singer_id` lưu trong bảng `album` (mỗi Album có 1 Singer reference).

**`mappedBy`** = "tôi không own quan hệ này, side kia là owning, dùng field `author` của họ".

### Tại sao quan trọng cho thi
- **MCQ trap**: Owning side = **`@ManyToOne`** (many side), KHÔNG phải `@OneToMany`
- **MCQ**: `mappedBy` ở **inverse side** (one side)
- **Code reading**: Hiểu `mappedBy="author"` reference đến field nào

---

## 4.19 — `@ManyToMany` (Many‑To‑Many Relationship)

### Implementation
Just attach `@ManyToMany` annotations to entity attributes.

### Example: Students & Courses
- Many students can like many courses
- Many courses can be liked by many students

### Code Example
```java
@Entity
public class Student {
    @Id
    private Integer id;
    
    @ManyToMany
    List<Course> likedCourses;
}

@Entity
public class Course {
    @Id
    private Integer id;
    
    @ManyToMany
    private List<Student> likes;
}
```

### Configuring with `@JoinTable`
```java
@ManyToMany
@JoinTable(
    name = "course_like",
    joinColumns = @JoinColumn(name = "student_id"),
    inverseJoinColumns = @JoinColumn(name = "course_id")
)
List<Course> likedCourses;
```

### Parts of `@JoinTable`

| Part | Description |
|---|---|
| **`name`** | Name of join table (e.g., `course_like`) |
| **`joinColumns`** | Column name for **this entity's ID** (e.g., `student_id`) |
| **`inverseJoinColumns`** | Column name for **related entity's ID** (e.g., `course_id`) |

### Giải thích (VN)
M:N relationship trong DB **bắt buộc** cần bảng trung gian (junction/link table). Hibernate tự tạo nếu bạn không khai báo, nhưng tên cột mặc định không đẹp → dùng `@JoinTable` để custom.

### Resulting DB Schema
```sql
CREATE TABLE student (id INT PRIMARY KEY, ...);
CREATE TABLE course (id INT PRIMARY KEY, ...);
CREATE TABLE course_like (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (course_id) REFERENCES course(id)
);
```

### Tại sao quan trọng cho thi
- **MCQ**: `@ManyToMany` cần **`@JoinTable`** (nếu muốn custom column names)
- **MCQ**: 3 phần của `@JoinTable`: name, joinColumns, inverseJoinColumns
- **MCQ trap**: M:N → **bảng trung gian** trong DB, không phải duplicate FK

---

## 🎯 KEY POINTS LECTURE 4

### Use Case Modeling
- Use case = function system performs; Actor = external entity (user/system)
- `<<include>>` = bắt buộc (decomposition/reuse); `<<extend>>` = tùy chọn (specialization)
- Written use case 3 sections: Normal flow, Alternative flows, Exceptions

### Activity Diagrams
- Show conditional logic, parallel/concurrent steps
- Useful to visualize complex use cases

### ER Modeling
- Entity = person/place/object/event/concept
- Candidate Key vs Identifier (Identifier = chosen candidate)
- 3 degrees: Unary (recursive), Binary (most common), Ternary
- Cardinality: Min (mandatory/optional) + Max (1‑to‑1 / 1‑to‑many)
- Associative entity = "gerund" = relationship có attribute riêng
- Specialization: Total (==) vs Partial (—); Disjoint (d) vs Overlap (o)

### Hibernate
- `@Entity` + `@Id` = required; `@Table` + `@Column` = optional
- `@GeneratedValue` 4 strategies: IDENTITY, AUTO, TABLE, SEQUENCE
- `@OneToMany`+`@ManyToOne`: many‑side là owning, one‑side dùng `mappedBy`
- `@ManyToMany` + `@JoinTable(name, joinColumns, inverseJoinColumns)` cho M:N

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 4

- [ ] 4 use case concepts: use case, actor, association, system boundary
- [ ] Phân biệt `<<include>>` vs `<<extend>>` (mũi tên + ý nghĩa)
- [ ] 3 sections written use case: Normal/Alternative/Exception
- [ ] 3 relationship degrees: Unary/Binary/Ternary (Binary most common)
- [ ] Cardinality: Min + Max; Mandatory vs Optional
- [ ] 1:1, 1:N, M:N với example
- [ ] Associative entity = gerund (when relationship has own attributes)
- [ ] Total (==) vs Partial (—); Disjoint (d) vs Overlap (o)
- [ ] 4 GenerationType: IDENTITY, AUTO, TABLE, SEQUENCE
- [ ] @ManyToOne side = owning; @OneToMany dùng mappedBy
- [ ] @JoinTable: name, joinColumns, inverseJoinColumns
