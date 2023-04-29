import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./button";
import { Cancel } from "iconoir-react";

interface CustomDialogProps {
  btnText: React.ReactNode;
  btnIcon: React.ReactNode;
  action: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const CustomDialog = (props: CustomDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button icon={props.btnIcon}>{props.btnText}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/80 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] border border-neutral-800 bg-neutral-900 p-[20px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="mb-5 flex items-center justify-between text-neutral-400">
            <Dialog.Title className="text-md font-medium">
              {props.title}
            </Dialog.Title>
            <Dialog.Close>
              <Cancel width={18} stroke="1" className="hover:text-white" />
            </Dialog.Close>
          </div>
          <div className="mb-5">{props.children}</div>
          <Dialog.Close asChild>{props.action}</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
