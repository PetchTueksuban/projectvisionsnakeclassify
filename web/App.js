// ─── i18n LANGUAGE SYSTEM ────────────────────────────────────────────────────
const STRINGS = {
    th: {
        // nav
        nav_scan:       'วิเคราะห์',
        nav_history:    'ประวัติ',
        nav_enc:        'สารานุกรม',
        // logo
        logo_sub:       'Snake Classification System',
        // upload
        upload_title:   'IDENTIFY<br><span>ANY SNAKE</span>',
        upload_subtitle:'อัปโหลดภาพงู — AI จะวิเคราะห์สายพันธุ์และระดับอันตรายทันที',
        upload_main:    'วางรูปภาพที่นี่ หรือคลิกเพื่อเลือกไฟล์',
        upload_sub:     'รองรับ JPG, PNG, WEBP — ความละเอียดสูงให้ผลแม่นยำกว่า',
        btn_analyze:    'วิเคราะห์รูปภาพ',
        btn_camera:     'ถ่ายจากกล้อง',
        btn_reset:      'วิเคราะห์ใหม่',
        // history
        history_title:  'SCAN <span>HISTORY</span>',
        history_sub:    'ประวัติการสแกนในเซสชันนี้ · Session storage only',
        hist_empty:     'ยังไม่มีประวัติการสแกน<br>ไปวิเคราะห์รูปภาพก่อนเลย!',
        // encyclopedia
        enc_title:      'SNAKE <span>ENCYCLOPEDIA</span>',
        enc_sub:        'ฐานข้อมูลงูไทย 23 สายพันธุ์ · คลิกเพื่อดูรายละเอียด',
        enc_search_ph:  '🔍  ค้นหาชื่อ ชนิด หรือแหล่งอาศัย...',
        enc_all:        'ทั้งหมด',
        enc_venomous:   'มีพิษ',
        enc_safe:       'ไม่มีพิษ',
        // camera
        cam_title:      'LIVE CAMERA SCAN',
        cam_sub:        'ส่องกล้องไปที่งู แล้วกดถ่ายภาพ',
        cam_status:     'กำลังเปิดกล้อง...',
        btn_capture:    'ถ่ายภาพ',
        btn_switch:     'สลับกล้อง',
        btn_cancel:     'ยกเลิก',
        // share
        share_preview:  'SHARE CARD PREVIEW',
        // chat
        chat_title:     'ผู้เชี่ยวชาญด้านงู AI',
        chat_ready:     'Claude · พร้อมช่วยเหลือ',
        chat_ph:        'ถามเกี่ยวกับงู...',
        q1:             'งูอันตรายที่สุด',
        q2:             'ถูกงูกัด',
        q3:             'แยกพิษ/ไม่มี',
        q1_ask:         'งูที่อันตรายที่สุดในไทยคืออะไร?',
        q2_ask:         'ถูกงูกัดควรทำอย่างไรก่อนถึงโรงพยาบาล?',
        q3_ask:         'วิธีแยกงูมีพิษกับไม่มีพิษ?',
        // result cards (dynamic, used in JS)
        venomous_badge: 'มีพิษ · VENOMOUS',
        safe_badge:     'ไม่มีพิษ · NON-VENOMOUS',
        confidence_lbl: 'Confidence',
        family_lbl:     'วงศ์',
        size_lbl:       'ขนาด',
        habitat_lbl:    'แหล่งอาศัย',
        region_lbl:     'พื้นที่ในไทย',
        venom_lbl:      'ประเภทพิษ',
        danger_lbl:     'ระดับอันตราย',
        firstaid_lbl:   'การปฐมพยาบาล',
        tips_lbl:       'คำแนะนำ',
        share_btn:      'แชร์ card',
        map_btn:        'แผนที่พื้นที่พบ',
        no_result:      'ไม่พบงูในภาพ หรือความมั่นใจต่ำเกินไป<br>ลองใช้ภาพที่ชัดขึ้นหรือถ่ายใกล้ขึ้น',
        hist_clear:     '🗑 ล้างประวัติ',
        hist_confirm:   'ล้างประวัติการสแกนทั้งหมด?',
        detection_lbl:  'Detection',
        species_lbl:    'Species Detected',
        analysis_ok:    '● ANALYSIS COMPLETE',
    },
    en: {
        // nav
        nav_scan:       'Analyze',
        nav_history:    'History',
        nav_enc:        'Encyclopedia',
        // logo
        logo_sub:       'Snake Classification System',
        // upload
        upload_title:   'IDENTIFY<br><span>ANY SNAKE</span>',
        upload_subtitle:'Upload a snake photo — AI will instantly identify species & danger level',
        upload_main:    'Drop image here or click to select file',
        upload_sub:     'Supports JPG, PNG, WEBP — higher resolution gives better accuracy',
        btn_analyze:    'Analyze Image',
        btn_camera:     'Use Camera',
        btn_reset:      'Analyze Again',
        // history
        history_title:  'SCAN <span>HISTORY</span>',
        history_sub:    'Scans from this session · Session storage only',
        hist_empty:     'No scan history yet.<br>Go analyze an image first!',
        // encyclopedia
        enc_title:      'SNAKE <span>ENCYCLOPEDIA</span>',
        enc_sub:        'Thai snake database · 23 species · Click for details',
        enc_search_ph:  '🔍  Search by name, family, or habitat...',
        enc_all:        'All',
        enc_venomous:   'Venomous',
        enc_safe:       'Non-venomous',
        // camera
        cam_title:      'LIVE CAMERA SCAN',
        cam_sub:        'Point camera at the snake, then press capture',
        cam_status:     'Opening camera...',
        btn_capture:    'Capture',
        btn_switch:     'Switch Camera',
        btn_cancel:     'Cancel',
        // share
        share_preview:  'SHARE CARD PREVIEW',
        // chat
        chat_title:     'Snake Expert AI',
        chat_ready:     'Claude · Ready to help',
        chat_ph:        'Ask about snakes...',
        q1:             'Most dangerous snake',
        q2:             'Snake bite first aid',
        q3:             'Venomous vs non-venomous',
        q1_ask:         'What is the most dangerous snake in Thailand?',
        q2_ask:         'What should I do immediately after a snake bite?',
        q3_ask:         'How can I tell a venomous snake from a non-venomous one?',
        // result cards
        venomous_badge: 'VENOMOUS',
        safe_badge:     'NON-VENOMOUS',
        confidence_lbl: 'Confidence',
        family_lbl:     'Family',
        size_lbl:       'Size',
        habitat_lbl:    'Habitat',
        region_lbl:     'Region (Thailand)',
        venom_lbl:      'Venom Type',
        danger_lbl:     'Danger Level',
        firstaid_lbl:   'First Aid',
        tips_lbl:       'Tips',
        share_btn:      'Share Card',
        map_btn:        'Distribution Map',
        no_result:      'No snake detected in image, or confidence too low.<br>Try a clearer or closer photo.',
        hist_clear:     '🗑 Clear History',
        hist_confirm:   'Clear all scan history?',
        detection_lbl:  'Detection',
        species_lbl:    'Species Detected',
        analysis_ok:    '● ANALYSIS COMPLETE',
    }
};

let currentLang = 'th';

function i18n(key) {
    return STRINGS[currentLang][key] || STRINGS['th'][key] || key;
}

function setLang(lang) {
    currentLang = lang;

    // Update toggle buttons
    document.getElementById('btn-th').classList.toggle('active', lang === 'th');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Update all static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = i18n(key);
        if (val) el.innerHTML = val;
    });

    // Update placeholder inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = i18n(key);
        if (val) el.placeholder = val;
    });

    // Re-render dynamic pages if visible
    const histPage = document.getElementById('page-history');
    if (histPage && histPage.classList.contains('active')) renderHistory();

    const encPage = document.getElementById('page-encyclopedia');
    if (encPage && encPage.classList.contains('active')) {
        document.getElementById('encGrid').innerHTML = '';
        renderEncyclopedia();
    }
}

// ─── SNAKE DATABASE ───────────────────────────────────────────────────────────
const SNAKE_DB = {
    "Banded_krait": { th:"งูทับสมิงคลา", family:"Elapidae", size:"1.5–2.1 ม.", habitat:"ป่า, ทุ่งนา, ริมน้ำ", region:"ทั่วไทย", venomous:true, venom_type:"Neurotoxin", danger_level:"อันตรายมาก ☠️", description:"งูทับสมิงคลามีลายปล้องขาว-ดำสลับกัน ชอบออกหากินกลางคืน พิษเป็นสารพิษต่อระบบประสาทรุนแรง หากถูกกัดอาการอาจไม่แสดงทันทีแต่เป็นอันตรายถึงชีวิต", first_aid:["อย่าตื่นตกใจ นอนนิ่งๆ ลดการเคลื่อนไหว","ตรึงอวัยวะที่ถูกกัดให้อยู่ระดับต่ำกว่าหัวใจ","รีบไปโรงพยาบาลทันที ต้องการ Polyvalent Antivenom","ห้ามดูดพิษ กรีดแผล หรือใช้สมุนไพร"] },
    "Burmese_python": { th:"งูหลามพม่า", family:"Pythonidae", size:"3–5+ ม.", habitat:"ป่าดิบ, พื้นที่ชุ่มน้ำ", region:"ภาคเหนือ-ตะวันตก", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ (บีบรัด)", description:"งูหลามพม่าเป็นงูขนาดใหญ่ที่สุดชนิดหนึ่งในเอเชีย ไม่มีพิษแต่ใช้วิธีบีบรัดเหยื่อ งูที่มีขนาดใหญ่อาจเป็นอันตรายต่อมนุษย์ได้หากเข้าใกล้", first_aid:["ถอยออกห่างช้าๆ อย่าวิ่ง","หากถูกกัดให้ล้างแผลด้วยน้ำสะอาด","หากงูพันรอบร่างกายต้องให้ผู้อื่นช่วยถอด","ไปพบแพทย์เพื่อทำความสะอาดแผลและป้องกันการติดเชื้อ"] },
    "Common_sunbeam_snake": { th:"งูรุ้ง", family:"Xenopeltidae", size:"0.9–1.3 ม.", habitat:"ดิน, ใต้ซากพืช", region:"ทั่วไทย", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูรุ้งมีเกล็ดสีน้ำตาลเข้มที่สะท้อนแสงสีรุ้งได้อย่างสวยงาม ชอบขุดดินและหลบอยู่ใต้ซากพืช ไม่มีพิษและไม่ก้าวร้าว", first_aid:["ไม่มีพิษ ไม่อันตราย","ล้างแผลหากถูกกัด เนื่องจากฟันอาจทำให้ติดเชื้อได้","ไม่จำเป็นต้องรีบไปโรงพยาบาล แต่หากแผลลึกควรพบแพทย์"] },
    "Copperhead_racer": { th:"งูหัวทองแดง", family:"Colubridae", size:"1.0–1.6 ม.", habitat:"ป่า, ทุ่งหญ้า", region:"ภาคกลาง-เหนือ", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูหัวทองแดงเป็นงูที่เคลื่อนที่เร็ว หัวมีสีทองแดงโดดเด่น ไม่มีพิษ ช่วยควบคุมประชากรหนูและสัตว์ฟันแทะ", first_aid:["ไม่มีพิษ แต่กัดเจ็บได้","ล้างแผลด้วยน้ำสะอาดและสบู่","ทำความสะอาดและปิดแผล หากแดงบวมควรพบแพทย์"] },
    "Golden_tree_snake": { th:"งูเขียวหางไหม้ต้นไม้ทอง", family:"Colubridae", size:"1.0–1.5 ม.", habitat:"ต้นไม้, พุ่มไม้", region:"ทั่วไทย", venomous:false, venom_type:"Mild rear-fang", danger_level:"อ่อนๆ 🟡", description:"งูสวยงามที่มีความสามารถร่อนจากต้นไม้ได้ มีสีเขียวสดหรือดำมีจุดสีเหลือง มีพิษเล็กน้อยที่ฟันหลัง แต่ไม่อันตรายต่อมนุษย์", first_aid:["พิษอ่อนมาก ไม่อันตรายต่อมนุษย์ส่วนใหญ่","ล้างแผลทำความสะอาด","สังเกตอาการบวมแดง หากมีอาการผิดปกติให้พบแพทย์"] },
    "Indochinese_rat_snake": { th:"งูสิง (อินโดจีน)", family:"Colubridae", size:"1.5–2.5 ม.", habitat:"ทุ่งนา, สวน, บ้านเรือน", region:"ทั่วไทย", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูสิงอินโดจีนเป็นงูที่มีประโยชน์มาก ช่วยกำจัดหนูในบ้านและนา มีนิสัยก้าวร้าวเมื่อตกใจแต่ไม่มีพิษ", first_aid:["ไม่มีพิษ แต่กัดเจ็บและแผลมีเลือดออก","ล้างแผลและทำความสะอาด","หยุดเลือดและปิดแผล ไม่จำเป็นต้องรีบไปโรงพยาบาล"] },
    "Javan_wart_snake": { th:"งูน้ำผิวหยาบ", family:"Acrochordidae", size:"0.6–1.2 ม.", habitat:"แม่น้ำ, ชายฝั่ง, ป่าโกงกาง", region:"ภาคใต้, ชายฝั่ง", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูน้ำที่มีเกล็ดหยาบคล้ายหินกรวด อาศัยในน้ำเกือบตลอดชีวิต ไม่มีพิษและไม่ก้าวร้าว หากินปลาและสัตว์น้ำ", first_aid:["ไม่มีพิษ ปลอดภัย","ล้างแผลหากถูกกัด","ไม่จำเป็นต้องพบแพทย์เว้นแต่แผลติดเชื้อ"] },
    "King_cobra": { th:"งูจงอาง", family:"Elapidae", size:"3–5.5 ม.", habitat:"ป่าดิบ, ป่าใกล้น้ำ", region:"ทั่วไทย (ป่า)", venomous:true, venom_type:"Neurotoxin (Cytotoxin)", danger_level:"อันตรายถึงชีวิต ☠️☠️", description:"งูจงอางเป็นงูพิษที่ยาวที่สุดในโลก มีพิษที่รุนแรงมากและปริมาณมาก สามารถฆ่าช้างได้ มักพบในป่าและมีพฤติกรรมก้าวร้าวเมื่อถูกคุกคาม", first_aid:["ฉุกเฉินสูงสุด! โทร 1669 ทันที","นอนนิ่งๆ อย่าเคลื่อนไหวโดยไม่จำเป็น","ตรึงแขน/ขาที่ถูกกัดด้วยเฝือกชั่วคราว","ต้องการ King Cobra Monovalent Antivenom เท่านั้น"] },
    "Laotian_wolf_snake": { th:"งูหมาป่าลาว", family:"Colubridae", size:"0.4–0.7 ม.", habitat:"ป่า, ซอกหิน, ใต้ท่อนไม้", region:"ภาคเหนือ-ตะวันออกเฉียงเหนือ", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูขนาดเล็ก มีลายขาวดำคล้ายงูทับสมิงคลา แต่ไม่มีพิษ ชอบหลบซ่อนตัวในที่มืดและชื้น หากินกิ้งก่าและตุ๊กแก", first_aid:["ไม่มีพิษ ปลอดภัยสำหรับมนุษย์","ล้างแผลทำความสะอาดหากถูกกัด","ไม่จำเป็นต้องรักษาพิเศษ"] },
    "Large_eyed_pit_viper": { th:"งูเขียวหางไหม้ตาโต", family:"Viperidae", size:"0.6–1.0 ม.", habitat:"ป่าเขา, พุ่มไม้สูง", region:"ภาคเหนือ", venomous:true, venom_type:"Hemotoxin", danger_level:"อันตราย ⚠️", description:"งูเขียวตาโตมีตาขนาดใหญ่โดดเด่น มีหลุมรับความร้อนระหว่างตาและรูจมูก พิษทำลายเม็ดเลือดและเนื้อเยื่อ แม้ไม่ค่อยฆ่าคนแต่อาจทำให้เนื้อตายได้", first_aid:["รีบไปโรงพยาบาลภายใน 2 ชั่วโมง","ตรึงอวัยวะที่ถูกกัด ห้ามรัดเชือก","จดจำลักษณะงูหรือถ่ายรูปจากระยะปลอดภัย","ต้องการ Green Pit Viper Antivenom"] },
    "Malayan_krait": { th:"งูสามเหลี่ยม", family:"Elapidae", size:"1.0–1.5 ม.", habitat:"บ้าน, สวน, ใกล้น้ำ", region:"ทั่วไทย", venomous:true, venom_type:"Neurotoxin", danger_level:"อันตรายมาก ☠️", description:"งูสามเหลี่ยมพบได้แม้ในบ้านเรือน มักเข้ามาตอนกลางคืน พิษประสาทที่รุนแรง อาการอาจไม่ชัดเจนช่วงแรกทำให้ผู้ถูกกัดมักไม่รู้ตัวว่าอันตราย", first_aid:["ฉุกเฉิน! โทร 1669 ทันที แม้ไม่เจ็บ","นอนนิ่ง ลดการเคลื่อนไหวให้มากที่สุด","ห้ามรัดเชือก ดูดพิษ หรือกรีดแผลเด็ดขาด","ต้องการ Polyvalent Antivenom ในโรงพยาบาล"] },
    "Malayan_pit_viper": { th:"งูกะปะ", family:"Viperidae", size:"0.6–1.0 ม.", habitat:"พื้นดิน, ใบไม้แห้ง, สวนยาง", region:"ภาคใต้, ภาคกลาง", venomous:true, venom_type:"Hemotoxin (Cytotoxin)", danger_level:"อันตรายสูง ☠️", description:"งูกะปะเป็นสาเหตุของการถูกงูกัดมากที่สุดในภาคใต้ ลำตัวสีน้ำตาลลายคล้ายใบไม้ ซ่อนตัวได้ดีมาก พิษทำลายเนื้อเยื่ออย่างรุนแรง", first_aid:["รีบไปโรงพยาบาลทันที","ตรึงอวัยวะ ห้ามเดิน ให้คนอื่นพยุงไป","จดเวลาที่ถูกกัดเพื่อแจ้งแพทย์","ต้องการ Malayan Pit Viper Antivenom"] },
    "Monocled_cobra": { th:"งูเห่า", family:"Elapidae", size:"1.2–2.0 ม.", habitat:"ทุ่งนา, บ้านเรือน, ป่า", region:"ทั่วไทย", venomous:true, venom_type:"Neurotoxin + Cytotoxin", danger_level:"อันตรายมาก ☠️☠️", description:"งูเห่าไทยที่พบบ่อยที่สุด มีวงกลมที่ด้านหลังหัวเหมือนแว่นตา สามารถพ่นพิษเข้าตาได้ในระยะ 2-3 เมตร พิษทั้งทำลายประสาทและเนื้อเยื่อ", first_aid:["หากพิษเข้าตา ล้างด้วยน้ำสะอาดทันทีนาน 15 นาที","โทร 1669 ฉุกเฉิน","นอนนิ่ง ไม่เคลื่อนไหวโดยไม่จำเป็น","ต้องการ Cobra Monovalent Antivenom"] },
    "Oriental_rat_snake": { th:"งูสิง", family:"Colubridae", size:"1.5–2.5 ม.", habitat:"บ้าน, สวน, ทุ่งนา", region:"ทั่วไทย", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูสิงเป็นงูที่พบบ่อยในบ้านและสวน เป็นประโยชน์มากในการกำจัดหนู มีนิสัยตื่นตกใจง่ายแต่ไม่มีพิษ", first_aid:["ไม่มีพิษ ไม่อันตราย","ล้างแผลหากถูกกัด งูกัดเจ็บแต่ปลอดภัย","ไม่จำเป็นต้องพบแพทย์เร่งด่วน"] },
    "Rainbow_mud_snake": { th:"งูดินรุ้ง", family:"Colubridae", size:"0.5–0.9 ม.", habitat:"ดิน, ใกล้แหล่งน้ำ", region:"ภาคใต้", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูดินรุ้งมีเกล็ดที่สะท้อนแสงเป็นประกาย อาศัยในดินชื้นและใกล้แหล่งน้ำ ขนาดเล็ก ไม่มีพิษ หากินไส้เดือนและสัตว์ขนาดเล็ก", first_aid:["ไม่มีพิษ ปลอดภัย","ล้างแผลหากถูกกัด","ไม่จำเป็นต้องรักษาพิเศษ"] },
    "Reticulated_python": { th:"งูหลามปัจจุบัน", family:"Pythonidae", size:"4–7+ ม.", habitat:"ป่าดิบ, ใกล้น้ำ, บางครั้งในเมือง", region:"ทั่วไทย", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ (บีบรัดได้อันตราย)", description:"งูที่ยาวที่สุดในโลก ลายตาข่ายสวยงาม ไม่มีพิษแต่บีบรัดเหยื่อด้วยกล้ามเนื้อที่แข็งแกร่ง งูขนาดใหญ่อาจเป็นอันตรายถึงชีวิตได้", first_aid:["ถอยออกห่างทันที","หากถูกงูพันตัว ต้องการผู้ช่วย 2-3 คน ถอดจากหางก่อน","โทรแจ้งเจ้าหน้าที่หรือนักจับงูมืออาชีพ","ล้างแผลที่ถูกกัดและพบแพทย์"] },
    "Siamese_red_necked_keelback": { th:"งูลายสอสยาม", family:"Natricidae", size:"0.6–1.0 ม.", habitat:"ใกล้น้ำ, ทุ่งนา, พื้นที่ชื้น", region:"ทั่วไทย", venomous:true, venom_type:"Mild Duvernoy venom", danger_level:"ระวัง ⚠️", description:"งูลายสอที่มีสีแดงที่คอโดดเด่น มีพิษเล็กน้อยจากต่อม Duvernoy ไม่ค่อยอันตรายต่อมนุษย์ แต่บางรายอาจมีอาการแพ้ได้", first_aid:["พิษอ่อน แต่ควรไปพบแพทย์เพื่อความปลอดภัย","ล้างแผลทำความสะอาด","สังเกตอาการบวมหรืออาการผิดปกติ 24 ชั่วโมง"] },
    "Siamese_Russell's_Viper": { th:"งูแมวเซา", family:"Viperidae", size:"1.2–1.7 ม.", habitat:"ทุ่งหญ้า, สวน, ทุ่งนา", region:"ภาคเหนือ-ตะวันออกเฉียงเหนือ", venomous:true, venom_type:"Hemotoxin + Neurotoxin", danger_level:"อันตรายถึงชีวิต ☠️☠️", description:"งูแมวเซาเป็นงูที่อันตรายที่สุดชนิดหนึ่ง มีพิษทั้งทำลายเลือดและระบบประสาท ส่งเสียงฟี้เมื่อตื่นตัว เป็นสาเหตุการตายจากงูกัดสูงมาก", first_aid:["ฉุกเฉินสูงสุด! โทร 1669 ทันที","นอนนิ่ง ห้ามเดิน","ถ่ายรูปงูจากระยะปลอดภัยเพื่อช่วยแพทย์","ต้องการ Russell's Viper Antivenom เท่านั้น"] },
    "Small_banded_kukri_snake": { th:"งูกุคริลายขวาง", family:"Colubridae", size:"0.4–0.7 ม.", habitat:"ดิน, ป่า, สวน", region:"ทั่วไทย", venomous:false, venom_type:"Mild", danger_level:"เล็กน้อย 🟡", description:"งูกุคริขนาดเล็กมีฟันคมเหมือนมีด เมื่อถูกคุกคามจะใช้หางยกขึ้นและปล่อยสารคัดหลั่งที่มีกลิ่นเหม็น ไม่มีพิษร้ายแรงแต่ฟันคมทำให้เลือดออกมาก", first_aid:["ล้างแผลทันทีด้วยน้ำและสบู่ แผลมีเลือดออกมาก","กดแผลให้หยุดเลือด","พบแพทย์เพื่อทำความสะอาดแผลอย่างละเอียด"] },
    "Small_spotted_coral_snake": { th:"งูปะการังจุดเล็ก", family:"Elapidae", size:"0.3–0.6 ม.", habitat:"ดิน, ใต้ซากพืช", region:"ภาคใต้", venomous:true, venom_type:"Neurotoxin", danger_level:"อันตราย ☠️", description:"งูปะการังขนาดเล็กสีสวย มีพิษต่อระบบประสาทที่รุนแรง แม้ขนาดเล็กแต่พิษร้ายแรง โชคดีที่หายากและไม่ค่อยพบ", first_aid:["รีบไปโรงพยาบาลแม้แผลเล็กมาก","นอนนิ่ง ตรึงอวัยวะ","แจ้งแพทย์ว่าเป็นงูปะการัง เพื่อเตรียม Antivenom ที่เหมาะสม"] },
    "Striped_kukri_snake": { th:"งูกุคริลาย", family:"Colubridae", size:"0.5–0.8 ม.", habitat:"ป่า, สวน, บริเวณบ้าน", region:"ทั่วไทย", venomous:false, venom_type:"Mild", danger_level:"เล็กน้อย 🟡", description:"งูกุคริลายพบได้ทั่วไป มีลายแถบตามยาว ฟันคมมากทำให้แผลมีเลือดออกมาก แต่ไม่มีพิษอันตราย", first_aid:["ล้างแผลและกดห้ามเลือด","แผลอาจมีเลือดออกนาน ให้กดนานๆ","ไปพบแพทย์หากเลือดไม่หยุด"] },
    "Western_mangrove_cat_snake": { th:"งูแมวป่าชายเลนตะวันตก", family:"Colubridae", size:"0.7–1.2 ม.", habitat:"ป่าโกงกาง, ชายฝั่ง", region:"ภาคใต้ฝั่งตะวันตก", venomous:true, venom_type:"Mild rear-fang", danger_level:"ระวัง ⚠️", description:"งูที่อาศัยในป่าชายเลน มีดวงตาขนาดใหญ่สำหรับล่าเหยื่อกลางคืน มีพิษเล็กน้อยที่ฟันหลัง ไม่ค่อยอันตรายต่อมนุษย์", first_aid:["พิษอ่อน ส่วนใหญ่ไม่มีอาการ","ล้างและทำความสะอาดแผล","สังเกตอาการ หากบวมมากให้พบแพทย์"] },
    "Yellow_spotted_keelback": { th:"งูลายสอจุดเหลือง", family:"Natricidae", size:"0.6–1.0 ม.", habitat:"ใกล้น้ำ, ทุ่งนา", region:"ทั่วไทย", venomous:false, venom_type:"-", danger_level:"ไม่มีพิษ 🟢", description:"งูลายสอที่มีจุดสีเหลืองสวยงาม อาศัยใกล้แหล่งน้ำ หากินกบและปลา ไม่มีพิษอันตราย เป็นงูที่มีประโยชน์ต่อระบบนิเวศ", first_aid:["ไม่มีพิษ ปลอดภัย","ล้างแผลหากถูกกัด","ไม่จำเป็นต้องรักษาพิเศษ"] }
};

// ─── PAGE NAVIGATION ──────────────────────────────────────────────────────────
function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.getElementById('tab-' + name).classList.add('active');
    if (name === 'encyclopedia') renderEncyclopedia();
    if (name === 'history') renderHistory();
}

// กด Back กลับหน้า upload
window.addEventListener('popstate', () => {
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('uploadSection').style.display = 'block';
});

// ─── SCAN PAGE ────────────────────────────────────────────────────────────────
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const previewThumb = document.getElementById('previewThumb');
let selectedFile = null;

uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
});
imageInput.addEventListener('change', () => { if (imageInput.files[0]) setFile(imageInput.files[0]); });

// ── Ctrl+V paste anywhere on page ──
document.addEventListener('paste', e => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) { setFile(file); break; }
        }
    }
});

function setFile(file) {
    selectedFile = file;
    analyzeBtn.disabled = false;

    // Show preview with delete button
    const existing = document.getElementById('previewWrapper');
    if (existing) existing.remove();

    const wrapper = document.createElement('div');
    wrapper.id = 'previewWrapper';
    wrapper.style.cssText = 'position:relative;display:inline-block;margin-top:16px;';

    const thumb = document.getElementById('previewThumb');
    thumb.src = URL.createObjectURL(file);
    thumb.style.display = 'block';

    // Delete (×) button
    const del = document.createElement('button');
    del.innerHTML = '✕';
    del.title = 'ลบรูป';
    del.style.cssText = `
        position:absolute;top:-8px;right:-8px;
        width:24px;height:24px;border-radius:50%;
        background:#ef4444;border:2px solid #080c0a;
        color:#fff;font-size:12px;font-weight:700;
        cursor:pointer;line-height:1;
        display:flex;align-items:center;justify-content:center;
        transition:transform 0.15s,background 0.15s;
        z-index:10;
    `;
    del.onmouseenter = () => { del.style.transform = 'scale(1.15)'; del.style.background = '#b91c1c'; };
    del.onmouseleave = () => { del.style.transform = 'scale(1)'; del.style.background = '#ef4444'; };
    del.onclick = e => { e.stopPropagation(); clearFile(); };

    // Wrap the thumb inside wrapper, insert before thumb
    thumb.parentNode.insertBefore(wrapper, thumb);
    wrapper.appendChild(thumb);
    wrapper.appendChild(del);

    // Update upload area hint
    const hint = document.querySelector('.upload-text-sub');
    if (hint) hint.textContent = file.name + ' · ' + (file.size/1024).toFixed(1) + ' KB';
}

function clearFile() {
    selectedFile = null;
    analyzeBtn.disabled = true;
    const thumb = document.getElementById('previewThumb');
    thumb.style.display = 'none';
    thumb.src = '';
    imageInput.value = '';
    const wrapper = document.getElementById('previewWrapper');
    if (wrapper) {
        // Move thumb back out before removing wrapper
        wrapper.parentNode.insertBefore(thumb, wrapper);
        wrapper.remove();
    }
    const hint = document.querySelector('.upload-text-sub');
    if (hint) hint.textContent = 'รองรับ JPG, PNG, WEBP — ความละเอียดสูงให้ผลแม่นยำกว่า';
}

async function analyze() {
    if (!selectedFile) return;
    analyzeBtn.disabled = true;
    document.getElementById('loading').classList.add('active');

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
        const response = await fetch('/api/predict', { method: 'POST', body: formData });
        const data = await response.json();
        renderResults(data.predictions, selectedFile);
    } catch (err) {
        console.error(err);
        alert("ไม่สามารถเชื่อมต่อกับ AI Server ได้ กรุณาลองใหม่อีกครั้ง");
    } finally {
        document.getElementById('loading').classList.remove('active');
        analyzeBtn.disabled = false;
    }
}

function renderResults(predictions, file) {
    document.getElementById('uploadSection').style.display = 'none';
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    // Push history so Back button returns to upload screen
    history.pushState({ view: 'result' }, '');

    const now = new Date();
    document.getElementById('resultCount').textContent = predictions.length;
    document.getElementById('scanInfo').innerHTML = `
        <div>FILE: ${file.name}</div>
        <div>SIZE: ${(file.size/1024).toFixed(1)} KB</div>
        <div>DETECTIONS: ${predictions.length}</div>
        <div style="margin-top:4px;color:#22c55e">${i18n('analysis_ok')}</div>
    `;

    // Save to history
    if (predictions.length > 0) {
        addToHistory(predictions, file, now);
    }

    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    if (predictions.length === 0) {
        container.innerHTML = `<div class="no-result"><div class="no-result-icon">🔍</div><div class="no-result-text">${i18n('no_result')}</div></div>`;
        return;
    }

    predictions.forEach((p, idx) => {
        const info = SNAKE_DB[p.label] || { th:p.label.replace(/_/g,' '), family:'-', size:'-', habitat:'-', region:'-', venomous:p.is_venomous, venom_type:p.is_venomous?'Unknown':'-', danger_level:p.is_venomous?'อันตราย':'ไม่มีพิษ', description:'ไม่มีข้อมูลเพิ่มเติม', first_aid:['รีบไปพบแพทย์หากถูกกัดโดยไม่แน่ใจ'] };
        const pct = (p.confidence * 100).toFixed(1);

        const card = document.createElement('div');
        card.className = `snake-card ${info.venomous ? 'venomous' : 'safe'}`;
        card.style.animationDelay = `${idx*0.15}s`;
        card.innerHTML = `
            <div class="info-panel">
                <div class="danger-badge ${info.venomous?'venomous':'safe'}">
                    <span class="dot"></span>
                    ${info.venomous ? i18n('venomous_badge') : i18n('safe_badge')}
                </div>
                <div>
                    <div class="snake-name-en">${p.label.replace(/_/g,' ')}</div>
                    <div class="snake-name-th">${info.th}</div>
                </div>
                <div>
                    <div class="confidence-label">
                        <span>Confidence</span>
                        <span style="color:${info.venomous?'#f87171':'#4ade80'}">${pct}%</span>
                    </div>
                    <div class="confidence-bar"><div class="confidence-fill" data-width="${pct}"></div></div>
                </div>
                <hr class="divider">
                <div class="info-grid">
                    <div class="info-item"><div class="info-item-label">${i18n('family_lbl')}</div><div class="info-item-value">${info.family}</div></div>
                    <div class="info-item"><div class="info-item-label">${i18n('size_lbl')}</div><div class="info-item-value">${info.size}</div></div>
                    <div class="info-item"><div class="info-item-label">${i18n('habitat_lbl')}</div><div class="info-item-value">${info.habitat}</div></div>
                    <div class="info-item"><div class="info-item-label">${i18n('region_lbl')}</div><div class="info-item-value">${info.region}</div></div>
                    <div class="info-item"><div class="info-item-label">${i18n('venom_lbl')}</div><div class="info-item-value">${info.venom_type}</div></div>
                    <div class="info-item"><div class="info-item-label">${i18n('danger_lbl')}</div><div class="info-item-value">${info.danger_level}</div></div>
                </div>
                <p class="snake-description">${info.description}</p>
                <div class="first-aid-box ${info.venomous?'':'safe-box'}">
                    <div class="first-aid-title">${info.venomous ? `<i class="ph ph-siren"></i> ${i18n('firstaid_lbl')}` : `<i class="ph ph-check-circle"></i> ${i18n('tips_lbl')}`}</div>
                    <ul class="first-aid-list">${info.first_aid.map(s=>`<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="card-action-row">
                    <button class="btn-card-action" onclick="openShareCard('${p.label}',${idx})"><i class="ph ph-share-network"></i> ${i18n('share_btn')}</button>
                    <button class="btn-card-action" onclick="openMap('${p.label}')"><i class="ph ph-map-pin"></i> ${i18n('map_btn')}</button>
                </div>
            </div>
            <div class="image-panel">
                <div class="canvas-wrapper"><canvas id="canvas-${idx}"></canvas></div>
                <div class="detection-tag">${i18n('detection_lbl')} #${idx+1} · ${pct}%</div>
            </div>
        `;
        container.appendChild(card);
        drawDetection(card.querySelector(`#canvas-${idx}`), file, p);
    });

    setTimeout(() => {
        document.querySelectorAll('.confidence-fill').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
        
    }, 100);
}

function drawDetection(canvas, file, prediction) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const [x1,y1,x2,y2] = prediction.box;
        const color = prediction.is_venomous ? '#ef4444' : '#22c55e';
        const glow = prediction.is_venomous ? 'rgba(239,68,68,0.4)' : 'rgba(34,197,94,0.4)';
        ctx.shadowBlur = 20; ctx.shadowColor = glow;
        ctx.lineWidth = Math.max(3, img.width*0.004); ctx.strokeStyle = color;
        ctx.strokeRect(x1,y1,x2-x1,y2-y1);
        ctx.shadowBlur = 0;
        const cLen = Math.min(30,(x2-x1)*0.15);
        ctx.lineWidth = Math.max(5,img.width*0.007);
        drawCorner(ctx,x1,y1,cLen,cLen,color); drawCorner(ctx,x2,y1,-cLen,cLen,color);
        drawCorner(ctx,x1,y2,cLen,-cLen,color); drawCorner(ctx,x2,y2,-cLen,-cLen,color);
        const label = `${prediction.label.replace(/_/g,' ')} ${(prediction.confidence*100).toFixed(1)}%`;
        const fontSize = Math.max(16,img.width*0.025);
        ctx.font = `bold ${fontSize}px DM Sans, sans-serif`;
        const tw = ctx.measureText(label).width;
        const lh = fontSize*1.4;
        const lx = x1, ly = y1>lh+10?y1-lh-4:y2+4;
        ctx.fillStyle = color;
        ctx.beginPath(); ctx.roundRect(lx,ly,tw+20,lh,6); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.fillText(label,lx+10,ly+lh*0.75);
    };
}

function drawCorner(ctx,x,y,dx,dy,color) {
    ctx.strokeStyle = color; ctx.beginPath();
    ctx.moveTo(x+dx,y); ctx.lineTo(x,y); ctx.lineTo(x,y+dy); ctx.stroke();
}

function resetPage() {
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('uploadSection').style.display = 'block';
    document.getElementById('cardsContainer').innerHTML = '';
    clearFile();
}

// ─── HISTORY ──────────────────────────────────────────────────────────────────
let scanHistory = [];

function addToHistory(predictions, file, timestamp) {
    const thumbURL = URL.createObjectURL(file);
    const entry = { id: Date.now(), predictions, filename: file.name, size: file.size, timestamp, thumbURL };
    scanHistory.unshift(entry);
    updateHistoryBadge();
}

function updateHistoryBadge() {
    const badge = document.getElementById('historyBadge');
    if (scanHistory.length > 0) {
        badge.textContent = scanHistory.length;
        badge.style.display = 'inline';
    } else {
        badge.style.display = 'none';
    }
}

function renderHistory() {
    const container = document.getElementById('historyContent');
    if (scanHistory.length === 0) {
        container.innerHTML = `<div class="history-empty"><div class="history-empty-icon">🕒</div><div class="history-empty-text">ยังไม่มีประวัติการสแกน<br>ไปวิเคราะห์รูปภาพก่อนเลย!</div></div>`;
        return;
    }
    const timeStr = t => {
        const d = new Date(t);
        return d.toLocaleDateString('th-TH') + ' ' + d.toLocaleTimeString('th-TH', {hour:'2-digit',minute:'2-digit'});
    };
    container.innerHTML = `
        <button class="history-clear-btn" onclick="clearHistory()">🗑 ล้างประวัติ</button>
        <div class="history-grid">
            ${scanHistory.map(entry => entry.predictions.map(p => {
                const info = SNAKE_DB[p.label] || { th: p.label, venomous: p.is_venomous };
                const pct = (p.confidence*100).toFixed(1);
                return `
                    <div class="history-card ${info.venomous?'venomous':'safe'}" onclick="showPage('scan')">
                        <div class="history-card-stripe"></div>
                        <div class="history-thumb">
                            <img src="${entry.thumbURL}" alt="${p.label}" onerror="this.parentElement.innerHTML='🐍'">
                        </div>
                        <div class="history-card-body">
                            <div class="history-card-name">${p.label.replace(/_/g,' ')}</div>
                            <div class="history-card-th">${info.th}</div>
                            <div class="history-card-meta">
                                <span class="history-badge ${info.venomous?'venomous':'safe'}">${info.venomous?'มีพิษ':'ปลอดภัย'}</span>
                                <span class="history-confidence">${pct}%</span>
                            </div>
                            <div class="history-time">${timeStr(entry.timestamp)} · ${entry.filename}</div>
                        </div>
                    </div>
                `;
            }).join('')).join('')}
        </div>
    `;
}

function clearHistory() {
    if (confirm(i18n('hist_confirm'))) {
        scanHistory = [];
        updateHistoryBadge();
        renderHistory();
    }
}

// ─── ENCYCLOPEDIA ─────────────────────────────────────────────────────────────
let encFilter = 'all';

function setEncFilter(f) {
    encFilter = f;
    document.querySelectorAll('.enc-filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('enc-' + f).classList.add('active', f);
    filterEnc();
}

function filterEnc() {
    const q = document.getElementById('encSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.enc-card');
    let visible = 0;
    cards.forEach(card => {
        const v = card.dataset.venomous === 'true';
        const text = card.dataset.search;
        const matchFilter = encFilter === 'all' || (encFilter === 'venomous' && v) || (encFilter === 'safe' && !v);
        const matchSearch = !q || text.includes(q);
        const show = matchFilter && matchSearch;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });
    document.getElementById('encCount').textContent = `${visible} species`;
}

function renderEncyclopedia() {
    const grid = document.getElementById('encGrid');
    if (grid.children.length > 0) return; // already rendered

    Object.entries(SNAKE_DB).forEach(([key, info]) => {
        const card = document.createElement('div');
        card.className = `enc-card ${info.venomous ? 'venomous' : 'safe'}`;
        card.dataset.venomous = info.venomous;
        card.dataset.search = `${key} ${info.th} ${info.family} ${info.habitat} ${info.region} ${info.description}`.toLowerCase();
        card.onclick = () => openModal(key, info);
        card.innerHTML = `
            <div class="enc-card-header">
                <div>
                    <div class="enc-name-en">${key.replace(/_/g,' ')}</div>
                    <div class="enc-name-th">${info.th}</div>
                </div>
                <div class="enc-venom-icon">${info.venomous ? '<i class="ph ph-skull" style="color:#f87171;font-size:22px"></i>' : '<i class="ph ph-shield-check" style="color:#4ade80;font-size:22px"></i>'}</div>
            </div>
            <div class="enc-family">${info.family}</div>
            <div class="enc-tags">
                <span class="enc-tag">📍 ${info.region}</span>
                <span class="enc-tag">📏 ${info.size}</span>
            </div>
            <div class="enc-desc">${info.description}</div>
            <div class="enc-danger">${info.danger_level}</div>
        `;
        grid.appendChild(card);
    });
    
}

function openModal(key, info) {
    const header = document.getElementById('encModalHeader');
    const body = document.getElementById('encModalBody');
    header.innerHTML = `
        <div>
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;font-family:'Space Mono',monospace">${info.family}</div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:1px">${key.replace(/_/g,' ')}</div>
            <div style="font-size:16px;color:var(--text-muted);font-weight:300">${info.th}</div>
        </div>
        <button class="modal-close" onclick="closeModal()">✕</button>
    `;
    body.innerHTML = `
        <div class="danger-badge ${info.venomous?'venomous':'safe'}" style="margin-bottom:0">
            <span class="dot"></span>
            ${info.venomous?'มีพิษ · VENOMOUS':'ไม่มีพิษ · NON-VENOMOUS'}
        </div>
        <p class="snake-description" style="font-size:15px">${info.description}</p>
        <div class="modal-info-grid">
            <div class="info-item"><div class="info-item-label">${i18n('size_lbl')}</div><div class="info-item-value">${info.size}</div></div>
            <div class="info-item"><div class="info-item-label">${i18n('habitat_lbl')}</div><div class="info-item-value">${info.habitat}</div></div>
            <div class="info-item"><div class="info-item-label">${i18n('region_lbl')}</div><div class="info-item-value">${info.region}</div></div>
            <div class="info-item"><div class="info-item-label">${i18n('venom_lbl')}</div><div class="info-item-value">${info.venom_type}</div></div>
            <div class="info-item"><div class="info-item-label">${i18n('danger_lbl')}</div><div class="info-item-value">${info.danger_level}</div></div>
        </div>
        <div class="first-aid-box ${info.venomous?'':'safe-box'}">
            <div class="first-aid-title">${info.venomous ? `<i class="ph ph-siren"></i> ${i18n('firstaid_lbl')}` : `<i class="ph ph-check-circle"></i> ${i18n('tips_lbl')}`}</div>
            <ul class="first-aid-list">${info.first_aid.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
    `;
    document.getElementById('encModal').classList.add('active');
    
}

function closeModal(e) {
    if (!e || e.target === document.getElementById('encModal')) {
        document.getElementById('encModal').classList.remove('active');
    }
}

// ─── CLAUDE AI CHAT ───────────────────────────────────────────────────────────
let chatCollapsed = false;
let chatLoading = false;
const chatMessages = [];

function toggleChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.classList.contains('minimized')) {
        expandChat();
        return;
    }
    chatCollapsed = !chatCollapsed;
    popup.classList.toggle('collapsed', chatCollapsed);
    document.getElementById('chatToggle').style.transform = chatCollapsed ? 'rotate(180deg)' : '';
}

function minimizeChat() {
    const popup = document.getElementById('chatPopup');
    popup.classList.remove('collapsed');
    popup.classList.add('minimized');
    chatCollapsed = false;
}

function expandChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.classList.contains('minimized')) {
        popup.classList.remove('minimized');
        // Hide unread dot when opening
        document.getElementById('chatUnreadDot').style.display = 'none';
    }
}

function quickAsk(q) {
    document.getElementById('chatInput').value = q;
    sendChat();
}

function addChatMsg(text, isBot) {
    const msgs = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `chat-msg ${isBot ? 'bot' : 'user'}`;
    div.innerHTML = isBot
        ? `<div class="chat-avatar"><i class="ph ph-robot" style="color:#22c55e"></i></div><div class="chat-bubble">${text}</div>`
        : `<div class="chat-bubble">${escapeHtml(text)}</div><div class="chat-avatar"><i class="ph ph-user" style="color:var(--text-muted)"></i></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    
    if (isBot) chatMessages.push({ role: 'assistant', content: text });
    else chatMessages.push({ role: 'user', content: text });

    // Show unread dot if minimized and bot sends a message
    if (isBot && document.getElementById('chatPopup').classList.contains('minimized')) {
        document.getElementById('chatUnreadDot').style.display = 'flex';
    }
}

function addTyping() {
    const msgs = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'chat-msg bot'; div.id = 'typingIndicator';
    div.innerHTML = `<div class="chat-avatar"><i class="ph ph-robot" style="color:#22c55e"></i></div><div class="chat-bubble"><div class="chat-typing"><div class="chat-dot"></div><div class="chat-dot"></div><div class="chat-dot"></div></div></div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    
}

function removeTyping() {
    const t = document.getElementById('typingIndicator');
    if (t) t.remove();
}

function escapeHtml(t) {
    const d = document.createElement('div'); d.textContent = t; return d.innerHTML;
}

async function sendChat() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg || chatLoading) return;

    input.value = '';
    chatLoading = true;
    document.getElementById('chatSend').disabled = true;
    document.getElementById('quickQuestions').style.display = 'none';

    addChatMsg(msg, false);
    addTyping();

    // Build system prompt with snake DB context
    const snakeNames = Object.entries(SNAKE_DB).map(([k,v]) => `${k.replace(/_/g,' ')} (${v.th}) - ${v.venomous?'มีพิษ':'ไม่มีพิษ'}`).join(', ');
    const systemPrompt = `คุณคือผู้เชี่ยวชาญด้านงูในประเทศไทย ชื่อว่า "Serpent.AI Expert" มีความรู้เชี่ยวชาญเกี่ยวกับงูทุกชนิดในไทย โดยเฉพาะ 23 ชนิดนี้: ${snakeNames}

กฎการตอบ:
- ตอบเป็นภาษาไทย ใช้ภาษากระชับ เข้าใจง่าย
- ถ้าถูกกัดโดยงูมีพิษ ให้เน้นการโทร 1669 ก่อนเสมอ
- ให้ข้อมูลที่ถูกต้องและปลอดภัย ไม่แนะนำวิธีอันตรายเช่น การดูดพิษหรือกรีดแผล
- ตอบสั้น กระชับ 2-4 ประโยค เว้นแต่จะต้องการข้อมูลละเอียด
- ใส่ emoji ให้เหมาะสมเพื่อความเป็นมิตร`;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msg })
        });

        removeTyping();

        if (response.ok) {
            const data = await response.json();
            const reply = data.reply || 'ขออภัย ไม่สามารถตอบได้ในขณะนี้';
            addChatMsg(reply, true);
        } else {
            addChatMsg('ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', true);
        }
    } catch (err) {
        removeTyping();
        addChatMsg('⚠️ ไม่สามารถเชื่อมต่อได้ — กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต', true);
    } finally {
        chatLoading = false;
        document.getElementById('chatSend').disabled = false;
        input.focus();
    }
}

// ─── CAMERA ───────────────────────────────────────────────────────────────────
let cameraStream = null;
let facingMode = 'environment';
let lastPredictions = [];

async function openCamera() {
    document.getElementById('cameraModal').classList.add('active');
    document.getElementById('cameraVideoWrap').classList.remove('camera-scanning');
    await startCamera();
}

async function startCamera() {
    const status = document.getElementById('cameraStatus');
    const captureBtn = document.getElementById('captureBtn');
    try {
        if (cameraStream) cameraStream.getTracks().forEach(t => t.stop());
        status.textContent = i18n('cam_status');
        captureBtn.disabled = true;
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        const video = document.getElementById('cameraVideo');
        video.srcObject = cameraStream;
        await new Promise(r => video.onloadedmetadata = r);
        document.getElementById('cameraVideoWrap').classList.add('camera-scanning');
        status.textContent = 'กล้องพร้อมแล้ว — เล็งไปที่งูแล้วกด "ถ่ายภาพ"';
        captureBtn.disabled = false;
    } catch (err) {
        status.textContent = '❌ ไม่สามารถเข้าถึงกล้องได้ — ' + (err.message || 'Permission denied');
        captureBtn.disabled = true;
    }
}

async function switchCamera() {
    facingMode = facingMode === 'environment' ? 'user' : 'environment';
    await startCamera();
}

function captureFrame() {
    const video = document.getElementById('cameraVideo');
    const snap = document.getElementById('cameraSnap');
    snap.width = video.videoWidth; snap.height = video.videoHeight;
    snap.getContext('2d').drawImage(video, 0, 0);
    snap.toBlob(async blob => {
        closeCamera();
        const file = new File([blob], `camera_snap_${Date.now()}.jpg`, { type: 'image/jpeg' });
        setFile(file);
        // Auto-analyze
        setTimeout(() => analyze(), 200);
    }, 'image/jpeg', 0.9);
}

function closeCamera() {
    if (cameraStream) { cameraStream.getTracks().forEach(t => t.stop()); cameraStream = null; }
    document.getElementById('cameraModal').classList.remove('active');
    document.getElementById('cameraVideoWrap').classList.remove('camera-scanning');
}

// ─── MAP ──────────────────────────────────────────────────────────────────────
// Region distribution data per snake (which regions they're found in)
const SNAKE_REGIONS = {
    "Banded_krait":               { north:2, northeast:1, central:2, east:1, west:1, south_upper:1, south_lower:0, deep_south:0 },
    "Burmese_python":             { north:3, northeast:0, central:1, east:0, west:2, south_upper:0, south_lower:0, deep_south:0 },
    "Common_sunbeam_snake":       { north:2, northeast:2, central:3, east:2, west:2, south_upper:3, south_lower:2, deep_south:1 },
    "Copperhead_racer":           { north:3, northeast:2, central:3, east:1, west:2, south_upper:1, south_lower:0, deep_south:0 },
    "Golden_tree_snake":          { north:2, northeast:2, central:3, east:2, west:2, south_upper:3, south_lower:3, deep_south:2 },
    "Indochinese_rat_snake":      { north:3, northeast:3, central:3, east:2, west:2, south_upper:2, south_lower:1, deep_south:0 },
    "Javan_wart_snake":           { north:0, northeast:0, central:1, east:2, west:1, south_upper:3, south_lower:3, deep_south:3 },
    "King_cobra":                 { north:3, northeast:1, central:2, east:1, west:3, south_upper:3, south_lower:2, deep_south:1 },
    "Laotian_wolf_snake":         { north:3, northeast:3, central:1, east:0, west:0, south_upper:0, south_lower:0, deep_south:0 },
    "Large_eyed_pit_viper":       { north:3, northeast:0, central:0, east:0, west:1, south_upper:0, south_lower:0, deep_south:0 },
    "Malayan_krait":              { north:2, northeast:2, central:3, east:2, west:2, south_upper:3, south_lower:2, deep_south:1 },
    "Malayan_pit_viper":          { north:0, northeast:1, central:3, east:2, west:1, south_upper:3, south_lower:3, deep_south:2 },
    "Monocled_cobra":             { north:3, northeast:3, central:3, east:3, west:3, south_upper:3, south_lower:2, deep_south:1 },
    "Oriental_rat_snake":         { north:3, northeast:3, central:3, east:3, west:3, south_upper:3, south_lower:3, deep_south:2 },
    "Rainbow_mud_snake":          { north:0, northeast:0, central:0, east:0, west:0, south_upper:2, south_lower:3, deep_south:3 },
    "Reticulated_python":         { north:2, northeast:1, central:2, east:2, west:2, south_upper:3, south_lower:3, deep_south:3 },
    "Siamese_red_necked_keelback":{ north:2, northeast:3, central:3, east:2, west:2, south_upper:2, south_lower:1, deep_south:0 },
    "Siamese_Russell's_Viper":    { north:3, northeast:3, central:1, east:0, west:1, south_upper:0, south_lower:0, deep_south:0 },
    "Small_banded_kukri_snake":   { north:2, northeast:2, central:3, east:2, west:2, south_upper:2, south_lower:1, deep_south:0 },
    "Small_spotted_coral_snake":  { north:0, northeast:0, central:0, east:0, west:0, south_upper:2, south_lower:3, deep_south:3 },
    "Striped_kukri_snake":        { north:2, northeast:2, central:3, east:2, west:2, south_upper:2, south_lower:2, deep_south:1 },
    "Western_mangrove_cat_snake": { north:0, northeast:0, central:0, east:0, west:3, south_upper:2, south_lower:1, deep_south:1 },
    "Yellow_spotted_keelback":    { north:2, northeast:3, central:3, east:2, west:2, south_upper:2, south_lower:1, deep_south:0 }
};

const REGION_IDS = {
    north: 'reg-north', northeast: 'reg-northeast', central: 'reg-central',
    east: 'reg-east', west: 'reg-west', south_upper: 'reg-south-upper',
    south_lower: 'reg-south-lower', deep_south: 'reg-deep-south'
};

function openMap(label) {
    const info = SNAKE_DB[label];
    if (!info) return;
    document.getElementById('mapSnakeName').textContent = label.replace(/_/g,' ');
    document.getElementById('mapSnakeTh').textContent = info.th;

    // Reset all regions
    Object.values(REGION_IDS).forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.className = 'region-path'; el.removeAttribute('style'); }
    });

    const dist = SNAKE_REGIONS[label] || {};
    const isVenomous = info.venomous;

    Object.entries(REGION_IDS).forEach(([key, id]) => {
        const level = dist[key] || 0;
        const el = document.getElementById(id);
        if (!el) return;
        if (level === 3) {
            el.style.fill = isVenomous ? '#3d1515' : '#1e4d2a';
            el.style.stroke = isVenomous ? '#ef4444' : '#22c55e';
            el.style.strokeWidth = '1.5px';
        } else if (level === 2) {
            el.style.fill = isVenomous ? '#2a1010' : '#183d20';
            el.style.stroke = isVenomous ? '#f97316' : '#f59e0b';
        } else if (level === 1) {
            el.style.fill = '#1e2e1a';
            el.style.stroke = '#4a6050';
        }
    });

    document.getElementById('mapModal').classList.add('active');
}

function closeMap(e) {
    if (!e || e.target === document.getElementById('mapModal')) {
        document.getElementById('mapModal').classList.remove('active');
    }
}

// ─── SHARE CARD ───────────────────────────────────────────────────────────────
let shareCardData = null;

function openShareCard(label, canvasIdx) {
    const info = SNAKE_DB[label];
    if (!info) return;
    const sourceCanvas = document.getElementById(`canvas-${canvasIdx}`);
    const shareCanvas = document.getElementById('shareCanvas');

    // Card dimensions
    const W = 480, H = 640;
    shareCanvas.width = W; shareCanvas.height = H;
    const ctx = shareCanvas.getContext('2d');

    const isVenom = info.venomous;
    const accent = isVenom ? '#ef4444' : '#22c55e';
    const accentDark = isVenom ? '#7f1d1d' : '#14532d';

    // Background
    ctx.fillStyle = '#080c0a';
    ctx.fillRect(0, 0, W, H);

    // Gradient overlay
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, isVenom ? 'rgba(239,68,68,0.08)' : 'rgba(34,197,94,0.06)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Top accent bar
    const barGrad = ctx.createLinearGradient(0, 0, W, 0);
    barGrad.addColorStop(0, accent);
    barGrad.addColorStop(1, isVenom ? '#f97316' : '#3b82f6');
    ctx.fillStyle = barGrad;
    ctx.fillRect(0, 0, W, 4);

    // Snake image (if available)
    if (sourceCanvas && sourceCanvas.width > 0) {
        const imgH = 260;
        const imgW = W;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 4, imgW, imgH);
        ctx.clip();
        // Draw image centered/cropped
        const srcAR = sourceCanvas.width / sourceCanvas.height;
        const dstAR = imgW / imgH;
        let sx=0, sy=0, sw=sourceCanvas.width, sh=sourceCanvas.height;
        if (srcAR > dstAR) { sw = sourceCanvas.height * dstAR; sx = (sourceCanvas.width - sw) / 2; }
        else { sh = sourceCanvas.width / dstAR; sy = (sourceCanvas.height - sh) / 2; }
        ctx.drawImage(sourceCanvas, sx, sy, sw, sh, 0, 4, imgW, imgH);
        // Gradient fade at bottom of image
        const fadeGrad = ctx.createLinearGradient(0, 4+imgH-80, 0, 4+imgH);
        fadeGrad.addColorStop(0, 'rgba(8,12,10,0)');
        fadeGrad.addColorStop(1, 'rgba(8,12,10,1)');
        ctx.fillStyle = fadeGrad;
        ctx.fillRect(0, 4, imgW, imgH);
        ctx.restore();
    }

    const textY = 290;

    // Venom badge
    const badgeBg = isVenom ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.12)';
    const badgeText = isVenom ? i18n('venomous_badge') : i18n('safe_badge');
    ctx.fillStyle = badgeBg;
    roundRect(ctx, 28, textY, 180, 26, 13);
    ctx.fill();
    ctx.strokeStyle = isVenom ? 'rgba(239,68,68,0.4)' : 'rgba(34,197,94,0.35)';
    ctx.lineWidth = 1;
    roundRect(ctx, 28, textY, 180, 26, 13);
    ctx.stroke();
    ctx.fillStyle = isVenom ? '#f87171' : '#4ade80';
    ctx.font = 'bold 11px DM Sans, sans-serif';
    ctx.fillText(badgeText, 42, textY + 17);

    // Snake English name
    ctx.fillStyle = '#e8f0ea';
    ctx.font = `bold 38px "Bebas Neue", sans-serif`;
    ctx.fillText(label.replace(/_/g, ' '), 28, textY + 72);

    // Thai name
    ctx.fillStyle = '#6b8570';
    ctx.font = '18px DM Sans, sans-serif';
    ctx.fillText(info.th, 28, textY + 98);

    // Divider
    ctx.strokeStyle = '#1e2e22';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(28, textY+114); ctx.lineTo(W-28, textY+114); ctx.stroke();

    // Info grid
    const infoItems = [
        ['วงศ์', info.family], ['ขนาด', info.size],
        ['แหล่งอาศัย', info.habitat.length > 22 ? info.habitat.slice(0,20)+'…' : info.habitat],
        ['พื้นที่', info.region.length > 22 ? info.region.slice(0,20)+'…' : info.region]
    ];
    infoItems.forEach(([label2, val], i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 28 + col * 210, y = textY + 135 + row * 54;
        ctx.fillStyle = '#3d5244';
        ctx.font = '10px Space Mono, monospace';
        ctx.fillText(label2.toUpperCase(), x, y);
        ctx.fillStyle = '#e8f0ea';
        ctx.font = '14px DM Sans, sans-serif';
        ctx.fillText(val, x, y + 18);
    });

    // Danger level
    ctx.fillStyle = '#3d5244';
    ctx.font = '10px Space Mono, monospace';
    ctx.fillText('ระดับอันตราย', 28, textY + 250);
    ctx.fillStyle = accent;
    ctx.font = 'bold 15px DM Sans, sans-serif';
    ctx.fillText(info.danger_level, 28, textY + 270);

    // Footer
    ctx.fillStyle = '#1e2e22';
    ctx.fillRect(0, H-52, W, 52);
    ctx.fillStyle = '#3d5244';
    ctx.font = '11px Space Mono, monospace';
    ctx.fillText('SERPENT.AI', 28, H-28);
    ctx.fillStyle = '#3d5244';
    ctx.font = '11px Space Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(new Date().toLocaleDateString('th-TH'), W-28, H-28);
    ctx.textAlign = 'left';

    shareCardData = { label, filename: `serpent-ai-${label}.png` };
    document.getElementById('shareOverlay').classList.add('active');
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function downloadShareCard() {
    const canvas = document.getElementById('shareCanvas');
    const a = document.createElement('a');
    a.download = shareCardData?.filename || 'serpent-ai-card.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
}

function closeShare() {
    document.getElementById('shareOverlay').classList.remove('active');
}