import { createGlobalState } from ".";

type UserType = {
  name: string;
};

const initialUserState: UserType = {
  name: "webdevtolu",
};

export const useUserState = createGlobalState<UserType>(
  "user",
  initialUserState,
);
