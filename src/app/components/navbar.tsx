"use client";
//
// import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// import { Menu, X, BookOpen } from "lucide-react";
//
// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//   return (
//     <nav className="bg-primary text-primary-foreground shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <BookOpen className="h-8 w-8" />
//             <span className="font-serif font-bold text-xl">Al-Quran</span>
//           </div>
//
//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a
//                 href="#home"
//                 className="hover:text-accent transition-colors duration-200 font-medium"
//               >
//                 Beranda
//               </a>
//               <a
//                 href="#features"
//                 className="hover:text-accent transition-colors duration-200 font-medium"
//               >
//                 Fitur
//               </a>
//               <a
//                 href="#about"
//                 className="hover:text-accent transition-colors duration-200 font-medium"
//               >
//                 Tentang
//               </a>
//               <a
//                 href="#contact"
//                 className="hover:text-accent transition-colors duration-200 font-medium"
//               >
//                 Kontak
//               </a>
//             </div>
//           </div>
//
//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <Button variant="secondary" className="font-medium">
//               Mulai Membaca
//             </Button>
//           </div>
//
//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-primary-foreground hover:text-accent"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </Button>
//           </div>
//         </div>
//
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary-foreground/20">
//               <a
//                 href="#home"
//                 className="block px-3 py-2 text-base font-medium hover:text-accent transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Beranda
//               </a>
//               <a
//                 href="#features"
//                 className="block px-3 py-2 text-base font-medium hover:text-accent transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Fitur
//               </a>
//               <a
//                 href="#about"
//                 className="block px-3 py-2 text-base font-medium hover:text-accent transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Tentang
//               </a>
//               <a
//                 href="#contact"
//                 className="block px-3 py-2 text-base font-medium hover:text-accent transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Kontak
//               </a>
//               <div className="px-3 py-2">
//                 <Button variant="secondary" className="w-full font-medium">
//                   Mulai Membaca
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
