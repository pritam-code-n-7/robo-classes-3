import { cartTypes } from "@/types/CartTypes";
export interface CartState {
  cart: cartTypes[];
}

export type Action =
  | { type: "ADD_TO_CART"; product: cartTypes }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "CLEAR_CART" };
