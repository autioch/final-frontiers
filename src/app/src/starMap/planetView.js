import React from 'react';

export default function PlanetView({ planet }) {
  return (
    <div className={`planet size-${planet.size} distance-${planet.distance}`} title={planet.label}></div>
  );
}
