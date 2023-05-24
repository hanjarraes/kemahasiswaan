import React, { useState } from "react";
import './style.scss'

const Corousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  const widhtView = window.innerWidth

  const MAX_VISIBILITY = widhtView > 500 ? 3 : 1;


  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><i className="ri-arrow-left-s-line" /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 8,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 5,
          'pointer-events': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><i className="ri-arrow-right-s-line" /></button>}
    </div>
  );
};

export default Corousel;