import PageButton from "./PageButton";

export default function Paginator({
  prev,
  next,
}: {
  prev: Function | null;
  next: Function | null;
}) {
  return (
    <div className="flex flex-row gap-2 my-4">
      <PageButton onClick={(e) => prev!()} isDisabled={prev === null}>
        Prev
      </PageButton>
      <PageButton onClick={() => next!()} isDisabled={next === null}>
        Next
      </PageButton>
    </div>
  );
}
