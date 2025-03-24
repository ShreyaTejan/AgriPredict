from flask import Flask, request, jsonify, send_from_directory
import numpy as np
import pickle
import sklearn
import os
from flask_cors import CORS

# Load the model and scalers
def load_models():
    try:
        if not all(os.path.exists(f) for f in ['model.pkl', 'standardscaler.pkl', 'minmaxscaler.pkl']):
            raise FileNotFoundError("One or more required model files not found")
        
        model = pickle.load(open('model.pkl', 'rb'))
        sc = pickle.load(open('standardscaler.pkl', 'rb'))
        mx = pickle.load(open('minmaxscaler.pkl', 'rb'))
        return model, sc, mx
    except Exception as e:
        print(f"Error loading model or scalers: {e}")
        return None, None, None

# Initialize Flask app with static file configuration for React
app = Flask(__name__, static_folder='../client/dist', static_url_path='')
CORS(app)  # Enable CORS for all routes
app.secret_key = os.environ.get('SECRET_KEY', 'default_dev_key')  # Use environment variable

# Load models at startup
model, sc, mx = load_models()

# Serve React frontend
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# Handle React routing
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/')
def index():
    return jsonify({"message": "Welcome to the Crop Recommendation API"})

@app.route('/api/soil-analysis')
def home():
    return jsonify({"message": "Soil Analysis Service"})

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    return jsonify({"success": True, "message": "User registered successfully"})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    return jsonify({"success": True, "message": "Login successful"})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    return jsonify({"success": True, "message": "Message sent successfully"})

@app.route('/api/resources')
def resources():
    resources_data = [
        {"title": "Crop Guide", "description": "Guide for growing various crops"},
        {"title": "Soil Health", "description": "Information about maintaining soil health"},
    ]
    return jsonify({"resources": resources_data})

@app.route("/api/predict", methods=['POST'])
def predict():
    data = request.json
    try:
        N = float(data.get('Nitrogen', 0))
        P = float(data.get('Phosphorus', 0))
        K = float(data.get('Potassium', 0))
        temp = float(data.get('Temperature', 0))
        humidity = float(data.get('Humidity', 0))
        ph = float(data.get('pH', 0))
        rainfall = float(data.get('Rainfall', 0))
        
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)
        
        mx_features = mx.transform(single_pred)
        sc_mx_features = sc.transform(mx_features)
        prediction = model.predict(sc_mx_features)
        
        crop_dict = {
            1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
            8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
            14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
            19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"
        }
        
        crop = crop_dict.get(prediction[0], "Unknown crop")
        result = f"{crop} is the best crop to be cultivated right there"
        
        return jsonify({
            "success": True,
            "prediction": int(prediction[0]),
            "crop": crop,
            "result": result
        })
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Render uses PORT from environment
    app.run(host='0.0.0.0', port=port)
