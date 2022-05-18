import React from "react";
import "../App.css";

export function Questions() {
  return (
    <section id="questions">
      <div class="cough">
        <h4>had a Cough?</h4>
        <ul>
          <li class="coughYes">Yes</li>
          <li class="coughNo">No</li>
        </ul>
      </div>
      <div class="soreThroat">
        <h4>had a Sore Throat?</h4>
        <ul>
          <li class="soreThroatYes">Yes</li>
          <li class="soreThroatNo">No</li>
        </ul>
      </div>
      <div class="runnyNose">
        <h4>had a Runny Nose?</h4>
        <ul>
          <li class="runnyNoseYes">Yes</li>
          <li class="runnyNoseNo">No</li>
        </ul>
      </div>
      <div class="fever">
        <h4>had a Fever?</h4>
        <ul>
          <li class="feverYes">Yes</li>
          <li class="feverNo">No</li>
        </ul>
      </div>
      <div class="vomiting">
        <h4>Vomited?</h4>
        <ul>
          <li class="vomitingYes">Yes</li>
          <li class="vomitingNo">No</li>
        </ul>
      </div>
      <div class="diarrhea">
        <h4>had Diarrhea?</h4>
        <ul>
          <li class="diarrheaYes">Yes</li>
          <li class="diarrheaNo">No</li>
        </ul>
      </div>
    </section>
  );
}
