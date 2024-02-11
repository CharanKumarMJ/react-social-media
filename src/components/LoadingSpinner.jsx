const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center welcome-message">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
