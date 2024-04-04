import FilterCatalog from "./FilterCatalog"
import CatalogCard from './CatalogCard'

import './Catalog.css'
export default function Catalog() {

    return (
        <>
            <FilterCatalog />
            <div className="catalogContainer">
                <div className="catalogHolder">
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </div>
        </>
    )
}