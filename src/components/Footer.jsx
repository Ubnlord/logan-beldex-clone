export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E32] py-16 px-6 bg-[#0A0A18]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#A0A0B8] text-[14px]">
              <li><a href="#" className="hover:text-[#2AF5D4] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Blog</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-[#A0A0B8] text-[14px]">
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Help Center</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Documentation</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#A0A0B8] text-[14px]">
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-[#A0A0B8] text-[14px]">
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Twitter</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">Discord</a></li>
              <li><a href="#" className="hover:text-[#2AF5D4] transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E1E32] pt-8 flex flex-col md:flex-row justify-between items-center text-[#A0A0B8] text-[14px]">
          <p>&copy; 2024 Logan-Beldex. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
