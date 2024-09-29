export const CommonComp = ({handleInputChange,inputData ={},handleSubmit,buttonName,handleCloseSignUp})=>{

    return<>
    <form className="mt-6" >
          <div>
            <label className="block text-sm text-gray-800">Username</label>
            <input
              type="text"
              name="username"
              value={inputData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-800">Password</label>
            <input
              type="password"
              name="password"
              value={inputData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-800">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={inputData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mt-6">
            <button
            onClick={handleSubmit}
             
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              
              {buttonName}
            </button>
          </div>
          <button
          onClick={handleCloseSignUp}
          className="mt-4 w-full px-4 py-2 tracking-wide text-gray-600 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        >
          Close
        </button>
        </form>
    </>
}
