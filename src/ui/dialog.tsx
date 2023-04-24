import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./button";

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
        <Button wFull icon={props.btnIcon}>
          {props.btnText}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal className="font-sans">
        <Dialog.Overlay className="fixed inset-0 bg-neutral-400/50 data-[state=open]:animate-overlayShow dark:bg-neutral-900/60" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border border-neutral-700 p-[22px] focus:outline-none data-[state=open]:animate-contentShow dark:bg-neutral-900">
          <Dialog.Title className="mb-2 text-xl font-medium">
            {props.title}
          </Dialog.Title>
          <div className="mb-4">{props.children}</div>
          <Dialog.Close asChild>{props.action}</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
