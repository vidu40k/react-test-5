import { DriversStateActions } from "@/redux/slices/driversStateSlice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const allActions = {
    ...DriversStateActions,

};

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
