import React from 'react';
import HexView from './hexView';
import './styles.scss';

export default function StarMapView({ rows, starMapLocationId }) {
  return (
    <div className="starmap">
      {rows.map((row, index) =>
        <div key={index} className="starmap-row">
          {row.map((cell) => <HexView key={cell.id} hex={cell} hasStarhip={cell.id === starMapLocationId}/>)}
        </div>
      )}
    </div>
  );
}
