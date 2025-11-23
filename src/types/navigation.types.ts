import { ScreenConstants } from "../utils/constants";

type RootStackParamList = {
  [ScreenConstants.LOGIN_SCREEN]: undefined;
  [ScreenConstants.SIGNUP_SCREEN]: undefined;
  [ScreenConstants.HOME_SCREEN]: undefined;
  
};


export type AppParamList = {
  [K in| keyof RootStackParamList]:K extends keyof RootStackParamList
    ? RootStackParamList[K]
    : never;
  }
export type {
  RootStackParamList
};