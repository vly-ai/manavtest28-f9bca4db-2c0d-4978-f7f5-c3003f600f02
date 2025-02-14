import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonial10 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;This CRM has transformed how we manage our customer relationships. 
            The automation features alone have saved our sales team countless hours, 
            and the insights we get have helped us close 40% more deals.&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground md:text-base">Sales Director, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial10;
