"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const NetBandAccordion = ({
  items = [
    {
      id: 1,
      title: "How fast can I get installed?",
      content:
        "Most installations are completed within 24 hours of your request.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: " Do I need to buy a router?",
      content:
        "Yes,but we also provide a high-performance router (extra charge applicable).",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "What if I’m not satisfied with the service?",
      content:
        "We offer a 30-day money-back guarantee—no questions asked.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: " Can I upgrade my plan later if I need more speed?",
      content:
        "Absolutely. You can upgrade at any time with just a quick call.",
      animationDelay: ".9s",
    },
  ],
  eventKey = "home1",
  activeKey,
}) => {
  const defaultActiveKey = activeKey ? activeKey : eventKey + items[0].id;
  const [active, setActive] = useState(defaultActiveKey);
  return (
    <Accordion defaultActiveKey={defaultActiveKey}>
      {items.map((item) => (
        <div
          className="accordion-item wow fadeInUp"
          data-wow-delay={item.animationDelay}
          key={item.id}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              eventKey={eventKey + item.id}
              className={`accordion-button ${
                active == eventKey + item.id ? "" : "collapsed"
              }`}
              onClick={() => setActive(eventKey + item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse
            className="accordion-collapse"
            eventKey={eventKey + item.id}
          >
            <div className="accordion-body">{item.content}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default NetBandAccordion;
