# 🎨 SE2 — DESIGN PATTERNS DEEP DIVE
## Tài liệu chuyên sâu cho Lecture 9, 10, 11 — Thi sáng 28/04/2026

> **Định dạng**: Định nghĩa giữ nguyên tiếng Anh (cho fill‑in‑blank) — Giải thích & ví dụ tiếng Việt — Code Java ngắn gọn.

---

## 📑 MỤC LỤC

- [PHẦN 0 — Khung tổng quát 3 nhóm pattern](#phần-0)
- [PHẦN 1 — Creational Patterns (5)](#phần-1) → Singleton, Factory, Abstract Factory, Builder, Prototype
- [PHẦN 2 — Structural Patterns (7)](#phần-2) → Adapter, Composite, Decorator, Proxy, Bridge, Facade, Flyweight
- [PHẦN 3 — Behavioral Patterns (9)](#phần-3) → Iterator, Observer, Memento, State, Chain of Responsibility, Command, Mediator, Strategy, Template Method
- [PHẦN 4 — Quick-Recall Matrix (23 patterns 1 bảng)](#phần-4)
- [PHẦN 5 — Bảng phân biệt cặp pattern dễ nhầm](#phần-5)
- [PHẦN 6 — 20 câu MCQ chuyên sâu (có giải)](#phần-6)
- [PHẦN 7 — Mnemonic & mẹo nhớ](#phần-7)

---

<a id="phần-0"></a>
# PHẦN 0 — KHUNG TỔNG QUÁT 3 NHÓM PATTERN

## What is a Design Pattern?

> *"Solutions to general problems faced in software development. Industry standard approach to solve recurring problems. Programming-language-independent strategies for solving the common object-oriented design problems."*

**Tiếng Việt**: Design pattern = **giải pháp chung** cho **vấn đề lặp lại** trong thiết kế phần mềm OOP. Không phụ thuộc ngôn ngữ. Giảng viên hay hỏi 3 ý: solutions / industry standard / language-independent.

## Why use design patterns? (6 lý do — học thuộc!)
1. **Promotes reusability** → robust & maintainable code
2. **Faster development**, code easier to understand & debug
3. **Provides standard terminology** (vocabulary chung)
4. **Provides solutions** that help define system architecture
5. **Captures software engineering experiences**
6. **Provides transparency** to design of an application

## When to use? "*During the analysis & design phase of SDLC*" (SDLC = Software Development Life Cycle)

## 3 Categories — bảng tổng quan

| Category | Số pattern | Mục đích chính | Keyword |
|---|---|---|---|
| **Creational** | 5 | Tạo object linh hoạt, ẩn logic instantiation | "creating", "instantiation", "decision at instantiation" |
| **Structural** | 7 | Cấu trúc class/object để hình thành hierarchy lớn hơn | "compose", "structure", "form larger structures" |
| **Behavioral** | 9 (slide 10‑11) | Communication & interaction giữa objects | "communication", "interaction", "loose coupling" |
| **TỔNG** | **23 GoF** | | |

### Đặc trưng từng nhóm (TRA NHANH KHI THI)

**Creational** — *"Concerned with the way of creating objects"*:
- Used when a decision must be made at the time of instantiation
- "Way to create objects while hiding logic"
- **Do NOT use the `new` operator** ← (câu MCQ trap!)
- Offer flexibility in deciding which objects to create
- Solution to instantiate object in best possible way

**Structural** — *"Provides different ways to create class structure"*:
- Uses **inheritance** to compose interfaces & define ways to create objects
- Concerned with **how classes & objects can be composed** to form larger structures
- Simplifies structure by identifying relationships
- Focuses on how classes inherit from each other & how they're composed

**Behavioral** — *"Concerned with communication & better interaction between objects"*:
- Provides **loose coupling** & flexibility
- Purpose: manage **algorithms, relationships, interactions, responsibilities** between objects
- Implementation & client should be **loosely coupled** (avoid hard coding & dependencies)

---

<a id="phần-1"></a>
# PHẦN 1 — CREATIONAL PATTERNS (5)

> Mnemonic: **"S**ingleton, **F**actory, **A**bstract Factory, **B**uilder, **P**rototype" → "**S**ome **F**ish **A**re **B**ig **P**redators"

---

## 🔹 1. SINGLETON

### Definition (FILL-IN-BLANK)
> *"Defines a class that has only one instance and provides a global point of access to it."*

> *"A class must ensure that only single instance should be created and single object can be used by all other classes."*

### Tiếng Việt
**Singleton** đảm bảo **toàn bộ ứng dụng chỉ có DUY NHẤT 1 instance** của 1 class, và cung cấp 1 cách truy cập toàn cục đến nó. Như **vua trong vương quốc** — chỉ có 1, ai cũng biết tới.

### 2 Forms (HỌC ĐẾM!)
| Form | Khi nào tạo instance |
|---|---|
| **Early Instantiation** | Tạo ngay tại **load time** (khi class được load) |
| **Lazy Instantiation** | Tạo **khi cần** (lần đầu được gọi) |

### Use cases
- Logging
- Caching
- Thread pools
- Configuration settings
- Multi-threaded & database applications

### Spring Framework Application
- **Spring Beans are singleton objects by default**
- Spring restricts singleton to **1 object per Spring IoC container**
- Spring tạo **1 bean cho mỗi type per application context**

### Code skeleton (Lazy)
```java
public class Singleton {
    private static Singleton instance;          // 1 lưu trữ duy nhất
    private Singleton() {}                       // private constructor!
    
    public static Singleton getInstance() {     // global access point
        if (instance == null) {                  // lazy: chỉ tạo khi cần
            instance = new Singleton();
        }
        return instance;
    }
}
```

### When to use / NOT use
- ✅ **Use**: Cần duy nhất 1 instance toàn cục (DB connection pool)
- ❌ **NOT**: Khi unit test (singleton khó mock); khi cần đa instance

---

## 🔹 2. FACTORY

### Definition
> *"Is used to define an interface or abstract class for creating an object but let the subclasses decide which class to instantiate."*

### Main Idea (CỰC QUAN TRỌNG!)
> ***"Decouple the creation from the consumption."***

### Tiếng Việt
**Factory** = "**nhà máy**" tạo object. Client chỉ nói "tôi cần Animal" → factory quyết định trả về `Dog`, `Cat`, `Cow`. Client **không cần biết** logic tạo, **không cần dùng `new`**.

**Phép so sánh đời thực**: Khi đặt pizza, bạn nói "pizza phô mai" — không quan trọng nhà hàng dùng lò gas hay lò than. Lò = factory. Pizza = product.

### Use cases
- Class doesn't know what sub-classes to create
- Parent class chooses creation of objects to its sub-classes
- Sub-classes specify the objects to be created

### Spring Framework Application
- An **ApplicationContext** in Spring is a **bean container = factory** that produces beans
- Each `getBean(...)` method is a **factory method**

### Code skeleton
```java
interface Animal { void speak(); }
class Dog implements Animal { public void speak() { System.out.println("Woof"); } }
class Cat implements Animal { public void speak() { System.out.println("Meow"); } }

class AnimalFactory {
    public static Animal create(String type) {       // factory method
        if ("dog".equals(type)) return new Dog();
        if ("cat".equals(type)) return new Cat();
        throw new IllegalArgumentException();
    }
}
// Client:
Animal a = AnimalFactory.create("dog");   // không gọi new Dog() trực tiếp
```

### Benefits
- "Allow more flexibility on what type to create, and how to create"
- "Refer to newly created object using a common interface"

---

## 🔹 3. ABSTRACT FACTORY

### Definition
> *"Defines an interface or abstract class for creating families of related (or dependent) objects but without specifying their concrete sub-classes."*

> *"Lets a class be a factory of a family of classes."*

### Tiếng Việt
**Abstract Factory** = "**factory của các factory**" — tạo nguyên 1 **bộ (family) các sản phẩm liên quan**.

**Phép so sánh**: Bạn mua nội thất — phong cách hiện đại có Modern Chair + Modern Table + Modern Sofa. Phong cách cổ điển có Victorian Chair + Victorian Table + Victorian Sofa. Mỗi phong cách = 1 abstract factory tạo nguyên family đồng bộ.

### Khác Factory như thế nào?
- Factory tạo **1 object**
- Abstract Factory tạo **nguyên family** các object liên quan, đảm bảo các object **thuộc cùng family**

### Use cases
- System needs to be **independent** of how its objects are created/composed/represented
- **Family of related objects** has to be used together (constraint enforcement)
- Provide library showing **only interfaces**, hiding implementations

### Code skeleton
```java
// Abstract products
interface Chair { void sit(); }
interface Sofa { void lieDown(); }

// Family 1: Modern
class ModernChair implements Chair { public void sit() {} }
class ModernSofa implements Sofa { public void lieDown() {} }

// Family 2: Victorian
class VictorianChair implements Chair { public void sit() {} }
class VictorianSofa implements Sofa { public void lieDown() {} }

// Abstract factory
interface FurnitureFactory {
    Chair createChair();
    Sofa createSofa();
}

// Concrete factories — each makes ONE family
class ModernFurnitureFactory implements FurnitureFactory {
    public Chair createChair() { return new ModernChair(); }
    public Sofa createSofa()   { return new ModernSofa(); }
}
```

---

## 🔹 4. BUILDER

### Definition
> *"Constructs a complex object from simple objects using step-by-step approach."*

### Tiếng Việt
**Builder** = "**xây dựng từng bước**" — thay vì gọi 1 constructor 20 tham số, bạn gọi `.set()` từng phần rồi `.build()`. Như **xây nhà**: trước móng, rồi tường, rồi mái.

### When to use
- "Object can't be created in single step (vd: de-serialization of a complex object)"
- Constructor có quá nhiều tham số
- Cần khả năng tạo các biến thể khác nhau của 1 object phức tạp

### Advantages (FILL-IN-BLANK)
- *"Provides clear separation between the construction and representation of an object"*
- *"Provides better control over construction process"*
- *"Supports to change the internal representation of objects"*

### Spring Framework Application
- Cấu hình `HttpSecurity` trong **Spring Security**:
```java
http.csrf(c -> c.disable())
    .authorizeHttpRequests(...)
    .formLogin(...)
    .build();   // ← builder pattern!
```

### Code skeleton
```java
class Pizza {
    private String size, cheese, sauce;
    private boolean pepperoni;
    
    static class Builder {
        private Pizza pizza = new Pizza();
        public Builder size(String s)        { pizza.size = s; return this; }
        public Builder cheese(String c)      { pizza.cheese = c; return this; }
        public Builder pepperoni(boolean p)  { pizza.pepperoni = p; return this; }
        public Pizza build()                 { return pizza; }
    }
}
// Usage:
Pizza p = new Pizza.Builder().size("L").cheese("mozzarella").pepperoni(true).build();
```

---

## 🔹 5. PROTOTYPE

### Definition
> *"Make clones of an existing object instead of creating new ones."*

### Tiếng Việt
**Prototype** = "**bản gốc để clone**" — thay vì tạo mới object phức tạp, **copy** từ 1 prototype có sẵn rồi tùy chỉnh. Như **photocopy hợp đồng** rồi điền tên người mới — nhanh hơn viết lại từ đầu.

### Key advantage
> *"Objects can also be customized as per the requirement."*

### When to use (FILL-IN-BLANK list)
- *"Cost of creating a new object is expensive and resource intensive"*
- *"Classes are instantiated at runtime"*
- *"Cost of creating an object is expensive or complicated"*
- Want to keep number of classes minimum
- Client unaware of object creation/representation

### Code skeleton
```java
abstract class Shape implements Cloneable {
    String type;
    abstract void draw();
    public Shape clone() throws CloneNotSupportedException { 
        return (Shape) super.clone();    // prototype pattern!
    }
}

class Circle extends Shape { /*...*/ }

// Usage:
Circle prototype = new Circle();
Circle copy1 = (Circle) prototype.clone();
Circle copy2 = (Circle) prototype.clone();
copy1.color = "red";  // customize each clone independently
```

---

<a id="phần-2"></a>
# PHẦN 2 — STRUCTURAL PATTERNS (7)

> Mnemonic: **"A**dapter, **C**omposite, **D**ecorator, **P**roxy, **B**ridge, **F**acade, **F**lyweight" → "**A C**old **D**og **P**lays **B**y **F**ire **F**lames"

---

## 🔸 1. ADAPTER (còn gọi: WRAPPER)

### Definition
> *"Converts the interface of a class into another interface that a client wants."*

### Tiếng Việt
**Adapter** = "**ổ cắm chuyển đổi**" — như cục adapter cắm điện 220V VN → 110V Mỹ. Class A có interface không tương thích với Client → wrap nó bằng Adapter để biến đổi interface.

### Use cases
- "Object needs to utilize an existing class with an **incompatible interface**"
- "Reusable class that cooperates with classes which **don't have compatible interfaces**"

### Code skeleton
```java
// Existing class with incompatible interface
class OldPrinter {
    public void printOld(String text) { /*...*/ }
}

// Client expects this interface
interface NewPrinter {
    void print(String text);
}

// Adapter
class PrinterAdapter implements NewPrinter {
    private OldPrinter oldPrinter;
    public PrinterAdapter(OldPrinter o) { this.oldPrinter = o; }
    public void print(String text) {
        oldPrinter.printOld(text);   // chuyển đổi call
    }
}
```

---

## 🔸 2. COMPOSITE

### Definition
> *"Allows clients to operate in generic manner on objects that may or may not represent a hierarchy of objects."*

### Tiếng Việt
**Composite** = "**cây phân cấp**" — đối xử với 1 object đơn lẻ và 1 nhóm objects **theo cùng cách**. Như **cây thư mục**: file (leaf) và folder (composite chứa nhiều file/folder con) đều được duyệt như nhau.

### Use cases
- Represent **full or partial hierarchy** of objects
- Add responsibilities dynamically to individual objects without affecting others
- Tree structures (file system, GUI components, organization chart)

### Code skeleton
```java
interface FileSystemItem {
    int getSize();
}
class File implements FileSystemItem {
    int size;
    public int getSize() { return size; }       // leaf
}
class Folder implements FileSystemItem {
    List<FileSystemItem> children = new ArrayList<>();
    public int getSize() {                       // composite
        return children.stream().mapToInt(FileSystemItem::getSize).sum();
    }
}
```

---

## 🔸 3. DECORATOR

### Definition
> *"Attaches flexible additional responsibilities to an object dynamically."*

### Key Implementation (CỰC QUAN TRỌNG!)
> *"Uses **composition** instead of **inheritance** to extend the functionality of an object at runtime."*

### Tiếng Việt
**Decorator** = "**bọc thêm chức năng**" — như **gói quà**: lấy món quà gốc, bọc giấy → thêm dây nơ → dán sticker. Mỗi lớp bọc thêm 1 chức năng mà KHÔNG sửa món quà gốc.

### Khác Inheritance như thế nào?
- Inheritance: thêm chức năng bằng **subclass** (compile-time)
- Decorator: thêm chức năng bằng **wrap đối tượng tại runtime** — linh hoạt hơn

### Use cases
- Transparently & dynamically add responsibilities **without affecting other objects**
- Add responsibilities you may want to **change in future**
- Subclassing not practical (quá nhiều combination)

### Code skeleton
```java
interface Coffee { double cost(); }
class SimpleCoffee implements Coffee { public double cost() { return 5; } }

abstract class CoffeeDecorator implements Coffee {
    protected Coffee coffee;
    public CoffeeDecorator(Coffee c) { this.coffee = c; }
}
class WithMilk extends CoffeeDecorator {
    public WithMilk(Coffee c) { super(c); }
    public double cost() { return coffee.cost() + 1; }    // thêm sữa +1
}
class WithSugar extends CoffeeDecorator {
    public WithSugar(Coffee c) { super(c); }
    public double cost() { return coffee.cost() + 0.5; }
}

// Usage:
Coffee order = new WithSugar(new WithMilk(new SimpleCoffee()));   // 5 + 1 + 0.5 = 6.5
```

---

## 🔸 4. PROXY

### Definition
> *"Provides the means for controlling the original (underlying) object."*

### Tiếng Việt
**Proxy** = "**đại diện kiểm soát**" — như **thư ký riêng** của giám đốc: muốn gặp giám đốc phải qua thư ký (kiểm tra lịch, từ chối, hẹn lại…). Proxy đứng trước object gốc, kiểm soát truy cập.

### 4 USAGE SCENARIOS (HỌC THUỘC ĐẾM!)
| Scenario | Mục đích |
|---|---|
| **Virtual Proxy** | Lazy initialization — chỉ load object khi thực sự cần (vd: ảnh lớn) |
| **Protective Proxy** | Access control — kiểm tra quyền trước khi gọi method |
| **Remote Proxy** | Đại diện cho object ở **máy khác** (RMI, RPC) |
| **Smart Proxy** | Thêm hành vi "thông minh" (logging, caching, ref counting) |

### Spring Framework Application
- `@Transactional` → Spring tạo **transactional proxy** wrap method
- `UserDetails` được proxy hóa cho security

### Code skeleton (Protective Proxy)
```java
interface BankAccount { void withdraw(double amount); }
class RealBankAccount implements BankAccount {
    public void withdraw(double a) { /*...*/ }
}
class BankAccountProxy implements BankAccount {
    private RealBankAccount real;
    private String userRole;
    public BankAccountProxy(RealBankAccount r, String role) { this.real = r; this.userRole = role; }
    public void withdraw(double a) {
        if (!"OWNER".equals(userRole)) throw new SecurityException();   // access control
        real.withdraw(a);
    }
}
```

---

## 🔸 5. BRIDGE

### Definition
> *"Decouples the functional abstraction from the implementation so that the two can vary independently."*

### Key solution
> *"Switching from inheritance to object composition."*

### Tiếng Việt
**Bridge** = "**cây cầu nối** 2 hierarchy độc lập". Tránh **class explosion** khi có 2 chiều biến đổi độc lập (vd: 3 loại Shape × 2 OS = 6 class? Quá nhiều! Bridge chỉ cần 3+2 = 5 class).

**Phép so sánh**: TV remote — bạn có **Remote (abstraction)** và **TV brand (implementation)**. Mỗi cái biến đổi độc lập: BasicRemote/AdvancedRemote × Sony/Samsung. Không cần BasicSonyRemote, AdvancedSonyRemote, BasicSamsungRemote… (4 class!) — chỉ cần 2 + 2 = 4 với bridge.

### 4 Benefits (HỌC THUỘC!)
- *"Decouples abstraction and implementation"*
- *"Promotes flexibility and maintainability"*
- *"Helps avoiding class explosion"*
- *"Promotes code reuse"*

### Use cases
- Don't want **permanent binding** between functional abstraction and implementation
- Both abstraction and implementation need to be extended via subclasses
- Changes in implementation should NOT affect clients

### Code skeleton
```java
// Implementation hierarchy
interface Device { void on(); void off(); }
class Sony implements Device { public void on() {} public void off() {} }
class Samsung implements Device { public void on() {} public void off() {} }

// Abstraction hierarchy
abstract class Remote {
    protected Device device;          // ← BRIDGE (composition, not inheritance!)
    public Remote(Device d) { this.device = d; }
    public abstract void togglePower();
}
class BasicRemote extends Remote {
    public BasicRemote(Device d) { super(d); }
    public void togglePower() { device.on(); }
}
class AdvancedRemote extends Remote {
    public AdvancedRemote(Device d) { super(d); }
    public void togglePower() { device.on(); /*+ extra*/ }
}
```

### Bridge vs Adapter — Cẩn thận!
- **Adapter**: sửa cái có sẵn không tương thích (sau khi đã xảy ra)
- **Bridge**: thiết kế **từ đầu** để 2 chiều biến đổi độc lập

---

## 🔸 6. FACADE

### Definition
> *"Provides a unified and simplified interface to a set of interfaces in a subsystem."*

### Key Purpose
> *"Hiding the complexities of the subsystem from the client"* — *"describes a higher-level interface that makes the subsystem easier to use."*

### Tiếng Việt
**Facade** = "**mặt tiền tòa nhà**" (façade tiếng Pháp = front side). Sau lớp mặt tiền có thể là cả 1 hệ thống phức tạp, nhưng client chỉ thấy & tương tác với mặt tiền đơn giản.

**Phép so sánh**: Khi bạn đặt vé máy bay online — chỉ cần nhập điểm đi, điểm đến, ngày → click "Book". Đằng sau là 100 hệ thống (booking engine, payment, seat allocation, mail, SMS, …) nhưng UI chỉ có 1 form đơn giản. Form chính là Facade.

### Use cases
- Provide **simple interface** to **complex subsystem**
- Several dependencies exist between clients and implementation classes

### Code skeleton
```java
class CPU       { void start() {} }
class Memory    { void load() {} }
class HardDrive { void read() {} }

class ComputerFacade {                 // ← Facade
    private CPU cpu = new CPU();
    private Memory memory = new Memory();
    private HardDrive hd = new HardDrive();
    
    public void startComputer() {       // 1 method đơn giản
        cpu.start();
        memory.load();
        hd.read();
    }
}
// Client chỉ cần: new ComputerFacade().startComputer();
```

---

## 🔸 7. FLYWEIGHT

### Definition
> *"Reuses existing similar kind of objects by storing them and create new object when no matching object is found."*

### Tiếng Việt
**Flyweight** = "**tái sử dụng objects giống nhau**" để tiết kiệm memory. Tách **intrinsic state** (chia sẻ được) khỏi **extrinsic state** (riêng từng instance).

**Phép so sánh**: Trong game có 1 triệu cây xanh giống hệt nhau (intrinsic = mesh, texture). Mỗi cây chỉ khác vị trí (extrinsic). Thay vì tạo 1 triệu objects, chỉ tạo **1 Tree object**, dùng chung mesh/texture, mỗi nơi chỉ lưu vị trí riêng.

### Advantages
- *"Reduces the number of objects"*
- *"Reduces amount of memory and storage devices required"*

### Use cases
- Application uses **number of objects**
- Storage cost is **high** because of quantity of objects
- Application **does NOT depend on object identity**

### Code skeleton
```java
class TreeType {                       // intrinsic state — shared
    String name, color, texture;
    void draw(int x, int y) {}         // x, y = extrinsic, passed in
}
class TreeFactory {                    // pool of flyweights
    private static Map<String, TreeType> types = new HashMap<>();
    public static TreeType getTreeType(String name) {
        return types.computeIfAbsent(name, k -> new TreeType());  // reuse
    }
}
class Tree { int x, y; TreeType type; }   // many trees share TreeType
```

---

<a id="phần-3"></a>
# PHẦN 3 — BEHAVIORAL PATTERNS (9)

> Mnemonic: **I**terator, **O**bserver, **M**emento, **S**tate, **C**hain, **C**ommand, **M**ediator, **S**trategy, **T**emplate → "**I O**we **M**any **S**ome **C**ash **C**ould **M**aybe **S**erve **T**oday"

---

## ▪ 1. ITERATOR

### Definition
> *"To access the elements of an aggregate object sequentially without exposing its underlying implementation."*

### Tiếng Việt
**Iterator** = "**duyệt tuần tự**" mà không cần biết cấu trúc bên trong (List? Tree? HashMap?). Java đã cho sẵn `Iterator<T>` interface với `hasNext()` + `next()`.

### Use cases
- Access collection of objects **without exposing internal representation**
- Multiple **traversals** need to be supported

### Code skeleton
```java
class RadioStations implements Iterable<Station> {
    private List<Station> stations;
    public Iterator<Station> iterator() {
        return new Iterator<>() {
            int idx = 0;
            public boolean hasNext() { return idx < stations.size(); }
            public Station next() { return stations.get(idx++); }
        };
    }
}
// Usage:
for (Station s : new RadioStations()) { /*...*/ }
```

---

## ▪ 2. OBSERVER

### Definition (THEO SLIDE)
> *"Defines a one-to-**one** dependency so that when one object changes state, all its dependents are notified and updated automatically."*

⚠️ **Slide HANU ghi "one-to-one"** (có thể là typo của giảng viên — chuẩn GoF là **one-to-many**). Khi thi: nếu có lựa chọn "one-to-one", chọn **theo slide**; nếu chỉ có "one-to-many" thì chọn nó.

### Tiếng Việt
**Observer** = "**đăng ký nhận thông báo**" — như **kênh YouTube**: bạn subscribe → khi creator post video mới → bạn nhận noti. Subject (creator) push update tới list of Observers (subscribers).

### Components
- **Subject (Observable)**: thực thể có state, giữ list observers
- **Observer**: đăng ký để nhận notify

### Use cases
- State change in one object must be reflected in another **without tight coupling**
- Framework needs enhancement with **new observers with minimal changes**

### Code skeleton
```java
interface Observer { void update(String news); }
class NewsAgency {                      // Subject
    private List<Observer> observers = new ArrayList<>();
    private String news;
    public void subscribe(Observer o)   { observers.add(o); }
    public void publish(String news) {
        this.news = news;
        observers.forEach(o -> o.update(news));    // notify all
    }
}
class Newspaper implements Observer {
    public void update(String news) { System.out.println("Print: " + news); }
}
```

---

## ▪ 3. MEMENTO

### Definition
> *"Making snapshots (states) of an object and restores the object to its previous state."*

### Critical Requirement
> *"Must do this **without violating Encapsulation**."*

### Tiếng Việt
**Memento** = "**Ctrl+Z (Undo)**" — lưu snapshot state để khôi phục sau. Như **save game** trong RPG: lưu state → đi mạo hiểm → chết → load state → quay lại điểm đã save.

### 3 COMPONENTS (HỌC THUỘC!)
| Component | Vai trò |
|---|---|
| **Originator** | Object whose state needs to be **saved** |
| **Memento** | Object that **holds** the saved state. Should expose as little info as possible to outside |
| **Caretaker** | Object responsible for **triggering** save & restore. Keeps track of mementos |

### Advantages
- *"Preserves encapsulation boundaries"*
- *"Simplifies the originator"*

### Use cases
- Undo/Redo (most software)
- Database transactions

### Code skeleton
```java
class TextWindow {                                 // Originator
    private String text;
    public TextMemento save()        { return new TextMemento(text); }
    public void restore(TextMemento m) { this.text = m.getText(); }
}
class TextMemento {                                // Memento (immutable snapshot)
    private final String text;
    public TextMemento(String t) { this.text = t; }
    String getText() { return text; }
}
class Caretaker {                                  // Caretaker
    private Stack<TextMemento> history = new Stack<>();
    public void save(TextWindow t)  { history.push(t.save()); }
    public void undo(TextWindow t)  { t.restore(history.pop()); }
}
```

---

## ▪ 4. STATE

### Definition
> *"The class behavior changes based on its state."*

### Key implementation
> *"We create objects which represent various states and a context object whose behavior varies as its state object changes."*

### Tiếng Việt
**State** = "**hành vi đổi theo trạng thái**" — object có nhiều state, mỗi state là 1 class riêng implement cùng interface. Khi state thay đổi → behavior tự động đổi theo (không cần if/else lớn).

**Phép so sánh**: 1 **document** có states: Draft → Moderation → Published. Mỗi state cho phép action khác nhau (Draft có publish() throw error nếu chưa moderate; Published không cho edit). Mỗi state là 1 class, document chỉ gọi `state.publish()`.

### Core process
- **Encapsulating** object's behavior within different state objects
- **Switches** between state objects as current state

### Use cases
- Behavior depends on state, **must change at runtime**
- Operations have **large multipart conditional statements** depending on state

### Code skeleton
```java
interface DocumentState { void publish(Document doc); }
class Draft implements DocumentState {
    public void publish(Document doc) {
        doc.setState(new Moderation());           // transition
    }
}
class Moderation implements DocumentState {
    public void publish(Document doc) {
        doc.setState(new Published());
    }
}
class Published implements DocumentState {
    public void publish(Document doc) { /* nothing */ }
}
class Document {
    private DocumentState state = new Draft();
    public void setState(DocumentState s) { this.state = s; }
    public void publish() { state.publish(this); }     // delegates
}
```

---

## ▪ 5. CHAIN OF RESPONSIBILITY

### Definition
> *"Avoids coupling the sender of a request to its receiver by giving multiple objects a chance to handle the request."*

### Key mechanism
> *"Normally each receiver contains reference of another receiver. If one object cannot handle the request then it passes the same to the next receiver, and so on."*

### Tiếng Việt
**Chain of Responsibility** = "**dây chuyền xử lý**" — request đi qua chain các handler, mỗi handler có thể: xử lý + pass tiếp / sửa + pass / chặn / kết thúc sớm. Như **support ticket** ở công ty: Level 1 → Level 2 → Manager → CEO.

### 4 HANDLER ACTIONS (HỌC THUỘC!)
1. *"Does nothing and pass the request to the next handler"*
2. *"Modifies the request, then pass it to the next handler"*
3. *"Throws an error so that the processing chain will be stopped"*
4. *"Finish the processing chain early (without passing the request any further)"*

### Spring/Express Application (TRAP MCQ!)
- **Spring Security**: chuỗi **security filters** — mỗi filter xử lý request, có thể block hoặc cho qua
- **Spring AOP**: chuỗi **interceptors** — wrap method calls
- **Express.js (Node.js)**: middleware đăng ký bằng `app.use()` — gọi `next()` để pass

### Use cases
- More than one object can handle, **handler is unknown**
- Group of objects must be specified **dynamically**

### Code skeleton
```java
abstract class SupportHandler {
    protected SupportHandler next;
    public SupportHandler setNext(SupportHandler n) { this.next = n; return n; }
    public abstract void handle(Ticket t);
}
class L1Handler extends SupportHandler {
    public void handle(Ticket t) {
        if (t.priority < 3) System.out.println("L1 solves");
        else if (next != null) next.handle(t);                 // pass to next
    }
}
class ManagerHandler extends SupportHandler {
    public void handle(Ticket t) {
        if (t.priority >= 3) System.out.println("Manager solves");
    }
}
// Build chain:
SupportHandler chain = new L1Handler();
chain.setNext(new ManagerHandler());
chain.handle(new Ticket(5));
```

---

## ▪ 6. COMMAND

### Problem motivation (slide)
> *"Your app needs to display many buttons, each with different functionality. You designed a common Button class. For each specific button, you create a subclass — too many subclasses!"*

### Definition
> *"Encapsulates a request (task) under a Command object and pass it to Invoker object. Invoker looks for the appropriate object to handle and pass the command, that object executes."*

### Tiếng Việt
**Command** = "**đóng gói request thành object**" — thay vì hardcode "click button → call method X", bạn đóng gói thành 1 Command object. Sau đó queue, log, undo, gửi cho người khác… đều được.

### 4 ROLES (HỌC THUỘC!)
| Role | Vai trò |
|---|---|
| **Command** | Object encapsulating request, knows how to execute |
| **Receiver** | Object that **actually performs** the action |
| **Invoker** | Object that **initiates** command execution (button click) |
| **Client** (optional) | Creates and configures the command object |

### Benefits
- **Flexibility** — Commands can be **parameterized, queued, undone/redone**
- **Decoupling** — Separates sender of request from receiver

### Use cases
- Need **parameterize objects** by action
- Need to **create, execute requests at different times**
- Support **rollback, logging, transactions**

### Code skeleton
```java
interface Command { void execute(); }                           // Command

class Light { void on() { System.out.println("ON"); } }         // Receiver

class TurnOnLight implements Command {                          // Concrete Command
    private Light light;
    public TurnOnLight(Light l) { this.light = l; }
    public void execute() { light.on(); }
}

class Button {                                                   // Invoker
    private Command command;
    public void setCommand(Command c) { this.command = c; }
    public void click() { command.execute(); }
}
// Client setup:
Button b = new Button();
b.setCommand(new TurnOnLight(new Light()));
b.click();
```

---

## ▪ 7. MEDIATOR

### Definition
> *"Defines an object that encapsulates how a set of objects interact."*

### Tiếng Việt
**Mediator** = "**trung tâm điều phối**" — thay vì nhiều object nói chuyện trực tiếp với nhau (n×n connections, hỗn loạn), tất cả nói qua 1 mediator (n connections, sạch sẽ).

**Phép so sánh đời thực** (theo slide):
- **Tài xế taxi không liên lạc với nhau** — tất cả gọi qua **trung tâm điều phối**
- **Máy bay** không liên lạc với nhau — qua **trung tâm điều khiển không lưu (ATC)**
- **Phòng chat** — user không nhắn trực tiếp, gửi qua **chat server**

### Advantages (FILL-IN-BLANK)
- *"Decouples the number of classes"*
- *"Simplifies object protocols"*
- *"Centralizes the control"*

### Use cases
- Set of objects communicate in **complex but well-defined ways**
- Common in **message-based systems** (chat applications)

### Code skeleton
```java
class ChatRoom {                                  // Mediator
    public void showMessage(User u, String msg) {
        System.out.println(u.name + ": " + msg);
    }
}
class User {
    String name;
    ChatRoom room;
    public User(String n, ChatRoom r) { this.name = n; this.room = r; }
    public void send(String msg) { room.showMessage(this, msg); }    // via mediator
}
```

### Mediator vs Observer (TRAP!)
- **Mediator**: centralize ALL communication
- **Observer**: 1 source push → many subscribers (no central coordinator)

---

## ▪ 8. STRATEGY

### Definition
> *"Define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."*

### Tiếng Việt
**Strategy** = "**đổi thuật toán runtime**" — định nghĩa 1 family of algorithms, đổi qua đổi lại tùy context. Như **chọn phương thức thanh toán** trong shop: COD / Credit Card / PayPal — cùng action "pay" nhưng implementation khác nhau.

### Use cases
- Multiple classes differ **only in their behaviors**
- Need different **variations of an algorithm**

### Code skeleton
```java
interface PaymentStrategy { void pay(double amount); }
class CashPayment implements PaymentStrategy {
    public void pay(double a) { System.out.println("Pay cash: " + a); }
}
class CardPayment implements PaymentStrategy {
    public void pay(double a) { System.out.println("Charge card: " + a); }
}
class ShoppingCart {
    private PaymentStrategy strategy;       // injected (composition!)
    public void setStrategy(PaymentStrategy s) { this.strategy = s; }
    public void checkout(double total) { strategy.pay(total); }
}
// Usage:
ShoppingCart cart = new ShoppingCart();
cart.setStrategy(new CardPayment());
cart.checkout(100);
```

### Strategy vs State (CỰC TRAP!)
- **Strategy**: client **chủ động chọn** strategy → behavior thay đổi theo lựa chọn
- **State**: object **tự đổi state** dựa trên transitions → behavior thay đổi theo state hiện tại

---

## ▪ 9. TEMPLATE METHOD

### Definition
> *"Define the skeleton of an algorithm in a superclass but lets subclasses override specific steps of the algorithm without changing its structure."*

### Tiếng Việt
**Template Method** = "**khung thuật toán cố định, bước tùy chỉnh**" — superclass viết sẵn skeleton (template), các step cụ thể là abstract methods → subclass override. Subclass **KHÔNG được override template method** (nó là `final`).

**Phép so sánh**: Công thức **làm bánh** chung: trộn bột → nướng → trang trí (template). Mỗi loại bánh override "trang trí" (chocolate khác kem khác fruit) nhưng **không thay đổi thứ tự** bước.

### Key mechanism
- Abstract class declares methods as **steps** of algorithm
- The **template method** calls these steps in a **specific order**
- Concrete classes override **some or all of the steps**, but **NOT the template method itself**

### Benefit
> *"Reuse common code while allowing flexibility for variations in specific steps within subclasses."*

### Use cases
- Common behavior among subclasses → **move to single common class** to avoid duplication

### Code skeleton
```java
abstract class DataProcessor {
    public final void process() {        // ← TEMPLATE METHOD (final!)
        readData();                       // step 1
        processData();                    // step 2 (varies)
        saveData();                       // step 3
    }
    protected void readData() { System.out.println("read from file"); }
    protected abstract void processData();   // subclass implement
    protected void saveData() { System.out.println("save to db"); }
}

class CsvProcessor extends DataProcessor {
    protected void processData() { System.out.println("parse CSV"); }
}
class JsonProcessor extends DataProcessor {
    protected void processData() { System.out.println("parse JSON"); }
}
```

### Strategy vs Template Method (CỰC TRAP!)
- **Strategy**: dùng **composition** (HAS-A) → đổi behavior runtime
- **Template Method**: dùng **inheritance** (IS-A) → khung cố định, subclass tùy biến

---

<a id="phần-4"></a>
# PHẦN 4 — QUICK-RECALL MATRIX (23 PATTERNS)

> Học bảng này 1 lần buổi tối → sáng đọc lại 5' đủ ôn cả 23 patterns.

| # | Pattern | Category | One-line definition (TV) | Trigger keyword (đề thi hay dùng) | Spring/Real example |
|---|---|---|---|---|---|
| 1 | **Singleton** | Creational | 1 instance toàn cục | "only one instance", "global access" | Spring Beans |
| 2 | **Factory** | Creational | Decouple creation từ consumption | "subclass decides", "interface for creating" | ApplicationContext.getBean |
| 3 | **Abstract Factory** | Creational | Tạo **family** of related objects | "families of related/dependent" | UI toolkit per OS |
| 4 | **Builder** | Creational | Step-by-step construct complex object | "step-by-step", "complex object" | Spring HttpSecurity |
| 5 | **Prototype** | Creational | Clone object có sẵn | "clone", "copy existing" | Document templates |
| 6 | **Adapter** (Wrapper) | Structural | Convert interface | "incompatible interface", "wrapper" | Power adapter |
| 7 | **Composite** | Structural | Đối xử leaf & group đồng nhất | "hierarchy", "tree", "part-whole" | File system |
| 8 | **Decorator** | Structural | Thêm responsibility runtime, **composition** | "dynamically", "composition not inheritance" | Java I/O streams |
| 9 | **Proxy** | Structural | Kiểm soát truy cập object gốc | "controlling original" | @Transactional, Spring Security |
| 10 | **Bridge** | Structural | Tách abstraction & implementation | "decouple abstraction & implementation", "vary independently" | Remote × TV |
| 11 | **Facade** | Structural | Interface đơn giản cho subsystem phức tạp | "unified interface", "simplified" | Easy API wrapping complex SDK |
| 12 | **Flyweight** | Structural | Reuse objects giống → tiết kiệm RAM | "reuses existing similar", "reduces objects" | Game tree rendering |
| 13 | **Iterator** | Behavioral | Duyệt sequential không lộ internals | "sequentially", "without exposing" | Java Iterator |
| 14 | **Observer** | Behavioral | State change → notify dependents | "one-to-[one/many] dependency", "notified automatically" | NewsAgency, Pub/Sub |
| 15 | **Memento** | Behavioral | Snapshot/restore state, giữ encapsulation | "snapshot", "without violating encapsulation" | Undo/Redo |
| 16 | **State** | Behavioral | Behavior đổi theo state | "behavior changes based on state" | Document workflow |
| 17 | **Chain of Responsibility** | Behavioral | Pass request qua chain handler | "multiple objects a chance to handle" | Spring Security filter, Express middleware |
| 18 | **Command** | Behavioral | Đóng gói request thành object | "encapsulates a request", "Invoker" | GUI buttons, undo |
| 19 | **Mediator** | Behavioral | Centralize complex interaction | "encapsulates how objects interact", "centralizes" | Chat server, ATC |
| 20 | **Strategy** | Behavioral | Family of interchangeable algorithms | "family of algorithms", "interchangeable" | Payment methods |
| 21 | **Template Method** | Behavioral | Khung trong super, step trong sub | "skeleton", "override specific steps" | Framework lifecycle hooks |

> ⚠️ **Note**: Slide HANU chỉ liệt kê **21 patterns** trong Lec 9‑11 (không có Interpreter, Visitor — đôi khi GoF gốc có 23). Học theo slide!

---

<a id="phần-5"></a>
# PHẦN 5 — BẢNG PHÂN BIỆT CẶP PATTERN DỄ NHẦM

## 5.1 — Creational Comparisons

| Tiêu chí | Factory | Abstract Factory | Builder | Prototype |
|---|---|---|---|---|
| Tạo gì | 1 object | 1 family of related objects | 1 complex object | Clone của 1 object có sẵn |
| Cách tạo | Subclass quyết định | Interface tạo nhiều object cùng family | Step-by-step | Copy + customize |
| Khi dùng | Class không biết subclass | Cần family đồng bộ | Object phức tạp, nhiều tham số | Tạo mới expensive |

## 5.2 — Structural Comparisons (RẤT QUAN TRỌNG!)

| Tiêu chí | Adapter | Bridge | Decorator | Proxy | Facade |
|---|---|---|---|---|---|
| Mục đích chính | **Convert** interface | **Decouple** abstraction & implementation | **Add** responsibility | **Control** access | **Simplify** subsystem |
| Khi nào áp dụng | Sau (sửa cái có sẵn) | Trước (thiết kế từ đầu) | Runtime | Runtime | Anytime |
| Cấu trúc | Wrap 1 object | 2 hierarchies độc lập | Recursive wrap | Wrap 1 object | Wrap 1 subsystem |
| Thay đổi interface? | **CÓ** | Không | Không (giữ interface gốc) | Không | **CÓ** (đơn giản hơn) |

## 5.3 — Behavioral Comparisons

| Tiêu chí | Strategy | State | Template Method | Command |
|---|---|---|---|---|
| Encapsulate gì | Algorithm | Behavior per state | Algorithm skeleton | Request |
| Cơ chế chính | **Composition** | Composition (state object) | **Inheritance** (subclass override) | Composition (Command object) |
| Ai chọn | Client chọn | Object tự transition | Subclass override | Invoker thực thi |
| Đổi runtime? | Có | Có (state transition) | Không (compile time) | Có |

| Tiêu chí | Observer | Mediator | Chain of Responsibility |
|---|---|---|---|
| Topology | 1 source → N observers | All ↔ Mediator | Linear chain |
| Ai khởi xướng | Subject | Component nào cũng được | Sender |
| Mục đích | Notify đa receiver | Centralize logic | Pass request đến đúng handler |

## 5.4 — Pattern dùng INHERITANCE vs COMPOSITION

| **Inheritance** (IS-A) | **Composition** (HAS-A) |
|---|---|
| Template Method | Strategy |
| Factory Method (cổ điển) | State |
| | Decorator |
| | Bridge |
| | Composite |
| | Proxy |
| | Adapter (object adapter) |
| | Command |

> **Trick**: Slide nhấn mạnh "Decorator uses composition not inheritance" và "Bridge: switching from inheritance to composition" — đề thi hay hỏi điều này!

---

<a id="phần-6"></a>
# PHẦN 6 — 20 CÂU MCQ CHUYÊN SÂU (CÓ GIẢI CHI TIẾT)

> Tự làm, sau đó check đáp án + đọc giải thích để hiểu vì sao đáp án sai cũng học được.

---

**Q1**. Which design pattern would you use if you need to ensure only one database connection pool exists for the entire application?
- A) Factory
- B) Singleton ✅
- C) Builder
- D) Prototype

**Giải**: Singleton = "*only one instance and provides a global point of access*". DB connection pool đúng use case (logging, caching, configuration, thread pools — slide nêu rõ).

---

**Q2**. According to the slide, design patterns:
- A) Use the `new` operator extensively
- B) Are language-specific solutions
- C) **Do NOT use the `new` operator** ✅
- D) Replace OOP entirely

**Giải**: Slide ghi rõ Creational patterns "*Do not use the new operator*". Đây là 1 đặc trưng quan trọng — câu hỏi này hay xuất hiện.

---

**Q3**. The Factory pattern's main idea is:
- A) Create families of objects
- B) Clone existing objects
- C) **Decouple the creation from the consumption** ✅
- D) Build objects step-by-step

**Giải**: Đây là wording **chính xác** trong slide. A = Abstract Factory; B = Prototype; D = Builder.

---

**Q4**. Which pattern is used in Spring Security's `HttpSecurity` configuration?
- A) Singleton
- B) **Builder** ✅
- C) Factory
- D) Adapter

**Giải**: `http.csrf(...).authorizeHttpRequests(...).formLogin(...).build()` — chuỗi method calls + `.build()` → Builder pattern. Slide nhấn mạnh.

---

**Q5**. The Adapter pattern is also known as:
- A) Bridge
- B) Facade
- C) **Wrapper** ✅
- D) Proxy

**Giải**: Slide ghi rõ "Adapter (also called Wrapper)".

---

**Q6**. Which Proxy scenario is NOT one of the 4 mentioned in the slide?
- A) Virtual Proxy
- B) Protective Proxy
- C) Remote Proxy
- D) **Cached Proxy** ✅

**Giải**: 4 scenarios là: Virtual / Protective / Remote / **Smart**. "Cached" không có (Smart proxy có thể làm caching nhưng tên khác).

---

**Q7**. The Decorator pattern uses ___ to extend functionality.
- A) Inheritance
- B) **Composition** ✅
- C) Aggregation
- D) Abstraction

**Giải**: Slide nhấn mạnh "uses composition instead of inheritance". Đây là 1 trong những trap MCQ hay nhất.

---

**Q8**. Which 4 benefits are listed for the Bridge pattern?
- A) Decouples abstraction and implementation, promotes flexibility, helps avoiding class explosion, promotes code reuse ✅
- B) Speed, simplicity, security, scalability
- C) Separation of concerns, single responsibility, open-closed, Liskov
- D) Readability, maintainability, testability, performance

**Giải**: Slide liệt kê đúng 4 benefits ở đáp án A.

---

**Q9**. The Memento pattern has ___ components.
- A) 2
- B) **3** ✅ (Originator, Memento, Caretaker)
- C) 4
- D) 5

**Giải**: 3 components — Originator (state owner), Memento (state holder), Caretaker (save/restore trigger).

---

**Q10**. Which is the CORRECT order for Memento components based on responsibility?
- A) **Originator → Memento → Caretaker** ✅
- B) Caretaker → Memento → Originator
- C) Memento → Caretaker → Originator
- D) Caretaker → Originator → Memento

**Giải**: Originator owns state → Memento holds saved state → Caretaker triggers operations.

---

**Q11**. In the slide, the Observer pattern is defined as a "one-to-___" dependency.
- A) one (theo slide HANU)
- B) many (chuẩn GoF)
- C) Both A and B may appear in the slide ✅
- D) zero

**Giải**: Slide HANU ghi "one-to-one" (có thể typo). Khi thi, nếu trắc nghiệm cho lựa chọn, **chọn theo slide**. Tốt nhất xem lại slide gốc trước khi thi.

---

**Q12**. Which pattern is used by Spring Security's filter chain?
- A) Strategy
- B) Decorator
- C) **Chain of Responsibility** ✅
- D) Mediator

**Giải**: Slide ghi rõ Spring Security filter chain dùng Chain of Responsibility — mỗi filter có cơ hội xử lý request.

---

**Q13**. In the Command pattern, who actually performs the action?
- A) Command
- B) **Receiver** ✅
- C) Invoker
- D) Client

**Giải**: 4 roles: Command (encapsulates), **Receiver (performs)**, Invoker (initiates), Client (configures).

---

**Q14**. Which of the following actions can a Chain of Responsibility handler do? (multi-correct, slide lists 4)
- A) Pass request to next handler
- B) Modify request, then pass
- C) Throw error, stop chain
- D) Finish chain early without passing
- E) **All of A, B, C, D** ✅

**Giải**: Slide liệt kê chính xác 4 hành động. Trap: thường có câu nhầm "1 only" hoặc "2 only".

---

**Q15**. The Mediator pattern is commonly used in:
- A) Sorting algorithms
- B) **Chat applications** ✅
- C) Database queries
- D) File compression

**Giải**: Slide ghi "*commonly used in message-based systems likewise chat applications*" + ví dụ taxi dispatch, ATC.

---

**Q16**. Which pattern lets a class behavior change based on its current state, while Strategy lets a client choose the algorithm?
- A) **State (vs Strategy)** ✅
- B) Template Method
- C) Command
- D) Observer

**Giải**: Đây là cặp trap kinh điển. State = **tự đổi theo transition**; Strategy = **client chủ động chọn**.

---

**Q17**. In the Template Method pattern, what is overridden by subclasses?
- A) The template method itself
- B) **The specific steps (but NOT the template method)** ✅
- C) Both the template method and steps
- D) Nothing — final class

**Giải**: Slide nhấn mạnh "concrete classes can override some or all of the steps, **but not the template method itself**" (template method thường final).

---

**Q18**. The Flyweight pattern is most useful when:
- A) **Application uses many similar objects with high storage cost** ✅
- B) Application needs only one instance globally
- C) Object creation is simple but frequent
- D) Objects have no shared properties

**Giải**: Slide ghi "When the storage cost is high because of the quantity of objects" + reuse similar objects.

---

**Q19**. Which pattern uses inheritance (IS-A) rather than composition (HAS-A)?
- A) Strategy
- B) **Template Method** ✅
- C) Decorator
- D) Bridge

**Giải**: Template Method dùng inheritance (abstract class + subclass override). 3 cái còn lại đều dùng composition.

---

**Q20**. Which is NOT a creational pattern?
- A) Singleton
- B) Builder
- C) **Adapter** ✅ (Structural)
- D) Prototype

**Giải**: Adapter là **Structural**. 5 Creational: Singleton, Factory, Abstract Factory, Builder, Prototype.

---

### 📊 Đáp án nhanh
1. B / 2. C / 3. C / 4. B / 5. C / 6. D / 7. B / 8. A / 9. B / 10. A / 11. C / 12. C / 13. B / 14. E / 15. B / 16. A / 17. B / 18. A / 19. B / 20. C

> Mục tiêu: **≥ 17/20** = đã sẵn sàng phần Design Patterns.

---

<a id="phần-7"></a>
# PHẦN 7 — MNEMONIC & MẸO NHỚ

## 7.1 — Phân loại 23 (21 trong slide HANU)

**Creational (5)** = "**S** of **F**ish **A**re **B**ig **P**redators" → **S**ingleton, **F**actory, **A**bstract Factory, **B**uilder, **P**rototype

**Structural (7)** = "**A C**old **D**og **P**lays **B**y **F**ire **F**lames" → **A**dapter, **C**omposite, **D**ecorator, **P**roxy, **B**ridge, **F**acade, **F**lyweight

**Behavioral (9)** = Mnemonic riêng:
- **Loop**: **I**terator
- **Notify**: **O**bserver
- **Save**: **M**emento
- **Status**: **S**tate
- **Pipeline**: **C**hain of Responsibility
- **Action**: **C**ommand
- **Hub**: **M**ediator
- **Plug-and-play**: **S**trategy
- **Skeleton**: **T**emplate Method

## 7.2 — Mẹo phân biệt nhanh

| Nếu đề bài có cụm | → Pattern |
|---|---|
| "only one instance" / "global access" | Singleton |
| "decouple creation" / "subclass decides" | Factory |
| "family of related objects" | Abstract Factory |
| "step-by-step" / "complex object" | Builder |
| "clone" / "copy" | Prototype |
| "incompatible interface" / "wrapper" | Adapter |
| "tree" / "hierarchy" / "part-whole" | Composite |
| "dynamically add responsibility" | Decorator |
| "control access" / "transactional" | Proxy |
| "abstraction & implementation independently" | Bridge |
| "simplified interface to subsystem" | Facade |
| "reuse similar objects" / "memory" | Flyweight |
| "sequentially traverse" | Iterator |
| "notify dependents" / "subscribe" | Observer |
| "snapshot" / "undo/redo" | Memento |
| "behavior changes based on state" | State |
| "chain of handlers" / "filter chain" | Chain of Responsibility |
| "encapsulate request" / "Invoker" | Command |
| "centralize interaction" / "chat" / "ATC" | Mediator |
| "interchangeable algorithms" / "payment" | Strategy |
| "skeleton" / "override steps" | Template Method |

## 7.3 — Mẹo trắc nghiệm "category" (TRAP cực phổ biến!)

> "Pattern X belongs to which category?"

**Quick trick**: nếu pattern đang **TẠO** object → Creational; nếu đang **CẤU TRÚC** class/object → Structural; nếu đang **GIAO TIẾP** giữa objects → Behavioral.

**Trap thường gặp**:
- ❌ Adapter là Creational → SAI, nó **Structural**
- ❌ Strategy là Structural → SAI, nó **Behavioral**
- ❌ Decorator là Creational → SAI, nó **Structural** (nó cấu trúc object qua wrap)

## 7.4 — Trick câu hỏi đếm

Câu trắc nghiệm "How many ___?" → khi không nhớ chắc, đếm theo bảng:

| Pattern thuộc | Số tự nhiên |
|---|---|
| Singleton forms | **2** (Early, Lazy) |
| Memento components | **3** (Originator, Memento, Caretaker) |
| Proxy scenarios | **4** (Virtual, Protective, Remote, Smart) |
| Bridge benefits | **4** |
| Command roles | **4** (Command, Receiver, Invoker, Client) |
| Chain of Responsibility handler actions | **4** |
| Creational patterns | **5** |
| Structural patterns | **7** |
| Behavioral patterns | **9** |

---

## 🎓 KẾT LUẬN — TỰ ĐÁNH GIÁ TRƯỚC GIỜ THI

Bạn đã sẵn sàng phần Design Patterns nếu:
- ✅ Đặt tên 21 patterns theo 3 nhóm **không nhìn note**
- ✅ Trả lời 1 câu định nghĩa cho mỗi pattern bằng **wording slide**
- ✅ Phân biệt được các cặp trap: Strategy/State, Template/Strategy, Decorator/Proxy, Adapter/Bridge, Mediator/Observer
- ✅ Đạt **≥ 17/20** câu MCQ phần 6
- ✅ Nhớ các con số: 2 Singleton forms, 3 Memento components, 4 Proxy scenarios, 4 Command roles, 4 CoR handler actions

**Chúc bạn thi tốt! 🍀**
