import { useImageSettings } from "@/store/settings";

export const ChangePadding = () => {
  const padding = useImageSettings((state) => state.padding);
  const setPadding = useImageSettings((state) => state.updatePadding);
  return (
    <div className="mb-3 flex flex-col space-y-1">
      <label htmlFor="padding">Padding:</label>
      <div className="flex w-full items-center space-x-2">
        <input
          id="padding"
          type="range"
          min="0"
          max="100"
          value={padding}
          onChange={(e) => setPadding(parseInt(e.target.value))}
        />
        <span className="text-neutral-500">{padding}px</span>
      </div>
    </div>
  );
};

export const ChangeRounded = () => {
  const rounded = useImageSettings((state) => state.rounded);
  const setRounded = useImageSettings((state) => state.updateRounded);
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="rounded">Rounded:</label>
      <div className="flex w-full items-center space-x-2">
        <input
          id="rounded"
          type="range"
          min="0"
          max="100"
          value={rounded}
          onChange={(e) => setRounded(parseInt(e.target.value))}
        />
        <span className="text-neutral-500">{rounded}px</span>
      </div>
    </div>
  );
};
