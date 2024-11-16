import React from 'react';
import scrollmasterposter from '../public/scroll-master-poster.png';
import scrollmasterlogo from '../public/scroll-master-logo.png';

const developerviveklink = "https://developervivek.com/"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center flex justify-center items-center">
            {/* <img src={scrollmasterlogo} className="inline-block h-10 w-10 mr-5 rounded-lg" alt="scroll-master-logo" /> */}
            Scroll Master
          </h1>
          <p className="text-center mt-2">Enhance your browsing with auto-scrolling and seamless tab switching.</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-10 w-[50%] mx-auto ">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Introduction</h2>
          <p className=" text-lg">
            Scroll Master is a Chrome Extension designed to simplify browsing by auto-scrolling pages and
            switching tabs seamlessly. Whether you're reading, researching, or monitoring multiple pages, Scroll Master makes it effortless.
          </p>
          <br />
          <p className=" text-lg">
            Imagine presenting your business stats on a big screen to stakeholders. With Scroll Master, you can
            auto-scroll through your slides or web pages without human intervention.
          </p>
        </div>
        <br />
        <div className=''>
          <p className="text-center font-bold text-lg mt-4">
            Applications of Scroll Master include:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Presentations in meetings or conferences.</li>
            <li>Auto-scrolling through live dashboards and stats.</li>
            <li>Reading lengthy web pages or articles hands-free.</li>
            <li>Efficiently navigating multiple tabs for monitoring.</li>
          </ul>
        </div>
      </section>

      {/* Poster Image */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Features at a Glance</h2>
          <div className="flex justify-center">
            <img
              src={scrollmasterposter}
              alt="Scroll Master Poster"
              className="rounded-lg shadow-md w-full max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* How-to-Use Section */}
      <section className="py-10 bg-white px-[10%]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-4">How to Use</h2>
          <ol className="list-decimal list-inside text-lg space-y-4">
            <li>
              Install the Scroll Master extension from the Chrome Web Store.
            </li>
            <li>
              Open the extension's control panel by clicking the Scroll Master icon in the Chrome toolbar.
            </li>
            <li>
              Click on the "Add Links" button to add URLs of the pages you want to scroll through. You can manage these links in the control panel.
            </li>
            <li>
              If the page has a specific area you want to scroll (like a content section), specify the selector:
              <ul className="list-disc ml-6">
                <li>
                  Open the web page and right-click on the section you want to scroll.
                </li>
                <li>
                  Select <b>"Inspect"</b> to open Developer Tools.
                </li>
                <li>
                  Look for the highlighted <b>&lt;div&gt;</b> or <b>&lt;section&gt;</b> tag in the Elements tab.
                </li>
                <li>
                  Copy the class (e.g., <b>.content-class</b>) or ID (e.g., <b>#content-id</b>) from the tag.
                </li>
                <li>
                  Enter the class or ID in the extension panel under the "Scrollable Area" field.
                </li>
              </ul>
            </li>
            <li>
              Set the scrolling interval and distance preferences in the control panel.
            </li>
            <li>
              After saving, click on the Scroll Master icon in the Chrome toolbar and select <b>"Open Saved Tabs"</b> to open all the saved links.
            </li>
            <li>
              When the saved links open, you’ll see a dashboard displaying the <b>scroll time</b> and <b>scroll distance</b>. Here, you can adjust these options as needed.
            </li>
            <li>
              Once you've made your changes, click <b>"Save"</b> again to apply the new settings.
            </li>
            <li>
              To start auto-scrolling and tab switching, click the <b>"Start Scrolling"</b> button.
            </li>
            <li>
              If you wish to stop the process, click the <b>"Stop Scrolling"</b> button.
            </li>
          </ol>
        </div>
      </section>


      {/* Privacy Policy Section */}
      <section className="py-10 bg-gray-50 px-[15%]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Privacy Policy</h2>
          <p className="text-lg">
            Your privacy is important to us. This extension does not collect or transmit any personal information without your consent. We value your trust and are committed to protecting your privacy.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
          <p className="text-lg">
            This extension requires certain permissions to function properly. These permissions are:
          </p>
          <ul className="list-disc list-inside text-lg mt-2">
            <li><b>Tab Management</b>: We request access to open, modify, and switch between tabs for the purpose of auto-scrolling and seamless tab switching.</li>
            <li><b>Local Storage</b>: Your scroll preferences, including scroll interval and distance, are stored locally on your device for future use. No data is sent to external servers.</li>
            <li><b>URL Management</b>: The links you provide are stored locally on your device and are used solely for the intended purpose of auto-scrolling and tab management.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <p className="text-lg">
            The information we collect is used only for the purpose of providing functionality within the extension. This includes:
          </p>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>Managing and saving your scroll settings (scroll interval and distance).</li>
            <li>Opening and switching between tabs based on user preferences.</li>
            <li>Storing links you wish to auto-scroll through, locally on your device.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h3>
          <p className="text-lg">
            We do not share any of your personal data with third parties. All data, including URLs and preferences, is stored locally on your device and used solely for the operation of this extension.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Permissions</h3>
          <p className="text-lg">
            This extension asks for the following permissions:
          </p>
          <ul className="list-disc list-inside text-lg mt-2">
            <li><b>tabs</b>: Allows the extension to interact with your browser tabs, opening new tabs and switching between them.</li>
            <li><b>storage</b>: Allows the extension to store and retrieve user settings (scroll interval, distance, and saved URLs) on your device.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Security</h3>
          <p className="text-lg">
            All data is stored locally on your device, and no information is transmitted to external servers unless explicitly authorized by you. Your privacy and security are our priority.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Your Rights</h3>
          <p className="text-lg">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>Access, modify, and delete the data stored by the extension (e.g., scroll preferences and saved links).</li>
            <li>Revoke permissions at any time through your browser's extension settings.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h3>
          <p className="text-lg">
            We may update this privacy policy to reflect changes in the functionality of the extension or legal requirements. Any updates will be posted here with a revised date.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p className="text-lg">
            If you have any questions or concerns about this privacy policy or the information we collect, please contact us at <a href={developerviveklink} className="text-blue-600 underline">developervivek.com</a>.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Scroll Master by <a className='text-blue-400' href={developerviveklink}>developervivek.com</a> All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
