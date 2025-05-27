import { TRootStateType } from "@/redux/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TRootStateType> = useSelector;
