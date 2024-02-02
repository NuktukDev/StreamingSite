/* Components */
import { Tile } from './Tile.tsx';

/* Styles */
import './TileCarousel.css';

import { CSSProperties } from 'react';
/* Types/Interfaces */
import { TileInterface } from './TileInterface.ts';
interface CSSPropertiesWithVars extends CSSProperties {
  '--progressWidth': string;
  '--progressLeft': string;
}

/* Utility */
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { modulo } from 'src/utility/modulo.js';

function TileCarousel({ tiles }: { tiles: TileInterface[] }) {
  const [currentTile, setCurrentTile] = useState<number>(0);

  const baseTileCount = tiles.length;

  const circularTiles = [].concat(...Array(baseTileCount).fill(tiles));
  const circularTileCount = circularTiles.length;

  const carouselHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentTile(modulo(currentTile + 1, circularTileCount)),
    onSwipedRight: () => setCurrentTile(modulo(currentTile - 1, circularTileCount)),
  });

  return (
    <div
      className="tileCarousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="carousel of tiles"
    >
      <div className="tileCarousel__slides" {...carouselHandlers}>
        {circularTiles.map((item, index) => (
          <Tile
            key={index}
            index={index}
            currentIndex={currentTile}
            count={circularTileCount}
            data={item}
            onClick={(e) => {
              if (currentTile !== index) {
                e.preventDefault();
                (e.currentTarget as HTMLElement).blur();
                setCurrentTile(index);
              }
            }}
          />
        ))}
      </div>
      <div className="tileCarousel__progress">
        <div
          className="tileCarousel__progress__inner"
          style={
            {
              '--progressWidth': (1 / baseTileCount) * 100 + '%',
              '--progressLeft': (modulo(currentTile, baseTileCount) / baseTileCount) * 100 + '%',
            } as CSSPropertiesWithVars
          }
        ></div>
      </div>
    </div>
  );
}

export { TileCarousel };
