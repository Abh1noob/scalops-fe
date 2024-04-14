import React, { useEffect, useState } from "react";
import PrimaryButton from "../primaryButton";
import { usePageCountStore } from "@/store/store";

const KycDetails = () => {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const { pageCount, setPageCount } = usePageCountStore();

  useEffect(() => {
    const kycDataString = localStorage.getItem("kycData");
    if (kycDataString) {
      const kycData = JSON.parse(kycDataString);
      const documentTypeElement = document.getElementById(
        "documentType"
      ) as HTMLInputElement;
      if (documentTypeElement) {
        documentTypeElement.value = kycData.documentType;
      }
      setUploadedFileName(kycData.documentUpload);
    }
  }, []);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmit = () => {
    setPageCount(pageCount + 1);
  };

  return (
    <div>
      <div className="mx-auto items-start flex flex-col mt-8 w-[80vw] h-fit justify-around">
        <h1 className="self-start text-3xl ">KYC Details</h1>
        <div className="items-center flex flex-col ">
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Document Type</p>
            <select
              id="documentType"
              className="h-fit w-[80vw] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              defaultValue="- select -"
            >
              <option>- select -</option>
              <option>PAN Card</option>
              <option>GST CERTIFICATE</option>
            </select>
          </div>
          <div className="my-2">
            <p className="text-[#211A1D] mb-1">Document Upload</p>
            <input
              id="documentUpload"
              type="file"
              className="h-fit w-[80vw] bg-white rounded-lg p-4 border-2 border-gray-200 placeholder-[#211a1d80]"
              onChange={handleFileChange}
            />
            {uploadedFileName && (
              <p className="text-sm mt-1">Uploaded file: {uploadedFileName}</p>
            )}
            <div className="flex items-center justify-center w-[80vw] my-6">
              <PrimaryButton label="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
