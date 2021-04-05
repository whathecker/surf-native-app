import { SurfLevel, SelectedSurfLevel } from "../../../types/surf-profile";

export type SetSelectedLevelFunc = (input: SurfLevel | null) => void;

export type SurfLevelButtonProps = {
  surfLevel: SurfLevel;
  selectedSurfLevel: SelectedSurfLevel;
  handleButtonPress: (input: SelectedSurfLevel) => void;
};
