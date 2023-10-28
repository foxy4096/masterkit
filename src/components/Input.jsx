/* eslint-disable react/prop-types */
const CustomInput = ({ type, placeholder, onChange, extraClass }) => {
  return (
    <div className="flex justify-center items-center pt-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg space-x-2">
        <input
          type={type}
          className={`w-64 py-2 px-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none ${extraClass}`}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomInput;
