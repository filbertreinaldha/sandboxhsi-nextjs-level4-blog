"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen w-screen font-opensans">
      <h1 className="text-3xl">Something went wrong!</h1>
      <h2 className="text-2xl text-zinc-500">
        {error.message == "NEXT_NOT_FOUND"
          ? "The page you're looking for is not found or some parameters are incorrect."
          : error.message}
      </h2>
      <button
        className="hover:underline hover:text-sky-600"
        onClick={() => reset()}
      >
        Click me to try again.
      </button>
    </div>
  );
}
