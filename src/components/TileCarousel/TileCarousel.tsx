import { useState } from 'react';

/* Components */
import { Tile } from './Tile.tsx';

/* Styles */
import './TileCarousel.css';

/* Types/Interfaces */
import { TileInterface } from './TileInterface.ts';

function TileCarousel({ tiles }: { tiles: TileInterface[] }) {
  const [currentTile, setCurrentTile] = useState<number>(0);
  const circularTiles = [].concat(...Array(tiles.length).fill(tiles));
  const tileCount = circularTiles.length;

  return (
    <div
      className="tileCarousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="carousel of tiles"
    >
      {circularTiles.map((item, index) => (
        <Tile
          key={index}
          index={index}
          currentIndex={currentTile}
          count={tileCount}
          data={item}
          onClick={(e) => {
            if (currentTile !== index) {
              e.preventDefault();
              (e.target as HTMLElement).blur();
              setCurrentTile(index);
            }
          }}
        />
      ))}
    </div>
  );
}

export { TileCarousel };
