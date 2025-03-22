import { useUserState } from "~/state/user";

export const Homepage = () => {
  const { data } = useUserState();
  return <div>Homepage - {data?.name}</div>;
};
