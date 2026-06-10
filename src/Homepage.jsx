// Homepage — composition of all home sections in spec order.

function Homepage() {
  return (
    <>
      <HomeHero />
      <AwardsStrip />
      <KeyStats />
      <OfficeOptions />
      <WhyDBV />
      <DirectoryTeaser />
      <Testimonials />
      <NewsPreview />
      <HomeCtaBanner />
    </>
  );
}

window.Homepage = Homepage;
