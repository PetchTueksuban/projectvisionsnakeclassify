const express = require('express');
const app = express();
app.use(express.json());

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const GEMINI_API_KEY  = process.env.GEMINI_API_KEY  || '';
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK || '';
const PORT            = process.env.PORT            || 3001;

const SYSTEM_PROMPT = `คุณคือผู้เชี่ยวชาญด้านงูในประเทศไทย ชื่อว่า "Serpent.AI Expert" มีความรู้เกี่ยวกับงู 23 ชนิดนี้:

1. Banded Krait (งูทับสมิงคลา) - มีพิษ
2. Burmese Python (งูหลามพม่า) - ไม่มีพิษ
3. Common Sunbeam Snake (งูรุ้ง) - ไม่มีพิษ
4. Copperhead Racer (งูสายรุ้ง) - ไม่มีพิษ
5. Golden Tree Snake (งูเขียวหางไหม้) - มีพิษเล็กน้อย
6. Indochinese Rat Snake (งูสิงห์) - ไม่มีพิษ
7. Javan Wart Snake (งูน้ำหัวกบ) - ไม่มีพิษ
8. King Cobra (งูจงอาง) - มีพิษ
9. Laotian Wolf Snake (งูหมาป่าลาว) - ไม่มีพิษ
10. Large-eyed Pit Viper (งูเขียวตาโต) - มีพิษ
11. Malayan Krait (งูทับสมิงคลามลายู) - มีพิษ
12. Malayan Pit Viper (งูแมวเซา) - มีพิษ
13. Monocled Cobra (งูเห่า) - มีพิษ
14. Oriental Rat Snake (งูสิงห์ตะวันออก) - ไม่มีพิษ
15. Rainbow Mud Snake (งูโคลนรุ้ง) - ไม่มีพิษ
16. Reticulated Python (งูหลาม) - ไม่มีพิษ
17. Siamese Red-necked Keelback (งูคอแดงสยาม) - มีพิษเล็กน้อย
18. Siamese Russell's Viper (งูแมวเซาสยาม) - มีพิษ
19. Small Banded Kukri Snake (งูกุ๊กไก่) - ไม่มีพิษ
20. Small Spotted Coral Snake (งูปะการังจุดเล็ก) - มีพิษ
21. Striped Kukri Snake (งูกุ๊กไก่ลาย) - ไม่มีพิษ
22. Western Mangrove Cat Snake (งูแมวป่าชายเลน) - มีพิษเล็กน้อย
23. Yellow-spotted Keelback (งูลายสอจุดเหลือง) - ไม่มีพิษ

กฎการตอบ:
- ตอบเป็นภาษาไทย กระชับ เข้าใจง่าย
- ถ้าถูกงูมีพิษกัด ให้เน้นโทร 1669 ทันที
- ตอบสั้น 2-4 ประโยค
- ใส่ emoji ให้เหมาะสม`;

// ─── GEMINI API ───────────────────────────────────────────────────────────────
async function askGemini(message) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: message }] }]
      })
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini error: ${err}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'ขออภัย ไม่สามารถตอบได้';
}

// ─── DISCORD LOG ──────────────────────────────────────────────────────────────
async function logToDiscord(question, answer) {
  if (!DISCORD_WEBHOOK) return;
  await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [{
        title: '🐍 Snake AI Chat Log',
        color: 0x22c55e,
        fields: [
          { name: '👤 คำถาม', value: question.slice(0, 1024) },
          { name: '🤖 คำตอบ', value: answer.slice(0, 1024) }
        ],
        timestamp: new Date().toISOString()
      }]
    })
  }).catch(e => console.error('[discord]', e.message));
}

// ─── API ──────────────────────────────────────────────────────────────────────
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'message required' });

  try {
    const reply = await askGemini(message);
    logToDiscord(message, reply);
    res.json({ reply });
  } catch (err) {
    console.error('[chat] error:', err.message);
    res.status(503).json({ error: err.message });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.listen(PORT, () => console.log(`[chat-service] listening on :${PORT}`));
