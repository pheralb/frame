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
      <Dialog.Portal>
        <Dialog.Overlay className="dark:bg-neutral-900/60 bg-neutral-400/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="border border-neutral-700 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] dark:bg-neutral-900 p-[22px] focus:outline-none">
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
