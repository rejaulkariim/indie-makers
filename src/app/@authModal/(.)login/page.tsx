import CloseModal from '@/components/shared/closeModal/CloseModal';
import Login from '@/components/shared/login/Login';

const page = () => {
  return (
    <div className="fixed inset-0 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-background border w-full h-fit py-20 px-4 rounded-xl">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <Login />
        </div>
      </div>
    </div>
  );
};

export default page;
