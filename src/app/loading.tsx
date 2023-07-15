const loading = () => {
  return (
    <div className="fixed z-50 bg-main h-screen w-screen">
      <div
        className="absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-24 h-24 border-r-8 border-r-color-active-all border-8 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
