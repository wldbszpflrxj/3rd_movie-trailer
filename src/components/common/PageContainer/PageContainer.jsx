import * as Styled from '@/components/common/PageContainer/PageContainer.styled';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

// eslint-disable-next-line react/prop-types
const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default PageContainer;
