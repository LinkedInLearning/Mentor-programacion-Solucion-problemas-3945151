
const menuItems = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Mercados", path: "/mercados" },
    { titulo: "Noticias", path: "/noticias" },
    { titulo: "Análisis", path: "/analisis" },
    { titulo: "Contacto", path: "/contacto" }
];


const Sidebar  = () => {
    return (
        <>
            <nav className="sidebar p-3 w-100">
                <div className="container d-flex justify-content-center">
                    <ul className="nav">
                        {menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href={item.path}>
                                    {item.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;