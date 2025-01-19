
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
      Welcome to ElegantStore!
      </main>

      {/* Footer (اختياري) */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;