import type { CustomNextPage } from "next";
import DropImageZone from "src/components/DropImageZone";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold whitespace-nowrap">Chrome Extension Template</h1>
      <DropImageZone onDropFile={(file) => console.log(file)}>
        <div className="flex justify-center items-center w-96 h-96 bg-gray-100">
          <p>Drop image here</p>
        </div>
      </DropImageZone>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
