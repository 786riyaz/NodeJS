Here is your **updated and cleaned complete Markdown file**, properly structured and corrected (including fixing incorrect commands like `new alias default 22` → `nvm alias default 22`).

---

# NVM (Node Version Manager) – Complete Revision Notes

---

## 1️⃣ What is NVM?

**NVM (Node Version Manager)** is a tool used to:

* Install multiple versions of Node.js
* Switch between different Node versions
* Manage Node versions per project or system-wide

> On Windows, we use **NVM for Windows**, which is different from the Linux/macOS version.

---

## 2️⃣ Why Do We Need NVM?

In real-world development:

* Project A may require **Node 18**
* Project B may require **Node 20**
* Legacy systems may require **Node 14**
* Latest Next.js versions may require **Node 20+**

Without NVM → You must uninstall/reinstall Node repeatedly ❌
With NVM → You switch instantly using a single command ✅

---

## 3️⃣ Installing NVM (Windows)

### Step 1: Download

Download **`nvm-setup.exe`** from the official
NVM for Windows GitHub repository.

### Step 2: Install

* Run `nvm-setup.exe`
* Follow installation steps
* Restart terminal after installation

---

## 4️⃣ Verify NVM Installation

```bash
nvm version
```

Example output:

```
1.1.12
```

If you see a version number → Installation successful ✅

---

## 5️⃣ Check Available Node Versions

```bash
nvm list available
```

This shows all Node versions that can be installed.

---

## 6️⃣ Install Node Versions Using NVM

### Install Latest Version of a Major Release

```bash
nvm install 22
```

Installs latest 22.x.x version.

---

### Install Specific Version

```bash
nvm install 20.18.0
```

Installs exactly **Node 20.18.0**

---

## 7️⃣ View Installed Versions

```bash
nvm list
```

Shows all installed Node versions.

Example:

```
  * 22.0.0 (Currently using 64-bit)
    20.18.0
```

`*` indicates the active version.

---

## 8️⃣ Switch Node Version

Activate a version:

```bash
nvm use 22
```

OR

```bash
nvm use 20.18.0
```

This changes the globally active Node version.

---

## 9️⃣ Set Default Node Version

To automatically use a version when terminal opens:

```bash
nvm alias default 22
```

Now every new terminal session will use Node 22.

---

## 🔟 Verify Active Node & NPM

```bash
node -v
npm -v
```

Example:

```
v22.0.0
10.8.1
```

---

## 1️⃣1️⃣ Important NVM Commands (Quick Reference)

| Command                       | Purpose                      |
| ----------------------------- | ---------------------------- |
| `nvm version`                 | Check NVM version            |
| `nvm list`                    | Show installed Node versions |
| `nvm list available`          | Show installable versions    |
| `nvm install <version>`       | Install Node version         |
| `nvm use <version>`           | Switch Node version          |
| `nvm uninstall <version>`     | Remove Node version          |
| `nvm alias default <version>` | Set default Node version     |
| `node -v`                     | Check active Node version    |
| `npm -v`                      | Check npm version            |

---

## 1️⃣2️⃣ How NVM Works Internally (Conceptual Understanding)

* NVM installs each Node version in a separate directory.
* It modifies:

  * The **PATH environment variable**
  * Symbolic links internally
* Only one Node version can be active at a time.
* npm version automatically matches the selected Node version.

---

## 1️⃣3️⃣ Common Errors & Fixes

### ❌ `nvm is not recognized`

✔ Restart terminal
✔ Check installation path
✔ Verify NVM added to system PATH

---

### ❌ Node version not switching

✔ Close all terminals
✔ Open new terminal
✔ Run:

```bash
nvm use <version>
```

---

### ❌ Next.js requires newer Node

Error example:

```
Node.js version ">=20.9.0" is required
```

Fix:

```bash
nvm install 22
nvm use 22
```

---

## 1️⃣4️⃣ Interview Questions

### Q1: What is NVM?

A version manager that allows multiple Node.js installations and switching between them.

---

### Q2: Difference between:

```
nvm install 22
```

and

```
nvm install 20.18.0
```

* `22` → installs latest 22.x version
* `20.18.0` → installs exact version

---

### Q3: How to check installed Node versions?

```bash
nvm list
```

---

### Q4: Does NVM remove old versions automatically?

❌ No
You must manually remove them:

```bash
nvm uninstall <version>
```

---

## 1️⃣5️⃣ Best Practices

✔ Use LTS versions for production
✔ Match Node version with project requirements
✔ Check `node -v` after switching
✔ Do not install Node directly when using NVM
✔ Set a default version for consistency

---

# ✅ Practical Command Flow Example

```bash
nvm version
nvm list available
nvm install 22
nvm install 20.18.0
nvm list
nvm use 22
node -v
npm -v
nvm alias default 22
```

---

# 🚀 Final Quick Revision Summary

```
Install NVM → nvm-setup.exe
Check NVM → nvm version
See available → nvm list available
Install Node → nvm install 22
Install specific → nvm install 20.18.0
Switch version → nvm use 22
Set default → nvm alias default 22
Verify → node -v
```
