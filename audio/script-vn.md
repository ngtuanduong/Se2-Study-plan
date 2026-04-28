# SE2 Study Audio Script — Vietnamese Narration

Format: text segments, separated by `[PAUSE N]` markers (N = số giây im lặng). Generator sẽ split tại marker, gọi edge-tts cho mỗi segment, ghép silence vào giữa, output MP3 cuối cùng.

---

[CHAPTER: Mở đầu]

Xin chào. Đây là bản ôn tập âm thanh môn Software Engineering 2, dành cho bạn nghe khi chạy bộ. Mỗi lecture sẽ gồm ba phần. Phần một là giải thích các khái niệm chính bằng tiếng Việt. Phần hai là điểm danh các thuật ngữ tiếng Anh cần nhớ chính xác cho thi. Phần ba là hai câu hỏi kiểm tra. Sau mỗi câu hỏi sẽ có mười giây yên lặng để bạn suy nghĩ, rồi đáp án sẽ được đọc lên. Bắt đầu nào.

[PAUSE 2]

[CHAPTER: Lecture 1 — Software Process và Agile]

Software process là một tập hợp các hoạt động có cấu trúc dùng để xây dựng phần mềm. Process model là mô tả trừu tượng của process, nhìn từ một góc nhìn cụ thể. Mọi process trong phần mềm đều có bốn hoạt động cơ bản. Một là Specification, tức xác định phần mềm cần làm gì. Hai là Design and Implementation, tức tổ chức hệ thống và viết code. Ba là Validation, tức kiểm tra phần mềm có đúng nhu cầu khách hàng không. Bốn là Evolution, tức tiến hóa phần mềm khi yêu cầu thay đổi.

Có ba mô hình process tổng quát. Waterfall là mô hình tuần tự với năm giai đoạn. Tuần tự là Requirements, Design, Implementation và unit testing, Integration và system testing, cuối cùng là Operation and maintenance. Mô hình thứ hai là Incremental development, tức xây từng phần, đan xen specification, development và validation. Mô hình thứ ba là Reuse-oriented, tức tích hợp từ các thành phần có sẵn hoặc COTS.

Agile xuất hiện cuối những năm chín mươi với năm nguyên tắc cốt lõi. Một là Customer involvement, khách hàng tham gia liên tục. Hai là Incremental delivery, giao từng phần. Ba là People not process, tin vào kỹ năng đội ngũ. Bốn là Embrace change, đón nhận thay đổi. Năm là Maintain simplicity, giữ mọi thứ đơn giản.

Agile Manifesto công bố năm hai nghìn lẻ một có bốn giá trị. Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan. Bên trái quan trọng hơn, nhưng bên phải vẫn có giá trị.

Extreme Programming, viết tắt là XP, có mười practices chia làm hai nhóm năm. Nhóm một gồm Incremental planning, Small releases, Simple design, Test-first development, và Refactoring. Nhóm hai gồm Pair programming, Collective ownership, Continuous integration, Sustainable pace, và On-site customer. Trong đó bốn practices có ảnh hưởng lớn nhất là User stories, Refactoring, Test-first development, và Pair programming.

Verification và Validation rất dễ nhầm. Verification trả lời câu hỏi "Are we building the product right?", tức kiểm tra đúng spec. Validation trả lời câu hỏi "Are we building the right product?", tức đúng nhu cầu thực tế của khách hàng.

Các thuật ngữ tiếng Anh cần nhớ trong lecture một. Software process. Process model. Specification. Design and implementation. Validation. Evolution. Plan-driven. Agile. Waterfall. Incremental development. Reuse-oriented. COTS, viết tắt của Commercial Off The Shelf. Customer involvement. Incremental delivery. People not process. Embrace change. Maintain simplicity. Extreme Programming. Pair programming. Test-first development. Refactoring. Continuous integration. Sustainable pace. On-site customer. User stories. Verification. Validation.

Bây giờ là phần kiểm tra lecture một. Câu hỏi một. Số lượng activities cơ bản trong software process là bao nhiêu, và liệt kê chúng theo đúng thứ tự bằng tiếng Anh.

[PAUSE 10]

Đáp án. Bốn activities. Theo thứ tự là Specification, Design and Implementation, Validation, và Evolution.

[PAUSE 2]

Câu hỏi hai. Phân biệt Verification và Validation, mỗi cái trả lời câu hỏi cốt lõi nào?

[PAUSE 10]

Đáp án. Verification trả lời "Are we building the product right?", tức là đúng theo spec. Validation trả lời "Are we building the right product?", tức là đúng nhu cầu khách hàng.

[PAUSE 3]

[CHAPTER: Lecture 2 — Reuse, Framework và Spring Boot]

Maven là công cụ build và quản lý dependency. File pom.xml, đọc là pom dot xml, viết tắt của Project Object Model, chứa thông tin dự án và các thư viện cần dùng. Maven có năm thư mục chuẩn. Pom.xml ở gốc. Source main java chứa code. Source main resources chứa file cấu hình và template. Source test java và source test resources chứa code test.

Spring là framework phát triển ứng dụng Java phổ biến nhất. Spring Boot là layer trên Spring, cung cấp auto-configuration, embedded server, và production features. Bạn chạy ứng dụng Spring Boot bằng lệnh java jar đơn giản, không cần deploy lên server riêng.

Object Relational Mapping, viết tắt là ORM, nối lại khoảng cách giữa code object-oriented và database quan hệ. JPA là Java Persistence API, chỉ định nghĩa interface. Hibernate là implementation cụ thể của JPA. Spring Data JPA là layer tiện lợi trên JPA, tự sinh query từ tên method.

Thymeleaf là template engine server-side. Template nằm trong source main resources templates. Các attribute thường dùng có dạng th colon, ví dụ th colon text, th colon each, th colon if, th colon action, th colon fragment.

Software reuse có bốn cấp độ trong lecture hai. System reuse, Application reuse, Component reuse, và Object slash function reuse. Sáu lợi ích của reuse là: tăng tốc phát triển, dùng được kiến thức chuyên gia, tăng độ tin cậy, giảm chi phí, giảm rủi ro process, và đạt chuẩn standards. Năm vấn đề của reuse là: tăng chi phí maintenance, không có tool support, hội chứng not invented here, khó tạo và duy trì component library, và khó tìm component phù hợp.

Web Application Framework, viết tắt là WAF, có năm tính năng chính. Một là URL dispatching. Hai là tích hợp giao thức an toàn. Ba là quản lý phiên session. Ba là user authentication. Năm là database tier với hỗ trợ ORM. Inversion of Control, viết tắt là IoC, là nguyên tắc framework gọi code của bạn, chứ bạn không gọi framework. Đây là điểm khác biệt giữa framework và library.

Các thuật ngữ tiếng Anh cần nhớ trong lecture hai. Maven. POM, viết là pom dot xml. Spring. Spring Boot. Auto-configuration. Embedded server. ORM, Object Relational Mapping. JPA, Java Persistence API. Hibernate. Spring Data JPA. Entity. Thymeleaf. Template. Software reuse. System reuse. Application reuse. Component reuse. Function reuse. WAF, Web Application Framework. URL dispatching. Session management. Authentication. Inversion of Control, IoC. Not Invented Here syndrome.

Câu hỏi một. JPA và Hibernate khác nhau như thế nào về mặt vai trò?

[PAUSE 10]

Đáp án. JPA là specification, chỉ định nghĩa interface. Hibernate là implementation cụ thể, cung cấp logic thực sự để chạy.

[PAUSE 2]

Câu hỏi hai. Inversion of Control là gì, và nó phân biệt framework với library ở điểm nào?

[PAUSE 10]

Đáp án. Inversion of Control là nguyên tắc framework gọi code của bạn, không phải bạn gọi framework. Library thì bạn gọi nó. Framework thì nó gọi bạn.

[PAUSE 3]

[CHAPTER: Lecture 3 — Architectural Design và Spring Controllers]

Architectural design là việc thiết kế cấu trúc tổng thể của hệ thống. Có năm pattern kiến trúc chính. Một là Model View Controller, viết tắt MVC, gồm ba thành phần Model, View, Controller. Model quản lý dữ liệu, View hiển thị, Controller xử lý input. Hai là Layered architecture, có ba layer là Application-specific, Application, và Infrastructure. Ba là Repository architecture, mọi dữ liệu đi qua một repository trung tâm. Bốn là Client Server architecture, dịch vụ được cung cấp từ các server riêng. Năm là Pipe and Filter architecture, dữ liệu chảy qua các filter biến đổi tuần tự.

Multi-tier client server thường có ba tầng. Web server xử lý giao tiếp. Application server chứa business logic. Database server lưu dữ liệu.

Spring MVC dùng front controller tên là DispatcherServlet để xử lý mọi HTTP request. Workflow gồm tám bước. Bước một, request đến DispatcherServlet. Bước hai, DispatcherServlet hỏi HandlerMapping để tìm controller phù hợp. Bước ba, controller xử lý request. Bước bốn, controller trả về ModelAndView. Bước năm, DispatcherServlet hỏi ViewResolver để tìm View. Bước sáu, View render với data từ Model. Bước bảy, response trả về DispatcherServlet. Bước tám, DispatcherServlet trả response cho client.

Có hai loại controller. Interface-based controller phải implement interface Controller. Annotation-based controller dùng annotation at-Controller, linh hoạt hơn. Annotation at-RequestMapping có năm thuộc tính chính: name, value tức path, method, params, và headers. HTTP có bảy method là GET, POST, PUT, DELETE, HEAD, OPTIONS, và TRACE.

Bốn annotation cho argument của controller method là at-RequestParam dùng cho query string, at-RequestHeader dùng cho HTTP header, at-RequestBody dùng cho body JSON, và at-CookieValue dùng cho cookie. Ba kiểu argument hỗ trợ là Model, HttpServletRequest, và MultipartRequest.

Phân biệt at-Controller và at-RestController. At-Controller trả về tên view, dùng cho web truyền thống. At-RestController trả về dữ liệu JSON hoặc XML trực tiếp, dùng cho REST API.

Các thuật ngữ tiếng Anh cần nhớ. Architectural design. Architectural pattern. Model View Controller, MVC. Layered architecture. Repository architecture. Client Server architecture. Pipe and Filter architecture. Multi-tier. DispatcherServlet. Front controller. HandlerMapping. ViewResolver. ModelAndView. Annotation. At-Controller. At-RestController. At-RequestMapping. At-RequestParam. At-RequestHeader. At-RequestBody. At-CookieValue. HttpServletRequest. MultipartRequest.

Câu hỏi một. Liệt kê năm architectural pattern và một câu mô tả ngắn cho mỗi pattern.

[PAUSE 10]

Đáp án. MVC tách trình bày khỏi dữ liệu. Layered tổ chức hệ thống thành các tầng theo chức năng. Repository quản lý mọi dữ liệu qua kho trung tâm. Client Server cung cấp dịch vụ từ server riêng. Pipe and Filter xử lý dữ liệu qua các bộ lọc tuần tự.

[PAUSE 2]

Câu hỏi hai. Khác biệt giữa at-Controller và at-RestController là gì?

[PAUSE 10]

Đáp án. At-Controller trả về tên view, hệ thống tìm template và render. At-RestController trả về dữ liệu trực tiếp dạng JSON hoặc XML, không qua view.

[PAUSE 3]

[CHAPTER: Lecture 4 — Use Case, ER và Hibernate]

Use case diagram mô tả chức năng hệ thống từ góc nhìn người dùng. Bốn khái niệm cơ bản là Use case, Actor, Association, và System boundary. Có hai loại quan hệ giữa use case. Less than less than include greater than greater than nghĩa là use case nguồn không hoàn chỉnh nếu thiếu use case đích, đây là quan hệ bắt buộc. Less than less than extend greater than greater than nghĩa là use case đích bổ sung hành vi cho use case nguồn, đây là quan hệ tùy chọn.

Written use case có ba phần. Normal flow là luồng chính khi mọi việc thành công. Alternative flows là các luồng khác đạt cùng kết quả. Exceptions là các tình huống thất bại.

Trong Entity Relationship modeling, có ba loại bậc relationship. Unary là quan hệ đệ quy của một thực thể với chính nó. Binary là quan hệ giữa hai thực thể, phổ biến nhất. Ternary là quan hệ giữa ba thực thể. Cardinality có hai phần là minimum và maximum. Ba tổ hợp cardinality phổ biến là one-to-one, one-to-many, và many-to-many.

Specialization có hai chiều ràng buộc. Total nghĩa là mọi instance của supertype phải thuộc về một subtype. Partial nghĩa là instance có thể không thuộc subtype nào. Disjoint, ký hiệu chữ d, nghĩa là instance chỉ thuộc tối đa một subtype. Overlap, ký hiệu chữ o, nghĩa là instance có thể thuộc nhiều subtype cùng lúc. Identifier là candidate key được chọn làm khóa chính.

Hibernate dùng annotation để map class với bảng database. At-Entity đánh dấu class persistent. At-Id đánh dấu khóa chính. At-Table và at-Column tùy biến tên bảng và cột. At-GeneratedValue có bốn strategy là Identity, Auto, Table, và Sequence.

Quan hệ one-to-many dùng at-OneToMany và at-ManyToOne. Many side là owning side, lưu khóa ngoại. One side dùng mappedBy. Quan hệ many-to-many dùng at-ManyToMany với at-JoinTable. At-JoinTable có ba phần là name, joinColumns, và inverseJoinColumns.

Các thuật ngữ tiếng Anh cần nhớ. Use case. Actor. Association. System boundary. Include. Extend. Normal flow. Alternative flow. Exceptions. Activity diagram. Entity. Attribute. Candidate key. Identifier. Cardinality. Unary, Binary, Ternary. One to one, One to many, Many to many. Supertype. Subtype. Specialization. Total. Partial. Disjoint. Overlap. Associative entity. At-Entity. At-Id. At-Table. At-Column. At-GeneratedValue. Identity, Auto, Table, Sequence. At-OneToMany. At-ManyToOne. mappedBy. Owning side. At-JoinTable. joinColumns. inverseJoinColumns.

Câu hỏi một. Phân biệt include và extend trong use case diagram, cái nào bắt buộc, cái nào tùy chọn?

[PAUSE 10]

Đáp án. Include bắt buộc, base use case không hoàn chỉnh nếu thiếu use case được include. Extend tùy chọn, use case extend bổ sung hành vi nhưng base vẫn chạy được không cần nó.

[PAUSE 2]

Câu hỏi hai. Trong quan hệ at-OneToMany với mappedBy, side nào là owning side và lưu khóa ngoại?

[PAUSE 10]

Đáp án. Many side là owning side, lưu khóa ngoại. One side dùng mappedBy để chỉ ra mình không sở hữu quan hệ.

[PAUSE 3]

[CHAPTER: Lecture 5 — Project Management]

Software project management đảm bảo phần mềm được giao đúng thời hạn, đúng ngân sách, đúng yêu cầu, và team duy trì được sự gắn kết. Đó là bốn success criteria.

Phần mềm khác các sản phẩm kỹ thuật khác ở ba điểm. Một là intangible, không thể nhìn thấy hay sờ được. Hai là one-off, mỗi dự án phần mềm thường khác nhau. Ba là variable, process khác nhau ở từng tổ chức.

Có sáu yếu tố ảnh hưởng đến cách quản lý dự án phần mềm. Company size. Software customers. Software size. Software type. Organisational culture. Software development processes.

Năm hoạt động chính của project management. Một là Project planning. Hai là Risk management. Ba là People management. Bốn là Reporting. Năm là Proposal writing.

Risk management có bốn giai đoạn. Risk identification, tìm rủi ro. Risk analysis, đánh giá xác suất và hậu quả. Risk planning, lập chiến lược. Risk monitoring, theo dõi rủi ro thay đổi.

Bảy loại rủi ro thường gặp là: Estimation risks, Organisational risks, People risks, Requirements risks, Technology risks, Tools risks, và Technical risks. Hậu quả của rủi ro phân loại theo ba nhóm tác động: Project, Product, và Business.

Probability có năm mức từ Very low, Low, Moderate, High, đến Very high. Consequences có bốn mức từ Catastrophic, Serious, Tolerable, đến Insignificant.

Có ba loại chiến lược xử lý rủi ro. Avoidance giảm xác suất rủi ro xảy ra. Minimization giảm tác động nếu rủi ro xảy ra. Contingency lập kế hoạch xử lý nếu rủi ro thực sự xảy ra.

People management có bốn yếu tố. Consistency là đối xử công bằng. Respect là tôn trọng kỹ năng khác nhau. Inclusion là cho mọi người tham gia ý kiến. Honesty là trung thực về tốt và xấu. Có ba loại personality trong team là Task-oriented, Self-oriented, và Interaction-oriented.

Có ba kiểu tổ chức nhóm. Informal, Hierarchical, và Agile. Agile luôn dùng informal organisation vì cấu trúc cứng nhắc cản trở giao tiếp.

Các thuật ngữ tiếng Anh cần nhớ. Software project management. Success criteria. Intangible. One-off. Variable. Project planning. Risk management. People management. Reporting. Proposal writing. Risk identification. Risk analysis. Risk planning. Risk monitoring. Avoidance. Minimization. Contingency. Probability. Consequences. Project risk. Product risk. Business risk. Consistency. Respect. Inclusion. Honesty. Task-oriented. Self-oriented. Interaction-oriented. Informal. Hierarchical. Agile organisation.

Câu hỏi một. Risk management có bao nhiêu giai đoạn, liệt kê tên tiếng Anh.

[PAUSE 10]

Đáp án. Bốn giai đoạn. Risk identification, Risk analysis, Risk planning, Risk monitoring.

[PAUSE 2]

Câu hỏi hai. Phân biệt ba chiến lược Avoidance, Minimization, và Contingency.

[PAUSE 10]

Đáp án. Avoidance ngăn rủi ro xảy ra bằng cách giảm xác suất. Minimization giảm tác động khi rủi ro đã xảy ra. Contingency là kế hoạch dự phòng để chạy khi rủi ro thực sự xảy ra.

[PAUSE 3]

[CHAPTER: Lecture 6 — Thymeleaf và Spring Security cơ bản]

Thymeleaf có năm loại expression. Variable expression dùng dollar brace dot dot dot brace, truy cập biến trong context. Selection expression dùng asterisk brace dot dot dot brace, truy cập field của object đang chọn. Message expression dùng hash brace dot dot dot brace, dùng cho đa ngôn ngữ. Link expression dùng at brace dot dot dot brace, tạo URL động. Fragment expression dùng tilde brace dot dot dot brace, tham chiếu fragment dùng lại.

Có năm loại URL. Absolute URL bắt đầu bằng http. Page-relative URL bắt đầu bằng tên page. Context-relative URL bắt đầu bằng dấu gạch chéo. Server-relative URL dùng dấu tilde. Protocol-relative URL bắt đầu bằng hai dấu gạch chéo.

Khi insert fragment có hai attribute. Th colon insert giữ tag bao ngoài và đặt fragment vào trong. Th colon replace thay luôn tag bao ngoài bằng nội dung fragment.

Spring Security cấu hình bằng class với hai annotation là at-Configuration và at-EnableWebSecurity. Class trả về SecurityFilterChain bean dùng builder pattern trên HttpSecurity. AuthorizeHttpRequests cấu hình URL nào cần authentication. Các rule cụ thể phải đặt trước rule chung.

RequestMatcher có ba wildcard. Dấu chấm hỏi match một ký tự. Dấu sao match một segment. Hai dấu sao match nhiều segment. Ví dụ admin slash sao sao match mọi đường dẫn dưới slash admin.

Có hai UserDetailsManager built-in. InMemoryUserDetailsManager lưu user trong RAM, dùng cho test. JdbcUserDetailsManager lưu user trong database, dùng cho production. Mặc định Spring Security tạo user tên là user với password ngẫu nhiên in ra console.

Login customizer có năm method chính. LoginPage, LoginProcessingUrl, DefaultSuccessUrl, FailureUrl, và Permit All.

CSRF, viết tắt của Cross Site Request Forgery, được bật mặc định, yêu cầu CSRF token trong POST request. Có thể tắt bằng csrf disable cho môi trường dev. BCryptPasswordEncoder là encoder được khuyên dùng vì hash một chiều và adaptive cost.

Các thuật ngữ tiếng Anh cần nhớ. Thymeleaf. Variable expression. Selection expression. Message expression. Link expression. Fragment expression. Th insert. Th replace. SecurityFilterChain. HttpSecurity. AuthorizeHttpRequests. RequestMatcher. UserDetailsManager. InMemoryUserDetailsManager. JdbcUserDetailsManager. CSRF, Cross Site Request Forgery. BCryptPasswordEncoder. Permit all. Authenticated. Login page. Login processing URL.

Câu hỏi một. Liệt kê năm loại Thymeleaf expression và ký hiệu của chúng.

[PAUSE 10]

Đáp án. Variable dùng dollar brace. Selection dùng asterisk brace. Message dùng hash brace. Link dùng at brace. Fragment dùng tilde brace.

[PAUSE 2]

Câu hỏi hai. Khi nào dùng InMemoryUserDetailsManager, khi nào dùng JdbcUserDetailsManager?

[PAUSE 10]

Đáp án. InMemory dùng cho test vì lưu RAM, mất khi restart. Jdbc dùng cho production vì lưu database, bền vững.

[PAUSE 3]

[CHAPTER: Lecture 7 — JPA Queries và Criteria API]

Data dictionary là tài liệu mô tả chi tiết các phần tử dữ liệu mà ER diagram không đủ chỗ thể hiện. Sáu nội dung của data dictionary là: mô tả phần tử, validation criteria, composition, data type, allowed values, và data examples. Ba lợi ích là tránh hiểu sai dữ liệu giữa các thành viên, bổ sung cho ER diagram, và cho phép validation yêu cầu với khách hàng.

Prototyping có bốn cấp độ fidelity. Wireframe là bản phác thô, độ chi tiết thấp nhất. Mockup là phiên bản nháp với thiết kế đơn giản. Prototype là bản đầu có element tương tác. Interactive prototype là bản đầy đủ với toàn bộ flow tương tác.

JpaRepository cung cấp chín method built-in. FindAll, findById, findAllById để select. Save, saveAll để insert hoặc update. Delete, deleteAll, deleteById, deleteAllById để xóa.

Derived query method tự sinh query từ tên hàm. Bắt đầu bằng findBy, sau đó là tên field, rồi operator. Operator gồm Is, Equals, Not, Like, NotLike. Containing tự bọc giá trị bằng dấu phần trăm hai bên. StartingWith bọc bên phải. EndingWith bọc bên trái. And, Or kết hợp điều kiện. Distinct bỏ trùng. IgnoreCase không phân biệt hoa thường.

Criteria API dùng cho query động phức tạp. Có ba thành phần. CriteriaBuilder tạo query. CriteriaQuery đại diện cho query object. Root đại diện cho entity trong from clause. Predicate là điều kiện lọc, có method như equal, greaterThan, lessThan, like, between, isNull, isNotNull. Kết hợp predicate dùng cb dot and hoặc cb dot or. Sắp xếp dùng cq dot orderBy với cb dot asc hoặc cb dot desc. Thực thi query bằng entityManager dot createQuery cq dot getResultList.

Các thuật ngữ tiếng Anh cần nhớ. Data dictionary. Validation criteria. Composition. Data type. Allowed values. Wireframe. Mockup. Prototype. Interactive prototype. JpaRepository. FindAll. FindById. Save. Delete. Derived query. FindBy. Containing. StartingWith. EndingWith. IgnoreCase. Distinct. Criteria API. CriteriaBuilder. CriteriaQuery. Root. Predicate. EntityManager.

Câu hỏi một. Bốn cấp độ fidelity của prototype là gì, theo thứ tự từ thô đến chi tiết.

[PAUSE 10]

Đáp án. Wireframe, Mockup, Prototype, Interactive Prototype.

[PAUSE 2]

Câu hỏi hai. Method findByNameContaining sẽ sinh ra SQL với dấu phần trăm bao quanh giá trị như thế nào?

[PAUSE 10]

Đáp án. Containing bọc giá trị bằng dấu phần trăm hai bên. Ví dụ tìm chữ Quan sẽ thành phần trăm Quan phần trăm.

[PAUSE 3]

[CHAPTER: Lecture 8 — Validation, Spring Security với JPA, Design và Open Source]

Hibernate Validation là implementation của Bean Validation specification. Có bốn annotation thường dùng. At-NotNull đảm bảo field không null. At-Size giới hạn kích thước chuỗi hoặc collection. At-Min và at-Max giới hạn số. At-Pattern dùng regex. Mỗi annotation có thuộc tính message để hiện thông báo lỗi.

At-Valid trên parameter của controller method kích hoạt validation. BindingResult phải đứng ngay sau parameter at-Valid để bắt lỗi. Phải kiểm tra result dot hasErrors trước khi xử lý dữ liệu.

UserDetails interface có bảy method. GetAuthorities trả về role và quyền. GetPassword trả về password đã hash. GetUsername trả về username. IsAccountNonExpired chỉ ra account còn hạn không. IsAccountNonLocked chỉ ra account không bị khóa. IsCredentialsNonExpired chỉ ra password còn hạn không. IsEnabled chỉ ra account có active không.

Có hai cách implement UserDetails. Cách một là cho User entity tự implement, trộn entity với security, không khuyến khích. Cách hai là tạo MyUserDetails wrap User entity, tách biệt rõ ràng, được khuyến khích.

UserDetailsService có một method là loadUserByUsername. Method này tìm user theo tên, trả về UserDetails wrap bằng MyUserDetails. Nếu không tìm thấy phải throw UsernameNotFoundException.

Object Oriented Design có năm giai đoạn. Define context và modes of use. Design system architecture. Identify principal system objects. Develop design models. Specify object interfaces. Có bốn cách identify object là Grammatical analysis, Tangible entities, Behavioural identification, và Scenario based analysis.

Open source có ba loại license phổ biến. GPL là reciprocal, dùng GPL phải mở source. LGPL là biến thể của GPL, cho phép link mà không cần mở source. BSD là non-reciprocal, cho phép tích hợp vào sản phẩm proprietary. Bốn dự án open source nổi tiếng nhất là Linux, Java, Apache, và MySQL.

Các thuật ngữ tiếng Anh cần nhớ. Hibernate Validation. Bean Validation. At-NotNull. At-Size. At-Min, At-Max. At-Pattern. At-Valid. BindingResult. UserDetails. GetAuthorities. GetPassword. GetUsername. IsAccountNonExpired. IsAccountNonLocked. IsCredentialsNonExpired. IsEnabled. UserDetailsService. LoadUserByUsername. UsernameNotFoundException. MyUserDetails. Object Oriented Design. Grammatical analysis. Tangible entities. GPL. LGPL. BSD. Reciprocal. Non-reciprocal.

Câu hỏi một. UserDetails interface có bao nhiêu method, kể tên ba method liên quan đến trạng thái account.

[PAUSE 10]

Đáp án. Bảy method. Ba method trạng thái là isAccountNonExpired, isAccountNonLocked, và isEnabled. Còn isCredentialsNonExpired liên quan password.

[PAUSE 2]

Câu hỏi hai. Phân biệt GPL, LGPL, và BSD về tính reciprocal.

[PAUSE 10]

Đáp án. GPL là reciprocal, code dùng GPL phải mở source. LGPL là biến thể, cho phép link mà không mở source. BSD là non-reciprocal, có thể đưa vào sản phẩm proprietary thoải mái.

[PAUSE 3]

[CHAPTER: Lecture 9 đến 11 — Design Patterns]

Design pattern là giải pháp tái sử dụng cho các vấn đề thiết kế lặp đi lặp lại. Theo GoF có hai mươi ba pattern, slide HANU dạy hai mốt. Chia làm ba nhóm. Creational năm pattern, Structural bảy pattern, Behavioral chín pattern.

Năm Creational pattern. Singleton đảm bảo chỉ có một instance toàn cục, có hai dạng Early và Lazy. Factory tạo object mà client không cần biết class cụ thể. Abstract Factory tạo nhóm các object liên quan, khác Factory ở chỗ tạo nguyên family. Builder xây object phức tạp từng bước qua method chaining. Prototype tạo object mới bằng cách clone object có sẵn.

Bảy Structural pattern. Adapter chuyển interface không tương thích, còn gọi là Wrapper. Composite xử lý cây phân cấp như nhau giữa node lá và node nhánh. Decorator thêm chức năng động bằng composition, không phải inheritance. Proxy kiểm soát truy cập, có bốn loại Virtual, Protective, Remote, Smart. Bridge tách abstraction khỏi implementation, dùng composition thay vì inheritance, để hai chiều biến đổi độc lập. Facade cung cấp interface đơn giản cho hệ thống phức tạp. Flyweight tái sử dụng object để tiết kiệm bộ nhớ, chia state thành intrinsic và extrinsic.

Chín Behavioral pattern. Iterator duyệt collection mà không lộ cấu trúc bên trong. Observer thông báo các đối tượng phụ thuộc khi state thay đổi, quan hệ một nhiều. Memento lưu và phục hồi state, có ba thành phần Originator, Memento, Caretaker. State đổi hành vi theo state hiện tại. Chain of Responsibility chuyển request qua chuỗi handler. Command đóng gói request thành object, có bốn vai trò Command, Receiver, Invoker, Client. Mediator tập trung tương tác qua một hub, khác Observer ở chỗ Mediator centralize còn Observer chỉ notify. Strategy cho phép thay thuật toán khi runtime. Template Method định nghĩa khung thuật toán ở superclass, subclass override các bước cụ thể.

Phân biệt một số cặp dễ nhầm. Factory tạo một object, Abstract Factory tạo cả family. Adapter sửa interface có sẵn, Bridge tách abstraction và implementation từ đầu. Decorator thêm chức năng, Proxy kiểm soát truy cập. Facade đơn giản hóa subsystem, Adapter chuyển interface. Strategy chọn thuật toán, State đổi hành vi theo state. Strategy dùng composition, Template Method dùng inheritance. Mediator centralize, Observer là một nhiều notify. Command là request đóng gói, Strategy là thuật toán đóng gói.

Các thuật ngữ tiếng Anh cần nhớ. Creational. Structural. Behavioral. Singleton. Factory. Abstract Factory. Builder. Prototype. Adapter. Composite. Decorator. Proxy. Bridge. Facade. Flyweight. Iterator. Observer. Memento. State. Chain of Responsibility. Command. Mediator. Strategy. Template Method. Originator. Caretaker. Receiver. Invoker. Virtual proxy. Protective proxy. Remote proxy. Smart proxy. Intrinsic state. Extrinsic state.

Câu hỏi một. Phân biệt Strategy và State pattern, ai quyết định việc đổi hành vi?

[PAUSE 10]

Đáp án. Strategy do client chọn thuật toán khi runtime, client chủ động. State do object tự chuyển trạng thái dựa trên state hiện tại, đổi hành vi tự động không cần client biết.

[PAUSE 2]

Câu hỏi hai. Memento pattern có bao nhiêu thành phần và liệt kê tên.

[PAUSE 10]

Đáp án. Ba thành phần. Originator giữ state. Memento lưu snapshot state. Caretaker quản lý lịch sử các snapshot.

[PAUSE 3]

[CHAPTER: Kết thúc]

Bạn đã nghe xong bản ôn tập SE2. Hãy nghe lại nhiều lần khi chạy bộ để kiến thức ngấm dần. Chúc bạn thi tốt.

[PAUSE 1]
