import {
    BarChart3,
    Users,
    MessageSquare,
    Timer,
    Zap,
    LineChart,
  } from "lucide-react";
  
  const features = [
    {
      title: "Lead Management",
      description:
        "Track and manage leads through your sales pipeline with automated scoring and prioritization.",
      icon: <Users className="size-4 md:size-6" />,
    },
    {
      title: "Sales Analytics",
      description:
        "Get real-time insights into your sales performance with customizable dashboards and reports.",
      icon: <BarChart3 className="size-4 md:size-6" />,
    },
    {
      title: "Contact Management",
      description:
        "Keep all your customer information organized and accessible in one centralized database.",
      icon: <MessageSquare className="size-4 md:size-6" />,
    },
    {
      title: "Task Automation",
      description:
        "Automate repetitive tasks and workflows to save time and reduce manual effort.",
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: "Email Integration",
      description:
        "Seamlessly integrate with your email to track communications and set follow-up reminders.",
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor team performance and track progress towards sales goals in real-time.",
      icon: <LineChart className="size-4 md:size-6" />,
    },
  ];
  
  const Feature17 = () => {
    return (
      <section className="py-32">
        <div className="container mx-auto max-w-screen-xl">
          <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
          <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
            Everything You Need to Manage Customer Relationships
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