const [showContent, setShowContent] = useState(false);

useEffect(() => {
  // 4s preload (video + images)
  const timer = setTimeout(() => {
    gsap.to(".loader", {
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".loader-container", {
          opacity: 0,
          yPercent: -100,
          scale: 1.2,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => setShowContent(true),
        });
      },
    });
  }, 4000);

  return () => clearTimeout(timer);
}, []);

if (!showContent) {
  return <SecondLoader />;
}
