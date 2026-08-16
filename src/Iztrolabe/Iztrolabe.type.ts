import { IztroInput } from "iztro-hook/lib/index.type";
import { NestedProps } from "../config/types";

export type AstroType = NonNullable<IztroInput["astroType"]>;
export type Algorithm = NonNullable<
  NonNullable<IztroInput["options"]>["algorithm"]
>;

export type IztrolabeProps = {
  width?: number | string;
  horoscopeDate?: string | Date;
  horoscopeHour?: number;
  centerPalaceAlign?: boolean;
} & IztroInput &
  NestedProps;
