const [currentIndex, setCurrentIndex] = useState(0);

const [touchStart, setTouchStart] = useState(0);

const swipeThreshold = 50;

const handleTouchStart = (e) => {
  setTouchStart(e.touches[0].clientX);
  console.log("touchStart:", touchStart);
};

const handleTouchEnd = (e) => {
  const currentTouchEnd = e.changedTouches[0].clientX;
  const currentTouchStart = touchStart;

  console.log("currentTouchStart", currentTouchStart);
  console.log("currentTouchEnd", currentTouchEnd);

  const deltaX = currentTouchStart - currentTouchEnd;

  console.log("deltaX", deltaX);

  const abs = Math.abs(deltaX);

  console.log("abs", abs);

  if (Math.abs(deltaX) > swipeThreshold) {
    // ← abs first
    if (deltaX > 0) {
      handleActiveLink(currentIndex + 1); // Left → next
    } else {
      handleActiveLink(currentIndex - 1); // Right → prev
    }
  }
};
