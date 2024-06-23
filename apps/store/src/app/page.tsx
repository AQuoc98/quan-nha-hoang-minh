import Banner from '../components/banner';
import SearchProduct from '../components/search/search-product';

export default function Index() {
  return (
    <>
      <Banner />
      <div className="sticky top-24 px-3">
        <SearchProduct/>
      </div>
    </>
  );
}
