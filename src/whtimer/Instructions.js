import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export default function Instructions({
  showModal,

  closeModal,
}) {
  return (
    <Modal className="modal" show={showModal} onHide={() => closeModal()}>
      <div className="testWrapper">
        <div className="modalHeader">
          <div>Wim Hoff Breathing Method</div>
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            X
          </Button>
        </div>
        <div className="modalBody">
          <ul style={{ listStyle: "none" }}>
            <li>
              <h5>Step 1: Get Comfortable Assume a meditation posture:</h5>
              <span>
                sitting, lying down — whichever is most comfortable for you.
                Make sure you can expand your lungs freely without feeling any
                constriction.
              </span>
            </li>
            <li>
              <h5>Step 2: 30-40 Deep Breaths</h5>
              <span>
                Close your eyes and try to clear your mind. Be conscious of your
                breath, and try to fully connect with it. Inhale deeply through
                the nose or mouth, and exhale unforced through the mouth. Fully
                inhale through the belly, then chest and then let go unforced.
                Repeat this 30 to 40 times in short, powerful bursts. You may
                experience light-headedness, and tingling sensations in your
                fingers and feet. These side effects are completely harmless.
              </span>
            </li>
            <li>
              <h5>Step 3: The Hold After the last exhalation,</h5>
              <span>
                inhale one final time, as deeply as you can. Then let the air
                out and stop breathing. Hold until you feel the urge to breathe
                again.
              </span>
            </li>
            <li>
              <h5>Step 4: Recovery Breath</h5>
              <span>
                When you feel the urge to breathe again, draw one big breath to
                fill your lungs. Feel your belly and chest expanding. When you
                are at full capacity, hold the breath for around 15 seconds,
                then let go. That completes round number one. This cycle can be
                repeated 3-4 times without interval. After having completed the
                breathing exercise, take your time to bask in the bliss. This
                calm state is highly conducive to meditation — don't hesitate to
                combine the two.
              </span>
            </li>
          </ul>
        </div>
        <div className="modalFooter">
          <Button variant="secondary">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.wimhofmethod.com/breathing-exercises"
              target="_blank"
            >
              Read More
            </a>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
