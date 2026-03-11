# 🐍 SERPENT.AI — Snake Classification System

> A containerized microservices architecture for real-time snake species detection using YOLOv8, built with Docker, Nginx, and FastAPI.

---

## Block Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER'S BROWSER                           │
│                    http://localhost:8080                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTP Request
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                   CONTAINER A: web (Nginx)                      │
│                        Port 80 (internal)                       │
│                    Port 8080 (exposed)                          │
│                                                                 │
│   GET  /          → serve index.html, App.js, Style.css         │
│   POST /api/*     → proxy → yolo-service:8000                   │
│   POST /chat      → proxy → chat-service:3001                   │
└──────────┬────────────────────────────┬─────────────────────────┘
           │                            │
           ▼                            ▼
┌──────────────────────┐   ┌────────────────────────────────────┐
│  CONTAINER B:        │   │  CONTAINER C:                      │
│  yolo-service        │   │  chat-service                      │
│  (FastAPI + YOLOv8)  │   │  (Node.js + Gemini AI)             │
│  Port 8000           │   │  Port 3001                         │
│  [NOT exposed]       │   │  [NOT exposed]                     │
│                      │   │                                    │
│  POST /predict       │   │  POST /chat                        │
│  ↓                   │   │  ↓                                 │
│  YOLO Inference      │   │  Gemini API                        │
│  ↓                   │   │  ↓                                 │
│  Return JSON         │   │  Return answer                     │
│  {box, label,        │   │  + Log to Discord                  │
│   confidence,        │   │    Webhook                         │
│   is_venomous}       │   │                                    │
└──────────────────────┘   └────────────────────────────────────┘
           │                            │
           └────────────────────────────┘
             Docker Network: internal
            (Bridge Network — isolated)
```

---

## Data Flow

```
1. User uploads snake image
        │
        ▼
2. Browser sends POST /api/predict
        │
        ▼
3. Nginx proxies → yolo-service:8000/predict
        │
        ▼
4. YOLOv11 runs inference on image
        │
        ▼
5. Returns JSON: { label, box, confidence, is_venomous }
        │
        ▼
6. Frontend draws bounding box + shows result card

─────────────────────────────────────────────

1. User types question in chat
        │
        ▼
2. Browser sends POST /chat
        │
        ▼
3. Nginx proxies → chat-service:3001/chat
        │
        ▼
4. Gemini AI answers with snake expert knowledge
        │
        ├──→ Return answer to browser
        │
        └──→ Log Q&A to Discord Webhook
```

---

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

**if you prefer to use only snake ai with out ai chat bot can skip this**
- Gemini API Key → [Get here](https://aistudio.google.com/apikey)
- DISCORD WEBHOOK ID

---

## Quick Start

### 1. Clone
```bash
git clone https://github.com/PetchTueksuban/projectvisionsnakeclassify
cd projectvision
```
### if you prefer to use only snake ai with out ai chat bot can skip set up.env
### 2. Setup environment
```bash
cp .env.example .env
```
Edit `.env` and fill in your keys:
```
GEMINI_API_KEY=your_key_here
DISCORD_WEBHOOK=your_webhook_here 
```

### 3. Run
```bash
docker-compose up --build
```

### 4. Open browser
```
http://localhost:8080
```

---

## Snake Species (23 Classes)

| # | Species | Thai | Venomous |
|---|---------|------|----------|
| 0 | Banded Krait | งูทับสมิงคลา | ☠️ |
| 1 | Burmese Python | งูหลามพม่า | ✅ |
| 2 | Common Sunbeam Snake | งูรุ้ง | ✅ |
| 3 | Copperhead Racer | งูสายรุ้ง | ✅ |
| 4 | Golden Tree Snake | งูเขียวหางไหม้ | ⚠️ |
| 5 | Indochinese Rat Snake | งูสิงห์ | ✅ |
| 6 | Javan Wart Snake | งูน้ำหัวกบ | ✅ |
| 7 | King Cobra | งูจงอาง | ☠️ |
| 8 | Laotian Wolf Snake | งูหมาป่าลาว | ✅ |
| 9 | Large-eyed Pit Viper | งูเขียวตาโต | ☠️ |
| 10 | Malayan Krait | งูทับสมิงคลามลายู | ☠️ |
| 11 | Malayan Pit Viper | งูแมวเซา | ☠️ |
| 12 | Monocled Cobra | งูเห่า | ☠️ |
| 13 | Oriental Rat Snake | งูสิงห์ตะวันออก | ✅ |
| 14 | Rainbow Mud Snake | งูโคลนรุ้ง | ✅ |
| 15 | Reticulated Python | งูหลาม | ✅ |
| 16 | Siamese Red-necked Keelback | งูคอแดงสยาม | ⚠️ |
| 17 | Siamese Russell's Viper | งูแมวเซาสยาม | ☠️ |
| 18 | Small Banded Kukri Snake | งูกุ๊กไก่ | ✅ |
| 19 | Small Spotted Coral Snake | งูปะการังจุดเล็ก | ☠️ |
| 20 | Striped Kukri Snake | งูกุ๊กไก่ลาย | ✅ |
| 21 | Western Mangrove Cat Snake | งูแมวป่าชายเลน | ⚠️ |
| 22 | Yellow-spotted Keelback | งูลายสอจุดเหลือง | ✅ |

☠️ Venomous &nbsp;|&nbsp; ⚠️ Mildly venomous &nbsp;|&nbsp; ✅ Non-venomous

---

## Project Structure

```
projectvision/
├── ai/
│   ├── Dockerfile         # python:3.9-slim
│   ├── main.py            # FastAPI + YOLOv8 endpoint
│   ├── requirements.txt
│   └── best.pt            # ← add manually (not in repo)
├── chat/
│   ├── Dockerfile         # node:22-alpine
│   ├── server.js          # Gemini AI + Discord logging
│   └── package.json
├── web/
│   ├── Dockerfile         # nginx:alpine
│   ├── index.html         # Frontend UI
│   ├── App.js             # JavaScript logic
│   ├── Style.css          # Styling
│   └── nginx.conf         # Reverse proxy config
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Reverse Proxy | Nginx |
| AI Detection | YOLOv8 (Ultralytics) |
| AI Backend | FastAPI + Python |
| Chatbot | Gemini AI (Google) |
| Chat Backend | Node.js + Express |
| Containerization | Docker + Docker Compose |
| Logging | Discord Webhook |
