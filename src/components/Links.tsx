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
    <div className="sticky top-0 items-center justify-center gap-7">
      <div className="grid grid-cols-[3fr_2fr]">
        <div className="col-start-2 flex justify-center">
          <div className="flex justify-center gap-5 rounded-b-2xl bg-stone-950 px-4 py-2 text-3xl">
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
      </div>
    </div>
  );
}
