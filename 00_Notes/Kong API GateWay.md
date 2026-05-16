Kong API Gateway is an open-source, cloud-native API gateway designed for high-performance and low-latency environments. It acts as a central hub between client requests and upstream microservices, handling critical "cross-cutting" concerns like authentication, security, and traffic control. [1, 2, 3, 4] 
## Core Components & Concepts
Kong's architecture is split into two primary planes to ensure scalability and resilience: [5, 6, 7, 8, 9] 

* Data Plane: Built on top of NGINX, this plane handles the actual traffic proxying and applies configured policies (plugins) to requests.
* Control Plane: Manages the configuration, such as routes and services, and pushes it to the Data Plane.
* Gateway Service: Represents the upstream backend API or microservice.
* Routes: Define how incoming requests (based on paths, hosts, or methods) are mapped to specific Gateway Services.
* Consumers: Represent unique clients (users or apps) that use the APIs, allowing for per-client policies like specific rate limits. [1, 5, 6, 10, 11] 

## Key Features

* Plugin Ecosystem: Kong is highly extensible through a library of over 100 plugins for [Authentication](https://konghq.com/blog/engineering/kong-gateway-tutorial) (JWT, OAuth 2.0), [Traffic Control](https://konghq.com/blog/learning-center/api-gateway-uses) (Rate Limiting, Throttling), and [Observability](https://developer.konghq.com/index/gateway/) (Logging, Monitoring).
* Multi-Cloud & Hybrid Support: It can be deployed across various environments, including Kubernetes (via the [Kong Ingress Controller](https://developer.konghq.com/kubernetes-ingress-controller/gateway-api/)), Docker, and on-premise servers.
* AI Gateway Capabilities: Recent versions include specialized features for governing AI traffic, such as multi-LLM support, prompt guardrails, and token-based rate limiting.
* Flexible Persistence: Kong can run in DB-less mode (using a declarative .yaml file) or DB-backed mode (typically using PostgreSQL). [3, 5, 10, 12, 13, 14, 15, 16] 

## Service Offerings

| Feature [5, 17, 18, 19, 20] | Kong Gateway (Open Source)[](https://github.com/Kong/kong) | Kong Enterprise[](https://konghq.com/products/kong-enterprise) |
|---|---|---|
| Cost | Free | Paid |
| Management UI | CLI / Admin API | Kong Manager (GUI) |
| Support | Community-led | 24/7 Enterprise Support |
| Plugins | Basic plugins only | Advanced (OIDC, AI Quota) |
| Analytics | Basic metrics | Advanced Real-time Analytics |

For a managed experience, [Kong Konnect](https://konghq.com/products/kong-konnect) provides a SaaS-based control plane that simplifies infrastructure management. [19, 21] 
Are you looking for installation steps for a specific environment like Kubernetes, or do you need help configuring a specific plugin?

[1] [https://konghq.com](https://konghq.com/products/kong-gateway)
[2] [https://github.com](https://github.com/Kong/kong)
[3] [https://konghq.com](https://konghq.com/blog/learning-center/api-gateway-uses#:~:text=API%20gateways%20provide%20a%20central%20platform%20for,rate%20limiting%2C%20throttling%2C%20transformations%2C%20analytics%20and%20monitoring.)
[4] [https://www.youtube.com](https://www.youtube.com/watch?v=tagH5k7nBQ0)
[5] [https://medium.com](https://medium.com/swlh/kong-api-gateway-zero-to-production-5b8431495ee)
[6] [https://developer.konghq.com](https://developer.konghq.com/index/gateway/)
[7] [https://konghq.com](https://konghq.com/blog/enterprise/multi-tenancy#:~:text=%23%23%20Gateway%20Planes%20All%20Kong%20Gateway%20deployments,platform:%20Data%20planes%20serve%20one%20main%20function:)
[8] [https://www.digitalapi.ai](https://www.digitalapi.ai/blogs/apigee-vs-mulesoft-vs-kong#:~:text=Its%20%28%20Kong%20%29%20decentralized%20architecture%20separates,of%20requests%20per%20second%20on%20modest%20hardware.)
[9] [https://www.linkedin.com](https://www.linkedin.com/pulse/kong-gateway-abhishek-ankush-pz1qc#:~:text=In%20a%20self%2Dmanaged%20hybrid%20gateway%20deployment%2C%20Kong,different%20environments%20while%20maintaining%20security%20and%20scalability.)
[10] [https://medium.com](https://medium.com/@nanditasahu031/a-comprehensive-guide-to-kong-api-gateway-11cc374c1ce5)
[11] [https://developer.konghq.com](https://developer.konghq.com/gateway/entities/consumer/)
[12] [https://developer.konghq.com](https://developer.konghq.com/gateway/)
[13] [https://www.youtube.com](https://www.youtube.com/watch?v=s275j7RtUd8&t=1)
[14] [https://www.youtube.com](https://www.youtube.com/watch?v=rTcj7znJVZc)
[15] [https://konghq.com](https://konghq.com/products/kong-ai-gateway)
[16] [https://developer.konghq.com](https://developer.konghq.com/ai-gateway/)
[17] [https://www.truefoundry.com](https://www.truefoundry.com/blog/kong-gateway-pricing-architecture-an-analysis-for-ai-teams-2026-edition#:~:text=The%20open%2Dsource%20version%20of%20Kong%20Gateway%20is,Rate%20Limiting%29%20required%20for%20production%20AI%20workloads.)
[18] [https://konghq.com](https://konghq.com/products/kong-enterprise)
[19] [https://developer.konghq.com](https://developer.konghq.com/konnect/)
[20] [https://konghq.com](https://konghq.com/products/kong-gateway)
[21] [https://developer.konghq.com](https://developer.konghq.com/gateway/install/)
