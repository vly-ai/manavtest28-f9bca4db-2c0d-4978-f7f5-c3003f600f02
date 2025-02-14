import {
    DollarSign,
    MessagesSquare,
    PersonStanding,
    Timer,
    Zap,
    ZoomIn,
  } from "lucide-react";
  
  const features = [
    {
      title: "Feature 1 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: "Feature 2 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Feature 3 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: "Feature 4 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <PersonStanding className="size-4 md:size-6" />,
    },
    {
      title: "Feature 5 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <DollarSign className="size-4 md:size-6" />,
    },
    {
      title: "Feature 6 Name",
      description:
        "Replace with specific feature description. Explain the benefit to the user in 1-2 sentences.",
      icon: <MessagesSquare className="size-4 md:size-6" />,
    },
  ];
  
  const Feature17 = () => {
    return (
      <section className="py-32">
        <div className="container mx-auto max-w-screen-xl">
          <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
          <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
            Our Core Features
          </h2>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature17;
  