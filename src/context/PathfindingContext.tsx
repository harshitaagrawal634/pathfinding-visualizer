import { createContext, useState, type ReactNode } from "react";
import type { AlgorithmType,GridType, MazeType} from "../utils/types";
import { START_TILE_CONFIGURATION, END_TILE_CONFIGURATION } from "../utils/constants";
import { createGrid } from "../utils/helpers";
type ModeType= "start" | "end" | "wall";
interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean)=>void
    mode: ModeType;
    setMode: (mode: ModeType) => void;
}

export const PathfindingContext = createContext<PathfindingContextInterface| undefined>(undefined);

export const PathfindingProvider = ({children}: {children: ReactNode}) =>{
    const [algorithm, setAlgorithm]= useState<AlgorithmType> ("BFS");
    const [maze,setMaze] = useState<MazeType>("NONE");
    const [grid,setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
    const [mode, setMode] = useState<ModeType>("wall");
    return(
      <PathfindingContext.Provider
        value={{
          algorithm,
          setAlgorithm,
          maze,
          setMaze,
          grid,
          setGrid,
          isGraphVisualized: isGraphVisualized,
          setIsGraphVisualized,
          mode,
          setMode,
         }}
         >{children}
         </PathfindingContext.Provider>
    )

}