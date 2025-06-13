<h1 align="center">🚀SUKUNA-MD</h1>

<p align="center">
  <img src="https://files.catbox.moe/al2qgj.jpg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https:"><img src="https://img.shields.io/github/stars/Crazynotdev/SUKUNA-MD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/DARKMAN226/SUKUNA-MD/fork"><img src="https://img.shields.io/github/forks/DARKMAN226/SUKUNA-MD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029VbAfF6f1dAw7hJidqS0i"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/DARKMAN226"><img src="https://img.shields.io/badge/DARKMAN226-blueviolet?style=flat-square"></a>
</p>

**SESSION ID💫**

[![Get Session](https://img.shields.io/badge/Get%20Session-SUKUNA-MDblueviolet?style=for-the-badge&logo=linktree)](https://sukuna-paire.onrender.com/)
---

🧠 Features

- 🔁 Auto Restart & Baileys Multi-Device Support  
- 🔌 Dynamic Plugin Loader  
- 🔐 Private/Group Commands  
- 🖥️ Console Interface & Live Logs  
- ☁️ Deployable on Multiple Platforms  

---

🚀 One-Click Deploy Options

⚡ Katabump
[![Deploy with Katabump](https://img.shields.io/badge/Deploy%20Now-KATABUMP-2ecc71?style=for-the-badge)](https://katabump.com)

🔄 GitHub Actions
Deploy automatically using `.yml` workflow inside GitHub Actions.


**GITHUB DEPLOYMENT** ⭐️

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

---
🔗 Useful Links

[![Join Our WhatsApp Channel](https://img.shields.io/badge/Join%20Channel-WhatsApp-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029VbAfF6f1dAw7hJidqS0i)
---

👑 Credits

> Made with ❤️ by *DARK DEV*  
> Contact: `22603582906`
> collaboration avec DEV 𝙕𝙀𝙋𝙃𝙔𝙍𓂀♱ et INCONNUS TECH 
---

*©️ 2025 – SUKUNA MD | All Rights Reserved.*

