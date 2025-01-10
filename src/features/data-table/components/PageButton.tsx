import { MouseEventHandler, ReactNode } from "react";

export default function PageButton({
  children,
  onClick,
  isDisabled = false,
  isActive = false,
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
  isDisabled?: boolean;
  isActive?: boolean;
}) {
  return (
    <button
      data-testid="page-button"
      type="button"
      className={`border-2 rounded-md px-2 ${
        isActive ? "bg-blue-500 text-white" : "bg-white text-blue-500"
      } disabled:opacity-50 min-w-12`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
