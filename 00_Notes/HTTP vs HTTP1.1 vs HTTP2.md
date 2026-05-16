## 🌐 HTTP vs HTTP/1.1 vs HTTP/2

### 1) HTTP (generic concept)

**HTTP** is the **protocol family**—a set of rules for request–response communication on the web.
When people say “HTTP” without a version, they usually mean **the idea of HTTP**, not a specific wire-level behavior.

---

## 2) HTTP/1.1 (the long-standing default)

![Image](https://images.openai.com/static-rsc-4/SANFwh47YHRQgWgClBTKzv5sX2pvkWMiKcLcrVrnG7hYiEBaFK6z1p5WIv95rt_S9YlFCoR1jrz28sii2cx3i1I8phHSvYMRIm6pHEVfmHMTCT6tvpnM3BKinei82d3XRc2xXqGWyMAYnpe8neme04WsJnrne0Afrj13CGu8d6OBYoXIkhqJdTRZAQSRCwhy?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Zef_Crvgte3GR19dszwUFzgQl0NEiEzXrH7W4wGLBZP8i-RzpiuMj0RqhlFQy6lv0CTy3I4alWXFah1GKrBpHEP3c-F_-yWQYPha2kB5yR6fnAw8_1gVMFIY1hNb7ISocT7604Uq6UuAqA7ZC4mjex4SZ1fr9eUEeM55nQzlb4Fs-_v4AkYq549xDrvgwueJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-IOl9AuaHnEjCSS2yGW8y2UFPNttaRRnn69jIbmbyvd3yfqCttMMCGTTKan_yATNIsuGPnGgVAf8_Dfua4uSnoWow6znqg3O2y-mNZ2yAIVWrO_Z3yCST6o-wWdqTE24Ac05ODU6aAV3B4GbLoIH6h7vRhx_Gl5cPv7CLhAD-BAV_9fRdm0doW-zNb7aBFr5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GSbgpV-mUVS7qN90iOj2bDv9PHBvKdX85tSvm19FN-g1p_DjjfGq4mRmbQ06eSMHAn0Ybdx7VJiPAV29w2NK8iQ0-eFm5UNdFWkpQ_dzwyYHMVLgLIoPGmK_7pG2-ayYTSKwW0Dib22QBJs7anOkgWeZAh9PPvnG0umJdPzGw_4GEZfIO39lP1yJCJ0KGhXB?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/QHkt0PqDNfyosAO1WYDWES-Y99KivkbA6n4tNXzmRufpPau1uoyv7clm52GWqzSreCWUB1DeGfWjDzRfCoQ6CwxZaeRC5uXnMOSiAseXFx9WstMkbzPvsznoafDZj3VCCVr3Oiz2Hu3gPJ-KzZx5SogKydh19eJFKYBdW6dJD8CcnKSG-4efNwWtTMShuxWk?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/zyZyepdRkQYM2VAsXI6hiAWxZ-GKNcfQsX8ZhtwLQSXkpyx2alB9r94w_k6urZ1zieHXru3jNgkjgsVZ75QFFrM-S7pks7efi_J6_golJURrDAAPdzpbHWT66_xIE7wgtZBZtAoMFMDGKQ0mG1oXetXKVArBD9jeRxrEobMWrWs8vooR0gKlN6RvjcT1eMVG?purpose=fullsize)

### How it works (important mechanics)

* **One request → one response at a time per connection**
* Introduced **persistent connections (keep-alive)**
* Browsers open **multiple TCP connections** to parallelize (typically 6 per host)

### Key limitations

* **Head-of-Line (HOL) blocking**: one slow response blocks others on the same connection
* **Text-based** (headers + body) → larger payloads
* Redundant headers sent repeatedly

### Summary

> Reliable and simple, but inefficient for modern, asset-heavy apps.

---

## 3) HTTP/2 (modern performance upgrade)

![Image](https://images.openai.com/static-rsc-4/A3_l3nj4GSKVQGRVxhSGTiwi0-TH2lBvAwDt7Y1uK_rz2bhNCGrWgGUZWq1tHkCezKBD5OfAVsWgduQh-mM9llT7dhs7IH3Vco5mGVISIbSRHhGX9ik9E5VBvpMdP-KIcaK0DxL2o9-Zk2YjSEjuo1lulKW6wxzA9Ut0p4-F-YVXVaG5KcS4W9s2P3xXNN3W?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/8_elgx_tttWvEG_6_YkyT08hdThi7RBs5VNCFZHjKYtfc9MJChlNcBtipu213Fp12Mznv6WZbIQ3s__wwTOqDDnpYUVcJZTw8Z6fXZYIISMF6NC3kxy4eHvbEfMsUhdIUvP4y1DIBmAcc12E9D94JfdCSC0Ln7emNBGqtxlhOXMpRltnriZjdKOMQxYW2zW_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/FCG7fojCeIOZP4dLmCbN6ODHcWvpZmPTqwG0FkN1FzV8nEa1NJ-SLuWDHUyrOTfduWrC1_hNQg1aF83GGlz-50JDemct-2auGGgwv7nPx1ZerzOE_ZX8IAbVzDhLquSZXwDqLrxXctHG1og-tIjaYH3zpL120iMUlYR64y2l1tuoRit6OFCzJ-CC2pIE1gQa?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/DglRc5GfUhVGODx8Hy1URt2fimF9i9CJvJju_hOZ1YjZ3JMl2-PUrTV6GpxBNDOwm0mwPMkIOWtnMGnvJXuelh5dQl6jni-J6IogGsvrCAbbR94R6Mg29X3U95ImsUf5pDti4O9WPsd58febZ0Po9j3nYZ-2Io-Uf9TIKddOF8N57yHfkPhgDwc67wVlch3t?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/IXWEqYdHhvaaUZ2q1V-X93X08cLN-8xaOOM3OLKYRaa6SU5NElsNp3-iSxqZzm6_d57GwNTpCaBL3tA6Oezu4lVZXJnoksEXiaVZ8rMZE8q7VoIPX7ZUijv-UKBseBDh2HxT4C4jXUA4aceDa1k3vCDct8XhZGD2V3daVZqAXfO_XNygF3dmjY9UJSMowhH1?purpose=fullsize)

### What changed fundamentally

* **Multiplexing**: multiple requests/responses over a **single TCP connection simultaneously**
* **Binary protocol** (not plain text)
* **Header compression (HPACK)** → smaller payloads
* **Server Push** (server can send resources proactively)

### Benefits

* Eliminates most HOL blocking at application level
* Faster page loads
* Fewer TCP connections → better network efficiency

### Trade-offs

* More complex implementation
* Still has **TCP-level HOL blocking** (solved later in HTTP/3 via QUIC)

---

## 🔥 Side-by-Side Comparison

| Feature          | HTTP (generic) | HTTP/1.1   | HTTP/2                 |
| ---------------- | -------------- | ---------- | ---------------------- |
| Type             | Concept        | Version    | Version                |
| Data Format      | —              | Text       | Binary                 |
| Connections      | —              | Multiple   | Single                 |
| Requests at once | —              | Sequential | Parallel (multiplexed) |
| Performance      | —              | Moderate   | High                   |
| Header Size      | —              | Large      | Compressed             |
| HOL Blocking     | —              | Yes        | Mostly removed         |

---

## 🧠 Mental Model

* **HTTP** → “rules of communication”
* **HTTP/1.1** → “old road with traffic jams”
* **HTTP/2** → “multi-lane express highway”

---