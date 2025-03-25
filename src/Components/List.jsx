import { useState } from "react";

export default function List({ info, setId }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  const visibleItems = expanded ? info : info.slice(0, 3);

  return (
    <ul className="list">
      {visibleItems.map((item) => (
        <li
          key={item.id}
          className={`item-list ${selected && selected === item.id? "selected" : ""}`}
          onClick={() => { 
            setId(item.id) 
            setSelected(item.id)
          }}
        >
          {item.name}
        </li>
      ))}
      {info.length > 2 && (
        <li className="more" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Скрыть" : "..."}
        </li>
      )}
    </ul>
  );
}
