import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";

type ListContextType = {
  isOpen: boolean | undefined;
  listItems: Item[];
};

type ListDispatchContextType = {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
  setListItems: Dispatch<SetStateAction<Item[]>>;
};

type Item = {
  id: number;
  name: string;
  quantity: number;
};

const ListContext = createContext<ListContextType | null>(null);
const ListDispatchContext = createContext<ListDispatchContextType | null>(null);

const ListProvider = ({ children }) => {
  // const [isOpen, setIsOpen] = useState<any>(false);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [listItems, setListItems] = useState<Item[]>([]);

  return (
    <ListContext.Provider value={{ isOpen, listItems }}>
      <ListDispatchContext.Provider value={{ setIsOpen, setListItems }}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
export const useListDispatchContext = () => useContext(ListDispatchContext);

export default ListProvider;
