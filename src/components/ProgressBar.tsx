export default function ProgressBar({
  percProgress,
}: {
  percProgress: number;
}) {
  return (
    <div
      role="progressbar"
      className="relative w-full h-4 bg-blue-50 rounded-lg overflow-hidden"
    >
      <div
        data-testid="progress-bar-progress"
        className="absolute bg-blue-500 left-0 top-0 bottom-0"
        style={{ width: `${percProgress}%` }}
      ></div>
      <div className="relative text-center w-full text-xs">{percProgress}%</div>
    </div>
  );
}
