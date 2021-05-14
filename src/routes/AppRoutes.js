import Home from "../screens/Home";
import CharacterDetails from "../screens/CharacterDetails";

export const Routes = [
  { path: "/", component: Home, exact: true },
  { path: "/character/:characterId", component: CharacterDetails },
];
