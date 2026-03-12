from fastapi import FastAPI, File, UploadFile
from ultralytics import YOLO
from PIL import Image
import numpy as np
import io

app = FastAPI()


model = YOLO('best.pt') 

# end point for image upload and prediction
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # file read
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    img_array = np.array(image)
    
   
    results = model(img_array)
    
    # Bounding Box
    predictions = []
    for r in results:
        for box in r.boxes:
            b = box.xyxy[0].tolist() 
            conf = float(box.conf)
            cls_id = int(box.cls)
            name = model.names[cls_id]
            
            # logic to determine if the snake is venomous based on its name
            is_venomous = True if name in ['cobra', 'viper', 'krait'] else False
            
            # return to json format
            predictions.append({
                "box": b,
                "label": name,
                "confidence": conf,
                "is_venomous": is_venomous
            })
            
    return {"predictions": predictions}

