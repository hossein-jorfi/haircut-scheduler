import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router";
import Shape from "../shared/shape";
import OrLine from "../shared/or-line";
import AuthProviders from "../shared/auth-providers";
import TermsAndConditionsLinks from "../shared/terms-and-conditions-links";
import FormHeading from "../shared/form-heading";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import FormProvider from "@/components/form/form-provider";
import RhfInput from "@/components/form/rhf-input";

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "لطفا نام کاربری را وارد کنید",
  }),
  email: z
    .string()
    .min(1, {
      message: "لطفا ایمیل خود را وارد کنید",
    })
    .email({
      message: "لطفا ایمیل را به درستی وارد کنید",
    }),
  password: z.string().min(1, {
    message: "لطفا رمز عبور را وارد کنید",
  }),
  password2: z.string().min(1, {
    message: "لطفا رمز عبور را تایید وارد کنید",
  }),
});
export function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof FormSchema>) => {
      return api.post("accounts/register/", data);
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (isPending) return;

    mutate(data, {
      onSuccess: (res) => {
        console.log(res);
        toast.success("حساب شما ساخته شد");
        navigate("../login");
      },
      onError: (err) => {
        toast.error(
          /* eslint-disable  @typescript-eslint/no-explicit-any */
          (err as any)?.response?.data?.detail || "مشکلی پیش آمده است!"
        );
      },
    });
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <FormProvider form={form} onSubmit={onSubmit} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <FormHeading
                title="ثبت نام"
                description="ساخت حساب کاربری جدید"
              />
              <RhfInput form={form} name="username" label="نام کاربری" />
              <RhfInput form={form} name="email" label="ایمیل" />
              <RhfInput form={form} name="password" label="رمز عبور" />
              <RhfInput form={form} name="password2" label="تایید رمز عبور" />
              <Button type="submit" className="w-full" disabled={isPending}>
                ثبت نام
              </Button>
              <OrLine />
              <AuthProviders />
              <div className="text-center text-sm">
                حساب کاربری دارید؟{" "}
                <Button variant="link" className="p-0 m-0 h-fit" asChild>
                  <Link to="../login">ورود</Link>
                </Button>
              </div>
            </div>
          </FormProvider>
          <Shape />
        </CardContent>
      </Card>
      <TermsAndConditionsLinks />
    </div>
  );
}
