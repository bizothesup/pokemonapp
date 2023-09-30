import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";

const PokemonPages:FunctionComponent = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};
export default PokemonPages;