import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="mt-8 bg-section pt-8 px-4 pb-4">
      <div className="mb-10 border-b border-white/20 pb-4">
        <div className="flex flex-col gap-2">
          <Image src={'/logo.svg'} alt="Logo" width={108} height={26} />
          <span className="text-xs font-light text-white/90">Receba atualizações de preços, dicas de compras e muito mais!</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-white">Empresa</span>
          <ul className="text-white/80 text-sm flex flex-col gap-2">
            <li><Link href={'/'}>Sobre nós</Link></li>
            <li><Link href={'/'}>Blog</Link></li>
            <li><Link href={'/'}>Serviços</Link></li>
            <li><Link href={'/'}>FAQs</Link></li>
            <li><Link href={'/'}>Termos</Link></li>
            <li><Link href={'/'}>Contate-nos</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white">Links rápidos</span>
          <ul className="text-white/80 text-sm flex flex-col gap-2">
            <li><Link href={'/'}>Entre em contato</Link></li>
            <li><Link href={'/'}>Central de ajuda</Link></li>
            <li><Link href={'/'}>Bate-papo ao vivo</Link></li>
            <li><Link href={'/'}>Como funciona</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white">Nossas Marcas</span>
          <ul className="text-white/80 text-sm flex flex-col gap-2">
            <li><Link href={'/'}>Toyota</Link></li>
            <li><Link href={'/'}>Porsche</Link></li>
            <li><Link href={'/'}>Audi</Link></li>
            <li><Link href={'/'}>BMW</Link></li>
            <li><Link href={'/'}>Ford</Link></li>
            <li><Link href={'/'}>Nissan</Link></li>
            <li><Link href={'/'}>Peugeot</Link></li>
            <li><Link href={'/'}>Volkswagen</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white">Tipo de veículos</span>
          <ul className="text-white/80 text-sm flex flex-col gap-2">
            <li><Link href={'/'}>Sedan</Link></li>
            <li><Link href={'/'}>Hatchback</Link></li>
            <li><Link href={'/'}>SUV</Link></li>
            <li><Link href={'/'}>Hybrid</Link></li>
            <li><Link href={'/'}>Electric</Link></li>
            <li><Link href={'/'}>Coupe</Link></li>
            <li><Link href={'/'}>Truck</Link></li>
            <li><Link href={'/'}>Convertible</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-white">Conecte-se conosco</span>
          <ul className="text-white/80 text-xl flex gap-4">
            <li><Link href={'/'}><FiInstagram /></Link></li>
            <li><Link href={'/'}><FiFacebook /></Link></li>
            <li><Link href={'/'}><FiYoutube /></Link></li>
          </ul>
        </div>
      </div>
      <div className="py-2 text-white text-xs flex justify-between border-t border-white/20 mt-4 pt-4">
        <span>© 2024 exemple.com. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href={'/'}>Terms & Conditions</Link>
          <Link href={'/'}>Privacy Notice</Link>
        </div>
      </div>
    </footer>
  )
}