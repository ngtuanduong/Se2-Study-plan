# 📘 LECTURE 7 — Data Dictionary, Class Diagram, UI Prototyping, JPA Queries, Criteria API (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

# 🟦 PART 1 — DATA DICTIONARY

## 7.1 — DATA DICTIONARY — DEFINITION

### Definition
> *"Represents data elements and structures of the application domain. Used to describe details, special cases, and domain concepts that an E‑R model is usually insufficient for."*

### Contents (6 items)
- Description of data elements
- Data validation criteria
- Composition
- Data types
- Allowed values
- Data examples

### Structure & Advantages
- Should be **structured according to data model** (for ease of reading)
- Should contain **non‑trivial details**
- 3 Advantages:
  - Avoids **different understandings** of data among project participants
  - Good **supplement** to E‑R diagram
  - **Requirements validation**: customers/expert users can validate description through data dictionary

### Giải thích (VN)
**ER diagram** chỉ vẽ entity + relationship + attribute names. **Data dictionary** giải thích **chi tiết từng attribute**:
- Kiểu dữ liệu là gì? (VARCHAR(50)? INT?)
- Giá trị hợp lệ? (status chỉ "active"/"inactive"/"pending")
- Có format đặc biệt? (phone phải `+84xxx`)
- Ví dụ giá trị?

### Ví dụ
| Attribute | Description | Type | Validation | Example |
|---|---|---|---|---|
| `student_id` | Mã sinh viên do trường cấp | VARCHAR(10) | Format: 2 chữ số năm + 1 chữ + 5 chữ số | `22A12345` |
| `gpa` | Điểm trung bình tích lũy | DECIMAL(3,2) | 0.00 – 4.00 | `3.45` |
| `status` | Trạng thái học tập | VARCHAR(20) | enum: ACTIVE, GRADUATED, SUSPENDED | `ACTIVE` |

### Use case
- BA viết Data Dictionary → developer hiểu chính xác cần validate gì → DBA biết kiểu dữ liệu để tạo schema
- Customer validate (vd: "GPA range 0‑4 đúng không?")

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Data dictionary describes *details, special cases, and domain concepts that an E‑R model is usually insufficient for*"
- **MCQ**: 3 advantages: avoid misunderstanding, supplement ER, requirements validation
- **MCQ**: 6 contents

---

# 🟦 PART 2 — UML CLASS DIAGRAM REVIEW

## 7.2 — CLASS DIAGRAM KEY CONCEPTS

### Concepts (slide có review)
- **Attributes** + **data types**
- **Operations / Methods**
- **Relationships** (associations, inheritance, composition)
- **Multiplicity**
- **Visibility modifiers**: public, private, protected

### Visibility Modifiers (UML notation)
| Symbol | Meaning |
|---|---|
| `+` | public |
| `-` | private |
| `#` | protected |
| `~` | package |

### Relationships
- **Association**: solid line — "có biết đến nhau"
- **Inheritance** (generalization): solid line + hollow triangle — "is‑a"
- **Composition**: solid line + filled diamond — "có và sở hữu (life cycle phụ thuộc)"
- **Aggregation**: solid line + hollow diamond — "có nhưng không sở hữu"

### Multiplicity
- `1` — exactly one
- `0..1` — zero or one
- `*` or `0..*` — zero or many
- `1..*` — one or many
- `n..m` — between n and m

### Tại sao quan trọng cho thi
- **MCQ**: 4 visibility modifiers + ký hiệu
- **MCQ**: phân biệt Composition vs Aggregation (filled vs hollow diamond)
- **MCQ**: notation multiplicity

---

# 🟦 PART 3 — UI DESIGN (PROTOTYPING)

## 7.3 — PROTOTYPING — KEY QUOTE

### Quote
> *"Users don't know what they want until you show it to them."* — Kent Beck

### Key Question
**How to develop software which customer agrees with?**
**Answer**: MOCKUP & PROTOTYPE

### Giải thích (VN)
Khách hàng **không biết** mình muốn gì cho đến khi nhìn thấy. Spec text mơ hồ → mockup/prototype = **show, don't tell**.

### Tại sao quan trọng cho thi
- **MCQ**: Quote của **Kent Beck** (cũng là cha đẻ của XP)

---

## 7.4 — PROTOTYPING TOOLS

### Common Tools (slide list)
- **Adobe XD**
- **Figma**
- **InVision Studio**
- **Sketch**
- **Framer**
- **Webflow**

### Prototyping Tool Features (5)

| Feature | Detail |
|---|---|
| 1. **Graphical interface design** | Vẽ UI trực quan |
| 2. **Interactive prototype creation** | Events, transitions, animations |
| 3. **Team collaboration** | Multi‑user real‑time |
| 4. **Reuse / Community** | Component libraries, plugins |
| 5. **Conversion** from prototype to implementation | E.g., convert to HTML/CSS |

### Tại sao quan trọng cho thi
- **MCQ tool names**: Adobe XD, Figma, InVision, Sketch, Framer, Webflow
- **MCQ đếm**: 5 features

---

## 7.5 — PROTOTYPE FIDELITY LEVELS (4 LEVELS)

### Definitions

| Level | Definition |
|---|---|
| **Wireframe** | A rough layout. **Lowest fidelity** |
| **Mockup** | Draft version of UI using simple design elements. **Medium fidelity** |
| **Prototype** | Early version of software that shows UI design and is **interactive**. Higher fidelity |
| **Interactive Prototype** | Fully interactive prototype with **full user interaction flow** |

### Giải thích (VN — từ thấp đến cao)
1. **Wireframe** = sketch trên giấy hoặc tool simple — chỉ ô vuông, đường line. Tập trung **layout**.
2. **Mockup** = visual design — màu, font, image, **không tương tác**. Trông như screenshot.
3. **Prototype** = clickable — **tương tác cơ bản** (click button → page khác).
4. **Interactive Prototype** = full simulation — animation, validation, transitions giống app thật.

### Tại sao quan trọng cho thi
- **MCQ thứ tự**: Wireframe < Mockup < Prototype < Interactive Prototype (theo fidelity)
- **MCQ trap**: **Wireframe** = lowest fidelity (KHÔNG phải Mockup)
- **MCQ definitions**: 4 levels exact wording

---

# 🟦 PART 4 — SPRING DATA JPA DERIVED QUERIES

## 7.6 — JpaRepository BUILT‑IN METHODS

### Overview
> *"By implementing JpaRepository interface, a repository will already have some basic CRUD methods defined and implemented."*

### Built‑in Methods

**Select queries**:
- `findAll()`
- `findById()`
- `findAllById()`

**Insert/Update queries**:
- `save()`
- `saveAll()`

**Delete queries**:
- `delete()`
- `deleteAll()`
- `deleteById()`
- `deleteAllById()`

### Giải thích (VN)
Bạn **không cần implement** các method trên — Spring tự generate ở runtime.

`save()` thông minh: nếu entity có ID đã tồn tại → UPDATE; nếu chưa có → INSERT.

### Tại sao quan trọng cho thi
- **MCQ**: 9 built‑in methods (3 select + 2 save + 4 delete)
- **MCQ**: `save()` xử lý cả insert + update

---

## 7.7 — DERIVED QUERY METHODS — CONCEPT

### Definition
> *"You can create custom queries which are derived from method name by following a naming convention."*

### Format
**`findBy<FieldName><Operator>`** → Spring tự generate SQL

### Example
```java
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByName(String name);
}
```

**Equivalent SQL**:
```sql
SELECT e FROM Employee e WHERE e.name = ?1
```

### Giải thích (VN)
Bạn chỉ viết tên method theo convention → Spring đọc tên → generate JPQL/SQL.

**Magic**: name `findByNameAndAge` → SQL: `WHERE name = ? AND age = ?`. Không phải code thủ công.

### Tại sao quan trọng cho thi
- **MCQ**: Derived queries derived **from method name**
- **MCQ syntax**: `findBy<Field>`

---

## 7.8 — IS / EQUALS vs LIKE OPERATORS

### Is / Equals (3 cách viết tương đương)
```java
findByFirstname(String firstname)
findByFirstnameIs(String firstname)
findByFirstnameEquals(String firstname)
// SQL: WHERE x.firstname = ?1
```

### Negation
```java
findByLastnameNot(String lastname)
// SQL: WHERE x.lastname <> ?1
```

### Like Operators
```java
findByFirstnameLike(String pattern)
// SQL: WHERE x.firstname LIKE ?1
// User must include % manually: "John%"

findByFirstnameNotLike(String pattern)
// SQL: WHERE x.firstname NOT LIKE ?1
```

### Tại sao quan trọng cho thi
- **MCQ**: 3 cách `findBy<Field>`, `findBy<Field>Is`, `findBy<Field>Equals` — tương đương nhau
- **MCQ**: `Not` → `<>` (SQL không bằng)

---

## 7.9 — CONTAINING / STARTINGWITH / ENDINGWITH (CỰC TRAP!)

### Partial Matching Operators

| Method | Generated SQL | Pattern wrapping |
|---|---|---|
| **`findByNameContaining`** | `... WHERE x.name LIKE ?1` | parameter wrapped: **`%X%`** |
| **`findByNameStartingWith`** | `... WHERE x.name LIKE ?1` | parameter: **`X%`** (% appended) |
| **`findByNameEndingWith`** | `... WHERE x.name LIKE ?1` | parameter: **`%X`** (% prepended) |

### Giải thích (VN)
Khác `findByNameLike` (bạn tự thêm `%`), 3 method này Spring **tự động bọc `%`**:
- `Containing("abc")` → search `%abc%`
- `StartingWith("abc")` → search `abc%`
- `EndingWith("abc")` → search `%abc`

### Use case
- Search box: `findByNameContaining(keyword)` — tìm tên chứa keyword
- Filter alphabet: `findByLastnameStartingWith("A")` — tên bắt đầu A

### Tại sao quan trọng cho thi
- **MCQ trap kinh điển**: `Containing` wrap `%X%`, **KHÔNG phải** `X%` (cái đó là `StartingWith`)
- **Code reading**: hiểu output SQL của mỗi method

---

## 7.10 — AND / OR KEYWORDS

### Examples
```java
Employee findByNameOrAddress(String n, String addr)
// WHERE x.name = ?1 OR x.address = ?2

Employee findByNameContainingAndAge(String n, int age)
// WHERE x.name LIKE ?1 AND x.age = ?2 (name wrapped in %)
```

### Giải thích (VN)
Có thể combine nhiều operator. **Thứ tự tham số** trong method khớp với **thứ tự field** trong tên method.

### Tại sao quan trọng cho thi
- **MCQ**: `And`, `Or` keywords trong derived queries
- **MCQ**: Order tham số khớp order field trong method name

---

## 7.11 — DISTINCT & IGNORECASE

### Distinct
```java
Employee findDistinctByName(String n)
// SELECT DISTINCT ... WHERE x.name = ?1
```

### IgnoreCase
```java
Employee findByNameIgnoreCase(String n)
// WHERE UPPER(x.firstname) = UPPER(?1)
```

### Giải thích (VN)
- **`Distinct`**: bỏ duplicate (sau `findDistinct`)
- **`IgnoreCase`**: case‑insensitive search (Spring tự convert sang UPPER)

### Tại sao quan trọng cho thi
- **MCQ**: 2 modifier keywords + chức năng
- **MCQ**: IgnoreCase generate `UPPER(field) = UPPER(param)`

---

# 🟦 PART 5 — JPA CRITERIA API

## 7.12 — CRITERIA API — DEFINITION & PURPOSE

### Definition
> *"The Criteria API is a solution for handling complex/dynamic queries based on user input."*

### Why Use Criteria API?
- Most apps provide **front end for users to search** for information
- Many searchable fields displayed; users enter info in **only some**
- Difficult to prepare many queries with **each possible combination** of parameters
- **Criteria API solves this** by allowing **dynamic query building**

### Giải thích (VN)
**Vấn đề derived queries**: nếu form search có 10 filter (name, age, city, status, ...) và user chỉ nhập 2 → bạn không thể có method `findByNameAndAge`, `findByNameAndCity`, ... cho mọi combination (2^10 = 1024 methods!).

**Criteria API** = build query **dynamic** dựa trên field user nhập.

### Use case
- Form admin search user với 10 filter optional
- Báo cáo có nhiều condition tùy chọn
- Query phức tạp với JOIN, subquery, aggregation

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Criteria API "*for handling complex/dynamic queries based on user input*"
- **MCQ**: Vì sao cần? → tránh prepare nhiều method cho mọi combination

---

## 7.13 — CRITERIA API BASIC CONCEPTS — 3 COMPONENTS (HỌC THUỘC!)

### 3 Key Components

| Component | Role |
|---|---|
| **CriteriaBuilder** | *"Used to construct criteria queries, compound selections, expressions, predicates, and ordering"* |
| **CriteriaQuery** | *"Represents a query object"* |
| **Root** | *"Represents the entity in the FROM clause"* |

### Giải thích (VN)
- **CriteriaBuilder**: factory tạo các thành phần (predicate, order, ...)
- **CriteriaQuery**: chứa toàn bộ query
- **Root**: tương đương `FROM Entity` — entity đang query từ

### Code Pattern
```java
CriteriaBuilder cb = entityManager.getCriteriaBuilder();    // 1
CriteriaQuery<Person> cq = cb.createQuery(Person.class);    // 2
Root<Person> root = cq.from(Person.class);                  // 3
```

→ 3 dòng đầu **bắt buộc** trong mọi Criteria query.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 components**
- **MCQ**: Root thuộc **FROM** clause (NOT SELECT)
- **MCQ**: CriteriaBuilder = factory cho expressions, predicates, ordering

---

## 7.14 — BASIC CRITERIA API QUERY (Equivalent to SELECT *)

### Equivalent SQL
```sql
SELECT * FROM person
```

### Criteria API
```java
CriteriaBuilder cb = entityManager.getCriteriaBuilder();
CriteriaQuery<Person> cq = cb.createQuery(Person.class);
Root<Person> root = cq.from(Person.class);
cq.select(root);
List<Person> results = entityManager.createQuery(cq).getResultList();
```

### Giải thích (VN)
- `cb.createQuery(Person.class)` → query trả về Person
- `cq.from(Person.class)` → Root từ bảng Person
- `cq.select(root)` → SELECT * (toàn bộ Person fields)
- `entityManager.createQuery(cq).getResultList()` → execute + return List

### Tại sao quan trọng cho thi
- **Code reading**: nhận biết các method Criteria API
- **MCQ**: thứ tự gọi (createQuery → from → select → execute)

---

## 7.15 — WHERE CLAUSE WITH PREDICATES

### Definition of Predicate
> *"In the Criteria API, a predicate represents a condition or a filter that you apply to your query. It's a way to specify the criteria that the data must meet."*

### Example Code
```java
// age >= 18
Predicate agePredicate = cb.greaterThan(root.get("age"), 18);

// name LIKE 'John%'
Predicate namePredicate = cb.like(root.get("name"), "John%");

// Combine predicates using AND
Predicate finalPredicate = cb.and(agePredicate, namePredicate);

// Apply to query
cq.where(finalPredicate);
```

### Giải thích (VN)
**Predicate** = 1 điều kiện (`age > 18`, `name LIKE 'John%'`, `status = 'ACTIVE'`).

**Combine**:
- `cb.and(p1, p2, ...)` — tất cả phải true
- `cb.or(p1, p2, ...)` — ít nhất 1 true
- `cb.not(p)` — phủ định

### Common Predicate Methods
- `cb.equal(path, value)` — `field = value`
- `cb.greaterThan(path, value)` — `field > value`
- `cb.lessThan(path, value)` — `field < value`
- `cb.like(path, pattern)` — `field LIKE pattern`
- `cb.between(path, low, high)` — `field BETWEEN low AND high`
- `cb.isNull(path)` / `cb.isNotNull(path)`

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Predicate = "*condition or filter that you apply to your query*"
- **MCQ**: Combine bằng `cb.and()`, `cb.or()`

---

## 7.16 — COMBINING MULTIPLE PREDICATES (Array)

### Code (combining > 2 predicates)
```java
Predicate[] predicates = new Predicate[3];
predicates[0] = cb.greaterThan(root.get("age"), 18);
predicates[1] = cb.like(root.get("name"), "John%");
predicates[2] = cb.equal(root.get("male"), true);

cq.where(predicates);  // implicit AND
```

### Giải thích (VN)
Khi có nhiều predicates (>2), dùng **array** thay vì `cb.and(p1, p2, p3, ...)` — clean code hơn.

`cq.where(predicates_array)` → ngầm hiểu **AND** giữa các predicates.

### Use case
- Form search có 5 filter optional → build dynamic predicate array, chỉ thêm predicate cho field user nhập:
```java
List<Predicate> predicates = new ArrayList<>();
if (name != null)  predicates.add(cb.like(root.get("name"), "%" + name + "%"));
if (age != null)   predicates.add(cb.equal(root.get("age"), age));
if (city != null)  predicates.add(cb.equal(root.get("city"), city));
cq.where(predicates.toArray(new Predicate[0]));
```

### Tại sao quan trọng cho thi
- **MCQ**: Array of predicates → ngầm hiểu **AND**

---

## 7.17 — SORTING IN CRITERIA QUERY

### Steps for Sorting
```java
CriteriaBuilder cb = entityManager.getCriteriaBuilder();
CriteriaQuery<Person> cq = cb.createQuery(Person.class);
Root<Person> root = cq.from(Person.class);

// Order by age ascending
Order order = cb.asc(root.get("age"));

cq.orderBy(order);
```

### Other Order Methods
- `cb.asc(path)` — ascending
- `cb.desc(path)` — descending
- `cq.orderBy(order1, order2, ...)` — multiple orders

### Tại sao quan trọng cho thi
- **MCQ**: `cb.asc()` / `cb.desc()` cho sorting
- **MCQ syntax**: `cq.orderBy(order)`

---

## 7.18 — EXECUTING CRITERIA QUERY & PROCESSING RESULTS

### Code
```java
List<Person> results = entityManager.createQuery(cq).getResultList();

for (Person person : results) {
    System.out.println("Name: " + person.getName() + ", Age: " + person.getAge());
}
```

### Other execution methods
- `getResultList()` — return List<T>
- `getSingleResult()` — return single T (throws if 0 or >1)
- `setMaxResults(n)` — limit result
- `setFirstResult(n)` — offset (cho pagination)

### Tại sao quan trọng cho thi
- **MCQ**: `entityManager.createQuery(cq).getResultList()` để execute

---

## 🎯 KEY POINTS LECTURE 7

### Data Dictionary
- Mô tả data elements, validation, types, allowed values, examples
- 3 advantages: avoid misunderstanding / supplement ER / requirements validation

### Class Diagram
- Visibility: `+`(public), `-`(private), `#`(protected), `~`(package)
- Composition (filled diamond) vs Aggregation (hollow diamond)
- Multiplicity notation

### Prototyping
- Quote: "Users don't know what they want until you show it" — Kent Beck
- Tools: Adobe XD, Figma, InVision, Sketch, Framer, Webflow
- 4 fidelity levels: Wireframe < Mockup < Prototype < Interactive Prototype

### JPA Derived Queries
- Built‑in: findAll, findById, save, delete, ...
- Operators: Is, Equals, Not, Like, NotLike
- Pattern: `Containing` (`%X%`), `StartingWith` (`X%`), `EndingWith` (`%X`)
- Logical: And, Or
- Modifier: Distinct, IgnoreCase

### Criteria API
- Solution for **complex/dynamic queries** based on user input
- 3 components: CriteriaBuilder, CriteriaQuery, Root
- Predicate = condition/filter; combine with `cb.and()`/`cb.or()` or array
- Sort: `cb.asc()` / `cb.desc()` → `cq.orderBy()`
- Execute: `entityManager.createQuery(cq).getResultList()`

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 7

- [ ] Data Dictionary: 6 contents, 3 advantages, 1 quote định nghĩa
- [ ] Class diagram visibility: 4 modifiers
- [ ] 4 prototype fidelity levels theo thứ tự
- [ ] Quote Kent Beck "users don't know..."
- [ ] 9 built‑in JpaRepository methods
- [ ] Derived query operators: Is/Equals/Not, Like/NotLike, And/Or, Distinct/IgnoreCase
- [ ] **Containing** (`%X%`) vs **StartingWith** (`X%`) vs **EndingWith** (`%X`)
- [ ] Criteria API: 3 components (CriteriaBuilder, CriteriaQuery, Root)
- [ ] Root thuộc FROM clause
- [ ] Predicate = condition/filter; combine bằng `cb.and()` hoặc array
- [ ] Sort: `cb.asc()` / `cb.desc()` → `cq.orderBy()`
- [ ] Execute: `entityManager.createQuery(cq).getResultList()`
