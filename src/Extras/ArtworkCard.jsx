// components/ArtworkCard.jsx
import React from "react";

/**
 * Props:
 *  - artwork: {id, title, artist, price, image, availability}
 *  - onQuickView(artwork)
 */
export default function ArtworkCard({ artwork, onQuickView = () => {} }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition" aria-labelledby={`art-${artwork.id}-title`}>
      <div className="relative">
        <a href={`/art/${artwork.id}`} aria-label={`${artwork.title} by ${artwork.artist}`}>
          <img src={artwork.image} alt={`${artwork.title} by ${artwork.artist}`} className="w-full h-56 object-cover" loading="lazy" />
        </a>
        <button onClick={() => onQuickView(artwork)} aria-label={`Quick view ${artwork.title}`}
                className="absolute right-3 bottom-3 bg-white/90 px-3 py-1 rounded-full text-sm shadow">Quick view</button>
      </div>
      <div className="p-3">
        <h3 id={`art-${artwork.id}-title`} className="text-sm font-medium text-gray-900">{artwork.title}</h3>
        <p className="text-xs text-gray-600">{artwork.artist}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-indigo-600 font-semibold">{artwork.price}</span>
          <a href={`/art/${artwork.id}`} className="text-xs text-gray-700 hover:underline">Details</a>
        </div>
      </div>
    </article>
  );
}

{/*import React from "react";

function Picture({ media }) {
  // media: {avif, webp, jpg, alt, widths: [{w,url}], focalPoint}
  const { avif, webp, jpg, alt } = media;
  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={jpg}
        alt={alt}
        loading="lazy"
        className="w-full h-[320px] object-cover rounded-md"
        width="400" height="500"
      />
    </picture>
  );
}

export default function ArtworkCard({ item = {}, compact=false }) {
  const { title="Untitled", artist="Unknown", price, image } = item;
  return (
    <article className="bg-transparent" role="listitem" aria-label={`${title} by ${artist}`}>
      <div className="relative group">
        <Picture media={image || { jpg: '/placeholder.jpg', alt: `${title} by ${artist}` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-3 absolute bottom-0 left-0 right-0 text-white">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm">{artist}</div>
              </div>
              <div className="text-sm font-medium">{price ? `$${price}` : 'Price on request'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-sm text-a-text-2">
        <div>{artist}</div>
        <div className="flex items-center gap-2">
          <button aria-pressed="false" aria-label={`Favorite ${title}`} className="p-2 rounded focus:ring-2 focus:ring-a-accent">♡</button>
          <button aria-label={`Quick view ${title}`} className="p-2 rounded bg-a-accent text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-a-accent">View</button>
        </div>
      </div>
    </article>
  );
}*/}
