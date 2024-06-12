import Link from "next/link";
import "./globals.css";

export default function MyPageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <header className="bg-slate-200 h-20 border-b-4 text-gray-600 border-gray-400">
            <nav className="flex justify-between">
              <ul className="flex justify-start ml-10">
                <li className="mr-6 p-6 ">
                  <a href="#">Home</a>
                </li>
                <li className="mr-6 p-6">
                  <a href="#">My work</a>
                </li>
                <li className="mr-6 p-6">
                  <a href="#">Contact information</a>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer>
            <div className="bg-slate-200 flex justify-center flex-col text-gray-600 py-6 border-gray-400 border-t-4">
              <h6 className="flex justify-center">Contact me:</h6>
              <div className="flex justify-center">
                <div>Phone: &nbsp; </div>
                <div>070 763 08 71</div>
              </div>
              <div className="flex justify-center">
                <div>E-mail: &nbsp;</div>
                <a>hedi_r@hotmail.com</a>
              </div>
              <div className="links flex justify-center space-x-6 pt-12">
                <a>Linkedin</a>
                <a>Github</a>
                <a>link</a>
                <a>link</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
