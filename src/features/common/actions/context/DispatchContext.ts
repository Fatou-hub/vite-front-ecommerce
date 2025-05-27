import { createContext } from "react";
import { Dispatch } from "react";
import { ActionData } from "../types";

export const DispatchContext = createContext<Dispatch<ActionData> | null>(null);