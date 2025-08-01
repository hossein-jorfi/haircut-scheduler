import { Form } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";

interface Props {
  children: React.ReactNode;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  className?: string;
}

const FormProvider = ({ children, form, onSubmit, className }: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
