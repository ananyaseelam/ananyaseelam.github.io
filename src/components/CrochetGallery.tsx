"use client";

import { useEffect, useState } from "react";

type Piece = {
  title: string;
  image: string;
  pattern: string;
  yarn: string;
  date: string;
};

function useColumnCount() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    function update() {
      setColumns(window.innerWidth < 640 ? 2 : 3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

function useAspectRatios(pieces: Piece[]) {
  const [ratios, setRatios] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    pieces.forEach((piece) => {
      const img = new window.Image();
      img.src = piece.image;
      img.onload = () => {
        if (!cancelled && img.naturalHeight > 0) {
          setRatios((prev) => ({
            ...prev,
            [piece.image]: img.naturalWidth / img.naturalHeight,
          }));
        }
      };
      // If a file 404s or fails to load, fall back to a square ratio
      // rather than leaving a hole in the layout forever.
      img.onerror = () => {
        if (!cancelled) {
          setRatios((prev) => ({ ...prev, [piece.image]: 1 }));
        }
      };
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pieces.map((p) => p.image).join(",")]);

  return ratios;
}

function PieceCard({ piece }: { piece: Piece }) {
  return (
    <div className="group relative w-full [perspective:1000px]">
      <div className="relative w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front: the image, natural height — sets the box size for both faces */}
        <img
          src={piece.image}
          alt={piece.title}
          className="block w-full rounded-md border border-border [backface-visibility:hidden]"
        />

        {/* Back: same image, with a dark scrim and the title/date on top */}
        <div className="absolute inset-0 overflow-hidden rounded-md border border-border [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={piece.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/55 px-4 text-center">
            <p className="font-mono text-sm font-medium text-white">
              {piece.title}
            </p>
            <p className="text-xs text-white/80">{piece.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CrochetGallery({ pieces }: { pieces: Piece[] }) {
  const columnCount = useColumnCount();
  const ratios = useAspectRatios(pieces);

  const allRatiosReady = pieces.every((p) => ratios[p.image] !== undefined);

  // Greedy "shortest column" packing: walk pieces in order (newest first)
  // and always drop the next one into whichever column currently has the
  // least accumulated height. This keeps the overall reading order close
  // to top-left-to-bottom-right while guaranteeing no leftover gaps.
  const columns: Piece[][] = Array.from({ length: columnCount }, () => []);

  if (allRatiosReady) {
    const columnHeights = Array(columnCount).fill(0);
    pieces.forEach((piece) => {
      const ratio = ratios[piece.image] || 1;
      const estimatedHeight = 1 / ratio;
      const shortestIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columns[shortestIndex].push(piece);
      columnHeights[shortestIndex] += estimatedHeight;
    });
  }

  if (!allRatiosReady) {
    return (
      <div className="flex min-h-[200px] items-center justify-center text-sm text-ink-muted">
        loading gallery...
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {columns.map((column, i) => (
        <div key={i} className="flex flex-1 flex-col gap-4">
          {column.map((piece) => (
            <PieceCard key={piece.image} piece={piece} />
          ))}
        </div>
      ))}
    </div>
  );
}