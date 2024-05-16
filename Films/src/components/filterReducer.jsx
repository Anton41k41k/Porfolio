import { createContext, useReducer } from "react";
import { sortParams } from "./DATA";

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
  sort: sortParams[0],
  age: [1930, 2024],
  genres: [],
  pages: { page: 1, count: 500 },
  query: "",
};

export default function settingsReducer(settings, action) {
  switch (action.type) {
    case "changeQuery": {
      return {
        ...settings,
        query: action.query,
      };
    }

    case "changeSort": {
      return {
        ...settings,
        sort: action.name,
      };
    }
    case "changePage": {
      return {
        ...settings,
        pages: { ...settings.pages, page: action.page },
      };
    }
    case "changeTotalPages": {
      return {
        ...settings,
        pages: { ...settings.pages, count: action.total },
      };
    }

    case "changeAge": {
      return {
        ...settings,
        age: action.ages,
      };
    }

    case "changeGenres": {
      return {
        ...settings,
        genres: action.genres,
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
