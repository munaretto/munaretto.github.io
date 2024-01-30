import { DARK_THEME } from "../themes/dark.theme";
import { LIGHT_THEME } from "../themes/light.theme";

export type Theme = DARK_THEME | LIGHT_THEME;
export type ThemeContextType = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}