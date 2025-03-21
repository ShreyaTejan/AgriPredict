from flask import Flask, request, jsonify
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

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.secret_key = 'your_secret_key'  # Required for sessions if needed

# Load models at startup
model, sc, mx = load_models()

@app.route('/api/')
def index():
    return jsonify({"message": "Welcome to the Crop Recommendation API"})

@app.route('/api/soil-analysis')
def home():
    return jsonify({"message": "Soil Analysis Service"})

@app.route('/api/signup', methods=['POST'])
def signup():
    # This would typically handle user registration logic
    data = request.json
    # Process signup data here
    return jsonify({"success": True, "message": "User registered successfully"})

@app.route('/api/login', methods=['POST'])
def login():
    # This would typically handle authentication logic
    data = request.json
    # Process login data here
    return jsonify({"success": True, "message": "Login successful"})

@app.route('/api/contact', methods=['POST'])
def contact():
    # Handle contact form submission
    data = request.json
    # Process contact data here
    return jsonify({"success": True, "message": "Message sent successfully"})

@app.route('/api/resources')
def resources():
    # Return list of resources
    resources_data = [
        {"title": "Crop Guide", "description": "Guide for growing various crops"},
        {"title": "Soil Health", "description": "Information about maintaining soil health"},
        # Add more resources as needed
    ]
    return jsonify({"resources": resources_data})

def validate_input(value, field_name, min_val, max_val):
    try:
        value = float(value)
        if not min_val <= value <= max_val:
            raise ValueError(f"{field_name} must be between {min_val} and {max_val}")
        return value
    except ValueError as e:
        raise ValueError(f"Invalid {field_name}: {str(e)}")

@app.route("/api/predict", methods=['POST'])
def predict():
    # For React, we'll receive JSON data instead of form data
    data = request.json
    print("JSON Data:", data)
    
    try:
        # Validate and convert inputs
        N = float(data.get('Nitrogen', 0))
        P = float(data.get('Phosphorus', 0))
        K = float(data.get('Potassium', 0))
        temp = float(data.get('Temperature', 0))
        humidity = float(data.get('Humidity', 0))
        ph = float(data.get('pH', 0))
        rainfall = float(data.get('Rainfall', 0))
        
        print("Processed inputs:", [N, P, K, temp, humidity, ph, rainfall])
        
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)
        
        # Scale and predict
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
        print("Final result:", result)
        
        return jsonify({
            "success": True,
            "prediction": int(prediction[0]),
            "crop": crop,
            "result": result
        })
        
    except Exception as e:
        print("Error occurred:", str(e))
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True)