import { createContext } from "react";

export type ContextCountItemType = {
    contextCountItem: number;
    setContextCountItem: (contextCountItem: number) => void;
    //(alternative) setContextCountItem: Function;
}

export const ContextCountItem = createContext<ContextCountItemType>({
    contextCountItem: 20,
    setContextCountItem: () => { }
});