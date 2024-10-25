import React from 'react';
import './DogAppLogin.css';

const DogAppLogin = () => {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="payment-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="payment3-grid">
                  <div className="layout25_content">
                    <div className="margin-bottom margin-small">
                      <img src="https://cdn-icons-png.freepik.com/256/5100/5100114.png?semt=ais_hybrid" alt="Dogo Logo" width="72" className="hero-logo" />
                      <h1 className="heading-10">Start <span className="dog-name">Your Dog's</span> journey</h1>
                    </div>
                    <div className="about4-growth_content-right">
                      <div className="margin-bottom margin-small">
                        <div className="payment-trust-wrapper">
                          <div className="avatar_group-wrapper">
                            <div className="hero-avatar-wrapper">
                              <img src="https://cdn-icons-png.flaticon.com/512/5094/5094257.png" alt="Dog Avatar" className="hero-avatar-image" />
                            </div>
                            <div className="f-header-avatar-text">
                              <strong>100 million </strong>(lol) happy dog parents have already downloaded <strong>DogApp</strong>
                            </div>
                          </div>
                          <img src="https://www.svgrepo.com/show/5528/award.svg" alt="Awards" className="hero-awards-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layout25_image-wrapper">
                    <div className="pricing-card">
                      <div className="offer-wrapper">
                        <div className="pricing-subheading">Welcome</div>
                        <div className="pricing-caption">Your second best friend...</div>
                      </div>
                      <div className="pricing-heading-h4">Have A Plan</div>
                      <div className="pricing-benefits-subtitle-text">Includes:</div>
                      <div className="hero-value-list3">
                        <div className="hero-value-item">
                          <div className="pricing7_feature-icon-wrapper">
                            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/dog.png" alt="Feature Icon" className="icon-1x1-xsmall" />
                          </div>
                          <div>Pet Meds Tracker</div>
                        </div>
                        <div className="hero-value-item">
                          <div className="pricing7_feature-icon-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/512/185/185466.png" alt="Feature Icon" className="icon-1x1-xsmall" />
                          </div>
                          <div>Vet Visit Reminders</div>
                        </div>
                      </div>
                      <div className="pricing-tabs">
                        <a href="#" className="pricing-button">Sign Up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DogAppLogin;