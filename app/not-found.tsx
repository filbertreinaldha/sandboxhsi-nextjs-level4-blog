const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen font-opensans">
      <h1 className="text-3xl">Something went wrong!</h1>
      <h2 className="text-2xl text-zinc-500">
        The page you're looking for is not found or some parameters are
        incorrect.
      </h2>
    </div>
  );
};

export default NotFoundPage;
