import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function MdxComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
