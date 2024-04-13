import React, { useEffect, useState } from "react";

const Page2 = () => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    const storedAddress = localStorage.getItem("address") || "";
    const storedCity = localStorage.getItem("city") || "";
    const storedState = localStorage.getItem("state") || "";
    const storedZipCode = localStorage.getItem("zipCode") || "";
    const storedCountry = localStorage.getItem("country") || "";

    setAddress(storedAddress);
    setCity(storedCity);
    setState(storedState);
    setZipCode(storedZipCode);
    setCountry(storedCountry);
  }, []);

  const handleAddressChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
    localStorage.setItem("address", newAddress);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = event.target.value;
    setCity(newCity);
    localStorage.setItem("city", newCity);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.value;
    setState(newState);
    localStorage.setItem("state", newState);
  };

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newZipCode = event.target.value;
    setZipCode(newZipCode);
    localStorage.setItem("zipCode", newZipCode);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCountry = event.target.value;
    setCountry(newCountry);
    localStorage.setItem("country", newCountry);
  };

  return (
    <div className="m-8">
      <div className="flex flex-row gap-10">
        <div>2/3</div>
        <div className="font-montserrat">Store Creation</div>
      </div>
      <h1 className="my-4 text-3xl text-[#211A1D]">Enter Store Address</h1>
      <p className="text-[#211A1D] font-montserrat">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu blandit
        elit, in ligula.
      </p>

      <div className="mb-2 mt-6">
        <p className="text-[#211A1D] mb-1">Address</p>
        <textarea
          className="h-fit w-[80vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
          placeholder="Enter the address of your store"
          rows={3}
          value={address}
          onChange={handleAddressChange}
        ></textarea>
      </div>
      <div className="flex flex-col w-[80vw] justify-between">
        <div className="flex flex-row justify-between">
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">City</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              placeholder="Enter City"
              value={city}
              onChange={handleCityChange}
            ></input>
          </div>
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">State</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              placeholder="Enter State"
              value={state}
              onChange={handleStateChange}
            ></input>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">Zip Code</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={handleZipCodeChange}
            ></input>
          </div>
          <div className="mb-2 mt-6">
            <p className="text-[#211A1D] mb-1">Country</p>
            <input
              className="h-12 w-[38vw] bg-white rounded-lg p-2 border-2 border-gray-200 placeholder-[#211a1d80]"
              placeholder="Enter Country"
              value={country}
              onChange={handleCountryChange}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
