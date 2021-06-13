import MainLayout from "./mainLayout";

const ArticleDetailLayout = ({ children }) => {
  return (
    <MainLayout>
      <div>
        <div className="bannerFondo bg-green-800 bg-left-top bg-auto bg-repeat-x h-64 sm:h-96"></div>
        {children}
      </div>
    </MainLayout>
  );
};

export default ArticleDetailLayout;
