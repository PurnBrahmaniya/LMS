function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h3 className="text-2xl mb-6">Page Not Found</h3>
      <p className="text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
