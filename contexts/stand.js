import { createContext, useContext, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";

const StandContext = createContext({
  standData: [],
  error: undefined,
  updateStand: undefined,
});

export function useStand() {
  const stand = useContext(StandContext);
  if (!stand) {
    throw new Error("You forgot StandProvider!");
  }
  return stand;
}

export function StandProvider(props) {
  const [state, setState] = useState({
    standData: [
      {
        location: "Providence",
        minCus: 1,
        maxCus: 5,
        avgCookies: 10,
        hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      },
      {
        location: "Waterville",
        minCus: 3,
        maxCus: 7,
        avgCookies: 15,
        hourlySales: [76, 87, 56, 67, 49, 55, 56, 81, 90, 77, 103, 33, 12, 43],
      },
    ],
    error: undefined,
  });

  const updateStand = async (nextStand) => {
    try {
      // TODO: fully implement + QA fetch req
      const options = {
        method: "POST",
        body: JSON.stringify(nextStand),
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(tokenUrl, options);

      const data = await response.json();

      console.log("updateStand:data", { nextStand, data });

      setState((prevState) => ({ ...prevState, standData: [...prevState.standData, nextStand] }));
    } catch (err) {
      const error = `Failed to update cookie stand: ${err instanceof Error ? err.message : err.toString()}`;
      console.error(error, err);
      setState((prevState) => ({ ...prevState, error }));
    }
  };

  return <StandContext.Provider value={{ ...state, updateStand }}>{props.children}</StandContext.Provider>;
}
