import { FormProvider, type UseFormReturn } from "react-hook-form";
import { useEffect, type ReactNode } from "react";
import { useAppSelector } from "../../../utils/hooks";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  children: ReactNode;
  onSubmit: (data: unknown) => void;
}

export default function Form({ methods, children, onSubmit }: Props) {
  const { open } = useAppSelector((state) => state.modal);
  useEffect(() => {
    if (!open) {
      methods.reset();
      methods.clearErrors();
    }
  }, [methods.reset, methods.clearErrors, open, methods]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3 w-[60vw] md:w-[40vw] pt-1"
      >
        {children}
      </form>
    </FormProvider>
  );
}
