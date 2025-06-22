import { useContext, useState } from "react";
import { TileContext } from "../context/TileContext";
import type { TileType } from "../utils/types";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

export const useTile = () => {
  const context = useContext(TileContext);

  if (!context) {
    throw new Error("useTile must be used within a TileProvider");
  }

  const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION);
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

  return {
    context,
    startTile,
    setStartTile,
    endTile,
    setEndTile,
  };
};
