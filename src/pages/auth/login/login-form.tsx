import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";
import Shape from "../shared/shape";
import AuthProviders from "../shared/auth-providers";
import OrLine from "../shared/or-line";
import TermsAndConditionsLinks from "../shared/terms-and-conditions-links";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormProvider from "@/components/form/form-provider";
import RhfInput from "@/components/form/rhf-input";
import FormHeading from "../shared/form-heading";
import api from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export function LoginForm() {
  const FormSchema = z.object({
    username: z.string().min(1, {
      message: "لطفا نام کاربری خود را وارد کنید",
    }),
    password: z.string().min(1, {
      message: "لطفا رمز عبور خود را وارد کنید",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const loginMutation = useMutation({
  //   mutationFn: (data: z.infer<typeof FormSchema>) => {
  //     return api.post("/auth/login", data);
  //   },
  // });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <FormProvider form={form} onSubmit={onSubmit} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <FormHeading title="ورود" description="ورود به حساب کاربری" />
              <RhfInput form={form} name="username" label="نام کاربری" />
              <RhfInput
                form={form}
                name="password"
                label="رمز عبور"
                labelItem={
                  <Button variant="link" className="p-0 m-0 h-fit">
                    رمز عبور خود را فراموش کرده اید؟
                  </Button>
                }
              />
              <Button type="submit" className="w-full">
                ورود
              </Button>
              <OrLine />
              <AuthProviders />
              <div className="text-center text-sm">
                حساب کاربری ندارید؟{" "}
                <Button variant="link" className="p-0 m-0 h-fit" asChild>
                  <Link to="../register">ثبت نام</Link>
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
