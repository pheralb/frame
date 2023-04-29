import { useBackgroundSettings } from "@/store/settings";

export const ChangeBgPadding = () => {
  const { padding, setPadding } = useBackgroundSettings((state) => ({
    padding: state.padding,
    setPadding: state.updatePadding,
  }));
  return (
    <div className="flex flex-col space-y-1">
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
  const { rounded, setRounded } = useBackgroundSettings((state) => ({
    rounded: state.rounded,
    setRounded: state.updateRounded,
  }));
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
