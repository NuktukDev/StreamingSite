/* Styles */
import './Tile.css';

/* Types/Interfaces */
import { TileInterface } from './TileInterface.ts';

/* Utility */
import { modulo } from 'src/utility/modulo.js';

function Tile({
  index,
  currentIndex,
  count,
  data,
  onClick,
}: {
  index: number;
  currentIndex: number;
  count: number;
  data: TileInterface;
  onClick: (e: React.MouseEvent) => void;
}) {
  const { title, link, description, background } = data;
  const trimmedTitle = title.replace(/ /g, '');

  const visibility =
    index === modulo(currentIndex - 2, count) ||
    index === modulo(currentIndex - 1, count) ||
    index === modulo(currentIndex + 1, count) ||
    index === modulo(currentIndex + 2, count) ||
    index === currentIndex
      ? 'visible'
      : 'hidden';

  // default all the tiles to the right most with 200%
  let translateX = 200;
  if (index === modulo(currentIndex - 3, count) || index === modulo(currentIndex - 2, count)) {
    translateX = -200; // the 2nd left most tile (3 tiles will always be on the left of the current tile)
  } else if (index === modulo(currentIndex - 1, count)) {
    translateX = -100; // the previous tile
  } else if (index === currentIndex) {
    translateX = 0; // the current tile
  } else if (index === modulo(currentIndex + 1, count)) {
    translateX = 100; // the next tile
  }

  return (
    <a
      href={link}
      role="button"
      aria-roledescription="read summary button"
      aria-label={`${title} summary`}
      className="tile__link"
      style={{
        position: index === currentIndex ? 'relative' : 'absolute',
        visibility: visibility,
        transform: `translateX(${translateX}%)`,
      }}
      onClick={onClick}
    >
      <div
        aria-labelledby={`${trimmedTitle}-${index}`}
        className={`tile__link__summary ${
          index === currentIndex ? 'tile__link__summary--active' : ''
        }`}
        style={{ backgroundImage: 'url(' + background + ')' }}
      >
        <div className="tile__link__summary__info">
          <h3 id={`${trimmedTitle}-${index}`}>{title}</h3>
          <p
            className="tile__link__summary__info__p color-mute overflow-hidden"
            style={{ height: '55%' }}
          >
            {description}
          </p>

          <button
            type="button"
            className="tile__link__summary__info__btn mt-2 btn--primary btn--rounded weight-600"
          >
            Watch Now
          </button>
        </div>
      </div>
    </a>
  );
}

export { Tile };
