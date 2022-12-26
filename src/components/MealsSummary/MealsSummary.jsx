import React from "react";
import { Row, ThemeProvider } from "react-bootstrap";

import "./MealsSummary.css";

const MealsSummary = () => {
  return (
    <ThemeProvider>
      <Row>
        <col xs={12}>
          <section className="summary">
            <h2>Delicious Food, Delivered To You</h2>
            <p>
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </section>
        </col>
      </Row>
    </ThemeProvider>
  );
};

export default MealsSummary;
