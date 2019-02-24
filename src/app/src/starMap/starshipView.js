import React from 'react';

export default function StarshipView({ planet }) {
  return (
    <div className={`starship ${planet ? 'in-orbit' : 'in-space'}`}></div>
  );
}
