import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion(props) {
  const [startIndex, setIndex] = useState(null  );
  const list = props.items;

  return <div>
    {list.map((el, index) => (
      <div className="accordion">
        <div>
          <button onClick={()=>setIndex(index == startIndex ? null : index)} className="accordion-title">{el.title}
            <span style={{float: "right"}}>{index == startIndex ? <FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          </div>
        {index == startIndex && <div className="accordion-content">
          <p>{el.content}</p>
          </div>}
        </div>
    ))}
  </div>;
}

export default Accordion;

