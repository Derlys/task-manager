import Image from "next/image";
const navigation = {
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: "/instagram.png",
    },
    {
      name: "Twitch",
      href: "#",
      icon: "/twitch.png",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "/youtube.png",
    },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8"></div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <Image src={item.icon} alt={item.name} width={24} height={24} />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
