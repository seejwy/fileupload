import { MouseEventHandler, ReactNode } from "react";

export default function PageButton({
  children,
  onClick,
  isDisabled,
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
  isDisabled: boolean;
}) {
  return (
    <button
      type="button"
      className="border-2 rounded-md px-2 bg-blue-500 text-white disabled:opacity-50"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
