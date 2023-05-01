import { useImageSettings } from "@/store/image";
import { Slider } from "@/ui";

export const ChangeImgRounded = () => {
  const { rounded, setRounded } = useImageSettings((state) => ({
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
