# 🌐 1. HTTP (HyperText Transfer Protocol)

## What it is

**HTTP** is an **application-layer protocol** used for communication between client (browser/app) and server.

👉 It follows a **request–response model**:

* Client sends request → Server processes → Sends response

## Example

```
GET /users HTTP/1.1
Host: example.com
```

Response:

```
200 OK
Content-Type: application/json
```

## Key Concepts

* **Methods**: GET, POST, PUT, DELETE
* **Status Codes**: 200, 404, 500
* **Headers**: metadata (auth, content-type)
* **Stateless**: each request is independent

## Why it’s useful

* Universal standard for web
* Works over internet easily
* Simple and extensible

---

# ⚙️ 2. Designing Principles (API Design Principles)

These are **rules/best practices** for building scalable APIs.

## Core Principles

* **Statelessness** → no server memory between requests
* **Client–Server separation**
* **Cacheability**
* **Uniform Interface**
* **Layered System**

👉 These principles come from REST architecture.

---

# 🔁 3. REST (Representational State Transfer)

## What it is

REST is an **architectural style** built on HTTP.

## Core Idea

Everything is a **resource**

```
/users
/products
/orders
```

## HTTP Mapping

| Action | Method    |
| ------ | --------- |
| Read   | GET       |
| Create | POST      |
| Update | PUT/PATCH |
| Delete | DELETE    |

## Example

```
GET /users/1
```

## Advantages

* Simple & widely used
* Human-readable (JSON)
* Works naturally with HTTP

## Disadvantages

* Over-fetching / under-fetching
* Multiple requests needed sometimes
* No strict schema

---

# 🔍 4. GraphQL

## What it is

A **query language for APIs** developed by Meta Platforms

## Core Idea

Client asks **exactly what it needs**

## Example

```
query {
  user(id: 1) {
    name
    email
  }
}
```

## Advantages

* No over-fetching
* Single endpoint
* Strong typing (schema)

## Disadvantages

* Complex to implement
* Caching is harder
* Performance tuning required

---

# 🔌 5. RPC (Remote Procedure Call)

## What it is

Call a function on another server like a local function.

## Example

```
getUser(1)
```

👉 Instead of thinking in resources, you think in **functions**

## Advantages

* Simple mental model
* Fast execution
* Good for internal services

## Disadvantages

* Tight coupling
* Not RESTful
* Harder to scale publicly

---

# ⚡ 6. gRPC (Google Remote Procedure Call)

## What it is

A modern RPC framework by Google

## Key Features

* Uses **HTTP/2**
* Uses **Protocol Buffers (binary format)**
* Supports streaming

## Example (proto file)

```
service UserService {
  rpc GetUser(UserRequest) returns (UserResponse);
}
```

## Advantages

* Very fast (binary data)
* Strong typing
* Streaming support

## Disadvantages

* Hard to debug (not human-readable)
* Browser support limited
* Learning curve

---

# 🧠 BIG DIFFERENCE (Core Understanding)

## 🔥 Conceptual Difference

| Type    | Thinking Style              |
| ------- | --------------------------- |
| HTTP    | Communication protocol      |
| REST    | Resource-based architecture |
| GraphQL | Query-based data fetching   |
| RPC     | Function-based calls        |
| gRPC    | High-performance RPC        |

---

## ⚔️ REST vs GraphQL vs gRPC

| Feature       | REST        | GraphQL             | gRPC           |
| ------------- | ----------- | ------------------- | -------------- |
| Data Fetching | Fixed       | Flexible            | Fixed          |
| Protocol      | HTTP/1.1    | HTTP                | HTTP/2         |
| Format        | JSON        | JSON                | Binary (Proto) |
| Speed         | Medium      | Medium              | Very Fast      |
| Ease          | Easy        | Medium              | Hard           |
| Use Case      | Public APIs | Frontend-heavy apps | Microservices  |

---

## 🧩 When to Use What

### Use REST when:

* Building public APIs
* Simplicity is priority

### Use GraphQL when:

* Frontend needs flexible data
* Avoid multiple API calls

### Use gRPC when:

* Microservices communication
* High performance needed

### Use RPC when:

* Internal services
* Function-based logic

---

# 🧱 Architecture View (Important)

```
Frontend → API Layer → Backend Services → Database
```

| Layer             | Best Choice    |
| ----------------- | -------------- |
| Frontend API      | REST / GraphQL |
| Internal Services | gRPC           |
| Simple Systems    | REST           |

---

# ⚠️ Common Mistakes

* Thinking REST = HTTP ❌
* Thinking GraphQL replaces REST ❌
* Using gRPC for frontend ❌
* Ignoring scalability needs ❌

---

# 🎯 Final Mental Model

* **HTTP = language of internet**
* **REST = rules for using HTTP**
* **GraphQL = smarter querying**
* **RPC = function calling**
* **gRPC = high-performance RPC**

---

If you want, I can next:

* Show **Node.js implementation** for REST vs GraphQL vs gRPC
* Or give **real-world system design examples (like Netflix, Amazon)**
* Or create a **cheat sheet PDF/MD file** for revision
