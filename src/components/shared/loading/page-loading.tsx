import LoadingSpinner from "./loading-spinner";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <LoadingSpinner size={50} />
    </div>
  );
};

export default PageLoading;
