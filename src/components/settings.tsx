import { useBackgroundSettings, useImageSettings } from "@/store/settings";

export const ChangeBgPadding = () => {
  const padding = useBackgroundSettings((state) => state.padding);
  const setPadding = useBackgroundSettings((state) => state.updatePadding);
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

export const ChangeBgRounded = () => {
  const rounded = useBackgroundSettings((state) => state.rounded);
  const setRounded = useBackgroundSettings((state) => state.updateRounded);
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

export const ChangeImgSize = () => {
  const size = useImageSettings((state) => state.size);
  const setSize = useImageSettings((state) => state.updateSize);
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="width">Size:</label>
      <div className="flex items-center space-x-1">
        <input
          id="width"
          type="number"
          min="0"
          maxLength={500}
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          className="w-40 rounded-md border border-neutral-700 px-2 py-1 focus:border-neutral-500 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:focus:border-neutral-700"
        />
        <span className="text-neutral-500">px</span>
      </div>
    </div>
  );
};
