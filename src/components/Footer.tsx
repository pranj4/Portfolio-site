const Footer: React.FC = () => {
  return (
    <footer className="w-full h-full backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 bottom-0 left-0 right-0 bg-gray-900 text-gray-300 py-6 z-50">
      <div className="flex justify-center items-center w-full">
        <p className="text-center text-sm w-full">
          © 2025 Pranjal. Built with{" "}
          <span className="text-blue-400">React</span>,{" "}
          <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
          <span className="text-pink-400">Framer Motion</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
