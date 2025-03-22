import React from 'react';
import crop from "../assets/crop.jpg";
import "./HowItWorks.css"

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="process-container">
        <div className="process-intro">
          <h2 className="big-title">HOW IT WORKS</h2>
          <div className="process-illustration">
            <img src={crop} alt="Soil and plants illustration" />
          </div>
        </div>

        <div className="process-steps">
          <div className="dashed-path"></div>

          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Submit Soil Data</h3>
              <p className="step-description">
                Enter your soil test results or upload your report for analysis.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number-light">2</div>
            <div className="step-content">
              <h3 className="step-title">AI Analysis</h3>
              <p className="step-description">
                Our machine learning model analyzes your soil's nutritional profile.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number-light">3</div>
            <div className="step-content">
              <h3 className="step-title">Get Recommendations</h3>
              <p className="step-description">
                Receive personalized crop recommendations and soil health insights.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number-light">4</div>
            <div className="step-content">
              <h3 className="step-title">Implement & Monitor</h3>
              <p className="step-description">
                Apply recommendations and track your results over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
