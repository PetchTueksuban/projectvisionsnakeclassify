from fastapi import FastAPI, File, UploadFile
from ultralytics import YOLO
from PIL import Image
import numpy as np
import io

app = FastAPI()


model = YOLO('best.pt') 

# สร้างช่องทาง (Endpoint) รับรูปภาพตามโจทย์
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # 1. โหลดรูปภาพเข้า RAM
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    img_array = np.array(image)
    
    # 2. รันโมเดล YOLO
    results = model(img_array)
    
    # 3. สกัดข้อมูลพิกัด (Bounding Box) และชื่อวัตถุ
    predictions = []
    for r in results:
        for box in r.boxes:
            b = box.xyxy[0].tolist() # พิกัด Bounding Box
            conf = float(box.conf)
            cls_id = int(box.cls)
            name = model.names[cls_id]
            
            # ลอจิกจำแนกพิษ (สมมติรายชื่องูมีพิษ คุณเพชรสามารถมาเพิ่มชื่อทีหลังได้)
            is_venomous = True if name in ['cobra', 'viper', 'krait'] else False
            
            # คืนค่าเป็น JSON
            predictions.append({
                "box": b,
                "label": name,
                "confidence": conf,
                "is_venomous": is_venomous
            })
            
    return {"predictions": predictions}

