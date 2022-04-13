import { useRouter } from "next/router";
import DogsSinglePage from "../../src/pages/dogs/single/DogsSinglePage";

const Page = ({ props }) => {
  const router = useRouter();
  const { dogName } = router.query;

  return <DogsSinglePage dogName={dogName} {...props} />;
};
Page.title = "Dog";
Page.description = null;
Page.auth = false;
Page.layout = "default";
export default Page;
