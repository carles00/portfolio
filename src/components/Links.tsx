import { ReactNode } from "react";
import Github from "../svgs/Github";
import Gmail from "../svgs/Gmail";
import LinkedIn from "../svgs/Linkedin";

interface Props {
  children: ReactNode;
  url: string;
}

function Link({ children, url }: Props) {
  return (
    <a
      className="transition-transform hover:scale-120"
      href={url}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Links() {
  return (
    <div className="fixed flex top-0 right-0 items-center justify-center gap-7 p-2 w-20 h-full">
      <div className="flex flex-col justify-center gap-5 text-3xl">
        <Link url="https://www.linkedin.com/in/carles-gallardo-ramirez/">
          <LinkedIn />
        </Link>
        <Link url="https://github.com/carles00">
          <Github />
        </Link>
        <Link url="mailto:carles.gallardo00@gmail.com">
          <Gmail />
        </Link>
      </div>
    </div>
  );
}
