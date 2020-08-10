import { selectedTheme } from "../config/themes";
import { SWITCH_THEME } from "./themeActions";

const initialState = {
	theme: selectedTheme,
};

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_THEME:
			return { theme: action.theme };

		default:
			return state;
	}
};

export default themeReducer;
