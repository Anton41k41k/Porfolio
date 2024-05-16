import { createContext, useReducer } from "react";

export const SettingsContext = createContext(null);
export const SettingsDispatchContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, dispatch] = useReducer(settingsReducer, startSettings);
  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export const startSettings = {
  sort: "По популярности",
  age: "2024",
  isActive: [],
};

export default function settingsReducer(settings, action) {
  switch (action.type) {
    case "changeSort": {
      return {
        ...settings,
        sort: action.name,
      };
    }

    case "changeAge": {
      return {
        ...settings,
        age: action.name,
      };
    }

    case "addGenres": {
      return {
        ...settings,
        isActive: [...settings.isActive, action.name],
      };
    }

    case "deleteGenres": {
      return {
        ...settings,
        isActive: settings.isActive.filter((task) => task !== action.name),
      };
    }

    case "resetFilter": {
      return startSettings;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
