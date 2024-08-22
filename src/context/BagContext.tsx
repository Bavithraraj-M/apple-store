import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BagItem {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
}

interface BagContextType {
  bagItems: BagItem[];
  addToBag: (item: BagItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromBag: (id: string) => void;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export const BagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  const addToBag = (item: BagItem) => {
    setBagItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: string) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromBag = (id: string) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag, increaseQuantity, decreaseQuantity, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};
