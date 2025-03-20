from flask import Flask, request, render_template, redirect, url_for, flash
import numpy as np
import pickle
import sklearn
import os
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
app.secret_key = 'your_secret_key'  # Required for flashing messages
# Load models at startup
model, sc, mx = load_models()
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/soil-analysis')
def home():
    return render_template("home.html")

@app.route('/signup')
def signup():
    return render_template("signup.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/resources')
def resources():
    return render_template("resources.html")


def validate_input(value, field_name, min_val, max_val):
    try:
        value = float(value)
        if not min_val <= value <= max_val:
            raise ValueError(f"{field_name} must be between {min_val} and {max_val}")
        return value
    except ValueError as e:
        raise ValueError(f"Invalid {field_name}: {str(e)}")
@app.route("/predict", methods=['POST'])
def predict():
    # Add print statements for debugging
    print("Form Data:", request.form)
    
    try:
        # Validate and convert inputs
        N = float(request.form.get('Nitrogen', 0))
        P = float(request.form.get('Phosphorus', 0))
        K = float(request.form.get('Potassium', 0))
        temp = float(request.form.get('Temperature', 0))
        humidity = float(request.form.get('Humidity', 0))
        ph = float(request.form.get('pH', 0))
        rainfall = float(request.form.get('Rainfall', 0))
        
        print("Processed inputs:", [N, P, K, temp, humidity, ph, rainfall])
        
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)
        
        # Print shapes for debugging
        print("Input shape:", single_pred.shape)
        
        # Scale and predict
        mx_features = mx.transform(single_pred)
        print("MinMax scaled shape:", mx_features.shape)
        
        sc_mx_features = sc.transform(mx_features)
        print("Standard scaled shape:", sc_mx_features.shape)
        
        prediction = model.predict(sc_mx_features)
        print("Prediction:", prediction)
        
        crop_dict = {
            1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
            8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
            14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
            19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"
        }
        
        crop = crop_dict.get(prediction[0], "Unknown crop")
        result = f"{crop} is the best crop to be cultivated right there"
        print("Final result:", result)
        
        return render_template('home.html', result=result)
        
    except Exception as e:
        print("Error occurred:", str(e))
        flash(f"An error occurred: {str(e)}")
        return redirect(url_for('home'))