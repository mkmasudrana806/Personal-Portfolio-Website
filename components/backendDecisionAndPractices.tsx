import Image from "next/image";

// Asynchronous and Synchoronous processing
const asyncAndSyncProcessing = [
  ,
  <>
    <span className="text-chart-2/60">✔</span> Improves{" "}
    <span className="text-accent font-medium">API response time</span>
  </>,
  <>
    <span className="text-chart-2/60">✔</span> Increases{" "}
    <span className="text-accent font-medium">fault tolerance</span>
  </>,
  <>
    <span className="text-chart-2/60">✔</span> Enables retry and failure
    isolation
  </>,
  <>
    {" "}
    <span className="text-chart-5/60">✖</span> Adds operational complexity and
    queue monitoring
  </>,
];

// schema design and validation =
const designAndValidation = [
  <>
    <span className="text-chart-2/60">✔</span> Protects data integrity at the
    database layer
  </>,
  <>
    <span className="text-chart-2/60">✔</span> Simplifies downstream business
    logic
  </>,
  <>
    <span className="text-chart-2/60">✔</span> Produces predictable and
    debuggable failures
  </>,
  <>
    {" "}
    <span className="text-chart-5/60">✖</span> Requires upfront schema
    definition and maintenance
  </>,
];

// engineering best practices
const engineeringBestPractices = [
  ,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Structured{" "}
    <span className="text-accent font-medium">request/response logs</span> for
    traceability
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Enforcing strict{" "}
    <span className="text-accent font-medium">input validation</span> at API
    boundaries
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Centralized{" "}
    <span className="text-accent font-medium">error handling</span> with
    consistent error shapes and{" "}
    <span className="text-accent">meaningful status codes</span>
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Use of{" "}
    <span className="text-accent font-medium">environment variables</span> for
    config isolation
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Structuring logs and errors to
    make production issues{" "}
    <span className="text-accent">easier to diagnose</span>
  </>,
];

// for performance and reliability and quality
const performanceAndQuality = [
  ,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span>{" "}
    <span className="text-accent">Modular service</span> layers separating API,
    logic, and data access
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span>{" "}
    <span className="text-accent font-medium">Rate limiting</span> to protect
    services under load
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span> Efficient{" "}
    <span className="text-accent">indexing strategies</span> for fast data
    access
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span>{" "}
    <span className="text-accent">Optimistic retries</span> and timeout
    configurations
  </>,
  <>
    {" "}
    <span className="text-chart-2/60">✔</span>{" "}
    <span className="text-accent"> Implementing Caching strategies </span> for
    frequent data access
  </>,
];

const EngineeringDecisionBackend = () => {
  return (
    <section id="experiences" className="relative w-full mt-16 md:mt-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            <p className="text-sm text-foreground/70 font-medium">
              Backend Decision & Trade-off
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Backend Principles &{" "}
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Engineering Practices
            </span>
            <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
          </h2>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            I treat backend systems as long-lived assets. My focus is on{" "}
            <span className="text-accent font-medium">correctness</span>,{" "}
            <span className="text-accent font-medium">Reliability</span>,{" "}
            <span className="text-accent font-medium">Maintainability</span>,{" "}
            <span className="text-accent font-medium">predictability</span>, and{" "}
            <span className="text-accent font-medium">safe failure</span> under
            real-world conditions. These are the backend trade-off and
            engineering practices I follow to ensure systems perform well.
          </p>
        </div>

        {/* backend trade-off 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12 items-start">
          {/* Decision Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Asynchronous Processing vs Synchronous APIs
            </h3>
            <p className="text-foreground/65 leading-relaxed mb-6">
              For long-running or unpredictable tasks, I avoid blocking request
              lifecycles. Instead, I decouple execution using{" "}
              <span className="text-accent font-medium">
                background job queues
              </span>
              .
            </p>
            <ul className="space-y-2 md:space-y-3 text-foreground/65 leading-relaxed">
              {asyncAndSyncProcessing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="order-1 md:order-2 rounded-2xl border border-border/50 bg-card/40">
            <Image
              className="w-full"
              src="/asynchronous-and-synchronous-diagram.webp"
              alt="Asynchronous and Synchronous diagram"
              width={100}
              height={100}
            />
            <figcaption className="text-center mt-2 text-foreground/70">
              Fig. 2: Asynchronous and Synchronous APIs flow example.
            </figcaption>
          </figure>
        </div>

        {/* backend trade-off 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 mt-12 md:mt-16 items-start">
          {/* Decision Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Schema Design & Validation at System Boundaries
            </h3>

            <p className="text-foreground/65 leading-relaxed mb-6">
              I enforce strict{" "}
              <span className="text-accent font-medium">input validation</span>{" "}
              at API boundaries to prevent invalid data from entering the
              system.
            </p>
            <ul className="space-y-2 md:space-y-3 text-foreground/65 leading-relaxed">
              {designAndValidation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Diagram */}
          <figure className="order-1 md:order-2 rounded-2xl border border-border/50 bg-card/40">
            <Image
              className="w-full"
              src="/input-validation-diagram.webp"
              width={100}
              height={100}
              alt="Example of input data validation in server"
            />
            <figcaption className="text-center mt-2 text-foreground/70">
              Fig. 3: Example of input data validation in server and shows
              request response and error flows.
            </figcaption>
          </figure>
        </div>

        {/* Engineering Practices  */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14">
          {/* Engineering practices i follow */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Engineering Practices I Follow
            </h3>

            <ul className="space-y-2 md:space-y-3 text-foreground/65 leading-relaxed">
              {engineeringBestPractices.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Performance, Reliability and Quality */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Performance, Reliability and Quality
            </h3>
            <ul className="space-y-2 md:space-y-3 text-foreground/65 leading-relaxed">
              {performanceAndQuality.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringDecisionBackend;
