const Background = () => {
  return (
    <>
      {/* Animated gradient background */}
      <div className="bg-decoration">
        <div className="bg-decoration-item bg-decoration-item-1"></div>
        <div className="bg-decoration-item bg-decoration-item-2"></div>
        <div className="bg-decoration-item bg-decoration-item-3"></div>
        <div className="bg-decoration-item bg-decoration-item-4"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="bg-grid"></div>

      {/* Vignette effect */}
      <div className="bg-vignette"></div>
    </>
  );
};

export default Background;
