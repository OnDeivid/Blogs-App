import CatalogCard from '../catalog/CatalogCard';
export default function MyCars() {
    return (
        <>
            <div className="catalogContainer">
                <div className="catalogHolder" style={{marginTop:20}}>

                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />

                </div>
            </div>
        </>
    );
};