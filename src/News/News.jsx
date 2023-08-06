import React from "react";
import "./news.css";
const News = () => {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-main">
          <div className="news-header">
            <div className="news-left">
              <h2>LATEST NEWS</h2>
              <hr />
              <p>
                Ac haca ullamcorper donec ante habi tasse donec imperdiet
                eturpis varius per a augue magna hac. Nec hac…
              </p>
            </div>
            <div className="news-right">
              <button type="button">SEE ALL</button>
            </div>
          </div>
          <div className="news-item-box">
            <div className="news-item">
              <div className="news-item-top">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-5-400x250.jpg"
                  alt=""
                />
              </div>

              <div className="news-item-bottom">
                <p className="pb-20">
                  Addictive Appetizers: Sausage Cheese Balls
                </p>
                <h3>
                  <span className="color-gray">Aug 30, 2023</span>
                  <span className="news-i-bot-text">Fast Food</span>
                  <p className="color-gray">0 Comments</p>
                </h3>
                <p>
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet
                  eturpis varius per a augue magna hac....
                </p>

                <button type="button">READ MORE</button>
              </div>
            </div>

            <div className="news-item">
              <div className="news-item-top">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-6-400x250.jpg"
                  alt=""
                />
              </div>

              <div className="news-item-bottom">
                <p className="pb-20">6 Ingredient Vegan Cinnamon Rolls</p>
                <h3>
                  <span className="color-gray">Oct 29, 2022</span>
                  <span className="news-i-bot-text">Fast Food</span>
                  <p className="color-gray">0 Comments</p>
                </h3>
                <p>
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet
                  eturpis varius per a augue magna hac....
                </p>

                <button type="button">READ MORE</button>
              </div>
            </div>

            <div className="news-item">
              <div className="news-item-top">
                <img
                  src="https://divifoodstore.divifixer.com/wp-content/uploads/2021/06/divi-food-store-8-400x250.jpg"
                  alt=""
                />
              </div>

              <div className="news-item-bottom">
                <p className="pb-20">
                  My Favorite Easy Black Pizza Toast Recipe
                </p>
                <h3>
                  <span className="color-gray">Sep 12, 2022</span>
                  <span className="news-i-bot-text">Fast Food</span>
                  <p className="color-gray">0 Comments</p>
                </h3>
                <p>
                  Ac haca ullamcorper donec ante habi tasse donec imperdiet
                  eturpis varius per a augue magna hac....
                </p>

                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
