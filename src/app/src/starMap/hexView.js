import React from 'react';
import PlanetView from './planetView';
import StarshipView from './starshipView';

export default function HexView({ hex, hasStarhip }) {
  return (
    <div className="hex">
      {hex.planet ? <PlanetView planet={hex.planet} /> : ''}
      {hasStarhip ? <StarshipView planet={hex.planet}/> : ''}
      <div className="hex-id">{hex.id}</div>
    </div>
  );
}
