
export default function footer() {
    return (
        <footer className="bg-black text-white py-8  ">
            <div className="flex flex-col">
                <h1 className="flex justify-center">
                    Questions? Contact Us
                </h1>
                <ul className="grid grid-cols-2 md:grid-cols-4  gap-4 mt-8 mx-25 p-4">

                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Account</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Media center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Investor Relations</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Ways to Watch</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Cookie Preferences</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Corporate Information</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Speed Test</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Legal Notices</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Only on Fliix</a></li>


                </ul>
                <div className="mt-6 mx-30">
                    <select name="language" id="language" className="bg border border-gray-500 rounded-xs py-1">
                        <option value="en" className="text-black">English</option>
                        <option value="fr" className="text-black">French</option>
                        <option value="es" className="text-black">Spanish</option>
                    </select>
                </div>
                </div>
        </footer>
    )
}