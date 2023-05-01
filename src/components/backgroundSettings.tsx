import { useBackgroundSettings } from "@/store/settings";
import { Slider } from "@/ui";

export const ChangeBgPadding = () => {
  const { padding, setPadding } = useBackgroundSettings((state) => ({
    padding: state.padding,
    setPadding: state.updatePadding,
  }));
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="padding">Padding:</label>
      <div className="flex w-full items-center space-x-2">
        <Slider
          id="padding"
          defaultValue={[padding]}
          onValueChange={(e) => setPadding(e[0])}
          step={1}
          max={100}
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
        <Slider
          id="rounded"
          defaultValue={[rounded]}
          onValueChange={(e) => setRounded(e[0])}
          step={1}
          max={100}
        />
        <span className="text-neutral-500">{rounded}px</span>
      </div>
    </div>
  );
};
