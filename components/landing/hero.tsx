import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const Hero1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Modern CRM Solution
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Streamline Your Customer Relationships
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Manage leads, track deals, and nurture customer relationships all in one place. 
              Our intuitive CRM helps you close more deals and grow your business faster.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto" asChild>
                <a href="/dashboard">Start Free Trial</a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => { redirect('https://vly.ai')}}>
                Book Demo
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <img
            src="/block.png"
            alt="CRM Dashboard Preview"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
