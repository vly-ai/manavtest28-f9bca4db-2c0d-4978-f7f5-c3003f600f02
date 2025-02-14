const sections = [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "https://vly.ai" },
        { name: "Pricing", href: "https://vly.ai" },
        { name: "Marketplace", href: "https://vly.ai" },
        { name: "Features", href: "https://vly.ai" },
        { name: "Integrations", href: "https://vly.ai" },
        { name: "Pricing", href: "https://vly.ai" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Team", href: "https://vly.ai" },
        { name: "Blog", href: "https://vly.ai" },
        { name: "Careers", href: "https://vly.ai" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "https://vly.ai" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help", href: "https://vly.ai" },
        { name: "Sales", href: "https://vly.ai" },
        { name: "Advertise", href: "https://vly.ai" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Twitter", href: "https://vly.ai" },
        { name: "Instagram", href: "https://vly.ai" },
        { name: "LinkedIn", href: "https://vly.ai" },
      ],
    },
  ];
  
  /**
   * Footer for the landing pages
   * @returns 
   */
  const Footer2 = () => {
    return (
      <section className="py-32">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start">
                  <a href="https://vly.ai">
                    <img
                      src="/logo.png"
                      alt="blocks for shadcn/ui"
                      className="h-10"
                    />
                  </a>
                  <p className="text-xl font-semibold">vly.ai</p>
                </div>
                <p className="mt-4 font-bold">Replacing SWEs, one dev at a time.</p>
              </div>
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>© 2024 Copyright. All rights reserved.</p>
              <ul className="flex gap-4">
                <li className="underline hover:text-primary">
                  <a href="https://vly.ai"> Terms and Conditions</a>
                </li>
                <li className="underline hover:text-primary">
                  <a href="https://vly.ai"> Privacy Policy</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export default Footer2;