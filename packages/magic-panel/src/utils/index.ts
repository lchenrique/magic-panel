/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getChildren(value: any[] | any, displayName: string): any {
  const childrenArray: any[] = Array.isArray(value) ? value : [value];

  for (const child of childrenArray) {
    // Verifica se o elemento atual corresponde ao displayName
    if (child?.type?.displayName === displayName) {
      return child as React.ReactElement;
    }

    // Se o elemento atual tem filhos, chama a função recursivamente para procurar nos filhos
    if (child?.props?.children) {
      const nestedChild = getChildren(child.props.children, displayName) as any;

      // Se encontrou o elemento nos filhos, retorna imediatamente
      if (nestedChild) {
        return nestedChild;
      }
    }
  }

  // Retorna undefined se não encontrou o elemento
  return undefined;
}
