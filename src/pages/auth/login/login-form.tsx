import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import Shape from "../shared/shape";
import AuthProviders from "../shared/auth-providers";
import OrLine from "../shared/or-line";
import TermsAndConditionsLinks from "../shared/terms-and-conditions-links";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">ورود</h1>
                <p className="text-muted-foreground text-balance">
                  ورود به حساب کاربری
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  dir="ltr"
                  lang="en"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">رمز عبور</Label>

                  <Button variant="link" className="p-0 m-0 h-fit">
                    رمز عبور خود را فراموش کرده اید؟
                  </Button>
                </div>
                <Input id="password" type="password" required />
              </div>
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
          </form>
          <Shape />
        </CardContent>
      </Card>
      <TermsAndConditionsLinks />
    </div>
  );
}
