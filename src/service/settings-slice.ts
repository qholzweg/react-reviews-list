import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

type TSettingsState = {
  lang: string
}

export const initialState: TSettingsState = {
  lang: 'ru'
}
export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    setLang: (state, action:PayloadAction<string>) => {
      state.lang = action.payload;
    },
  }
});

export const {setLang} = settingsSlice.actions;
export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;