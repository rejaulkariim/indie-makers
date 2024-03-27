import FeedbackDialog from './FeedbackDialog';
import MaxWidthWrapper from './MaxWidthWrapper';
import UserAccountNav from './UserAccountNav';

const Navbar = () => {
  return (
    <header className="h-14 flex justify-center items-center w-full">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold">Indie Makers</h1>
          </div>

          <div className="flex gap-2 items-center">
            <FeedbackDialog />
            <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
              Beta
            </span>

            <div>
              <UserAccountNav />
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
