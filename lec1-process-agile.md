# 📘 LECTURE 1 — Software Processes & Agile Development (CHI TIẾT)

> Mỗi khái niệm: **Definition (EN, exact wording)** + **Giải thích (VN)** + **Ví dụ/Use case** + **Tại sao quan trọng cho thi**.

---

## 1.1 — SOFTWARE PROCESS (Quy trình phần mềm)

### Definition
> *"A software process is a structured set of activities required to develop a software system."*

> *"A software process model is an abstract representation of a process presenting a description from a particular perspective."*

### Giải thích (VN)
**Software process** là **chuỗi hoạt động có cấu trúc** để xây dựng phần mềm — không phải code đơn lẻ, mà là toàn bộ workflow (gặp khách hàng → hỏi yêu cầu → phân tích → thiết kế → code → test → triển khai → bảo trì).

**Process model** là **mô tả trừu tượng** của process — như "bản đồ" hay "blueprint" để team hiểu mỗi bước làm gì. Có nhiều cách mô tả từ nhiều góc nhìn: theo activity, theo data flow, theo role…

### Process descriptions thường bao gồm
- **Products**: Outcomes (kết quả đầu ra) của 1 activity (vd: tài liệu requirements, source code)
- **Roles**: Vai trò (PM, dev, tester, customer)
- **Pre/post‑conditions**: Điều kiện trước/sau activity (vd: trước design phải có requirements approved)

### Ví dụ thực tế
- Quy trình **làm bánh**: chuẩn bị nguyên liệu → trộn bột → nướng → trang trí → đóng gói. Mỗi bước có pre/post‑condition (bột phải nhão trước khi nướng).
- **Software process** áp dụng tương tự cho việc xây phần mềm.

### Use case
- Công ty mới thành lập cần định nghĩa process để team biết phải làm gì.
- Audit ISO 9001 yêu cầu document hóa process.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "*A software process is a structured set of activities required to develop a software system*"
- **MCQ trap**: process model là **abstract representation**, không phải executable program

---

## 1.2 — FOUR BASIC PROCESS ACTIVITIES (4 hoạt động cơ bản)

### Definition
> *"Four basic activities common to all software processes:*
> *1. Specification — defining what the system should do*
> *2. Design and Implementation — defining the organization of the system and implementing it*
> *3. Validation — checking that it does what the customer wants*
> *4. Evolution — changing the system in response to changing customer needs."*

### Giải thích (VN)
4 hoạt động này có mặt **trong MỌI software process** dù là Waterfall, Agile hay bất kỳ model nào — chỉ khác **thứ tự** và **mức độ overlap**.

| Activity | Câu hỏi cốt lõi | Output |
|---|---|---|
| **Specification** | "Phần mềm cần LÀM GÌ?" | Tài liệu requirements (SRS) |
| **Design & Implementation** | "Tổ chức thế nào? Code ra sao?" | Architecture + source code |
| **Validation** | "Có đúng yêu cầu khách hàng không?" | Test results |
| **Evolution** | "Khi yêu cầu thay đổi thì sửa thế nào?" | Maintenance updates |

### Ví dụ thực tế
- Bạn làm app TodoList:
  - **Specification**: hỏi user cần lưu task, đặt deadline, push notification.
  - **Design**: chọn React Native + Firebase → vẽ UI + DB schema.
  - **Implementation**: code feature.
  - **Validation**: test trên iPhone, Android, phỏng vấn user.
  - **Evolution**: 6 tháng sau user yêu cầu thêm "share task" → cập nhật.

### Tại sao quan trọng cho thi
- **MCQ đếm**: Đáp án **4** activities (rất hay nhầm với 5 hoặc 6)
- **MCQ trap**: "Programming" KHÔNG phải 1 trong 4 — Design & Implementation gộp chung.
- **Fill‑in‑blank**: thứ tự thường — Specification → Design & Implementation → Validation → Evolution

---

## 1.3 — PLAN‑DRIVEN vs AGILE PROCESSES

### Definition
> *"Plan‑driven processes: All process activities are planned in advance and progress is measured against this plan."*

> *"Agile processes: Planning is incremental and easier to change the process to reflect changing customer requirements."*

### Giải thích (VN)
Đây là **2 triết lý đối lập** trong cách tổ chức process:

**Plan‑driven** = "**Lên kế hoạch trước, làm theo kế hoạch**"
- Hoạch định toàn bộ trước khi code
- Đo tiến độ theo plan đã đặt
- Phù hợp dự án có yêu cầu **rõ ràng, ổn định** (vd: phần mềm điều khiển máy bay, hệ thống ngân hàng lõi)

**Agile** = "**Linh hoạt, lập kế hoạch dần dần**"
- Lên kế hoạch ngắn hạn (sprint 2 tuần)
- Specification, design, implementation, validation **interleaved (đan xen)**
- Phù hợp khi yêu cầu **thay đổi nhanh** (vd: app startup, web e‑commerce)

### Key principle (CỰC QUAN TRỌNG)
> *"There are no right or wrong software processes; most practical processes include elements of both."*

→ Không có "Agile tốt hơn Plan‑driven". Thực tế thường **mix cả 2**.

### Ví dụ thực tế
- **Plan‑driven**: Boeing xây phần mềm điều khiển máy bay 787 — bug = chết người → cần plan kỹ, document mọi thứ.
- **Agile**: Spotify, Netflix — yêu cầu user thay đổi liên tục → cần adapt nhanh.

### Tại sao quan trọng cho thi
- **MCQ trap**: Waterfall = Plan‑driven, **NHƯNG** Incremental Development có thể là Plan‑driven HOẶC Agile.
- **Fill‑in‑blank**: "Plan‑driven processes: *all process activities planned in advance*"

---

## 1.4 — WATERFALL MODEL

### Definition
> *"The Waterfall Model: A plan‑driven model with separate and distinct phases of specification and development."*

### 5 Phases (HỌC THUỘC THỨ TỰ!)
1. **Requirements analysis and definition**
2. **System and software design**
3. **Implementation and unit testing**
4. **Integration and system testing**
5. **Operation and maintenance**

### Giải thích (VN)
Waterfall = "**thác nước**" — mỗi phase chảy xuống phase kế tiếp, **không quay lại**. Phase trước phải **hoàn thành 100%** (sign‑off) mới sang phase sau.

**Hình ảnh**: Như xây nhà — phải xong móng mới xây tường, xong tường mới lợp mái. Nếu phát hiện móng sai khi đã lợp mái → **rất khó sửa**.

### Drawbacks (HỌC!)
> *"Inflexible partitioning of the project into distinct stages makes it difficult to respond to changing customer requirements."*

- Khó thích nghi với thay đổi requirements (mà thực tế thì requirements **luôn thay đổi**)
- Chỉ phù hợp khi requirements **đã ổn định và hiểu rõ**
- Mostly used cho **large systems engineering projects** ở multiple sites (vd: dự án quân sự, hàng không)

### Ví dụ thực tế
- Phần mềm điều khiển vệ tinh — không thể "agile" vì sau khi phóng lên không sửa được dễ dàng.
- ERP cho ngân hàng nhà nước — yêu cầu rất rõ từ luật pháp, phù hợp Waterfall.

### Tại sao quan trọng cho thi
- **MCQ thứ tự phase**: "Sau System and software design là gì?" → **Implementation and unit testing**
- **MCQ trap**: Đếm phases — **5** (không phải 4 hay 6)
- "Mostly used for ___" → **large systems engineering projects**

---

## 1.5 — INCREMENTAL DEVELOPMENT

### Definition
> *"Specification, development, and validation are interleaved. May be plan‑driven or agile."*

### Giải thích (VN)
**Incremental** = "**xây từng phần, mỗi phần dùng được ngay**". Chia hệ thống lớn thành nhiều **increments** (gói nhỏ), mỗi increment được spec/code/test xong → giao khách hàng → tiếp tục increment kế tiếp.

**Hình ảnh**: Xây nhà cấp 4 trước (1 phòng ngủ + WC + bếp). Khi gia đình ở được rồi mới xây thêm tầng 2.

### Benefits (4 — HỌC!)
1. *"Cost of accommodating changing customer requirements is reduced"* (chi phí thay đổi yêu cầu thấp)
2. *"Easier to get customer feedback on the development work that has been done"* (khách phản hồi sớm)
3. *"More rapid delivery and deployment of useful software to the customer"* (giao nhanh)
4. *"Customers can use and gain value from software earlier"* (dùng & sinh lợi sớm)

### Problems (3)
1. *"The process is not visible"* — Khó đo tiến độ, vì progress không phải số phase đã xong
2. *"System structure tends to degrade as new increments are added"* — Cấu trúc hệ thống dần xuống cấp nếu không refactor
3. *"Incorporating further software changes becomes increasingly difficult and costly"* — Càng về sau càng khó thay đổi

### Ví dụ thực tế
- Facebook ban đầu chỉ là Harvard student directory → thêm group → thêm page → thêm marketplace…
- Mỗi feature là 1 increment, dùng được ngay khi release.

### Tại sao quan trọng cho thi
- **MCQ trap**: Incremental có thể là **plan‑driven HOẶC agile** (không cố định 1 loại!)
- **Fill‑in‑blank**: "Specification, development, and validation are *interleaved*"

---

## 1.6 — REUSE‑ORIENTED PROCESS (Integration & Configuration)

### Definition
> *"Systems are integrated from existing components or COTS (Commercial‑off‑the‑shelf) systems. Reused elements may be configured to adapt their behavior and functionality."*

### 5 Stages
1. Requirements specification
2. Software discovery and evaluation
3. Requirements refinement
4. Application system configuration
5. Component adaptation and integration

### Giải thích (VN)
**Reuse‑oriented** = "**Mua/dùng lại linh kiện thay vì tự làm từ đầu**". Như **lắp PC**: bạn không tự sản xuất CPU/RAM/SSD — bạn mua components có sẵn rồi lắp lại + cấu hình.

**3 loại reusable software**:
1. **Stand‑alone application systems (COTS)** được cấu hình cho môi trường cụ thể (vd: SAP ERP, Salesforce)
2. **Collections of objects/packages** integrate với framework như .NET hoặc J2EE
3. **Web services** publish theo chuẩn, gọi remote

### Advantages
- Reduced costs and risks
- Faster delivery and deployment

### Disadvantages
- *"Requirements compromises are inevitable so system may not meet real needs of users"* — Phải thỏa hiệp requirements
- *"Loss of control over evolution of reused system elements"* — Mất quyền kiểm soát evolution của component bên thứ ba

### Ví dụ thực tế
- Web app build trên Spring Boot + JPA + Thymeleaf — bạn không tự code framework, chỉ configure & extend.
- Trang e‑commerce dùng Shopify — toàn bộ engine có sẵn, bạn chỉ cấu hình.

### Tại sao quan trọng cho thi
- **MCQ**: "COTS" = **Commercial Off‑The‑Shelf** — phần mềm thương mại bán sẵn
- **Fill‑in‑blank**: "Reused elements may be *configured* to adapt their behavior and functionality"

---

## 1.7 — REQUIREMENTS ENGINEERING (Process kỹ thuật yêu cầu)

### Definition
> *"Software specification is the process of establishing what services are required and the constraints on the system's operation and development."*

### 3 Sub‑activities
1. **Requirements elicitation and analysis** — *"What do the system stakeholders require or expect from the system?"* (Hỏi & phân tích)
2. **Requirements specification** — *"Defining the requirements in detail"* (Mô tả chi tiết)
3. **Requirements validation** — *"Checking the validity of the requirements"* (Xác nhận tính đúng đắn)

### Giải thích (VN)
**Requirements engineering** = "**giai đoạn ngồi với khách hàng để hiểu họ thực sự cần gì**". Đây là phase **dễ sai nhất** trong toàn bộ SDLC — sai requirements = mọi nỗ lực code đều vô nghĩa.

### Ví dụ thực tế
- Khách hàng nói: "Tôi cần app đặt lịch khám" → Bạn hỏi: "Bệnh nhân tự chọn bác sĩ hay hệ thống chỉ định?", "Có cancel không?", "Có tích hợp insurance không?"…
- Mỗi câu hỏi giúp xác định 1 requirement cụ thể.

### Tại sao quan trọng cho thi
- **3 sub‑activities** — đếm chuẩn
- **Fill‑in‑blank**: "Software specification is *the process of establishing what services are required and the constraints*"

---

## 1.8 — DESIGN & IMPLEMENTATION

### Definition
> *"The process of converting the system specification into an executable system."*

### 4 Design Activities (slide ghi)
1. **Architectural design** — Identify overall structure, principal components, relationships, distribution
2. **Database design** — Design system data structures and DB representation
3. **Interface design** — Define interfaces between system components
4. **Component selection and design** — Search for reusable components or design new ones

### Giải thích (VN)
**Design** = "**bản vẽ kiến trúc**" trước khi xây. **Implementation** = "**xây thật**" theo bản vẽ.

Hai cái thường **interleave**: design 1 phần → code 1 phần → quay lại design phần khác.

### Ví dụ thực tế
- App đặt taxi: Architectural design vẽ ra: User App ↔ Backend API ↔ Driver App ↔ Map Service. Database design: bảng User, Trip, Payment. Interface design: REST API contract. Component design: chọn dùng Stripe (reuse) hay tự build payment (new).

### Programming & Debugging
> *"Programming is an individual activity with no standard process."*
> *"Debugging is the activity of finding program faults and correcting them."*

→ Programming **không có standard process** — mỗi người code khác nhau. Đây là điểm khác biệt với các giai đoạn khác.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Debugging is *the activity of finding program faults and correcting them*"
- **MCQ**: Programming = individual activity, **không có standard process**

---

## 1.9 — VALIDATION (V & V — Verification and Validation)

### Definition
> *"Verification and Validation (V & V) is intended to show that a system conforms to its specification and meets the requirements of the system customer."*

### Difference Verification vs Validation
- **Verification**: "Are we building the product **right**?" (đúng spec không?)
- **Validation**: "Are we building the **right product**?" (đúng nhu cầu khách hàng không?)

### 3 System Testing Stages
1. **Component testing** — Individual components tested independently (functions, objects, coherent groupings of objects)
2. **System testing** — Testing the system as a whole; testing of **emergent properties** is particularly important
3. **Customer testing** — Testing with customer data to check that the system meets customer's needs

### V‑Model
> *"Testing phases in a plan‑driven software process — shows parallel activities with development and testing at each level."*

**Ý nghĩa V‑Model**: Mỗi level dev có 1 level testing tương ứng (Requirements ↔ Acceptance Test, Design ↔ Integration Test, Code ↔ Unit Test).

### Ví dụ thực tế
- Test app TodoList:
  - **Component**: test function `addTask()` riêng lẻ
  - **System**: test toàn bộ flow add → list → complete → delete
  - **Customer**: cho 10 user thật dùng, xem có thuận tiện không

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Testing is *the most commonly used V & V activity*"
- **MCQ đếm**: 3 stages component → system → customer
- **MCQ thuật ngữ**: Verification ≠ Validation

---

## 1.10 — SOFTWARE EVOLUTION

### Definition
> *"Software is inherently flexible and can change. As requirements change through changing business circumstances, the software that supports the business must also evolve and change."*

### Giải thích (VN)
**Software evolution** = "**phần mềm phải thay đổi theo thời gian**". Trước đây gọi là **maintenance** (bảo trì), nhưng giờ ranh giới development vs maintenance **mờ dần**.

> *"Few software systems are completely new."* — Hiếm có hệ thống nào hoàn toàn mới; hầu hết đều kế thừa code cũ.

### Ví dụ thực tế
- Windows 11 vẫn kế thừa kernel từ Windows NT (1993).
- Facebook vẫn còn code PHP từ 2004 (đã được biên dịch lại bằng HHVM).

### Tại sao quan trọng cho thi
- **MCQ trap**: "Demarcation between development and evolution is *increasingly irrelevant*" (ranh giới ngày càng mờ)

---

## 1.11 — RAPID SOFTWARE DEVELOPMENT (Lý do Agile ra đời)

### Why Agile? (4 lý do — HỌC!)
1. *"Rapid development and delivery is now often the most important requirement"* — Tốc độ là quan trọng nhất
2. *"Businesses operate in fast-changing environments; impossible to produce stable software requirements"* — Yêu cầu không ổn định
3. *"Software must evolve quickly to reflect changing business needs"* — Phải tiến hóa nhanh
4. *"Plan-driven development does not meet these business needs"* — Plan‑driven không đáp ứng

### Khi nào Agile xuất hiện?
**Late 1990s** — phong trào Agile nổi lên để giảm thời gian giao phần mềm working.

### Tại sao quan trọng cho thi
- **MCQ trap**: Agile xuất hiện **late 1990s**, không phải 1980s hay 2000s

---

## 1.12 — AGILE DEVELOPMENT CHARACTERISTICS (5 đặc điểm)

### 5 Characteristics
1. *"Program specification, design and implementation are interleaved"* — Đan xen các giai đoạn
2. *"System is developed as a series of versions or increments with stakeholders involved in version specification and evaluation"* — Phát triển theo increments
3. *"Frequent delivery of new versions for evaluation"* — Giao thường xuyên
4. *"Extensive tool support (e.g., automated testing tools)"* — Dùng nhiều tool tự động
5. *"Minimal documentation; focus on working code"* — Tối thiểu document, tập trung code chạy được

### Tại sao quan trọng cho thi
- **MCQ trap**: "Agile means no documentation" → SAI, là **MINIMAL** documentation, không phải zero

---

## 1.13 — FIVE PRINCIPLES OF AGILE METHODS (5 NGUYÊN TẮC — CỰC QUAN TRỌNG!)

### Definition của từng principle (HỌC THUỘC TỪNG CÂU!)

| # | Principle | Definition (EN) |
|---|---|---|
| 1 | **Customer involvement** | *"Customers should be closely involved throughout the development process. Their role is to provide and prioritize new system requirements and to evaluate the iterations of the system."* |
| 2 | **Incremental delivery** | *"The software is developed in increments with the customer specifying the requirements to be included in each increment."* |
| 3 | **People not process** | *"The skills of the development team should be recognized and exploited. Team members should be left to develop their own ways of working without prescriptive processes."* |
| 4 | **Embrace change** | *"Expect the system requirements to change and so design the system to accommodate these changes."* |
| 5 | **Maintain simplicity** | *"Focus on simplicity in both the software being developed and in the development process. Wherever possible, actively work to eliminate complexity from the system."* |

### Giải thích (VN)
1. **Customer involvement** — Khách hàng **không** chỉ ra yêu cầu rồi biến mất; họ phải có mặt liên tục để **review & re‑prioritize** mỗi sprint.
2. **Incremental delivery** — Mỗi sprint giao 1 phần phần mềm hoạt động được, không chờ end of project.
3. **People not process** — Không áp đặt quy trình cứng; **trust skill** của team, để họ tự organize.
4. **Embrace change** — Thay vì sợ thay đổi, **thiết kế hệ thống dễ thay đổi**.
5. **Maintain simplicity** — KISS principle (Keep It Simple, Stupid). Phức tạp = bug nhiều.

### Ví dụ thực tế
- **Customer involvement**: Product Owner ngồi cạnh team Scrum, daily review.
- **Incremental delivery**: Mỗi sprint 2 tuần demo cho khách hàng feature mới.
- **People not process**: Team tự chọn dùng Scrum hay Kanban.
- **Embrace change**: Yêu cầu mới giữa sprint? Thêm vào backlog cho sprint sau.
- **Simplicity**: Refactor liên tục để code không phức tạp.

### Tại sao quan trọng cho thi
- **MCQ "Which is NOT a principle?"**: đáp án thường là *"Comprehensive documentation"*, *"Detailed upfront planning"*, *"Heavy process"*
- **MCQ đếm**: **5** principles

---

## 1.14 — AGILE MANIFESTO (4 GIÁ TRỊ CỐT LÕI!)

### The 4 Core Values
> *"Individuals and interactions over processes and tools"*
> *"Working software over comprehensive documentation"*
> *"Customer collaboration over contract negotiation"*
> *"Responding to change over following a plan"*

> *"That is, while there is value in the items on the right, we value the items on the left more."*

### Giải thích (VN)
Đây là **tuyên ngôn chính thức** ra đời 2001 bởi 17 software developers ở Utah. **Nhấn mạnh**: phía bên phải vẫn có giá trị, nhưng **bên trái quan trọng hơn**.

| Bên trái (ưu tiên) | Bên phải (vẫn có giá trị) |
|---|---|
| Individuals & interactions | Processes & tools |
| Working software | Comprehensive documentation |
| Customer collaboration | Contract negotiation |
| Responding to change | Following a plan |

### Ví dụ thực tế
- Có conflict giữa "follow project plan" vs "đáp ứng yêu cầu mới của khách"? → Agile chọn **đáp ứng yêu cầu mới**.
- Document đầy đủ nhưng phần mềm chưa chạy được vs phần mềm chạy được nhưng document ít? → Agile chọn **phần mềm chạy được**.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4** values
- **Fill‑in‑blank**: "values *working software* over comprehensive documentation"
- **MCQ trap**: Phía right (processes, documentation) **không phải vô giá trị**, chỉ là **ít ưu tiên hơn**

---

## 1.15 — EXTREME PROGRAMMING (XP)

### Definition
> *"A very influential agile method developed in the late 1990s. Introduced a range of agile development techniques. Takes an 'extreme' approach to iterative development."*

### Key XP Characteristics
- **New versions** may be built **several times per day**
- **Increments** delivered to customers every **2 weeks**
- **All tests** must be run for every build; **build only accepted if tests run successfully**

### Giải thích (VN)
**XP** = "**Lập trình cực đoan**" — đẩy các practice tốt đến mức **cực đoan** (vd: nếu test tốt thì test **trước** khi viết code, nếu integration tốt thì integrate **liên tục**).

### Tại sao quan trọng cho thi
- **MCQ**: 2 tuần / increment, **several times per day** new builds
- **MCQ "All tests must run successfully"** — đây là cốt lõi XP

---

## 1.16 — XP PRACTICES (10 — chia 5+5)

### Practices (a) — Planning & Development

| Practice | Definition |
|---|---|
| **Incremental planning** | *"Requirements recorded on story cards; stories included in release determined by time available and relative priority. Developers break stories into development tasks."* |
| **Small releases** | *"Minimal useful set of functionality providing business value is developed first. Releases frequent and incrementally add functionality."* |
| **Simple design** | *"Enough design carried out to meet current requirements and no more."* |
| **Test‑first development** | *"Automated unit test framework used to write tests for new functionality before the functionality itself is implemented."* |
| **Refactoring** | *"All developers expected to refactor code continuously as soon as code improvements are found. Keeps code simple and maintainable."* |

### Practices (b) — Team & Integration

| Practice | Definition |
|---|---|
| **Pair programming** | *"Developers work in pairs, checking each other's work and providing support to do a good job."* |
| **Collective ownership** | *"Pairs of developers work on all areas of system, so no islands of expertise develop. All developers take responsibility for all code. Anyone can change anything."* |
| **Continuous integration** | *"As soon as work on a task is complete, it is integrated into whole system. After integration, all unit tests in system must pass."* |
| **Sustainable pace** | *"Large amounts of overtime not acceptable; reduces code quality and medium‑term productivity."* |
| **On‑site customer** | *"Representative of end‑user should be available full‑time for XP team. Customer is a member of development team responsible for bringing system requirements for implementation."* |

### Giải thích (VN — top 5 cần hiểu sâu)

1. **Test‑first development (TDD)**: Viết test TRƯỚC code. Tại sao? Vì viết test trước = bạn phải hiểu rõ behavior. Test thất bại → viết code làm test pass → refactor.

2. **Refactoring**: Liên tục dọn dẹp code (rename biến, tách function, xóa duplicate). Quan trọng vì code không refactor sẽ rotting (mục nát).

3. **Pair programming**: 2 dev share 1 máy. 1 người gõ (driver), 1 người review real‑time (navigator). **Không phải** lãng phí — chất lượng code cao hơn, ít bug, học hỏi lẫn nhau.

4. **Continuous integration (CI)**: Mỗi commit → tự động build + test. Nếu fail → fix ngay. Tránh "merge hell" cuối sprint.

5. **On‑site customer**: Có khách hàng/PO ngồi cùng team. Khi dev có câu hỏi → hỏi ngay, không cần chờ meeting tuần sau.

### 4 Influential XP Practices (được dùng rộng rãi nhất)
1. User stories (for specification)
2. Refactoring
3. Test‑first development
4. Pair programming

### Tại sao quan trọng cho thi
- **MCQ đếm**: 5+5 = 10 practices, **4** influential
- **MCQ trap**: "On‑site customer" thuộc practices **(b)**, không phải Agile manifesto value
- **Fill‑in‑blank**: Test‑first development uses *"Automated unit test framework"*, framework e.g. **JUnit**

---

## 1.17 — USER STORIES IN XP

### Definition
> *"User requirements are expressed as user stories or scenarios. These are written on cards and the development team breaks them down into implementation tasks."*

### Giải thích (VN)
**User story** = "**1 câu chuyện ngắn** mô tả 1 feature từ góc nhìn người dùng". Format chuẩn:

> *"As a [role], I want [feature] so that [benefit]."*

Ví dụ:
> *"As a doctor, I want to prescribe medication for my patient so that the pharmacy can prepare the prescription."*

Story được:
- **Viết trên card** (physical hoặc digital như Trello)
- **Break down** thành tasks bởi developers
- **Estimated** (story points)
- **Prioritized** bởi customer

### Ví dụ "Prescribing medication" (slide có ví dụ)
- Story chính: bác sĩ kê đơn thuốc
- Tasks: search drug, check dose, check allergy, sign prescription, send to pharmacy

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "User requirements expressed as *user stories or scenarios*"
- **MCQ**: written on **cards**

---

## 1.18 — REFACTORING (Trong XP)

### Concept
> *"Conventional wisdom: Design for change by anticipating changes and spending time/effort on them."*
> *"XP Approach: Changes cannot be reliably anticipated; instead propose constant code improvement (refactoring)."*

### Giải thích (VN)
Triết lý **truyền thống**: Cố gắng dự đoán thay đổi tương lai → thiết kế hệ thống "extensible".
Triết lý **XP**: Không thể dự đoán → thay vì design over‑engineered, **liên tục refactor** khi cần.

### Examples of Refactoring (slide)
1. Re‑organize class hierarchy to remove duplicate code
2. Tidy up & rename attributes/methods to improve understandability
3. Replace inline code with calls to library methods

### Process
- Programming team **looks for possible improvements** even **without immediate need**
- Improves understandability → reduces need for documentation
- Some changes require **architecture refactoring**, much more expensive

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Refactoring is *continuous code improvement*"
- **MCQ trap**: Refactoring **không thay đổi behavior**, chỉ cải thiện cấu trúc

---

## 1.19 — TEST‑DRIVEN DEVELOPMENT (TDD)

### Test‑first Development
> *"Writing tests before code clarifies the requirements to be implemented."*
> *"Tests are written as programs rather than data so they can be executed automatically."*

### XP Testing Features (4)
1. Test‑first development
2. Incremental test development from scenarios
3. User involvement in test development and validation
4. Automated test harnesses run all component tests each time new release is built

### Problems with Test‑first (3)
1. *"Programmers prefer programming to testing; sometimes take shortcuts when writing tests"* — Dev thích code hơn test, viết test sơ sài
2. *"Some tests very difficult to write incrementally"* (vd: complex UI workflow)
3. *"Difficult to judge completeness of test set"* — Khó biết đã test đủ chưa

### Customer's Role in Testing
- Help develop **acceptance tests** for stories in next release
- Customer who is part of team **writes tests** as development proceeds
- All new code validated to ensure it's what customer needs

### Test Automation Framework (e.g., JUnit)
- Tests written as **executable components** before task implemented
- Stand‑alone, simulate input, check output meets specification
- Whenever functionality added → tests rerun → catch regression immediately

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Tests written as *programs rather than data*"
- **MCQ**: framework e.g. **JUnit**
- **MCQ "Why test‑first?"**: clarifies requirements

---

## 1.20 — PAIR PROGRAMMING

### Definition & Purpose
- Programmers work in pairs developing code together
- Helps develop **common ownership** of code & spreads knowledge across team
- Serves as **informal review process** as each line of code looked at by **more than 1 person**
- Encourages refactoring as whole team can benefit

### Practice
- Programmers sit together at **same computer**
- Pairs created **dynamically** so all team members work with each other
- Sharing of knowledge important; reduces risks when team members leave
- Evidence: **pair working together more efficient than 2 programmers separately**

### Giải thích (VN)
Tưởng pair programming = chậm gấp đôi vì 2 người làm 1 việc? **Sai!**
- 1 người (driver) gõ code, 1 người (navigator) suy nghĩ chiến lược, review real‑time
- Bug được catch ngay khi viết, không phải code review sau (rẻ hơn nhiều)
- Knowledge được share: nếu 1 người nghỉ việc, người kia vẫn hiểu code

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: "Programmers sit together at the *same computer*"
- **MCQ trap**: Pair programming **không phải** lãng phí; evidence cho thấy hiệu quả cao

---

## 🎯 KEY POINTS TỪ LECTURE 1 (TÓM TẮT CUỐI BÀI)

1. Software process = activities to produce software system; process model = abstract representation
2. **3 General process models**: Waterfall, Incremental, Reuse‑oriented
3. Requirements engineering develops software specification
4. Design & implementation transform spec → executable system
5. Validation checks system meets real user needs
6. Software evolution = changing existing systems for new requirements
7. **Agile** = incremental methods focusing on rapid development, frequent releases, reduced overheads, high quality
8. **Agile practices**: user stories, frequent releases, continuous improvement, test‑first, customer participation

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 1

Khi đã thuộc các điểm sau là OK cho phần Lec 1:

- [ ] Đếm chuẩn: 4 activities, 5 principles Agile, 4 manifesto values, 5+5 XP practices, 4 influential XP, 5 phases Waterfall, 3 testing stages
- [ ] Phân biệt: Plan‑driven vs Agile, Waterfall vs Incremental, Verification vs Validation
- [ ] Định nghĩa đúng wording: software process, process model, plan‑driven, agile, refactoring, TDD, pair programming
- [ ] Thứ tự: Waterfall 5 phases, 4 process activities
- [ ] Hiểu sâu: Why agile? When to use what model? Why pair programming works?
- [ ] Common traps: Incremental có thể là plan‑driven; Refactoring không đổi behavior; Agile != no documentation
