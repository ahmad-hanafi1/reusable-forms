import { FormProvider, type UseFormReturn } from "react-hook-form";
import { type ReactNode } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  children: ReactNode;
  onSubmit: (data: unknown) => void;
}

export default function Form({ methods, children, onSubmit }: Props) {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3 min-w-[30vw]"
      >
        {children}
      </form>
    </FormProvider>
  );
}
