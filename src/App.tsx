import { useState } from "react";
import HeaderClient from "./components/HeaderClient";
import ListingBody from "./components/ListingBody";
import { ContextCountItem } from "./utils/context-count";

export default function App() {

  const [contextCountItem, setContextCountItem] = useState<number>(0);

  return (
    <ContextCountItem.Provider value={{ contextCountItem, setContextCountItem }}>

      <HeaderClient />
      <ListingBody />
    </ContextCountItem.Provider>
  );
}