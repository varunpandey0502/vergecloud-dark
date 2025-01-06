import React, { Dispatch, SetStateAction } from "react";

export const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  id: number;
}) => {
  return (
    <button
      onClick={() => setSelected(id)}
      className={`w-fit rounded-full px-8 py-4 text-base font-medium min-w-fit transition-all ${
        selected === id
          ? "bg-primary/20 text-white border-2 border-primary/50"
          : "bg-transparent text-white/60 hover:text-white border-2 border-white/10 hover:border-white/20"
      }`}
    >
      {children}
    </button>
  );
};
