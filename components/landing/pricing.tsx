"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const Pricing2 = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Choose the plan that best fits your business needs
          </p>
          <div className="flex items-center gap-3 text-lg">
            Monthly
            <Switch
              onCheckedChange={() => setIsYearly(!isYearly)}
              checked={isYearly}
            />
            Yearly
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Starter</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For small teams getting started
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? "$15" : "$19"}
                </span>
                <p className="text-muted-foreground">
                  per user/month, billed {isYearly ? "annually" : "monthly"}
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Up to 1,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Basic lead management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Email integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Basic reporting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full" asChild>
                  <a href="/dashboard">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Professional</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For growing businesses
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? "$35" : "$49"}
                </span>
                <p className="text-muted-foreground">
                  per user/month, billed {isYearly ? "annually" : "monthly"}
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Starter, plus:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Unlimited contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Sales forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Workflow automation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full" asChild>
                  <a href="/dashboard">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
