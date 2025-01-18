
import Header from '../../components/common/Header';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
       hhhhhhhhh
      </main>

      {/* Footer (اختياري) */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 MyCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;