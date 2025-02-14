import { Button } from "@/components/ui/button";

const CTA10 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Take the next step towards transforming your workflow with our platform
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outline"><a href="https://vly.ai">Learn More</a></Button>
            <Button asChild>
              <a href="/dashboard">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA10;
