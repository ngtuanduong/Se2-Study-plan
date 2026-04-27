# 📘 LECTURE 5 — Project Management (CHI TIẾT)

> Format: Definition (EN) + Giải thích (VN) + Use case + Tại sao quan trọng cho thi.

---

## 5.1 — SOFTWARE PROJECT MANAGEMENT — DEFINITION

### Definition
> *"Concerned with activities involved in ensuring that software is delivered on time and on schedule and in accordance with the requirements of the organisations developing and procuring the software."*

### 4 Success Criteria
1. **Deliver** the software to the customer at the **agreed time**
2. **Keep overall costs within budget**
3. **Deliver software that meets the customer's expectations**
4. **Maintain a coherent and well‑functioning development team**

### Giải thích (VN)
**Project Management** = **đảm bảo dự án thành công** trên 4 mặt: thời gian, ngân sách, chất lượng, và team. Thiếu 1 trong 4 = thất bại (vd: deliver đúng hạn nhưng team kiệt sức nghỉ việc → cũng coi là thất bại trung hạn).

**Iron triangle**: Time, Cost, Quality (chọn 2/3 trong điều kiện cố định 1).

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 success criteria**
- **MCQ trap**: Tiêu chí 4 ("coherent team") thường bị quên
- **Fill‑in‑blank**: PM "*concerned with activities involved in ensuring that software is delivered on time and on schedule*"

---

## 5.2 — SOFTWARE MANAGEMENT DISTINCTIONS (3 ĐẶC TRƯNG ĐỘC ĐÁO!)

### Three Unique Characteristics

> *"Three unique characteristics that distinguish software from other engineering projects:"*

1. **The product is intangible**
   - *"Software cannot be seen or touched; project managers cannot see progress by simply looking at the artifact being constructed."*
2. **Many software projects are 'one‑off' projects**
   - *"Large software projects are usually different from previous projects; managers may find it difficult to anticipate problems even with experience."*
3. **Software processes are variable and organization specific**
   - *"Cannot reliably predict when a particular software process is likely to lead to development problems."*

### Giải thích (VN)
1. **Intangible**: Xây nhà → nhìn móng/tường biết tiến độ. Code → nhìn không biết "60% xong" nghĩa là gì.
2. **One‑off**: Mỗi dự án phần mềm đều khác — không như sản xuất xe (làm 1000 chiếc giống nhau).
3. **Variable processes**: Khác công ty dùng khác process; ngay cùng công ty cũng adapt theo dự án.

### Use case
- Boss hỏi: "Dev nói code 80% rồi mà sao chưa demo được?" → vì intangible, "80%" không có nghĩa cụ thể.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 distinctions**
- **MCQ trap**: "intangible" thường được test (đáp án dễ nhầm với "invisible")
- **Fill‑in‑blank**: 3 cụm từ — "*intangible*", "*one‑off projects*", "*variable and organization specific*"

---

## 5.3 — FACTORS INFLUENCING PROJECT MANAGEMENT (6 FACTORS)

### List
1. **Company size**
2. **Software customers**
3. **Software size**
4. **Software type**
5. **Organizational culture**
6. **Software development processes**

### Giải thích (VN)
PM phải **adapt** theo 6 yếu tố này — không có "one‑size‑fits‑all":
- **Company size**: Startup 5 người vs FAANG 100k người → cách quản lý cực khác
- **Customers**: B2C user thường xuyên thay đổi vs B2G enterprise yêu cầu compliance
- **Software size**: App TodoList vs Hệ thống ngân hàng lõi
- **Software type**: Game vs Healthcare vs Embedded
- **Org culture**: Hierarchical vs Flat
- **Dev processes**: Waterfall vs Agile vs Hybrid

### Tại sao quan trọng cho thi
- **MCQ đếm**: **6 factors**

---

## 5.4 — UNIVERSAL MANAGEMENT ACTIVITIES (5)

### Definition của từng activity

| # | Activity | Description |
|---|---|---|
| 1 | **Project Planning** | *"Project managers are responsible for planning, estimating and scheduling project development and assigning people to tasks."* |
| 2 | **Risk Management** | *"Assess the risks that may affect a project, monitor these risks, take action when problems arise."* |
| 3 | **People Management** | *"Choose people for their team, establish ways of working that leads to effective team performance."* |
| 4 | **Reporting** | *"Project managers are usually responsible for reporting on the progress of a project to customers and to the managers of the company developing the software."* |
| 5 | **Proposal Writing** | *"The first stage in a software project may involve writing a proposal to win a contract. The proposal describes the objectives of the project and how it will be carried out."* |

### Giải thích (VN)
- **Planning**: Lập plan, ước lượng effort, schedule, phân công
- **Risk mgmt**: Lec này sẽ đi sâu — phòng ngừa rủi ro
- **People mgmt**: Tuyển, motivate, conflict resolution
- **Reporting**: Báo cáo cho stakeholders
- **Proposal writing**: Trước khi có dự án, viết proposal để win contract (đặc biệt outsourcing)

### Tại sao quan trọng cho thi
- **MCQ đếm**: **5 activities**
- **MCQ thứ tự**: Proposal writing thường là **first stage**
- **MCQ trap**: "Programming" KHÔNG phải PM activity

---

# 🟦 RISK MANAGEMENT (Phần lớn của lecture này)

## 5.5 — RISK MANAGEMENT — DEFINITION

### Definition
> *"Risk management is concerned with identifying risks and drawing up plans to minimise their effect on a project."*

### Why Risk Management Matters
> *"Important because of the inherent uncertainties in software development. Uncertainties stem from:"*
- Loosely defined requirements
- Requirements changes due to changes in customer needs
- Difficulties in estimating time and resources required
- Differences in individual skills

### Giải thích (VN)
**Risk** ≠ Problem. **Risk** = thứ **CÓ THỂ** xảy ra trong tương lai → cần kế hoạch trước. **Problem** = thứ ĐÃ xảy ra → cần fix.

Quote nổi tiếng: *"Hope is not a strategy"* — không thể hy vọng risk không xảy ra; phải có plan.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: Risk mgmt = "*identifying risks and drawing up plans to minimise their effect*"
- **MCQ trap**: Risk ≠ Problem (risk là tương lai, problem là hiện tại)

---

## 5.6 — RISK CLASSIFICATION (2 DIMENSIONS)

### Dimension 1: Type of Risk

| Type | Examples |
|---|---|
| **Technical** | Database performance issues, hardware failures |
| **Organizational** | Restructuring, financial problems |
| **People** | Cannot recruit staff, key staff illness, lack of training |
| **Requirements** | Changes requiring major rework |
| **Estimation** | Time/defect/size underestimated |
| **Technology** | New tech superseded, performance issues |
| **Tools** | Code generation inefficiency, integration problems |

### Dimension 2: What is Affected

| Risk | Affects |
|---|---|
| **Project risks** | **Schedule or resources** |
| **Product risks** | **Quality or performance** of software being developed |
| **Business risks** | **Organisation** developing or seeking to acquire software |

### Giải thích (VN)
**Type** = nguồn gốc; **Effect** = ảnh hưởng đến đâu. 1 risk có thể vừa là Technical (type) vừa là Project (effect).

### Examples (slide có)

| Risk | Affects |
|---|---|
| Staff turnover | Project (mất người = chậm) |
| Hardware unavailability | Project |
| Requirements change | Project AND Product |
| Specification delays | Project AND Product |
| Size underestimate | Project AND Product |
| CASE tool underperformance | Product |
| Technology change | Product |
| Product competition | Business |

### Tại sao quan trọng cho thi
- **MCQ đếm**: 2 dimensions; 7 types; 3 categories of effect
- **MCQ phân biệt**:
  - Project = schedule/resources
  - Product = quality/performance
  - Business = organisation
- **Fill‑in‑blank**: definitions của Project/Product/Business risks

---

## 5.7 — RISK MANAGEMENT PROCESS (4 STAGES — HỌC THUỘC!)

### 4 Stages

#### Stage 1: Risk Identification
> *"Identify project, product and business risks."*
- May be **team activity** OR **based on individual project manager's experience**
- A **checklist of common risks** may be used

#### Stage 2: Risk Analysis
> *"Assess probability and seriousness of each risk."*

**Probability levels**: Very low / Low / Moderate / High / Very high (5 levels)
**Risk consequences**: Catastrophic / Serious / Tolerable / Insignificant (4 levels)

#### Stage 3: Risk Planning
> *"Develop a strategy to manage each risk."* — 3 strategy types:

| Strategy | Definition |
|---|---|
| **Avoidance** | Reduce the **probability** that risk will arise |
| **Minimization** | Reduce the **impact** of risk on project/product |
| **Contingency** | Plans to deal with risk **if it arises** |

#### Stage 4: Risk Monitoring
> *"Assess each identified risk regularly to decide whether it is becoming less or more probable. Assess whether the effects of the risk have changed. Each key risk should be discussed at management progress meetings."*

### Giải thích (VN)
Nhớ thứ tự: **I‑A‑P‑M** (Identification → Analysis → Planning → Monitoring).

**Strategy phân biệt** (CỰC QUAN TRỌNG!):
- **Avoidance**: ngăn risk xảy ra (vd: kiểm tra kỹ requirements để tránh requirement changes)
- **Minimization**: giảm tác động nếu xảy ra (vd: cross‑train nhiều người để 1 người nghỉ vẫn ok)
- **Contingency**: kế hoạch B nếu xảy ra (vd: nếu hardware lỗi → có backup hardware sẵn)

### Use case examples
- **Risk**: Key dev có thể nghỉ việc
- **Avoidance**: tăng lương, cải thiện work environment
- **Minimization**: pair programming, document code, knowledge sharing
- **Contingency**: có sẵn list contractor để hire ngay

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 stages**, **3 strategies**
- **MCQ thứ tự**: Identification → Analysis → Planning → Monitoring
- **MCQ phân biệt**: Avoidance (giảm probability) ≠ Minimization (giảm impact) ≠ Contingency (kế hoạch khi xảy ra)
- **MCQ đếm**: 5 probability levels, 4 consequence levels
- **MCQ trap**: "Catastrophic" là **consequence**, không phải probability

---

## 5.8 — RISK INDICATORS (Cái cần monitor)

### Indicators by Risk Type

| Risk Type | Potential Indicators |
|---|---|
| **Estimation** | Failure to meet agreed schedule; failure to clear reported defects |
| **Organizational** | Organizational gossip; lack of action by senior management |
| **People** | Poor staff morale; poor relationships amongst team members; high staff turnover |
| **Requirements** | Many requirements change requests; customer complaints |
| **Technology** | Late delivery of hardware/support software; many reported technology problems |
| **Tools** | Reluctance to use tools; complaints about CASE tools; demands for higher‑powered workstations |

### Giải thích (VN)
**Risk indicator** = "**dấu hiệu cảnh báo**" (early warning sign). PM phải để ý các dấu hiệu này trong meetings, daily standups.

**Ví dụ**: dev bắt đầu phàn nàn về tools, ai cũng muốn workstation mạnh hơn → có thể tools đang là bottleneck → tools risk.

### Tại sao quan trọng cho thi
- **MCQ matching**: ghép Risk Type với Indicator
- **MCQ**: 6 risk types có indicators tương ứng

---

## 5.9 — RISK MANAGEMENT STRATEGIES (Examples)

### Examples Table (from slide)

| Risk | Strategy |
|---|---|
| Organizational financial problems | Prepare briefing document showing importance to business goals & cost‑effectiveness |
| Recruitment problems | Alert customer to potential difficulties and possibility of delays |
| Staff illness | Reorganize team for more overlap of work and mutual understanding |
| Defective components | Replace with bought‑in components of known reliability |
| Requirements changes | Derive traceability info to assess impact; maximize information hiding in design |
| Organizational restructuring | Prepare briefing document for senior management |
| Database performance | Investigate buying higher‑performance database |
| Underestimated development time | Investigate buying‑in components; consider program generator |

### Giải thích (VN)
**Patterns thường thấy**:
- "**Prepare briefing document**" — communicate up to senior mgmt
- "**Alert customer**" — communicate out to client
- "**Reorganize team**" — internal restructuring
- "**Buy‑in components**" — reuse thay vì tự làm

### Tại sao quan trọng cho thi
- **MCQ scenario‑based**: cho 1 risk, chọn strategy phù hợp

---

## 5.10 — WHAT‑IF QUESTIONS (Risk Planning Examples)

### Slide examples
- What if several engineers are ill at the same time?
- What if an economic downturn leads to 20% budget cuts?
- What if open‑source software performance is inadequate and the only expert leaves?
- What if the software component supplier goes out of business?
- What if the customer fails to deliver revised requirements as predicted?

### Giải thích (VN)
**What‑if analysis** = brainstorm các kịch bản xấu có thể xảy ra. Mỗi câu trả lời → 1 risk + 1 strategy.

### Tại sao quan trọng cho thi
- **MCQ**: What‑if là **technique** trong risk **planning** (Stage 3), không phải Stage 1

---

# 🟦 PEOPLE MANAGEMENT

## 5.11 — PEOPLE MANAGEMENT — DEFINITION

### Definition
> *"Choosing the right people to work on a project and organizing the team and its working environment."*

### Key Principle
> *"People are an organisation's most important assets. Unless there is some understanding of people, management will be unsuccessful. Poor people management is an important contributor to project failure."*

### Giải thích (VN)
PM **không** chỉ là plan + schedule — phần lớn là **work với con người**. Tech project fail thường do **people problem** chứ không phải technical problem.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: People = "*organisation's most important assets*"

---

## 5.12 — PEOPLE MANAGEMENT FACTORS (4 — HỌC THUỘC!)

### Definitions

| # | Factor | Description |
|---|---|---|
| 1 | **Consistency** | *"Team members should all be treated in a comparable way without favourites or discrimination"* |
| 2 | **Respect** | *"Different team members have different skills and these differences should be respected"* |
| 3 | **Inclusion** | *"Involve all team members and make sure that people's views are considered"* |
| 4 | **Honesty** | *"Always be honest about what is going well and what is going badly in a project"* |

### Mnemonic
**C‑R‑I‑H** = **C**onsistency, **R**espect, **I**nclusion, **H**onesty.

### Giải thích (VN)
- **Consistency**: Không thiên vị (đừng cho 1 dev được làm việc thú vị mãi)
- **Respect**: Tôn trọng skill khác nhau (frontend dev # backend dev # tester — không ai "thượng đẳng")
- **Inclusion**: Mọi người được nói; không chỉ senior dev quyết định mọi thứ
- **Honesty**: Communicate trung thực — kể cả tin xấu (deadline trễ, budget hết)

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 factors**
- **Fill‑in‑blank**: 4 từ — Consistency, Respect, Inclusion, Honesty

---

## 5.13 — MOTIVATING PEOPLE

### Definition
> *"Organizing the work and the working environment to encourage people to work effectively."*

### Why Motivation Matters
> *"If people are not motivated, they will not be interested in the work they are doing. They will work slowly, be more likely to make mistakes and will not contribute to the broader goals of the team or the organization."*

### Giải thích (VN)
**Motivated dev** vs **demotivated dev** = năng suất chênh lệch **5‑10 lần** (theo nghiên cứu). Lương cao chưa đủ — cần meaningful work, autonomy, mastery, purpose.

### Tại sao quan trọng cho thi
- **Fill‑in‑blank**: motivation = "*organizing the work and the working environment to encourage people to work effectively*"

---

## 5.14 — HUMAN NEEDS HIERARCHY (Maslow‑style — 3 NEEDS slide ghi)

### 3 Main Types

| Need | Example |
|---|---|
| **Basic needs** | Food, sleep, shelter |
| **Personal needs** | Respect, self‑esteem |
| **Social needs** | To be accepted as part of a group |

### Need Satisfaction in Software Development

> *"In software development groups, basic physiological and safety needs are not an issue."*

→ Focus của PM là 3 nhóm cao hơn:

| Focus area | What to provide |
|---|---|
| **Social Needs** | Communal facilities; allow informal communications (e.g., social networking) |
| **Esteem Needs** | Recognition of achievements; appropriate rewards |
| **Self‑realization Needs** | Training (people want to learn more); responsibility |

### Giải thích (VN)
Maslow gốc có 5 nhóm; slide gộp lại 3:
- **Basic** (Physiological + Safety) — không lo trong dev (lương đủ sống)
- **Personal** (Esteem) — recognition, achievement
- **Social** (Belonging) — be part of team

→ PM tập trung vào **Social, Esteem, Self‑realization** (3 cao nhất của Maslow gốc).

### Tại sao quan trọng cho thi
- **MCQ đếm**: 3 need types
- **MCQ**: Trong dev, basic needs **không phải vấn đề** → focus 3 cấp cao

---

## 5.15 — CASE STUDY: DOROTHY (Individual Motivation)

### Situation
> *"Dorothy, a hardware design expert, started coming to work late with deteriorating work quality and poor team communication."*

### Root Cause
> *"She lost interest because she expected to develop hardware interfacing skills but had little opportunity due to the product direction. She feared not developing these skills would make future job searches difficult."*

### Solution by Alice (Manager)
- Gave Dorothy more **design autonomy**
- Organized **training courses** in software engineering for future opportunities

### Key Learning
> *"If people management problems aren't sorted, other group members will become dissatisfied and feel unfair share of work."*

### Giải thích (VN)
**Bài học**: dev unhappy → không chỉ ảnh hưởng cá nhân mà **toàn team**. Manager phải nhận biết sớm + giải quyết.

**Self‑realization need** không được thỏa mãn (skill development) → demotivation.

### Tại sao quan trọng cho thi
- **MCQ scenario**: case study Dorothy có thể xuất hiện
- **MCQ**: cause = **self‑realization need**; solution = autonomy + training

---

## 5.16 — PERSONALITY TYPES IN GROUPS (3 TYPES)

### 3 Personality Types

| Type | Focus |
|---|---|
| **Task‑oriented** | Focus on **completing tasks** |
| **Self‑oriented** | Focus on **personal goals and advancement** |
| **Interaction‑oriented** | Focus on **group dynamics and relationships** |

### Case Study Example (Alice's Team)
- Alice (self‑oriented) — considered project a way to get noticed and promoted
- Brian (task‑oriented)
- Bob (task‑oriented)
- Carol (interaction‑oriented)
- Dorothy (self‑oriented)
- Ed (interaction‑oriented)
- Fred (task‑oriented)

### Group Composition Strategy
> *"Alice deliberately selected members with complementary personalities — looking for one or two interaction‑oriented personalities with task‑oriented individuals to complete the team."*

### Giải thích (VN)
- **Task‑oriented**: dev coder thuần — chỉ care code chạy
- **Self‑oriented**: ambitious — muốn promotion, fame
- **Interaction‑oriented**: glue — gắn kết team, conflict resolution

**Best team**: mix cả 3 — nhiều task để productive, có self‑oriented để drive innovation, có interaction để giữ team hòa thuận.

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 types**
- **MCQ**: Mix cả 3 trong team (không nên chỉ 1 loại)

---

# 🟦 TEAMWORK & GROUP ORGANIZATION

## 5.17 — GROUP ORGANIZATION IMPACT

> *"The way a group is organized affects:"*
- Decisions made by that group
- Ways information is exchanged
- Interactions between development group and external project stakeholders

### Key Questions for Organization
- Should PM be technical leader?
- Who makes critical technical decisions, and how?
- How handle interactions with external stakeholders & senior mgmt?
- How integrate non‑co‑located people?
- How share knowledge across group?

### Tại sao quan trọng cho thi
- **MCQ**: 3 things group org affects (decisions, info exchange, interactions)

---

## 5.18 — TYPES OF GROUP ORGANIZATION (3)

### 1. Informal Groups
- For **small** groups, organized informally
- Group acts as a whole; comes to **consensus**
- Group leader = **external interface** (NOT task allocator)
- Work discussed by group; tasks allocated by **ability and experience**
- **Successful for groups where all members are experienced and competent**

### 2. Hierarchical Structure
- For **large projects**
- Different groups responsible for different **subprojects**

### 3. Agile Development
- **Always informal**
- Principle: *"Formal structure inhibits information exchange"*

### Giải thích (VN)
- **Informal**: 5 dev senior cùng startup — không cần hierarchy, ai cũng có ý kiến
- **Hierarchical**: 100 dev ở dự án lớn — cần manager → team lead → dev cấp
- **Agile**: BẮT BUỘC informal — nếu hierarchical thì không phải agile

### Tại sao quan trọng cho thi
- **MCQ đếm**: **3 types**
- **MCQ trap**: Agile **always** informal (không phải optional)
- **MCQ**: Informal phù hợp khi all members **experienced and competent**

---

## 5.19 — GROUP COMMUNICATIONS

### Definition
> *"Good communications are essential for effective group working."*

### Why It Matters
- Information exchange on **status of work, design decisions, changes**
- Strengthens **group cohesion** (promotes understanding)

### 4 Factors Influencing Group Communications

| # | Factor | Description |
|---|---|---|
| 1 | **Group Size** | Larger group → harder to communicate |
| 2 | **Group Structure** | Communication better in **informal** than hierarchical |
| 3 | **Group Composition** | Better when **different personality types**; better when **mixed** rather than single sex |
| 4 | **Physical Work Environment** | Good workplace org encourages communication |

### Giải thích (VN)
- **Size**: 4‑5 người dễ nói chuyện; 50 người thì cần meetings/Slack
- **Structure**: Informal mọi người nói thoải mái; Hierarchical chỉ dám nói qua manager
- **Composition**: diverse team có nhiều góc nhìn
- **Environment**: open‑plan office vs cubicle vs remote

### Tại sao quan trọng cho thi
- **MCQ đếm**: **4 factors**
- **MCQ**: Informal > Hierarchical về communication
- **MCQ**: Mixed personalities + mixed sex → better communication

---

## 🎯 KEY POINTS LECTURE 5

### Project Management Basics
- 4 Success Criteria (time, budget, expectations, team)
- 3 Software Distinctions (intangible, one‑off, variable processes)
- 6 Influencing Factors
- 5 Universal PM Activities (Planning, Risk mgmt, People mgmt, Reporting, Proposal writing)

### Risk Management
- 2 Dimensions (Type × What's affected)
- 7 Risk Types (Technical, Org, People, Requirements, Estimation, Technology, Tools)
- 3 Effect Categories (Project, Product, Business)
- 4 Stages (I‑A‑P‑M: Identification → Analysis → Planning → Monitoring)
- 5 Probability levels, 4 Consequence levels
- 3 Strategy Types (Avoidance, Minimization, Contingency)

### People Management
- 4 Factors (C‑R‑I‑H: Consistency, Respect, Inclusion, Honesty)
- 3 Need Types (Basic, Personal, Social)
- 3 Personality Types (Task, Self, Interaction)

### Group Organization
- 3 Types (Informal, Hierarchical, Agile = always informal)
- 4 Communication Factors (Size, Structure, Composition, Environment)

---

## 📋 CHECKLIST KIẾN THỨC LECTURE 5

- [ ] 4 Success Criteria
- [ ] 3 Software Distinctions: intangible, one‑off, variable
- [ ] 5 PM Activities + thứ tự (Proposal là first stage)
- [ ] Risk: 7 types × 3 effect categories (Project/Product/Business)
- [ ] Risk Mgmt 4 stages: I‑A‑P‑M
- [ ] 3 Risk Strategies: Avoidance (probability) / Minimization (impact) / Contingency (when arises)
- [ ] 5 probability levels, 4 consequence levels — phân biệt 2 cái này
- [ ] Risk Indicators by type (6 categories)
- [ ] 4 People Mgmt Factors: C‑R‑I‑H
- [ ] 3 Need Types in dev: Social/Esteem/Self‑realization (basic không phải vấn đề)
- [ ] 3 Personality Types: Task/Self/Interaction
- [ ] 3 Group Org Types: Informal/Hierarchical/Agile (always informal)
- [ ] 4 Communication Factors
